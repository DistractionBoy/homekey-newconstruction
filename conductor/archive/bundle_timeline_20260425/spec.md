# Spec: Bundle Timeline Visual

Track ID: `bundle_timeline_20260425`

## Overview
Transform the current three flat numbered cards into a visual timeline that conveys
the journey through a new-build purchase. Readers should feel the progression of
time and protection across the three inspection stages before reading the details.

## Functional Requirements

### Component
- File: `src/components/new-construction/BundleTimeline.tsx`

### Layout
- Horizontal on desktop (`lg` breakpoint), vertical on mobile
- A `2px`-tall gradient bar (`from-brand-primary to-orange-600`) running the full width as the timeline line
- Three evenly-spaced nodes: `40px` circles on desktop, `32px` on mobile
- Node fill: `brand-primary` orange (`#f97316`), showing the stage number
- Above each node: timing label
- Below each node: illustrative icon, stage title, description card

### Three Stages
| Stage | Timing label | Icon | Title | Card tint |
|-------|-------------|------|-------|-----------|
| 1 | Week 8–12 of build | `Hammer` | Pre-Drywall Inspection | `purple-50` |
| 2 | Days before closing | `KeyRound` | Pre-Settlement Inspection | `blue-50` |
| 3 | 11 months in | `ShieldCheck` | 11-Month Warranty Inspection | `green-50` |

### Card Details
- Background tint per stage (see table above)
- Hover: `translateY(-4px)` + `shadow-lg`, smooth `200ms` transition
- Bottom-left of each card: `"Learn more →"` link in card's accent color
- Mobile: subtle dotted-line decoration between cards

### Stat Strip (below timeline)
- Text: "3 inspections", "1 inspector", "100% advocacy"
- Animates on scroll-into-view (handled by Brand Colors & Animations track via `AnimatedNumber`)

### Section Background (CSS-only dot pattern)
```css
background-image: radial-gradient(circle, rgb(168 162 236 / 0.15) 1px, transparent 1px);
background-size: 24px 24px;
```

## Non-Functional Requirements
- Icons via `lucide-react`
- Hover animation via Tailwind `transition` utilities (Framer Motion entrance animations added by Brand Colors & Animations track)

## Acceptance Criteria
- [ ] Three stage cards render with correct titles, icons, timing labels, and tints
- [ ] Horizontal layout on desktop, vertical on mobile
- [ ] Gradient timeline bar connects nodes on desktop
- [ ] Stage number nodes (`40px` desktop / `32px` mobile) render at orange `#f97316`
- [ ] Each card lifts on hover
- [ ] "Learn more →" link present on each card
- [ ] Stat strip renders below the timeline
- [ ] Dot-pattern background applied to section

## Out of Scope
- `AnimatedNumber` on stat strip (covered in Brand Colors & Animations track)
- `FadeUpSection` wrapper (covered in Brand Colors & Animations track)
- SVG illustrations inside cards (covered in Visual Assets track)
