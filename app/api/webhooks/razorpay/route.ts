import { NextRequest, NextResponse } from "next/server";
import { processRazorpayWebhook } from "@/lib/demo-store";

async function hmacSha256Hex(message: string, secret: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    encoder.encode(message),
  );
  return Array.from(new Uint8Array(signature))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function sha256Hex(message: string) {
  const digest = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(message),
  );
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return mismatch === 0;
}

export async function POST(request: NextRequest) {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json(
      { error: "Razorpay webhook secret is not configured" },
      { status: 503 },
    );
  }

  const body = await request.text();
  const signature = request.headers.get("x-razorpay-signature") || "";
  const expected = await hmacSha256Hex(body, secret);
  if (!safeEqual(signature, expected)) {
    return NextResponse.json(
      { error: "Invalid Razorpay webhook signature" },
      { status: 401 },
    );
  }

  const eventId =
    request.headers.get("x-razorpay-event-id") ||
    `sha256:${await sha256Hex(body)}`;
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return NextResponse.json(
      { error: "Invalid Razorpay webhook payload" },
      { status: 400 },
    );
  }

  const result = processRazorpayWebhook(payload, eventId);
  return NextResponse.json(result);
}
