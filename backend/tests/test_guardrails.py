from datetime import datetime, timedelta, timezone
from types import SimpleNamespace
from app.core.config import Settings
from app.guardrails.engine import GuardrailEngine
from app.schemas.domain import RecoveryActionType


def objects(**overrides):
    payment = SimpleNamespace(status="FAILED", amount=5000, occurred_at=datetime.now(timezone.utc) - timedelta(hours=2))
    case = SimpleNamespace(state="ACTION_SELECTED", recovery_attempts=0, customer_contacts=0, payment_link_id=None, last_contact_at=None)
    for key, value in overrides.items():
        target, attr = key.split("__")
        setattr(payment if target == "payment" else case, attr, value)
    return case, payment


def test_blocks_after_success():
    case, payment = objects(payment__status="PAID")
    result = GuardrailEngine(Settings()).evaluate(case, payment, RecoveryActionType.SEND_REMINDER)
    assert result.decision == "REJECTED" and "PAYMENT_ALREADY_SUCCESSFUL" in result.reason_codes


def test_blocks_duplicate_payment_link():
    case, payment = objects(case__payment_link_id="plink_existing")
    result = GuardrailEngine(Settings()).evaluate(case, payment, RecoveryActionType.CREATE_PAYMENT_LINK)
    assert "PAYMENT_LINK_ALREADY_EXISTS" in result.reason_codes


def test_limits_attempts_and_contacts():
    case, payment = objects(case__recovery_attempts=2, case__customer_contacts=2)
    result = GuardrailEngine(Settings()).evaluate(case, payment, RecoveryActionType.SEND_REMINDER)
    assert {"MAX_ATTEMPTS_REACHED", "MAX_CONTACTS_REACHED"}.issubset(result.reason_codes)


def test_high_value_requires_human_review():
    case, payment = objects(payment__amount=50000)
    result = GuardrailEngine(Settings()).evaluate(case, payment, RecoveryActionType.CREATE_PAYMENT_LINK)
    assert result.decision == "HUMAN_REVIEW"


def test_do_nothing_is_explicitly_safe():
    case, payment = objects()
    result = GuardrailEngine(Settings()).evaluate(case, payment, RecoveryActionType.DO_NOTHING)
    assert result.decision == "APPROVED" and "SAFE_SUPPRESSION" in result.reason_codes
