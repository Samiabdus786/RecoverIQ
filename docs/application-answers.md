# Razorpay Buildathon application answers

## Track

AI Revenue Recovery

## Project name

RecoverIQ

## What it solves

Failed payments are not one problem: some are temporary and highly recoverable, some need a different payment path, some require human review, and some should never trigger another customer contact. RecoverIQ turns that ambiguity into a measurable closed loop. XGBoost predicts recovery probability, structured AI diagnoses context and recommends the next intervention, deterministic guardrails authorize or reject it, and a Razorpay Test Mode adapter executes one idempotent action. Webhooks monitor outcomes, success immediately stops outreach, and the dashboard proves revenue recovered, cost, and net value across a batch. It provides useful AI judgment without giving an LLM control of financial safety.

## What broke, and how did you get out?

Our first end-to-end API run failed in the recovery queue: SQLAlchemy's `joinedload` aliased the payments table, but our sort referenced the unaliased name, producing `no such column: payments.amount`. Instead of adding brittle SQL alias knowledge, we kept the eager load and sorted the small hydrated recovery batch in application code. The same run exposed a more important state bug: attempting execution after payment success changed `RECOVERED` to a rejection state. We added an executor-level terminal-state short-circuit and a journey test that deliberately calls execute after success. Now success is truly terminal—the workflow cannot contact or charge again.
