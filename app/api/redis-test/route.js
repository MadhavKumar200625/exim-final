// app/api/redis-test/route.js
import { NextResponse } from "next/server";
import redis from "@/lib/redis";

export async function GET() {
  try {
    await redis.set("health:test", "ok", "EX", 60);
    const v = await redis.get("health:test");

    return NextResponse.json({
      redis: "CONNECTED",
      value: v,
    });
  } catch (e) {
    return NextResponse.json({
      redis: "FAILED",
      error: e.message,
    });
  }
}