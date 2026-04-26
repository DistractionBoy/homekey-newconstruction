# Spec: "The Problem" Section Enhancement

Track ID: `problem_section_20260425`

## Overview
Upgrade the Problem section from two harsh flat comparison cards on white to a
visually rich, atmospheric section with a faint background image and polished
comparison cards. The emotional framing (conflict of interest) should feel weighty
without being visually aggressive.

## Functional Requirements

### Background Image
- Wrap the section in `relative overflow-hidden`
- `next/image` with `fill`, `object-cover`, `opacity-15` as an absolutely-positioned layer
- Image path: `/images/unfinished-home-dusk.jpg` (dusk/evening construction scene)
- Gradient overlay: `bg-gradient-to-b from-white via-white/80 to-white` above the image
- All existing section content rendered in a `relative z-10` container

### Image Asset
- Source from Unsplash (search: `unfinished house dusk`, `house under construction evening`, `new construction sunset`)
- Save to `public/images/unfinished-home-dusk.jpg`
- Compress to under 200KB before saving

### Comparison Card Upgrade
**Builder's inspector card:**
- Background: `bg-rose-50/80 border-rose-200`
- Top icon: `AlertTriangle` from lucide-react in `amber-500`
- Bullet icons: Lucide `X` in `rose-500`
- Hover: `opacity-90` transition

**HomeKey card:**
- Background: `bg-emerald-50/80 border-emerald-200`
- Top icon: `BadgeCheck` from lucide-react in `emerald-500`
- Bullet icons: Lucide `Check` in `emerald-600`
- Hover: slight lift `translateY(-2px)` + shadow

**"vs." divider:**
- Vertical divider between cards on desktop (hidden on mobile)
- Text: `"vs."` in `text-slate-400 font-bold text-xl`

## Non-Functional Requirements
- All images via `next/image`
- No raw `<img>` tags
- Background image must not affect text legibility (gradient overlay required)

## Acceptance Criteria
- [ ] Background image renders at ~15% opacity with gradient overlay
- [ ] Section text remains fully legible over the background
- [ ] Builder card uses rose/amber styling with `AlertTriangle` icon and `X` bullets
- [ ] HomeKey card uses emerald styling with `BadgeCheck` icon and `Check` bullets
- [ ] "vs." vertical divider visible on desktop, hidden on mobile
- [ ] HomeKey card lifts on hover; Builder card dims slightly
- [ ] `public/images/unfinished-home-dusk.jpg` exists and is ≤ 200KB
- [ ] No raw `<img>` tags

## Out of Scope
- `FadeUpSection` scroll animations (covered in Brand Colors & Animations track)
- Replacing the copy content of the comparison cards
