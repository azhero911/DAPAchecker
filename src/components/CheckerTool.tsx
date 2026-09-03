// src/components/CheckerTool.tsx
'use client';

import React, { useState } from 'react';
import { DomainMetricResult } from '@/types/metrics';
import ResultsTable from './ResultsTable';

const SAMPLE_DOMAINS = `google.com
https://techcrunch.com/apps
nytimes.com
wikipedia.org
spammy-free-links.xyz`;

export default function CheckerTool() {
  const [inputText, setInputText] = useState<string>('');
  const [excludeDomain, setExcludeDomain] = useState<boolean>(true);
  const [excludeUrl, setExcludeUrl] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'dapa' | 'spam' | 'age'>('dapa');
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
      setErrorMessage('Please enter at least one domain or URL to analyze.');
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
        throw new Error(data.error || 'Failed to analyze domains. Please try again.');
      }

      setResults(data.results || []);
    } catch (err: any) {
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      
      {/* Main Tool Box (Modeled after dapachecker.org) */}
      <div id="tool" className="bg-white border border-gray-300 rounded-md shadow-sm mb-8">
        
        {/* Top Tool Mode Tabs */}
        <div className="flex items-center border-b border-gray-200 bg-gray-50 px-4 py-2 text-xs font-bold text-gray-700">
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab('dapa')}
              className={`px-3 py-1.5 border rounded-t transition ${
                activeTab === 'dapa'
                  ? 'bg-white border-gray-300 border-b-white -mb-[9px] text-[#1D4ED8]'
                  : 'text-gray-600 hover:text-gray-900 border-transparent'
              }`}
            >
              DA & PA Mode
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('spam')}
              className={`px-3 py-1.5 border rounded-t transition ${
                activeTab === 'spam'
                  ? 'bg-white border-gray-300 border-b-white -mb-[9px] text-[#1D4ED8]'
                  : 'text-gray-600 hover:text-gray-900 border-transparent'
              }`}
            >
              Spam Score Mode
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('age')}
              className={`px-3 py-1.5 border rounded-t transition ${
                activeTab === 'age'
                  ? 'bg-white border-gray-300 border-b-white -mb-[9px] text-[#1D4ED8]'
                  : 'text-gray-600 hover:text-gray-900 border-transparent'
              }`}
            >
              Domain Age Mode
            </button>
          </div>
        </div>

        {/* Textarea Box */}
        <div className="p-4">
          
          <div className="border border-gray-300 rounded focus-within:border-blue-600 transition bg-white">
            <textarea
              id="domainInput"
              rows={6}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Enter URLs or domains (one per line, up to 10):\ngoogle.com\nhttps://techcrunch.com/apps\nnytimes.com`}
              className="w-full p-3 text-sm font-mono text-gray-800 placeholder-gray-400 focus:outline-none resize-y"
            />

            {/* Inside Bottom Action Bar */}
            <div className="flex flex-wrap items-center justify-between px-3 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-700">
              
              {/* Counter & Checkboxes */}
              <div className="flex items-center gap-4">
                <span className="font-bold text-gray-900">
                  Total URLs: <span className="text-[#1D4ED8]">{urlCount}</span> / 10
                </span>

                <label className="inline-flex items-center gap-1 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={excludeDomain}
                    onChange={(e) => setExcludeDomain(e.target.checked)}
                    className="rounded border-gray-300 text-[#1D4ED8] focus:ring-[#1D4ED8]"
                  />
                  <span>Exclude Same Domain</span>
                </label>

                <label className="hidden sm:inline-flex items-center gap-1 cursor-pointer select-none">
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
                  className="px-2 py-1 text-gray-700 hover:bg-gray-200 border border-gray-300 rounded bg-white transition"
                >
                  Sample Data
                </button>
                <button
                  type="button"
                  onClick={handleClear}
                  className="px-2 py-1 text-red-700 hover:bg-red-50 border border-gray-300 rounded bg-white transition"
                >
                  Clear
                </button>
              </div>

            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="mt-3 p-2.5 bg-red-50 border border-red-200 rounded text-xs text-red-700 font-medium">
              {errorMessage}
            </div>
          )}

          {/* Solid Primary Action Button */}
          <div className="mt-4 text-center">
            <button
              type="button"
              id="checkBtn"
              disabled={loading}
              onClick={handleCheck}
              className="px-8 py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-50 text-white font-bold text-base rounded shadow transition inline-flex items-center justify-center gap-2 min-w-[190px]"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Checking Batch...</span>
                </>
              ) : (
                <span>Check DA PA</span>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* Results Section */}
      <ResultsTable results={results} loading={loading} />

    </div>
  );
}
