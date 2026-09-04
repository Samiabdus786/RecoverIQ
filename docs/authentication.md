# Authentication modes

## Credential-free demo mode

RecoverIQ intentionally runs before any API keys are added. The login page supports:

- email/password demo sign-in with prefilled non-secret demo credentials;
- judge demo access, which creates a clearly labeled local demo session;
- new-user workspace form;
- password-reset confirmation state;
- remembered browser session and explicit sign-out.

Demo sessions contain only name, demo email, company, and login method in browser storage. Passwords are never stored. This is appropriate for the five-minute buildathon demonstration, not production identity.

## Real Google sign-in

Set `NEXT_PUBLIC_GOOGLE_CLIENT_ID` after creating a Google OAuth web client. The `Continue with Google` button loads Google Identity Services, requests a Google access token, and posts it to `/api/auth/google`. That server route verifies the token with Google userinfo before the browser session is accepted.

For local development, add `http://localhost:5173` as an authorized JavaScript origin in Google Cloud Console. For deployment, add the production HTTPS origin too.

Recommended production flow:

1. Google authorization is validated by a server-side auth layer.
2. Backend creates an HTTP-only, Secure, SameSite session.
3. Merchant membership is resolved server-side.
4. Every FastAPI query filters by authenticated `merchant_id`.
5. Demo controls are disabled when `DEMO_MODE=false`.

Never expose `RAZORPAY_KEY_SECRET`, webhook secrets, Gemini keys, database passwords, or service-role keys in the frontend.
