# Implementation Plan: Brand & Theme Alignment

Track ID: `brand_theme_20260425`

---

## Phase 1: Font Replacement — Raleway + Lato

- [x] Task: Load Raleway and Lato via next/font/google
    - [x] In `app/layout.tsx`, import `Raleway` and `Lato` from `next/font/google`
    - [x] Configure `Raleway` with weights 300, 400, 500, 600, 700 and variable `--font-heading`
    - [x] Configure `Lato` with weights 300, 400, 700 and variable `--font-sans`
    - [x] Pass both `className` variables to `<html>` (replacing Geist variables)
    - [x] Remove all Geist font imports from `app/layout.tsx`

- [x] Task: Update globals.css font token mappings
    - [x] In `app/globals.css` `@theme inline`, update `--font-sans` and `--font-heading` references
    - [x] In `@layer base`, add heading font-family rule
    - [x] Remove `--font-mono` / Geist Mono references if unused

- [ ] Task: Write font smoke test
    - [ ] In `app/layout.test.tsx`, assert rendered `<html>` includes Raleway and Lato CSS variable class names

- [x] Task: Conductor - User Manual Verification 'Phase 1: Font Replacement' (Protocol in workflow.md)

---

## Phase 2: Color Token Update

- [x] Task: Update shadcn CSS variables in globals.css
    - [x] Set `--primary`, `--primary-foreground`, `--foreground`, `--muted-foreground`,
          `--secondary`, `--border` to HomeKey brand values in oklch format
    - [x] Preserve all existing HomeKey brand tokens unchanged

- [ ] Task: Write color token test
    - [ ] Assert primary button is present in PricingCalculator with correct variant

- [x] Task: Conductor - User Manual Verification 'Phase 2: Color Token Update' (Protocol in workflow.md)

---

## Phase 3: Logo, Favicon & NavBar Update

- [x] Task: Update NavBar to use image logo
    - [x] Update `nav.logo` in `content.ts` (remove emoji string)
    - [x] In `NavBar.tsx`, replace logo text with `<Image src="/Main-logo-Registered.jpg" height={40} width={160} alt="HomeKey Inspections" priority />`

- [x] Task: Add favicon and apple-touch-icon to root layout metadata
    - [x] In `app/layout.tsx` `metadata`, add `icons` with icon and apple entries

- [x] Task: Update NavBar tests
    - [x] Update `NavBar.test.tsx` to assert logo `<img>` with `alt="HomeKey Inspections"`

- [x] Task: Conductor - User Manual Verification 'Phase 3: Logo, Favicon & NavBar Update' (Protocol in workflow.md)

---

## Phase 4: Analytics & SEO Metadata

- [x] Task: Add Google Analytics to root layout
    - [x] Add `gtag.js` loader and init scripts via `next/script` with `strategy="afterInteractive"`

- [x] Task: Add Google Site Verification and update root metadata
    - [x] Set title, description, and `verification.google` in `app/layout.tsx` metadata

- [ ] Task: Write metadata test
    - [ ] Assert `/new-construction` metadata still returns correct title, description, hreflang

- [x] Task: Conductor - User Manual Verification 'Phase 4: Analytics & SEO Metadata' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [x] Task: Run full test suite and verify coverage ≥ 80%
- [x] Task: Production build check
- [x] Task: Lint check
- [x] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
