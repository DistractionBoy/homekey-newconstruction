# Implementation Plan: Hero Image Slider

Track ID: `hero_slider_20260425`

---

## Phase 1: Dependencies & Configuration

- [ ] Task: Install slider dependencies
    - [ ] Run `npx shadcn@latest add carousel`
    - [ ] Run `npm install embla-carousel-autoplay`
    - [ ] Run `npm install framer-motion` (skip if already installed)

- [ ] Task: Update next.config.js for remote images
    - [ ] Add `images.formats: ['image/avif', 'image/webp']` if not present
    - [ ] Add `remotePatterns` entry for `images.unsplash.com`

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Dependencies & Configuration' (Protocol in workflow.md)

---

## Phase 2: HeroSlider Component

- [ ] Task: Write HeroSlider tests
    - [ ] Create `src/components/new-construction/HeroSlider.test.tsx`
    - [ ] Assert component renders without crashing
    - [ ] Assert all 3 slide alt texts are present in the DOM
    - [ ] Assert pagination dot container is rendered

- [ ] Task: Create HeroSlider component
    - [ ] Create `src/components/new-construction/HeroSlider.tsx`
    - [ ] Define `SlideData` type with `src`, `alt`, `caption` fields
    - [ ] Define default 3-slide array with Unsplash fallback URLs and alt text from spec
    - [ ] Accept `slides?: SlideData[]` prop so images are swappable
    - [ ] Wire `embla-carousel-autoplay` plugin: 5000ms, `stopOnInteraction: false`, `loop: true`
    - [ ] Wrap each slide image in a `relative overflow-hidden` container with `aspect-[4/3]` on desktop, `aspect-[16/9]` on mobile
    - [ ] Render `next/image` with `fill`, `object-cover`; `priority` on slide 1; `lazy` on slides 2–3
    - [ ] Apply Ken Burns Framer Motion animation per slide: scale `1.0 → 1.08`, slight `translateX` pan over 7s
    - [ ] Add bottom-left gradient overlay (`bg-gradient-to-t from-black/50 to-transparent`)
    - [ ] Pin caption text bottom-left using absolute positioning, white text
    - [ ] Replace `CarouselNext`/`CarouselPrevious` with pagination dot row (map over slide indices, fill active dot)

- [ ] Task: Conductor - User Manual Verification 'Phase 2: HeroSlider Component' (Protocol in workflow.md)

---

## Phase 3: Hero Section Integration

- [ ] Task: Wire HeroSlider into hero section
    - [ ] Locate hero section in `src/app/new-construction/page.tsx` (or relevant component file)
    - [ ] Replace broken placeholder image with `<HeroSlider />`
    - [ ] Confirm desktop: two-column layout intact (text left, slider right)
    - [ ] Confirm mobile: slider stacks below text

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Hero Section Integration' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [ ] Task: Run full test suite and verify coverage ≥ 80%
- [ ] Task: Production build check (`npm run build`)
- [ ] Task: Lint check (`npm run lint`)
- [ ] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
