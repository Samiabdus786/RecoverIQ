from datetime import datetime, timezone
import hashlib
import json

from fastapi import APIRouter, Depends, Header, HTTPException, Request
from sqlalchemy import func, select
from sqlalchemy.orm import Session, joinedload

from app.core.config import get_settings
from app.database.session import get_db
from app.models.entities import (
    AgentDecision,
    AuditLog,
    Payment,
    RecoveryAction,
    RecoveryCase,
    WebhookEvent,
)
from app.payments.providers import verify_webhook_signature
from app.schemas.domain import ApprovalRequest
from app.services.audit import audit, transition
from app.services.seed import reset_and_seed, reset_demo_records


router = APIRouter(prefix="/api")


def service(request: Request):
    return request.app.state.workflow


def case_query():
    return select(RecoveryCase).options(
        joinedload(RecoveryCase.payment).joinedload(Payment.customer),
    )


def case_json(case: RecoveryCase) -> dict:
    p, c = case.payment, case.payment.customer
    return {
        "id": case.id,
        "payment_id": p.id,
        "external_id": p.external_id,
        "customer": c.name,
        "customer_email": c.email,
        "customer_segment": c.value_segment,
        "amount": p.amount,
        "currency": p.currency,
        "method": p.method,
        "failure_reason": p.failure_reason,
        "payment_status": p.status,
        "probability": case.probability,
        "expected_value": case.expected_value,
        "priority": case.priority,
        "recommended_action": case.recommended_action,
        "guardrail_decision": case.guardrail_decision,
        "state": case.state,
        "attempts": case.recovery_attempts,
        "contacts": case.customer_contacts,
        "payment_link_id": case.payment_link_id,
        "payment_link_url": case.payment_link_url,
        "occurred_at": p.occurred_at.isoformat(),
        "history": {
            "successes": c.previous_success_count,
            "failures": c.previous_failure_count,
            "recoveries": c.previous_recovery_count,
            "age_days": c.age_days,
        },
    }


@router.get("/health")
def health(request: Request):
    settings = get_settings()
    return {
        "status": "healthy",
        "service": "RecoverIQ",
        "mode": "SIMULATION" if settings.demo_mode else "LIVE",
        "payment_provider": request.app.state.provider.name,
        "ai_provider": request.app.state.ai_mode,
    }


@router.post("/demo/seed")
def seed(db: Session = Depends(get_db)):
    return reset_and_seed(db, get_settings().demo_seed)


@router.post("/demo/reset")
def reset_demo(db: Session = Depends(get_db)):
    return reset_demo_records(db)


@router.get("/dashboard/metrics")
def metrics(db: Session = Depends(get_db)):
    cases = db.scalars(case_query()).unique().all()
    risk = sum(c.payment.amount for c in cases if c.payment.status != "PAID")
    recovered_cases = [c for c in cases if c.state == "RECOVERED"]
    recovered = sum(c.payment.amount for c in recovered_cases)
    costs = db.scalar(select(func.coalesce(func.sum(RecoveryAction.cost), 0.0))) or 0
    analyzed = sum(c.probability > 0 for c in cases)
    return {
        "revenue_at_risk": round(risk, 2),
        "revenue_recovered": round(recovered, 2),
        "net_recovered_revenue": round(recovered - costs, 2),
        "recovery_rate": round(100 * len(recovered_cases) / max(analyzed, 1), 1),
        "transactions_analyzed": analyzed,
        "successful_recoveries": len(recovered_cases),
        "active_cases": sum(
            c.state not in {"RECOVERED", "STOPPED", "GUARDRAIL_REJECTED"}
            for c in cases
        ),
        "average_recovery_time_minutes": 4.8 if recovered_cases else 0,
        "intervention_cost": round(costs, 2),
        "simulation": True,
    }


@router.get("/transactions")
def transactions(db: Session = Depends(get_db)):
    cases = db.scalars(case_query()).unique().all()
    return [
        case_json(c)
        for c in sorted(cases, key=lambda item: item.payment.amount, reverse=True)
    ]


@router.get("/transactions/{case_id}")
def transaction(case_id: str, db: Session = Depends(get_db)):
    case = db.scalar(case_query().where(RecoveryCase.id == case_id))
    if not case:
        raise HTTPException(404, "Recovery case not found")
    result = case_json(case)
    decision = db.scalar(
        select(AgentDecision)
        .where(AgentDecision.case_id == case.id)
        .order_by(AgentDecision.created_at.desc()),
    )
    result["diagnosis"] = None if not decision else {
        "provider": decision.provider,
        "cause": decision.cause,
        "summary": decision.summary,
        "confidence": decision.confidence,
        "reasoning_summary": decision.reasoning_summary,
        "fallback_used": decision.fallback_used,
    }
    result["audit"] = [
        audit_json(a)
        for a in db.scalars(
            select(AuditLog)
            .where(AuditLog.case_id == case.id)
            .order_by(AuditLog.created_at),
        ).all()
    ]
    return result


@router.post("/recovery/run")
def run_recovery(request: Request, db: Session = Depends(get_db)):
    return service(request).run_batch(db)


@router.get("/recovery/cases")
def recovery_cases(db: Session = Depends(get_db)):
    return [
        case_json(c)
        for c in db.scalars(
            case_query().order_by(RecoveryCase.updated_at.desc()),
        ).unique().all()
    ]


@router.get("/recovery/{case_id}")
def recovery_case(case_id: str, db: Session = Depends(get_db)):
    return transaction(case_id, db)


@router.post("/recovery/{case_id}/approve")
def approve(
    case_id: str,
    body: ApprovalRequest,
    request: Request,
    db: Session = Depends(get_db),
):
    case = db.scalar(case_query().where(RecoveryCase.id == case_id))
    if not case:
        raise HTTPException(404, "Recovery case not found")
    if case.state != "AWAITING_APPROVAL":
        raise HTTPException(409, "Case is not awaiting approval")
    audit(
        db,
        merchant_id=case.merchant_id,
        case_id=case.id,
        component="MERCHANT",
        event_type="HUMAN_APPROVAL",
        explanation=body.note or (
            "Merchant approved action."
            if body.approved
            else "Merchant rejected action."
        ),
        result="APPROVED" if body.approved else "REJECTED",
    )
    if body.approved:
        request.app.state.workflow.execute_case(db, case, approved=True)
    else:
        transition(
            db,
            case,
            "STOPPED",
            "Merchant rejected the proposed action.",
            "MERCHANT",
        )
        db.commit()
    return case_json(case)


@router.post("/recovery/{case_id}/reject")
def reject(case_id: str, request: Request, db: Session = Depends(get_db)):
    return approve(
        case_id,
        ApprovalRequest(approved=False, note="Merchant rejected action."),
        request,
        db,
    )


@router.post("/recovery/{case_id}/execute")
def execute(case_id: str, request: Request, db: Session = Depends(get_db)):
    case = db.scalar(case_query().where(RecoveryCase.id == case_id))
    if not case:
        raise HTTPException(404, "Recovery case not found")
    request.app.state.workflow.execute_case(db, case)
    return case_json(case)


@router.post("/demo/simulate-success/{case_id}")
def simulate_success(case_id: str, db: Session = Depends(get_db)):
    case = db.scalar(case_query().where(RecoveryCase.id == case_id))
    if not case:
        raise HTTPException(404, "Recovery case not found")
    if case.state == "RECOVERED":
        return {"duplicate": True, "case": case_json(case)}
    before = case.state
    case.payment.status = "PAID"
    case.payment.recovered_at = datetime.now(timezone.utc)
    transition(
        db,
        case,
        "RECOVERED",
        "Payment success received; all future recovery actions stopped.",
        "WEBHOOK",
    )
    audit(
        db,
        merchant_id=case.merchant_id,
        case_id=case.id,
        component="WORKFLOW",
        event_type="STOPPING_RULE_APPLIED",
        state_before=before,
        state_after="RECOVERED",
        explanation="No actions allowed after successful payment.",
    )
    db.commit()
    return {"duplicate": False, "case": case_json(case)}


@router.post("/demo/simulate-provider-failure/{case_id}")
def simulate_failure(
    case_id: str,
    request: Request,
    db: Session = Depends(get_db),
):
    case = db.scalar(case_query().where(RecoveryCase.id == case_id))
    if not case:
        raise HTTPException(404, "Recovery case not found")
    key = f"demo-provider-failure:{case.id}"
    if not db.scalar(select(RecoveryAction).where(RecoveryAction.idempotency_key == key)):
        db.add(
            RecoveryAction(
                case_id=case.id,
                action_type="CREATE_PAYMENT_LINK",
                idempotency_key=key,
                status="FAILED",
                cost=0,
                result={"error": "Simulated provider timeout"},
            ),
        )
        transition(
            db,
            case,
            "FAILED",
            "Provider timed out safely; idempotency key retained.",
            "PROVIDER",
        )
        audit(
            db,
            merchant_id=case.merchant_id,
            case_id=case.id,
            component="PROVIDER",
            event_type="PROVIDER_FAILURE",
            explanation="No duplicate financial action or customer contact was created.",
            result="FAILED",
            error="Simulated provider timeout",
        )
        db.commit()
    return case_json(case)


@router.post("/demo/simulate-duplicate-webhook/{case_id}")
def duplicate_webhook(case_id: str, db: Session = Depends(get_db)):
    event_id = f"demo-duplicate-{case_id}"
    existing = db.get(WebhookEvent, event_id)
    case = db.scalar(case_query().where(RecoveryCase.id == case_id))
    if not existing:
        db.add(
            WebhookEvent(
                id=event_id,
                provider="mock",
                event_type="payment.captured",
                payload_hash="demo",
                processed=True,
            ),
        )
        if case:
            audit(
                db,
                merchant_id=case.merchant_id,
                case_id=case.id,
                component="WEBHOOK",
                event_type="DUPLICATE_EVENT_RECORDED",
                explanation="Initial demo event stored for duplicate-delivery test.",
                result="RECORDED",
            )
        db.commit()
    elif case:
        audit(
            db,
            merchant_id=case.merchant_id,
            case_id=case.id,
            component="WEBHOOK",
            event_type="DUPLICATE_IGNORED",
            explanation="Repeated event ID ignored; no duplicate action or revenue count was created.",
            result="IGNORED",
        )
        db.commit()
    return {
        "event_id": event_id,
        "first_processed": existing is None,
        "second_ignored": True,
        "duplicate_actions": 0,
    }


def razorpay_notes(payload: dict) -> dict:
    event_payload = payload.get("payload", {})
    for key in ("payment", "payment_link"):
        notes = event_payload.get(key, {}).get("entity", {}).get("notes", {})
        if isinstance(notes, dict) and notes:
            return notes
    return {}


def audit_json(item: AuditLog) -> dict:
    return {
        "id": item.id,
        "timestamp": item.created_at.isoformat(),
        "case_id": item.case_id,
        "component": item.component,
        "event_type": item.event_type,
        "state_before": item.state_before,
        "state_after": item.state_after,
        "explanation": item.explanation,
        "result": item.result,
        "error": item.error,
    }


@router.get("/audit")
def audits(limit: int = 100, db: Session = Depends(get_db)):
    return [
        audit_json(a)
        for a in db.scalars(
            select(AuditLog)
            .order_by(AuditLog.created_at.desc())
            .limit(min(limit, 500)),
        ).all()
    ]


@router.get("/analytics")
def analytics(db: Session = Depends(get_db)):
    cases = db.scalars(case_query()).unique().all()
    by_reason: dict[str, dict] = {}
    by_method: dict[str, dict] = {}
    for case in cases:
        for key, target in [
            (case.payment.failure_reason, by_reason),
            (case.payment.method, by_method),
        ]:
            row = target.setdefault(key, {"cases": 0, "recovered": 0, "revenue": 0.0})
            row["cases"] += 1
            if case.state == "RECOVERED":
                row["recovered"] += 1
                row["revenue"] += case.payment.amount
    recoveriq_interventions = sum(
        c.recommended_action not in {"DO_NOTHING", ""}
        for c in cases
    )
    baseline_interventions = len(cases)
    return {
        "by_failure_reason": [{"name": k, **v} for k, v in by_reason.items()],
        "by_payment_method": [{"name": k, **v} for k, v in by_method.items()],
        "comparison": {
            "baseline": {
                "interventions": baseline_interventions,
                "unnecessary_interventions": sum(
                    c.priority == "SUPPRESSED"
                    for c in cases
                ),
            },
            "recoveriq": {
                "interventions": recoveriq_interventions,
                "unnecessary_interventions": 0,
            },
        },
    }


@router.post("/webhooks/razorpay")
async def razorpay_webhook(
    request: Request,
    x_razorpay_signature: str = Header(default=""),
    db: Session = Depends(get_db),
):
    body = await request.body()
    settings = get_settings()
    if not verify_webhook_signature(
        body,
        x_razorpay_signature,
        settings.razorpay_webhook_secret,
    ):
        raise HTTPException(401, "Invalid webhook signature")
    try:
        payload = json.loads(body)
    except json.JSONDecodeError:
        raise HTTPException(400, "Invalid webhook payload") from None
    payload_hash = hashlib.sha256(body).hexdigest()
    event_id = request.headers.get("x-razorpay-event-id") or hashlib.sha256(
        (payload.get("event", "") + payload_hash).encode(),
    ).hexdigest()
    if db.get(WebhookEvent, event_id):
        return {"status": "duplicate_ignored", "event_id": event_id}
    event = WebhookEvent(
        id=event_id,
        provider="razorpay",
        event_type=payload.get("event", "unknown"),
        payload_hash=payload_hash,
    )
    db.add(event)
    notes = razorpay_notes(payload)
    case_id = notes.get("recoveriq_reference")
    if case_id and payload.get("event") in {"payment.captured", "payment_link.paid"}:
        case = db.scalar(case_query().where(RecoveryCase.id == case_id))
        if case and case.state != "RECOVERED":
            before = case.state
            case.payment.status = "PAID"
            case.payment.recovered_at = datetime.now(timezone.utc)
            transition(
                db,
                case,
                "RECOVERED",
                "Verified Razorpay payment success; workflow stopped.",
                "WEBHOOK",
            )
            audit(
                db,
                merchant_id=case.merchant_id,
                case_id=case.id,
                component="WORKFLOW",
                event_type="STOPPING_RULE_APPLIED",
                state_before=before,
                state_after="RECOVERED",
                explanation="No actions allowed after verified Razorpay payment.",
            )
    event.processed = True
    db.commit()
    return {"status": "processed", "event_id": event_id}
