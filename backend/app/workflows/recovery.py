from datetime import datetime, timezone
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session
from app.agents.diagnosis import SafeDiagnosisService
from app.core.config import Settings
from app.guardrails.engine import CONTACT_ACTIONS, GuardrailEngine
from app.ml.predictor import RecoveryPredictor
from app.models.entities import AgentDecision, ModelPrediction, RecoveryAction, RecoveryCase, RecoveryWorkflow
from app.payments.providers import MockPaymentProvider, PaymentProvider
from app.schemas.domain import RecoveryActionType
from app.services.audit import audit, transition
from app.workflows.graph import build_recovery_graph


ACTION_COSTS = {
    "CREATE_PAYMENT_LINK": 3.5, "RETRY": 1.5, "SUGGEST_ALTERNATE_METHOD": 2.5,
    "SEND_REMINDER": 0.8, "ESCALATE": 180.0, "HUMAN_APPROVAL": 80.0, "DO_NOTHING": 0.0,
}


class RecoveryWorkflowService:
    def __init__(self, settings: Settings, predictor: RecoveryPredictor, diagnosis: SafeDiagnosisService, provider: PaymentProvider):
        self.settings = settings
        self.predictor = predictor
        self.diagnosis = diagnosis
        self.provider = provider
        self.guardrails = GuardrailEngine(settings)
        self.graph = build_recovery_graph()

    def _features(self, case: RecoveryCase) -> dict:
        p, c = case.payment, case.payment.customer
        occurred = p.occurred_at.replace(tzinfo=timezone.utc) if p.occurred_at.tzinfo is None else p.occurred_at
        total = c.previous_success_count + c.previous_failure_count
        return {
            "transaction_amount": p.amount, "customer_age_days": c.age_days,
            "number_previous_transactions": total, "previous_success_count": c.previous_success_count,
            "previous_failure_count": c.previous_failure_count,
            "historical_success_rate": c.previous_success_count / max(total, 1),
            "payment_method": p.method, "failure_reason": p.failure_reason,
            "attempt_number": case.recovery_attempts + 1,
            "hours_since_failure": (datetime.now(timezone.utc) - occurred).total_seconds() / 3600,
            "hour_of_day": occurred.hour, "day_of_week": occurred.weekday(),
            "customer_value_segment": c.value_segment, "previous_recovery_count": c.previous_recovery_count,
            "subscription_status": "active" if c.value_segment == "PREMIUM" else "none",
        }

    def run_case(self, db: Session, case: RecoveryCase) -> RecoveryCase:
        if case.state in {"RECOVERED", "STOPPED"}:
            return case
        transition(db, case, "ANALYZING", "Customer and payment context loaded.")
        features = self._features(case)
        probability, fallback = self.predictor.predict(features)
        case.probability = round(probability, 4)
        db.add(ModelPrediction(case_id=case.id, model_version="xgboost-v1" if not fallback else "deterministic-fallback-v1",
                               probability=probability, threshold=.5, features=features, fallback_used=fallback))
        transition(db, case, "SCORED", f"Recovery probability computed: {probability:.1%}.", "ML")
        diagnosis, provider_name, ai_fallback = self.diagnosis.diagnose({
            "probability": probability, "amount": case.payment.amount, "failure_reason": case.payment.failure_reason,
            "historical_success_rate": features["historical_success_rate"], "attempts": case.recovery_attempts,
        })
        db.add(AgentDecision(case_id=case.id, provider=provider_name, cause=diagnosis.cause, summary=diagnosis.summary,
                             recommended_action=diagnosis.recommended_action.value, confidence=diagnosis.confidence,
                             reasoning_summary=diagnosis.reasoning_summary, fallback_used=ai_fallback))
        transition(db, case, "DIAGNOSED", diagnosis.summary, "AI")
        case.recommended_action = diagnosis.recommended_action.value
        case.expected_value = round(probability * case.payment.amount - ACTION_COSTS[case.recommended_action], 2)
        if diagnosis.recommended_action == RecoveryActionType.DO_NOTHING or case.expected_value <= 0:
            case.priority = "SUPPRESSED"
        elif probability >= .72 and case.expected_value >= 3000:
            case.priority = "HIGH"
        elif probability >= .45:
            case.priority = "MEDIUM"
        else:
            case.priority = "LOW"
        transition(db, case, "ACTION_SELECTED", f"{case.recommended_action} selected; expected recovery value ₹{case.expected_value:,.0f}.", "AI")
        guard = self.guardrails.evaluate(case, case.payment, diagnosis.recommended_action)
        case.guardrail_decision = guard.decision
        audit(db, merchant_id=case.merchant_id, case_id=case.id, component="GUARDRAIL", event_type="GUARDRAIL_DECISION",
              explanation=", ".join(guard.reason_codes), state_before=case.state,
              state_after="AWAITING_APPROVAL" if guard.decision == "HUMAN_REVIEW" else case.state,
              result=guard.decision)
        if guard.decision == "HUMAN_REVIEW":
            transition(db, case, "AWAITING_APPROVAL", "High-value action paused for merchant approval.", "GUARDRAIL")
        elif guard.decision == "REJECTED":
            transition(db, case, "GUARDRAIL_REJECTED", "Deterministic financial safety rule blocked execution.", "GUARDRAIL")
        elif diagnosis.recommended_action == RecoveryActionType.DO_NOTHING:
            transition(db, case, "STOPPED", "Low-value or ineligible intervention safely suppressed.", "GUARDRAIL")
        else:
            self.execute_case(db, case)
        db.commit()
        return case

    def execute_case(self, db: Session, case: RecoveryCase, approved: bool = False) -> RecoveryCase:
        if case.state in {"RECOVERED", "STOPPED"} or case.payment.status == "PAID":
            return case
        if case.state == "AWAITING_APPROVAL" and not approved:
            return case
        action = RecoveryActionType(case.recommended_action)
        if (
            action == RecoveryActionType.CREATE_PAYMENT_LINK
            and case.state == "MONITORING"
            and case.payment_link_id
        ):
            return case
        guard = self.guardrails.evaluate(case, case.payment, action)
        if guard.decision == "HUMAN_REVIEW" and not approved:
            return case
        if guard.decision == "REJECTED":
            transition(db, case, "GUARDRAIL_REJECTED", ", ".join(guard.reason_codes), "GUARDRAIL")
            db.commit(); return case
        key = f"{case.id}:{action.value}:{case.recovery_attempts + 1}"
        if db.scalar(select(RecoveryAction).where(RecoveryAction.idempotency_key == key)):
            return case
        transition(db, case, "EXECUTING", "Authorized action handed to payment provider.")
        result = self.provider.create_payment_link(
            amount=case.payment.amount, currency=case.payment.currency, reference_id=case.id,
            customer={"name": case.payment.customer.name, "email": case.payment.customer.email, "contact": case.payment.customer.phone},
        ) if action == RecoveryActionType.CREATE_PAYMENT_LINK else None
        if result is None:
            result_success, provider_ref, url, error, raw = True, f"mock_{action.value.lower()}", None, None, {"mode": "simulation"}
        else:
            result_success, provider_ref, url, error, raw = result.success, result.provider_reference, result.url, result.error, result.raw
        recovery_action = RecoveryAction(case_id=case.id, action_type=action.value, idempotency_key=key,
                                         status="COMPLETED" if result_success else "FAILED", cost=ACTION_COSTS[action.value],
                                         provider_reference=provider_ref, result=raw or ({"error": error} if error else {}))
        db.add(recovery_action)
        case.recovery_attempts += 1
        if action in CONTACT_ACTIONS:
            case.customer_contacts += 1; case.last_contact_at = datetime.now(timezone.utc)
        if result_success:
            case.payment_link_id = provider_ref if action == RecoveryActionType.CREATE_PAYMENT_LINK else case.payment_link_id
            case.payment_link_url = url or case.payment_link_url
            transition(db, case, "MONITORING", "Action completed once; waiting for payment outcome.", "PROVIDER")
        else:
            transition(db, case, "FAILED", "Provider failed safely; action key retained to prevent duplicates.", "PROVIDER")
            audit(db, merchant_id=case.merchant_id, case_id=case.id, component="PROVIDER", event_type="PROVIDER_FAILURE",
                  explanation="Financial action was not duplicated.", result="FAILED", error=error)
        db.commit()
        return case

    def run_batch(self, db: Session) -> dict:
        cases = db.scalars(select(RecoveryCase).where(RecoveryCase.state.in_(["DETECTED", "FAILED"]))).all()
        for case in cases:
            self.run_case(db, case)
        db.commit()
        return {
            "analyzed": len(cases),
            "high_priority": sum(c.priority == "HIGH" for c in cases),
            "medium_priority": sum(c.priority == "MEDIUM" for c in cases),
            "suppressed": sum(c.priority == "SUPPRESSED" for c in cases),
        }
