from typing import Literal, TypedDict
from langgraph.graph import END, START, StateGraph


class RecoveryGraphState(TypedDict, total=False):
    case_id: str
    stage: str
    probability: float
    recommended_action: str
    guardrail_decision: str
    approved: bool
    outcome: str
    attempts: int


def _stage(name: str):
    return lambda state: {"stage": name}


def after_guard(state: RecoveryGraphState) -> Literal["approval", "execute", "stop"]:
    if state.get("guardrail_decision") == "HUMAN_REVIEW": return "approval"
    if state.get("guardrail_decision") == "APPROVED" and state.get("recommended_action") != "DO_NOTHING": return "execute"
    return "stop"


def after_approval(state: RecoveryGraphState) -> Literal["execute", "stop"]:
    return "execute" if state.get("approved") else "stop"


def after_monitor(state: RecoveryGraphState) -> Literal["recovered", "execute", "stop"]:
    if state.get("outcome") == "SUCCESS": return "recovered"
    return "execute" if state.get("outcome") == "RETRY" and state.get("attempts", 0) < 2 else "stop"


def execute(state: RecoveryGraphState):
    return {"stage": "EXECUTING", "attempts": state.get("attempts", 0) + 1}


def build_recovery_graph():
    """Compiled, bounded LangGraph. Financial execution remains outside graph nodes."""
    graph = StateGraph(RecoveryGraphState)
    for name in ["load", "score", "diagnose", "guard", "approval", "monitor", "recovered", "stop"]:
        graph.add_node(name, _stage(name.upper()))
    graph.add_node("execute", execute)
    graph.add_edge(START, "load"); graph.add_edge("load", "score"); graph.add_edge("score", "diagnose"); graph.add_edge("diagnose", "guard")
    graph.add_conditional_edges("guard", after_guard, {"approval": "approval", "execute": "execute", "stop": "stop"})
    graph.add_conditional_edges("approval", after_approval, {"execute": "execute", "stop": "stop"})
    graph.add_edge("execute", "monitor")
    graph.add_conditional_edges("monitor", after_monitor, {"recovered": "recovered", "execute": "execute", "stop": "stop"})
    graph.add_edge("recovered", END); graph.add_edge("stop", END)
    return graph.compile()
