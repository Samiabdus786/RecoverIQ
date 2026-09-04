from enum import Enum
from pydantic import BaseModel, Field


class RecoveryActionType(str, Enum):
    CREATE_PAYMENT_LINK = "CREATE_PAYMENT_LINK"
    RETRY = "RETRY"
    SUGGEST_ALTERNATE_METHOD = "SUGGEST_ALTERNATE_METHOD"
    SEND_REMINDER = "SEND_REMINDER"
    ESCALATE = "ESCALATE"
    HUMAN_APPROVAL = "HUMAN_APPROVAL"
    DO_NOTHING = "DO_NOTHING"


class Diagnosis(BaseModel):
    cause: str
    summary: str
    recommended_action: RecoveryActionType
    confidence: float = Field(ge=0, le=1)
    reasoning_summary: str
    communication_tone: str = "professional"


class GuardrailResult(BaseModel):
    decision: str
    reason_codes: list[str]
    allowed_action: RecoveryActionType | None = None


class ApprovalRequest(BaseModel):
    approved: bool
    note: str | None = Field(default=None, max_length=500)
