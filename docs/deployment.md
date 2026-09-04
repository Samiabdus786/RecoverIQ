# Deployment

## Frontend

The root React/Vite/Vinext application builds with:

```bash
npm ci
npm run build
```

It is deployable with ChatGPT Sites as included or on a compatible Node/Vite host. The deployed build includes a server-side demo API for the credential-free judge experience.

## FastAPI on Render/Railway

Working directory: `backend`

```bash
pip install -r requirements.txt
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

Set `DATABASE_URL` to a PostgreSQL/Supabase connection string and configure payment/AI secrets as platform environment variables. `render.yaml` provides a baseline.

## Supabase/PostgreSQL

Use `postgresql+psycopg://USER:PASSWORD@HOST:5432/postgres?sslmode=require`. Apply the migration in `alembic/versions/0001_initial.sql` or let SQLAlchemy initialize a clean demo database. Production should apply versioned migrations rather than `create_all`.

## Production checklist

- Set `DEMO_MODE=false` and disable development controls.
- Use tenant authentication and merchant ownership checks at every query boundary.
- Use PostgreSQL, encrypted platform secrets, HTTPS, and a durable LangGraph checkpointer/worker.
- Configure exact CORS origins.
- Verify Test Mode end-to-end before live keys; rotate secrets after demonstrations.
