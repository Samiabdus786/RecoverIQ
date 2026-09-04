# Five-minute demo script

## 0:00–0:30 — The leakage

Begin on the payment-themed login screen. “A failed payment is not automatically lost revenue—but treating every failure the same wastes contacts, harms trust, and misses the cases most likely to pay. RecoverIQ turns failed payments into a bounded, measurable recovery workflow.” Click **Explore the judge demo**. The rupee transition reads its value from the current eight-case synthetic portfolio rather than showing a fixed claim; point to the simulation labels so the judge knows the data and money are synthetic.

## 0:30–1:00 — Command center

Open **Command center**. Lead with **Revenue at Risk** and **Revenue Recovered**. Explain: “Every number is calculated from the current application state. Nothing on this screen claims production merchant revenue.” Point to “AI recommends. Rules authorize.”

## 1:00–2:00 — Run recovery

Click **Seed demo**, then **Run recovery**. Explain the live sequence: load history → XGBoost probability → diagnosis → expected recovery value → guardrail → one provider action. Show high, medium, and suppressed cases. Call out that RecoverIQ deliberately chooses `DO_NOTHING` for unsafe/uneconomic cases.

## 2:00–3:00 — Explain one decision

Open Aarav Mehta. Show 91% recovery probability, 12/13 historical successes, bank timeout diagnosis, ₹7,659 expected value, payment-link recommendation, and deterministic approval. Do not describe hidden chain-of-thought; use the displayed reason summary.

Open Mira Shah. The recommended action is economically attractive, but ₹48,000 crosses the ₹25,000 rule. Click **Approve action**. Explain that the LLM cannot bypass this pause.

## 3:00–3:45 — Prove recovery

On a monitoring case click **Simulate success**. Return to the command center. Show **Revenue Recovered** and **Net Recovered Revenue** increasing. Re-open the case: state is `RECOVERED`; the stopping rule blocks future action.

## 3:45–4:20 — Fail safely

Open **Settings** and show the merchant-controlled approval threshold, attempt ceiling, and alert channels. Move the threshold and point to **Live policy impact**; save it, reset the dataset, and run the pipeline to prove the updated engine policy changes which cases pause for human review. Then trigger **Test duplicate webhook**. Explain that the stable event ID produces `0 duplicate actions`. Provider-failure behavior can also be shown from a case detail.

## 4:20–5:00 — Evidence and close

Open **Audit trail**. Show ML score, AI recommendation, guardrail decision, provider result, webhook, and stop event. Open Analytics for baseline-vs-selective intervention. Close: “RecoverIQ does not just generate advice. It detects, predicts, decides, guards, executes, monitors, stops, and measures—with Razorpay at the action and outcome boundary.”
