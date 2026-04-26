# Implementation Plan: "The Problem" Section Enhancement

Track ID: `problem_section_20260425`

---

## Phase 1: Background Image Asset

- [x] Task: Source and save background image
    - [x] Download a dusk/evening construction scene from Unsplash (search: `unfinished house dusk`, `new construction sunset`)
    - [x] Compress to ≤ 200KB using squoosh.app or tinypng.com
    - [x] Save to `public/images/unfinished-home-dusk.jpg`

- [x] Task: Conductor - User Manual Verification 'Phase 1: Background Image Asset' (Protocol in workflow.md)

---

## Phase 2: Problem Section Component Upgrade

- [x] Task: Write Problem section tests
    - [x] Create or update `src/components/new-construction/ProblemSection.test.tsx`
    - [x] Assert `AlertTriangle` icon renders in builder card
    - [x] Assert `BadgeCheck` icon renders in HomeKey card
    - [x] Assert "vs." divider text is present in the DOM
    - [x] Assert background image `<img>` element has the correct `alt` attribute (empty string for decorative)

- [x] Task: Wrap section in atmospheric background layer
    - [x] Locate the Problem section component (or inline section in page)
    - [x] Wrap in `<section className="relative overflow-hidden">`
    - [x] Add `<div className="absolute inset-0 z-0">` containing:
        - `next/image` with `src="/images/unfinished-home-dusk.jpg"`, `fill`, `object-cover`, `className="opacity-15"`, `alt=""`
        - `<div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />`
    - [x] Wrap all existing content in `<div className="relative z-10 container mx-auto py-16 px-4">`

- [x] Task: Upgrade comparison cards
    - [x] Builder card: apply `bg-rose-50/80 border border-rose-200`, add `AlertTriangle` icon in `text-amber-500` at top, replace bullet markers with Lucide `X` in `text-rose-500`, add `hover:opacity-90 transition` to card
    - [x] HomeKey card: apply `bg-emerald-50/80 border border-emerald-200`, add `BadgeCheck` icon in `text-emerald-500` at top, replace bullet markers with Lucide `Check` in `text-emerald-600`, add `hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`
    - [x] Add vertical `"vs."` divider between cards: `hidden md:flex items-center text-slate-400 font-bold text-xl`

- [x] Task: Conductor - User Manual Verification 'Phase 2: Problem Section Component Upgrade' (Protocol in workflow.md)

---

## Phase 3: QA & Final Checks

- [x] Task: Run full test suite and verify coverage ≥ 80%
- [x] Task: Production build check (`npm run build`)
- [x] Task: Lint check (`npm run lint`)
- [x] Task: Conductor - User Manual Verification 'Phase 3: QA & Final Checks' (Protocol in workflow.md)
