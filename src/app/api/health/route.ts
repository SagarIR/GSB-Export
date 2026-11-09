import { NextResponse } from "next/server";
import { isDatabaseAvailable } from "@/lib/prisma";

export async function GET() {
  const dbOk = await isDatabaseAvailable();
  return NextResponse.json({
    status: "ok",
    service: "GSB Export Web Application",
    database: dbOk ? "connected" : "offline_mock_mode",
    timestamp: new Date().toISOString(),
  });
}

