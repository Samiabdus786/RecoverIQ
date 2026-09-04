# RecoverIQ architecture

## System

```mermaid
flowchart TB
    A[Razorpay webhook or simulator] --> B[FastAPI ingestion]
    B --> C[(PostgreSQL / SQLite)]
    B --> D[XGBoost scorer]
    D --> E[Gemini or deterministic diagnosis]
    E --> F[LangGraph state workflow]
    F --> G{Deterministic guardrail}
    G -->|Approved| H[Payment provider abstraction]
    G -->|High value| I[Merchant approval]
    G -->|Rejected| J[Stop and audit]
    I --> G
    H --> K[Razorpay Test Mode or mock]
    K --> B
    C --> L[React command center]
```

## Bounded recovery workflow

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
    MONITORING --> RECOVERED: payment success
    MONITORING --> EXECUTING: bounded retry under 2
    MONITORING --> STOPPED: terminal outcome or limit
    RECOVERED --> [*]
    STOPPED --> [*]
```

## Guardrail execution

```mermaid
flowchart TD
    A[AI recommendation] --> B{Already successful?}
    B -->|Yes| H[Reject and stop]
    B -->|No| C{Eligible status and window?}
    C -->|No| H
    C -->|Yes| D{Attempts, contacts, cooldown valid?}
    D -->|No| H
    D -->|Yes| E{Duplicate link or action?}
    E -->|Yes| H
    E -->|No| F{Above value threshold?}
    F -->|Yes| I[Human review]
    F -->|No| G[Authorize exact action]
```

## Verified webhook flow

```mermaid
sequenceDiagram
    participant R as Razorpay
    participant A as FastAPI
    participant D as Database
    participant W as Workflow
    R->>A: POST webhook plus signature
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

The LLM never receives provider credentials or arbitrary execution access. Provider invocation is a typed server-side method reached only after deterministic authorization.
