# Spec: HomeKey New Construction Landing Page MVP

## Overview
A high-converting marketing landing page at `/new-construction` (English) and `/new-construction/es`
(Spanish) for Homekey Inspections' three-stage New Construction Bundle offering. Targets new-build
home buyers in Northern Virginia.

## Routes
| URL | File | Lang |
|---|---|---|
| `/new-construction` | `app/new-construction/page.tsx` | English |
| `/new-construction/es` | `app/new-construction/es/page.tsx` | Spanish |

Both routes share section components that accept a `lang: "en" | "es"` prop.

---

## Sections

### 1. Navigation Bar
- Logo: `🔑 HomeKey` (links to homepage)
- Nav links: Services · **New Construction** (active, bold) · Realtors · About · Reports
- Language toggle: `EN | ES` — navigates between `/new-construction` and `/new-construction/es`
- Primary CTA button: "Book inspection" (filled, dark background)
- **Mobile:** Logo + `EN|ES` + hamburger `☰`; nav links collapse into a drawer

### 2. Hero
- Badge: "For new-build buyers" (green pill: `#E1F5EE` / `#085041`)
- Headline: "Builders have a warranty. We make sure you actually get to use it."
- Subheadline: Independent ACI-certified inspections at every stage of your new home build. Same
  inspector. Same thermal camera. Same ISO-accredited lab. One continuous defense from foundation
  to final warranty claim.
- Primary CTA: "Get bundle pricing →" (scrolls to pricing calculator)
- Secondary CTA: "Watch 90-sec overview" (outlined)
- Hero image placeholder: inspector with thermal camera at new-build framing stage (4:3 aspect ratio)
- Trust pills row: ✓ ASHI ACI certified · ✓ ISO/IEC 17025 lab · ✓ Thermal imaging standard · ✓ Bilingual EN/ES
- **Layout:** 2-col grid on desktop (copy left, image right); stacked on mobile (image below copy)

### 3. Trust Bar
- Full-width strip with separator-divided items:
  - ★ 4.9/5 across 500+ reviews
  - ASHI · InterNACHI · NRS
  - Serving Loudoun, Fairfax, Prince William
  - A+ BBB
- Background: secondary surface; 0.5px top and bottom borders

### 4. The Problem
- Section label: "THE PROBLEM" (11px uppercase)
- Headline: "Your builder's 'preferred inspector' works for your builder. Not for you."
- 2-col comparison cards:
  - **Builder's inspector** (red card `#FCEBEB` / `#791F1F`):
    - Paid by the builder's settlement process
    - Speed-optimized for closing timeline
    - Findings rarely delay closings
    - No thermal imaging on defects you can't see
    - Report goes to builder first
  - **HomeKey (independent)** (green card `#E1F5EE` / `#085041`):
    - Paid by you, works for you
    - Quality-optimized for your 30-year ownership
    - Findings create leverage before closing
    - Thermal imaging + moisture meters standard
    - Report goes to you first, always
- **Mobile:** Cards stack vertically (builder first, HomeKey second)

### 5. The Bundle — Three-Stage Journey
- Section label: "THE BUNDLE"
- Headline: "Three inspections. One inspector. Continuous defense."
- 3-col card grid on desktop; vertical stack on mobile
- Each card:
  - Stage number badge (purple circle `#AFA9EC` / `#26215C`)
  - Stage name (bold)
  - Timing label (tertiary color, 11px)
  - Description text
  - Stage 1 — **Pre-drywall** (Week ~8–12 of construction): Catch framing, plumbing, electrical,
    and HVAC rough-in defects before drywall seals them in forever.
  - Stage 2 — **Pre-settlement** (Days before closing): Full inspection with thermal imaging +
    ISO-lab mold testing. Findings become your punch list.
  - Stage 3 — **11-month warranty** (Before builder warranty expires): Catch settling defects and
    systems failures while the builder is still obligated to fix them.

### 6. Bundle Pricing Calculator
- Section label: "BUNDLE PRICING"
- Headline: "Lock in all three at 15% off."
- 2-col layout on desktop; stacked on mobile
- **Left panel — inputs:**
  - Square footage input (number field, default 2,800)
  - Build community selector (dropdown: Brambleton, Ashburn, Leesburg, Dulles South, Haymarket,
    Gainesville, Bristow, Oak Hill, Other)
  - Add-ons multi-select (checkboxes: Radon testing, Sewer scope)
- **Right panel — live estimate:**
  - Line items: Pre-drywall / Pre-settlement + thermal + mold / 11-month warranty
  - Bundle discount line (green, dashed separator above)
  - Total (larger type, solid separator above)
  - "Reserve this bundle →" primary CTA (full width)
- **Pricing logic:**
  - Base prices scale with square footage (price per sqft bands)
  - Default example: Pre-drywall $350 + Pre-settlement $525 + 11-month $425 = $1,300
  - 15% bundle discount: −$195 → **Total $1,105**
  - Radon add-on: +$150; Sewer scope add-on: +$200
- Calculator state is client-side only (no API needed for MVP)

### 7. Social Proof / Testimonials
- Section label: "FROM NEW-BUILD BUYERS"
- Pull quote (large): "HomeKey caught $18K of framing defects before drywall. Builder fixed
  everything. No fight."
- 3-col card grid on desktop; 1-col stack on mobile:
  - M. Rodriguez, Ashburn: "They found a missing header on a load-bearing wall at pre-drywall.
    Builder tried to brush it off. The report forced the fix."
  - J. Chen, Brambleton: "Their 11-month inspection caught HVAC issues 3 days before my warranty
    expired. Saved me $4K."
  - L. Martínez, Haymarket: "Mi inspector hablaba español. El reporte fue bilingüe. Todo clarísimo."
    *(displayed in Spanish on both EN and ES versions)*

### 8. Community SEO Grid
- Section label: "NEW-BUILD COMMUNITIES WE SERVE"
- Headline: "Dedicated inspection teams for every major NoVA development."
- 4-col grid on desktop; 2-col on mobile
- Communities (each a link to a future community-specific page, `href="#"` for MVP):
  Brambleton, Ashburn, Leesburg, Dulles South, Haymarket, Gainesville, Bristow, Oak Hill

### 9. Final CTA Section
- Headline: "Know more. Own with confidence."
- Subtext: "Book your new-construction bundle in 60 seconds."
- CTA: "Reserve your bundle →" (filled, dark)
- Background: secondary surface

### 10. Footer
- Left: © HomeKey Inspections · The Key to Knowing More®
- Right: Sterling, VA · Leander, TX
- 0.5px top border

### 11. Mobile Sticky CTA
- Fixed bottom bar that appears after scrolling past the hero
- Contains: "Reserve your bundle →" full-width button
- Hidden on desktop

---

## Bilingual Requirements
- All copy is translated to Spanish for the `/new-construction/es` route
- The L. Martínez testimonial remains in Spanish on both routes
- Each route exports correct `metadata` with translated title/description and `hreflang` alternates
- `<html lang="en">` / `<html lang="es">` set per route via layout or generateMetadata

## Design Tokens
Defined in `app/globals.css` via Tailwind v4 `@theme`:
- `--color-homekey-green-dark: #085041`
- `--color-homekey-green-light: #E1F5EE`
- `--color-builder-red-dark: #791F1F`
- `--color-builder-red-light: #FCEBEB`
- `--color-stage-purple-dark: #26215C`
- `--color-stage-purple-light: #AFA9EC`

## shadcn/ui Components Needed
- `Button` — primary and outline variants
- `Card`, `CardContent`, `CardHeader` — comparison and testimonial cards
- `Badge` — section labels and hero badge
- `Separator` — trust bar dividers, pricing table dividers
- `Input` — square footage field
- `Select` — community dropdown
- `Checkbox` — add-on options
- `Sheet` — mobile nav drawer

## Out of Scope (MVP)
- Actual booking/payment flow (CTA links to `#` or external booking URL)
- Video embed for "Watch 90-sec overview"
- Real community sub-pages
- CMS or dynamic content
- Analytics integration
