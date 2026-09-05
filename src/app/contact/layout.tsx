// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dapametrics.vercel.app';

export const metadata: Metadata = {
  title: 'Contact Us | DAPA Metrics',
  description:
    'Get in touch with the DAPA Metrics team for support, feature requests, bug reports, or API inquiries.',
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Contact Us | DAPA Metrics',
    description:
      'Get in touch with the DAPA Metrics team for support, feedback, and inquiries.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
