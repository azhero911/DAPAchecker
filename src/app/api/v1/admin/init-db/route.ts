// src/app/api/v1/admin/init-db/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { initDatabaseSchema, isDatabaseConfigured } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    if (!isDatabaseConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error: 'No database connection string found. Please set POSTGRES_URL or DATABASE_URL in Vercel.',
        },
        { status: 400 }
      );
    }

    const result = await initDatabaseSchema();
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to initialize database schema.' },
      { status: 500 }
    );
  }
}
