# Deployment

RecoverIQ's target deployment is:

- Frontend: Vercel
- Backend: Render / FastAPI
- Database: Supabase/PostgreSQL
- External services: Razorpay Test Mode, Gemini, Google OAuth

Do not commit `.env`. Configure secrets in the relevant hosting provider environment settings.

## Local Development

Frontend from the repository root:

```bash
npm ci
npm run dev
```

Backend from the repository root:

```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r backend/requirements.txt
python scripts/seed_demo.py
cd backend
uvicorn app.main:app --reload --port 8000
```

The local demo can run with `PAYMENT_PROVIDER=mock`. Backend tests use isolated local SQLite so they do not depend on a cloud database.

## Frontend On Vercel

Use the repository root as the frontend project root.

Recommended settings:

```text
Install command: npm ci
Build command: npm run build
Output/runtime: Vercel Node runtime for the Vinext app
```

Set frontend environment variables as needed:

```env
NEXT_PUBLIC_GOOGLE_CLIENT_ID=...
VITE_API_URL=https://YOUR_RENDER_BACKEND/api
RAZORPAY_WEBHOOK_SECRET=...
```

`RAZORPAY_WEBHOOK_SECRET` is server-only. Do not create a public `NEXT_PUBLIC_` or `VITE_` copy of payment or database secrets.

## Backend On Render

`render.yaml` provides the intended Render service definition. The backend service uses `backend` as its root directory.

Build command:

```bash
pip install -r requirements.txt
```

Start command:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

Set backend environment variables:

```env
APP_ENV=production
DEMO_MODE=true
DATABASE_URL=postgresql+psycopg://USER:PASSWORD@HOST:5432/postgres?sslmode=require
CORS_ORIGINS=https://YOUR_VERCEL_APP
PAYMENT_PROVIDER=razorpay
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=...
RAZORPAY_WEBHOOK_SECRET=...
GEMINI_API_KEY=...
```

Use Razorpay Test Mode for the Buildathon demo. Do not use live payment keys for public review.

## Supabase/PostgreSQL

Create a Supabase project and use the PostgreSQL connection string as `DATABASE_URL` on Render. Apply `alembic/versions/0001_initial.sql` to a fresh database, or let SQLAlchemy initialize a clean demo database. For production, prefer versioned migrations over runtime `create_all`.

## Production Hardening

- Restrict `CORS_ORIGINS` to exact deployed HTTPS origins.
- Keep payment, database, Gemini, and webhook secrets server-side.
- Use tenant authentication and merchant ownership checks at every query boundary before real merchant data.
- Disable or protect demo controls when `DEMO_MODE=false`.
- Verify Razorpay Test Mode end-to-end before any move toward live keys.
