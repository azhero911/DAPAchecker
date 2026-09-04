// src/lib/db.ts
import { sql } from '@vercel/postgres';

export const isDatabaseConfigured = (): boolean => {
  return Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);
};

// Initialize schema if not already created (uses docs/schema.sql)
export async function initDatabaseSchema() {
  if (!isDatabaseConfigured()) {
    return {
      success: false,
      message: 'Database connection string (POSTGRES_URL or DATABASE_URL) is not configured.',
    };
  }

  try {
    // 1. Users Table
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(255) UNIQUE NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        plan VARCHAR(50) DEFAULT 'free',
        stripe_customer_id VARCHAR(100),
        daily_check_count INT DEFAULT 0,
        last_check_reset TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // 2. Domain Checks Log (History & Analytics)
    await sql`
      CREATE TABLE IF NOT EXISTS domain_checks (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID,
        domain VARCHAR(255) NOT NULL,
        moz_da INT,
        moz_pa INT,
        moz_spam_score INT,
        domain_age_years NUMERIC(4,1),
        open_pagerank NUMERIC(4,2),
        global_rank BIGINT,
        checked_at TIMESTAMPTZ DEFAULT NOW(),
        cached BOOLEAN DEFAULT FALSE
      );
    `;

    await sql`CREATE INDEX IF NOT EXISTS idx_domain_checks_domain ON domain_checks(domain);`;
    await sql`CREATE INDEX IF NOT EXISTS idx_domain_checks_checked_at ON domain_checks(checked_at);`;

    // 3. Contact Submissions
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(100) NOT NULL,
        email VARCHAR(255) NOT NULL,
        subject VARCHAR(200),
        message TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        status VARCHAR(20) DEFAULT 'unread'
      );
    `;

    // 4. User Feedback
    await sql`
      CREATE TABLE IF NOT EXISTS user_feedback (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        rating INT CHECK (rating >= 1 AND rating <= 5),
        accurate BOOLEAN,
        domain VARCHAR(255),
        comments TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    return { success: true, message: 'Database schema tables initialized successfully.' };
  } catch (error: any) {
    console.error('[DB Init Error]', error);
    return { success: false, message: error.message || 'Failed to initialize database.' };
  }
}

// Log domain check
export async function logDomainCheck(data: {
  domain: string;
  mozDa?: number;
  mozPa?: number;
  mozSpamScore?: number;
  domainAgeYears?: number;
  openPageRank?: number;
  globalRank?: number;
  cached?: boolean;
}) {
  if (!isDatabaseConfigured()) return null;

  try {
    const result = await sql`
      INSERT INTO domain_checks (
        domain, moz_da, moz_pa, moz_spam_score, domain_age_years, open_pagerank, global_rank, cached
      ) VALUES (
        ${data.domain},
        ${data.mozDa ?? null},
        ${data.mozPa ?? null},
        ${data.mozSpamScore ?? null},
        ${data.domainAgeYears ?? null},
        ${data.openPageRank ?? null},
        ${data.globalRank ?? null},
        ${data.cached ?? false}
      )
      RETURNING id, checked_at;
    `;
    return result.rows[0];
  } catch (error) {
    console.error('[DB Log Domain Check Error]', error);
    return null;
  }
}

// Save contact submission
export async function saveContactSubmission(data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) {
  if (!isDatabaseConfigured()) return null;

  try {
    const result = await sql`
      INSERT INTO contact_submissions (name, email, subject, message)
      VALUES (${data.name}, ${data.email}, ${data.subject || null}, ${data.message})
      RETURNING id, created_at;
    `;
    return result.rows[0];
  } catch (error) {
    console.error('[DB Save Contact Error]', error);
    return null;
  }
}

// Save user feedback
export async function saveUserFeedback(data: {
  rating: number;
  accurate?: boolean;
  domain?: string;
  comments?: string;
}) {
  if (!isDatabaseConfigured()) return null;

  try {
    const result = await sql`
      INSERT INTO user_feedback (rating, accurate, domain, comments)
      VALUES (${data.rating}, ${data.accurate ?? null}, ${data.domain ?? null}, ${data.comments ?? null})
      RETURNING id;
    `;
    return result.rows[0];
  } catch (error) {
    console.error('[DB Save Feedback Error]', error);
    return null;
  }
}

// Get admin stats & recent inquiries
export async function getAdminStats() {
  if (!isDatabaseConfigured()) {
    return {
      connected: false,
      todayChecks: 0,
      totalChecks: 0,
      unreadInquiries: 0,
      recentInquiries: [],
    };
  }

  try {
    const [todayResult, totalResult, unreadResult, inquiriesResult] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM domain_checks WHERE checked_at >= CURRENT_DATE;`,
      sql`SELECT COUNT(*) as count FROM domain_checks;`,
      sql`SELECT COUNT(*) as count FROM contact_submissions WHERE status = 'unread';`,
      sql`SELECT id, name, email, subject, message, created_at, status FROM contact_submissions ORDER BY created_at DESC LIMIT 10;`,
    ]);

    return {
      connected: true,
      todayChecks: parseInt(todayResult.rows[0]?.count || '0', 10),
      totalChecks: parseInt(totalResult.rows[0]?.count || '0', 10),
      unreadInquiries: parseInt(unreadResult.rows[0]?.count || '0', 10),
      recentInquiries: inquiriesResult.rows,
    };
  } catch (error) {
    console.error('[DB Admin Stats Error]', error);
    return {
      connected: false,
      error: 'Database connected, but schema tables may need initialization.',
      todayChecks: 0,
      totalChecks: 0,
      unreadInquiries: 0,
      recentInquiries: [],
    };
  }
}
