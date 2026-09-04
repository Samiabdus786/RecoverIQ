# RecoverIQ Architecture

## System Flow

```mermaid
flowchart TB
    A[Merchant event, Razorpay webhook, or simulator] --> B[Revenue-at-risk detection]
    B --> C[(Supabase/PostgreSQL)]
    B --> D[XGBoost recovery probability]
    D --> E[Gemini structured diagnosis or deterministic fallback]
    E --> F[LangGraph bounded workflow]
    F --> G{Deterministic guardrails}
    G -->|Approved| H[Payment provider abstraction]
    G -->|High value| I[Human approval]
    G -->|Rejected| J[Stop and audit]
    I --> G
    H --> K[Razorpay Test Mode or explicit Mock Provider]
    K --> L[Webhook and outcome monitoring]
    L --> M[Recovered or stopped state]
    M --> C
    C --> N[Dashboard metrics and audit trail]
```

RecoverIQ's operating principle is simple:

**AI recommends. Rules authorize.**

The LLM never receives provider credentials, cannot bypass financial guardrails, and cannot independently execute unrestricted financial actions. Provider invocation is a typed server-side method reached only after deterministic authorization.

## Bounded Recovery Workflow

```mermaid
stateDiagram-v2
    [*] --> DETECTED
    DETECTED --> ANALYZING
    ANALYZING --> SCORED
    SCORED --> DIAGNOSED
    DIAGNOSED --> ACTION_SELECTED
    ACTION_SELECTED --> AWAITING_APPROVAL: high value
    ACTION_SELECTED --> EXECUTING: approved
    ACTION_SELECTED --> STOPPED: rejected or do nothing
    AWAITING_APPROVAL --> EXECUTING: merchant approves
    AWAITING_APPROVAL --> STOPPED: merchant rejects
    EXECUTING --> MONITORING
    MONITORING --> RECOVERED: verified payment success
    MONITORING --> EXECUTING: bounded retry under limit
    MONITORING --> STOPPED: terminal outcome or limit
    RECOVERED --> [*]
    STOPPED --> [*]
```

## Guardrail Execution

```mermaid
flowchart TD
    A[AI recommendation] --> B{Already successful?}
    B -->|Yes| H[Reject and stop]
    B -->|No| C{Eligible status and recovery window?}
    C -->|No| H
    C -->|Yes| D{Attempts, contacts, cooldown valid?}
    D -->|No| H
    D -->|Yes| E{Duplicate link or action?}
    E -->|Yes| H
    E -->|No| F{Above value threshold?}
    F -->|Yes| I[Human review]
    F -->|No| G[Authorize exact action]
```

## Verified Webhook Flow

```mermaid
sequenceDiagram
    participant R as Razorpay
    participant A as FastAPI
    participant D as Supabase/PostgreSQL
    participant W as Workflow
    R->>A: POST /api/webhooks/razorpay plus signature
    A->>A: HMAC-SHA256 verify
    A->>D: Insert unique event ID
    alt Duplicate event
        D-->>A: Existing event
        A-->>R: duplicate_ignored
    else New payment success
        A->>W: Mark payment paid
        W->>D: RECOVERED, stop rule, audit
        A-->>R: processed
    end
```

The frontend also includes a Vercel-compatible demo API for the browser demonstration. The authoritative provider, workflow, database, and webhook implementation lives in the FastAPI backend for Render.
