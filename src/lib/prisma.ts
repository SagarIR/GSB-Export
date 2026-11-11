import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prismaGlobal: PrismaClient | undefined;
}

let prismaInstance: PrismaClient | null = null;

try {
  prismaInstance =
    globalThis.prismaGlobal ??
    new PrismaClient({
      log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
    });

  if (process.env.NODE_ENV !== "production") {
    globalThis.prismaGlobal = prismaInstance;
  }
} catch (err) {
  console.warn("[Prisma Initialization Notice - Build / Offline Mode]:", err);
}

export const prisma = prismaInstance as PrismaClient;

export async function isDatabaseAvailable(): Promise<boolean> {
  if (!prisma || !process.env.DATABASE_URL || process.env.DATABASE_URL.includes("username:password")) {
    return false;
  }
  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch {
    return false;
  }
}

