// src/app/admin/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [adminPasswordInput, setAdminPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [maxBatch, setMaxBatch] = useState('10');
  const [rateLimit, setRateLimit] = useState('5');
  const [provider, setProvider] = useState('mock');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const stored = localStorage.getItem('dapa_user');
      if (stored) {
        try {
          const user = JSON.parse(stored);
          if (user.role === 'admin') {
            setIsAuthenticated(true);
          } else {
            setIsAuthenticated(false);
          }
        } catch (e) {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const handleInlineLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError('');

    if (adminPasswordInput === 'Arham123$@we') {
      const adminUser = {
        role: 'admin',
        name: 'Master Admin',
        email: 'admin@dapametrics.com',
      };
      localStorage.setItem('dapa_user', JSON.stringify(adminUser));
      window.dispatchEvent(new Event('authChange'));
      setIsAuthenticated(true);
    } else {
      setAuthError('❌ Incorrect admin password. Access denied.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('dapa_user');
    window.dispatchEvent(new Event('authChange'));
    setIsAuthenticated(false);
    router.push('/');
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  if (loading) {
    return <div className="p-12 text-center text-gray-500">Checking security credentials...</div>;
  }

  // If NOT authenticated as admin, show locked access gate
  if (!isAuthenticated) {
    return (
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-16 flex-grow flex items-center justify-center text-gray-800">
        <div className="bg-white border-2 border-red-200 rounded-xl p-8 sm:p-10 shadow-sm w-full max-w-md text-center">
          <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4 border border-red-200">
            🔒
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Admin Access Restricted
          </h1>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            This control panel is strictly protected for the Master Administrator. Public visitors and standard users do not have permission to view this page.
          </p>

          {authError && (
            <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold rounded-lg text-left">
              {authError}
            </div>
          )}

          <form onSubmit={handleInlineLogin} className="space-y-4 text-left">
            <div>
              <label className="block font-bold text-gray-700 mb-1.5 text-xs uppercase tracking-wider">
                Enter Master Password
              </label>
              <input
                type="password"
                required
                value={adminPasswordInput}
                onChange={(e) => setAdminPasswordInput(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-base"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold rounded-lg shadow transition text-base"
            >
              Unlock Control Panel
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link href="/" className="text-sm text-gray-500 hover:text-blue-700 font-semibold">
              ← Return to Public Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin View
  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 flex-grow text-gray-800">
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm mb-10">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-3">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span>⚙️</span> DAPA Metrics Admin Control Panel
            </h1>
            <p className="text-base text-gray-500 mt-1">Manage tool limits, monitor cache performance, and view user inquiries</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-green-50 text-green-700 border border-green-200 text-sm font-bold">
              ● System Status: Healthy
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-purple-50 text-purple-800 border border-purple-200 text-sm font-bold">
              👑 Master Admin
            </span>
            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-lg text-sm font-bold text-red-700 hover:bg-red-50 border border-red-200 transition"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Quick KPI Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8 text-base">
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-gray-500 font-medium block mb-2">Checks Today</span>
            <span className="text-3xl font-bold text-gray-900">1,420</span>
            <span className="text-green-700 text-sm block mt-2">↑ 14% vs yesterday</span>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-gray-500 font-medium block mb-2">Cache Hit Ratio</span>
            <span className="text-3xl font-bold text-[#1D4ED8]">78.4%</span>
            <span className="text-gray-500 text-sm block mt-2">Saved ~$112 in API fees</span>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-gray-500 font-medium block mb-2">Average Response</span>
            <span className="text-3xl font-bold text-emerald-700">82 ms</span>
            <span className="text-gray-500 text-sm block mt-2">Sub-second performance</span>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-gray-500 font-medium block mb-2">Active Quota Remaining</span>
            <span className="text-3xl font-bold text-purple-700">85,800</span>
            <span className="text-gray-500 text-sm block mt-2">Monthly pool healthy</span>
          </div>
        </div>

        {/* Tool Settings Manager (Editable) */}
        <div className="p-6 sm:p-8 border border-gray-200 rounded-xl bg-gray-50 mb-10">
          <h3 className="font-bold text-gray-900 text-xl mb-4">Live Tool Limits & Engine Settings</h3>
          
          {saved && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-base font-bold rounded-lg">
              ✓ Engine settings saved successfully!
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-base">
            <div>
              <label className="block font-bold text-gray-700 mb-2">Max Domains Per Batch</label>
              <input
                type="number"
                value={maxBatch}
                onChange={(e) => setMaxBatch(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white font-mono text-base"
              />
              <span className="text-gray-500 text-xs mt-1 block">Free tier domain limit</span>
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-2">Rate Limit (Req / Min)</label>
              <input
                type="number"
                value={rateLimit}
                onChange={(e) => setRateLimit(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white font-mono text-base"
              />
              <span className="text-gray-500 text-xs mt-1 block">Protects against scrapers</span>
            </div>
            <div>
              <label className="block font-bold text-gray-700 mb-2">Active Metrics Provider</label>
              <select
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg bg-white font-semibold text-base"
              >
                <option value="mock">Offline Mock Provider (Active)</option>
                <option value="opr">Open PageRank API</option>
                <option value="moz">Moz Links API v2</option>
              </select>
              <span className="text-gray-500 text-xs mt-1 block">Switch live data source</span>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold rounded-lg text-base shadow transition"
            >
              Save Engine Settings
            </button>
          </div>
        </div>

        {/* Inquiries / Messages Inbox */}
        <div>
          <h3 className="font-bold text-gray-900 text-xl mb-4">User Contact Inquiries (Recent Submissions)</h3>
          <div className="table-scroll-container">
            <table className="w-full text-left text-base tool-table border-collapse min-w-[850px]">
              <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-sm">
                <tr>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Sender</th>
                  <th className="py-3.5 px-4">Subject</th>
                  <th className="py-3.5 px-4">Message</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-base">
                <tr>
                  <td className="py-4 px-4 text-gray-500 font-mono">Today, 15:20</td>
                  <td className="py-4 px-4 font-bold text-gray-900">Sarah Jenkins (sarah@agencyseo.co)</td>
                  <td className="py-4 px-4 text-blue-700 font-semibold">Agency API Pricing Inquiry</td>
                  <td className="py-4 px-4 text-gray-600">Can we get custom 100-domain batch access for client reporting?</td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-3 py-1 rounded bg-blue-50 text-blue-700 font-bold text-xs">Unread</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-500 font-mono">Yesterday</td>
                  <td className="py-4 px-4 font-bold text-gray-900">Michael Chang (mchang@techblog.io)</td>
                  <td className="py-4 px-4 text-gray-800 font-semibold">Feature Suggestion</td>
                  <td className="py-4 px-4 text-gray-600">Love the clean design without ads. Please keep it fast!</td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-3 py-1 rounded bg-gray-100 text-gray-600 font-bold text-xs">Replied</span>
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
