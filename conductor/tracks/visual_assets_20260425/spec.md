# Spec: Visual Assets & Image Optimization

Track ID: `visual_assets_20260425`

## Overview
Fill the remaining empty spaces across the page with illustrations, inline SVGs, and
avatar components, and enforce `next/image` compliance across all image rendering.
No raw `<img>` tags should exist anywhere except logo strip placeholders (already
documented in TrustBar track).

## Functional Requirements

### Asset Locations & Sources

| Location | What to add | Asset type | Path |
|----------|-------------|------------|------|
| Bundle timeline cards | 3 small SVG illustrations (one per stage) | Illustration | `public/illustrations/stage-1.svg`, `stage-2.svg`, `stage-3.svg` |
| Pricing calculator card | Clipboard + magnifying glass graphic | Illustration | Top of calculator card; can use inline Lucide icons as placeholder |
| Social proof / testimonials | Avatar circles with initials on colored backgrounds | Inline component | No image files — render `<div>` with initials and color |
| Communities grid | Small SVG map silhouette of NoVA with dots | SVG illustration | Inline SVG or `public/illustrations/nova-map.svg` |

### Avatar Component
- Create `src/components/ui/ReviewerAvatar.tsx`
- Props: `name: string`, `color?: string`
- Renders a circle `div` with initials (first + last initial) on a colored background
- Color defaults from a deterministic palette (hash of name → one of 5 colors)

### SVG Illustrations
- `public/illustrations/stage-1.svg` — framing/hammer theme (from unDraw or Storyset)
- `public/illustrations/stage-2.svg` — home keys / settlement theme
- `public/illustrations/stage-3.svg` — shield / warranty theme
- If sourced from unDraw: download as SVG, set `currentColor` to the card's accent color
- Add attribution comment inside each SVG file if required by source license

### Pricing Calculator Graphic
- Use Lucide `ClipboardList` and `Search` icons composed inline at the top of the calculator card
- Size: `48px`, `text-brand-primary`

### NoVA Map
- Simple inline SVG or sourced from public domain — outline of Northern Virginia counties
- Dots for major communities: Brambleton, Ashburn, Leesburg, Dulles South, Haymarket, Gainesville, Bristow, Oak Hill
- Render as `public/illustrations/nova-map.svg` or inline SVG in the communities section

### Image Optimization Audit
- Audit all image usage across `src/` — find any raw `<img>` tags
- Convert any found to `next/image` with explicit `width`, `height` (or `fill` + positioned parent)
- Add `sizes` prop to all `next/image` instances (e.g., `"(max-width: 768px) 100vw, 50vw"`)
- Add `priority` only to first hero slider image (all others lazy)
- Add `placeholder="blur"` + `blurDataURL` to hero images

### next.config.js Image Settings
Ensure the following are set (may already be done by Hero Slider track):
```js
images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' }
  ]
}
```

## Non-Functional Requirements
- All illustrations must be attributable if sourced from Storyset
- Compress all raster images to ≤ 200KB before adding to `public/`
- `ReviewerAvatar` must work without any image files

## Acceptance Criteria
- [ ] 3 SVG illustrations exist at `public/illustrations/stage-*.svg`
- [ ] Bundle timeline cards each display their stage illustration
- [ ] Pricing calculator card has clipboard/magnifying glass icon graphic
- [ ] `ReviewerAvatar` renders initials in a colored circle for each testimonial
- [ ] NoVA map SVG renders in communities section
- [ ] Zero raw `<img>` tags anywhere in `src/` (excluding logo strip placeholders)
- [ ] All `next/image` instances have `width`/`height` or `fill`, correct `sizes`, and `alt`
- [ ] `next.config.js` has `avif`/`webp` formats and Unsplash remote pattern

## Out of Scope
- Animated illustrations
- Actual logo SVG files (handled by Jason, documented in TrustBar track)
- CMS-driven imagery
