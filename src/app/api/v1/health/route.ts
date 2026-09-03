// src/app/api/v1/health/route.ts
import { NextResponse } from 'next/server';
import { MetricsProviderFactory } from '@/lib/providers';
import { APP_CONFIG } from '@/config/limits';

export async function GET() {
  const provider = MetricsProviderFactory.getProvider();

  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: APP_CONFIG.siteName,
    activeProvider: {
      name: provider.name,
      displayName: provider.displayName,
      configured: provider.isConfigured(),
    },
    limits: {
      maxBatch: APP_CONFIG.maxDomainsPerBatch,
      rateLimit: `${APP_CONFIG.rateLimitPerMinute} req/min`,
      cacheTtl: `${APP_CONFIG.cacheTtlSeconds / 86400} days`,
    },
  });
}
