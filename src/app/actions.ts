"use server";

import { redis } from "@/lib/redis";

export async function trackVisitor(visitorId: string) {
  const isNew = await redis.sadd("app:visitors:set", visitorId);

  if (isNew === 1) {
    await redis.incr("app:visitor:count");
  }

  const count = await redis.get<number>("app:visitor:count");

  return count;
}
