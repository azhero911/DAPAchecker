// src/app/error.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <div className="w-16 h-16 bg-red-50 text-red-700 font-bold text-2xl flex items-center justify-center rounded-lg mx-auto mb-4 border border-red-200">
        !
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Something Went Wrong</h1>
      <p className="text-sm text-gray-600 mb-6">
        An unexpected error occurred while analyzing website metrics. Please try again.
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="px-5 py-2 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-xs font-bold rounded shadow transition"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded border border-gray-300 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
