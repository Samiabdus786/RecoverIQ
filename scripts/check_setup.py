"""Validate RecoverIQ local configuration without printing secret values."""

from __future__ import annotations

import os
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]


def load_env(path: Path) -> None:
    if not path.exists():
        return
    for raw_line in path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip().strip('"').strip("'"))


def configured(key: str) -> bool:
    value = os.getenv(key, "").strip()
    return bool(value and value not in {"change-me", "your-key-here"})


def main() -> int:
    env_path = ROOT / ".env"
    load_env(env_path)

    provider = os.getenv("PAYMENT_PROVIDER", "mock").strip().lower()
    database_url = os.getenv("DATABASE_URL", "sqlite:///./recoveriq.db")
    failures: list[str] = []

    print("RecoverIQ setup check")
    print(f"  Environment file: {'found' if env_path.exists() else 'not found (safe demo defaults apply)'}")
    print(f"  Payment provider: {provider or 'mock'}")
    print(f"  Gemini diagnosis: {'configured' if configured('GEMINI_API_KEY') else 'deterministic fallback'}")
    print(f"  Database: {'PostgreSQL/Supabase' if database_url.startswith('postgresql') else 'SQLite'}")

    if provider == "razorpay":
        for key in (
            "RAZORPAY_KEY_ID",
            "RAZORPAY_KEY_SECRET",
            "RAZORPAY_WEBHOOK_SECRET",
        ):
            if not configured(key):
                failures.append(f"{key} is required for Razorpay mode")
        key_id = os.getenv("RAZORPAY_KEY_ID", "")
        if key_id and not key_id.startswith("rzp_test_"):
            failures.append("Use a Razorpay Test Mode key (rzp_test_...) for the buildathon demo")
    elif provider != "mock":
        failures.append("PAYMENT_PROVIDER must be 'mock' or 'razorpay'")

    if failures:
        print("\nSetup needs attention:")
        for failure in failures:
            print(f"  - {failure}")
        return 1

    print("\nSetup is valid. No secret values were displayed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
