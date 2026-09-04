# ML evaluation

The training pipeline generated 10,000 transactions with seed 42. Labels are stochastic but structured: historical success and temporary failures increase recovery probability; repeated attempts, older failures, hard declines, invalid accounts, and suspected fraud reduce it. This avoids a trivially deterministic target while preserving realistic signal.

## Data and split

- Train: 7,000
- Validation: 1,500 (threshold selection only)
- Test: 1,500 (final reporting only)
- Positive rate: 0.5814
- No target-derived inputs; split occurs before fitting preprocessing.

Numeric features are standardized and categoricals are one-hot encoded inside one scikit-learn pipeline. `XGBClassifier` uses 220 estimators, max depth 4, learning rate 0.055, row/feature subsampling, and seed 42. Validation F1 selected threshold 0.34.

| Metric | Value |
|---|---:|
| Precision | 0.6772 |
| Recall | 0.9358 |
| F1 | 0.7857 |
| ROC-AUC | 0.7791 |
| PR-AUC | 0.8156 |
| Brier score | 0.1862 |

Confusion matrix `[[TN, FP], [FN, TP]]`: `[[239, 389], [56, 816]]`.

The operating point emphasizes recall because missed recoverable revenue is expensive; guardrails and expected-value filtering absorb model false positives before customer contact. Production thresholds must be re-estimated on consented outcomes and monitored for segment drift. Synthetic performance proves the pipeline works, not production lift.
