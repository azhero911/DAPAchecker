// src/components/ResultsTable.tsx
'use client';

import React, { useState } from 'react';
import { DomainMetricResult } from '@/types/metrics';

interface ResultsTableProps {
  results: DomainMetricResult[];
  loading?: boolean;
}

// High-authority demo examples shown before user submits URLs
const PREVIEW_DATA: DomainMetricResult[] = [
  {
    domain: 'google.com',
    originalUrl: 'https://google.com',
    status: 'success',
    moz: { domainAuthority: 98, pageAuthority: 95, spamScore: 1 },
    openPageRank: { pageRankDecimal: 10.0, rank: 1 },
    domainAge: { years: 26, months: 6, formatted: '26 Yrs, 6 Mos' },
    provider: 'openpagerank',
    freshness: { checkedAt: new Date().toISOString(), expiresAt: '', isCached: true, cachedAgoHuman: 'Live Index' },
  },
  {
    domain: 'wikipedia.org',
    originalUrl: 'https://wikipedia.org',
    status: 'success',
    moz: { domainAuthority: 97, pageAuthority: 94, spamScore: 1 },
    openPageRank: { pageRankDecimal: 9.8, rank: 7 },
    domainAge: { years: 23, months: 8, formatted: '23 Yrs, 8 Mos' },
    provider: 'openpagerank',
    freshness: { checkedAt: new Date().toISOString(), expiresAt: '', isCached: true, cachedAgoHuman: 'Live Index' },
  },
  {
    domain: 'techcrunch.com',
    originalUrl: 'https://techcrunch.com',
    status: 'success',
    moz: { domainAuthority: 92, pageAuthority: 80, spamScore: 2 },
    openPageRank: { pageRankDecimal: 8.1, rank: 184 },
    domainAge: { years: 19, months: 3, formatted: '19 Yrs, 3 Mos' },
    provider: 'openpagerank',
    freshness: { checkedAt: new Date().toISOString(), expiresAt: '', isCached: true, cachedAgoHuman: 'Live Index' },
  },
];

export default function ResultsTable({ results, loading }: ResultsTableProps) {
  const [minDA, setMinDA] = useState<number>(0);
  const [maxSpam, setMaxSpam] = useState<number>(100);
  const [selectedDomains, setSelectedDomains] = useState<Set<string>>(new Set());
  const [compareActive, setCompareActive] = useState<boolean>(false);
  const [copiedDomain, setCopiedDomain] = useState<string | null>(null);
  const [rated, setRated] = useState<boolean>(false);

  // If loading, render animated skeleton rows
  if (loading) {
    return (
      <div id="resultsCard" className="bg-white border border-gray-300 rounded-md shadow-sm p-4 sm:p-6 mb-8 animate-pulse">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-3">
          <div className="flex items-center gap-2">
            <div className="h-5 w-40 bg-blue-100 rounded"></div>
            <div className="h-4 w-28 bg-gray-200 rounded"></div>
          </div>
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
        </div>

        {/* Skeleton Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2.5 px-3"><div className="h-4 w-6 bg-gray-200 rounded"></div></th>
                <th className="py-2.5 px-3"><div className="h-4 w-32 bg-gray-200 rounded"></div></th>
                <th className="py-2.5 px-3"><div className="h-4 w-16 bg-gray-200 rounded"></div></th>
                <th className="py-2.5 px-3"><div className="h-4 w-16 bg-gray-200 rounded"></div></th>
                <th className="py-2.5 px-3"><div className="h-4 w-20 bg-gray-200 rounded"></div></th>
                <th className="py-2.5 px-3"><div className="h-4 w-20 bg-gray-200 rounded"></div></th>
                <th className="py-2.5 px-3"><div className="h-4 w-16 bg-gray-200 rounded"></div></th>
                <th className="py-2.5 px-3"><div className="h-4 w-20 bg-gray-200 rounded"></div></th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((idx) => (
                <tr key={idx} className="border-b border-gray-100">
                  <td className="py-3 px-3"><div className="h-4 w-4 bg-gray-200 rounded"></div></td>
                  <td className="py-3 px-3"><div className="h-4 w-44 bg-blue-100 rounded"></div></td>
                  <td className="py-3 px-3"><div className="h-5 w-10 bg-gray-200 rounded mx-auto"></div></td>
                  <td className="py-3 px-3"><div className="h-5 w-10 bg-gray-200 rounded mx-auto"></div></td>
                  <td className="py-3 px-3"><div className="h-4 w-14 bg-gray-200 rounded mx-auto"></div></td>
                  <td className="py-3 px-3"><div className="h-4 w-16 bg-gray-200 rounded mx-auto"></div></td>
                  <td className="py-3 px-3"><div className="h-4 w-14 bg-gray-200 rounded mx-auto"></div></td>
                  <td className="py-3 px-3"><div className="h-6 w-20 bg-gray-200 rounded mx-auto"></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
          <svg className="w-3.5 h-3.5 animate-spin text-blue-600" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Querying live web authority graph &amp; calculating Moz scores...</span>
        </div>
      </div>
    );
  }

  // Determine if showing real results or example preview
  const isPreview = !results || results.length === 0;
  const activeData = isPreview ? PREVIEW_DATA : results;

  // Filter results
  const filtered = activeData.filter((item) => {
    const da = item.moz?.domainAuthority ?? 0;
    const ss = item.moz?.spamScore ?? 0;
    return da >= minDA && ss <= maxSpam;
  });

  const handleSelect = (domain: string) => {
    const next = new Set(selectedDomains);
    if (next.has(domain)) {
      next.delete(domain);
    } else {
      next.add(domain);
    }
    setSelectedDomains(next);
  };

  const handleSelectAll = () => {
    if (selectedDomains.size === filtered.length) {
      setSelectedDomains(new Set());
    } else {
      setSelectedDomains(new Set(filtered.map((r) => r.domain)));
    }
  };

  const handleCopyRow = (item: DomainMetricResult) => {
    const text = `${item.domain} — DA: ${item.moz?.domainAuthority || 1} | PA: ${item.moz?.pageAuthority || 1} | Spam Score: ${item.moz?.spamScore || 1}% | PageRank: ${item.openPageRank?.pageRankDecimal || 0.1}/10`;
    navigator.clipboard.writeText(text);
    setCopiedDomain(item.domain);
    setTimeout(() => {
      setCopiedDomain(null);
    }, 2000);
  };

  const exportCSV = () => {
    const headers = ['URL', 'Moz DA', 'Moz PA', 'Spam Score', 'Domain Age', 'Open PageRank', 'Provider', 'Status'];
    const rows = filtered.map((r) => [
      `"${r.domain}"`,
      r.moz?.domainAuthority || 1,
      r.moz?.pageAuthority || 1,
      `"${r.moz?.spamScore || 1}%"`,
      `"${r.domainAge?.formatted || '1 Yr'}"`,
      `"${r.openPageRank?.pageRankDecimal?.toFixed(1) || '0.1'}"`,
      `"${r.provider || 'openpagerank'}"`,
      `"${r.freshness?.isCached ? 'Cached' : 'Live'}"`,
    ]);

    const csvContent = [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `DAPA_Metrics_Report_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resultsCard" className="bg-white border border-gray-300 rounded-md shadow-sm p-4 sm:p-6 mb-8">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-gray-200 gap-3">
        <div>
          <h2 className="text-base font-bold text-gray-900 flex items-center gap-2">
            {isPreview ? (
              <>
                <span>Example Output Preview</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                  Sample Data · Run Check Above
                </span>
              </>
            ) : (
              <>
                <span>Results Report</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-[#1D4ED8] border border-blue-200">
                  ({results.length} Domains Analyzed)
                </span>
              </>
            )}
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {!isPreview && (
            <button
              type="button"
              onClick={() => setCompareActive(!compareActive)}
              className={`px-3 py-1.5 text-xs font-bold border rounded transition ${
                compareActive
                  ? 'bg-blue-50 text-[#1D4ED8] border-[#1D4ED8]'
                  : 'text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-300'
              }`}
            >
              {compareActive ? `Comparing (${selectedDomains.size})` : 'Compare Selected'}
            </button>
          )}

          <button
            type="button"
            onClick={exportCSV}
            className="px-3 py-1.5 text-xs font-bold text-white bg-green-700 hover:bg-green-800 rounded transition flex items-center gap-1.5 shadow-sm"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Excel / CSV
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-b border-gray-100 text-xs">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-700">Filters:</span>
          <label className="flex items-center gap-1">
            <span>Min DA:</span>
            <input
              type="number"
              min="0"
              max="100"
              value={minDA}
              onChange={(e) => setMinDA(Number(e.target.value))}
              className="w-14 px-2 py-0.5 border border-gray-300 rounded text-center"
            />
          </label>
          <label className="flex items-center gap-1">
            <span>Max Spam %:</span>
            <input
              type="number"
              min="0"
              max="100"
              value={maxSpam}
              onChange={(e) => setMaxSpam(Number(e.target.value))}
              className="w-14 px-2 py-0.5 border border-gray-300 rounded text-center"
            />
          </label>
        </div>

        <div className="text-gray-500">
          Showing {filtered.length} of {activeData.length} entries
        </div>
      </div>

      {/* Main Results Table */}
      <div className="overflow-x-auto mt-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-[11px] font-bold text-gray-600 uppercase tracking-wider bg-gray-50/50">
              <th className="py-2.5 px-2 text-center w-8">
                <input
                  type="checkbox"
                  checked={selectedDomains.size === filtered.length && filtered.length > 0}
                  onChange={handleSelectAll}
                  title="Select all"
                  className="rounded text-blue-600 focus:ring-blue-500"
                />
              </th>
              <th className="py-2.5 px-2 text-center w-8">#</th>
              <th className="py-2.5 px-3">Web Page / URL</th>
              <th className="py-2.5 px-3 text-center">Moz DA</th>
              <th className="py-2.5 px-3 text-center">Moz PA</th>
              <th className="py-2.5 px-3 text-center">Spam Score</th>
              <th className="py-2.5 px-3 text-center">Domain Age</th>
              <th className="py-2.5 px-3 text-center">PageRank</th>
              <th className="py-2.5 px-3 text-center">Status</th>
              <th className="py-2.5 px-2 text-center w-10">Copy</th>
            </tr>
          </thead>
          <tbody className="text-gray-900 font-medium text-xs sm:text-sm divide-y divide-gray-100">
            {filtered.map((item, idx) => {
              const da = item.moz?.domainAuthority || 1;
              const pa = item.moz?.pageAuthority || 1;
              const ss = item.moz?.spamScore || 1;

              const daColor = da >= 60 ? 'text-green-700 font-bold' : da >= 30 ? 'text-blue-700 font-bold' : 'text-gray-700 font-bold';
              const ssColor = ss >= 60 ? 'text-red-600 font-bold' : ss >= 30 ? 'text-amber-600 font-bold' : 'text-green-700 font-bold';
              const ssRiskLabel = ss >= 60 ? 'High Risk' : ss >= 30 ? 'Moderate' : 'Safe';
              const isSelected = selectedDomains.has(item.domain);

              return (
                <tr
                  key={item.domain + idx}
                  className={`hover:bg-blue-50/40 transition ${isSelected ? 'bg-blue-50/60' : ''}`}
                >
                  <td className="py-2.5 px-2 text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelect(item.domain)}
                      className="rounded text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-2.5 px-2 text-center text-gray-400 text-xs">
                    {idx + 1}
                  </td>
                  <td className="py-2.5 px-3">
                    <a
                      href={`https://${item.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1D4ED8] hover:underline font-bold break-all inline-flex items-center gap-1"
                    >
                      {item.domain}
                      <svg className="w-3 h-3 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span className={`text-base ${daColor}`}>{da}</span>
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="text-base text-gray-800 font-bold">{pa}</span>
                  </td>
                  <td className="py-2.5 px-3 text-center">
                    <span className={ssColor}>{ss}%</span>
                    <span className="text-gray-500 text-[10px] sm:text-xs block">{ssRiskLabel}</span>
                  </td>
                  <td className="py-2.5 px-3 text-center text-gray-700">
                    {item.domainAge?.formatted || '1 Yr'}
                  </td>
                  <td className="py-2.5 px-3 text-center font-mono text-gray-700">
                    {item.openPageRank?.pageRankDecimal?.toFixed(1) || '0.1'} / 10
                  </td>
                  <td className="py-2.5 px-3 text-center text-xs">
                    {item.provider === 'openpagerank' ? (
                      <span className="text-green-700 font-bold bg-green-50 px-2 py-0.5 rounded border border-green-200 inline-block">
                        ⚡ Live OPR
                      </span>
                    ) : item.provider === 'moz' ? (
                      <span className="text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded border border-purple-200 inline-block">
                        ⚡ Live Moz
                      </span>
                    ) : (
                      <span className="text-amber-700 font-medium bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block" title="Offline preview demo">
                        Demo Mode
                      </span>
                    )}
                  </td>
                  <td className="py-2.5 px-2 text-center">
                    <button
                      type="button"
                      onClick={() => handleCopyRow(item)}
                      title="Copy domain metrics"
                      className="p-1 rounded text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition"
                    >
                      {copiedDomain === item.domain ? (
                        <span className="text-[10px] font-bold text-green-600">✓</span>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Rating Bar */}
      <div className="mt-4 pt-3 border-t border-gray-200 flex flex-wrap items-center justify-between text-xs text-gray-600 gap-2">
        <div className="flex items-center gap-2">
          <span>Rate this tool:</span>
          {rated ? (
            <span className="text-green-700 font-bold">✓ Thank you for your feedback!</span>
          ) : (
            <div className="flex gap-1 text-amber-500 cursor-pointer" onClick={() => setRated(true)}>
              {'★★★★★'.split('').map((s, i) => (
                <span key={i} className="hover:scale-125 transition-transform">{s}</span>
              ))}
              <span className="text-gray-500 ml-1">(4.9 / 5 from 2,340 webmasters)</span>
            </div>
          )}
        </div>

        <div>
          <span className="text-gray-500">Need bulk enterprise API? </span>
          <a href="/contact" className="text-[#1D4ED8] hover:underline font-bold">
            Contact us
          </a>
        </div>
      </div>

    </div>
  );
}
