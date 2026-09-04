import { NextRequest, NextResponse } from "next/server";
import { act } from "@/lib/demo-store";
export async function POST(request: NextRequest) {
  try { const body = await request.json(); return NextResponse.json(await act(body.type, body.id)); }
  catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Action failed" }, { status: 400 }); }
}
