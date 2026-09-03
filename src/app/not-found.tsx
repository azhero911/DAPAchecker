// src/app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-md mx-auto px-4 py-20 text-center">
      <div className="w-16 h-16 bg-blue-50 text-[#1D4ED8] font-black text-2xl flex items-center justify-center rounded-lg mx-auto mb-4 border border-blue-200">
        404
      </div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
      <p className="text-sm text-gray-600 mb-6">
        The page or tool resource you are looking for has moved or does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white text-sm font-bold rounded shadow transition inline-flex items-center gap-2"
      >
        ← Return to DA PA Checker
      </Link>
    </div>
  );
}
