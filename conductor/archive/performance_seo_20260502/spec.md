# Spec: Performance, SEO, and Analytics

## Overview
Optimize the site for Lighthouse 90+ across all categories and integrate
analytics, schema.org structured data, sitemap, and conversion tracking.
This track runs after the major page tracks (2, 3, 5, 6) are complete.

## Image Optimization Audit
- Verify every image uses `next/image` with proper `sizes` attribute
- Convert any remaining `<img>` tags
- Audit `alt` text on all images
- Ensure hero images use `priority` prop

## Code Splitting
- Verify route-level chunking is working in Next.js App Router
- Identify any large client components that should be lazy-loaded
- Use `next/dynamic` for heavy below-the-fold components

## Font Optimization
- Confirm `next/font` is used for all fonts (already done in brand_theme track)
- Verify `display: swap` is set
- No late-loading font flashes

## Schema.org Markup
Add structured data to each page type:

| Page Type | Schema |
|---|---|
| Homepage + county pages | `LocalBusiness` |
| Service detail pages | `Service` |
| FAQ sections | `FAQPage` |
| Testimonials | `Review` + `AggregateRating` |
| Blog posts | `BlogPosting` |
| Inspector pages | `Person` |

Implementation: JSON-LD `<script>` tag in each page's `<head>` via Next.js
`metadata` or a `<JsonLd>` utility component.

## Sitemap
- Use `next-sitemap` to generate `/sitemap.xml` at build time
- Include all static routes + dynamic routes (blog posts, area pages, service pages)
- Submit sitemap to Google Search Console

## Robots.txt
- Allow all crawlers on production
- Block `/api/` routes
- Point to sitemap URL

## Analytics Integration

### Google Analytics 4
- Already partially implemented (GA UA in brand_theme track)
- Migrate/add GA4 measurement ID
- Implement via `next/script` with `strategy="afterInteractive"`

### Google Tag Manager
- Add GTM container snippet
- Manage GA4, conversion events through GTM

### Conversion Event Tracking
| Event | Trigger |
|---|---|
| `booking_started` | User lands on /schedule/property-type |
| `booking_submitted` | Successful form submission on /schedule/confirm |
| `phone_click` | Click on any `tel:` link |
| `pdf_download` | Click on any PDF link |
| `language_toggle` | EN ↔ ES toggle click |
| `sample_report_view` | Click on any sample report link |

### Microsoft Clarity
- Add Clarity snippet for heatmaps and session replay (free tier)
- Mask PII fields in booking form

## Lighthouse Targets
| Category | Target |
|---|---|
| Performance | ≥ 90 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | 100 |

Run Lighthouse CI on Vercel preview deployments (GitHub Actions).

## Acceptance Criteria
- [ ] All images use `next/image` with `sizes` and `alt` attributes
- [ ] Schema.org JSON-LD present on all specified page types
- [ ] `/sitemap.xml` generates and includes all routes
- [ ] `/robots.txt` correct for production
- [ ] GA4 + GTM fire on page load (verifiable in Network tab)
- [ ] All 6 conversion events fire correctly
- [ ] Clarity snippet loads without errors
- [ ] Lighthouse CI ≥ 90 on all categories on Vercel preview
- [ ] `npm run build` and `npm run lint` pass

## Out of Scope
- A/B testing setup
- Custom Clarity event tracking
- Google Search Console integration (manual step)
