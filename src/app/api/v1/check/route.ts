// src/app/api/v1/check/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { APP_CONFIG } from '@/config/limits';
import { sanitizeDomain } from '@/lib/domainValidator';
import { checkRateLimit } from '@/lib/abuseMonitor';
import { redisClient } from '@/lib/redis';
import { logDomainCheck } from '@/lib/db';
import { MetricsProviderFactory } from '@/lib/providers';
import { DomainMetricResult } from '@/types/metrics';

export async function POST(req: NextRequest) {
  const startTime = Date.now();

  try {
    // 1. IP Rate Limiting (GDPR-anonymized)
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || '127.0.0.1';
    const rateLimit = await checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Rate limit exceeded. Please wait 1 minute before submitting another batch.',
          remaining: 0,
        },
        { status: 429 }
      );
    }

    // 2. Parse payload
    const body = await req.json();
    const rawDomains: string[] = body.domains;

    if (!rawDomains || !Array.isArray(rawDomains) || rawDomains.length === 0) {
      return NextResponse.json({ error: 'Please provide an array of domain names.' }, { status: 400 });
    }

    // Enforce max batch limit
    const batch = rawDomains.slice(0, APP_CONFIG.maxDomainsPerBatch);

    // 3. Sanitize and validate every domain (Anti-SSRF protection)
    const validatedDomains: { domain: string; original: string }[] = [];
    const invalidErrors: { input: string; error: string }[] = [];

    const seen = new Set<string>();
    for (const item of batch) {
      const sanitized = sanitizeDomain(item);
      if (!sanitized.valid || !sanitized.domain) {
        invalidErrors.push({ input: item, error: sanitized.error || 'Invalid domain' });
      } else {
        if (!seen.has(sanitized.domain)) {
          seen.add(sanitized.domain);
          validatedDomains.push({ domain: sanitized.domain, original: item });
        }
      }
    }

    if (validatedDomains.length === 0) {
      return NextResponse.json(
        {
          error: 'No valid domains found in submission.',
          details: invalidErrors,
        },
        { status: 400 }
      );
    }

    // 4. Multi-Tier Cache Check (Parallel Lookups)
    const finalResults: DomainMetricResult[] = [];
    const uncachedDomains: string[] = [];
    let cachedHits = 0;

    // Determine active provider upfront
    const provider = MetricsProviderFactory.getProvider();

    for (const item of validatedDomains) {
      const cacheKey = `domain_metrics:${item.domain}`;
      const cached = await redisClient.get<DomainMetricResult>(cacheKey);

      // If active provider is live (not mock), never return stale mock data from previous tests
      const isStaleMock = provider.name !== 'mock' && cached?.provider === 'mock';

      if (cached && cached.moz && !isStaleMock) {
        cachedHits++;
        finalResults.push({
          ...cached,
          originalUrl: item.original,
          freshness: {
            ...cached.freshness,
            isCached: true,
            cachedAgoHuman: 'Cached',
          },
        });
      } else {
        uncachedDomains.push(item.domain);
      }
    }

    // 5. Query Active Provider for Cache Misses
    if (uncachedDomains.length > 0) {
      const freshMetricsMap = await provider.fetchDomainMetrics(uncachedDomains);

      for (const domain of uncachedDomains) {
        const partialResult = freshMetricsMap.get(domain);
        const originalInput = validatedDomains.find((v) => v.domain === domain)?.original || domain;

        const completeResult: DomainMetricResult = {
          domain,
          originalUrl: originalInput,
          status: partialResult?.status || 'success',
          moz: partialResult?.moz || { domainAuthority: 1, pageAuthority: 1, spamScore: 1 },
          openPageRank: partialResult?.openPageRank || { pageRankDecimal: 0.1, rank: 0 },
          domainAge: partialResult?.domainAge || { years: 1, months: 0, formatted: '1 Yr' },
          provider: provider.name,
          freshness: {
            checkedAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + APP_CONFIG.cacheTtlSeconds * 1000).toISOString(),
            isCached: false,
            cachedAgoHuman: '⚡ Fresh Check',
          },
        };

        // Cache for 7 days
        const cacheKey = `domain_metrics:${domain}`;
        await redisClient.setex(cacheKey, APP_CONFIG.cacheTtlSeconds, completeResult);

        finalResults.push(completeResult);
      }
    }

    // Persist checks to PostgreSQL database asynchronously
    for (const item of finalResults) {
      logDomainCheck({
        domain: item.domain,
        mozDa: item.moz?.domainAuthority,
        mozPa: item.moz?.pageAuthority,
        mozSpamScore: item.moz?.spamScore,
        domainAgeYears: item.domainAge?.years,
        openPageRank: item.openPageRank?.pageRankDecimal,
        globalRank: item.openPageRank?.rank,
        cached: item.freshness?.isCached,
      }).catch((e) => console.error('[DB Log Error]', e));
    }

    return NextResponse.json({
      results: finalResults,
      meta: {
        provider: provider.name,
        isLive: provider.name !== 'mock',
        hasOprKey: Boolean(process.env.OPR_API_KEY && process.env.OPR_API_KEY.trim().length > 5),
      },
      totalChecked: finalResults.length,
      cachedHits,
      executionTimeMs: Date.now() - startTime,
    });
  } catch (err: any) {
    console.error('API Check Error:', err);
    return NextResponse.json(
      { error: 'Internal server error occurred while analyzing domains.' },
      { status: 500 }
    );
  }
}
