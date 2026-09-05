from datetime import datetime, timedelta, timezone
import random
from sqlalchemy import delete, select
from sqlalchemy.orm import Session
from app.models.entities import (
    AgentDecision, AuditLog, Customer, Merchant, ModelPrediction, Payment, PaymentAttempt,
    RecoveryAction, RecoveryCase, RecoveryWorkflow, User, WebhookEvent,
)


DEMO_USER_EMAIL = "demo@recoveriq.ai"
DEMO_MERCHANT_NAME = "Northstar Commerce"

SCENARIOS = [
    ("Aarav Mehta", 8420, "upi", "bank_timeout", "PREMIUM", 12, 1, 200),
    ("Kabir Rao", 6290, "netbanking", "network_error", "STANDARD", 8, 2, 6),
    ("Neel Joshi", 22750, "upi", "temporary_failure", "PREMIUM", 15, 2, 5),
    ("Mira Shah", 48000, "card", "temporary_failure", "PREMIUM", 18, 1, 4),
    ("Priya Nair", 32000, "upi", "bank_timeout", "PREMIUM", 16, 2, 7),
    ("Ishita Verma", 1199, "upi", "fraud_suspected", "STANDARD", 1, 5, 26),
    ("Sara Khan", 3890, "wallet", "invalid_account", "STANDARD", 2, 5, 40),
    ("Anaya Pillai", 2490, "checkout", "checkout_abandoned_repeated_contacts", "STANDARD", 3, 6, 18),
    ("Riya Bose", 9750, "card", "network_error", "STANDARD", 9, 3, 80),
    ("Dev Malhotra", 18450, "checkout", "temporary_failure", "PREMIUM", 14, 2, 60),
]


def reset_demo_records(db: Session) -> dict:
    demo_merchants = db.scalars(
        select(Merchant).where(
            Merchant.demo_mode.is_(True),
            Merchant.name == DEMO_MERCHANT_NAME,
        ),
    ).all()
    demo_users = db.scalars(select(User).where(User.email == DEMO_USER_EMAIL)).all()
    merchant_ids = [merchant.id for merchant in demo_merchants]

    if not merchant_ids:
        user_ids = [user.id for user in demo_users]
        if user_ids:
            db.execute(delete(User).where(User.id.in_(user_ids)))
            db.commit()
        return {
            "reset": True,
            "scope": "known_demo_records_only",
            "merchants": 0,
            "payments": 0,
            "cases": 0,
        }

    payment_ids = db.scalars(
        select(Payment.id).where(Payment.merchant_id.in_(merchant_ids)),
    ).all()
    case_ids = db.scalars(
        select(RecoveryCase.id).where(RecoveryCase.merchant_id.in_(merchant_ids)),
    ).all()
    customer_ids = db.scalars(
        select(Customer.id).where(Customer.merchant_id.in_(merchant_ids)),
    ).all()
    candidate_user_ids = list({merchant.user_id for merchant in demo_merchants})

    if case_ids:
        db.execute(delete(WebhookEvent).where(WebhookEvent.id.in_([f"demo-duplicate-{case_id}" for case_id in case_ids])))
        db.execute(delete(AuditLog).where(AuditLog.case_id.in_(case_ids)))
        db.execute(delete(AgentDecision).where(AgentDecision.case_id.in_(case_ids)))
        db.execute(delete(ModelPrediction).where(ModelPrediction.case_id.in_(case_ids)))
        db.execute(delete(RecoveryAction).where(RecoveryAction.case_id.in_(case_ids)))
        db.execute(delete(RecoveryWorkflow).where(RecoveryWorkflow.case_id.in_(case_ids)))
        db.execute(delete(RecoveryCase).where(RecoveryCase.id.in_(case_ids)))

    db.execute(delete(AuditLog).where(AuditLog.merchant_id.in_(merchant_ids)))
    if payment_ids:
        db.execute(delete(PaymentAttempt).where(PaymentAttempt.payment_id.in_(payment_ids)))
        db.execute(delete(Payment).where(Payment.id.in_(payment_ids)))
    if customer_ids:
        db.execute(delete(Customer).where(Customer.id.in_(customer_ids)))

    db.execute(delete(Merchant).where(Merchant.id.in_(merchant_ids)))
    removable_user_ids = [
        user_id
        for user_id in candidate_user_ids
        if not db.scalar(select(Merchant.id).where(Merchant.user_id == user_id).limit(1))
    ]
    removable_user_ids.extend(
        user.id
        for user in demo_users
        if user.id not in removable_user_ids
        and not db.scalar(select(Merchant.id).where(Merchant.user_id == user.id).limit(1))
    )
    if removable_user_ids:
        db.execute(delete(User).where(User.id.in_(removable_user_ids)))
    db.commit()
    return {
        "reset": True,
        "scope": "known_demo_records_only",
        "merchants": len(merchant_ids),
        "payments": len(payment_ids),
        "cases": len(case_ids),
    }


def reset_and_seed(db: Session, seed: int = 42) -> dict:
    random.seed(seed)
    reset_demo_records(db)
    user = User(email=DEMO_USER_EMAIL, name="Razorpay Buildathon Judge")
    db.add(user); db.flush()
    merchant = Merchant(user_id=user.id, name=DEMO_MERCHANT_NAME, demo_mode=True)
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
