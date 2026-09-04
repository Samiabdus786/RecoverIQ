from __future__ import annotations
import numpy as np
import pandas as pd


METHODS = np.array(["upi", "card", "netbanking", "wallet"])
REASONS = np.array(["temporary_failure", "network_error", "bank_timeout", "insufficient_funds", "bank_decline", "invalid_account", "fraud_suspected"])
SEGMENTS = np.array(["STANDARD", "PREMIUM", "ENTERPRISE"])


def generate_dataset(n: int = 10_000, seed: int = 42) -> pd.DataFrame:
    rng = np.random.default_rng(seed)
    successes = rng.poisson(7, n)
    failures = rng.poisson(2, n)
    total = successes + failures
    success_rate = successes / np.maximum(total, 1)
    reason = rng.choice(REASONS, n, p=[.22, .14, .12, .22, .16, .08, .06])
    method = rng.choice(METHODS, n, p=[.43, .32, .17, .08])
    segment = rng.choice(SEGMENTS, n, p=[.66, .28, .06])
    hours = np.clip(rng.gamma(2.2, 18, n), .2, 240)
    amount = np.clip(rng.lognormal(8.25, .82, n), 199, 125_000)
    attempt = rng.integers(1, 4, n)
    logit = (
        -1.15 + 2.7 * success_rate - .24 * failures - .36 * (attempt - 1)
        - .0065 * hours + np.isin(reason, ["temporary_failure", "network_error", "bank_timeout"]) * 1.15
        - np.isin(reason, ["invalid_account", "fraud_suspected"]) * 1.55
        + (segment == "PREMIUM") * .25 + (segment == "ENTERPRISE") * .38
        + (method == "upi") * .12
    )
    p = 1 / (1 + np.exp(-logit))
    recovered = rng.binomial(1, p)
    return pd.DataFrame({
        "transaction_amount": amount.round(2), "customer_age_days": rng.integers(7, 1800, n),
        "number_previous_transactions": total, "previous_success_count": successes,
        "previous_failure_count": failures, "historical_success_rate": success_rate.round(4),
        "payment_method": method, "failure_reason": reason, "attempt_number": attempt,
        "hours_since_failure": hours.round(2), "hour_of_day": rng.integers(0, 24, n),
        "day_of_week": rng.integers(0, 7, n), "customer_value_segment": segment,
        "previous_recovery_count": rng.poisson(1, n),
        "subscription_status": np.where(np.isin(segment, ["PREMIUM", "ENTERPRISE"]), "active", "none"),
        "recovered": recovered,
    })
