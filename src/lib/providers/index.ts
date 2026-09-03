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
  private static providers: Record<string, IMetricsProvider> = {
    mock: new MockProvider(),
    openpagerank: new OpenPageRankProvider(),
    moz: new MozProvider(),
  };

  public static getProvider(type?: string): IMetricsProvider {
    const selected = (type || process.env.METRICS_PROVIDER || 'mock').toLowerCase();
    const provider = this.providers[selected];

    if (provider && provider.isConfigured()) {
      return provider;
    }

    // Fallback gracefully to mock provider if configured provider lacks API keys
    return this.providers['mock'];
  }
}
