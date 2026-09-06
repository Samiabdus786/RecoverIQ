import hashlib
import hmac
import json
import httpx
from app.core.config import get_settings
from app.payments.providers import RazorpayProvider
from ml.training.generate import generate_dataset


def test_dataset_has_signal_and_expected_shape():
    df = generate_dataset(2000, seed=42)
    assert len(df) == 2000 and set(df.recovered.unique()) == {0, 1}
    temporary = df[df.failure_reason == "temporary_failure"].recovered.mean()
    hard = df[df.failure_reason == "fraud_suspected"].recovered.mean()
    assert temporary > hard


def test_invalid_webhook_signature(client):
    response = client.post("/api/webhooks/razorpay", content=b"{}", headers={"x-razorpay-signature": "bad"})
    assert response.status_code == 401


def test_valid_and_duplicate_webhook(client):
    payload = {"event": "payment.failed", "payload": {}}
    body = json.dumps(payload, separators=(",", ":")).encode()
    signature = hmac.new(get_settings().razorpay_webhook_secret.encode(), body, hashlib.sha256).hexdigest()
    headers = {"x-razorpay-signature": signature, "x-razorpay-event-id": "evt_test_duplicate", "content-type": "application/json"}
    first = client.post("/api/webhooks/razorpay", content=body, headers=headers)
    second = client.post("/api/webhooks/razorpay", content=body, headers=headers)
    assert first.json()["status"] == "processed"
    assert second.json()["status"] == "duplicate_ignored"


def test_razorpay_http_error_is_sanitized_and_useful(monkeypatch):
    def fail_post(url, **kwargs):
        request = httpx.Request("POST", url)
        response = httpx.Response(
            400,
            json={
                "error": {
                    "code": "BAD_REQUEST_ERROR",
                    "description": "The contact field is invalid.",
                    "field": "customer.contact",
                    "source": "business",
                    "reason": "input_validation_failed",
                    "step": "payment_link_creation",
                },
            },
            request=request,
        )
        raise httpx.HTTPStatusError("bad request", request=request, response=response)

    monkeypatch.setattr("app.payments.providers.httpx.post", fail_post)
    result = RazorpayProvider("rzp_test_example", "secret_example").create_payment_link(
        amount=5000,
        currency="INR",
        reference_id="case_123",
        customer={"name": "Demo", "email": "demo@example.com", "contact": "bad"},
    )

    assert not result.success
    assert "status_code=400" in result.error
    assert "code=BAD_REQUEST_ERROR" in result.error
    assert "description=The contact field is invalid." in result.error
    assert "secret_example" not in result.error
    assert result.raw["provider_error"]["field"] == "customer.contact"


def test_razorpay_payment_link_webhook_recovers_once_and_stops(client):
    client.post("/api/recovery/run")
    case = next(x for x in client.get("/api/recovery/cases").json() if x["state"] == "MONITORING")
    payload = {
        "event": "payment_link.paid",
        "payload": {
            "payment_link": {
                "entity": {
                    "notes": {"recoveriq_reference": case["id"]},
                },
            },
        },
    }
    body = json.dumps(payload, separators=(",", ":")).encode()
    signature = hmac.new(get_settings().razorpay_webhook_secret.encode(), body, hashlib.sha256).hexdigest()
    headers = {"x-razorpay-signature": signature, "x-razorpay-event-id": "evt_test_paid_once", "content-type": "application/json"}

    first = client.post("/api/webhooks/razorpay", content=body, headers=headers)
    second = client.post("/api/webhooks/razorpay", content=body, headers=headers)

    assert first.json()["status"] == "processed"
    assert second.json()["status"] == "duplicate_ignored"
    recovered = client.get(f"/api/recovery/{case['id']}").json()
    assert recovered["state"] == "RECOVERED"
    metrics = client.get("/api/dashboard/metrics").json()
    assert metrics["revenue_recovered"] == case["amount"]
    audit = client.get("/api/audit").json()
    assert any(row["case_id"] == case["id"] and row["event_type"] == "STOPPING_RULE_APPLIED" for row in audit)
