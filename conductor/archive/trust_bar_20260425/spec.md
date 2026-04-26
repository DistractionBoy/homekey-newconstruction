# Spec: Trust Bar Refinement

Track ID: `trust_bar_20260425`

## Overview
Replace the current pipe-separated plain-text trust bar with a styled horizontal
row of badge components — each with a Lucide icon, bold label, and secondary text —
plus a brand logo strip below it. The trust bar must communicate credentials at a
glance without reading like a footer.

## Functional Requirements

### Component
- File: `src/components/new-construction/TrustBar.tsx`
- Horizontal flex row of 5 badge components, evenly distributed
- Each badge: Lucide icon (16–20px) left, bold label, smaller secondary text, subtle background accent

### Five Badges
| # | Icon | Label | Sub-text |
|---|------|-------|----------|
| 1 | `Star` (fill `yellow-400`) | 4.9/5 | 500+ reviews |
| 2 | `ShieldCheck` (blue accent) | ASHI ACI | Certified |
| 3 | `Award` (green accent) | ISO/IEC 17025 | Accredited lab |
| 4 | `MapPin` (purple accent) | NoVA + DMV | Loudoun · Fairfax · Prince William |
| 5 | `BadgeCheck` (amber accent) | A+ BBB | Accredited business |

### Styling
- Background: `bg-gradient-to-r from-slate-50 via-white to-slate-50`
- Border: top and bottom `border-slate-200/60`
- Padding: `py-4 md:py-6`
- Mobile: 2-column grid wrapping, or horizontal scroll with snap

### Brand Logo Strip (below badges)
- Directory: `public/logos/`
- Placeholder `<img>` references for: `ashi.svg`, `internachi.svg`, `nrs.svg`, `bbb.svg`, `homegauge.svg`, `ahit.svg`
- Style: height `28–32px`, grayscale at `40%` opacity, hover transitions to full color
- Comment noting Jason will drop in actual SVG files

## Non-Functional Requirements
- Icons via `lucide-react`
- No raw `<img>` tags for hero/section images; logo strip uses `<img>` with explicit dimensions as placeholders only

## Acceptance Criteria
- [ ] Five badge components render with correct icons, labels, and sub-text
- [ ] Each badge has its own accent color
- [ ] Background gradient and borders applied
- [ ] 2-column mobile layout works without overflow
- [ ] Logo strip renders with grayscale + hover-to-color transition
- [ ] `public/logos/` directory created with placeholder SVG filenames documented in comments

## Out of Scope
- Actual logo SVG files (Jason supplies these)
- Animated badge entrance effects (covered in Brand Colors & Animations track)
