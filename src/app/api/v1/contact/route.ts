// src/app/api/v1/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required fields.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    // In local / production mode without SMTP keys, log contact inquiry cleanly
    console.log(`[Contact Form] From: ${name} (${email}) | Subject: ${subject || 'General'} | Message: ${message}`);

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting DAPA Metrics. Our team will respond within 48 hours.',
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process inquiry. Please try again.' }, { status: 500 });
  }
}
