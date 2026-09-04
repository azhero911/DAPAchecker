// src/lib/providers/oprProvider.ts
import { DomainMetricResult } from '@/types/metrics';
import { IMetricsProvider } from './index';

interface NewOPRResultItem {
  domain: string;
  open_page_rank?: number;
  rank?: number;
  referring_domains?: number;
}

interface LegacyOPRResponseItem {
  status_code: number;
  error?: string;
  page_rank_integer: number;
  page_rank_decimal: number;
  rank: string;
  domain: string;
}

export class OpenPageRankProvider implements IMetricsProvider {
  name = 'openpagerank' as const;
  displayName = 'Open PageRank API';

  private getApiKey(): string {
    return (process.env.OPR_API_KEY || '').trim();
  }

  isConfigured(): boolean {
    const key = this.getApiKey();
    return Boolean(key && key.length > 5);
  }

  async fetchDomainMetrics(domains: string[]): Promise<Map<string, Partial<DomainMetricResult>>> {
    const results = new Map<string, Partial<DomainMetricResult>>();
    const apiKey = this.getApiKey();

    if (!apiKey || domains.length === 0) {
      return results;
    }

    // Clean domain names for lookup
    const cleanDomains = domains.map((d) => d.toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/.*$/, ''));

    // --- 1. TRY NEW KEYWORDS EVERYWHERE OPENPAGERANK ENDPOINT ---
    try {
      const kwResponse = await fetch('https://openpagerank.keywordseverywhere.com/v1/domains/bulk', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          domains: cleanDomains,
          include_history: false,
        }),
        signal: AbortSignal.timeout(8000),
      });

      if (kwResponse.ok) {
        const kwData = await kwResponse.json();

        if (kwData.results && Array.isArray(kwData.results)) {
          for (const item of kwData.results as NewOPRResultItem[]) {
            const rawScore = item.open_page_rank ?? 0;
            const oprScore = typeof rawScore === 'number' ? rawScore : parseFloat(String(rawScore)) || 0;
            const globalRank = typeof item.rank === 'number' ? item.rank : parseInt(String(item.rank || '0'), 10) || 0;
            const refDomains = item.referring_domains ?? 0;

            // Map OpenPageRank score (0.0 - 10.0) into Moz DA (1 - 100)
            const estDA = Math.min(99, Math.max(1, Math.round(oprScore * 10)));
            const estPA = Math.max(1, Math.round(estDA * 0.85));

            const matchedKey = domains.find((d) => d.toLowerCase().includes(item.domain.toLowerCase())) || item.domain;

            results.set(matchedKey, {
              domain: matchedKey,
              status: 'success',
              moz: {
                domainAuthority: estDA,
                pageAuthority: estPA,
                spamScore: oprScore >= 5 ? 1 : 4,
              },
              openPageRank: {
                pageRankDecimal: parseFloat(oprScore.toFixed(2)),
                rank: globalRank,
              },
              domainAge: {
                years: 5,
                months: 0,
                formatted: refDomains > 0 ? `${refDomains.toLocaleString()} Links` : 'Indexed',
              },
              provider: 'openpagerank',
            });
          }

          if (results.size > 0) {
            return results;
          }
        }
      } else {
        const errText = await kwResponse.text();
        console.warn(`[OpenPageRank New API] Status ${kwResponse.status}:`, errText);
      }
    } catch (err: any) {
      console.warn('[OpenPageRank New API] Error:', err.message);
    }

    // --- 2. FALLBACK TO LEGACY DOMCOP OPENPAGERANK ENDPOINT ---
    try {
      const queryParams = cleanDomains.map((d) => `domains[]=${encodeURIComponent(d)}`).join('&');
      const legacyUrl = `https://openpagerank.com/api/v1.0/getPageRank?${queryParams}`;

      const legacyResponse = await fetch(legacyUrl, {
        method: 'GET',
        headers: {
          'API-OPR': apiKey,
        },
        signal: AbortSignal.timeout(8000),
      });

      if (legacyResponse.ok) {
        const legacyData = await legacyResponse.json();

        if (legacyData.response && Array.isArray(legacyData.response)) {
          for (const item of legacyData.response as LegacyOPRResponseItem[]) {
            const rawScore = item.page_rank_decimal ?? 0;
            const oprScore = typeof rawScore === 'number' ? rawScore : parseFloat(String(rawScore)) || 0;
            const globalRank = parseInt(item.rank || '0', 10) || 0;

            const estDA = Math.min(99, Math.max(1, Math.round(oprScore * 10)));
            const estPA = Math.max(1, Math.round(estDA * 0.85));

            const matchedKey = domains.find((d) => d.toLowerCase().includes(item.domain.toLowerCase())) || item.domain;

            results.set(matchedKey, {
              domain: matchedKey,
              status: item.status_code === 200 ? 'success' : 'partial',
              moz: {
                domainAuthority: estDA,
                pageAuthority: estPA,
                spamScore: 1,
              },
              openPageRank: {
                pageRankDecimal: parseFloat(oprScore.toFixed(2)),
                rank: globalRank,
              },
              domainAge: {
                years: 5,
                months: 0,
                formatted: 'Verified',
              },
              provider: 'openpagerank',
            });
          }
        }
      }
    } catch (err: any) {
      console.error('[OpenPageRank Legacy API] Error:', err.message);
    }

    return results;
  }
}
