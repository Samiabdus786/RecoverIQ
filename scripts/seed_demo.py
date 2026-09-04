from pathlib import Path
import sys
ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "backend"))
from app.database.session import Base, SessionLocal, engine  # noqa: E402
from app.services.seed import reset_and_seed  # noqa: E402

Base.metadata.create_all(bind=engine)
with SessionLocal() as db:
    print(reset_and_seed(db, 42))
