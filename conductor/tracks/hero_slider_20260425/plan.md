# Implementation Plan: Hero Image Slider

Track ID: `hero_slider_20260425`

---

## Phase 1: Dependencies & Configuration

- [x] Task: Install slider dependencies
    - [x] Run `npx shadcn@latest add carousel`
    - [x] Run `npm install embla-carousel-autoplay`
    - [x] Run `npm install framer-motion` (skip if already installed)

- [x] Task: Update next.config.js for remote images
    - [x] Add `images.formats: ['image/avif', 'image/webp']` if not present
    - [x] Add `remotePatterns` entry for `images.unsplash.com`

- [x] Task: Conductor - User Manual Verification 'Phase 1: Dependencies & Configuration' (Protocol in workflow.md)

---

## Phase 2: HeroSlider Component

- [x] Task: Write HeroSlider tests
    - [x] Create `components/new-construction/HeroSlider.test.tsx`
    - [x] Assert component renders without crashing
    - [x] Assert all 3 slide alt texts are present in the DOM
    - [x] Assert pagination dot container is rendered

- [x] Task: Create HeroSlider component
    - [x] Create `components/new-construction/HeroSlider.tsx`
    - [x] Define `SlideData` type with `src`, `alt`, `caption` fields
    - [x] Use local images from public/: inspection-next-level.jpg (slide 1), pre-drywall.avif (slide 2), framing.avif (slide 3)
    - [x] Accept `slides?: SlideData[]` prop so images are swappable
    - [x] Wire `embla-carousel-autoplay` plugin: 5000ms, `stopOnInteraction: false`, `loop: true`
    - [x] Wrap each slide image in a `relative overflow-hidden` container with `aspect-[4/3]` on desktop, `aspect-[16/9]` on mobile
    - [x] Render `next/image` with `fill`, `object-cover`; `loading="eager"` on slide 1; `loading="lazy"` on slides 2–3 (note: `priority` deprecated in Next.js 16)
    - [x] Apply Ken Burns Framer Motion animation per slide: scale `1.0 → 1.08`, slight `translateX` pan over 7s
    - [x] Add bottom-left gradient overlay (`bg-gradient-to-t from-black/50 to-transparent`)
    - [x] Pin caption text bottom-left using absolute positioning, white text
    - [x] Replace `CarouselNext`/`CarouselPrevious` with pagination dot row (map over slide indices, fill active dot)

- [x] Task: Conductor - User Manual Verification 'Phase 2: HeroSlider Component' (Protocol in workflow.md)

---

## Phase 3: Hero Section Integration

- [x] Task: Wire HeroSlider into hero section
    - [x] Locate hero section in `components/sections/HeroSection.tsx`
    - [x] Replace broken placeholder image with `<HeroSlider />`
    - [x] Confirm desktop: two-column layout intact (text left, slider right)
    - [x] Confirm mobile: slider stacks below text

- [x] Task: Conductor - User Manual Verification 'Phase 3: Hero Section Integration' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [x] Task: Run full test suite and verify coverage ≥ 80%
- [x] Task: Production build check (`npm run build`)
- [x] Task: Lint check (`npm run lint`)
- [x] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
