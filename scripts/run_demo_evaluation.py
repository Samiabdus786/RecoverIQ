from pathlib import Path
import sys
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "backend")); sys.path.insert(0, str(ROOT))
from app.main import app  # noqa: E402
from fastapi.testclient import TestClient  # noqa: E402

with TestClient(app) as client:
    client.post("/api/demo/seed")
    batch = client.post("/api/recovery/run").json()
    cases = client.get("/api/recovery/cases").json()
    target = next(case for case in cases if case["state"] == "MONITORING")
    client.post(f"/api/demo/simulate-success/{target['id']}")
    print({"batch": batch, "metrics": client.get("/api/dashboard/metrics").json(), "recovered_case": target["external_id"]})
