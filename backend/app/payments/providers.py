from __future__ import annotations
import hashlib
import hmac
from dataclasses import dataclass
from typing import Protocol
from uuid import uuid4
import httpx


@dataclass
class ProviderResult:
    success: bool
    provider_reference: str | None = None
    url: str | None = None
    error: str | None = None
    raw: dict | None = None


class PaymentProvider(Protocol):
    name: str
    def create_payment_link(self, *, amount: float, currency: str, reference_id: str, customer: dict) -> ProviderResult: ...


class MockPaymentProvider:
    name = "MOCK PROVIDER"

    def __init__(self):
        self.fail_next = False

    def create_payment_link(self, *, amount: float, currency: str, reference_id: str, customer: dict) -> ProviderResult:
        if self.fail_next:
            self.fail_next = False
            return ProviderResult(success=False, error="Simulated provider timeout")
        ref = f"plink_mock_{uuid4().hex[:12]}"
        return ProviderResult(True, ref, f"https://mock.recoveriq.local/pay/{ref}", raw={"mode": "simulation"})


class RazorpayProvider:
    """Razorpay Test Mode adapter using Basic Auth and smallest currency units."""
    name = "RAZORPAY TEST MODE"

    def __init__(self, key_id: str, key_secret: str):
        self.auth = (key_id, key_secret)
        self.base_url = "https://api.razorpay.com/v1"

    def create_payment_link(self, *, amount: float, currency: str, reference_id: str, customer: dict) -> ProviderResult:
        payload = {
            "amount": int(round(amount * 100)),
            "currency": currency,
            "accept_partial": False,
            "reference_id": reference_id[:40],
            "description": f"RecoverIQ recovery for {reference_id}",
            "customer": customer,
            "notify": {"sms": True, "email": True},
            "reminder_enable": False,
            "notes": {"recoveriq_reference": reference_id[:40]},
        }
        try:
            response = httpx.post(f"{self.base_url}/payment_links", auth=self.auth, json=payload, timeout=10)
            response.raise_for_status()
            data = response.json()
            return ProviderResult(True, data["id"], data["short_url"], raw={"status": data.get("status")})
        except httpx.HTTPError as exc:
            return ProviderResult(False, error=f"Razorpay request failed: {type(exc).__name__}")


def verify_webhook_signature(body: bytes, signature: str, secret: str) -> bool:
    expected = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)
