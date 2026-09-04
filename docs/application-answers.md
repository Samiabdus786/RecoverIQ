# Razorpay Buildathon Application Answers

## Track

AI Revenue Recovery

## Project Name

RecoverIQ

## What It Solves

Failed payments are not one problem: some are temporary and highly recoverable, some need a different payment path, some require human review, and some should never trigger another customer contact. RecoverIQ turns that ambiguity into a measurable closed loop.

XGBoost predicts recovery probability, Gemini or deterministic diagnosis recommends the next intervention, deterministic guardrails authorize or reject it, and a Razorpay Test Mode adapter executes one idempotent action. Webhooks monitor outcomes, success immediately stops outreach, and the dashboard measures Revenue Recovered, Recovery Rate, cost, and Net Recovered Revenue across a synthetic batch.

The core safety principle is: **AI recommends. Rules authorize.**

## What Broke, And How Did You Get Out?

The first end-to-end API run failed in the recovery queue: SQLAlchemy's `joinedload` aliased the payments table, but the sort referenced the unaliased table name, producing `no such column: payments.amount`. Instead of adding brittle SQL alias knowledge, the implementation kept the eager load and sorted the small hydrated recovery batch in application code.

The same run exposed a more important state bug: attempting execution after payment success changed `RECOVERED` to a rejection state. The fix added an executor-level terminal-state short-circuit and a journey test that deliberately calls execute after success. Now success is terminal; the workflow cannot contact or charge again.

## Evidence Boundary

All displayed revenue in the demo is synthetic. Razorpay Test Mode and Mock Mode prove the bounded workflow, idempotency, duplicate-event handling, and audit trail without claiming real merchant revenue.
