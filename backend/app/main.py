from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.agents.diagnosis import GeminiDiagnosisProvider, SafeDiagnosisService
from app.api.routes import router
from app.core.config import get_settings
from app.database.session import Base, SessionLocal, engine
from app.ml.predictor import RecoveryPredictor
from app.payments.providers import MockPaymentProvider, RazorpayProvider
from app.services.seed import ensure_seeded
from app.workflows.recovery import RecoveryWorkflowService


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    with SessionLocal() as db: ensure_seeded(db, get_settings().demo_seed)
    yield


settings = get_settings()
app = FastAPI(title="RecoverIQ API", version="1.0.0", lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=settings.cors_origin_list, allow_credentials=True,
                   allow_methods=["*"], allow_headers=["*"])
provider = (RazorpayProvider(settings.razorpay_key_id, settings.razorpay_key_secret)
            if settings.payment_provider == "razorpay" and settings.razorpay_key_id and settings.razorpay_key_secret
            else MockPaymentProvider())
gemini = GeminiDiagnosisProvider(settings.gemini_api_key) if settings.gemini_api_key else None
app.state.provider = provider
app.state.ai_mode = "GEMINI" if gemini else "DEMO / DETERMINISTIC AI MODE"
app.state.workflow = RecoveryWorkflowService(settings, RecoveryPredictor(), SafeDiagnosisService(gemini), provider)
app.include_router(router)
