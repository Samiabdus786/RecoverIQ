# Build log

## 2026-08-29 — SQLAlchemy eager-load ordering failure

The first full backend run produced 12 passes and 4 failures. `GET /api/transactions` used `joinedload()` for Payment/Customer but ordered on `payments.amount`. SQLAlchemy generated aliases (`payments_1`) for eager loading while the explicit order referenced a table name absent from `FROM`. SQLite raised `no such column: payments.amount`.

**Recovery:** removed cross-table ordering from the eager-load statement and sorted the eight hydrated cases by `case.payment.amount` after retrieval. This removed dialect-sensitive alias coupling and kept the queue deterministic. The rerun passed all 16 tests present at that stage.

## 2026-08-29 — Success stopping rule could be overwritten

An endpoint-level journey test deliberately called execute after simulated payment success. The executor reran guardrail evaluation and changed `RECOVERED` to `GUARDRAIL_REJECTED`, which prevented an unsafe action but corrupted the terminal state.

**Recovery:** added a terminal-state short-circuit at executor entry: `RECOVERED`, `STOPPED`, or `payment.status == PAID` returns without mutation. The test now proves success is terminal and future actions are suppressed.

## 2026-08-29 — Provider-failure demo depended on action type

The first provider-failure control set `MockPaymentProvider.fail_next`; this only affected link creation, so reminder actions could continue to monitoring.

**Recovery:** the explicit development control now records a provider attempt with a unique idempotency key, moves to `FAILED`, and writes `PROVIDER_FAILURE`. Repeated triggers cannot duplicate the action.

## 2026-08-29 — Build verification

The Vinext production build completed all five environments and emitted dashboard, API, analytics, audit, settings, recovery, and transaction routes.

## 2026-08-29 — Authentication and recruiter-facing QA

The first authentication build passed production compilation but lint rejected a synchronous `setSession` inside a hydration effect. The effect was changed to schedule local-session hydration on the browser task queue, eliminating the cascading-render warning while preserving server/client consistency.

The cloud browser pass verified: new-account and reset screen transitions, Google demo sign-in, seed, batch recovery, high-value approval, case details, payment success, provider failure, duplicate webhook, audit evidence, every navigation item, search shortcut, and sign-out. Application-origin console errors: zero. A locator ambiguity between “Recovery queue” and “Open recovery queue search” was a test selector issue; the test was corrected to exact accessible names without changing application code.

## 2026-08-29 — Revenue reveal and merchant settings QA

Added a 2.1-second post-authentication revenue reveal with a rupee-rain animation, recovered-value counter, progress rail, verified-session signal, and active-guardrail signal. Reduced-motion users receive the same information without animation.

Replaced the developer-only Controls page with a polished Settings control plane. Recovery automation, human-approval threshold, maximum attempts, email/WhatsApp/Slack alerts, save/reset persistence, alert testing, webhook copy fallback, configuration checks, and the three-action safety lab were exercised in the cloud browser. The full production build, lint, backend suite, and application-origin console check completed with zero errors.

## 2026-08-29 — Dynamic portfolio value and engine-backed policy

Removed the fixed ₹4,82,650 transition value. The post-auth reveal now reads `metrics.atRisk` from the current seeded application state and labels it as synthetic portfolio revenue at risk. The value and its label were placed in separate layout rows to eliminate visual overlap across desktop and mobile widths.

Moved Settings from browser-only preferences to the `/api/demo/settings` engine boundary. Inputs are validated and clamped server-side; automatic execution and the human-review threshold now change `runBatch()` decisions. A live policy-impact strip previews automatic, reviewed, and suppressed case counts plus eligible expected value. Browser QA saved a ₹10,000 policy, reset and ran the batch, and verified exactly three cases entered `AWAITING_APPROVAL`; defaults were then restored. Application-origin console errors: zero.

## 2026-08-30 — Submission evidence and setup guard

Added Audit trail CSV export with current at-risk revenue, recovered revenue, net recovered revenue, recovery rate, and all visible state-transition records. Added a no-dependency configuration checker that validates mock/Razorpay mode, Razorpay Test Mode key shape, required secret presence, Gemini fallback status, and SQLite/PostgreSQL selection without displaying secret values. The after-download guide documents the safe order for local verification, API keys, database selection, webhook deployment, and final submission preparation.
