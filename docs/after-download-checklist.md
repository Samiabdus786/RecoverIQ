# After-download checklist

Use this order so the credential-free demo remains available while real integrations are added.

## 1. Extract and verify the project

```bash
cd RecoverIQ
npm ci
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt
python scripts/check_setup.py
npm test
cd backend && python -m pytest && cd ..
```

Windows PowerShell activation:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r backend/requirements.txt
```

The first setup check should report **mock provider**, **deterministic fallback**, and **SQLite**. That is the expected zero-key configuration.

## 2. Create the local environment file

Copy `.env.example` to `.env`. Never commit `.env`.

```bash
cp .env.example .env
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

## 3. Add Gemini safely

Create a Gemini API key and set only:

```env
GEMINI_API_KEY=your_key
```

If it is absent or fails validation, RecoverIQ uses the deterministic diagnosis fallback. Do not expose the key through a `NEXT_PUBLIC_` or `VITE_` variable.

## 4. Add Razorpay Test Mode

Use **Test Mode**, never live payment credentials for judging:

```env
PAYMENT_PROVIDER=razorpay
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=your_test_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret
```

Run `python scripts/check_setup.py` again. It checks presence and mode without printing secret values.

## 5. Choose the database

- For a laptop demo, keep `DATABASE_URL=sqlite:///./recoveriq.db`. No database account is required.
- For a deployed multi-user backend, create a Supabase/PostgreSQL database and use a server-only `postgresql+psycopg://...` URL.
- Apply `alembic/versions/0001_initial.sql` to a fresh production database.

## 6. Run both applications

Terminal 1:

```bash
cd backend
uvicorn app.main:app --reload --port 8000
```

Terminal 2:

```bash
npm run dev
```

The frontend judge experience remains credential-free. The FastAPI service exposes the full provider, workflow, database, and webhook implementation at `http://localhost:8000/docs`.

## 7. Configure the Razorpay webhook

Deploy the FastAPI backend to an HTTPS host, then register:

```text
https://YOUR_API_HOST/api/webhooks/razorpay
```

Use the same `RAZORPAY_WEBHOOK_SECRET` in Razorpay and the backend. Test duplicate delivery and payment capture before recording the demo.

## 8. Submission readiness

- Keep the visible **Simulation / Synthetic Data** labels.
- Record a 2–3 minute demo using `docs/demo-script.md`.
- Show one high-value human approval, one successful recovery, one provider failure, and one duplicate webhook.
- Export the recovery evidence CSV from **Audit trail**.
- Include the deployed frontend URL, GitHub repository, README, architecture diagram, and demo video.
- Make the judge URL accessible before submission; the current ChatGPT Site is owner-only until its access policy is changed.
