# Implementation Plan: HomeKey New Construction Landing Page MVP

Track ID: `newconstruction_landing_20260425`

---

## Phase 1: Project Foundation & shadcn/ui Setup

- [x] Task: Install and configure Vitest
    - [x] Install vitest, @vitejs/plugin-react, @testing-library/react, @testing-library/jest-dom, jsdom as dev dependencies
    - [x] Create `vitest.config.ts` with jsdom environment and React plugin
    - [x] Add `test` and `coverage` scripts to `package.json`
    - [x] Create `vitest.setup.ts` importing @testing-library/jest-dom

- [x] Task: Install and initialize shadcn/ui
    - [x] Run `npx shadcn@latest init` to scaffold shadcn config and `components/ui/`
    - [x] Add required components: Button, Card, Badge, Separator, Input, Select, Checkbox, Sheet

- [x] Task: Configure design tokens and theme
    - [x] Define HomeKey brand CSS variables in `app/globals.css` via Tailwind v4 `@theme`
    - [x] shadcn CSS variables initialized with default clean theme

- [x] Task: Set up route structure
    - [x] Create `app/new-construction/page.tsx` (English route, Server Component)
    - [x] Create `app/new-construction/es/page.tsx` (Spanish route, Server Component)
    - [x] Create `app/new-construction/layout.tsx`
    - [x] Export `metadata` with title, description, canonical, and hreflang alternates

- [x] Task: Create shared content data file
    - [x] Create `app/new-construction/_data/content.ts` with typed `en` and `es` content objects

- [x] Task: Write tests for pricing calculator utility
    - [x] Create `lib/pricing.ts` with `calculateBundlePrice({ sqft, addOns })` pure function
    - [x] Write `lib/pricing.test.ts` — 8 tests passing

- [x] Task: Conductor - User Manual Verification 'Phase 1: Project Foundation & shadcn/ui Setup' (Protocol in workflow.md)

---

## Phase 2: Navigation, Footer & Trust Bar

- [x] Task: Build NavBar component
    - [x] Create `components/NavBar.tsx` accepting `nav` prop
    - [x] Desktop: logo, nav links, language toggle, Book inspection button
    - [x] Mobile: hamburger trigger opening Sheet drawer
    - [x] Write `components/NavBar.test.tsx` — 5 tests passing

- [x] Task: Build Footer component
    - [x] Create `components/Footer.tsx`

- [x] Task: Build TrustBar component
    - [x] Create `components/TrustBar.tsx`

- [x] Task: Compose shared page shell
    - [x] NavBar and Footer wired into both route pages

- [x] Task: Conductor - User Manual Verification 'Phase 2: Navigation, Footer & Trust Bar' (Protocol in workflow.md)

---

## Phase 3: Hero & Problem Sections

- [x] Task: Build HeroSection component
    - [x] Create `components/sections/HeroSection.tsx`
    - [x] Badge, headline, subheadline, dual CTAs, trust pills, hero image
    - [x] Write `components/sections/HeroSection.test.tsx` — 4 tests passing

- [x] Task: Build ProblemSection component
    - [x] Create `components/sections/ProblemSection.tsx`
    - [x] Builder vs HomeKey comparison cards
    - [x] Write `components/sections/ProblemSection.test.tsx` — 3 tests passing

- [x] Task: Conductor - User Manual Verification 'Phase 3: Hero & Problem Sections' (Protocol in workflow.md)

---

## Phase 4: Bundle Journey & Pricing Calculator

- [x] Task: Build BundleSection component
    - [x] Create `components/sections/BundleSection.tsx`
    - [x] 3-stage cards with purple badges
    - [x] Write `components/sections/BundleSection.test.tsx` — 3 tests passing

- [x] Task: Build PricingCalculator component (client component)
    - [x] Create `components/sections/PricingCalculator.tsx` with `"use client"`
    - [x] sqft input, add-on checkboxes, live itemized estimate, reserve CTA
    - [x] Write `components/sections/PricingCalculator.test.tsx` — 5 tests passing

- [x] Task: Conductor - User Manual Verification 'Phase 4: Bundle Journey & Pricing Calculator' (Protocol in workflow.md)

---

## Phase 5: Social Proof, Communities, CTAs & Mobile Sticky Bar

- [x] Task: Build TestimonialsSection component
    - [x] Create `components/sections/TestimonialsSection.tsx`
    - [x] Pull quote + 3 testimonial cards; Spanish testimonial on both routes
    - [x] Write `components/sections/TestimonialsSection.test.tsx` — 3 tests passing

- [x] Task: Build CommunityGrid component
    - [x] Create `components/sections/CommunityGrid.tsx`

- [x] Task: Build FinalCTA component
    - [x] Create `components/sections/FinalCTA.tsx`

- [x] Task: Build MobileStickyCTA component (client component)
    - [x] Create `components/MobileStickyCTA.tsx` with scroll-triggered visibility

- [x] Task: Compose full page in both routes
    - [x] `app/new-construction/page.tsx` — English, all sections wired
    - [x] `app/new-construction/es/page.tsx` — Spanish, all sections wired

- [x] Task: Conductor - User Manual Verification 'Phase 5: Social Proof, Communities, CTAs & Mobile Sticky Bar' (Protocol in workflow.md)

---

## Phase 6: Spanish Route, SEO & Metadata

- [x] Task: Complete Spanish translations in content data
    - [x] Full `es` object in `content.ts`; L. Martínez testimonial in Spanish on both routes

- [x] Task: Implement hreflang and per-route metadata
    - [x] EN page exports `metadata` with canonical + hreflang alternates
    - [x] ES page exports `metadata` with translated title/description + hreflang alternates

- [ ] Task: Write metadata tests

- [x] Task: Conductor - User Manual Verification 'Phase 6: Spanish Route, SEO & Metadata' (Protocol in workflow.md)

---

## Phase 7: Polish, Accessibility & QA

- [ ] Task: Accessibility pass
- [ ] Task: Responsive QA
- [ ] Task: Final coverage check
- [ ] Task: Final lint and build check
- [ ] Task: Conductor - User Manual Verification 'Phase 7: Polish, Accessibility & QA' (Protocol in workflow.md)
