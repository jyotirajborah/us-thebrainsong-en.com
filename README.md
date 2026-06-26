# The Brain Song — Landing Page

Affiliate landing page for **The Brain Song** — a Gamma brainwave audio program.  
Domain: `us-thebrainsong-en.com`

## Project Structure

```
.
├── index.html       # Main landing page
├── 404.html         # Custom 404 error page
├── style.css        # All styles (dark theme, responsive)
├── main.js          # Scroll animations, UX enhancements
├── robots.txt       # Search engine crawler rules
├── sitemap.xml      # XML sitemap for SEO
├── .htaccess        # Apache: HTTPS redirect, caching, security headers
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

## Tech Stack

- Plain HTML / CSS / Vanilla JS — no framework, no build step
- Google Fonts: Inter + Playfair Display
- Fully responsive (mobile-first)

## Deployment

This is a static site. Deploy to any host that serves static files (Apache, Nginx, Netlify, GitHub Pages, etc.).

### Apache hosts
`.htaccess` is pre-configured for:
- HTTPS + www redirect
- Browser caching (1 year for assets)
- Gzip compression
- Security headers (HSTS, X-Frame-Options, CSP-ready)

### Netlify / Vercel
The `.htaccess` file is ignored by these platforms. Add redirect rules via `netlify.toml` or `vercel.json` if needed.

## Affiliate Link

The CTA buttons point to the ClickBank hop link:  
`https://44e00pi87eiq3x85xyxhwhpf-2.hop.clickbank.net/`

Update this in `index.html` if the affiliate link changes.

## SEO

- Update `sitemap.xml` `<lastmod>` date after any content change
- `robots.txt` allows all crawlers and points to the sitemap
- Meta description is set in `<head>` of `index.html`

## License

Proprietary — all rights reserved.
