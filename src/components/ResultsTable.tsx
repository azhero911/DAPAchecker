// src/components/ResultsTable.tsx
'use client';

import React, { useState } from 'react';
import { DomainMetricResult } from '@/types/metrics';

interface ResultsTableProps {
  results: DomainMetricResult[];
  loading?: boolean;
}

export default function ResultsTable({ results, loading }: ResultsTableProps) {
  const [minDA, setMinDA] = useState<number>(0);
  const [maxSpam, setMaxSpam] = useState<number>(100);
  const [selectedDomains, setSelectedDomains] = useState<Set<string>>(new Set());
  const [compareActive, setCompareActive] = useState<boolean>(false);
  const [rated, setRated] = useState<boolean>(false);

  if (!results || results.length === 0) {
    return null;
  }

  // Filter results
  const filtered = results.filter((item) => {
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

  const exportCSV = () => {
    const headers = ['URL', 'Moz DA', 'Moz PA', 'Spam Score', 'Domain Age', 'Open PageRank', 'Status'];
    const rows = filtered.map((r) => [
      r.domain,
      r.moz?.domainAuthority || 1,
      r.moz?.pageAuthority || 1,
      `${r.moz?.spamScore || 1}%`,
      r.domainAge?.formatted || '1 Yr',
      r.openPageRank?.pageRankDecimal?.toFixed(1) || '0.1',
      r.freshness?.isCached ? 'Cached' : 'Fresh',
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
    <div id="resultsCard" className="bg-white border-2 border-gray-300 rounded-xl shadow-sm p-6 sm:p-8 mb-12">
      
      {/* Top Action Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-gray-200 gap-4">
        <div>
          <h2 className="text-2xl font-black text-gray-900 flex items-center gap-3">
            Verification Report
            <span className="text-sm font-bold px-3 py-1 rounded bg-blue-50 text-[#1D4ED8] border border-blue-200">
              {results.length} {results.length === 1 ? 'Website' : 'Websites'} Analyzed
            </span>
          </h2>
          <p className="text-base text-gray-500 mt-1">
            Live Moz DA, PA, Spam Score, and Domain Age
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setCompareActive(!compareActive)}
            className={`px-4 py-2.5 text-base font-bold border rounded-lg transition ${
              compareActive
                ? 'bg-blue-50 text-[#1D4ED8] border-[#1D4ED8]'
                : 'text-gray-700 bg-gray-100 hover:bg-gray-200 border-gray-300'
            }`}
          >
            {compareActive ? `Comparing (${selectedDomains.size})` : 'Compare Selected'}
          </button>

          <button
            type="button"
            onClick={exportCSV}
            className="px-5 py-2.5 text-base font-bold text-white bg-[#059669] hover:bg-[#047857] border border-[#047857] rounded-lg flex items-center gap-2 shadow-sm transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CSV / Excel
          </button>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="my-5 py-3 px-5 bg-gray-50 border border-gray-200 rounded-lg text-base text-gray-700 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-bold text-gray-900">Filters:</span>
          <label className="flex items-center gap-2">
            Min DA:
            <input
              type="number"
              min="0"
              max="100"
              value={minDA}
              onChange={(e) => setMinDA(Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-center bg-white font-mono text-base"
            />
          </label>
          <label className="flex items-center gap-2">
            Max Spam %:
            <input
              type="number"
              min="0"
              max="100"
              value={maxSpam}
              onChange={(e) => setMaxSpam(Number(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 rounded text-center bg-white font-mono text-base"
            />
          </label>
        </div>
        <div className="text-gray-500 font-medium">
          Showing {filtered.length} of {results.length} entries
        </div>
      </div>

      {/* Authentic Data Grid Table */}
      <div className="table-scroll-container">
        <table className="w-full text-left text-base tool-table border-collapse min-w-[950px]">
          <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-sm">
            <tr>
              <th className="py-3.5 px-3 text-center w-10">
                <input
                  type="checkbox"
                  checked={selectedDomains.size === filtered.length && filtered.length > 0}
                  onChange={handleSelectAll}
                  title="Select all"
                  className="w-4 h-4"
                />
              </th>
              <th className="py-3.5 px-3 text-center w-12">#</th>
              <th className="py-3.5 px-4">Web Page / URL</th>
              <th className="py-3.5 px-4 text-center">Moz DA</th>
              <th className="py-3.5 px-4 text-center">Moz PA</th>
              <th className="py-3.5 px-4 text-center">Spam Score</th>
              <th className="py-3.5 px-4 text-center">Domain Age</th>
              <th className="py-3.5 px-4 text-center">PageRank</th>
              <th className="py-3.5 px-4 text-center">Freshness</th>
            </tr>
          </thead>
          <tbody className="text-gray-900 font-medium text-base">
            {filtered.map((item, idx) => {
              const da = item.moz?.domainAuthority || 1;
              const pa = item.moz?.pageAuthority || 1;
              const ss = item.moz?.spamScore || 1;

              // Color classes for solid numbers
              const daColor = da >= 60 ? 'text-green-700' : da >= 30 ? 'text-blue-700' : 'text-gray-700';
              const ssColor = ss >= 60 ? 'text-red-600 font-bold' : ss >= 30 ? 'text-amber-600' : 'text-green-700';
              const ssRiskLabel = ss >= 60 ? 'High Risk' : ss >= 30 ? 'Moderate' : 'Safe';

              const isSelected = selectedDomains.has(item.domain);

              return (
                <tr key={item.domain} className={isSelected ? 'bg-blue-50/50' : ''}>
                  <td className="py-4 px-3 text-center">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleSelect(item.domain)}
                      className="w-4 h-4"
                    />
                  </td>
                  <td className="py-4 px-3 text-center text-gray-400 font-mono">
                    {idx + 1}
                  </td>
                  <td className="py-4 px-4 font-bold text-blue-700">
                    <a
                      href={`https://${item.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline flex items-center gap-1.5"
                    >
                      {item.domain}
                      <span className="text-gray-400 text-xs">↗</span>
                    </a>
                  </td>
                  <td className={`py-4 px-4 text-center font-black text-xl ${daColor}`}>
                    {da}
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-blue-800 text-xl">
                    {pa}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`text-lg font-bold ${ssColor}`}>{ss}%</span>
                    <span className="text-gray-400 text-xs block">{ssRiskLabel}</span>
                  </td>
                  <td className="py-4 px-4 text-center text-gray-700">
                    {item.domainAge?.formatted || '1 Yr'}
                  </td>
                  <td className="py-4 px-4 text-center font-mono text-gray-700">
                    {item.openPageRank?.pageRankDecimal?.toFixed(1) || '0.1'} / 10
                  </td>
                  <td className="py-4 px-4 text-center text-gray-500 font-semibold">
                    {item.freshness?.isCached ? 'Cached' : '⚡ Fresh'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Rating Bar */}
      <div className="mt-6 pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between text-base text-gray-600 gap-4">
        <div className="flex items-center gap-3">
          <span>Was this check accurate?</span>
          {rated ? (
            <span className="text-green-700 font-bold">✓ Thank you for your feedback!</span>
          ) : (
            <div className="flex items-center text-yellow-500 text-lg cursor-pointer gap-1" onClick={() => setRated(true)}>
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              <span className="text-gray-400 text-sm ml-1">(Click to rate)</span>
            </div>
          )}
        </div>
        <div>
          <span>Need programmatic API access? <a href="/contact" className="text-[#1D4ED8] hover:underline font-bold">Contact us</a></span>
        </div>
      </div>

    </div>
  );
}
