# Implementation Plan: Homepage (/)

Track ID: `homepage_20260502`

---

## Phase 1: Page Shell + Hero

- [x] Task: Decouple `app/page.tsx` from `/new-construction`
    - [x] Current `app/page.tsx` re-exports the new-construction page — replace it entirely
    - [x] `/new-construction` route stays untouched; only `app/page.tsx` changes
    - [x] New `app/page.tsx` is a standalone homepage (not a re-export)

- [x] Task: Create standalone `app/page.tsx` with metadata
    - [x] Set up page metadata (title, description, OG tags) — independent of new-construction metadata
    - [x] Add hero section with full-bleed image overlay, h1, lead copy, two CTA buttons
    - [x] Wire "Schedule an inspection →" to /schedule
    - [x] Wire "See what makes us different" to scroll anchor #difference

- [x] Task: Create `app/_data/homepage.ts` content layer
    - [x] HomepageNav, homepageTrustBar, SERVICE_CARDS, DIFFERENTIATORS
    - [x] SEED_REVIEWS, BLOG_POSTS, FEATURED_INSPECTOR typed data

- [x] Task: Write hero smoke test
    - [x] Assert h1 text renders
    - [x] Assert primary CTA links to /schedule
    - [x] Assert secondary CTA links to #difference

- [x] Task: Conductor - User Manual Verification 'Phase 1: Page Shell + Hero' (Protocol in workflow.md)

---

## Phase 2: Service Cards + Trust Badges

- [x] Task: Build `ServiceCard` component (`components/homepage/ServiceCard.tsx`)
    - [x] Props: icon (ReactNode), title, description, href, badge (optional)
    - [x] Renders badge pill if provided
    - [x] Links to service page

- [x] Task: Build `ServiceCardsSection` component
    - [x] Maps SERVICE_CARDS data to ServiceCard instances
    - [x] 3×2 desktop / 1-col mobile grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-3)

- [x] Task: Reuse `TrustBar` component with homepage-specific string array

- [x] Task: Write ServiceCard unit tests
    - [x] Badge renders when prop provided
    - [x] Badge absent when not provided
    - [x] Link href is correct
    - [x] Title and description render

- [x] Task: Conductor - User Manual Verification 'Phase 2: Service Cards + Trust Badges' (Protocol in workflow.md)

---

## Phase 3: "The Difference" + Inspector Spotlight

- [x] Task: Build `DifferenceSection` component
    - [x] id="difference" for scroll anchor from hero CTA
    - [x] Training / Tools / Time columns with correct copy
    - [x] Responsive: 3 col desktop → 1 col mobile

- [x] Task: Build `InspectorSpotlight` component
    - [x] Static data: Ian McNaught as featured inspector
    - [x] ReviewerAvatar, name, title, certifications, bio snippet
    - [x] "View full profile" → /inspectors/[slug]
    - [x] "Book with Ian" → /schedule?inspector=[slug]
    - [x] "Meet the full team →" link to /inspectors

- [x] Task: Update `ReviewerAvatar` to accept optional `className` prop (backward-compatible)

- [x] Task: Conductor - User Manual Verification 'Phase 3: Difference + Spotlight' (Protocol in workflow.md)

---

## Phase 4: Coverage Map + Reviews Carousel

- [x] Task: Build `CoverageMap` component
    - [x] Northern Virginia: 6 county links using existing nova-map.svg
    - [x] Maryland/DC: 2 area links
    - [x] Texas: descriptive card (Austin metro)
    - [x] All county links point to /areas/[slug]

- [x] Task: Build `ReviewsCarousel` component (client)
    - [x] 6 seed reviews from SEED_REVIEWS data
    - [x] shadcn Carousel with embla-carousel-autoplay (8s delay, stopOnInteraction)
    - [x] CarouselItem basis-1/3 on desktop shows 3 cards at a time
    - [x] Reviewer photo (Image) when avatar path provided, ReviewerAvatar fallback
    - [x] Text truncated at 200 chars with "Read more" indicator
    - [x] Source platform badge (Google / Yelp / Angi)
    - [x] aria-live region for accessibility

- [x] Task: Write ReviewsCarousel tests
    - [x] All 6 reviewer names render
    - [x] "Read more" appears for reviews > 200 chars
    - [x] Source badges render

- [x] Task: Update `NavBar` to support optional `ctaHref` field (backward-compatible)

- [x] Task: Conductor - User Manual Verification 'Phase 4: Map + Reviews' (Protocol in workflow.md)

---

## Phase 5: Blog Teaser + Final CTA + Integration

- [x] Task: Build `BlogTeaser` component
    - [x] 3 static placeholder posts from BLOG_POSTS data
    - [x] Links to /blog/[slug] (acceptable 404 until Track 9 builds blog)
    - [x] Formatted date display, read time, "All posts →" link

- [x] Task: Build `HomepageFinalCTA` component
    - [x] Dark background section, "Ready to schedule?" heading
    - [x] Primary CTA → /schedule
    - [x] Phone button → tel:+15712813846

- [x] Task: Wire all sections in `app/page.tsx`
    - [x] NavBar → Hero → TrustBar → ServiceCards → DifferenceSection →
          InspectorSpotlight → CoverageMap → ReviewsCarousel → BlogTeaser → FinalCTA → Footer
    - [x] FadeUpSection wraps all scroll-animated sections
    - [x] Scroll anchor #difference wired from hero CTA

- [x] Task: Conductor - User Manual Verification 'Phase 5: Blog Teaser + Final CTA' (Protocol in workflow.md)

---

## Phase 6: QA & Final Checks

- [x] Task: Run full test suite — `npx vitest run` — all homepage component tests pass (10/10)
- [x] Task: Production build check — `npm run build` — passes cleanly, 0 TypeScript errors
- [x] Task: Lint check — `npm run lint` — 0 errors (2 pre-existing warnings in unrelated file)
- [x] Task: Note: 2 pre-existing test failures exist in TestimonialsSection and new-construction TrustBar tests; not caused by this track
- [ ] Task: Conductor - User Manual Verification 'Phase 6: QA & Final Checks' (Protocol in workflow.md)
