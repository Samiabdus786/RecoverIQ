# Authentication Modes

## Judge Demo Access

RecoverIQ intentionally runs before any API keys are added. The login page supports an explicit **Explore the judge demo** path that creates a local demo session for a single synthetic merchant workspace.

The email/password, new-workspace, and reset-password screens are demo-session flows. They are useful for the review experience, but they are not production password authentication, account provisioning, or email delivery.

Demo sessions store only name, email, company, and login method in browser storage. Passwords are not persisted.

## Google OAuth

Set `NEXT_PUBLIC_GOOGLE_CLIENT_ID` after creating a Google OAuth web client. The **Continue with Google** button loads Google Identity Services, requests a Google access token, and posts it to `/api/auth/google`. That server route verifies the token with Google's `userinfo` endpoint before the browser session is accepted.

For local development, add `http://localhost:5173` as an authorized JavaScript origin in Google Cloud Console. For Vercel, add the deployed HTTPS origin.

The current Google OAuth implementation returns a browser session containing:

- verified Google email;
- display name;
- company inferred from hosted domain or email domain;
- login method `google`.

## Production Boundary

Before using real merchant data, add production tenant authorization:

1. Create an HTTP-only, Secure, SameSite backend session after Google verification.
2. Resolve merchant membership server-side.
3. Filter every FastAPI query by authenticated `merchant_id`.
4. Disable or protect demo controls when `DEMO_MODE=false`.

Never expose `RAZORPAY_KEY_SECRET`, webhook secrets, Gemini keys, database passwords, service-role keys, or Google client secrets in frontend variables.
