// src/components/ContactForm.tsx
'use client';

import React, { useState } from 'react';

export default function ContactForm() {
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

      setStatus({
        success: true,
        message: data.message || 'Thank you! Your message has been received. We will respond within 24–48 hours.',
      });
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    } catch (err: any) {
      setStatus({
        success: false,
        message: err.message || 'Failed to send message. Please reach out directly to support@dapametrics.com.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {status && (
        <div
          className={`p-5 rounded-lg text-base font-bold mb-8 border ${
            status.success
              ? 'bg-green-50 text-green-800 border-green-200'
              : 'bg-red-50 text-red-800 border-red-200'
          }`}
        >
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6 text-base">
        <div>
          <label htmlFor="name" className="block font-bold text-gray-700 mb-2">
            Your Full Name *
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full p-3.5 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-base"
            placeholder="e.g. Sarah Jenkins"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-bold text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-3.5 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-base"
            placeholder="name@company.com"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block font-bold text-gray-700 mb-2">
            Inquiry Subject
          </label>
          <select
            id="subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full p-3.5 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none bg-white text-base"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Bug Report / Tool Issue">Bug Report / Tool Issue</option>
            <option value="Bulk Agency API Access">Bulk Agency API Access</option>
            <option value="Partnership & Advertising">Partnership &amp; Advertising</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block font-bold text-gray-700 mb-2">
            Your Message *
          </label>
          <textarea
            id="message"
            required
            rows={6}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full p-3.5 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-base"
            placeholder="How can our engineering team assist you?"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3.5 bg-[#1D4ED8] hover:bg-[#1E40AF] disabled:opacity-50 text-white font-bold rounded-lg shadow transition text-base"
        >
          {loading ? 'Sending Message...' : 'Send Message'}
        </button>
      </form>
    </>
  );
}
