// src/app/api/v1/admin/stats/route.ts
import { NextResponse } from 'next/server';
import { getAdminStats, isDatabaseConfigured } from '@/lib/db';
import { isRedisConfigured } from '@/lib/redis';

export async function GET() {
  try {
    const isConfigured = isDatabaseConfigured();
    const isRedis = isRedisConfigured();
    const stats = await getAdminStats();

    return NextResponse.json({
      success: true,
      configured: isConfigured,
      redisConfigured: isRedis,
      ...stats,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to retrieve admin stats' },
      { status: 500 }
    );
  }
}
