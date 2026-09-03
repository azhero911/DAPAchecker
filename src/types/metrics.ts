// src/types/metrics.ts

export type MetricProviderType = 'mock' | 'openpagerank' | 'moz' | 'dataforseo';

export interface MozMetrics {
  domainAuthority: number;      // 0–100
  pageAuthority: number;        // 0–100
  spamScore: number;            // 0–100 %
}

export interface OpenPageRankMetrics {
  pageRankDecimal: number;      // 0.00–10.00
  rank: number;                 // e.g. 18492
}

export interface DomainAgeMetrics {
  years: number;
  months: number;
  formatted: string;            // e.g. "26 Yrs, 4 Mos"
}

export interface FreshnessMeta {
  checkedAt: string;            // ISO String
  expiresAt: string;            // ISO String
  isCached: boolean;
  cachedAgoHuman: string;       // e.g. "Cached 2h ago" or "⚡ Fresh Check"
}

export interface DomainMetricResult {
  domain: string;
  originalUrl?: string;
  status: 'success' | 'partial' | 'error';
  errorMessage?: string;
  moz: MozMetrics;
  openPageRank: OpenPageRankMetrics;
  domainAge: DomainAgeMetrics;
  freshness: FreshnessMeta;
  provider: MetricProviderType;
}

export interface BatchCheckRequest {
  domains: string[];
  excludeDuplicates?: boolean;
  excludeDuplicateDomains?: boolean;
  turnstileToken?: string;
}

export interface BatchCheckResponse {
  results: DomainMetricResult[];
  totalChecked: number;
  cachedHits: number;
  executionTimeMs: number;
  error?: string;
}
