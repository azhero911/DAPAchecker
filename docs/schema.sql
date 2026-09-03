-- DAPA Metrics - Supabase / PostgreSQL Schema (Phase 3 Expansion Ready)

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  plan VARCHAR(50) DEFAULT 'free', -- 'free', 'pro', 'agency'
  stripe_customer_id VARCHAR(100),
  daily_check_count INT DEFAULT 0,
  last_check_reset TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Domain Checks Log (History & Cache Persistence)
CREATE TABLE IF NOT EXISTS domain_checks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
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

CREATE INDEX IF NOT EXISTS idx_domain_checks_domain ON domain_checks(domain);
CREATE INDEX IF NOT EXISTS idx_domain_checks_checked_at ON domain_checks(checked_at);

-- 3. Contact Submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(200),
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status VARCHAR(20) DEFAULT 'unread' -- 'unread', 'replied', 'archived'
);

-- 4. User Feedback (Thumbs Up / Down & Accuracy Ratings)
CREATE TABLE IF NOT EXISTS user_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rating INT CHECK (rating >= 1 AND rating <= 5),
  accurate BOOLEAN,
  domain VARCHAR(255),
  comments TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
