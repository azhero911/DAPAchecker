// src/components/CookieBanner.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState<boolean>(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('dapa_cookie_consent');
      if (!consent) {
        setShowBanner(true);
      }
    } catch {
      // Ignore localStorage errors in private browsing
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('dapa_cookie_consent', 'accepted');
    } catch {}
    setShowBanner(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('dapa_cookie_consent', 'declined');
    } catch {}
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900/95 text-white border-t border-gray-700 shadow-2xl backdrop-blur-sm px-4 py-3 sm:px-6">
      <div className="max-w-[1550px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-center gap-2.5 text-gray-200 text-center sm:text-left">
          <span className="text-lg">🍪</span>
          <p>
            We use privacy-friendly cookies and cryptographic IP hashing to prevent rate limit abuse and ensure reliable tool performance.
            Learn more in our{' '}
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline font-medium">
              Privacy Policy
            </Link>.
          </p>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="px-3 py-1.5 rounded border border-gray-600 hover:bg-gray-800 text-gray-300 text-xs font-semibold transition"
          >
            Essential Only
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="px-4 py-1.5 rounded bg-[#1D4ED8] hover:bg-blue-600 text-white text-xs font-bold transition shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
