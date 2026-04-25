# Implementation Plan: HomeKey New Construction Landing Page MVP

Track ID: `newconstruction_landing_20260425`

---

## Phase 1: Project Foundation & shadcn/ui Setup

- [ ] Task: Install and configure Vitest
    - [ ] Install vitest, @vitejs/plugin-react, @testing-library/react, @testing-library/jest-dom, jsdom as dev dependencies
    - [ ] Create `vitest.config.ts` with jsdom environment and React plugin
    - [ ] Add `test` and `coverage` scripts to `package.json`
    - [ ] Create `vitest.setup.ts` importing @testing-library/jest-dom

- [ ] Task: Install and initialize shadcn/ui
    - [ ] Run `npx shadcn@latest init` to scaffold shadcn config and `components/ui/`
    - [ ] Add required components: Button, Card, CardContent, CardHeader, Badge, Separator, Input, Select, Checkbox, Sheet

- [ ] Task: Configure design tokens and theme
    - [ ] Define HomeKey brand CSS variables in `app/globals.css` via Tailwind v4 `@theme`:
      `--color-homekey-green-dark`, `--color-homekey-green-light`, `--color-builder-red-dark`,
      `--color-builder-red-light`, `--color-stage-purple-dark`, `--color-stage-purple-light`
    - [ ] Update shadcn CSS variable overrides to match homekeyinspections.com color palette
      (inspect live site for primary, background, border, and foreground tokens)
    - [ ] Verify Geist Sans is correctly loaded and set as default font in layout

- [ ] Task: Set up route structure
    - [ ] Create `app/new-construction/page.tsx` (English route, Server Component)
    - [ ] Create `app/new-construction/es/page.tsx` (Spanish route, Server Component)
    - [ ] Create `app/new-construction/layout.tsx` with shared metadata shell
    - [ ] Export correct `generateMetadata` from each page with translated title, description,
      canonical, and hreflang alternates

- [ ] Task: Create shared content data file
    - [ ] Create `app/new-construction/_data/content.ts` exporting typed `en` and `es` content
      objects for all section copy (headlines, body text, CTA labels, testimonials, communities)

- [ ] Task: Write tests for pricing calculator utility
    - [ ] Create `lib/pricing.ts` with `calculateBundlePrice({ sqft, addOns })` pure function
    - [ ] Write `lib/pricing.test.ts` covering: default inputs, sqft bands, radon add-on, sewer
      scope add-on, combined add-ons, bundle discount calculation

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Project Foundation & shadcn/ui Setup' (Protocol in workflow.md)

---

## Phase 2: Navigation, Footer & Trust Bar

- [ ] Task: Build NavBar component
    - [ ] Create `components/NavBar.tsx` accepting `lang` prop
    - [ ] Desktop: logo, nav links (New Construction marked active), EN|ES toggle, Book inspection button
    - [ ] Mobile: logo, EN|ES toggle, hamburger trigger opening a Sheet drawer with nav links
    - [ ] EN|ES toggle navigates between `/new-construction` and `/new-construction/es`
    - [ ] Write `components/NavBar.test.tsx`: renders correct active link, renders language toggle,
      mobile drawer opens on hamburger click

- [ ] Task: Build Footer component
    - [ ] Create `components/Footer.tsx` accepting `lang` prop
    - [ ] EN: "© HomeKey Inspections · The Key to Knowing More® · Sterling, VA · Leander, TX"
    - [ ] ES: translated equivalent

- [ ] Task: Build TrustBar component
    - [ ] Create `components/TrustBar.tsx` accepting `lang` prop
    - [ ] Full-width strip: rating · certifications · service area · BBB
    - [ ] Separator-divided items; secondary background; 0.5px borders

- [ ] Task: Compose shared page shell
    - [ ] Update `app/new-construction/layout.tsx` to render `<NavBar>` and `<Footer>` around `{children}`

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Navigation, Footer & Trust Bar' (Protocol in workflow.md)

---

## Phase 3: Hero & Problem Sections

- [ ] Task: Build HeroSection component
    - [ ] Create `components/sections/HeroSection.tsx` accepting `lang` prop
    - [ ] "For new-build buyers" Badge (green)
    - [ ] Headline + subheadline from content data
    - [ ] Primary CTA ("Get bundle pricing →") scrolls to `#pricing`; secondary CTA ("Watch 90-sec overview") outlined
    - [ ] Hero image via `next/image` (placeholder src, `priority`, 4:3 aspect ratio)
    - [ ] Trust pills row
    - [ ] Desktop: 2-col grid; Mobile: stacked
    - [ ] Write `components/sections/HeroSection.test.tsx`: renders headline, renders both CTAs,
      renders trust pills

- [ ] Task: Build ProblemSection component
    - [ ] Create `components/sections/ProblemSection.tsx` accepting `lang` prop
    - [ ] Section label + headline
    - [ ] 2-col comparison cards (red builder card, green HomeKey card)
    - [ ] Bullet list content from content data
    - [ ] Desktop: 2-col; Mobile: stacked
    - [ ] Write `components/sections/ProblemSection.test.tsx`: both cards render, correct heading text

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Hero & Problem Sections' (Protocol in workflow.md)

---

## Phase 4: Bundle Journey & Pricing Calculator

- [ ] Task: Build BundleSection component
    - [ ] Create `components/sections/BundleSection.tsx` accepting `lang` prop
    - [ ] Section label + headline
    - [ ] 3-col card grid on desktop; vertical stack on mobile
    - [ ] Each card: purple stage badge (1/2/3), stage name, timing label, description
    - [ ] Write `components/sections/BundleSection.test.tsx`: all 3 stage cards render, stage
      numbers present

- [ ] Task: Build PricingCalculator component (client component)
    - [ ] Create `components/sections/PricingCalculator.tsx` with `"use client"`
    - [ ] Left panel: sqft Input (number), community Select, radon/sewer Checkbox add-ons
    - [ ] Right panel: live itemized breakdown using `calculateBundlePrice` from `lib/pricing.ts`
    - [ ] Bundle discount line (green), total line (larger weight)
    - [ ] "Reserve this bundle →" Button (full width, primary)
    - [ ] `id="pricing"` on the section wrapper for hero CTA scroll target
    - [ ] Write `components/sections/PricingCalculator.test.tsx`: default prices render, changing
      sqft updates total, adding radon updates total, bundle discount always applied

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Bundle Journey & Pricing Calculator' (Protocol in workflow.md)

---

## Phase 5: Social Proof, Communities, CTAs & Mobile Sticky Bar

- [ ] Task: Build TestimonialsSection component
    - [ ] Create `components/sections/TestimonialsSection.tsx` accepting `lang` prop
    - [ ] Pull quote (large, featured above cards)
    - [ ] 3-col card grid on desktop; 1-col stack on mobile
    - [ ] L. Martínez testimonial always rendered in Spanish on both routes
    - [ ] Write `components/sections/TestimonialsSection.test.tsx`: all 3 testimonials render,
      Spanish testimonial present on EN route

- [ ] Task: Build CommunityGrid component
    - [ ] Create `components/sections/CommunityGrid.tsx` accepting `lang` prop
    - [ ] Section label + headline
    - [ ] 4-col grid desktop / 2-col mobile; each community is a link (`href="#"` for MVP)
    - [ ] Communities: Brambleton, Ashburn, Leesburg, Dulles South, Haymarket, Gainesville,
      Bristow, Oak Hill

- [ ] Task: Build FinalCTA component
    - [ ] Create `components/sections/FinalCTA.tsx` accepting `lang` prop
    - [ ] Headline + subtext + "Reserve your bundle →" Button (filled)
    - [ ] Secondary background

- [ ] Task: Build MobileStickyCTA component (client component)
    - [ ] Create `components/MobileStickyCTA.tsx` with `"use client"`
    - [ ] Fixed bottom bar; hidden on `md:` and above via Tailwind
    - [ ] Appears after scrolling past hero (useEffect + scroll listener)
    - [ ] Full-width "Reserve your bundle →" Button

- [ ] Task: Compose full page in both routes
    - [ ] Wire all sections into `app/new-construction/page.tsx` with `lang="en"`
    - [ ] Wire all sections into `app/new-construction/es/page.tsx` with `lang="es"`
    - [ ] Include `<MobileStickyCTA>` at page level

- [ ] Task: Conductor - User Manual Verification 'Phase 5: Social Proof, Communities, CTAs & Mobile Sticky Bar' (Protocol in workflow.md)

---

## Phase 6: Spanish Route, SEO & Metadata

- [ ] Task: Complete Spanish translations in content data
    - [ ] Translate all English copy in `app/new-construction/_data/content.ts` to Spanish
    - [ ] Preserve L. Martínez testimonial in Spanish on both routes
    - [ ] Validate tone matches warm/empathetic voice from product guidelines

- [ ] Task: Implement hreflang and per-route metadata
    - [ ] `app/new-construction/page.tsx`: `generateMetadata` exports EN title/description,
      `canonical: /new-construction`, `hreflang` alternates for EN and ES
    - [ ] `app/new-construction/es/page.tsx`: same pattern with ES translations
    - [ ] Verify `<html lang>` is set correctly per route (via layout or generateMetadata)

- [ ] Task: Write metadata tests
    - [ ] Write tests asserting `generateMetadata` returns correct title and hreflang for each route

- [ ] Task: Conductor - User Manual Verification 'Phase 6: Spanish Route, SEO & Metadata' (Protocol in workflow.md)

---

## Phase 7: Polish, Accessibility & QA

- [ ] Task: Accessibility pass
    - [ ] All `next/image` usage has descriptive `alt` text in both EN and ES
    - [ ] All interactive elements reachable and usable via keyboard
    - [ ] Sufficient color contrast on all text/background combinations (especially red and green cards)
    - [ ] ARIA labels on icon-only buttons (hamburger, language toggle)

- [ ] Task: Responsive QA
    - [ ] Test all sections at mobile (375px), tablet (768px), and desktop (1280px)
    - [ ] Verify mobile sticky CTA appears/disappears correctly
    - [ ] Verify nav drawer opens and closes on mobile

- [ ] Task: Final coverage check
    - [ ] Run `npx vitest run --coverage`
    - [ ] Ensure ≥80% coverage across `lib/` and `components/`
    - [ ] Fix any gaps

- [ ] Task: Final lint and build check
    - [ ] `npm run lint` — zero errors
    - [ ] `npm run build` — clean production build

- [ ] Task: Conductor - User Manual Verification 'Phase 7: Polish, Accessibility & QA' (Protocol in workflow.md)
