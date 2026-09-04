"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
  WalletCards,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { playCoinRainSound } from "@/lib/coin-sound";

export type AuthSession = {
  name: string;
  email: string;
  company: string;
  method: "password" | "google" | "demo";
};
type Mode = "signin" | "signup" | "reset";
type GoogleTokenResponse = {
  access_token?: string;
  error?: string;
};
type GoogleTokenClient = {
  requestAccessToken: (options?: { prompt?: string }) => void;
};
function isAuthSession(value: AuthSession | { error?: string }): value is AuthSession {
  return (
    "name" in value &&
    "email" in value &&
    "company" in value &&
    "method" in value
  );
}
declare global {
  interface Window {
    google?: {
      accounts?: {
        oauth2?: {
          initTokenClient: (options: {
            client_id: string;
            scope: string;
            callback: (response: GoogleTokenResponse) => void;
          }) => GoogleTokenClient;
        };
      };
    };
  }
}

export default function AuthScreen({
  onAuthenticated,
}: {
  onAuthenticated: (session: AuthSession) => void;
}) {
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("demo@recoveriq.ai");
  const [password, setPassword] = useState("Recover@2026");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [googleReady, setGoogleReady] = useState(false);
  const googleClient = useRef<GoogleTokenClient | null>(null);
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!googleClientId) return;
    const configure = () => {
      if (!window.google?.accounts?.oauth2) return;
      googleClient.current = window.google.accounts.oauth2.initTokenClient({
        client_id: googleClientId,
        scope: "openid email profile",
        callback: verifyGoogleToken,
      });
      setGoogleReady(true);
    };
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://accounts.google.com/gsi/client"]',
    );
    if (existing) {
      configure();
      existing.addEventListener("load", configure, { once: true });
      return () => existing.removeEventListener("load", configure);
    }
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = configure;
    script.onerror = () =>
      setError("Google sign-in could not be loaded. Check your connection.");
    document.head.appendChild(script);
  }, [googleClientId]);

  function finish(session: AuthSession) {
    playCoinRainSound(0.42);
    setSubmitting(true);
    window.setTimeout(() => onAuthenticated(session), 420);
  }

  async function verifyGoogleToken(response: GoogleTokenResponse) {
    if (!response.access_token || response.error) {
      setSubmitting(false);
      setError("Google sign-in was cancelled or denied.");
      return;
    }
    try {
      const verified = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ accessToken: response.access_token }),
      });
      const session = (await verified.json()) as AuthSession | { error?: string };
      if (!verified.ok || !isAuthSession(session)) {
        throw new Error(
          "error" in session ? session.error : "Google verification failed",
        );
      }
      finish(session);
    } catch (caught) {
      setSubmitting(false);
      setError(
        caught instanceof Error
          ? caught.message
          : "Google sign-in could not be verified.",
      );
    }
  }

  function signInWithGoogle() {
    setError("");
    setNotice("");
    if (!googleClientId) {
      setError("Add NEXT_PUBLIC_GOOGLE_CLIENT_ID to .env to enable Google sign-in.");
      return;
    }
    if (!googleReady || !googleClient.current) {
      setError("Google sign-in is still loading. Try again in a moment.");
      return;
    }
    setSubmitting(true);
    googleClient.current.requestAccessToken({ prompt: "select_account" });
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    setError("");
    setNotice("");
    if (!email.includes("@"))
      return setError("Enter a valid work email address.");
    if (mode === "reset") {
      setNotice(
        "Reset instructions prepared for this demo account. You can return to sign in.",
      );
      return;
    }
    if (password.length < 8)
      return setError("Password must contain at least 8 characters.");
    if (mode === "signup" && (!name.trim() || !company.trim()))
      return setError("Add your name and company to create the workspace.");
    finish({
      name: mode === "signup" ? name.trim() : "Abdus Sami",
      email,
      company: mode === "signup" ? company.trim() : "RecoverIQ Demo Merchant",
      method: "password",
    });
  }

  function switchMode(next: Mode) {
    setMode(next);
    setError("");
    setNotice("");
    if (next === "signup") {
      setEmail("");
      setPassword("");
    }
    if (next === "signin") {
      setEmail("demo@recoveriq.ai");
      setPassword("Recover@2026");
    }
  }

  return (
    <main className="auth-shell">
      <section
        className="auth-story"
        aria-label="RecoverIQ product introduction"
      >
        <div className="auth-grid" aria-hidden="true" />
        <div className="auth-orbit auth-orbit-one" aria-hidden="true" />
        <div className="auth-orbit auth-orbit-two" aria-hidden="true" />
        <header className="auth-brand">
          <span className="auth-brand-mark">
            <Activity />
          </span>
          <div>
            <b>RecoverIQ</b>
            <span>REVENUE INTELLIGENCE</span>
          </div>
        </header>
        <div className="auth-story-copy">
          <div className="auth-kicker">
            <Sparkles /> BUILT FOR PAYMENT RECOVERY
          </div>
          <h1>
            Revenue shouldn&apos;t disappear after <em>one failed payment.</em>
          </h1>
          <p>
            Predict what can be recovered. Authorize the right action. Prove
            every rupee returned—with financial safety built into the workflow.
          </p>
          <div className="auth-proof-row">
            <div>
              <strong>91%</strong>
              <span>top recovery score</span>
            </div>
            <i />
            <div>
              <strong>2×</strong>
              <span>bounded attempts</span>
            </div>
            <i />
            <div>
              <strong>100%</strong>
              <span>auditable actions</span>
            </div>
          </div>
        </div>
        <div
          className="money-console"
          aria-label="Sample recovered revenue visualization"
        >
          <div className="money-console-top">
            <span>
              <i /> LIVE RECOVERY PULSE
            </span>
            <ShieldCheck />
          </div>
          <div className="money-console-value">
            <small>SIMULATED REVENUE RECOVERED</small>
            <strong>₹4,82,650</strong>
            <span>+18.4% this cycle</span>
          </div>
          <div className="money-bars" aria-hidden="true">
            {[34, 48, 43, 62, 54, 74, 66, 88, 82, 96].map((height, index) => (
              <i key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="floating-payment floating-payment-a">
            <span className="payment-status">
              <Check />
            </span>
            <div>
              <b>Payment recovered</b>
              <small>UPI · ₹8,420</small>
            </div>
            <em>Just now</em>
          </div>
          <div className="floating-payment floating-payment-b">
            <span className="payment-status payment-status-blue">
              <WalletCards />
            </span>
            <div>
              <b>Link authorized</b>
              <small>Guardrail approved</small>
            </div>
            <em>12 sec</em>
          </div>
        </div>
        <footer className="auth-story-footer">
          <span>
            <LockKeyhole /> Financial-grade guardrails
          </span>
          <span>Razorpay Buildathon · 2026</span>
        </footer>
      </section>

      <section className="auth-form-side">
        <div className="auth-mobile-brand">
          <span className="auth-brand-mark">
            <Activity />
          </span>
          <b>RecoverIQ</b>
        </div>
        <div className="auth-form-wrap">
          <div className="auth-form-icon">
            {mode === "signup" ? (
              <UserRound />
            ) : mode === "reset" ? (
              <KeyRound />
            ) : (
              <Fingerprint />
            )}
          </div>
          <p className="auth-overline">SECURE MERCHANT WORKSPACE</p>
          <h2>
            {mode === "signin"
              ? "Welcome back"
              : mode === "signup"
                ? "Create your workspace"
                : "Reset your password"}
          </h2>
          <p className="auth-subtitle">
            {mode === "signin"
              ? "Sign in to continue recovering revenue."
              : mode === "signup"
                ? "Start with a safe, credential-free demo workspace."
                : "Enter your email and we’ll prepare reset instructions."}
          </p>

          {mode !== "reset" && (
            <button
              className="google-button"
              type="button"
              onClick={signInWithGoogle}
              disabled={submitting}
            >
              <span className="google-g">G</span> Continue with Google
            </button>
          )}
          {mode !== "reset" && (
            <div className="auth-divider">
              <span>or continue with email</span>
            </div>
          )}

          <form onSubmit={submit} className="auth-form" noValidate>
            {mode === "signup" && (
              <div className="auth-field-row">
                <AuthField label="Full name" icon={UserRound}>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Abdus Sami"
                    autoComplete="name"
                  />
                </AuthField>
                <AuthField label="Company" icon={WalletCards}>
                  <Input
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="RecoverIQ Demo Merchant"
                    autoComplete="organization"
                  />
                </AuthField>
              </div>
            )}
            <AuthField label="Work email" icon={Mail}>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </AuthField>
            {mode !== "reset" && (
              <AuthField
                label="Password"
                icon={LockKeyhole}
                action={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                }
              >
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  autoComplete={
                    mode === "signup" ? "new-password" : "current-password"
                  }
                />
              </AuthField>
            )}
            {mode === "signin" && (
              <div className="auth-form-options">
                <label>
                  <Checkbox
                    checked={remember}
                    onCheckedChange={(value) => setRemember(value === true)}
                  />{" "}
                  Keep me signed in
                </label>
                <button type="button" onClick={() => switchMode("reset")}>
                  Forgot password?
                </button>
              </div>
            )}
            {error && (
              <div className="auth-message auth-error" role="alert">
                {error}
              </div>
            )}
            {notice && (
              <div className="auth-message auth-success" role="status">
                <CheckCircle2 />
                {notice}
              </div>
            )}
            <Button type="submit" className="auth-submit" disabled={submitting}>
              {submitting ? (
                <span className="auth-spinner" />
              ) : mode === "signin" ? (
                "Sign in to RecoverIQ"
              ) : mode === "signup" ? (
                "Create demo workspace"
              ) : (
                "Send reset instructions"
              )}
              <ArrowRight />
            </Button>
          </form>

          {mode === "signin" && (
            <button
              className="demo-access"
              onClick={() =>
                finish({
                  name: "Buildathon Judge",
                  email: "judge@recoveriq.demo",
                  company: "RecoverIQ Demo Merchant",
                  method: "demo",
                })
              }
              disabled={submitting}
            >
              <span>
                <Sparkles />
              </span>
              <div>
                <b>Explore the judge demo</b>
                <small>No credentials or API keys needed</small>
              </div>
              <ArrowRight />
            </button>
          )}

          <p className="auth-switch">
            {mode === "signin" ? (
              <>
                New to RecoverIQ?{" "}
                <button onClick={() => switchMode("signup")}>
                  Create an account
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button onClick={() => switchMode("signin")}>Sign in</button>
              </>
            )}
          </p>
          {mode === "reset" && (
            <button className="auth-back" onClick={() => switchMode("signin")}>
              ← Back to sign in
            </button>
          )}
          <div className="auth-trust">
            <ShieldCheck />
            <span>
              <b>Protected by deterministic guardrails</b>
              <small>AI can recommend. Only rules can authorize.</small>
            </span>
          </div>
        </div>
        <footer className="auth-form-footer">
          Google OAuth requires configured client credentials
        </footer>
      </section>
    </main>
  );
}

function AuthField({
  label,
  icon: Icon,
  action,
  children,
}: {
  label: string;
  icon: typeof Mail;
  action?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <label className="auth-field">
      <span>{label}</span>
      <div className="auth-input-wrap">
        <Icon className="auth-input-icon" />
        {children}
        {action && <span className="auth-input-action">{action}</span>}
      </div>
    </label>
  );
}
