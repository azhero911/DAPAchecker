// src/app/admin/page.tsx
'use client';

import React, { useState } from 'react';

export default function AdminPage() {
  const [maxBatch, setMaxBatch] = useState('10');
  const [rateLimit, setRateLimit] = useState('5');
  const [provider, setProvider] = useState('mock');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 flex-grow w-full text-gray-800">
      <div className="bg-white border border-gray-300 rounded-md p-6 shadow-sm mb-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 gap-2">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <span>⚙️</span> DAPA Metrics Admin Control Panel
            </h1>
            <p className="text-xs text-gray-500 mt-0.5">Manage tool limits, monitor cache performance, and view user inquiries</p>
          </div>
          <div>
            <span className="px-2.5 py-1 rounded bg-green-50 text-green-700 border border-green-200 text-xs font-bold">
              ● System Status: Healthy
            </span>
          </div>
        </div>

        {/* Quick KPI Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-6 text-xs">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="text-gray-500 font-medium block mb-1">Checks Today</span>
            <span className="text-2xl font-black text-gray-900">1,420</span>
            <span className="text-green-700 text-[11px] block mt-1">↑ 14% vs yesterday</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="text-gray-500 font-medium block mb-1">Cache Hit Ratio</span>
            <span className="text-2xl font-black text-[#1D4ED8]">78.4%</span>
            <span className="text-gray-500 text-[11px] block mt-1">Saved ~$112 in API fees</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="text-gray-500 font-medium block mb-1">Average Response</span>
            <span className="text-2xl font-black text-emerald-700">82 ms</span>
            <span className="text-gray-500 text-[11px] block mt-1">Sub-second performance</span>
          </div>
          <div className="p-4 bg-gray-50 border border-gray-200 rounded">
            <span className="text-gray-500 font-medium block mb-1">Active Quota Remaining</span>
            <span className="text-2xl font-black text-purple-700">85,800</span>
            <span className="text-gray-500 text-[11px] block mt-1">Monthly pool healthy</span>
          </div>
        </div>

        {/* Tool Settings Manager (Editable) */}
        <div className="p-5 border border-gray-200 rounded bg-gray-50 mb-6">
          <h3 className="font-bold text-gray-900 text-sm mb-3">Live Tool Limits & Engine Settings</h3>
          
          {saved && (
            <div className="mb-4 p-2.5 bg-green-50 border border-green-200 text-green-800 text-xs font-bold rounded">
              ✓ Engine settings saved successfully!
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Max Domains Per Batch</label>
              <input
                type="number"
                value={maxBatch}
                onChange={(e) => setMaxBatch(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded bg-white font-mono"
              />
              <span className="text-gray-500 text-[10px]">Free tier domain limit</span>
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Rate Limit (Req / Min)</label>
              <input
                type="number"
                value={rateLimit}
                onChange={(e) => setRateLimit(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded bg-white font-mono"
              />
              <span className="text-gray-500 text-[10px]">Protects against scrapers</span>
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-1">Active Metrics Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded bg-white font-semibold"
              >
                <option value="mock">Offline Mock Provider (Active)</option>
                <option value="opr">Open PageRank API</option>
                <option value="moz">Moz Links API v2</option>
              </select>
              <span className="text-gray-500 text-[10px]">Switch live data source</span>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={handleSave}
              className="px-5 py-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold rounded text-xs shadow transition"
            >
              Save Engine Settings
            </button>
          </div>
        </div>

        {/* Inquiries / Messages Inbox */}
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-3">User Contact Inquiries (Recent Submissions)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs tool-table border-collapse">
              <thead className="bg-gray-100 text-gray-800 font-bold uppercase text-[11px]">
                <tr>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Sender</th>
                  <th className="py-2.5 px-3">Subject</th>
                  <th className="py-2.5 px-3">Message</th>
                  <th className="py-2.5 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2.5 px-3 text-gray-500 font-mono">Today, 15:20</td>
                  <td className="py-2.5 px-3 font-bold text-gray-900">Sarah Jenkins (sarah@agencyseo.co)</td>
                  <td className="py-2.5 px-3 text-blue-700 font-semibold">Agency API Pricing Inquiry</td>
                  <td className="py-2.5 px-3 text-gray-600">Can we get custom 100-domain batch access for client reporting?</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-bold text-[10px]">Unread</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 text-gray-500 font-mono">Yesterday</td>
                  <td className="py-2.5 px-3 font-bold text-gray-900">Michael Chang (mchang@techblog.io)</td>
                  <td className="py-2.5 px-3 font-semibold">Feature Suggestion</td>
                  <td className="py-2.5 px-3 text-gray-600">Love the clean design without ads. Please keep it fast!</td>
                  <td className="py-2.5 px-3 text-center">
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 font-bold text-[10px]">Replied</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
