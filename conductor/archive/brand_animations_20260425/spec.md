# Spec: Brand Colors, Animations & Background Textures

Track ID: `brand_animations_20260425`

## Overview
Apply brand color tokens across strategic accent points, wire Framer Motion
micro-animations to stat numbers and all page sections, and add CSS-only background
textures to key sections. This track is a cross-cutting concern — it depends on the
Hero Slider, Trust Bar, Bundle Timeline, and Problem Section tracks being merged first.

## Functional Requirements

### Tailwind Brand Color Tokens
Add to `tailwind.config.ts` under `theme.extend.colors`:
```ts
brand: {
  primary: '#f97316',
  primaryDark: '#ea580c',
  ink: '#0f172a',
  paper: '#fafaf9',
  trust: '#1e40af',
  growth: '#059669',
  alert: '#dc2626',
  warmth: '#fef3c7',
}
```

### Color Accent Application
- Hero CTA buttons: change to `bg-brand-primary` with subtle shadow
- Section eyebrow labels: first per section → `text-brand-primary`; alternate deep blue / emerald for rhythm
- Timeline numbered circles: `brand-primary` orange (if not already set by Bundle Timeline track)
- Pricing bundle total: `text-brand-primary`; savings line `text-emerald-600`
- Community ZIP chips: `bg-blue-50 text-blue-900 hover:bg-brand-primary hover:text-white`

### Animated Utilities

**`src/components/ui/AnimatedNumber.tsx`**
- Uses `useInView` (react-intersection-observer) + Framer Motion `useMotionValue` / `useTransform`
- Counts from `0` to target number over `1.5s` when scrolled into view
- Props: `value: number`, `suffix?: string`

**`src/components/ui/FadeUpSection.tsx`**
- Wrapper component using Framer Motion `motion.div`
- Applies `opacity: 0 → 1` and `y: 20 → 0` when 30% of element enters viewport
- Uses `whileInView` + `viewport={{ once: true, amount: 0.3 }}`

### Animation Application
- Hero text: stagger-fade in on page load (each line cascades, 100ms delay between)
- Bundle timeline stat strip: wrap each stat with `<AnimatedNumber>`
- All sections: wrap in `<FadeUpSection>`
- All buttons: `hover:scale-[1.02] hover:shadow-md transition-all duration-200`

### Background Textures (CSS-only)

**Hero section:**
```css
background-image:
  linear-gradient(rgba(15, 23, 42, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(15, 23, 42, 0.03) 1px, transparent 1px);
background-size: 32px 32px;
```

**Pricing section:**
- `bg-gradient-to-br from-slate-50 via-white to-orange-50/30`

**Final CTA section:**
- `bg-slate-900` with white text
- Blueprint grid pattern: same CSS grid as hero but `rgba(255,255,255,0.03)`

## Non-Functional Requirements
- Dependencies: `framer-motion` (may already be installed by Hero Slider track), `react-intersection-observer`
- `"use client"` directive required on `AnimatedNumber` and `FadeUpSection`
- Server Components by default; only add `"use client"` where needed

## Acceptance Criteria
- [ ] `brand.*` color tokens available in Tailwind
- [ ] Hero CTA buttons use `bg-brand-primary`
- [ ] At least one eyebrow label per section uses `text-brand-primary` or alternate brand accent
- [ ] Pricing total uses `text-brand-primary`
- [ ] Community ZIP chips transition to `bg-brand-primary` on hover
- [ ] `AnimatedNumber` counts from 0 to target on scroll-into-view
- [ ] `FadeUpSection` fades sections up on scroll
- [ ] Hero text staggers in on load
- [ ] All buttons have scale + shadow hover effect
- [ ] Hero, Pricing, and Final CTA sections have correct background textures/gradients
- [ ] Final CTA section is `bg-slate-900` with white text and blueprint grid overlay

## Out of Scope
- New section copy or layout changes
- Any visual assets (covered in Visual Assets track)
