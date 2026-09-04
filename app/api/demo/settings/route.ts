import { NextRequest, NextResponse } from "next/server";
import { snapshot, updateSettings } from "@/lib/demo-store";

export async function GET() {
  return NextResponse.json(snapshot());
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json(updateSettings(body));
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Settings update failed" },
      { status: 400 },
    );
  }
}
