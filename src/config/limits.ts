// src/config/limits.ts
// Configurable limits for DAPA Metrics. No limits are hard-coded!

export const APP_CONFIG = {
  // Max domains allowed in a single batch submission
  maxDomainsPerBatch: parseInt(process.env.MAX_DOMAINS_PER_BATCH || '10', 10),

  // Rate limiting (requests per minute per IP)
  rateLimitPerMinute: parseInt(process.env.RATE_LIMIT_PER_MINUTE || '5', 10),

  // Standard cache duration in seconds (7 days default: 604,800s)
  cacheTtlSeconds: parseInt(process.env.CACHE_TTL_DAYS || '7', 10) * 86400,

  // Negative cache TTL for failed/error lookups (5 minutes)
  negativeCacheTtlSeconds: 300,

  // Default active provider ('mock' | 'openpagerank' | 'moz')
  defaultProvider: process.env.METRICS_PROVIDER || 'mock',

  // Site metadata
  siteName: 'DAPA Metrics',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.com',
  supportEmail: 'support@dapametrics.com',
};
