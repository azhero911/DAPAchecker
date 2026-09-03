// src/lib/redis.ts
import { Redis } from '@upstash/redis';
import { APP_CONFIG } from '@/config/limits';

// In-memory cache fallback for development or when Redis keys are not provided
class InMemoryCache {
  private store = new Map<string, { value: any; expiresAt: number }>();

  async get<T>(key: string): Promise<T | null> {
    const item = this.store.get(key);
    if (!item) return null;

    if (Date.now() > item.expiresAt) {
      this.store.delete(key);
      return null;
    }

    return item.value as T;
  }

  async setex(key: string, seconds: number, value: any): Promise<'OK'> {
    this.store.set(key, {
      value,
      expiresAt: Date.now() + seconds * 1000,
    });
    return 'OK';
  }

  async incr(key: string): Promise<number> {
    const item = this.store.get(key);
    let count = 1;
    let expiresAt = Date.now() + 60000; // 1 min

    if (item && Date.now() <= item.expiresAt) {
      count = (item.value as number) + 1;
      expiresAt = item.expiresAt;
    }

    this.store.set(key, { value: count, expiresAt });
    return count;
  }

  async expire(key: string, seconds: number): Promise<number> {
    const item = this.store.get(key);
    if (item) {
      item.expiresAt = Date.now() + seconds * 1000;
      return 1;
    }
    return 0;
  }
}

let redisClient: {
  get: <T>(key: string) => Promise<T | null>;
  setex: (key: string, seconds: number, value: any) => Promise<any>;
  incr: (key: string) => Promise<number>;
  expire: (key: string, seconds: number) => Promise<number>;
};

if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
  redisClient = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL,
    token: process.env.UPSTASH_REDIS_REST_TOKEN,
  });
} else {
  // Graceful fallback to memory cache
  redisClient = new InMemoryCache();
}

export { redisClient };
