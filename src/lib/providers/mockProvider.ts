// src/lib/providers/mockProvider.ts
import { DomainMetricResult } from '@/types/metrics';
import { IMetricsProvider } from './index';

// High-authority seed database for known domains
const KNOWN_DOMAINS: Record<string, { da: number; pa: number; ss: number; opr: number; age: { years: number; months: number } }> = {
  'google.com': { da: 98, pa: 95, ss: 1, opr: 10.0, age: { years: 26, months: 6 } },
  'youtube.com': { da: 99, pa: 96, ss: 1, opr: 10.0, age: { years: 19, months: 8 } },
  'facebook.com': { da: 96, pa: 94, ss: 2, opr: 9.8, age: { years: 20, months: 7 } },
  'wikipedia.org': { da: 97, pa: 95, ss: 1, opr: 9.9, age: { years: 23, months: 8 } },
  'techcrunch.com': { da: 92, pa: 78, ss: 2, opr: 7.4, age: { years: 19, months: 3 } },
  'nytimes.com': { da: 94, pa: 82, ss: 1, opr: 8.2, age: { years: 28, months: 5 } },
  'github.com': { da: 96, pa: 89, ss: 1, opr: 9.2, age: { years: 16, months: 8 } },
  'reddit.com': { da: 95, pa: 86, ss: 3, opr: 8.9, age: { years: 19, months: 2 } },
  'medium.com': { da: 91, pa: 77, ss: 4, opr: 7.6, age: { years: 12, months: 1 } },
  'spammy-free-links.xyz': { da: 12, pa: 10, ss: 74, opr: 0.8, age: { years: 0, months: 9 } },
};

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export class MockProvider implements IMetricsProvider {
  name = 'mock' as const;
  displayName = 'Demo Mock Provider (Offline)';

  isConfigured(): boolean {
    return true; // Always available
  }

  async fetchDomainMetrics(domains: string[]): Promise<Map<string, Partial<DomainMetricResult>>> {
    const results = new Map<string, Partial<DomainMetricResult>>();

    for (const domain of domains) {
      if (KNOWN_DOMAINS[domain]) {
        const item = KNOWN_DOMAINS[domain];
        results.set(domain, {
          domain,
          status: 'success',
          moz: {
            domainAuthority: item.da,
            pageAuthority: item.pa,
            spamScore: item.ss,
          },
          openPageRank: {
            pageRankDecimal: item.opr,
            rank: Math.round(1000000 / (item.opr + 0.1)),
          },
          domainAge: {
            years: item.age.years,
            months: item.age.months,
            formatted: `${item.age.years} Yrs, ${item.age.months} Mos`,
          },
          provider: 'mock',
        });
      } else {
        // Deterministic generation for any arbitrary domain
        const h = hashString(domain);
        const da = (h % 65) + 10; // 10 to 75
        const pa = Math.max(8, da - (h % 12));
        const ss = (h % 35) + 1; // 1 to 36%
        const opr = parseFloat(((da / 10) * 0.8 + 0.5).toFixed(1));
        const ageYears = (h % 15) + 1;
        const ageMonths = (h % 12);

        results.set(domain, {
          domain,
          status: 'success',
          moz: {
            domainAuthority: da,
            pageAuthority: pa,
            spamScore: ss,
          },
          openPageRank: {
            pageRankDecimal: opr,
            rank: Math.round(5000000 / (opr + 0.1)),
          },
          domainAge: {
            years: ageYears,
            months: ageMonths,
            formatted: `${ageYears} Yrs, ${ageMonths} Mos`,
          },
          provider: 'mock',
        });
      }
    }

    return results;
  }
}
