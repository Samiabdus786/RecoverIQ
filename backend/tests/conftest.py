import os

import pytest
from fastapi.testclient import TestClient

os.environ["PAYMENT_PROVIDER"] = "mock"
os.environ["DATABASE_URL"] = "sqlite:///./test_recoveriq.db"

from app.main import app


@pytest.fixture()
def client():
    with TestClient(app) as test_client:
        test_client.post("/api/demo/seed")
        yield test_client
