# After-Download Checklist

Use this order so the credential-free demo remains available while real integrations are added.

## 1. Install And Verify

```bash
cd RecoverIQ
npm ci
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r backend/requirements.txt
python scripts/check_setup.py
npm test
python -m pytest backend
```

The first setup check should report Mock Provider unless Razorpay credentials are already configured. Gemini may report deterministic fallback until `GEMINI_API_KEY` is set.

## 2. Create The Local Environment File

Copy `.env.example` to `.env`. Never commit `.env`.

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## 3. Configure Supabase/PostgreSQL

For the intended deployed architecture, create a Supabase project and set a server-only PostgreSQL URL:

```env
DATABASE_URL=postgresql+psycopg://USER:PASSWORD@HOST:5432/postgres?sslmode=require
```

Apply `alembic/versions/0001_initial.sql` to a fresh Supabase database, or let SQLAlchemy initialize a clean demo database. Isolated local/backend tests may still use SQLite.

## 4. Add Gemini Safely

Create a Gemini API key and set only:

```env
GEMINI_API_KEY=...
```

If it is absent or validation fails, RecoverIQ uses the deterministic diagnosis fallback. Do not expose the key through a `NEXT_PUBLIC_` or `VITE_` variable.

## 5. Add Razorpay Test Mode

Use **Test Mode**, never live payment credentials for public review:

```env
PAYMENT_PROVIDER=razorpay
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
```

Run `python scripts/check_setup.py` again. It checks presence and mode without printing secret values.

## 6. Configure Google OAuth

Create a Google OAuth web client and set:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=...
```

Add `http://localhost:5173` for local development and the final Vercel HTTPS origin for deployment.

## 7. Run Both Applications Locally

Terminal 1:

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

Terminal 2:

```bash
npm run dev
```

The frontend demo remains usable without external keys. The FastAPI service exposes the provider, workflow, database, and webhook implementation at `http://localhost:8000/docs`.

## 8. Configure The Razorpay Webhook

Deploy the FastAPI backend to Render, then register:

```text
https://YOUR_RENDER_BACKEND/api/webhooks/razorpay
```

Use the same `RAZORPAY_WEBHOOK_SECRET` in Razorpay and the backend. Test duplicate delivery and payment capture before recording the demo.

## 9. Review Readiness

- Keep visible **Simulation / Synthetic Data** labels.
- Record a short demo using `docs/demo-script.md`.
- Show one high-value human approval, one successful recovery, one provider failure, and one duplicate webhook.
- Export the recovery evidence CSV from **Audit trail**.
- Include the Vercel frontend URL, Render backend URL, GitHub repository, README, architecture diagram, and demo video.
