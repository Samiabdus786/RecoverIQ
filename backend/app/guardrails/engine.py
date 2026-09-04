from datetime import datetime, timezone
from app.core.config import Settings
from app.models.entities import Payment, RecoveryCase
from app.schemas.domain import GuardrailResult, RecoveryActionType


CONTACT_ACTIONS = {
    RecoveryActionType.CREATE_PAYMENT_LINK,
    RecoveryActionType.SEND_REMINDER,
    RecoveryActionType.SUGGEST_ALTERNATE_METHOD,
}


class GuardrailEngine:
    """Final deterministic authority for every financial/customer-facing action."""

    def __init__(self, settings: Settings):
        self.settings = settings

    def evaluate(self, case: RecoveryCase, payment: Payment, action: RecoveryActionType) -> GuardrailResult:
        reasons: list[str] = []
        now = datetime.now(timezone.utc)
        occurred = payment.occurred_at
        if occurred.tzinfo is None:
            occurred = occurred.replace(tzinfo=timezone.utc)
        age_hours = (now - occurred).total_seconds() / 3600

        if payment.status == "PAID" or case.state == "RECOVERED":
            reasons.append("PAYMENT_ALREADY_SUCCESSFUL")
        if payment.status in {"CANCELLED", "REFUNDED"}:
            reasons.append("INELIGIBLE_PAYMENT_STATUS")
        if age_hours > self.settings.recovery_window_hours:
            reasons.append("OUTSIDE_RECOVERY_WINDOW")
        if case.recovery_attempts >= self.settings.recovery_max_attempts:
            reasons.append("MAX_ATTEMPTS_REACHED")
        if action in CONTACT_ACTIONS and case.customer_contacts >= self.settings.recovery_max_contacts:
            reasons.append("MAX_CONTACTS_REACHED")
        if action == RecoveryActionType.CREATE_PAYMENT_LINK and case.payment_link_id:
            reasons.append("PAYMENT_LINK_ALREADY_EXISTS")
        if action in CONTACT_ACTIONS and case.last_contact_at:
            contacted = case.last_contact_at
            if contacted.tzinfo is None:
                contacted = contacted.replace(tzinfo=timezone.utc)
            elapsed = (now - contacted).total_seconds() / 60
            if elapsed < self.settings.min_contact_delay_minutes:
                reasons.append("CONTACT_COOLDOWN_ACTIVE")
        if reasons:
            return GuardrailResult(decision="REJECTED", reason_codes=reasons)
        if action == RecoveryActionType.DO_NOTHING:
            return GuardrailResult(decision="APPROVED", reason_codes=["SAFE_SUPPRESSION"], allowed_action=action)
        if payment.amount >= self.settings.high_value_approval_threshold:
            return GuardrailResult(decision="HUMAN_REVIEW", reason_codes=["HIGH_VALUE_APPROVAL_REQUIRED"])
        return GuardrailResult(decision="APPROVED", reason_codes=["ALL_RULES_PASSED"], allowed_action=action)
