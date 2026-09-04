def test_health(client):
    body = client.get("/api/health").json()
    assert body["status"] == "healthy"
    assert body["payment_provider"] == "MOCK PROVIDER"


def test_seed_is_reproducible(client):
    first = client.get("/api/transactions").json()
    client.post("/api/demo/seed")
    second = client.get("/api/transactions").json()
    assert [x["external_id"] for x in first] == [x["external_id"] for x in second]
    assert sum(x["amount"] for x in first) == sum(x["amount"] for x in second)


def test_dashboard_numbers_come_from_database(client):
    tx = client.get("/api/transactions").json()
    metrics = client.get("/api/dashboard/metrics").json()
    assert metrics["revenue_at_risk"] == sum(x["amount"] for x in tx)
    assert metrics["revenue_recovered"] == 0


def test_run_batch_scores_and_explains(client):
    result = client.post("/api/recovery/run").json()
    assert result["analyzed"] == 10
    cases = client.get("/api/recovery/cases").json()
    assert all(0 < case["probability"] < 1 for case in cases)
    assert any(case["priority"] == "SUPPRESSED" for case in cases)
    detail = client.get(f"/api/transactions/{cases[0]['id']}").json()
    assert detail["diagnosis"]["reasoning_summary"]
    assert detail["audit"]


def test_high_value_requires_human_approval(client):
    client.post("/api/recovery/run")
    case = next(x for x in client.get("/api/recovery/cases").json() if x["amount"] >= 25000)
    assert case["state"] == "AWAITING_APPROVAL"
    approved = client.post(f"/api/recovery/{case['id']}/approve", json={"approved": True, "note": "Approved in test"}).json()
    assert approved["state"] == "MONITORING"


def test_success_stops_workflow_and_updates_revenue(client):
    client.post("/api/recovery/run")
    case = next(x for x in client.get("/api/recovery/cases").json() if x["state"] == "MONITORING")
    assert "payment_link_id" in case
    assert "payment_link_url" in case
    result = client.post(f"/api/demo/simulate-success/{case['id']}").json()
    assert result["case"]["state"] == "RECOVERED"
    metrics = client.get("/api/dashboard/metrics").json()
    assert metrics["revenue_recovered"] == case["amount"]
    execute = client.post(f"/api/recovery/{case['id']}/execute").json()
    assert execute["state"] == "RECOVERED"


def test_provider_failure_safe_and_audited(client):
    case = client.get("/api/recovery/cases").json()[0]
    failed = client.post(f"/api/demo/simulate-provider-failure/{case['id']}").json()
    assert failed["state"] in {"FAILED", "STOPPED", "AWAITING_APPROVAL"}
    audit = client.get("/api/audit").json()
    if failed["state"] == "FAILED":
        assert any(row["event_type"] == "PROVIDER_FAILURE" for row in audit)


def test_duplicate_demo_webhook(client):
    case = client.get("/api/recovery/cases").json()[0]
    first = client.post(f"/api/demo/simulate-duplicate-webhook/{case['id']}").json()
    second = client.post(f"/api/demo/simulate-duplicate-webhook/{case['id']}").json()
    assert first["second_ignored"] and second["second_ignored"]
    assert second["duplicate_actions"] == 0
    metrics = client.get("/api/dashboard/metrics").json()
    assert metrics["revenue_recovered"] == 0
    audit = client.get("/api/audit").json()
    assert any(row["event_type"] == "DUPLICATE_IGNORED" for row in audit)
