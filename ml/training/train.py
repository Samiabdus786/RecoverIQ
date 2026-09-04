from __future__ import annotations
import json
from pathlib import Path
import joblib
import numpy as np
from sklearn.compose import ColumnTransformer
from sklearn.metrics import average_precision_score, brier_score_loss, confusion_matrix, f1_score, precision_score, recall_score, roc_auc_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from xgboost import XGBClassifier
from ml.training.generate import generate_dataset


ROOT = Path(__file__).resolve().parents[2]
ARTIFACTS = ROOT / "ml" / "artifacts"
DATA = ROOT / "data"


def train(seed: int = 42, n: int = 10_000) -> dict:
    ARTIFACTS.mkdir(parents=True, exist_ok=True); DATA.mkdir(parents=True, exist_ok=True)
    df = generate_dataset(n=n, seed=seed)
    df.to_csv(DATA / "synthetic_transactions.csv", index=False)
    X, y = df.drop(columns="recovered"), df["recovered"]
    X_train, X_temp, y_train, y_temp = train_test_split(X, y, test_size=.30, stratify=y, random_state=seed)
    X_val, X_test, y_val, y_test = train_test_split(X_temp, y_temp, test_size=.50, stratify=y_temp, random_state=seed)
    categorical = X.select_dtypes(include="object").columns.tolist()
    numeric = [c for c in X.columns if c not in categorical]
    pre = ColumnTransformer([("numeric", StandardScaler(), numeric), ("categorical", OneHotEncoder(handle_unknown="ignore"), categorical)])
    model = XGBClassifier(
        n_estimators=220, max_depth=4, learning_rate=.055, subsample=.86, colsample_bytree=.84,
        eval_metric="logloss", random_state=seed, n_jobs=2,
    )
    pipeline = Pipeline([("preprocess", pre), ("model", model)])
    pipeline.fit(X_train, y_train)
    val_probability = pipeline.predict_proba(X_val)[:, 1]
    thresholds = np.arange(.25, .76, .01)
    threshold = float(max(thresholds, key=lambda t: f1_score(y_val, val_probability >= t)))
    probability = pipeline.predict_proba(X_test)[:, 1]
    predicted = probability >= threshold
    matrix = confusion_matrix(y_test, predicted).tolist()
    metrics = {
        "dataset_rows": n, "seed": seed, "split": {"train": len(X_train), "validation": len(X_val), "test": len(X_test)},
        "threshold": round(threshold, 3), "precision": round(float(precision_score(y_test, predicted)), 4),
        "recall": round(float(recall_score(y_test, predicted)), 4), "f1": round(float(f1_score(y_test, predicted)), 4),
        "roc_auc": round(float(roc_auc_score(y_test, probability)), 4),
        "pr_auc": round(float(average_precision_score(y_test, probability)), 4),
        "brier_score": round(float(brier_score_loss(y_test, probability)), 4), "confusion_matrix": matrix,
        "positive_rate": round(float(y.mean()), 4),
    }
    joblib.dump(pipeline, ARTIFACTS / "recovery_model.joblib")
    (ARTIFACTS / "metrics.json").write_text(json.dumps(metrics, indent=2))
    (ARTIFACTS / "feature_metadata.json").write_text(json.dumps({"numeric": numeric, "categorical": categorical, "target": "recovered"}, indent=2))
    return metrics


if __name__ == "__main__":
    print(json.dumps(train(), indent=2))
