# API guide

Base URL: `http://localhost:8000/api`. Interactive OpenAPI documentation: `/docs`.

| Method | Endpoint | Purpose |
|---|---|---|
| GET | `/health` | Mode/provider health |
| POST | `/demo/seed` | Reset seed-42 scenarios |
| GET | `/dashboard/metrics` | Database-derived financial metrics |
| GET | `/transactions` | Prioritized recovery queue |
| GET | `/transactions/{case_id}` | Explainable case, diagnosis and audit |
| POST | `/recovery/run` | Run eligible batch |
| GET | `/recovery/cases` | Workflow cases |
| POST | `/recovery/{id}/approve` | Audited merchant approval |
| POST | `/recovery/{id}/reject` | Audited merchant rejection |
| POST | `/recovery/{id}/execute` | Execute after guard check |
| POST | `/demo/simulate-success/{id}` | Simulate verified success |
| POST | `/demo/simulate-provider-failure/{id}` | Predictable safe provider failure |
| POST | `/demo/simulate-duplicate-webhook/{id}` | Demonstrate event idempotency |
| GET | `/analytics` | Computed portfolio slices/baseline |
| GET | `/audit` | Newest audit entries |
| POST | `/webhooks/razorpay` | Signed Razorpay webhook ingestion |

Approval body: `{"approved":true,"note":"Reviewed by merchant operator"}`.

Razorpay webhooks require `X-Razorpay-Signature`. Duplicate events return `{"status":"duplicate_ignored"}` with HTTP 200 so the provider need not retry.
