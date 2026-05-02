# Implementation Plan: Performance, SEO, and Analytics

Track ID: `performance_seo_20260502`

---

## Phase 1: Image + Font Audit

- [x] Task: Image optimization audit
    - [x] Grep codebase for `<img` tags → convert all to `next/image`
    - [x] Verify all `next/image` usages have `sizes` and `alt` attributes
    - [x] Add `priority` to all above-the-fold hero images
    - [x] Audit `alt` text for accessibility (descriptive, not empty or generic)

- [x] Task: Font verification
    - [x] Confirm no `<link rel="stylesheet">` Google Fonts calls remain
    - [x] All fonts loaded via `next/font` (already done in brand_theme track — verify)

- [x] Task: Conductor - User Manual Verification 'Phase 1: Image + Font Audit' (Protocol in workflow.md)

---

## Phase 2: Code Splitting + Performance

- [x] Task: Identify heavy client components
    - [x] ReviewsCarousel, map SVG — wrap in `next/dynamic` if not already
    - [x] Any third-party widgets that should be lazy-loaded

- [x] Task: Verify route-level code splitting in App Router
    - [x] Check bundle analyzer output: `ANALYZE=true npm run build`
    - [x] Identify any unusually large chunks

- [x] Task: Conductor - User Manual Verification 'Phase 2: Code Splitting' (Protocol in workflow.md)

---

## Phase 3: Schema.org Markup

- [x] Task: Build `JsonLd` utility component
    - [x] Generic: `<JsonLd data={schemaObject} />`
    - [x] Renders `<script type="application/ld+json">` in page head

- [x] Task: Add LocalBusiness schema to homepage and all county pages
    - [x] name, url, telephone, address, areaServed, openingHours

- [x] Task: Add Service schema to all service detail pages

- [x] Task: Add FAQPage schema to pages with FAQ accordions

- [x] Task: Add Review + AggregateRating schema to /testimonials

- [x] Task: Add BlogPosting schema to all blog post pages (if Track 9 complete)

- [x] Task: Add Person schema to all inspector pages (if Track 5 complete)

- [x] Task: Write test: schema JSON-LD script tag present on homepage

- [x] Task: Conductor - User Manual Verification 'Phase 3: Schema.org' (Protocol in workflow.md)

---

## Phase 4: Sitemap + Robots.txt

- [x] Task: Install `next-sitemap`
    - [x] `npm install next-sitemap`
    - [x] Configure `next-sitemap.config.js`

- [x] Task: Generate `/sitemap.xml`
    - [x] All static routes
    - [x] Dynamic routes: blog posts, area pages, service pages, inspector pages
    - [x] Exclude /api/ routes

- [x] Task: Configure `/robots.txt`
    - [x] Allow all crawlers on production
    - [x] Block /api/ routes
    - [x] Point to sitemap URL

- [x] Task: Verify sitemap at /sitemap.xml and robots.txt at /robots.txt

- [x] Task: Conductor - User Manual Verification 'Phase 4: Sitemap + Robots.txt' (Protocol in workflow.md)

---

## Phase 5: GA4 + GTM + Conversion Events + Clarity

- [x] Task: Upgrade/confirm GA4 setup
    - [x] Replace UA tracking ID with GA4 Measurement ID
    - [x] Verify GA4 fires on page load

- [x] Task: Add Google Tag Manager container
    - [x] GTM snippet in root layout
    - [x] Configure GA4 via GTM

- [x] Task: Implement conversion event tracking
    - [x] `booking_started` — user lands on /schedule/property-type
    - [x] `booking_submitted` — successful form submission
    - [x] `phone_click` — any `tel:` link click
    - [x] `pdf_download` — any PDF link click
    - [x] `language_toggle` — EN ↔ ES toggle
    - [x] `sample_report_view` — sample report link click

- [x] Task: Add Microsoft Clarity snippet
    - [x] Load via `next/script` strategy="afterInteractive"
    - [x] Mask PII fields in booking form

- [x] Task: Conductor - User Manual Verification 'Phase 5: Analytics + Events' (Protocol in workflow.md)

---

## Phase 6: Lighthouse CI + QA

- [x] Task: Add Lighthouse CI to GitHub Actions
    - [x] Install `@lhci/cli`
    - [x] Configure `lighthouserc.json` with performance targets (≥90)
    - [x] Run against Vercel preview URL on PR

- [x] Task: Fix any Lighthouse failures
    - [x] Performance: LCP, FID, CLS
    - [x] Accessibility: ARIA, color contrast, focus management
    - [x] SEO: missing meta tags, robots issues

- [x] Task: Run `npm run build` and `npm run lint`
- [x] Task: Conductor - User Manual Verification 'Phase 6: Lighthouse CI + QA' (Protocol in workflow.md)
