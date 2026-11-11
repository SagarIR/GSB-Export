import { NextResponse } from "next/server";
import { isDatabaseAvailable } from "@/lib/prisma";

const serverStartTime = Date.now();

export async function GET() {
  const dbOk = await isDatabaseAvailable();
  const uptimeSeconds = Math.floor((Date.now() - serverStartTime) / 1000);

  const memoryUsage = process.memoryUsage ? {
    heapUsedMB: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
    rssMB: Math.round(process.memoryUsage().rss / 1024 / 1024),
  } : undefined;

  return NextResponse.json({
    status: "healthy",
    service: "GSB Export Web Application",
    environment: process.env.NODE_ENV || "development",
    version: "1.0.0",
    uptimeSeconds,
    database: {
      status: dbOk ? "connected" : "offline_fallback_mode",
      provider: "postgresql",
    },
    storage: {
      provider: process.env.S3_BUCKET ? "s3_compatible" : "local_filesystem",
    },
    memory: memoryUsage,
    timestamp: new Date().toISOString(),
  });
}
