# API Guide

## FastAPI Backend

Base URL for local development: `http://localhost:8000/api`

Interactive OpenAPI documentation: `http://localhost:8000/docs`

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Service health, mode, payment provider, and AI provider |
| POST | `/demo/seed` | Reset seed-42 demo scenarios |
| GET | `/dashboard/metrics` | Database-derived Revenue at Risk, Revenue Recovered, Recovery Rate, and Net Recovered Revenue |
| GET | `/transactions` | Prioritized recovery queue |
| GET | `/transactions/{case_id}` | Explainable case detail with diagnosis and audit entries |
| POST | `/recovery/run` | Run the eligible recovery batch |
| GET | `/recovery/cases` | Current workflow cases |
| GET | `/recovery/{case_id}` | Single recovery case detail |
| POST | `/recovery/{case_id}/approve` | Human approval for an awaiting case |
| POST | `/recovery/{case_id}/reject` | Human rejection for an awaiting case |
| POST | `/recovery/{case_id}/execute` | Execute a case after guardrail evaluation |
| POST | `/demo/simulate-success/{case_id}` | Simulate a verified success for demo/testing |
| POST | `/demo/simulate-provider-failure/{case_id}` | Simulate a safe provider failure |
| POST | `/demo/simulate-duplicate-webhook/{case_id}` | Demonstrate duplicate event idempotency |
| GET | `/analytics` | Portfolio slices and baseline comparison |
| GET | `/audit` | Newest audit entries |
| POST | `/webhooks/razorpay` | Signed Razorpay webhook ingestion |

Approval body:

```json
{"approved":true,"note":"Reviewed by merchant operator"}
```

Razorpay webhooks require `X-Razorpay-Signature`. Duplicate events return HTTP 200 with `{"status":"duplicate_ignored"}` so Razorpay does not need to retry.

## Frontend Demo API

The Vercel-compatible frontend includes a small demo API used by the browser experience:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/google` | Verify a Google access token with Google userinfo |
| GET | `/api/demo/state` | Return the current synthetic demo snapshot |
| GET | `/api/demo/settings` | Return demo state and settings |
| POST | `/api/demo/settings` | Validate and save demo policy settings |
| POST | `/api/demo/action` | Run a supported demo action |
| POST | `/api/webhooks/razorpay` | Vercel-side signed demo webhook handler |

The FastAPI backend remains the authoritative implementation for provider execution, database persistence, workflow state, and Render deployment.
