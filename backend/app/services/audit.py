from sqlalchemy.orm import Session
from app.models.entities import AuditLog


def audit(db: Session, *, merchant_id: str, case_id: str | None, component: str, event_type: str,
          explanation: str, state_before: str | None = None, state_after: str | None = None,
          result: str = "OK", error: str | None = None) -> None:
    db.add(AuditLog(
        merchant_id=merchant_id, case_id=case_id, component=component, event_type=event_type,
        explanation=explanation, state_before=state_before, state_after=state_after, result=result, error=error,
    ))


def transition(db: Session, case, state: str, explanation: str, component: str = "WORKFLOW") -> None:
    before = case.state
    case.state = state
    audit(db, merchant_id=case.merchant_id, case_id=case.id, component=component,
          event_type="WORKFLOW_TRANSITION", state_before=before, state_after=state, explanation=explanation)
