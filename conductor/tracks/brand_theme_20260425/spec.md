# Spec: Brand & Theme Alignment with homekeyinspections.com

## Overview
Apply the visual identity of the existing homekeyinspections.com site to the
`/new-construction` (and `/new-construction/es`) pages. Changes cover fonts,
color tokens, logo, favicon, and analytics/SEO metadata. No structural layout
changes — only theming.

## Fonts

### Strategy
Replace the current Geist Sans/Mono font stack with Raleway + Lato, loaded via
`next/font/google`.

| Role | Font | Weights |
|---|---|---|
| Headings (h1–h3, nav brand) | Raleway | 300, 400, 500, 600, 700 |
| Body copy, labels, captions | Lato | 300, 400, 700 |

### Implementation
- Load both fonts in `app/layout.tsx` via `next/font/google`
- Expose as CSS variables: `--font-heading: Raleway`, `--font-body: Lato`
- Update `app/globals.css` `@theme inline` to map `--font-sans` → Lato,
  `--font-heading` → Raleway
- Apply `font-heading` class to `h1`, `h2`, `h3` elements in the `@layer base`
  block
- Remove all Geist font imports and references

## Color Palette

Replace the current shadcn default (near-black primary) with the HomeKey
brand palette extracted from the live site screenshot.

| Token | Hex | Usage |
|---|---|---|
| `--primary` | `#E8622A` | CTA buttons, active nav link, hover accents |
| `--primary-foreground` | `#FFFFFF` | Text on orange buttons |
| `--foreground` | `#2D2D2D` | Headings, nav links, strong text |
| `--muted-foreground` | `#555555` | Body copy, captions, labels |
| `--background` | `#FFFFFF` | Page background |
| `--secondary` | `#F5F5F5` | Alternating section backgrounds |
| `--border` | `#E0E0E0` | Card borders, separators |

All tokens updated in `app/globals.css` `:root` block (shadcn CSS variable
overrides). The existing HomeKey brand tokens (hk-green, builder-red,
stage-purple) are preserved unchanged.

## Logo

Replace the `🔑 HomeKey` text in `NavBar.tsx` with a `next/image` `<Image>`
component:
- `src`: `/Main-logo-Registered.jpg`
- `height`: 40px (matching the live site's 40px rule)
- `width`: auto (calculated from aspect ratio)
- `alt`: "HomeKey Inspections"
- Update the `content.ts` `logo` field accordingly

## Favicon

Use the existing `public/logo-32x32.jpg` as the site favicon.
- Add `<link rel="icon">` via Next.js `metadata.icons` in `app/layout.tsx`
- Add `apple-touch-icon` referencing `Main-logo-Registered.jpg`

## Analytics & SEO Metadata

### Google Analytics
- Add `UA-135443324-1` via `next/script` with `strategy="afterInteractive"` in
  `app/layout.tsx`
- Use the `gtag.js` pattern matching the live site

### Google Site Verification
- Add to root layout `metadata` export:
  `verification: { google: 'yGWwqTaiAvSIlxNZQ2ue7mc-i-muKdSAqoAhx3OXUjo' }`

### Root Layout Metadata
Update `app/layout.tsx` `metadata` to reflect the HomeKey brand:
- `title`: "HomeKey Inspections — The Key to Knowing More®"
- `description`: "Independent home inspections in Northern Virginia, Maryland, DC & Texas. ASHI ACI certified. ISO/IEC 17025 lab. Thermal imaging standard."

## Acceptance Criteria
- [ ] Raleway loads for all headings; Lato loads for all body text; no Geist references remain
- [ ] Primary CTA buttons render in `#E8622A` orange
- [ ] HomeKey logo image displays in the NavBar at 40px height on both EN and ES routes
- [ ] `logo-32x32.jpg` appears as the browser tab favicon
- [ ] Google Analytics fires on page load (verifiable in browser Network tab)
- [ ] Google Site Verification meta tag present in page `<head>`
- [ ] `npm run build` passes with no TypeScript errors
- [ ] `npm test` passes (all tests green)

## Out of Scope
- Changes to page layout, section content, or copy
- Dark mode theming
- Loading Crete Round, Droid Sans, or IBM Plex Sans (unused in actual rendering)
- Replacing or modifying the existing HomeKey brand accent tokens (green, red, purple)
