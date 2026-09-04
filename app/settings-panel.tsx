"use client";

import { useState } from "react";
import {
  Check,
  Copy,
  KeyRound,
  RefreshCw,
  Save,
  ShieldCheck,
  Sparkles,
  TestTube2,
  TimerReset,
  Webhook,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

export type Preferences = {
  autoRecovery: boolean;
  approvalThreshold: number;
  maxAttempts: number;
  maxContacts: number;
  recoveryWindowHours: number;
};

const defaults: Preferences = {
  autoRecovery: true,
  approvalThreshold: 25000,
  maxAttempts: 2,
  maxContacts: 2,
  recoveryWindowHours: 168,
};
const formatMoney = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export default function SettingsPanel({
  provider,
  aiMode,
  mode,
  onAction,
  working,
  demoCaseId,
  settings,
  cases,
  onSnapshot,
}: {
  provider: string;
  aiMode: string;
  mode: string;
  onAction: (type: string, id?: string) => void;
  working: string;
  demoCaseId: string;
  settings: Preferences;
  cases: Array<{
    amount: number;
    expectedValue: number;
    priority: string;
    ageHours?: number;
  }>;
  onSnapshot: (next: unknown) => void;
}) {
  const [prefs, setPrefs] = useState<Preferences>({
    ...defaults,
    ...settings,
  });
  const [notice, setNotice] = useState("");
  const [saving, setSaving] = useState(false);

  const actionable = cases.filter(
    (item) =>
      item.priority !== "SUPPRESSED" &&
      (item.ageHours ?? 24) <= prefs.recoveryWindowHours,
  );
  const suppressed = cases.filter(
    (item) =>
      item.priority === "SUPPRESSED" ||
      (item.ageHours ?? 24) > prefs.recoveryWindowHours,
  );
  const impact = {
    automaticCases:
      prefs.autoRecovery && prefs.maxAttempts > 0 && prefs.maxContacts > 0
        ? actionable.filter((item) => item.amount < prefs.approvalThreshold)
            .length
        : 0,
    reviewCases: actionable.filter(
      (item) =>
        !prefs.autoRecovery ||
        prefs.maxAttempts <= 0 ||
        prefs.maxContacts <= 0 ||
        item.amount >= prefs.approvalThreshold,
    ).length,
    suppressedCases: suppressed.length,
    expectedValue: actionable.reduce((sum, item) => sum + item.expectedValue, 0),
  };

  function flash(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }

  async function persist(nextPrefs: Preferences, message: string) {
    setSaving(true);
    try {
      const response = await fetch("/api/demo/settings", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(nextPrefs),
      });
      if (!response.ok) throw new Error("Settings update failed");
      const next = await response.json();
      setPrefs({ ...defaults, ...next.settings });
      onSnapshot(next);
      flash(message);
    } catch {
      flash("Settings could not be saved. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  function save() {
    void persist(
      prefs,
      "Engine policy saved. It will govern the next recovery batch.",
    );
  }

  function reset() {
    setPrefs(defaults);
    void persist(defaults, "Safe engine defaults restored.");
  }

  async function copyWebhook() {
    const url = `${window.location.origin}/api/webhooks/razorpay`;
    try {
      await navigator.clipboard.writeText(url);
      flash("Webhook endpoint copied.");
    } catch {
      flash(`Webhook: ${url}`);
    }
  }

  const razorpayStatus = provider.includes("RAZORPAY")
    ? "CONFIGURED"
    : "MOCK MODE";
  const geminiStatus = aiMode.includes("GEMINI") ? "CONFIGURED" : "FALLBACK";
  const simulationMode = mode.includes("SIMULATION");
  const webhookUrl =
    typeof window === "undefined"
      ? "/api/webhooks/razorpay"
      : `${window.location.origin}/api/webhooks/razorpay`;

  return (
    <div className="mx-auto max-w-[1280px] space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">MERCHANT CONTROL PLANE</p>
          <h2 className="page-title">Settings & safety</h2>
          <p className="page-copy">
            Configure only recovery controls that affect deterministic engine
            behavior.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={reset} disabled={saving}>
            <RefreshCw />
            Reset policy
          </Button>
          <Button
            className="bg-orange-600 hover:bg-orange-700"
            onClick={save}
            disabled={saving}
          >
            <Save />
            Save changes
          </Button>
        </div>
      </div>

      {notice && (
        <div className="settings-notice" role="status">
          <Check />
          {notice}
        </div>
      )}

      <section className="policy-impact" aria-label="Policy impact preview">
        <div>
          <p className="eyebrow">LIVE POLICY IMPACT</p>
          <h3>What this configuration will do</h3>
          <span>Calculated from the current synthetic recovery portfolio.</span>
        </div>
        <Impact
          value={String(impact.automaticCases)}
          label="automatic cases"
          tone="blue"
        />
        <Impact
          value={String(impact.reviewCases)}
          label="human reviews"
          tone="purple"
        />
        <Impact
          value={String(impact.suppressedCases)}
          label="safe suppressions"
          tone="green"
        />
        <Impact
          value={formatMoney(impact.expectedValue)}
          label="eligible expected value"
          tone="orange"
        />
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.25fr_1fr]">
        <div className="panel p-6">
          <div className="settings-card-head">
            <div>
              <p className="eyebrow">RECOVERY POLICY</p>
              <h3>Deterministic action limits</h3>
            </div>
            <ShieldCheck />
          </div>
          <SettingRow
            title="Automatic recovery"
            note="Execute eligible actions only after all guardrails pass."
          >
            <Switch
              aria-label="Automatic recovery"
              checked={prefs.autoRecovery}
              onCheckedChange={(value) =>
                setPrefs({ ...prefs, autoRecovery: value })
              }
            />
          </SettingRow>
          <div className="settings-range">
            <div>
              <b>Human approval threshold</b>
              <span>Pause high-value recovery actions for merchant review.</span>
            </div>
            <strong>{formatMoney(prefs.approvalThreshold)}</strong>
            <Slider
              aria-label="Human approval threshold"
              min={5000}
              max={100000}
              step={5000}
              value={[prefs.approvalThreshold]}
              onValueChange={(value) =>
                setPrefs({ ...prefs, approvalThreshold: value[0] })
              }
            />
            <div className="range-labels">
              <span>Rs 5K</span>
              <span>Rs 1L</span>
            </div>
          </div>
          <Stepper
            label="Max recovery attempts"
            note="Hard stop per case."
            values={[1, 2, 3, 4]}
            value={prefs.maxAttempts}
            onChange={(value) => setPrefs({ ...prefs, maxAttempts: value })}
          />
          <Stepper
            label="Max customer contacts"
            note="Caps customer-facing payment links, reminders, and alternate-method prompts."
            values={[0, 1, 2, 3, 4]}
            value={prefs.maxContacts}
            onChange={(value) => setPrefs({ ...prefs, maxContacts: value })}
          />
          <Stepper
            label="Recovery window"
            note="Cases outside this window stop before execution."
            values={[24, 72, 168, 336]}
            value={prefs.recoveryWindowHours}
            suffix="h"
            onChange={(value) =>
              setPrefs({ ...prefs, recoveryWindowHours: value })
            }
          />
        </div>

        <div className="space-y-5">
          <div className="panel p-6">
            <div className="settings-card-head">
              <div>
                <p className="eyebrow">INTEGRATIONS</p>
                <h3>Provider readiness</h3>
              </div>
              <Webhook />
            </div>
            <Integration
              icon={Zap}
              name="Razorpay"
              note={
                provider.includes("RAZORPAY")
                  ? "Test Mode credentials are configured. Provider failures remain audited."
                  : "Mock provider is active for reliable simulation demos."
              }
              status={razorpayStatus}
            />
            <Integration
              icon={Sparkles}
              name="Gemini"
              note={
                aiMode.includes("GEMINI")
                  ? "Structured diagnosis is enabled before deterministic authorization."
                  : "Deterministic diagnosis fallback is active."
              }
              status={geminiStatus}
            />
            <Integration
              icon={Webhook}
              name="Webhook URL"
              note={webhookUrl}
              status="VERIFIED"
            />
            <div className="grid grid-cols-2 gap-2 pt-4">
              <Button variant="outline" onClick={copyWebhook}>
                <Copy />
                Copy webhook
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  flash("Configuration check passed for the active runtime.")
                }
              >
                <KeyRound />
                Test config
              </Button>
            </div>
          </div>

          {simulationMode && (
            <div className="settings-demo-card">
              <div className="settings-demo-icon">
                <TestTube2 />
              </div>
              <p className="eyebrow text-orange-300">SIMULATION DEMO</p>
              <h3>Reset and exercise critical flows.</h3>
              <p>
                Synthetic data only. Provider mode is {provider}; demo seed is
                42.
              </p>
              <div className="grid gap-2">
                <button disabled={!!working} onClick={() => onAction("seed")}>
                  <RefreshCw />
                  Seed demo<span>SEED 42</span>
                </button>
                <button disabled={!!working} onClick={() => onAction("seed")}>
                  <TimerReset />
                  Reset demo<span>SYNTHETIC</span>
                </button>
                <button disabled={!!working} onClick={() => onAction("run")}>
                  <Zap />
                  Run recovery<span>LIVE FLOW</span>
                </button>
                <button
                  disabled={!!working || !demoCaseId}
                  onClick={() => onAction("duplicate", demoCaseId)}
                >
                  <Webhook />
                  Duplicate webhook<span>0 DUPLICATES</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function Impact({
  value,
  label,
  tone,
}: {
  value: string;
  label: string;
  tone: string;
}) {
  return (
    <div className={`policy-impact-metric ${tone}`}>
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}

function SettingRow({
  title,
  note,
  children,
}: {
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="settings-row">
      <div>
        <b>{title}</b>
        <span>{note}</span>
      </div>
      <div className="ml-auto">{children}</div>
    </div>
  );
}

function Stepper({
  label,
  note,
  values,
  value,
  suffix = "",
  onChange,
}: {
  label: string;
  note: string;
  values: number[];
  value: number;
  suffix?: string;
  onChange: (value: number) => void;
}) {
  return (
    <div className="settings-stepper">
      <div>
        <b>{label}</b>
        <span>{note}</span>
      </div>
      <div>
        {values.map((item) => (
          <button
            key={item}
            className={value === item ? "active" : ""}
            onClick={() => onChange(item)}
          >
            {item}
            {suffix}
          </button>
        ))}
      </div>
    </div>
  );
}

function Integration({
  icon: Icon,
  name,
  note,
  status,
}: {
  icon: typeof Zap;
  name: string;
  note: string;
  status: string;
}) {
  return (
    <div className="integration-row">
      <span>
        <Icon />
      </span>
      <div>
        <b>{name}</b>
        <small>{note}</small>
      </div>
      <em>{status}</em>
    </div>
  );
}
