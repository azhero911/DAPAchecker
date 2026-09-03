// src/lib/abuseMonitor.ts
import crypto from 'crypto';
import { redisClient } from './redis';
import { APP_CONFIG } from '@/config/limits';

/**
 * Anonymizes the IP address using SHA256 with a salt to respect GDPR privacy standards.
 */
export function hashIp(rawIp: string): string {
  const salt = process.env.SALT || 'dapa_privacy_salt_2026';
  return crypto.createHmac('sha256', salt).update(rawIp || 'unknown_ip').digest('hex').slice(0, 16);
}

export interface RateLimitStatus {
  allowed: boolean;
  remaining: number;
  resetSeconds: number;
}

/**
 * Checks sliding-window rate limit using Redis / memory store.
 */
export async function checkRateLimit(clientIp: string): Promise<RateLimitStatus> {
  const hashed = hashIp(clientIp);
  const key = `ratelimit:${hashed}`;

  try {
    const requests = await redisClient.incr(key);

    if (requests === 1) {
      await redisClient.expire(key, 60); // 60-second window
    }

    const maxAllowed = APP_CONFIG.rateLimitPerMinute;

    if (requests > maxAllowed) {
      return {
        allowed: false,
        remaining: 0,
        resetSeconds: 60,
      };
    }

    return {
      allowed: true,
      remaining: Math.max(0, maxAllowed - requests),
      resetSeconds: 60,
    };
  } catch (err) {
    // If rate limiter fails, fail open to avoid blocking legitimate users
    return { allowed: true, remaining: 1, resetSeconds: 60 };
  }
}
