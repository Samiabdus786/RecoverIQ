import { NextRequest, NextResponse } from "next/server";

type GoogleUserInfo = {
  email?: string;
  email_verified?: boolean;
  name?: string;
  given_name?: string;
  hd?: string;
};

export async function POST(request: NextRequest) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json(
      { error: "Google client ID is not configured" },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as {
    accessToken?: string;
  } | null;
  if (!body?.accessToken) {
    return NextResponse.json(
      { error: "Google access token is required" },
      { status: 400 },
    );
  }

  const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: { authorization: `Bearer ${body.accessToken}` },
    cache: "no-store",
  });
  if (!response.ok) {
    return NextResponse.json(
      { error: "Google sign-in could not be verified" },
      { status: 401 },
    );
  }

  const profile = (await response.json()) as GoogleUserInfo;
  if (!profile.email || profile.email_verified !== true) {
    return NextResponse.json(
      { error: "Google account email is not verified" },
      { status: 403 },
    );
  }

  const domain = profile.email.split("@")[1] || "Google Workspace";
  return NextResponse.json({
    name: profile.name || profile.given_name || profile.email,
    email: profile.email,
    company: profile.hd || domain,
    method: "google",
  });
}
