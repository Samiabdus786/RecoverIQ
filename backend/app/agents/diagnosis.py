import json
from typing import Protocol
import httpx
from pydantic import ValidationError
from app.schemas.domain import Diagnosis, RecoveryActionType


class DiagnosisProvider(Protocol):
    def diagnose(self, context: dict) -> Diagnosis: ...


class DeterministicDiagnosisProvider:
    name = "DEMO / DETERMINISTIC AI MODE"

    def diagnose(self, context: dict) -> Diagnosis:
        probability = float(context["probability"])
        reason = context["failure_reason"]
        amount = float(context["amount"])
        if probability < 0.25 or reason in {"fraud_suspected", "invalid_account", "checkout_abandoned_repeated_contacts"}:
            action = RecoveryActionType.DO_NOTHING
            summary = "Intervention is unlikely to recover enough value safely."
        elif reason in {"network_error", "bank_timeout", "temporary_failure"}:
            action = RecoveryActionType.CREATE_PAYMENT_LINK
            summary = "A temporary rail failure is best resolved with a fresh payment path."
        elif reason in {"insufficient_funds", "checkout_abandoned"}:
            action = RecoveryActionType.SEND_REMINDER
            summary = "A low-pressure reminder after the cooling period is appropriate."
        else:
            action = RecoveryActionType.SUGGEST_ALTERNATE_METHOD
            summary = "Offer a different payment method without repeating the failed rail."
        return Diagnosis(
            cause=reason,
            summary=summary,
            recommended_action=action,
            confidence=min(0.94, max(0.55, probability + 0.08)),
            reasoning_summary=(
                f"Recovery score is {probability:.0%}; amount is ₹{amount:,.0f}; "
                f"the observed failure is {reason.replace('_', ' ')}."
            ),
        )


class GeminiDiagnosisProvider:
    name = "GEMINI"

    def __init__(self, api_key: str, model: str = "gemini-2.5-flash"):
        self.api_key = api_key
        self.model = model

    def diagnose(self, context: dict) -> Diagnosis:
        prompt = (
            "You are a payment recovery diagnosis system. Return JSON only with cause, summary, "
            "recommended_action, confidence, reasoning_summary, communication_tone. "
            "recommended_action must be one of CREATE_PAYMENT_LINK, RETRY, SUGGEST_ALTERNATE_METHOD, "
            "SEND_REMINDER, ESCALATE, HUMAN_APPROVAL, DO_NOTHING. Do not authorize execution.\n" + json.dumps(context)
        )
        response = httpx.post(
            f"https://generativelanguage.googleapis.com/v1beta/models/{self.model}:generateContent",
            params={"key": self.api_key},
            json={"contents": [{"parts": [{"text": prompt}]}], "generationConfig": {"responseMimeType": "application/json"}},
            timeout=12,
        )
        response.raise_for_status()
        raw = response.json()["candidates"][0]["content"]["parts"][0]["text"]
        try:
            return Diagnosis.model_validate_json(raw)
        except ValidationError as exc:
            raise ValueError("Gemini returned an invalid structured diagnosis") from exc


class SafeDiagnosisService:
    def __init__(self, primary: DiagnosisProvider | None):
        self.primary = primary
        self.fallback = DeterministicDiagnosisProvider()

    def diagnose(self, context: dict) -> tuple[Diagnosis, str, bool]:
        if self.primary:
            try:
                return self.primary.diagnose(context), getattr(self.primary, "name", "AI"), False
            except Exception:
                pass
        return self.fallback.diagnose(context), self.fallback.name, True
