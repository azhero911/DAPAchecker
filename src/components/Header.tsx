// src/components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState<{ role: string; name: string; email: string } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    localStorage.removeItem('dapa_user');
    setCurrentUser(null);
    setMobileMenuOpen(false);
    window.dispatchEvent(new Event('authChange'));
    router.push('/');
  };

  const navLinks = [
    { label: 'DA PA Checker', href: '/' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Affiliate Notice', href: '/affiliate-disclosure' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <header className="bg-white border-b border-gray-300 shadow-[0_1px_3px_rgba(0,0,0,0.05)] sticky top-0 z-40">
      <div className="widescreen-container h-20 flex items-center justify-between">
        
        {/* Brand Logo with explicit width & height (Zero CLS) */}
        <Link href="/" className="flex items-center space-x-3 cursor-pointer">
          <img
            src="/logo.svg"
            alt="DAPA Metrics Logo"
            width={48}
            height={48}
            className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
          />
          <div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              DAPA Metrics
            </span>
            <span className="hidden sm:inline-block text-xs font-semibold text-gray-500 ml-2 py-0.5 px-2 bg-gray-100 rounded border border-gray-200">
              Measure. Analyze. Grow.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-base font-semibold text-gray-700">
          {navLinks.map((link) => {
            const isActive = link.href === '/'
              ? pathname === '/'
              : pathname === link.href || (link.href === '/blog' && pathname?.startsWith('/blog'));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-6 pt-6 border-b-2 transition ${
                  isActive
                    ? 'text-[#1D4ED8] font-bold border-[#1D4ED8]'
                    : 'text-gray-700 hover:text-gray-900 border-transparent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Section: Desktop Auth + Mobile Toggle Button */}
        <div className="flex items-center space-x-3">
          
          {/* 1. Logged Out State */}
          {!currentUser && (
            <div className="flex items-center space-x-2">
              <Link
                href="/login"
                className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-gray-700 hover:text-[#1D4ED8] border border-gray-300 rounded-lg bg-white transition shadow-sm"
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
            <div className="flex items-center space-x-2">
              <Link
                href="/dashboard"
                className="px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-[#1D4ED8] bg-blue-50 border border-blue-200 rounded-lg flex items-center gap-1.5 transition"
              >
                <span>👤</span>
                <span>{currentUser.name.split(' ')[0]}</span>
                <span className="hidden sm:inline text-xs text-gray-500 font-normal">(Dashboard)</span>
              </Link>
              <button
                onClick={handleLogout}
                className="hidden sm:inline-block px-2.5 py-2 text-xs font-semibold text-gray-500 hover:text-red-700 transition"
                title="Sign Out"
              >
                Logout
              </button>
            </div>
          )}

          {/* 3. Logged In as Master Admin */}
          {currentUser && currentUser.role === 'admin' && (
            <div className="flex items-center space-x-2">
              <Link
                href="/admin"
                className="px-3 sm:px-3.5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-purple-900 bg-purple-50 border border-purple-300 rounded-lg flex items-center gap-1.5 shadow-sm transition"
              >
                <span>👑</span>
                <span>Admin</span>
              </Link>
              <button
                onClick={handleLogout}
                className="hidden sm:inline-block px-2.5 py-2 text-xs font-semibold text-gray-500 hover:text-red-700 transition"
                title="Sign Out"
              >
                Logout
              </button>
            </div>
          )}

          {/* Mobile Menu Hamburger Button (visible on < lg screens) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] transition"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>

      </div>

      {/* Mobile Navigation Dropdown Menu (visible on < lg screens when toggled) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = link.href === '/'
                ? pathname === '/'
                : pathname === link.href || (link.href === '/blog' && pathname?.startsWith('/blog'));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-semibold transition ${
                    isActive
                      ? 'bg-blue-50 text-[#1D4ED8] font-bold border-l-4 border-[#1D4ED8]'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="text-xs bg-blue-100 text-[#1D4ED8] px-2 py-0.5 rounded font-bold">
                      Current
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Secondary Auth / Account Actions in Mobile Menu */}
          <div className="pt-3 border-t border-gray-200">
            {!currentUser ? (
              <div className="grid grid-cols-2 gap-2.5">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-center text-sm font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition"
                >
                  Sign In
                </Link>
                <Link
                  href="/login?tab=register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-center text-sm font-bold text-white bg-[#1D4ED8] hover:bg-[#1E40AF] rounded-lg shadow-sm transition"
                >
                  Register Free
                </Link>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  href={currentUser.role === 'admin' ? '/admin' : '/dashboard'}
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-2.5 px-3.5 flex items-center justify-between text-sm font-bold text-[#1D4ED8] bg-blue-50 border border-blue-200 rounded-lg transition"
                >
                  <span>👤 {currentUser.name}</span>
                  <span className="text-xs text-blue-700 underline font-semibold">
                    {currentUser.role === 'admin' ? 'Open Admin Panel →' : 'Open Dashboard →'}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full py-2 px-3 text-center text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg border border-red-200 transition"
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
