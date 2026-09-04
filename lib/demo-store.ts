export type CaseState =
  | "DETECTED"
  | "MONITORING"
  | "AWAITING_APPROVAL"
  | "RECOVERED"
  | "FAILED"
  | "STOPPED";
export type DemoCase = {
  id: string;
  customer: string;
  email: string;
  amount: number;
  method: string;
  failure: string;
  probability: number;
  expectedValue: number;
  priority: string;
  action: string;
  guardrail: string;
  state: CaseState;
  successes: number;
  failures: number;
  providerRef?: string;
  paymentLinkUrl?: string;
  operationStatus?: string;
  webhookStatus?: string;
  attempts?: number;
  ageHours?: number;
};
export type DemoSettings = {
  autoRecovery: boolean;
  approvalThreshold: number;
  maxAttempts: number;
  maxContacts: number;
  recoveryWindowHours: number;
};
export const DEFAULT_DEMO_SETTINGS: DemoSettings = {
  autoRecovery: true,
  approvalThreshold: 25000,
  maxAttempts: 2,
  maxContacts: 2,
  recoveryWindowHours: 168,
};
export type AuditEvent = {
  time: string;
  caseId: string;
  component: string;
  event: string;
  detail: string;
  result: string;
};
type GeminiDiagnosis = {
  cause?: string;
  summary?: string;
  recommended_action?: string;
  confidence?: number;
  reasoning_summary?: string;
  communication_tone?: string;
};

const SAFE_ACTIONS = new Set([
  "CREATE_PAYMENT_LINK",
  "RETRY",
  "SUGGEST_ALTERNATE_METHOD",
  "SEND_REMINDER",
  "ESCALATE",
  "HUMAN_APPROVAL",
  "DO_NOTHING",
]);

const original: DemoCase[] = [
  {
    id: "pay_demo_001",
    customer: "Aarav Mehta",
    email: "aarav@example.com",
    amount: 8420,
    method: "UPI",
    failure: "Bank timeout",
    probability: 0.91,
    expectedValue: 7658.7,
    priority: "HIGH",
    action: "CREATE_PAYMENT_LINK",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 12,
    failures: 1,
  },
  {
    id: "pay_demo_002",
    customer: "Mira Shah",
    email: "mira@example.com",
    amount: 48000,
    method: "Card",
    failure: "Temporary failure",
    probability: 0.87,
    expectedValue: 41676.5,
    priority: "HIGH",
    action: "CREATE_PAYMENT_LINK",
    guardrail: "HUMAN_REVIEW",
    state: "DETECTED",
    successes: 18,
    failures: 1,
  },
  {
    id: "pay_demo_003",
    customer: "Kabir Rao",
    email: "kabir@example.com",
    amount: 6290,
    method: "Netbanking",
    failure: "Network error",
    probability: 0.78,
    expectedValue: 4902.7,
    priority: "HIGH",
    action: "CREATE_PAYMENT_LINK",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 8,
    failures: 2,
  },
  {
    id: "pay_demo_004",
    customer: "Ishita Verma",
    email: "ishita@example.com",
    amount: 1199,
    method: "UPI",
    failure: "Fraud suspected",
    probability: 0.11,
    expectedValue: 131.9,
    priority: "SUPPRESSED",
    action: "DO_NOTHING",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 1,
    failures: 5,
  },
  {
    id: "pay_demo_005",
    customer: "Arjun Iyer",
    email: "arjun@example.com",
    amount: 15490,
    method: "Card",
    failure: "Insufficient funds",
    probability: 0.61,
    expectedValue: 9448.1,
    priority: "MEDIUM",
    action: "SEND_REMINDER",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 21,
    failures: 3,
  },
  {
    id: "pay_demo_006",
    customer: "Sara Khan",
    email: "sara@example.com",
    amount: 3890,
    method: "Wallet",
    failure: "Invalid account",
    probability: 0.15,
    expectedValue: 583.5,
    priority: "SUPPRESSED",
    action: "DO_NOTHING",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 2,
    failures: 5,
  },
  {
    id: "pay_demo_007",
    customer: "Neel Joshi",
    email: "neel@example.com",
    amount: 22750,
    method: "UPI",
    failure: "Temporary failure",
    probability: 0.84,
    expectedValue: 19096.5,
    priority: "HIGH",
    action: "CREATE_PAYMENT_LINK",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 15,
    failures: 2,
  },
  {
    id: "pay_demo_008",
    customer: "Riya Bose",
    email: "riya@example.com",
    amount: 9750,
    method: "Card",
    failure: "Bank decline",
    probability: 0.43,
    expectedValue: 4190,
    priority: "LOW",
    action: "SUGGEST_ALTERNATE_METHOD",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 9,
    failures: 3,
  },
  {
    id: "chk_demo_009",
    customer: "Dev Malhotra",
    email: "dev@example.com",
    amount: 18450,
    method: "Checkout",
    failure: "Checkout abandoned",
    probability: 0.69,
    expectedValue: 12728.1,
    priority: "MEDIUM",
    action: "SEND_REMINDER",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 14,
    failures: 2,
  },
  {
    id: "chk_demo_010",
    customer: "Anaya Pillai",
    email: "anaya@example.com",
    amount: 2490,
    method: "Checkout",
    failure: "Checkout abandoned after repeated contacts",
    probability: 0.18,
    expectedValue: 448.2,
    priority: "SUPPRESSED",
    action: "DO_NOTHING",
    guardrail: "APPROVED",
    state: "DETECTED",
    successes: 3,
    failures: 6,
    ageHours: 190,
  },
];

type Store = {
  cases: DemoCase[];
  audit: AuditEvent[];
  batchRuns: number;
  duplicateIgnored: boolean;
  settings: DemoSettings;
  webhookEvents: string[];
};
const globalStore = globalThis as typeof globalThis & { recoveriqDemo?: Store };

function seededAudit(): AuditEvent[] {
  return original.slice(0, 7).map((item, i) => ({
    time: `14:0${i}:1${i}`,
    caseId: item.id,
    component: "DETECTOR",
    event: item.method === "Checkout" ? "CHECKOUT_ABANDONED" : "PAYMENT_AT_RISK",
    detail:
      item.method === "Checkout"
        ? `${item.failure} detected before payment completion.`
        : `${item.failure} detected on ${item.method} payment.`,
    result: "DETECTED",
  }));
}

export function store(): Store {
  globalStore.recoveriqDemo ??= {
    cases: structuredClone(original),
    audit: seededAudit(),
    batchRuns: 0,
    duplicateIgnored: false,
    settings: { ...DEFAULT_DEMO_SETTINGS },
    webhookEvents: [],
  };
  // Hot-reload-safe migration for preview processes created before settings existed.
  globalStore.recoveriqDemo.settings = {
    ...DEFAULT_DEMO_SETTINGS,
    ...globalStore.recoveriqDemo.settings,
  };
  globalStore.recoveriqDemo.webhookEvents ??= [];
  return globalStore.recoveriqDemo;
}

export function resetDemo() {
  const settings = globalStore.recoveriqDemo?.settings ?? {
    ...DEFAULT_DEMO_SETTINGS,
  };
  globalStore.recoveriqDemo = {
    cases: structuredClone(original),
    audit: seededAudit(),
    batchRuns: 0,
    duplicateIgnored: false,
    settings,
    webhookEvents: [],
  };
  return snapshot();
}

export function updateSettings(input: Partial<DemoSettings>) {
  const current = store().settings;
  const threshold = Number(input.approvalThreshold);
  const attempts = Number(input.maxAttempts);
  const contacts = Number(input.maxContacts);
  const windowHours = Number(input.recoveryWindowHours);
  store().settings = {
    autoRecovery:
      typeof input.autoRecovery === "boolean"
        ? input.autoRecovery
        : current.autoRecovery,
    approvalThreshold: Number.isFinite(threshold)
      ? Math.min(100000, Math.max(5000, Math.round(threshold / 5000) * 5000))
      : current.approvalThreshold,
    maxAttempts: Number.isFinite(attempts)
      ? Math.min(4, Math.max(1, Math.round(attempts)))
      : current.maxAttempts,
    maxContacts: Number.isFinite(contacts)
      ? Math.min(4, Math.max(0, Math.round(contacts)))
      : current.maxContacts,
    recoveryWindowHours: Number.isFinite(windowHours)
      ? Math.min(336, Math.max(24, Math.round(windowHours / 24) * 24))
      : current.recoveryWindowHours,
  };
  store().audit.unshift({
    time: now(),
    caseId: "POLICY",
    component: "MERCHANT",
    event: "RECOVERY_POLICY_UPDATED",
    detail: `Approval threshold ₹${store().settings.approvalThreshold.toLocaleString("en-IN")}; maximum ${store().settings.maxAttempts} attempts.`,
    result: "SAVED",
  });
  return snapshot();
}

function now() {
  return new Date().toLocaleTimeString("en-IN", { hour12: false });
}
function log(
  item: DemoCase,
  component: string,
  event: string,
  detail: string,
  result: string,
) {
  store().audit.unshift({
    time: now(),
    caseId: item.id,
    component,
    event,
    detail,
    result,
  });
}

function configuredProviderName() {
  return process.env.PAYMENT_PROVIDER === "razorpay" &&
    process.env.RAZORPAY_KEY_ID &&
    process.env.RAZORPAY_KEY_SECRET
    ? "RAZORPAY TEST MODE"
    : "MOCK PROVIDER";
}

function configuredAiMode() {
  return process.env.GEMINI_API_KEY
    ? "GEMINI LIVE DIAGNOSIS / DETERMINISTIC GUARDRAILS"
    : "DEMO / DETERMINISTIC AI MODE";
}

function fallbackDiagnosis(item: DemoCase): GeminiDiagnosis {
  return {
    cause: item.failure,
    summary: `${item.action.replaceAll("_", " ")} selected from recovery score and failure reason.`,
    recommended_action: item.action,
    confidence: Math.min(0.94, Math.max(0.55, item.probability + 0.08)),
    reasoning_summary: `Recovery score is ${Math.round(item.probability * 100)}%; expected value is ₹${item.expectedValue.toLocaleString("en-IN")}.`,
    communication_tone: "concise",
  };
}

async function diagnoseWithGemini(item: DemoCase) {
  if (!process.env.GEMINI_API_KEY) {
    return { diagnosis: fallbackDiagnosis(item), provider: "DEMO", fallback: true };
  }

  const prompt = [
    "You are RecoverIQ's payment recovery diagnosis system.",
    "Return JSON only with cause, summary, recommended_action, confidence, reasoning_summary, communication_tone.",
    "recommended_action must be one of CREATE_PAYMENT_LINK, RETRY, SUGGEST_ALTERNATE_METHOD, SEND_REMINDER, ESCALATE, HUMAN_APPROVAL, DO_NOTHING.",
    "You may recommend, but you must not authorize or execute financial actions.",
    JSON.stringify({
      case_id: item.id,
      amount_inr: item.amount,
      payment_method: item.method,
      failure_reason: item.failure,
      recovery_probability: item.probability,
      expected_value_inr: item.expectedValue,
      previous_successes: item.successes,
      previous_failures: item.failures,
      deterministic_recommended_action: item.action,
      deterministic_priority: item.priority,
    }),
  ].join("\n");

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent" +
        `?key=${encodeURIComponent(process.env.GEMINI_API_KEY)}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseMimeType: "application/json" },
        }),
      },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const body = (await response.json()) as {
      candidates?: { content?: { parts?: { text?: string }[] } }[];
    };
    const raw = body.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!raw) throw new Error("Gemini returned an empty diagnosis");
    const diagnosis = JSON.parse(raw) as GeminiDiagnosis;
    if (
      !diagnosis.summary ||
      !diagnosis.recommended_action ||
      !SAFE_ACTIONS.has(diagnosis.recommended_action)
    ) {
      throw new Error("Gemini returned an unsafe diagnosis shape");
    }
    return { diagnosis, provider: "GEMINI", fallback: false };
  } catch {
    return {
      diagnosis: fallbackDiagnosis(item),
      provider: "DEMO FALLBACK",
      fallback: true,
    };
  }
}

async function createProviderAction(item: DemoCase) {
  if (
    item.action !== "CREATE_PAYMENT_LINK" ||
    configuredProviderName() !== "RAZORPAY TEST MODE"
  ) {
    item.providerRef = `plink_mock_${item.id.slice(-3)}`;
    return {
      ok: true,
      detail:
        item.action === "CREATE_PAYMENT_LINK"
          ? "Mock provider created one idempotent recovery action."
          : "Demo action recorded without a payment link.",
      result: "MONITORING",
    };
  }

  const auth = btoa(
    `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`,
  );
  const providerReferenceId = `${item.id}-${Date.now().toString(36)}`.slice(
    0,
    40,
  );
  const response = await fetch("https://api.razorpay.com/v1/payment_links", {
    method: "POST",
    headers: {
      authorization: `Basic ${auth}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      amount: Math.round(item.amount * 100),
      currency: "INR",
      accept_partial: false,
      reference_id: providerReferenceId,
      description: `RecoverIQ recovery for ${item.id}`,
      customer: {
        name: item.customer,
        email: item.email,
      },
      notify: {
        sms: false,
        email: true,
      },
      reminder_enable: false,
      notes: {
        recoveriq_reference: item.id.slice(0, 40),
      },
    }),
  });

  if (!response.ok) {
    let reason = `HTTP ${response.status}`;
    try {
      const body = (await response.json()) as { error?: { description?: string } };
      reason = body.error?.description || reason;
    } catch {
      // Keep the compact HTTP status if Razorpay does not return JSON.
    }
    return {
      ok: false,
      detail: `Razorpay payment link failed: ${reason}`,
      result: "FAILED",
    };
  }

  const body = (await response.json()) as {
    id?: string;
    short_url?: string;
  };
  item.providerRef = body.id;
  item.paymentLinkUrl = body.short_url;
  return {
    ok: true,
    detail: "Razorpay Test Mode created one payment link.",
    result: "MONITORING",
  };
}

async function executeAuthorizedAction(item: DemoCase, detail: string) {
  if (item.paymentLinkUrl) {
    item.operationStatus = "Payment link already exists. Duplicate creation blocked.";
    log(
      item,
      "GUARDRAIL",
      "DUPLICATE_LINK_BLOCKED",
      "Existing payment link retained; no duplicate Razorpay action was created.",
      "BLOCKED",
    );
    return;
  }
  if ((item.ageHours ?? 24) > store().settings.recoveryWindowHours) {
    item.state = "STOPPED";
    item.operationStatus = "Recovery window expired. Workflow stopped.";
    log(
      item,
      "GUARDRAIL",
      "OUTSIDE_RECOVERY_WINDOW",
      "Configured recovery window expired before execution.",
      "BLOCKED",
    );
    return;
  }
  if ((item.attempts ?? 0) >= store().settings.maxAttempts) {
    item.state = "STOPPED";
    item.operationStatus = "Maximum recovery attempts reached. Workflow stopped.";
    log(
      item,
      "GUARDRAIL",
      "MAX_ATTEMPTS_REACHED",
      "Configured attempt ceiling blocked another recovery action.",
      "BLOCKED",
    );
    return;
  }
  if (
    ["CREATE_PAYMENT_LINK", "SEND_REMINDER", "SUGGEST_ALTERNATE_METHOD"].includes(
      item.action,
    ) &&
    (item.attempts ?? 0) >= store().settings.maxContacts
  ) {
    item.state = "STOPPED";
    item.operationStatus = "Maximum customer contacts reached. Workflow stopped.";
    log(
      item,
      "GUARDRAIL",
      "MAX_CONTACTS_REACHED",
      "Configured contact ceiling blocked another customer-facing action.",
      "BLOCKED",
    );
    return;
  }
  item.state = "MONITORING";
  item.guardrail = "APPROVED";
  item.attempts = (item.attempts ?? 0) + 1;
  log(item, "GUARDRAIL", "ACTION_AUTHORIZED", detail, "APPROVED");
  const provider = await createProviderAction(item);
  if (!provider.ok) {
    item.state = "FAILED";
    item.operationStatus = provider.detail;
  } else {
    item.operationStatus = provider.detail;
  }
  log(
    item,
    "PROVIDER",
    provider.ok ? "PAYMENT_LINK_CREATED" : "PAYMENT_LINK_CREATION_ATTEMPT",
    provider.detail,
    provider.result,
  );
}

export async function runBatch() {
  const s = store();
  s.batchRuns += 1;
  for (const item of s.cases) {
    if (item.state !== "DETECTED") continue;
    log(
      item,
      "ML",
      "RECOVERY_SCORED",
      `XGBoost probability ${Math.round(item.probability * 100)}%.`,
      "SCORED",
    );
    const ai = await diagnoseWithGemini(item);
    const recommendation = ai.diagnosis.recommended_action || item.action;
    if (
      SAFE_ACTIONS.has(recommendation) &&
      item.priority !== "SUPPRESSED" &&
      recommendation !== "HUMAN_APPROVAL"
    ) {
      item.action = recommendation;
    }
    log(
      item,
      "AI",
      ai.fallback ? "ACTION_SELECTED_FALLBACK" : "GEMINI_DIAGNOSIS",
      `${ai.provider}: ${ai.diagnosis.summary || item.action}; action ${item.action}; expected value ₹${item.expectedValue.toLocaleString("en-IN")}.`,
      ai.fallback ? "FALLBACK" : "RECOMMENDED",
    );
    if (item.priority === "SUPPRESSED") {
      item.state = "STOPPED";
      log(
        item,
        "GUARDRAIL",
        "SAFE_SUPPRESSION",
        "Intervention suppressed; no customer contact.",
        "APPROVED",
      );
    } else if (
      !s.settings.autoRecovery ||
      item.amount >= s.settings.approvalThreshold
    ) {
      item.state = "AWAITING_APPROVAL";
      item.guardrail = "HUMAN_REVIEW";
      log(
        item,
        "GUARDRAIL",
        "HUMAN_APPROVAL_REQUIRED",
        !s.settings.autoRecovery
          ? "Automatic execution disabled by merchant policy."
          : `High-value threshold ₹${s.settings.approvalThreshold.toLocaleString("en-IN")} crossed.`,
        "PAUSED",
      );
    } else {
      await executeAuthorizedAction(
        item,
        "Deterministic rules approved bounded execution.",
      );
    }
  }
  return snapshot();
}

export async function act(type: string, id?: string) {
  if (type === "seed") return resetDemo();
  if (type === "run") return runBatch();
  let item = store().cases.find((c) => c.id === id);
  if (!item) throw new Error("Case not found");
  if (type === "success" && item.state === "DETECTED") {
    await runBatch();
    item = store().cases.find((c) => c.id === id)!;
  }
  if (type === "execute" && item.paymentLinkUrl) {
    item.operationStatus =
      "Payment link already exists. Duplicate creation blocked.";
    log(
      item,
      "GUARDRAIL",
      "DUPLICATE_LINK_BLOCKED",
      "Existing payment link retained; no duplicate Razorpay action was created.",
      "BLOCKED",
    );
  } else if (type === "execute" && ["DETECTED", "FAILED"].includes(item.state)) {
    if (item.priority === "SUPPRESSED" || item.action === "DO_NOTHING") {
      item.state = "STOPPED";
      log(
        item,
        "GUARDRAIL",
        "SAFE_SUPPRESSION",
        "Intervention suppressed; no customer contact.",
        "APPROVED",
      );
    } else if (
      !store().settings.autoRecovery ||
      item.amount >= store().settings.approvalThreshold
    ) {
      item.state = "AWAITING_APPROVAL";
      item.guardrail = "HUMAN_REVIEW";
      log(
        item,
        "GUARDRAIL",
        "HUMAN_APPROVAL_REQUIRED",
        !store().settings.autoRecovery
          ? "Automatic execution disabled by merchant policy."
          : `High-value threshold ₹${store().settings.approvalThreshold.toLocaleString("en-IN")} crossed.`,
        "PAUSED",
      );
    } else {
      await executeAuthorizedAction(
        item,
        "Merchant manually triggered an eligible recovery action.",
      );
    }
  } else if (type === "approve" && item.state === "AWAITING_APPROVAL") {
    if ((item.attempts ?? 0) >= store().settings.maxAttempts)
      throw new Error("Maximum recovery attempts reached");
    log(
      item,
      "MERCHANT",
      "HUMAN_APPROVAL",
      "Merchant approved the high-value recovery action.",
      "APPROVED",
    );
    await executeAuthorizedAction(
      item,
      "Action executed only after approval.",
    );
  } else if (type === "reject" && item.state === "AWAITING_APPROVAL") {
    item.state = "STOPPED";
    item.operationStatus = "Merchant rejected the proposed recovery action.";
    log(
      item,
      "MERCHANT",
      "HUMAN_APPROVAL_REJECTED",
      "Merchant rejected the high-value recovery action; workflow stopped.",
      "REJECTED",
    );
    log(
      item,
      "GUARDRAIL",
      "STOPPING_RULE_APPLIED",
      "No customer contact or provider action is allowed after rejection.",
      "STOPPED",
    );
  } else if (type === "success" && item.state === "MONITORING") {
    item.state = "RECOVERED";
    item.operationStatus = "Payment captured and recovery workflow stopped.";
    log(
      item,
      "WEBHOOK",
      "PAYMENT_CAPTURED",
      "Payment recovered; workflow stopped immediately.",
      "RECOVERED",
    );
    log(
      item,
      "GUARDRAIL",
      "STOPPING_RULE_APPLIED",
      "No further contacts or actions are allowed.",
      "STOPPED",
    );
  } else if (type === "failure") {
    if (item.paymentLinkUrl || item.state === "RECOVERED") {
      item.operationStatus =
        "Provider failure test ignored because a payment link already exists or payment is complete.";
      log(
        item,
        "PROVIDER",
        "PROVIDER_FAILURE_IGNORED",
        "Existing successful or monitoring payment flow retained; case state was not changed.",
        "IGNORED",
      );
      return snapshot();
    }
    item.state = "FAILED";
    item.operationStatus =
      "Provider failure simulated safely before any successful payment link was created.";
    log(
      item,
      "PROVIDER",
      "PROVIDER_FAILURE",
      "Simulated timeout; action key retained and no duplicate created.",
      "SAFE_FAILURE",
    );
  } else if (type === "duplicate") {
    store().duplicateIgnored = true;
    item.webhookStatus = "Duplicate webhook ignored safely. No duplicate action created.";
    item.operationStatus = item.webhookStatus;
    log(
      item,
      "WEBHOOK",
      "DUPLICATE_IGNORED",
      "Repeated event ID ignored; 0 duplicate actions.",
      "IGNORED",
    );
  }
  return snapshot();
}

function getRazorpayReference(payload: unknown) {
  const body = payload as {
    payload?: {
      payment?: { entity?: { notes?: Record<string, unknown> } };
      payment_link?: { entity?: { notes?: Record<string, unknown> } };
    };
  };
  const paymentNotes = body.payload?.payment?.entity?.notes;
  const linkNotes = body.payload?.payment_link?.entity?.notes;
  const reference =
    paymentNotes?.recoveriq_reference || linkNotes?.recoveriq_reference;
  return typeof reference === "string" ? reference : "";
}

export function processRazorpayWebhook(payload: unknown, eventId: string) {
  const s = store();
  if (s.webhookEvents.includes(eventId)) {
    s.duplicateIgnored = true;
    return {
      status: "duplicate_ignored",
      eventId,
      duplicateActions: 0,
      snapshot: snapshot(),
    };
  }

  s.webhookEvents.push(eventId);
  const event = (payload as { event?: string }).event || "unknown";
  const caseId = getRazorpayReference(payload);
  const item = s.cases.find((caseItem) => caseItem.id === caseId);

  if (
    item &&
    ["payment.captured", "payment_link.paid"].includes(event) &&
    item.state !== "RECOVERED"
  ) {
    item.state = "RECOVERED";
    item.operationStatus = "Razorpay Test Mode payment verified; workflow stopped.";
    item.webhookStatus = "Verified Razorpay webhook processed exactly once.";
    log(
      item,
      "WEBHOOK",
      "RAZORPAY_PAYMENT_VERIFIED",
      "Signed Razorpay webhook matched this recovery case.",
      "RECOVERED",
    );
    log(
      item,
      "GUARDRAIL",
      "STOPPING_RULE_APPLIED",
      "No further customer contact or provider action is allowed.",
      "STOPPED",
    );
  } else if (item) {
    item.webhookStatus = `Razorpay webhook ${event} recorded without recovery state change.`;
    log(
      item,
      "WEBHOOK",
      "RAZORPAY_EVENT_RECORDED",
      item.webhookStatus,
      "RECORDED",
    );
  }

  return {
    status: "processed",
    eventId,
    caseId,
    recovered: item?.state === "RECOVERED",
    snapshot: snapshot(),
  };
}

export function snapshot() {
  const s = store();
  const recovered = s.cases.filter((c) => c.state === "RECOVERED");
  const atRisk = s.cases
    .filter((c) => c.state !== "RECOVERED")
    .reduce((a, c) => a + c.amount, 0);
  const revenue = recovered.reduce((a, c) => a + c.amount, 0);
  const actions = s.cases.filter(
    (c) =>
      c.state === "MONITORING" ||
      c.state === "RECOVERED" ||
      c.state === "FAILED",
  ).length;
  const cost = actions * 3.5;
  return {
    mode: "SIMULATION · SYNTHETIC DATA",
    aiMode: configuredAiMode(),
    provider: configuredProviderName(),
    cases: s.cases,
    audit: s.audit,
    duplicateIgnored: s.duplicateIgnored,
    settings: s.settings,
    policyImpact: {
      automaticCases: s.settings.autoRecovery
        ? s.cases.filter(
            (c) =>
              c.priority !== "SUPPRESSED" &&
              c.amount < s.settings.approvalThreshold,
          ).length
        : 0,
      reviewCases: s.cases.filter(
        (c) =>
          c.priority !== "SUPPRESSED" &&
          (!s.settings.autoRecovery ||
            c.amount >= s.settings.approvalThreshold),
      ).length,
      suppressedCases: s.cases.filter((c) => c.priority === "SUPPRESSED")
        .length,
      expectedValue: s.cases
        .filter((c) => c.priority !== "SUPPRESSED")
        .reduce((sum, c) => sum + c.expectedValue, 0),
    },
    metrics: {
      atRisk,
      recovered: revenue,
      netRecovered: revenue - cost,
      recoveryRate: s.batchRuns ? (recovered.length / s.cases.length) * 100 : 0,
      analyzed: s.batchRuns ? s.cases.length : 0,
      successes: recovered.length,
      active: s.cases.filter((c) =>
        ["MONITORING", "AWAITING_APPROVAL", "FAILED"].includes(c.state),
      ).length,
      avgMinutes: recovered.length ? 4.8 : 0,
    },
    timeline: [
      { day: "Aug 23", risk: 61000, recovered: 0 },
      { day: "Aug 24", risk: 82200, recovered: 0 },
      { day: "Aug 25", risk: 95600, recovered: revenue * 0.2 },
      { day: "Aug 26", risk: 110300, recovered: revenue * 0.48 },
      { day: "Aug 27", risk: 136200, recovered: revenue * 0.72 },
      { day: "Aug 28", risk: atRisk, recovered: revenue },
    ],
  };
}
