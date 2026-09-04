// src/lib/providers/index.ts
import { DomainMetricResult, MetricProviderType } from '@/types/metrics';
import { MockProvider } from './mockProvider';
import { OpenPageRankProvider } from './oprProvider';
import { MozProvider } from './mozProvider';

export interface IMetricsProvider {
  name: MetricProviderType;
  displayName: string;
  isConfigured(): boolean;
  fetchDomainMetrics(domains: string[]): Promise<Map<string, Partial<DomainMetricResult>>>;
}

export class MetricsProviderFactory {
  public static getProvider(type?: string): IMetricsProvider {
    const requested = (type || process.env.METRICS_PROVIDER || '').toLowerCase();

    // 1. Check Moz if explicitly requested
    if (requested === 'moz') {
      const moz = new MozProvider();
      if (moz.isConfigured()) {
        return moz;
      }
    }

    // 2. Check OpenPageRank (Auto-activate if OPR_API_KEY is present or if explicitly requested)
    const opr = new OpenPageRankProvider();
    if (opr.isConfigured() || requested === 'openpagerank' || requested === 'opr') {
      if (opr.isConfigured()) {
        return opr;
      }
    }

    // 3. Fallback to mock only if no valid API keys are configured
    return new MockProvider();
  }
}
