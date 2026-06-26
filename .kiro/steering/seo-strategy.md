---
inclusion: always
---

# SEO Strategy — Bing-First, USA Traffic

Apply these rules to every page, landing page, and content file built in this workspace.

## Target Engine & Audience
- Primary search engine: **Bing** (default on Windows + Edge — major USA traffic source)
- Primary audience: **United States**
- Secondary: Google-compatible (nothing below conflicts with Google best practices)

## Keyword Strategy
- Use **Exact Match Keywords** in copy — Bing still rewards literal phrase matching
- Favour **Exact Match Domains (EMDs)** where possible — can rank within weeks on Bing
- Do not over-optimise for "intent clusters" at the expense of exact phrases

## On-Page Placement Rules (non-negotiable)
Every page must have the target keyword phrase in ALL of these locations:
1. `<title>` tag
2. URL slug
3. `<h1>` tag — **one H1 per page only**
4. First 100 words of body content

## Content Structure
- No thin content — every page needs substance
- Required elements: **tables, bullet points, at least one image, FAQ section**
- Well-structured headings hierarchy: H1 → H2 → H3
- Direct, factual answers near the top (increases Bing Copilot / AI summary inclusion)

## AI & Copilot Optimisation (2026+)
- Write content so it can be pulled as a direct answer in **Bing Copilot / AI summaries**
- Lead sections should answer the core question in 2–3 sentences before expanding
- Use FAQ schema markup (`application/ld+json`) on every page
- Structured data signals Bing what the page answers

## Technical SEO Standards
- Mobile-first, fast loading (compress images, defer JS, cache assets)
- Clean, readable URL structure — no query strings in public URLs
- `<link rel="canonical">` on every page — Bing is strict about duplicate content
- Submit sitemap to **Bing Webmaster Tools** on every new page
- Use **IndexNow API** for fast indexing of new/updated pages
- Valid HTML — Bing penalises technical errors more aggressively than Google

## Indexing Checklist (every new deploy)
- [ ] Sitemap submitted to Bing Webmaster Tools
- [ ] IndexNow ping sent for new/updated URLs
- [ ] robots.txt allows all crawlers and references sitemap
- [ ] No broken links or missing canonical tags

## Social Signals
- Bing counts social engagement as a ranking factor (unlike Google's official stance)
- Every page should be shareable: Open Graph tags (`og:title`, `og:description`, `og:image`)
- Twitter Card meta tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- Share new pages on Facebook, X/Twitter, and LinkedIn after publishing

## Backlinks
- Quality over quantity — niche-relevant only
- Avoid any automated/bulk link-building software (Bing spam detection is aggressive)
- Target: editorial mentions, niche directories, relevant blogs

## Meta Tags Template (apply to every page)
```html
<!-- Primary SEO -->
<title>{Exact Match Keyword} — {Brand}</title>
<meta name="description" content="{2-sentence answer to the core query. Include exact keyword.}" />
<link rel="canonical" href="https://domain.com/{slug}" />

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="="og:title" content="{Exact Match Keyword} — {Brand}" />
<meta property="og:description" content="{Same as meta description}" />
<meta property="og:url" content="https://domain.com/{slug}" />
<meta property="og:image" content="https://domain.com/assets/og-image.jpg" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{Exact Match Keyword} — {Brand}" />
<meta name="twitter:description" content="{Same as meta description}" />
<meta name="twitter:image" content="https://domain.com/assets/og-image.jpg" />
```

## FAQ Schema Template (add to every page `<head>`)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{Question text}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{Direct answer text}"
      }
    }
  ]
}
</script>
```

## Why Bing Over Google for This Project
- Lower competition for the same keywords — easier top-3 ranking
- EMD advantage still works — domain name matches search query
- USA audience heavily uses Windows + Edge (Bing default)
- Bing Copilot integration means well-structured content gets featured in AI answers
- Tool/affiliate pages rank faster on Bing than Google for cold domains
