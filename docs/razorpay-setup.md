# Razorpay Test Mode setup

The adapter follows Razorpay's current official Payment Links and webhook guidance:

- [Payment Links APIs](https://razorpay.com/docs/api/payments/payment-links/)
- [Create a Standard Payment Link](https://razorpay.com/docs/api/payments/payment-links/create-standard/)
- [Validate and test webhooks](https://razorpay.com/docs/webhooks/validate-test/)

1. Generate **Test Mode** key ID/secret in the Razorpay dashboard.
2. Copy `.env.example` to `.env` and set:

```env
PAYMENT_PROVIDER=razorpay
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=a-strong-webhook-secret
```

3. Register `https://YOUR_API_HOST/api/webhooks/razorpay` and subscribe to payment capture/payment-link paid events.
4. Use the same webhook secret in Razorpay and the backend environment.

The server authenticates Payment Link requests with HTTP Basic Auth, sends amount in the smallest currency unit (paise), sets a unique reference ID, and stores only non-secret provider references. Webhook verification computes HMAC-SHA256 over the raw request body and uses constant-time comparison. The event ID is unique; duplicates return success without applying another action.

Never put either secret in browser environment variables or source control. If credentials are absent, the application visibly uses **MOCK PROVIDER**.
