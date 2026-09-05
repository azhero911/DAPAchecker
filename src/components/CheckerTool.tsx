// src/components/CheckerTool.tsx
'use client';

import React, { useState } from 'react';
import { DomainMetricResult } from '@/types/metrics';
import ResultsTable from './ResultsTable';

const SAMPLE_DOMAINS = `example.com
example.org
example.net`;

export default function CheckerTool() {
  const [inputText, setInputText] = useState<string>('');
  const [excludeDomain, setExcludeDomain] = useState<boolean>(true);
  const [excludeUrl, setExcludeUrl] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'all' | 'dapa' | 'spam'>('all');
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [results, setResults] = useState<DomainMetricResult[]>([]);

  // Count active lines
  const lines = inputText
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const urlCount = Math.min(lines.length, 10);

  const handleLoadSample = () => {
    setInputText(SAMPLE_DOMAINS);
    setErrorMessage('');
  };

  const handleClear = () => {
    setInputText('');
    setErrorMessage('');
  };

  const handleCheck = async () => {
    if (lines.length === 0) {
      setErrorMessage('Please enter at least one valid domain or URL to analyze.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/v1/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          domains: lines,
          excludeDuplicateDomains: excludeDomain,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze domains. Please verify formatting and try again.');
      }

      setResults(data.results || []);
    } catch (err: any) {
      setErrorMessage(
        err.message || '⚠️ Server connection timeout. Please check your internet connection or try again in a moment.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mb-10">
      
      {/* Main Tool Box (Modeled after authentic clean UI) */}
      <div id="tool" className="bg-white border border-gray-300 rounded-md shadow-sm mb-8">
        
        {/* Top Tool Mode Tabs */}
        <div className="flex flex-wrap items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-2 text-sm font-bold text-gray-700 gap-2">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 border rounded-t text-sm font-bold transition ${
                activeTab === 'all'
                  ? 'bg-white border-gray-300 border-b-white -mb-[9px] text-[#1D4ED8]'
                  : 'text-gray-600 hover:text-gray-900 border-transparent'
              }`}
            >
              All Metrics (Default)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('dapa')}
              className={`px-3 py-1.5 border rounded-t text-sm font-bold transition ${
                activeTab === 'dapa'
                  ? 'bg-white border-gray-300 border-b-white -mb-[9px] text-[#1D4ED8]'
                  : 'text-gray-600 hover:text-gray-900 border-transparent'
              }`}
            >
              DA &amp; PA Focus
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spam')}
              className={`px-3 py-1.5 border rounded-t text-sm font-bold transition ${
                activeTab === 'spam'
                  ? 'bg-white border-gray-300 border-b-white -mb-[9px] text-[#1D4ED8]'
                  : 'text-gray-600 hover:text-gray-900 border-transparent'
              }`}
            >
              Spam Score Focus
            </button>
          </div>

          <div className="text-xs text-gray-500 font-normal hidden sm:block">
            ⚡ All metrics calculated in 1 unified check
          </div>
        </div>

        {/* Textarea Box */}
        <div className="p-4 sm:p-6">
          <label htmlFor="domainInput" className="block text-sm font-bold text-gray-900 mb-2">
            Enter up to 10 URLs
          </label>
          <div className="border border-gray-300 rounded focus-within:border-blue-600 transition bg-white">
            <textarea
              id="domainInput"
              rows={6}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`example.com\nexample.org\nexample.net`}
              className="w-full p-3.5 text-base font-mono text-gray-800 placeholder-gray-400 focus:outline-none resize-y"
            />

            {/* Inside Bottom Action Bar */}
            <div className="flex flex-wrap items-center justify-between px-3.5 py-2.5 bg-gray-50 border-t border-gray-200 text-sm text-gray-700 gap-3">
              
              {/* Counter & Checkboxes */}
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-bold text-gray-900 text-sm">
                  Total URLs: <span className="text-[#1D4ED8] font-bold">{urlCount}</span> / 10
                </span>

                <label className="inline-flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={excludeDomain}
                    onChange={(e) => setExcludeDomain(e.target.checked)}
                    className="rounded border-gray-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                  />
                  <span>Exclude Same Domain</span>
                </label>

                <label className="hidden sm:inline-flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={excludeUrl}
                    onChange={(e) => setExcludeUrl(e.target.checked)}
                    className="rounded border-gray-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                  />
                  <span>Exclude Same URL</span>
                </label>
              </div>

              {/* Quick Action Links */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleLoadSample}
                  className="px-2.5 py-1 text-xs font-bold text-gray-700 hover:bg-gray-200 border border-gray-300 rounded bg-white transition"
                >
                  Sample Data
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-2.5 py-1 text-xs font-bold text-red-700 hover:bg-red-50 border border-gray-300 rounded bg-white transition"
                >
                  Clear
                </button>
              </div>

            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-700 font-medium flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span>{errorMessage}</span>
              </div>
              <button
                type="button"
                onClick={() => setErrorMessage('')}
                className="text-red-500 hover:text-red-700 text-xs font-bold"
              >
                ✕
              </button>
            </div>
          )}

          {/* Solid Primary Action Button */}
          <div className="mt-4 text-center">
            <button
              type="button"
              id="checkBtn"
              disabled={loading}
              onClick={handleCheck}
              className="px-8 py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-50 text-white font-bold text-base rounded shadow transition inline-flex items-center justify-center gap-2 min-w-[200px]"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Analyzing Domains...</span>
                </>
              ) : (
                <span>Check DA &amp; PA</span>
              )}
            </button>
            <p className="text-xs text-gray-500 mt-2">
              One URL per line • Up to 10 URLs per check
            </p>
          </div>

        </div>

      </div>

      {/* Results Section */}
      <ResultsTable results={results} loading={loading} />

    </div>
  );
}
