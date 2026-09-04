// src/lib/db.ts
if (!process.env.POSTGRES_URL && process.env.DATABASE_URL) {
  process.env.POSTGRES_URL = process.env.DATABASE_URL;
}

import crypto from 'crypto';
import { sql } from '@vercel/postgres';

export const isDatabaseConfigured = (): boolean => {
  return Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);
};

// Password hashing helper
function hashPassword(password: string, salt?: string): { hash: string; salt: string } {
  const userSalt = salt || crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, userSalt, 1000, 64, 'sha512').toString('hex');
  return { hash, salt: userSalt };
}

function verifyPassword(password: string, hash: string, salt: string): boolean {
  const checkHash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
  return checkHash === hash;
}

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
        name VARCHAR(100),
        email VARCHAR(255) UNIQUE NOT NULL,
        password_hash VARCHAR(255),
        salt VARCHAR(64),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        plan VARCHAR(50) DEFAULT 'free',
        stripe_customer_id VARCHAR(100),
        daily_check_count INT DEFAULT 0,
        last_check_reset TIMESTAMPTZ DEFAULT NOW()
      );
    `;

    // Ensure columns exist if table was created previously
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS name VARCHAR(100);`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS salt VARCHAR(64);`;

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
    // Run sequential queries to prevent serverless single-connection pooling conflicts
    const countsResult = await sql`
      SELECT 
        (SELECT COUNT(*) FROM domain_checks WHERE checked_at >= CURRENT_DATE) AS today_checks,
        (SELECT COUNT(*) FROM domain_checks) AS total_checks,
        (SELECT COUNT(*) FROM contact_submissions WHERE status = 'unread') AS unread_inquiries;
    `;

    const inquiriesResult = await sql`
      SELECT id, name, email, subject, message, created_at, status 
      FROM contact_submissions 
      ORDER BY created_at DESC 
      LIMIT 10;
    `;

    const row = countsResult.rows[0] || {};

    return {
      connected: true,
      todayChecks: parseInt(row.today_checks || '0', 10),
      totalChecks: parseInt(row.total_checks || '0', 10),
      unreadInquiries: parseInt(row.unread_inquiries || '0', 10),
      recentInquiries: inquiriesResult.rows || [],
    };
  } catch (error: any) {
    console.error('[DB Admin Stats Error]', error);
    return {
      connected: false,
      error: error?.message || 'Database connected, but schema tables may need initialization.',
      todayChecks: 0,
      totalChecks: 0,
      unreadInquiries: 0,
      recentInquiries: [],
    };
  }
}

// Register User with PostgreSQL
export async function registerUser(data: { name?: string; email: string; password: string }) {
  if (!isDatabaseConfigured()) {
    return { success: false, error: 'Database is not connected.' };
  }

  const cleanEmail = data.email.trim().toLowerCase();
  const cleanName = (data.name || '').trim() || cleanEmail.split('@')[0];

  if (!cleanEmail || !cleanEmail.includes('@')) {
    return { success: false, error: 'Please provide a valid email address.' };
  }

  if (!data.password || data.password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters long.' };
  }

  try {
    // Ensure columns exist
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS name VARCHAR(100);`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS salt VARCHAR(64);`;

    // Check if user already exists
    const existing = await sql`SELECT id FROM users WHERE email = ${cleanEmail};`;
    if (existing.rows.length > 0) {
      return { success: false, error: 'An account with this email already exists. Please sign in instead.' };
    }

    const { hash, salt } = hashPassword(data.password);

    const result = await sql`
      INSERT INTO users (name, email, password_hash, salt, plan)
      VALUES (${cleanName}, ${cleanEmail}, ${hash}, ${salt}, 'free')
      RETURNING id, name, email, plan;
    `;

    return {
      success: true,
      user: {
        id: result.rows[0].id,
        name: result.rows[0].name,
        email: result.rows[0].email,
        role: 'user',
        plan: result.rows[0].plan,
      },
    };
  } catch (error: any) {
    console.error('[DB Register Error]', error);
    return { success: false, error: error.message || 'Failed to register account.' };
  }
}

// Authenticate User with PostgreSQL
export async function authenticateUser(data: { email: string; password: string }) {
  const cleanEmail = data.email.trim().toLowerCase();

  // Admin bypass credentials
  if (cleanEmail === 'admin' || cleanEmail === 'admin@dapametrics.com') {
    if (data.password === 'Admin123$@we') {
      return {
        success: true,
        user: {
          role: 'admin',
          name: 'Master Admin',
          email: 'admin@dapametrics.com',
        },
      };
    } else {
      return { success: false, error: 'Incorrect master admin password.' };
    }
  }

  if (!isDatabaseConfigured()) {
    return { success: false, error: 'Database is not connected.' };
  }

  try {
    // Ensure columns exist
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS name VARCHAR(100);`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);`;
    await sql`ALTER TABLE users ADD COLUMN IF NOT EXISTS salt VARCHAR(64);`;

    const result = await sql`
      SELECT id, name, email, password_hash, salt, plan 
      FROM users 
      WHERE email = ${cleanEmail};
    `;

    if (result.rows.length === 0) {
      return {
        success: false,
        error: 'No account found with this email. Please click "Register" to create an account first.',
      };
    }

    const user = result.rows[0];

    if (!user.password_hash || !user.salt) {
      return {
        success: false,
        error: 'Account exists but has no password set. Please register a new account.',
      };
    }

    const isValid = verifyPassword(data.password, user.password_hash, user.salt);
    if (!isValid) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name || cleanEmail.split('@')[0],
        email: user.email,
        role: 'user',
        plan: user.plan || 'free',
      },
    };
  } catch (error: any) {
    console.error('[DB Authenticate Error]', error);
    return { success: false, error: error.message || 'Authentication failed.' };
  }
}

