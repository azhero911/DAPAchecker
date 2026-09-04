// src/app/api/v1/admin/stats/route.ts
import { NextResponse } from 'next/server';
import { getAdminStats, isDatabaseConfigured } from '@/lib/db';

export async function GET() {
  try {
    const isConfigured = isDatabaseConfigured();
    const stats = await getAdminStats();

    return NextResponse.json({
      success: true,
      configured: isConfigured,
      ...stats,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to retrieve admin stats' },
      { status: 500 }
    );
  }
}
