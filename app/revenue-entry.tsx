"use client";

import { useEffect } from "react";
import { Check, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import type { AuthSession } from "./auth-screen";

export default function RevenueEntry({
  session,
  portfolioValue,
  onComplete,
}: {
  session: AuthSession;
  portfolioValue?: number;
  onComplete: () => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2100);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <main className="revenue-entry" aria-label="Signing in to RecoverIQ">
      <div className="entry-grid" aria-hidden="true" />
      <div className="entry-glow" aria-hidden="true" />
      <div className="entry-coins" aria-hidden="true">
        {["₹", "₹", "₹", "₹", "₹", "₹", "₹", "₹", "₹"].map((coin, index) => (
          <i
            key={index}
            style={
              {
                "--coin-index": index,
                left: `${8 + index * 10}%`,
              } as React.CSSProperties
            }
          >
            {coin}
          </i>
        ))}
      </div>
      <section className="entry-card">
        <div className="entry-logo">
          <TrendingUp />
        </div>
        <p className="entry-kicker">
          <Sparkles /> REVENUE INTELLIGENCE ONLINE
        </p>
        <h1>Welcome, {session.name.split(" ")[0]}</h1>
        <p>
          Securing your workspace and connecting the recovery control plane.
        </p>
        <div className="entry-value">
          <div>
            {portfolioValue !== undefined ? (
              <strong>
                {new Intl.NumberFormat("en-IN", {
                  style: "currency",
                  currency: "INR",
                  maximumFractionDigits: 0,
                }).format(portfolioValue)}
              </strong>
            ) : (
              <strong className="entry-calculating">Calculating…</strong>
            )}
          </div>
          <small>SYNTHETIC PORTFOLIO REVENUE AT RISK</small>
        </div>
        <div className="entry-progress">
          <i />
        </div>
        <div className="entry-checks">
          <span>
            <Check /> Session verified
          </span>
          <span>
            <ShieldCheck /> Guardrails active
          </span>
        </div>
      </section>
    </main>
  );
}
