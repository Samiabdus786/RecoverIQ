# Razorpay Test Mode Setup

The backend adapter uses Razorpay Payment Links in Test Mode and verifies Razorpay webhooks with HMAC-SHA256 over the raw request body.

Helpful Razorpay references:

- [Payment Links APIs](https://razorpay.com/docs/api/payments/payment-links/)
- [Create a Standard Payment Link](https://razorpay.com/docs/api/payments/payment-links/create-standard/)
- [Validate and test webhooks](https://razorpay.com/docs/webhooks/validate-test/)

## Environment

Use placeholders in committed files and real values only in local or hosted environment variables:

```env
PAYMENT_PROVIDER=razorpay
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
```

`RAZORPAY_KEY_SECRET` and `RAZORPAY_WEBHOOK_SECRET` are server-only. Never expose them through `NEXT_PUBLIC_` or `VITE_` variables.

## Payment Link Creation

When `PAYMENT_PROVIDER=razorpay` and both Razorpay key values are present, the FastAPI backend uses `RazorpayProvider`. It:

- authenticates to `https://api.razorpay.com/v1/payment_links` with HTTP Basic Auth;
- sends amount in paise;
- creates a non-partial payment link;
- sets a bounded `reference_id`;
- adds `notes.recoveriq_reference` so webhooks can map the event back to the recovery case;
- returns the Razorpay payment link ID and short URL.

If Razorpay returns a provider error, the action is recorded as failed and no duplicate financial action is created by that attempt.

## Webhook Endpoint

Register the backend endpoint:

```text
https://YOUR_RENDER_BACKEND/api/webhooks/razorpay
```

The FastAPI route accepts `payment.captured` and `payment_link.paid` as successful recovery signals when the webhook payload contains `notes.recoveriq_reference`.

Required header:

```text
X-Razorpay-Signature
```

The route verifies the signature with `RAZORPAY_WEBHOOK_SECRET`. Invalid signatures return HTTP 401. Invalid JSON returns HTTP 400.

## Duplicate Handling And Stopping

Webhook event IDs are stored in the database. If Razorpay redelivers the same event, RecoverIQ returns:

```json
{"status":"duplicate_ignored","event_id":"..."}
```

A valid first success event marks the payment `PAID`, moves the case to `RECOVERED`, records a stopping-rule audit event, and prevents future recovery actions for that case.

## Mock Mode

`PAYMENT_PROVIDER=mock` is an explicit deterministic demo mode. It creates local mock payment links and supports safe provider-failure and duplicate-webhook demonstrations. Mock Mode is not presented as real recovered merchant revenue.
