// src/lib/domainValidator.ts

const FORBIDDEN_HOSTS = new Set([
  'localhost',
  '0.0.0.0',
  '127.0.0.1',
  '169.254.169.254', // AWS / GCP Cloud Metadata IP
  'metadata.google.internal',
  'instance-data',
]);

const PRIVATE_IP_REGEX = /^(10\.|192\.168\.|172\.(1[6-9]|2[0-9]|3[0-1])\.|127\.|169\.254\.)/;

export interface ValidationResult {
  valid: boolean;
  domain?: string;
  original: string;
  error?: string;
}

/**
 * Normalizes and sanitizes a raw domain or URL string while defending against SSRF.
 */
export function sanitizeDomain(rawInput: string): ValidationResult {
  if (!rawInput || typeof rawInput !== 'string') {
    return { valid: false, original: rawInput, error: 'Empty or invalid input' };
  }

  const original = rawInput.trim();

  // Strip protocol, www, trailing slashes, ports, and query parameters
  let cleaned = original
    .toLowerCase()
    .replace(/^(https?:\/\/)/i, '')
    .replace(/^www\./i, '')
    .split('/')[0]
    .split('?')[0]
    .split('#')[0]
    .split(':')[0]
    .trim();

  // 1. Anti-SSRF Check: Block internal, private, and metadata ranges
  if (FORBIDDEN_HOSTS.has(cleaned) || PRIVATE_IP_REGEX.test(cleaned)) {
    return {
      valid: false,
      original,
      error: 'Security alert: Loopback, private IP, or metadata hosts are not allowed.',
    };
  }

  // 2. Format validation: must be a valid root or sub domain
  const domainRegex = /^([a-z0-9]([a-z0-9\-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i;
  if (!domainRegex.test(cleaned)) {
    return {
      valid: false,
      original,
      error: `Invalid domain format: "${cleaned}"`,
    };
  }

  return {
    valid: true,
    domain: cleaned,
    original,
  };
}

/**
 * Parses and deduplicates a batch of domains from lines of text.
 */
export function parseAndCleanBatch(
  rawText: string,
  options: {
    excludeDuplicateDomains?: boolean;
    maxLimit?: number;
  } = {}
): { validDomains: string[]; rejected: { input: string; error: string }[] } {
  const lines = rawText
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);

  const seen = new Set<string>();
  const validDomains: string[] = [];
  const rejected: { input: string; error: string }[] = [];

  const max = options.maxLimit || 10;

  for (const line of lines) {
    if (validDomains.length >= max) {
      break;
    }

    const res = sanitizeDomain(line);
    if (!res.valid || !res.domain) {
      rejected.push({ input: line, error: res.error || 'Invalid domain' });
      continue;
    }

    if (options.excludeDuplicateDomains && seen.has(res.domain)) {
      continue; // skip duplicate domain
    }

    seen.add(res.domain);
    validDomains.push(res.domain);
  }

  return { validDomains, rejected };
}
