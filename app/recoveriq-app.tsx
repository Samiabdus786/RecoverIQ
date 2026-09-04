"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Activity,
  ArrowRight,
  Bot,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  FileCheck2,
  FileDown,
  Gauge,
  LogOut,
  Menu,
  ExternalLink,
  Play,
  RefreshCw,
  Search,
  ShieldCheck,
  TriangleAlert,
  WalletCards,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import AuthScreen, { type AuthSession } from "./auth-screen";
import RevenueEntry from "./revenue-entry";
import SettingsPanel from "./settings-panel";

type Case = {
  id: string;
  backendId?: string;
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
  state: string;
  successes: number;
  failures: number;
  providerRef?: string;
  paymentLinkUrl?: string;
  operationStatus?: string;
  webhookStatus?: string;
  ageHours?: number;
};
type Audit = {
  time: string;
  caseId: string;
  component: string;
  event: string;
  detail: string;
  result: string;
};
type RecoverySettings = {
  autoRecovery: boolean;
  approvalThreshold: number;
  maxAttempts: number;
  maxContacts: number;
  recoveryWindowHours: number;
};
type State = {
  mode: string;
  aiMode: string;
  provider: string;
  duplicateIgnored: boolean;
  settings: RecoverySettings;
  policyImpact: {
    automaticCases: number;
    reviewCases: number;
    suppressedCases: number;
    expectedValue: number;
  };
  cases: Case[];
  audit: Audit[];
  metrics: {
    atRisk: number;
    recovered: number;
    netRecovered: number;
    recoveryRate: number;
    analyzed: number;
    successes: number;
    active: number;
    avgMinutes: number;
  };
  timeline: { day: string; risk: number; recovered: number }[];
};
type View = "overview" | "queue" | "analytics" | "audit" | "settings";

const NAV: { id: View; label: string; icon: typeof Activity }[] = [
  { id: "overview", label: "Command center", icon: Gauge },
  { id: "queue", label: "Recovery queue", icon: Activity },
  { id: "analytics", label: "Analytics", icon: CircleDollarSign },
  { id: "audit", label: "Audit trail", icon: FileCheck2 },
  { id: "settings", label: "Settings", icon: ShieldCheck },
];
const money = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
const shortMoney = (value: number) =>
  value >= 100000 ? `₹${(value / 100000).toFixed(2)}L` : money(value);

const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://recoveriq-gwz8.onrender.com/api";

function Badge({
  children,
  tone = "slate",
}: {
  children: React.ReactNode;
  tone?: string;
}) {
  const palette: Record<string, string> = {
    green: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
    orange: "bg-orange-50 text-orange-700 ring-orange-600/15",
    blue: "bg-blue-50 text-blue-700 ring-blue-600/15",
    purple: "bg-purple-50 text-purple-700 ring-purple-600/15",
    red: "bg-rose-50 text-rose-700 ring-rose-600/15",
    slate: "bg-slate-100 text-slate-600 ring-slate-500/15",
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[.08em] ring-1 ring-inset ${palette[tone] || palette.slate}`}
    >
      {children}
    </span>
  );
}
const toneFor = (value: string) =>
  value === "RECOVERED" || value === "APPROVED"
    ? "green"
    : value === "HIGH"
      ? "orange"
      : value === "MONITORING"
        ? "blue"
        : value === "AWAITING_APPROVAL"
          ? "purple"
          : value === "FAILED"
            ? "red"
            : "slate";

function MetricCard({
  label,
  value,
  meta,
  accent,
  icon: Icon,
}: {
  label: string;
  value: string;
  meta: string;
  accent?: boolean;
  icon: typeof Activity;
}) {
  return (
    <article className={`metric-card ${accent ? "metric-card-accent" : ""}`}>
      <div className="flex items-start justify-between">
        <p className="eyebrow">{label}</p>
        <span className={`metric-icon ${accent ? "metric-icon-accent" : ""}`}>
          <Icon />
        </span>
      </div>
      <p className="mt-5 text-[2rem] font-semibold leading-none tracking-[-.04em] text-slate-950">
        {value}
      </p>
      <p className="mt-3 text-xs leading-5 text-slate-500">{meta}</p>
    </article>
  );
}

function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#f4f6f8]">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-orange-500" />
        <p className="mt-4 text-sm text-slate-500">
          Loading recovery command center…
        </p>
      </div>
    </div>
  );
}

export default function RecoverIQApp({
  initialView = "overview",
}: {
  initialView?: View;
}) {
  const [session, setSession] = useState<AuthSession | null | undefined>(
    undefined,
  );
  const [data, setData] = useState<State | null>(null);
  const [view, setView] = useState<View>(initialView);
  const [selected, setSelected] = useState<Case | null>(null);
  const [working, setWorking] = useState("");
  const [error, setError] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const [showEntry, setShowEntry] = useState(false);
  const finishEntry = useCallback(() => setShowEntry(false), []);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = localStorage.getItem("recoveriq-session");
        const parsed = stored ? (JSON.parse(stored) as AuthSession) : null;
        if (parsed?.company === "Northstar Commerce") {
          parsed.company = "RecoverIQ Demo Merchant";
          localStorage.setItem("recoveriq-session", JSON.stringify(parsed));
        }
        setSession(parsed);
      } catch {
        setSession(null);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    if (!session) return;
    const refresh = () =>
      fetch("/api/demo/state")
        .then((r) => (r.ok ? r.json() : Promise.reject()))
        .then(setData)
        .catch(() =>
          setError("Live state update paused. Use Seed demo to reconnect."),
        );
    refresh();
    const timer = window.setInterval(refresh, 4000);
    return () => window.clearInterval(timer);
  }, [session]);
  function authenticate(next: AuthSession) {
    localStorage.setItem("recoveriq-session", JSON.stringify(next));
    setShowEntry(true);
    setSession(next);
    setData(null);
  }
  function signOut() {
    localStorage.removeItem("recoveriq-session");
    setSession(null);
    setData(null);
    setSelected(null);
  }
 async function action(type: string, id?: string) {
  setWorking(type + (id || ""));
  setError("");

  try {
    const item = id
      ? data?.cases.find((c) => c.id === id)
      : undefined;

    const backendId = item?.backendId;

    if (type === "seed") {
      const response = await fetch(`${API_BASE}/demo/seed`, {
        method: "POST",
      });

      if (!response.ok) throw new Error("Seed demo failed");

      window.location.reload();
      return;
    }

    if (type === "run") {
      const response = await fetch(`${API_BASE}/recovery/run`, {
        method: "POST",
      });

      if (!response.ok) throw new Error("Recovery run failed");

      window.location.reload();
      return;
    }

    if (!backendId) {
      throw new Error("Backend case ID not found");
    }

    if (type === "execute") {
      // Backend may already have created the Razorpay link during Run Recovery.
      if (item?.paymentLinkUrl) {
        window.open(
          item.paymentLinkUrl,
          "_blank",
          "noopener,noreferrer",
        );
        return;
      }

      const response = await fetch(
        `${API_BASE}/recovery/${backendId}/execute`,
        {
          method: "POST",
        },
      );

      if (!response.ok) {
        throw new Error("Recovery execution failed");
      }

      const result = await response.json();

      console.log("REAL EXECUTION:", result);

      if (result.payment_link_url) {
        window.open(
          result.payment_link_url,
          "_blank",
          "noopener,noreferrer",
        );
      }

      return;
    }

    if (type === "approve") {
      const response = await fetch(
        `${API_BASE}/recovery/${backendId}/approve`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            approved: true,
            note: "Approved from RecoverIQ dashboard",
          }),
        },
      );

      if (!response.ok) throw new Error("Approval failed");

      return;
    }

    if (type === "reject") {
      const response = await fetch(
        `${API_BASE}/recovery/${backendId}/reject`,
        {
          method: "POST",
        },
      );

      if (!response.ok) throw new Error("Rejection failed");

      return;
    }

    if (type === "success") {
      const response = await fetch(
        `${API_BASE}/demo/simulate-success/${backendId}`,
        {
          method: "POST",
        },
      );

      if (!response.ok) throw new Error("Success simulation failed");

      return;
    }

    if (type === "failure") {
      const response = await fetch(
        `${API_BASE}/demo/simulate-provider-failure/${backendId}`,
        {
          method: "POST",
        },
      );

      if (!response.ok) throw new Error("Failure simulation failed");

      return;
    }

    if (type === "duplicate") {
      const response = await fetch(
        `${API_BASE}/demo/simulate-duplicate-webhook/${backendId}`,
        {
          method: "POST",
        },
      );

      if (!response.ok) throw new Error("Duplicate webhook test failed");

      return;
    }
  } catch (err) {
    console.error("RecoverIQ action error:", err);

    setError(
      err instanceof Error
        ? err.message
        : "The action could not be completed.",
    );
  } finally {
    setWorking("");
  }
}
  if (session === undefined) return <Loading />;
  if (!session) return <AuthScreen onAuthenticated={authenticate} />;
  if (showEntry)
    return (
      <RevenueEntry
        session={session}
        portfolioValue={data?.metrics.atRisk}
        onComplete={finishEntry}
      />
    );
  if (!data)
    return error ? (
      <div className="grid min-h-screen place-items-center bg-slate-50">
        <div className="text-center">
          <TriangleAlert className="mx-auto text-rose-500" />
          <p className="mt-3 text-sm">{error}</p>
          <Button className="mt-4" onClick={() => window.location.reload()}>
            Retry connection
          </Button>
        </div>
      </div>
    ) : (
      <Loading />
    );
  return (
    <div className="min-h-screen bg-[#f4f6f8] text-slate-900">
      <aside
        className={`sidebar ${mobileNav ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex h-20 items-center gap-3 border-b border-white/8 px-6">
          <div className="logo-mark">
            <Activity />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-[-.03em] text-white">
              RecoverIQ
            </p>
            <p className="text-[9px] font-semibold tracking-[.2em] text-slate-500">
              REVENUE INTELLIGENCE
            </p>
          </div>
          <button
            className="ml-auto lg:hidden"
            onClick={() => setMobileNav(false)}
            aria-label="Close navigation"
          >
            <X className="text-slate-400" />
          </button>
        </div>
        <nav className="space-y-1 px-3 py-6" aria-label="Primary navigation">
          {NAV.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setView(item.id);
                setMobileNav(false);
              }}
              className={`nav-item ${view === item.id ? "nav-item-active" : ""}`}
            >
              <item.icon />
              {item.label}
            </button>
          ))}
        </nav>
        <div className="mt-auto p-4">
          <div className="rounded-xl border border-white/8 bg-white/[.035] p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              SYSTEM HEALTHY
            </div>
            <p className="mt-2 text-[11px] leading-5 text-slate-500">
              Guardrail engine active
              <br />
              Event polling · 4 sec
            </p>
          </div>
          <p className="mt-4 px-1 text-[10px] tracking-wide text-slate-600">
            RAZORPAY BUILDATHON · 2026
          </p>
        </div>
      </aside>
      {mobileNav && (
        <button
          className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileNav(false)}
          aria-label="Close menu"
        />
      )}
      <main className="lg:pl-[252px]">
        <header className="sticky top-0 z-20 flex h-20 items-center border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl sm:px-8">
          <button
            onClick={() => setMobileNav(true)}
            className="mr-3 lg:hidden"
            aria-label="Open navigation"
          >
            <Menu />
          </button>
          <div>
            <p className="text-[11px] font-bold tracking-[.12em] text-slate-400">
              {session.company.toUpperCase()}
            </p>
            <h1 className="text-lg font-semibold tracking-[-.02em]">
              {NAV.find((n) => n.id === view)?.label}
            </h1>
          </div>
          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Badge tone="orange">SIMULATION</Badge>
            <button
              className="header-search hidden sm:flex"
              onClick={() => setView("queue")}
              aria-label="Open recovery queue search"
            >
              <Search />
              Search cases <kbd>⌘ K</kbd>
            </button>
            <div className="hidden text-right md:block">
              <p className="text-xs font-semibold text-slate-700">
                {session.name}
              </p>
              <p className="text-[10px] text-slate-400">{session.email}</p>
            </div>
            <div className="grid h-9 w-9 place-items-center rounded-full bg-[#10223b] text-xs font-bold text-white">
              {session.name
                .split(" ")
                .map((part) => part[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
            </div>
            <button
              className="logout-button"
              onClick={signOut}
              aria-label="Sign out"
              title="Sign out"
            >
              <LogOut />
            </button>
          </div>
        </header>
        {error && (
          <div className="mx-5 mt-5 flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700 sm:mx-8">
            <TriangleAlert className="h-4 w-4" />
            {error}
          </div>
        )}
        <div className="p-5 sm:p-8">
          {view === "overview" && (
            <Overview
              data={data}
              action={action}
              working={working}
              open={setSelected}
            />
          )}{" "}
          {view === "queue" && (
            <Queue
              data={data}
              action={action}
              working={working}
              open={setSelected}
            />
          )}{" "}
          {view === "analytics" && <Analytics data={data} />}{" "}
          {view === "audit" && <AuditTrail data={data} />}{" "}
          {view === "settings" && (
            <SettingsPanel
              provider={data.provider}
              aiMode={data.aiMode}
              mode={data.mode}
              onAction={action}
              working={working}
              demoCaseId={data.cases[0]?.id || ""}
              settings={data.settings}
              cases={data.cases}
              onSnapshot={(next) => setData(next as State)}
            />
          )}
        </div>
      </main>
      <CaseDialog
        item={selected}
        audit={data.audit}
        onClose={() => setSelected(null)}
        action={action}
      />
    </div>
  );
}

function Overview({
  data,
  action,
  working,
  open,
}: {
  data: State;
  action: (t: string, id?: string) => void;
  working: string;
  open: (c: Case) => void;
}) {
  const awaiting = data.cases.find((c) => c.state === "AWAITING_APPROVAL");
  const recoveredLift = Math.max(0, data.metrics.netRecovered);
  return (
    <div className="mx-auto max-w-[1480px] space-y-6">
      <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge tone="blue">{data.mode}</Badge>
            <Badge>{data.aiMode}</Badge>
            <Badge>{data.provider}</Badge>
          </div>
          <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-.045em] text-slate-950 sm:text-[2.6rem] sm:leading-[1.05]">
            Turn failed payments into
            <br />
            <span className="text-orange-600">recovered revenue.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
            RecoverIQ detects failed payments and checkout abandonment, predicts
            recoverability, and executes only the actions deterministic
            financial guardrails authorize.
          </p>
        </div>
        <div className="demo-actions">
          <Button
            variant="outline"
            onClick={() => action("seed")}
            disabled={!!working}
          >
            <RefreshCw />
            Seed demo
          </Button>
          <Button
            className="bg-orange-600 text-white hover:bg-orange-700"
            onClick={() => action("run")}
            disabled={!!working}
          >
            {working === "run" ? (
              <RefreshCw className="animate-spin" />
            ) : (
              <Play />
            )}
            Run recovery
          </Button>
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Revenue at risk"
          value={shortMoney(data.metrics.atRisk)}
          meta="Failed & abandoned payments still eligible"
          icon={TriangleAlert}
        />
        <MetricCard
          label="Revenue recovered"
          value={shortMoney(data.metrics.recovered)}
          meta="Verified simulated payment success"
          accent
          icon={CircleDollarSign}
        />
        <MetricCard
          label="Net recovered revenue"
          value={shortMoney(data.metrics.netRecovered)}
          meta="After tracked intervention cost"
          icon={WalletCards}
        />
        <MetricCard
          label="Recovery rate"
          value={`${data.metrics.recoveryRate.toFixed(1)}%`}
          meta={`${data.metrics.successes} successful · ${data.metrics.active} active cases`}
          icon={Gauge}
        />
      </section>
      <section className="grid gap-5 xl:grid-cols-[1fr_1.25fr]">
        <div className="proof-panel">
          <p className="eyebrow">MEASURED MONEY RECOVERED</p>
          <h3>Before vs after</h3>
          <div className="lift-grid">
            <div>
              <span>Baseline recovered</span>
              <b>{money(0)}</b>
            </div>
            <ArrowRight />
            <div>
              <span>RecoverIQ recovered</span>
              <b>{money(data.metrics.recovered)}</b>
            </div>
            <ArrowRight />
            <div className="lift-strong">
              <span>Net lift</span>
              <b>{money(recoveredLift)}</b>
            </div>
          </div>
        </div>
        <div className="proof-panel">
          <p className="eyebrow">BOUNDED RECOVERY LOOP</p>
          <h3>Detect to audit trail</h3>
          <div className="judge-loop" aria-label="Recovery workflow checklist">
            {[
              "Detect",
              "Score",
              "Diagnose",
              "Guard",
              "Execute",
              "Monitor",
              "Stop",
              "Audit",
            ].map((step, index) => (
              <span key={step}>
                <CheckCircle2 />
                {index + 1}. {step}
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="grid gap-5 xl:grid-cols-[1.65fr_1fr]">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">VALUE MOVEMENT</p>
              <h3>Revenue recovery pulse</h3>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-medium text-slate-500">
              <span>
                <i className="legend bg-slate-300" />
                At risk
              </span>
              <span>
                <i className="legend bg-orange-500" />
                Recovered
              </span>
            </div>
          </div>
          <div className="h-[260px] px-2 pb-3">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.timeline}>
                <defs>
                  <linearGradient id="risk" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#cbd5e1" stopOpacity={0.5} />
                    <stop offset="1" stopColor="#cbd5e1" stopOpacity={0.02} />
                  </linearGradient>
                  <linearGradient id="recovered" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#f26722" stopOpacity={0.32} />
                    <stop offset="1" stopColor="#f26722" stopOpacity={0.01} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  stroke="#e9edf2"
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11, fill: "#8190a5" }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${Math.round(v / 1000)}k`}
                  tick={{ fontSize: 11, fill: "#8190a5" }}
                />
                <Tooltip formatter={(v) => money(Number(v))} />
                <Area
                  type="monotone"
                  dataKey="risk"
                  stroke="#94a3b8"
                  fill="url(#risk)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="recovered"
                  stroke="#f26722"
                  fill="url(#recovered)"
                  strokeWidth={2.5}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="panel overflow-hidden">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">CONTROL PLANE</p>
              <h3>AI recommends. Rules authorize.</h3>
            </div>
            <ShieldCheck className="text-emerald-600" />
          </div>
          <div className="px-5 pb-5">
            <div className="control-flow">
              <Flow
                icon={Bot}
                label="ML + AI"
                note="score · diagnose · recommend"
              />
              <ArrowRight />
              <Flow
                icon={ShieldCheck}
                label="Guardrails"
                note="authorize · reject · review"
                strong
              />
              <ArrowRight />
              <Flow
                icon={WalletCards}
                label="Provider"
                note="execute once · monitor"
              />
            </div>
            <div className="mt-5 rounded-xl bg-[#10223b] p-4 text-white">
              <p className="text-xs font-semibold">Bounded by design</p>
              <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                <div>
                  <b>2</b>
                  <span>max attempts</span>
                </div>
                <div>
                  <b>2</b>
                  <span>max contacts</span>
                </div>
                <div>
                  <b>₹25K</b>
                  <span>approval gate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {awaiting && (
        <section className="approval-strip">
          <div className="approval-icon">
            <ShieldCheck />
          </div>
          <div>
            <p className="eyebrow text-purple-600">
              MERCHANT DECISION REQUIRED
            </p>
            <h3 className="mt-1 font-semibold">
              {awaiting.customer} · {money(awaiting.amount)}
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              AI recommends {awaiting.action.replaceAll("_", " ")}; guardrail
              paused execution above ₹25,000.
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <Button variant="outline" onClick={() => open(awaiting)}>
              Review
            </Button>
            <Button variant="outline" onClick={() => action("reject", awaiting.id)}>
              Reject
            </Button>
            <Button
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => action("approve", awaiting.id)}
            >
              Approve action
            </Button>
          </div>
        </section>
      )}
      <QueueTable cases={data.cases.slice(0, 8)} open={open} />
    </div>
  );
}

function Flow({
  icon: Icon,
  label,
  note,
  strong,
}: {
  icon: typeof Bot;
  label: string;
  note: string;
  strong?: boolean;
}) {
  return (
    <div className={`flow-node ${strong ? "flow-node-strong" : ""}`}>
      <Icon />
      <b>{label}</b>
      <span>{note}</span>
    </div>
  );
}

function QueueTable({
  cases,
  open,
}: {
  cases: Case[];
  open: (c: Case) => void;
}) {
  return (
    <section className="panel overflow-hidden">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">PRIORITIZED WORKLIST</p>
          <h3>Recovery queue</h3>
        </div>
        <p className="text-xs text-slate-400">
          Computed from probability × value × eligibility
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50/70">
            <TableHead>Customer</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Failure</TableHead>
            <TableHead>Recovery probability</TableHead>
            <TableHead>Expected value</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Status</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {cases.map((item) => (
            <TableRow
              key={item.id}
              className="cursor-pointer"
              onClick={() => open(item)}
            >
              <TableCell>
                <div className="font-semibold text-slate-800">
                  {item.customer}
                </div>
                <div className="mt-0.5 text-[10px] text-slate-400">
                  {item.id}
                </div>
              </TableCell>
              <TableCell className="font-semibold">
                {money(item.amount)}
              </TableCell>
              <TableCell>
                <div className="text-slate-700">{item.failure}</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-400">
                  {item.method}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex min-w-32 items-center gap-3">
                  <Progress value={item.probability * 100} className="h-1.5" />
                  <span className="w-8 text-right font-semibold">
                    {Math.round(item.probability * 100)}%
                  </span>
                </div>
              </TableCell>
              <TableCell>{money(item.expectedValue)}</TableCell>
              <TableCell>
                <Badge tone={toneFor(item.priority)}>{item.priority}</Badge>
              </TableCell>
              <TableCell>
                <Badge tone={toneFor(item.state)}>
                  {item.state.replaceAll("_", " ")}
                </Badge>
              </TableCell>
              <TableCell>
                <ChevronRight className="h-4 w-4 text-slate-300" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

function Queue({
  data,
  action,
  working,
  open,
}: {
  data: State;
  action: (t: string, id?: string) => void;
  working: string;
  open: (c: Case) => void;
}) {
  const [priorityFilter, setPriorityFilter] = useState("ALL");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const visible =
    data.cases.filter(
      (c) =>
        (priorityFilter === "ALL" || c.priority === priorityFilter) &&
        (statusFilter === "ALL" || c.state === statusFilter),
    );
  const priorityFilters = ["ALL", "HIGH", "MEDIUM", "LOW", "SUPPRESSED"];
  const statusFilters = [
    "ALL",
    "AWAITING_APPROVAL",
    "MONITORING",
    "RECOVERED",
    "FAILED",
    "STOPPED",
  ];
  return (
    <div className="mx-auto max-w-[1480px] space-y-5">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">DETECT → DECIDE → RECOVER</p>
          <h2 className="page-title">Recovery queue</h2>
          <p className="page-copy">
            Every case is ranked by expected recovery value and checked for
            financial eligibility.
          </p>
        </div>
        <Button
          onClick={() => action("run")}
          className="bg-orange-600 hover:bg-orange-700"
          disabled={!!working}
        >
          <Play />
          Run eligible cases
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="filter-label">Priority</span>
          {priorityFilters.map((f) => (
            <button
              onClick={() => setPriorityFilter(f)}
              className={`filter-chip ${priorityFilter === f ? "filter-chip-active" : ""}`}
              key={f}
            >
              {f.replaceAll("_", " ")}{" "}
              <span>
                {
                  data.cases.filter((c) => f === "ALL" || c.priority === f)
                    .length
                }
              </span>
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="filter-label">Status</span>
          {statusFilters.map((f) => (
          <button
            onClick={() => setStatusFilter(f)}
            className={`filter-chip ${statusFilter === f ? "filter-chip-active" : ""}`}
            key={f}
          >
            {f.replaceAll("_", " ")}{" "}
            <span>
              {
                data.cases.filter(
                  (c) => f === "ALL" || c.state === f,
                ).length
              }
            </span>
          </button>
        ))}
        </div>
      </div>
      <QueueTable cases={visible} open={open} />
    </div>
  );
}

function Analytics({ data }: { data: State }) {
  const reasons = useMemo(
    () =>
      Object.values(
        data.cases.reduce<
          Record<string, { name: string; cases: number; value: number }>
        >((a, c) => {
          a[c.failure] ??= { name: c.failure, cases: 0, value: 0 };
          a[c.failure].cases++;
          if (c.state === "RECOVERED") a[c.failure].value += c.amount;
          return a;
        }, {}),
      ),
    [data],
  );
  const probability = [
    {
      name: "0–20",
      value: data.cases.filter((c) => c.probability < 0.2).length,
    },
    {
      name: "20–50",
      value: data.cases.filter(
        (c) => c.probability >= 0.2 && c.probability < 0.5,
      ).length,
    },
    {
      name: "50–75",
      value: data.cases.filter(
        (c) => c.probability >= 0.5 && c.probability < 0.75,
      ).length,
    },
    {
      name: "75–100",
      value: data.cases.filter((c) => c.probability >= 0.75).length,
    },
  ];
  return (
    <div className="mx-auto max-w-[1480px] space-y-6">
      <div>
        <p className="eyebrow">MEASURED OUTCOMES</p>
        <h2 className="page-title">Recovery analytics</h2>
        <p className="page-copy">
          Actual outputs from the current deterministic simulation run—never
          claimed as merchant production revenue.
        </p>
      </div>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Analyzed"
          value={String(data.metrics.analyzed)}
          meta="Transactions scored in this batch"
          icon={Activity}
        />
        <MetricCard
          label="Recovered"
          value={money(data.metrics.recovered)}
          meta="Captured simulated payments"
          icon={CircleDollarSign}
        />
        <MetricCard
          label="Active cases"
          value={String(data.metrics.active)}
          meta="Monitoring, approval, or failure"
          icon={Clock3}
        />
        <MetricCard
          label="Average time"
          value={`${data.metrics.avgMinutes}m`}
          meta="Detection to verified recovery"
          icon={Gauge}
        />
      </section>
      <section className="grid gap-5 xl:grid-cols-2">
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">PORTFOLIO</p>
              <h3>Cases by failure reason</h3>
            </div>
          </div>
          <div className="h-72 px-4 pb-5">
            <ResponsiveContainer>
              <BarChart data={reasons} layout="vertical">
                <CartesianGrid horizontal={false} stroke="#eef1f5" />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={110}
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                />
                <Tooltip />
                <Bar dataKey="cases" fill="#1d6cff" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">MODEL OUTPUT</p>
              <h3>Recovery probability distribution</h3>
            </div>
          </div>
          <div className="h-72 px-4 pb-5">
            <ResponsiveContainer>
              <BarChart data={probability}>
                <CartesianGrid vertical={false} stroke="#eef1f5" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis
                  allowDecimals={false}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Bar dataKey="value" radius={[7, 7, 0, 0]}>
                  {probability.map((_, i) => (
                    <Cell
                      key={i}
                      fill={["#64748b", "#e9a23b", "#1d6cff", "#f26722"][i]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
      <section className="panel p-6">
        <p className="eyebrow">BASELINE VS RECOVERIQ</p>
        <h3 className="mt-2 text-lg font-semibold">
          Fewer unnecessary interventions by design
        </h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Comparison
            label="Fixed baseline"
            interventions={data.cases.length}
            suppressed={
              data.cases.filter((c) => c.priority === "SUPPRESSED").length
            }
            recovered={0}
            cost={data.cases.length * 3.5}
            net={0 - data.cases.length * 3.5}
            note="Contacts every failed transaction with one rule."
          />
          <Comparison
            label="RecoverIQ"
            interventions={
              data.cases.filter((c) => c.action !== "DO_NOTHING").length
            }
            suppressed={0}
            recovered={data.metrics.recovered}
            cost={data.metrics.recovered - data.metrics.netRecovered}
            net={data.metrics.netRecovered}
            note="Prioritizes expected value, eligibility, and contact safety."
            strong
          />
        </div>
      </section>
    </div>
  );
}
function Comparison({
  label,
  interventions,
  suppressed,
  recovered,
  cost,
  net,
  note,
  strong,
}: {
  label: string;
  interventions: number;
  suppressed: number;
  recovered: number;
  cost: number;
  net: number;
  note: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`rounded-xl border p-5 ${strong ? "border-orange-200 bg-orange-50/50" : "border-slate-200"}`}
    >
      <div className="flex items-center justify-between">
        <b>{label}</b>
        {strong && <Badge tone="orange">SELECTIVE</Badge>}
      </div>
      <p className="mt-2 text-xs text-slate-500">{note}</p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
        <div>
          <span className="text-2xl font-semibold">{interventions}</span>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            interventions
          </p>
        </div>
        <div>
          <span className="text-2xl font-semibold">{suppressed}</span>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            unnecessary
          </p>
        </div>
        <div>
          <span className="text-2xl font-semibold">{shortMoney(recovered)}</span>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            recovered
          </p>
        </div>
        <div>
          <span className="text-2xl font-semibold">{money(cost)}</span>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            cost
          </p>
        </div>
        <div>
          <span className="text-2xl font-semibold">{shortMoney(net)}</span>
          <p className="text-[10px] uppercase tracking-wider text-slate-400">
            net
          </p>
        </div>
      </div>
    </div>
  );
}

function AuditTrail({ data }: { data: State }) {
  const [exported, setExported] = useState(false);

  function exportEvidence() {
    const escape = (value: string | number) =>
      `"${String(value).replaceAll('"', '""')}"`;
    const rows = [
      ["time", "case_id", "component", "event", "detail", "result"],
      ...data.audit.map((row) => [
        row.time,
        row.caseId,
        row.component,
        row.event,
        row.detail,
        row.result,
      ]),
    ];
    const summary = [
      ["RecoverIQ recovery evidence"],
      ["environment", data.mode],
      ["provider", data.provider],
      ["revenue_at_risk_inr", data.metrics.atRisk],
      ["revenue_recovered_inr", data.metrics.recovered],
      ["net_recovered_revenue_inr", data.metrics.netRecovered],
      ["recovery_rate_percent", data.metrics.recoveryRate.toFixed(2)],
      [],
    ];
    const csv = [...summary, ...rows]
      .map((row) => row.map(escape).join(","))
      .join("\n");
    const url = URL.createObjectURL(
      new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `RecoverIQ-recovery-evidence-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setExported(true);
    window.setTimeout(() => setExported(false), 2600);
  }

  return (
    <div className="mx-auto max-w-[1180px] space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">IMMUTABLE DECISION RECORD</p>
          <h2 className="page-title">Audit trail</h2>
          <p className="page-copy">
            Concise reason codes and state transitions—no hidden model
            chain-of-thought.
          </p>
        </div>
        <Button variant="outline" onClick={exportEvidence}>
          {exported ? <CheckCircle2 /> : <FileDown />}
          {exported ? "Evidence CSV downloaded" : "Export recovery evidence"}
        </Button>
      </div>
      <div className="panel overflow-hidden">
        <div className="grid grid-cols-[80px_115px_1fr_100px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-[10px] font-bold tracking-[.1em] text-slate-400">
          <span>TIME</span>
          <span>COMPONENT</span>
          <span>EVENT</span>
          <span>RESULT</span>
        </div>
        {data.audit.map((row, i) => (
          <div
            key={`${row.time}-${i}`}
            className="grid grid-cols-[80px_115px_1fr_100px] gap-4 border-b border-slate-100 px-5 py-4 last:border-0"
          >
            <span className="font-mono text-xs text-slate-400">{row.time}</span>
            <span>
              <Badge
                tone={
                  row.component === "GUARDRAIL"
                    ? "green"
                    : row.component === "PROVIDER"
                      ? "blue"
                      : row.component === "AI"
                        ? "purple"
                        : "slate"
                }
              >
                {row.component}
              </Badge>
            </span>
            <div>
              <p className="text-xs font-semibold text-slate-800">
                {row.event.replaceAll("_", " ")}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                {row.detail}{" "}
                <span className="font-mono text-[10px] text-slate-400">
                  · {row.caseId}
                </span>
              </p>
            </div>
            <span className="text-[10px] font-bold text-slate-500">
              {row.result}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaseDialog({
  item,
  audit,
  onClose,
  action,
}: {
  item: Case | null;
  audit: Audit[];
  onClose: () => void;
  action: (t: string, id?: string) => void;
}) {
  if (!item) return null;
  const recommendedActionLabel =
    item.paymentLinkUrl && item.action === "CREATE_PAYMENT_LINK"
      ? "PAYMENT LINK CREATED"
      : item.action.replaceAll("_", " ");
  const caseAudit = audit.filter((row) => row.caseId === item.id).slice(0, 5);
  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[92vh] overflow-y-auto p-0 sm:max-w-3xl">
        <DialogHeader className="border-b border-slate-200 p-6">
          <div className="flex items-center gap-2">
            <Badge tone={toneFor(item.priority)}>{item.priority}</Badge>
            <Badge tone={toneFor(item.state)}>
              {item.state.replaceAll("_", " ")}
            </Badge>
          </div>
          <DialogTitle className="mt-3 text-2xl tracking-[-.03em]">
            {item.customer} · {money(item.amount)}
          </DialogTitle>
          <DialogDescription>
            {item.id} · {item.method} · {item.failure}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 p-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Mini
              label="Probability"
              value={`${Math.round(item.probability * 100)}%`}
            />
            <Mini label="Expected value" value={money(item.expectedValue)} />
            <Mini
              label="Past success"
              value={`${item.successes}/${item.successes + item.failures}`}
            />
            <Mini
              label="Guardrail"
              value={item.guardrail.replace("HUMAN_REVIEW", "REVIEW")}
            />
          </div>
          <div>
            <p className="eyebrow">WHAT HAPPENED?</p>
            <p className="mt-2 text-sm font-semibold">{item.failure}</p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              {item.method === "Checkout"
                ? "The customer left checkout before completing payment while the cart remained inside the configured recovery window."
                : `The ${item.method.toLowerCase()} attempt failed while the payment remained inside the configured recovery window.`}
            </p>
          </div>
          <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-5">
            <div className="flex items-center gap-2 text-blue-700">
              <Bot className="h-4 w-4" />
              <p className="text-xs font-bold tracking-wider">
                EXPLAINABLE DECISION
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              {item.successes} of this customer&apos;s previous{" "}
              {item.successes + item.failures} payments succeeded. The model
              estimates a {Math.round(item.probability * 100)}% recovery
              probability. Expected recovery value after intervention cost is{" "}
              {money(item.expectedValue)}.
            </p>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-white p-3">
              <span className="text-xs text-slate-500">Recommended action</span>
              {item.action === "CREATE_PAYMENT_LINK" &&
              ["DETECTED", "FAILED"].includes(item.state) ? (
                <button
                  className="text-xs font-bold text-blue-700 underline-offset-4 hover:underline"
                  onClick={() => action("execute", item.id)}
                >
                  {item.action.replaceAll("_", " ")}
                </button>
              ) : (
                <b className="text-xs text-blue-700">
                  {recommendedActionLabel}
                </b>
              )}
            </div>
          </div>
          <div className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-5">
            <div className="flex items-center gap-2 text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-xs font-bold tracking-wider">
                DETERMINISTIC AUTHORIZATION
              </p>
            </div>
            <p className="mt-3 text-sm font-semibold">
              {item.guardrail === "HUMAN_REVIEW"
                ? "Human approval required"
                : item.guardrail === "APPROVED"
                  ? "All applicable safety rules passed"
                  : item.guardrail}
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              No duplicate link · within contact limits · payment not already
              successful · inside recovery window.
            </p>
          </div>
          {["RECOVERED", "STOPPED"].includes(item.state) && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-center gap-2 text-emerald-700">
                <CheckCircle2 className="h-4 w-4" />
                <p className="text-xs font-bold tracking-wider">
                  STOPPING RULE APPLIED
                </p>
              </div>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {item.state === "RECOVERED"
                  ? "Payment recovered. No more contact or provider action is allowed."
                  : "Recovery suppressed. No customer contact was created."}
              </p>
            </div>
          )}
          {item.providerRef && (
            <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4 text-white">
              <div>
                <p className="text-[10px] tracking-wider text-slate-400">
                  PROVIDER REFERENCE
                </p>
                <p className="mt-1 font-mono text-xs">{item.providerRef}</p>
              </div>
              <Badge tone="blue">
                {item.paymentLinkUrl ? "RAZORPAY" : "MOCK"}
              </Badge>
            </div>
          )}
          {(item.operationStatus || item.webhookStatus) && (
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                Latest action
              </div>
              <p className="mt-2 text-xs leading-5">
                {item.webhookStatus || item.operationStatus}
              </p>
            </div>
          )}
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold tracking-wider text-slate-500">
                  CASE TIMELINE
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Latest verified state changes for this payment.
                </p>
              </div>
              <Badge tone="slate">{caseAudit.length} EVENTS</Badge>
            </div>
            <div className="mt-4 space-y-3">
              {caseAudit.map((row, index) => (
                <div
                  key={`${row.time}-${row.event}-${index}`}
                  className="grid grid-cols-[74px_92px_1fr] gap-3 text-xs"
                >
                  <span className="font-mono text-slate-400">{row.time}</span>
                  <span className="font-semibold text-slate-500">
                    {row.component}
                  </span>
                  <span className="text-slate-700">
                    {row.event.replaceAll("_", " ")}
                  </span>
                </div>
              ))}
              {!caseAudit.length && (
                <p className="text-xs text-slate-400">
                  No case events have been recorded yet.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-2">
            {item.paymentLinkUrl && (
              <Button
                variant="outline"
                onClick={() =>
                  window.open(item.paymentLinkUrl, "_blank", "noopener")
                }
              >
                <ExternalLink />
                Open payment link
              </Button>
            )}
            {item.action === "CREATE_PAYMENT_LINK" &&
              ["DETECTED", "FAILED"].includes(item.state) &&
              !item.paymentLinkUrl && (
                <Button
                  className="bg-orange-600 hover:bg-orange-700"
                  onClick={() => action("execute", item.id)}
                >
                  <ExternalLink />
                  Create payment link
                </Button>
              )}
            {item.state === "AWAITING_APPROVAL" && (
              <>
                <Button variant="outline" onClick={() => action("reject", item.id)}>
                  <X />
                  Reject action
                </Button>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => action("approve", item.id)}
                >
                  <ShieldCheck />
                  Approve action
                </Button>
              </>
            )}
            {item.state === "MONITORING" && (
              <Button
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => action("success", item.id)}
              >
                <CheckCircle2 />
                Simulate success
              </Button>
            )}
            {!item.paymentLinkUrl && item.state !== "RECOVERED" && (
              <Button
                variant="outline"
                onClick={() => action("failure", item.id)}
              >
                <TriangleAlert />
                Provider failure
              </Button>
            )}
            <Button
              variant="outline"
              onClick={() => action("duplicate", item.id)}
            >
              <FileCheck2 />
              Duplicate webhook
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3">
      <p className="text-[9px] font-bold tracking-wider text-slate-400">
        {label.toUpperCase()}
      </p>
      <p className="mt-2 text-sm font-semibold">{value}</p>
    </div>
  );
}
