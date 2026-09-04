from app.workflows.graph import build_recovery_graph


def test_langgraph_approved_success_path():
    result = build_recovery_graph().invoke({"case_id": "case-1", "guardrail_decision": "APPROVED",
                                            "recommended_action": "CREATE_PAYMENT_LINK", "outcome": "SUCCESS", "attempts": 0})
    assert result["stage"] == "RECOVERED" and result["attempts"] == 1


def test_langgraph_human_rejection_stops_without_execution():
    result = build_recovery_graph().invoke({"case_id": "case-2", "guardrail_decision": "HUMAN_REVIEW",
                                            "recommended_action": "CREATE_PAYMENT_LINK", "approved": False, "attempts": 0})
    assert result["stage"] == "STOP" and result["attempts"] == 0


def test_langgraph_retry_is_bounded():
    result = build_recovery_graph().invoke({"case_id": "case-3", "guardrail_decision": "APPROVED",
                                            "recommended_action": "RETRY", "outcome": "RETRY", "attempts": 0})
    assert result["stage"] == "STOP" and result["attempts"] == 2
