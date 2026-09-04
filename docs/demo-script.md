# Five-Minute Demo Script

## 0:00-0:30 - The Leakage

Begin on the payment-themed login screen:

"A failed payment is not automatically lost revenue, but treating every failure the same wastes contacts, harms trust, and misses the cases most likely to pay. RecoverIQ turns failed payments into a bounded, measurable recovery workflow."

Click **Explore the judge demo**. The sign-in transition reads its value from the current eight-case synthetic portfolio. Point to the simulation labels so the reviewer knows the data and money are synthetic.

## 0:30-1:00 - Command Center

Open **Command center**. Lead with **Revenue at Risk**, **Revenue Recovered**, **Recovery Rate**, and **Net Recovered Revenue**.

Say: "Every number is calculated from the current application state. Nothing on this screen claims production merchant revenue."

Point to the operating principle: **AI recommends. Rules authorize.**

## 1:00-2:00 - Run Recovery

Click **Seed demo**, then **Run recovery**. Explain the sequence:

```text
load history -> XGBoost probability -> Gemini/deterministic diagnosis -> expected value -> guardrail -> one provider action
```

Show high-priority, medium-priority, and suppressed cases. Call out that RecoverIQ deliberately chooses `DO_NOTHING` for unsafe or uneconomic cases.

## 2:00-3:00 - Explain One Decision

Open a high-confidence recovery case. Show:

- recovery probability;
- historical payment context;
- diagnosis and reason summary;
- expected recovery value;
- recommended action;
- deterministic guardrail decision.

Open the high-value INR 48,000 case. The recommendation may be economically attractive, but the configurable INR 25,000 rule requires human approval. Click **Approve action** and explain that Gemini cannot bypass this pause.

## 3:00-3:45 - Prove Recovery

On a monitoring case, click **Simulate success**. Return to the command center and show **Revenue Recovered** and **Net Recovered Revenue** increasing.

Re-open the case. Its state is `RECOVERED`; the stopping rule blocks future action.

## 3:45-4:20 - Fail Safely

Open **Settings** and show the merchant-controlled approval threshold, attempt ceiling, and alert channels. Move the threshold and point to **Live policy impact**.

Trigger **Test duplicate webhook**. Explain that the stable event ID produces zero duplicate actions. Provider-failure behavior can also be shown from a case detail.

## 4:20-5:00 - Evidence And Close

Open **Audit trail**. Show ML score, AI recommendation, guardrail decision, provider result, webhook, and stop event. Open **Analytics** for baseline-versus-selective intervention.

Close with:

"RecoverIQ does not just generate advice. It detects, predicts, decides, guards, executes, monitors, stops, and measures, with Razorpay at the action and outcome boundary."
