# Implementation Plan: Performance, SEO, and Analytics

Track ID: `performance_seo_20260502`

---

## Phase 1: Image + Font Audit

- [ ] Task: Image optimization audit
    - [ ] Grep codebase for `<img` tags → convert all to `next/image`
    - [ ] Verify all `next/image` usages have `sizes` and `alt` attributes
    - [ ] Add `priority` to all above-the-fold hero images
    - [ ] Audit `alt` text for accessibility (descriptive, not empty or generic)

- [ ] Task: Font verification
    - [ ] Confirm no `<link rel="stylesheet">` Google Fonts calls remain
    - [ ] All fonts loaded via `next/font` (already done in brand_theme track — verify)

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Image + Font Audit' (Protocol in workflow.md)

---

## Phase 2: Code Splitting + Performance

- [ ] Task: Identify heavy client components
    - [ ] ReviewsCarousel, map SVG — wrap in `next/dynamic` if not already
    - [ ] Any third-party widgets that should be lazy-loaded

- [ ] Task: Verify route-level code splitting in App Router
    - [ ] Check bundle analyzer output: `ANALYZE=true npm run build`
    - [ ] Identify any unusually large chunks

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Code Splitting' (Protocol in workflow.md)

---

## Phase 3: Schema.org Markup

- [ ] Task: Build `JsonLd` utility component
    - [ ] Generic: `<JsonLd data={schemaObject} />`
    - [ ] Renders `<script type="application/ld+json">` in page head

- [ ] Task: Add LocalBusiness schema to homepage and all county pages
    - [ ] name, url, telephone, address, areaServed, openingHours

- [ ] Task: Add Service schema to all service detail pages

- [ ] Task: Add FAQPage schema to pages with FAQ accordions

- [ ] Task: Add Review + AggregateRating schema to /testimonials

- [ ] Task: Add BlogPosting schema to all blog post pages (if Track 9 complete)

- [ ] Task: Add Person schema to all inspector pages (if Track 5 complete)

- [ ] Task: Write test: schema JSON-LD script tag present on homepage

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Schema.org' (Protocol in workflow.md)

---

## Phase 4: Sitemap + Robots.txt

- [ ] Task: Install `next-sitemap`
    - [ ] `npm install next-sitemap`
    - [ ] Configure `next-sitemap.config.js`

- [ ] Task: Generate `/sitemap.xml`
    - [ ] All static routes
    - [ ] Dynamic routes: blog posts, area pages, service pages, inspector pages
    - [ ] Exclude /api/ routes

- [ ] Task: Configure `/robots.txt`
    - [ ] Allow all crawlers on production
    - [ ] Block /api/ routes
    - [ ] Point to sitemap URL

- [ ] Task: Verify sitemap at /sitemap.xml and robots.txt at /robots.txt

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Sitemap + Robots.txt' (Protocol in workflow.md)

---

## Phase 5: GA4 + GTM + Conversion Events + Clarity

- [ ] Task: Upgrade/confirm GA4 setup
    - [ ] Replace UA tracking ID with GA4 Measurement ID
    - [ ] Verify GA4 fires on page load

- [ ] Task: Add Google Tag Manager container
    - [ ] GTM snippet in root layout
    - [ ] Configure GA4 via GTM

- [ ] Task: Implement conversion event tracking
    - [ ] `booking_started` — user lands on /schedule/property-type
    - [ ] `booking_submitted` — successful form submission
    - [ ] `phone_click` — any `tel:` link click
    - [ ] `pdf_download` — any PDF link click
    - [ ] `language_toggle` — EN ↔ ES toggle
    - [ ] `sample_report_view` — sample report link click

- [ ] Task: Add Microsoft Clarity snippet
    - [ ] Load via `next/script` strategy="afterInteractive"
    - [ ] Mask PII fields in booking form

- [ ] Task: Conductor - User Manual Verification 'Phase 5: Analytics + Events' (Protocol in workflow.md)

---

## Phase 6: Lighthouse CI + QA

- [ ] Task: Add Lighthouse CI to GitHub Actions
    - [ ] Install `@lhci/cli`
    - [ ] Configure `lighthouserc.json` with performance targets (≥90)
    - [ ] Run against Vercel preview URL on PR

- [ ] Task: Fix any Lighthouse failures
    - [ ] Performance: LCP, FID, CLS
    - [ ] Accessibility: ARIA, color contrast, focus management
    - [ ] SEO: missing meta tags, robots issues

- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Conductor - User Manual Verification 'Phase 6: Lighthouse CI + QA' (Protocol in workflow.md)
