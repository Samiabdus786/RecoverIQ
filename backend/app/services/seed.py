from datetime import datetime, timedelta, timezone
import random
from sqlalchemy import delete, select
from sqlalchemy.orm import Session
from app.models.entities import (
    AgentDecision, AuditLog, Customer, Merchant, ModelPrediction, Payment, PaymentAttempt,
    RecoveryAction, RecoveryCase, RecoveryWorkflow, User, WebhookEvent,
)


SCENARIOS = [
    ("Aarav Mehta", 8420, "upi", "bank_timeout", "PREMIUM", 12, 1, 2),
    ("Mira Shah", 48000, "card", "temporary_failure", "PREMIUM", 18, 1, 4),
    ("Kabir Rao", 6290, "netbanking", "network_error", "STANDARD", 8, 2, 6),
    ("Ishita Verma", 1199, "upi", "fraud_suspected", "STANDARD", 1, 5, 26),
    ("Arjun Iyer", 15490, "card", "insufficient_funds", "PREMIUM", 21, 3, 9),
    ("Sara Khan", 3890, "wallet", "invalid_account", "STANDARD", 2, 5, 40),
    ("Neel Joshi", 22750, "upi", "temporary_failure", "PREMIUM", 15, 2, 5),
    ("Riya Bose", 9750, "card", "bank_decline", "STANDARD", 9, 3, 14),
    ("Dev Malhotra", 18450, "checkout", "checkout_abandoned", "PREMIUM", 14, 2, 3),
    ("Anaya Pillai", 2490, "checkout", "checkout_abandoned_repeated_contacts", "STANDARD", 3, 6, 18),
]


def reset_and_seed(db: Session, seed: int = 42) -> dict:
    random.seed(seed)
    for model in [WebhookEvent, AuditLog, AgentDecision, ModelPrediction, RecoveryAction, RecoveryWorkflow,
                  RecoveryCase, PaymentAttempt, Payment, Customer, Merchant, User]:
        db.execute(delete(model))
    user = User(email="demo@recoveriq.ai", name="Razorpay Buildathon Judge")
    db.add(user); db.flush()
    merchant = Merchant(user_id=user.id, name="Northstar Commerce", demo_mode=True)
    db.add(merchant); db.flush()
    for index, (name, amount, method, reason, segment, successes, failures, hours) in enumerate(SCENARIOS):
        customer = Customer(
            merchant_id=merchant.id, name=name, email=f"demo{index}@example.com", phone=f"+919000000{index:03d}",
            value_segment=segment, age_days=90 + index * 41, previous_success_count=successes,
            previous_failure_count=failures, previous_recovery_count=index % 3,
        )
        db.add(customer); db.flush()
        payment = Payment(
            merchant_id=merchant.id, customer_id=customer.id, external_id=f"pay_demo_{index+1:03d}",
            amount=amount, method=method, failure_reason=reason, status="FAILED",
            occurred_at=datetime.now(timezone.utc) - timedelta(hours=hours),
        )
        db.add(payment); db.flush()
        case = RecoveryCase(merchant_id=merchant.id, payment_id=payment.id)
        db.add(case); db.flush()
        db.add(RecoveryWorkflow(case_id=case.id, current_state="DETECTED", state_data={"scenario": chr(65 + index) if index < 5 else "queue"}))
        event_type = "CHECKOUT_ABANDONED" if method == "checkout" else "PAYMENT_AT_RISK"
        explanation = (
            f"Abandoned checkout detected before payment completion ({reason})."
            if method == "checkout"
            else f"Failed {method} payment detected ({reason})."
        )
        db.add(AuditLog(merchant_id=merchant.id, case_id=case.id, component="DETECTOR", event_type=event_type,
                        state_after="DETECTED", explanation=explanation))
    db.commit()
    return {"merchant_id": merchant.id, "payments": len(SCENARIOS), "seed": seed}


def ensure_seeded(db: Session, seed: int = 42) -> None:
    if db.scalar(select(Merchant.id).limit(1)) is None:
        reset_and_seed(db, seed)
