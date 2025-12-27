import Redis from "ioredis";

let redis;

if (!global.redis) {
  global.redis = new Redis({
    host: "127.0.0.1",
    port: 6379,
    family: 4,

    lazyConnect: true,
    enableOfflineQueue: false,

    maxRetriesPerRequest: 3,
    connectTimeout: 10000,
    keepAlive: 30000,

    retryStrategy: (times) => {
      if (times > 3) return null;
      return Math.min(times * 200, 2000);
    },
  });
}

redis = global.redis;

export default redis;