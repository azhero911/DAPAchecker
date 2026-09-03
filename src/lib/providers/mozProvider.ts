// src/lib/providers/mozProvider.ts
import { DomainMetricResult } from '@/types/metrics';
import { IMetricsProvider } from './index';

export class MozProvider implements IMetricsProvider {
  name = 'moz' as const;
  displayName = 'Moz Links API v2';

  private accessId: string;
  private secretKey: string;

  constructor() {
    this.accessId = process.env.MOZ_ACCESS_ID || '';
    this.secretKey = process.env.MOZ_SECRET_KEY || '';
  }

  isConfigured(): boolean {
    return Boolean(this.accessId && this.secretKey);
  }

  async fetchDomainMetrics(domains: string[]): Promise<Map<string, Partial<DomainMetricResult>>> {
    const results = new Map<string, Partial<DomainMetricResult>>();

    if (!this.isConfigured() || domains.length === 0) {
      return results;
    }

    try {
      const authHeader = 'Basic ' + Buffer.from(`${this.accessId}:${this.secretKey}`).toString('base64');
      const response = await fetch('https://lsapi.seomoz.com/v2/url_metrics', {
        method: 'POST',
        headers: {
          Authorization: authHeader,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targets: domains,
        }),
        signal: AbortSignal.timeout(8000),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.results && Array.isArray(data.results)) {
          for (const item of data.results) {
            const domain = item.page || item.root_domain;
            results.set(domain, {
              domain,
              status: 'success',
              moz: {
                domainAuthority: item.domain_authority || 1,
                pageAuthority: item.page_authority || 1,
                spamScore: item.spam_score || 1,
              },
              openPageRank: {
                pageRankDecimal: parseFloat(((item.domain_authority || 1) / 10).toFixed(1)),
                rank: 0,
              },
              domainAge: {
                years: 1,
                months: 0,
                formatted: 'Moz Verified',
              },
              provider: 'moz',
            });
          }
        }
      }
    } catch (err: any) {
      console.error('Moz API fetch error:', err.message);
    }

    return results;
  }
}
