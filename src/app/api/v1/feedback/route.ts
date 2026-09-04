// src/app/api/v1/feedback/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { saveUserFeedback } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { rating, accurate, domain, comments } = await req.json();

    if (!rating || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be an integer between 1 and 5.' }, { status: 400 });
    }

    await saveUserFeedback({
      rating: Number(rating),
      accurate: accurate !== undefined ? Boolean(accurate) : undefined,
      domain: domain ? String(domain) : undefined,
      comments: comments ? String(comments) : undefined,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for your rating and feedback!',
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to record feedback.' }, { status: 500 });
  }
}
