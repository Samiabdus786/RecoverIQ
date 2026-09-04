from __future__ import annotations
from datetime import datetime, timezone
from enum import Enum
from uuid import uuid4
from sqlalchemy import Boolean, DateTime, Float, ForeignKey, Index, Integer, JSON, String, Text, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.database.session import Base


def now() -> datetime:
    return datetime.now(timezone.utc)


def uid() -> str:
    return str(uuid4())


class WorkflowState(str, Enum):
    DETECTED = "DETECTED"
    ANALYZING = "ANALYZING"
    SCORED = "SCORED"
    DIAGNOSED = "DIAGNOSED"
    ACTION_SELECTED = "ACTION_SELECTED"
    AWAITING_APPROVAL = "AWAITING_APPROVAL"
    GUARDRAIL_REJECTED = "GUARDRAIL_REJECTED"
    EXECUTING = "EXECUTING"
    MONITORING = "MONITORING"
    RECOVERED = "RECOVERED"
    ESCALATED = "ESCALATED"
    FAILED = "FAILED"
    STOPPED = "STOPPED"


class User(Base):
    __tablename__ = "users"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(120))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)


class Merchant(Base):
    __tablename__ = "merchants"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(160))
    currency: Mapped[str] = mapped_column(String(3), default="INR")
    demo_mode: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)


class Customer(Base):
    __tablename__ = "customers"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    merchant_id: Mapped[str] = mapped_column(ForeignKey("merchants.id"), index=True)
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(255))
    phone: Mapped[str] = mapped_column(String(30))
    value_segment: Mapped[str] = mapped_column(String(20), default="STANDARD")
    age_days: Mapped[int] = mapped_column(Integer, default=1)
    previous_success_count: Mapped[int] = mapped_column(Integer, default=0)
    previous_failure_count: Mapped[int] = mapped_column(Integer, default=0)
    previous_recovery_count: Mapped[int] = mapped_column(Integer, default=0)


class Payment(Base):
    __tablename__ = "payments"
    __table_args__ = (Index("ix_payments_merchant_status", "merchant_id", "status"),)
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    merchant_id: Mapped[str] = mapped_column(ForeignKey("merchants.id"), index=True)
    customer_id: Mapped[str] = mapped_column(ForeignKey("customers.id"), index=True)
    external_id: Mapped[str | None] = mapped_column(String(100), unique=True, nullable=True)
    amount: Mapped[float] = mapped_column(Float)
    currency: Mapped[str] = mapped_column(String(3), default="INR")
    method: Mapped[str] = mapped_column(String(30))
    failure_reason: Mapped[str] = mapped_column(String(50))
    status: Mapped[str] = mapped_column(String(30), default="FAILED")
    occurred_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)
    recovered_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    customer: Mapped[Customer] = relationship()


class PaymentAttempt(Base):
    __tablename__ = "payment_attempts"
    __table_args__ = (UniqueConstraint("payment_id", "attempt_number"),)
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    payment_id: Mapped[str] = mapped_column(ForeignKey("payments.id"), index=True)
    attempt_number: Mapped[int] = mapped_column(Integer)
    provider: Mapped[str] = mapped_column(String(30))
    status: Mapped[str] = mapped_column(String(30))
    provider_response: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)


class RecoveryCase(Base):
    __tablename__ = "recovery_cases"
    __table_args__ = (UniqueConstraint("payment_id"), Index("ix_cases_priority_state", "priority", "state"))
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    merchant_id: Mapped[str] = mapped_column(ForeignKey("merchants.id"), index=True)
    payment_id: Mapped[str] = mapped_column(ForeignKey("payments.id"), index=True)
    state: Mapped[str] = mapped_column(String(30), default=WorkflowState.DETECTED.value)
    priority: Mapped[str] = mapped_column(String(20), default="LOW")
    probability: Mapped[float] = mapped_column(Float, default=0)
    expected_value: Mapped[float] = mapped_column(Float, default=0)
    recommended_action: Mapped[str] = mapped_column(String(50), default="DO_NOTHING")
    guardrail_decision: Mapped[str] = mapped_column(String(30), default="PENDING")
    recovery_attempts: Mapped[int] = mapped_column(Integer, default=0)
    customer_contacts: Mapped[int] = mapped_column(Integer, default=0)
    payment_link_id: Mapped[str | None] = mapped_column(String(100), nullable=True)
    payment_link_url: Mapped[str | None] = mapped_column(String(500), nullable=True)
    last_contact_at: Mapped[datetime | None] = mapped_column(DateTime(timezone=True), nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now, onupdate=now)
    payment: Mapped[Payment] = relationship()


class RecoveryAction(Base):
    __tablename__ = "recovery_actions"
    __table_args__ = (UniqueConstraint("idempotency_key"),)
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    case_id: Mapped[str] = mapped_column(ForeignKey("recovery_cases.id"), index=True)
    action_type: Mapped[str] = mapped_column(String(50))
    idempotency_key: Mapped[str] = mapped_column(String(160))
    status: Mapped[str] = mapped_column(String(30))
    cost: Mapped[float] = mapped_column(Float, default=0)
    provider_reference: Mapped[str | None] = mapped_column(String(120), nullable=True)
    result: Mapped[dict | None] = mapped_column(JSON, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)


class RecoveryWorkflow(Base):
    __tablename__ = "recovery_workflows"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    case_id: Mapped[str] = mapped_column(ForeignKey("recovery_cases.id"), index=True)
    current_state: Mapped[str] = mapped_column(String(30))
    version: Mapped[int] = mapped_column(Integer, default=1)
    stopped: Mapped[bool] = mapped_column(Boolean, default=False)
    state_data: Mapped[dict] = mapped_column(JSON, default=dict)
    updated_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now, onupdate=now)


class ModelPrediction(Base):
    __tablename__ = "model_predictions"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    case_id: Mapped[str] = mapped_column(ForeignKey("recovery_cases.id"), index=True)
    model_version: Mapped[str] = mapped_column(String(50))
    probability: Mapped[float] = mapped_column(Float)
    threshold: Mapped[float] = mapped_column(Float)
    features: Mapped[dict] = mapped_column(JSON)
    fallback_used: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)


class AgentDecision(Base):
    __tablename__ = "agent_decisions"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    case_id: Mapped[str] = mapped_column(ForeignKey("recovery_cases.id"), index=True)
    provider: Mapped[str] = mapped_column(String(30))
    cause: Mapped[str] = mapped_column(String(60))
    summary: Mapped[str] = mapped_column(Text)
    recommended_action: Mapped[str] = mapped_column(String(50))
    confidence: Mapped[float] = mapped_column(Float)
    reasoning_summary: Mapped[str] = mapped_column(Text)
    fallback_used: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)


class AuditLog(Base):
    __tablename__ = "audit_logs"
    id: Mapped[str] = mapped_column(String(36), primary_key=True, default=uid)
    merchant_id: Mapped[str] = mapped_column(ForeignKey("merchants.id"), index=True)
    case_id: Mapped[str | None] = mapped_column(ForeignKey("recovery_cases.id"), nullable=True, index=True)
    component: Mapped[str] = mapped_column(String(40))
    event_type: Mapped[str] = mapped_column(String(80), index=True)
    state_before: Mapped[str | None] = mapped_column(String(30), nullable=True)
    state_after: Mapped[str | None] = mapped_column(String(30), nullable=True)
    explanation: Mapped[str] = mapped_column(Text)
    result: Mapped[str] = mapped_column(String(30), default="OK")
    error: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now, index=True)


class WebhookEvent(Base):
    __tablename__ = "webhook_events"
    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    provider: Mapped[str] = mapped_column(String(30))
    event_type: Mapped[str] = mapped_column(String(80))
    payload_hash: Mapped[str] = mapped_column(String(64))
    processed: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=now)
