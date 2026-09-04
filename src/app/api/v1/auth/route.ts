// src/app/api/v1/auth/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { authenticateUser, registerUser } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, name, email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    if (action === 'register') {
      const result = await registerUser({ name, email, password });
      if (!result.success) {
        return NextResponse.json({ success: false, error: result.error }, { status: 400 });
      }
      return NextResponse.json(result);
    } else {
      // Default to login
      const result = await authenticateUser({ email, password });
      if (!result.success) {
        return NextResponse.json({ success: false, error: result.error }, { status: 401 });
      }
      return NextResponse.json(result);
    }
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error during authentication.' },
      { status: 500 }
    );
  }
}
