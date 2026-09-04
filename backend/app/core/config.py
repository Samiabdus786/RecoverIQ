from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: str = "development"
    database_url: str = "sqlite:///./recoveriq.db"
    demo_seed: int = 42
    demo_mode: bool = True
    payment_provider: str = "mock"
    gemini_api_key: str | None = None
    razorpay_key_id: str | None = None
    razorpay_key_secret: str | None = None
    razorpay_webhook_secret: str = "demo-webhook-secret"
    recovery_max_attempts: int = 2
    recovery_max_contacts: int = 2
    recovery_window_hours: int = 168
    min_contact_delay_minutes: int = 30
    high_value_approval_threshold: int = 25000
    cors_origins: str = "http://localhost:5173,http://localhost:3000"
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    @property
    def cors_origin_list(self) -> list[str]:
        return [item.strip() for item in self.cors_origins.split(",") if item.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
