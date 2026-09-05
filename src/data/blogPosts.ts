// src/data/blogPosts.ts

export interface CitationSource {
  title: string;
  url: string;
  publisher: string;
  note?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  updatedAt?: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  sources?: CitationSource[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  // ─── SEO ARTICLE 1 ────────────────────────────────────────────────────────
  {
    slug: 'what-is-a-good-domain-authority-score',
    title: 'What Is a Good Domain Authority Score? Practical Reference Ranges and How to Benchmark',
    excerpt: 'Not all DA scores mean the same thing. Learn practical reference ranges by site type and industry, and — more importantly — how to benchmark your Domain Authority against the pages that are actually ranking for your target keywords.',
    category: 'SEO Fundamentals',
    readTime: '8 min read',
    publishedAt: '2026-09-04',
    updatedAt: '2026-09-04',
    author: {
      name: 'DAPA Metrics Editorial Team',
      role: 'SEO Research & Analysis',
      avatar: '/favicon.svg',
    },
    sources: [
      {
        title: 'Domain Authority: What It Is and How It Works',
        url: 'https://moz.com/learn/seo/domain-authority',
        publisher: 'Moz',
        note: 'Primary reference for DA calculation methodology and score interpretation guidance.',
      },
      {
        title: 'How Search Works — Google',
        url: 'https://www.google.com/search/howsearchworks/how-search-works/ranking-results/',
        publisher: 'Google',
        note: 'Google explanation of the hundreds of factors that influence ranking, clarifying why DA is a proxy metric, not a direct Google signal.',
      },
      {
        title: 'Open PageRank Initiative',
        url: 'https://www.domcop.com/openpagerank/',
        publisher: 'DomCop / Open PageRank',
        note: 'Open-source PageRank dataset based on Common Crawl, used as a complement to DA for cross-referencing link authority.',
      },
    ],
    content: `
## What Does "Good" Actually Mean for Domain Authority?

Domain Authority (DA) is a 1–100 score created by Moz that models how competitive a domain's backlink profile is relative to the rest of the web. The scale is logarithmic — scores become significantly harder to increase at higher values, because they reflect your domain's position relative to the entire web index Moz tracks.

The single most common mistake webmasters make is evaluating their DA in absolute terms — "Is 35 good?" — rather than asking the more actionable question: **"Is my DA competitive within my specific niche and against my direct search competitors?"**

There is no universal DA score that guarantees competitiveness in any particular industry. The only meaningful benchmark is the DA of the pages currently ranking for your target keywords.

---

## The Logarithmic Reality: Why Higher DA Becomes Harder to Earn

DA operates on a **logarithmic scale**, meaning the effort required to increase your score rises significantly as you climb higher. Early gains — building your first meaningful set of referring domains — tend to produce visible score movement. But at higher DA levels, incremental growth requires proportionally more diverse, high-quality linking domains.

This has a practical implication: **a domain in a local services niche may rank for competitive keywords that a higher-DA domain in the finance niche cannot**, because Google's actual ranking signals are not based on DA directly. On-page relevance, content depth, and user experience are independently weighted in Google's systems.

---

## Illustrative Reference Ranges by Site Type

> **Note**: These ranges are illustrative rather than official industry benchmarks. There is no authoritative research establishing universally agreed DA thresholds per site type. Use these as a general orientation point — your actual competitive position should always be assessed against the specific pages ranking for your target queries.

| Site Type | Illustrative DA Range | What it typically suggests |
|---|---|---|
| Brand-new domain (0–6 months) | 1–15 | Few or no indexed backlinks yet; normal for new sites |
| Small independently operated blog | 10–30 | Some referring domain diversity starting to accumulate |
| Established niche site (2–5 years) | 25–45 | Consistent content and link-building compounding over time |
| Regional news or industry publication | 40–60 | Active editorial coverage, press mentions, industry citations |
| National brand or major publisher | 60–80 | Sustained earned media, PR, and digital outreach at scale |
| Mega-platform or institutional domain | 80–100 | Thousands of high-authority referring domains across many years |

---

## Illustrative Reference Ranges by Industry Context

Industry competitive dynamics differ significantly. A domain competing in a niche with few authoritative publishers may rank at a lower DA than a domain in a vertical crowded with large, well-linked institutional sites.

> **Note**: The figures below are illustrative reference points based on general industry observation, not official research statistics. Competition within any vertical varies significantly by specific keyword, geography, and content format. Always run a SERP analysis on your actual target queries to understand what DA range you are actually competing against.

| Industry Context | Illustrative competitive DA range |
|---|---|
| Finance & Insurance | Often 50+ among established ranking pages |
| Health & Medical | Often 50+ for established publishers |
| Legal & Law | Often 45+ |
| SaaS & Technology | Often 40+ |
| E-commerce / Retail | Varies widely; 35–60+ depending on niche |
| Local Services / SMB | Often 20–40 for local/regional queries |
| Niche Hobbyist / Enthusiast | Often 15–35 |
| B2B Industrial / Manufacturing | Often 20–40 |

The only reliable benchmark is running a SERP analysis on your actual target keywords and checking the DA of the pages that are currently ranking on page one.

---

## What Is a Good DA Score for a New Website?

For a new website (under 12 months old), a low DA is entirely normal and expected. No score is inherently "bad" in isolation — what matters is the trajectory and the competitive context.

A new site should not chase DA as a primary KPI. Instead, track:

1. **Referring root domains** — growth trend over time matters more than any single DA snapshot
2. **Organic keyword rankings** for your target queries
3. **Impressions and clicks** from Google Search Console

---

## How to Check Your Domain Authority for Free

You can instantly audit your DA, Page Authority (PA), Spam Score, and Open PageRank using the [DAPA Metrics free bulk checker](/). Enter up to 10 domains in one batch — no login required.

For ongoing link building strategy, cross-reference your DA reading with your Open PageRank score, which is calculated from the independent Common Crawl dataset. This dual-metric approach gives you a more complete picture of your domain's authority than any single score alone.

---

## The Right Way to Interpret Your DA Score

1. **Compare to direct SERP competitors**, not industry giants.
2. **Track your DA trend** over time (monthly snapshots), not the absolute number.
3. **Diagnose score drops** — a DA drop usually signals that referring domains have been lost, deindexed, or that high-authority sites in Moz's index updated their own link profiles.
4. **Never buy links** to inflate DA. Moz's Spam Score algorithm flags unnatural link clusters, and Google's SpamBrain system targets manipulative link patterns algorithmically.

---

## Summary

A "good" Domain Authority score is one that is **competitive against the pages already ranking for your target keywords**. The reference ranges in this article are illustrative starting points — always validate against your actual SERP competitors. Monitor your referring domain growth trend monthly. And remember: DA is a proxy metric, not a Google ranking signal. Ranking success depends on content quality, relevance, and the full suite of on-page and off-page signals that Google's systems evaluate.
    `,
  },

  // ─── SEO ARTICLE 2 ────────────────────────────────────────────────────────
  {
    slug: 'how-to-check-domain-authority-free',
    title: 'How to Check Domain Authority for Free (No Account Required)',
    excerpt: 'Step-by-step guide to checking Domain Authority, Page Authority, Spam Score, and Open PageRank for any domain — including bulk checking multiple sites simultaneously — entirely free and without creating an account.',
    category: 'SEO Fundamentals',
    readTime: '6 min read',
    publishedAt: '2026-09-04',
    author: {
      name: 'DAPA Metrics Editorial Team',
      role: 'SEO Research & Analysis',
      avatar: '/favicon.svg',
    },
    sources: [
      {
        title: 'Domain Authority Metric Definition',
        url: 'https://moz.com/learn/seo/domain-authority',
        publisher: 'Moz',
        note: 'Authoritative source for understanding what DA measures and how Moz computes it.',
      },
      {
        title: 'Open PageRank — About the Initiative',
        url: 'https://www.domcop.com/openpagerank/',
        publisher: 'DomCop / Open PageRank',
        note: 'Documentation for the Open PageRank API built on Common Crawl data.',
      },
      {
        title: 'Understanding Page Authority',
        url: 'https://moz.com/learn/seo/page-authority',
        publisher: 'Moz',
        note: 'Moz documentation on how Page Authority differs from Domain Authority.',
      },
    ],
    content: `
## Why Check Domain Authority?

Domain Authority (DA) is one of the most widely-used proxy metrics in SEO for quickly evaluating how competitive a website's backlink profile is. Checking a competitor's DA tells you how difficult outranking them may be for specific keywords. Checking a potential link partner's DA tells you whether a backlink from them is worth pursuing.

Most tools that provide DA data either require a paid subscription or force you to create an account before revealing any scores. This guide explains how to check DA, PA, Spam Score, and Open PageRank for free — and how to check multiple domains in a single batch.

---

## What Metrics Should You Check?

Before going further, understand the three core metrics worth auditing together:

| Metric | Source | What It Measures |
|---|---|---|
| **Domain Authority (DA)** | Moz | Predicted ranking ability of the entire root domain, based on link profile strength |
| **Page Authority (PA)** | Moz | Same methodology applied to a single URL rather than the whole domain |
| **Spam Score** | Moz | Percentage likelihood the domain shares link characteristics with penalised/spam sites |
| **Open PageRank (OPR)** | Common Crawl | Independent algorithmic PageRank score, cross-referencing DA for a fuller picture |

Checking DA alone is insufficient for serious competitor research or backlink prospecting. When reviewing a potential link partner, Spam Score is one signal worth examining alongside DA — a high Spam Score can be a reason to investigate the site more carefully before pursuing a link opportunity.

---

## How to Check Domain Authority for Free — Step by Step

### Step 1: Open DAPA Metrics

Navigate to [dapametrics.vercel.app](/) — no account creation required. The checker is immediately accessible on the homepage.

### Step 2: Enter the Domains You Want to Check

Type or paste the domain or URL you want to evaluate into the input field. You can enter:
- Root domains: \`example.com\`
- Subdomains: \`blog.example.com\`
- Full URLs: \`https://example.com/page\` (the tool extracts the root domain automatically)

### Step 3: Check Multiple Domains at Once (Bulk Mode)

To check up to **10 domains simultaneously**, enter each domain on a new line or separated by commas. This bulk mode is especially useful for:
- Competitor SERP analysis (grab the top 10 ranking URLs and audit all of them at once)
- Link prospecting shortlists (evaluate 10 outreach targets in one pass)
- Client site audits (compare your domain against key competitors instantly)

### Step 4: Review the Results

The results table shows:
- **DA** — Domain Authority score (1–100, logarithmic scale)
- **PA** — Page Authority score for the specific URL entered
- **Spam Score** — Expressed as a percentage; low (1–30%), medium (31–60%), high (61–100%)
- **Open PageRank** — OPR score from the independent Common Crawl dataset
- **Referring Domains** — Total count of unique root domains linking to the target

### Step 5: Interpret the Scores in Context

Never evaluate scores in isolation. Compare all domains in your batch to understand relative competitive positioning. A competitor with DA 38 is not necessarily harder to outrank than one with DA 42 — page-level authority (PA) and on-page relevance are equally important for keyword-specific rankings.

---

## Bulk Checking Tips for SEO Professionals

**For SERP competitor audits**: Copy the top 10 URLs from a Google search for your target keyword. Paste them all into DAPA Metrics to generate a complete competitive authority map in under 30 seconds.

**For backlink prospecting**: Build a shortlist of guest post or editorial targets in your niche. When evaluating candidates, consider Spam Score, DA, OPR, topical relevance, organic traffic, editorial quality, and indexing status together. Avoid treating any single metric as an automatic pass/fail threshold — each signal is most useful in combination with the others.

**For client reporting**: Run baseline checks at project start and monthly thereafter. The results table supports copying data for use in your reporting workflow.

---

## Why Not Just Use the Moz Bar or Other Paid Tools?

The Moz browser extension (MozBar) provides per-page DA/PA data for free — but it requires a free Moz account and only displays data for the page you are currently viewing. It does not support bulk checking.

Paid platforms like Ahrefs and SEMrush provide their own proprietary authority metrics (Domain Rating and Authority Score respectively), but these require active subscriptions that start at roughly \$100–\$130 per month.

DAPA Metrics provides Moz-sourced DA and PA data alongside independent Open PageRank scores, **completely free**, with no account requirement and support for up to 10 domains per batch. For teams and agencies that need higher volume, the [API documentation](/methodology) describes the underlying endpoint architecture.

---

## Frequently Asked Questions

**Does checking DA require creating an account?**
No. DAPA Metrics requires no registration. Enter your domains and receive results immediately.

**How current is the DA data?**
DA scores are cached for up to 7 days to balance performance with freshness. Moz updates its web index regularly, meaning DA scores industry-wide shift every 4–6 weeks as their machine learning model refreshes.

**Can I export the results?**
Copy the results from the on-screen table into any spreadsheet tool. Native CSV export is on the [product roadmap](/methodology).

**Is the tool free for agencies and SEO consultants?**
Yes — completely free for any individual or agency use. The tool is ad-supported to sustain development and infrastructure costs.
    `,
  },

  // ─── SEO ARTICLE 3 ────────────────────────────────────────────────────────
  {
    slug: 'moz-spam-score-explained',
    title: 'Moz Spam Score Explained: What It Is, How It Works, and When to Worry',
    excerpt: 'A plain-English breakdown of Moz Spam Score — what the percentage actually means, which thresholds signal real risk, how it differs from a Google penalty, and the specific situations where a high Spam Score should change your SEO decisions.',
    category: 'Technical SEO',
    readTime: '9 min read',
    publishedAt: '2026-09-04',
    author: {
      name: 'DAPA Metrics Editorial Team',
      role: 'SEO Research & Analysis',
      avatar: '/favicon.svg',
    },
    sources: [
      {
        title: 'Spam Score: A New Metric to Help You Avoid Bad Links',
        url: 'https://moz.com/blog/spam-score-a-new-metric',
        publisher: 'Moz Blog',
        note: 'Original announcement and methodology overview of Spam Score from Moz.',
      },
      {
        title: 'Spam Policies for Google Web Search',
        url: 'https://developers.google.com/search/docs/essentials/spam-policies',
        publisher: 'Google Search Central',
        note: 'Authoritative Google documentation on link schemes, cloaking, and manipulative linking practices.',
      },
      {
        title: 'Link Disavow Tool — Google Search Console Help',
        url: 'https://support.google.com/webmasters/answer/2648487',
        publisher: 'Google',
        note: 'Google guidance on when to use (and when not to use) the disavow file.',
      },
      {
        title: 'SpamBrain: Using AI to Fight Web Spam',
        url: 'https://developers.google.com/search/blog/2021/04/how-we-fought-webspam-2020',
        publisher: 'Google Search Central Blog',
        note: 'Google blog post describing SpamBrain, the AI-based system that identifies and neutralises web spam including link schemes.',
      },
    ],
    content: `
## What Is Moz Spam Score?

Spam Score is a metric developed by Moz that estimates the likelihood that a given domain shares characteristics with websites that have been penalised by Google or manually actioned for spam. It is expressed as a **percentage from 0% to 100%**.

A common misconception is that Spam Score directly reports whether Google has penalised a website. It does not. Spam Score is a **predictive signal** based on Moz's internal research — it models the degree to which a domain's characteristics resemble those of sites Moz has identified as spam-like in its index. Moz's documentation should be consulted for the most current description of how this model works.

You can check any domain's Spam Score instantly using the [free DAPA Metrics checker](/), which displays the score alongside DA, PA, and Open PageRank.

---

## How Spam Score Is Calculated

According to Moz, Spam Score is based on a set of site characteristics that appear statistically more often among penalised or spam-like websites in their research. Moz has described these as "spam flags" — site-level signals that their model uses to generate the score.

The full and current list of signals is defined and maintained by Moz. Because this is a proprietary model that may be updated over time, we recommend consulting [Moz's official Spam Score documentation](https://moz.com/blog/spam-score-a-new-metric) for the precise current methodology rather than relying on any third-party summary.

**What is important to understand**: Spam Score measures patterns Moz associates with problematic sites — it does not confirm a Google penalty. A high-traffic, legitimate website can theoretically receive a non-zero Spam Score if it happens to share structural characteristics with spam sites in Moz's dataset.

---

## Practical Score Bands — DAPA Metrics' Interpretation

> **Clarification**: The following band labels are DAPA Metrics' practical interpretation for helping users reason about the score. They are not Moz's official classification labels. Consult Moz's documentation for Moz's own framing.

| Band | Score Range | DAPA Metrics' practical interpretation |
|---|---|---|
| **Low** | 1–30% | Generally no cause for concern as a starting point; continue normal assessment |
| **Medium** | 31–60% | Worth investigating more carefully, particularly before pursuing a link from this domain |
| **High** | 61–100% | A strong prompt for thorough review; avoid treating this domain as a default link partner without additional due diligence |

---

## Spam Score vs. a Google Manual Action: Key Differences

| | Spam Score (Moz) | Google Manual Action |
|---|---|---|
| **Source** | Moz's proprietary research model | Google Search Console (official) |
| **What it detects** | Patterns correlated with spam, not confirmed penalties | Confirmed human reviewer action against your site |
| **Impact on rankings** | None (it is a third-party metric) | Direct negative impact — Google demotes or deindexes affected pages |
| **Where to check it** | DAPA Metrics, Moz tools | Google Search Console → Manual Actions report |
| **Resolution** | No action needed unless the domain is a link partner | Submit reconsideration request after fixing violations |

A Spam Score of 80% on your own domain does **not** mean you have received a Google penalty. It means your site currently displays patterns Moz has associated with spammy sites. Audit your backlink profile and site structure to identify and correct those patterns.

---

## When Should Spam Score Change Your SEO Decisions?

### Situation 1: Evaluating a Backlink Opportunity

A high Spam Score on a potential link partner's domain should prompt additional review — looking at the site's content quality, editorial practices, backlink patterns, topical relevance, and organic search presence. It should not be treated as automatic proof that a link from that domain is harmful. Many factors determine whether a link passes value, and Spam Score is one signal in a broader evaluation.

Check DA, OPR, and Spam Score together as part of that broader review. A site with a very high Spam Score alongside low DA and thin content is a pattern worth proceeding carefully with — but the combination of signals matters, not any single number in isolation.

### Situation 2: Your Own Domain Has a High Spam Score

Run the [DAPA Metrics checker](/) on your own domain. If your Spam Score is elevated:

1. **Audit your inbound link profile** using Moz Link Explorer or Google Search Console's Links report.
2. **Identify patterns of concern** — clusters of low-quality exact-match anchor links, links from obvious link farm domains, or mass directory submissions.
3. **Disavow selectively** — Google's official guidance is to use the disavow tool only if you have a confirmed manual action or strong evidence that toxic links are causing ranking suppression. Google's SpamBrain system typically ignores low-quality links automatically.

### Situation 3: Competitor Research

Checking a ranking competitor's Spam Score can give you a rough sense of how their link profile has been built. A competitor with a consistently low Spam Score alongside sustained DA growth typically has an earned, organic backlink profile — which tends to be more durable through algorithm updates. A very high Spam Score combined with evidence of unnatural linking patterns is worth noting as a potential fragility in their authority.

---

## Common Spam Score Myths Debunked

**Myth: "A high Spam Score means Google has penalised the site."**
False. Spam Score is a Moz-proprietary predictive model. Google does not use or share this data.

**Myth: "I need to disavow every link from a domain with Spam Score above 30%."**
False. Mass disavow of all moderate-Spam-Score links will likely harm your rankings by removing legitimate editorial signals. Disavow only when you have a confirmed manual action or specific evidence of ranking suppression from identifiable toxic link clusters.

**Myth: "A DA 70 site with Spam Score 5% is always a better link than a DA 30 site with Spam Score 10%."**
Not necessarily. Topical relevance and the editorial context of the linking page matter as much as authority scores. A lower-DA site with strong topical alignment often provides more practical ranking signal than a high-DA site with no content connection to your niche.

---

## How to Check Spam Score for Free

Use the [DAPA Metrics free checker](/) to instantly audit any domain's Spam Score alongside its Domain Authority, Page Authority, and Open PageRank. Enter up to 10 domains simultaneously in bulk mode — no account required.

For deeper backlink-level analysis, Moz Link Explorer provides per-link Spam Score attribution — useful when diagnosing why your overall domain Spam Score is elevated and identifying the specific inbound links contributing to it.
    `,
  },

  // ─── SEO ARTICLE 4 ────────────────────────────────────────────────────────
  {
    slug: 'domain-authority-vs-page-authority',
    title: 'Domain Authority vs Page Authority: What\'s the Difference and Which Matters More?',
    excerpt: 'DA and PA are both Moz metrics on the same 1–100 scale, but they measure fundamentally different things. Learn exactly what each score represents, when to use DA vs PA, and why the distinction matters for competitor analysis and link building strategy.',
    category: 'SEO Comparison',
    readTime: '7 min read',
    publishedAt: '2026-09-04',
    author: {
      name: 'DAPA Metrics Editorial Team',
      role: 'SEO Research & Analysis',
      avatar: '/favicon.svg',
    },
    sources: [
      {
        title: 'Domain Authority Metric Definition',
        url: 'https://moz.com/learn/seo/domain-authority',
        publisher: 'Moz',
        note: 'Official Moz documentation for Domain Authority.',
      },
      {
        title: 'Page Authority Metric Definition',
        url: 'https://moz.com/learn/seo/page-authority',
        publisher: 'Moz',
        note: 'Official Moz documentation explaining how Page Authority is calculated and differs from Domain Authority.',
      },
      {
        title: 'How Google Ranks Pages — Google Search Central',
        url: 'https://www.google.com/search/howsearchworks/how-search-works/ranking-results/',
        publisher: 'Google',
        note: 'Google explanation of ranking signals, clarifying that neither DA nor PA are used by Google directly.',
      },
    ],
    content: `
## The Core Difference in One Sentence

**Domain Authority (DA)** measures the predicted ranking ability of an entire root domain, while **Page Authority (PA)** measures the predicted ranking ability of a single specific URL. Both scores use the same 1–100 logarithmic scale and are calculated by Moz using similar machine learning models — but they answer completely different questions.

You can check both scores simultaneously for any domain or URL using the [free DAPA Metrics bulk checker](/).

---

## Domain Authority: What It Measures

Domain Authority reflects the cumulative strength of a website's **entire backlink profile** as measured across every page on the domain. When Moz calculates DA, it aggregates the link signals from all the pages on a site — homepage, blog posts, product pages, subdomains — and produces a single composite score for the root domain.

**DA answers the question**: How authoritative and trustworthy is this website as a whole, relative to all other websites on the internet?

### What influences DA?

According to Moz's documentation, DA is driven primarily by the quantity and quality of referring root domains pointing to the domain, assessed through their machine learning model. For the most current methodology, refer to [Moz's Domain Authority documentation](https://moz.com/learn/seo/domain-authority).

---

## Page Authority: What It Measures

Page Authority applies the same fundamental methodology as DA — but scoped to a **single URL**. Instead of aggregating all the site's backlinks, PA evaluates only the backlinks pointing at that specific page, plus the internal link equity that the page receives from the rest of the site.

**PA answers the question**: How likely is this specific page to rank in search results for competitive queries, based on its individual link profile?

### What influences PA?

According to Moz's documentation, PA is calculated using a similar machine learning approach to DA, applied at the page level rather than the domain level. The signals Moz considers are described in their [Page Authority documentation](https://moz.com/learn/seo/page-authority) and include external links pointing to the specific URL. Because Moz's methodology is proprietary and may change, consult their documentation for the most current description of what PA measures.

For practical purposes, pages that receive more direct external backlinks from diverse, relevant sources tend to have higher PA than pages that receive few or none — though the exact relationship depends on Moz's current model.

---

## Side-by-Side Comparison

| | Domain Authority (DA) | Page Authority (PA) |
|---|---|---|
| **Scope** | Entire root domain | Single URL / page |
| **Primary signal** | Referring root domains to the whole site | Backlinks to the specific URL |
| **Scale** | 1–100 (logarithmic) | 1–100 (logarithmic) |
| **Changes frequently?** | Relatively stable; shifts monthly with Moz index updates | More volatile — a single viral backlink can spike PA significantly |
| **Best used for** | Site-level competitive analysis, domain health auditing | Page-level SERP competitor analysis, link prospecting |
| **Typical relationship** | DA is usually higher than PA for most pages | A homepage often has PA ≈ DA; deep pages typically have lower PA |

---

## When to Use DA vs PA in Practice

### Use DA for:

1. **Domain-level competitive analysis** — When evaluating whether your overall site can compete in a niche, compare your DA against the DA of domains that currently rank in your target SERPs.
2. **Link partner vetting** — When assessing whether a potential guest post or editorial partner site is authoritative, DA gives you the domain-wide signal you need.
3. **Historical authority tracking** — Monitoring your DA over time indicates whether your link building efforts are compounding correctly.

### Use PA for:

1. **Keyword-level competitor analysis** — When targeting a specific keyword, the pages ranking on page one each have their own PA. A page with very high domain DA but lower PA on a specific article may be differently positioned than a page with moderate DA whose target URL has accumulated direct links.
2. **Evaluating a specific backlink** — The PA of the specific page linking to you is worth noting alongside the domain's DA. A deep blog post that has accumulated direct, editorial backlinks tends to be a more contextually relevant link placement than a low-PA secondary page on a high-DA domain — though topical relevance and editorial context matter too.
3. **Internal link planning** — Identifying which pages on your site have the highest PA tells you which pages should serve as your internal link hubs, distributing equity to pages you want to rank for competitive queries.

---

## A Practical Example: How DA and PA Tell Different Stories

To illustrate why checking both metrics matters, consider a hypothetical SERP for a competitive keyword. Imagine the following five pages rank on page one:

> **Illustrative example — these values are hypothetical and are not current measurements of any real websites. They are shown to demonstrate the conceptual relationship between DA and PA, not to characterise any specific domain.**

| Hypothetical Page | Illustrative DA | Illustrative PA |
|---|---|---|
| Large general publication — main article | 90+ | ~20–30 |
| Established SaaS comparison site | 80+ | ~55–65 |
| Focused niche blog — comprehensive guide | 40–45 | ~40–50 |
| Specialist industry reviewer | 35–40 | ~35–45 |
| Your site — new guide | 25–35 | ~25–35 |

The pattern this illustrates: a large publication can have very high DA but relatively low PA on a specific article if that article has received few direct external links. A focused niche blog with moderate DA may have comparable PA on its best resource if the community has linked directly to that guide. **The page-level competitive gap is often narrower than the domain-level gap suggests** — which is why checking PA is worth doing for any keyword you are actively targeting.

---

## Which Matters More for SEO?

Neither metric is universally more important. The answer depends on the analysis context:

- For **site health and overall brand authority**: DA is the primary signal
- For **individual keyword competitiveness**: PA of the ranking page is the more relevant data point to examine
- For **evaluating an inbound link opportunity**: The PA of the specific linking page is worth reviewing alongside the domain's DA

For the most complete picture, always check DA, PA, Spam Score, and Open PageRank together. The [DAPA Metrics free checker](/) returns all four metrics in a single query, making it practical to run this full audit quickly for any domain or URL.
    `,
  },
];
