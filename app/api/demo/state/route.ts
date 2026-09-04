import { NextResponse } from "next/server";
import { snapshot } from "@/lib/demo-store";
export async function GET() { return NextResponse.json(snapshot()); }
