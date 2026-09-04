// src/app/login/page.tsx
'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'register' ? 'register' : 'login';

  const [mode, setMode] = useState<'login' | 'register'>(initialTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  useEffect(() => {
    if (searchParams.get('error') === 'admin_required') {
      setError('🔒 Access Denied: Please sign in with Master Admin credentials to access the Admin Control Panel.');
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    const cleanInput = email.trim().toLowerCase();

    if (!cleanInput) {
      setError('Please enter your email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/v1/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: mode,
          name: name.trim(),
          email: cleanInput,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Authentication failed. Please check your credentials.');
        setIsSubmitting(false);
        return;
      }

      localStorage.setItem('dapa_user', JSON.stringify(data.user));
      window.dispatchEvent(new Event('authChange'));

      if (mode === 'register') {
        setSuccessMsg('✓ Account registered successfully! Redirecting to dashboard...');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      } else {
        if (data.user.role === 'admin') {
          router.push('/admin');
        } else {
          router.push('/dashboard');
        }
      }
    } catch (err: any) {
      setError('A network error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 py-16 flex-grow flex items-center justify-center">
      <div className="bg-white border-2 border-gray-300 rounded-xl p-8 sm:p-10 shadow-sm w-full max-w-md">
        
        {/* Tab Switcher */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
          <div className="flex gap-6 text-base font-bold">
            <button
              type="button"
              onClick={() => {
                setMode('login');
                setError('');
              }}
              className={`pb-1 transition ${
                mode === 'login'
                  ? 'text-[#1D4ED8] border-b-2 border-[#1D4ED8]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => {
                setMode('register');
                setError('');
              }}
              className={`pb-1 transition ${
                mode === 'register'
                  ? 'text-[#1D4ED8] border-b-2 border-[#1D4ED8]'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm font-semibold rounded-lg">
            {error}
          </div>
        )}

        {/* Success Alert */}
        {successMsg && (
          <div className="mb-5 p-3.5 bg-green-50 border border-green-200 text-green-700 text-sm font-semibold rounded-lg">
            {successMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5 text-base">
          {mode === 'register' && (
            <div>
              <label className="block font-bold text-gray-700 mb-1.5 text-sm">Your Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-base"
                placeholder="Alex Morgan"
              />
            </div>
          )}

          <div>
            <label className="block font-bold text-gray-700 mb-1.5 text-sm">Username or Email Address</label>
            <input
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-base"
              placeholder="Enter username or email"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-1.5 text-sm">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 text-base"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white font-bold rounded-lg shadow transition text-base disabled:opacity-50"
          >
            {isSubmitting
              ? 'Verifying with Database...'
              : mode === 'register'
              ? 'Create Free Account'
              : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200 text-center text-sm text-gray-500">
          <Link href="/" className="text-[#1D4ED8] hover:underline font-semibold">
            ← Return to Free Checker
          </Link>
        </div>

      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-gray-500">Loading sign in...</div>}>
      <LoginForm />
    </Suspense>
  );
}
