// src/app/contact/page.tsx
'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit message.');
      }

      setStatus({ success: true, message: data.message });
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (err: any) {
      setStatus({ success: false, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-gray-800">
      
      <div className="bg-white border border-gray-300 rounded-md p-6 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 border-b border-gray-200 pb-3">
          Contact DAPA Metrics
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Have feedback, discovered a bug, or need agency bulk API access? Send us a message below. Our technical team responds within 48 business hours.
        </p>

        {status && (
          <div
            className={`p-4 rounded text-xs font-semibold mb-6 border ${
              status.success
                ? 'bg-green-50 text-green-800 border-green-200'
                : 'bg-red-50 text-red-800 border-red-200'
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div>
            <label htmlFor="name" className="block font-bold text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-2.5 border border-gray-300 rounded focus:border-blue-600 focus:outline-none"
              placeholder="e.g. Sarah Jenkins"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-bold text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-2.5 border border-gray-300 rounded focus:border-blue-600 focus:outline-none"
              placeholder="name@company.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block font-bold text-gray-700 mb-1">
              Inquiry Subject
            </label>
            <select
              id="subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full p-2.5 border border-gray-300 rounded focus:border-blue-600 focus:outline-none bg-white"
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Bug Report / Tool Issue">Bug Report / Tool Issue</option>
              <option value="Bulk Agency API Access">Bulk Agency API Access</option>
              <option value="Partnership & Advertising">Partnership & Advertising</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block font-bold text-gray-700 mb-1">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-2.5 border border-gray-300 rounded focus:border-blue-600 focus:outline-none"
              placeholder="How can we assist you today?"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2.5 bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-50 text-white font-bold rounded shadow transition text-sm"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-500">
          Direct Inquiries: <span className="font-mono text-gray-700">support@dapametrics.com</span>
        </div>
      </div>

    </div>
  );
}
