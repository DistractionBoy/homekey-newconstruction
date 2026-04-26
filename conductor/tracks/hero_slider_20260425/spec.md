# Spec: Hero Image Slider

Track ID: `hero_slider_20260425`

## Overview
Replace the broken placeholder image in the hero section's right column with a
working 3-image auto-rotating slider. The slider should visually communicate the
depth and stages of HomeKey's inspection process before the user reads a word.

## Functional Requirements

### Component
- File: `src/components/new-construction/HeroSlider.tsx`
- Uses shadcn `Carousel` with `embla-carousel-autoplay` plugin
- Autoplay: 5000ms interval, `stopOnInteraction: false`, `loop: true`
- 3 slides with captions pinned bottom-left
- Accepts image sources as props; defaults to Unsplash fallback URLs

### Slides
| # | Caption | Alt text |
|---|---------|----------|
| 1 | "Thermal imaging on every inspection — standard." | Independent inspector using thermal imaging camera during new home pre-drywall inspection |
| 2 | "Catch defects before drywall seals them in." | New residential construction framing stage in Northern Virginia |
| 3 | "Independent advocacy through closing day." | New homeowner receiving keys after independent inspection-backed closing |

### Ken Burns Effect
- Per-slide Framer Motion animation: scale `1.0 → 1.08` over 7s, slight `translateX` pan

### Pagination
- Dots at bottom (styled as small circles replacing default arrows)

### Responsive Layout
- Desktop: aspect ratio `4/3`; Mobile: `16/9`
- On desktop: right column of two-column hero layout
- On mobile: stacks below text

### Image Loading
- Slide 1: `next/image` with `priority` prop
- Slides 2–3: lazy-loaded
- Gradient overlay bottom-left for caption readability
- `placeholder="blur"` with `blurDataURL` on hero images

## Non-Functional Requirements
- No raw `<img>` tags — all images via `next/image`
- Dependencies: `embla-carousel-autoplay`, `framer-motion`
- shadcn Carousel must be added via CLI: `npx shadcn@latest add carousel`

## Acceptance Criteria
- [ ] Slider auto-rotates every 5 seconds
- [ ] Ken Burns motion visible per slide
- [ ] Pagination dots render and reflect active slide
- [ ] Slide 1 loads with priority; slides 2–3 are lazy
- [ ] Correct alt text on all 3 slides
- [ ] Two-column layout maintained on desktop; mobile stacks correctly
- [ ] No raw `<img>` tags

## Out of Scope
- CMS integration for slide content
- Video slides
- Touch/swipe gesture customization beyond embla defaults
