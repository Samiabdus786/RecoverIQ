from pathlib import Path
import joblib


class RecoveryPredictor:
    def __init__(self, artifact_path: str | None = None):
        default = Path(__file__).resolve().parents[3] / "ml" / "artifacts" / "recovery_model.joblib"
        self.path = Path(artifact_path) if artifact_path else default
        self.model = joblib.load(self.path) if self.path.exists() else None

    def predict(self, features: dict) -> tuple[float, bool]:
        if self.model is not None:
            import pandas as pd
            return float(self.model.predict_proba(pd.DataFrame([features]))[0, 1]), False
        success_rate = float(features.get("historical_success_rate", 0.5))
        failures = int(features.get("previous_failure_count", 0))
        hours = float(features.get("hours_since_failure", 24))
        reason = features.get("failure_reason", "unknown")
        reason_bonus = {"temporary_failure": .22, "network_error": .18, "bank_timeout": .17, "insufficient_funds": -.08}.get(reason, -.16)
        probability = .28 + .52 * success_rate + reason_bonus - .035 * failures - min(.22, hours / 900)
        return max(.04, min(.96, probability)), True
