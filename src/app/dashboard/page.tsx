// src/app/dashboard/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function UserDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<{ role: string; name: string; email: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('dapa_user');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed);
      } catch (e) {
        router.push('/login');
      }
    } else {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('dapa_user');
    window.dispatchEvent(new Event('authChange'));
    router.push('/');
  };

  const handleExportMock = () => {
    const csv = "URL,Moz DA,Moz PA,Spam Score,Domain Age,Open PageRank\ngoogle.com,98,95,1%,26 Years,10.0\ntechcrunch.com,92,78,2%,19 Years,7.4\nnytimes.com,94,88,1%,28 Years,9.1";
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "Past_Audit_Report.csv";
    a.click();
  };

  if (!user) {
    return <div className="p-12 text-center text-gray-500">Loading your profile...</div>;
  }

  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-10 flex-grow text-gray-800">
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm mb-8">
        
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-200 gap-3">
          <div>
            <h1 className="text-3xl font-black text-gray-900 flex items-center gap-3">
              <span>👤</span> My Account & Saved Reports
            </h1>
            <p className="text-base text-gray-500 mt-1">
              Logged in as: <strong className="text-gray-900">{user.email}</strong> ({user.name})
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-lg bg-blue-50 text-[#1D4ED8] border border-blue-200 text-sm font-bold">
              Plan: Free Webmaster Tier
            </span>
            <button
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-lg text-sm font-bold text-red-700 hover:bg-red-50 border border-red-200 transition"
            >
              Sign Out
            </button>
          </div>
        </div>

        {/* Quota & Usage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8 text-base">
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-gray-500 font-medium block mb-2">Today&apos;s Checks</span>
            <span className="text-3xl font-black text-[#1D4ED8]">12 <span className="text-sm font-normal text-gray-500">/ 50 daily</span></span>
            <span className="text-green-700 text-sm block mt-2">38 checks remaining today</span>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-gray-500 font-medium block mb-2">Batch Quota Limit</span>
            <span className="text-3xl font-black text-gray-900">10 URLs</span>
            <span className="text-gray-500 text-sm block mt-2">Maximum URLs per single submission</span>
          </div>
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="text-gray-500 font-medium block mb-2">Saved Past Reports</span>
            <span className="text-3xl font-black text-purple-700">6 Audits</span>
            <span className="text-gray-500 text-sm block mt-2">Ready for instant re-download</span>
          </div>
        </div>

        {/* Search History Table */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900 text-xl">Your Recent Domain Checks & Audits</h3>
            <Link href="/" className="text-sm font-bold text-[#1D4ED8] hover:underline">
              + Run New Check
            </Link>
          </div>
          <div className="table-scroll-container">
            <table className="w-full text-left text-base tool-table border-collapse min-w-[750px]">
              <thead className="bg-gray-100 text-gray-900 font-bold uppercase text-sm">
                <tr>
                  <th className="py-3 px-4">Checked Date</th>
                  <th className="py-3 px-4">Domains in Batch</th>
                  <th className="py-3 px-4 text-center">Avg. DA</th>
                  <th className="py-3 px-4 text-center">Spam Status</th>
                  <th className="py-3 px-4 text-center">Export</th>
                </tr>
              </thead>
              <tbody className="text-base">
                <tr>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">Today, 16:40</td>
                  <td className="py-3.5 px-4 font-bold text-gray-900">google.com, techcrunch.com, nytimes.com</td>
                  <td className="py-3.5 px-4 text-center font-bold text-green-700 text-lg">94</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2.5 py-1 rounded bg-green-50 text-green-700 font-bold text-xs">Clean (1%)</span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={handleExportMock}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 text-sm font-bold transition"
                    >
                      Download CSV
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 text-gray-500 font-mono">Yesterday</td>
                  <td className="py-3.5 px-4 font-bold text-gray-900">free-download-links.xyz, spamtrap.info</td>
                  <td className="py-3.5 px-4 text-center font-bold text-red-600 text-lg">18</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="px-2.5 py-1 rounded bg-red-50 text-red-700 font-bold text-xs">Toxic (65%)</span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={handleExportMock}
                      className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded border border-gray-300 text-sm font-bold transition"
                    >
                      Download CSV
                    </button>
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
