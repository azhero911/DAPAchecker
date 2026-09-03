// src/components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<{ role: string; name: string; email: string } | null>(null);

  const loadUser = () => {
    const stored = localStorage.getItem('dapa_user');
    if (stored) {
      try {
        setCurrentUser(JSON.parse(stored));
      } catch (e) {
        setCurrentUser(null);
      }
    } else {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    loadUser();

    // Listen for custom login/logout events across tabs/components
    const handleAuthChange = () => loadUser();
    window.addEventListener('authChange', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('dapa_user');
    setCurrentUser(null);
    window.dispatchEvent(new Event('authChange'));
    router.push('/');
  };

  return (
    <header className="bg-white border-b border-gray-300 shadow-[0_1px_3px_rgba(0,0,0,0.05)] sticky top-0 z-40">
      <div className="widescreen-container h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <img src="/logo.jpg" alt="DAPA Metrics Logo" className="h-12 w-auto object-contain rounded" />
          <div>
            <span className="text-2xl font-bold text-gray-900 tracking-tight">
              DAPA Metrics
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold text-gray-500 ml-2 py-0.5 px-2 bg-gray-100 rounded border border-gray-200">
              Measure. Analyze. Grow.
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-base font-semibold text-gray-700">
          <Link href="/" className="text-[#1D4ED8] font-bold border-b-2 border-[#1D4ED8] pb-6 pt-6">
            DA PA Checker
          </Link>
          <Link href="/methodology" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            Methodology
          </Link>
          <Link href="/about" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            Contact
          </Link>
          <Link href="/affiliate-disclosure" className="hover:text-gray-900 pb-6 pt-6 border-b-2 border-transparent transition">
            Affiliate Notice
          </Link>
        </nav>

        {/* Auth State in Header */}
        <div className="flex items-center space-x-3">
          
          {/* 1. Logged Out State */}
          {!currentUser && (
            <div className="flex items-center space-x-2.5">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-bold text-gray-700 hover:text-[#1D4ED8] border border-gray-300 rounded-lg bg-white transition shadow-sm"
              >
                Sign In
              </Link>
              <Link
                href="/login?tab=register"
                className="hidden sm:inline-block px-4 py-2 text-sm font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg shadow transition"
              >
                Register Free
              </Link>
            </div>
          )}

          {/* 2. Logged In as Regular User */}
          {currentUser && currentUser.role === 'user' && (
            <div className="flex items-center space-x-2.5">
              <Link
                href="/dashboard"
                className="px-3.5 py-2 text-sm font-bold text-[#1D4ED8] bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-2 transition"
              >
                <span>👤</span>
                <span>{currentUser.name.split(' ')[0]}</span>
                <span className="text-xs text-gray-500 font-normal">(Dashboard)</span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-2.5 py-2 text-xs font-semibold text-gray-500 hover:text-red-700 transition"
                title="Sign Out"
              >
                Logout
              </button>
            </div>
          )}

          {/* 3. Logged In as Master Admin */}
          {currentUser && currentUser.role === 'admin' && (
            <div className="flex items-center space-x-2.5">
              <Link
                href="/admin"
                className="px-3.5 py-2 text-sm font-bold text-purple-900 bg-purple-50 border border-purple-300 rounded-lg flex items-center gap-2 shadow-sm transition"
              >
                <span>👑</span>
                <span>Admin Panel</span>
              </Link>
              <button
                onClick={handleLogout}
                className="px-2.5 py-2 text-xs font-semibold text-gray-500 hover:text-red-700 transition"
                title="Sign Out"
              >
                Logout
              </button>
            </div>
          )}

        </div>

      </div>
    </header>
  );
}
