# Implementation Plan: "The Problem" Section Enhancement

Track ID: `problem_section_20260425`

---

## Phase 1: Background Image Asset

- [ ] Task: Source and save background image
    - [ ] Download a dusk/evening construction scene from Unsplash (search: `unfinished house dusk`, `new construction sunset`)
    - [ ] Compress to ≤ 200KB using squoosh.app or tinypng.com
    - [ ] Save to `public/images/unfinished-home-dusk.jpg`

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Background Image Asset' (Protocol in workflow.md)

---

## Phase 2: Problem Section Component Upgrade

- [ ] Task: Write Problem section tests
    - [ ] Create or update `src/components/new-construction/ProblemSection.test.tsx`
    - [ ] Assert `AlertTriangle` icon renders in builder card
    - [ ] Assert `BadgeCheck` icon renders in HomeKey card
    - [ ] Assert "vs." divider text is present in the DOM
    - [ ] Assert background image `<img>` element has the correct `alt` attribute (empty string for decorative)

- [ ] Task: Wrap section in atmospheric background layer
    - [ ] Locate the Problem section component (or inline section in page)
    - [ ] Wrap in `<section className="relative overflow-hidden">`
    - [ ] Add `<div className="absolute inset-0 z-0">` containing:
        - `next/image` with `src="/images/unfinished-home-dusk.jpg"`, `fill`, `object-cover`, `className="opacity-15"`, `alt=""`
        - `<div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />`
    - [ ] Wrap all existing content in `<div className="relative z-10 container mx-auto py-16 px-4">`

- [ ] Task: Upgrade comparison cards
    - [ ] Builder card: apply `bg-rose-50/80 border border-rose-200`, add `AlertTriangle` icon in `text-amber-500` at top, replace bullet markers with Lucide `X` in `text-rose-500`, add `hover:opacity-90 transition` to card
    - [ ] HomeKey card: apply `bg-emerald-50/80 border border-emerald-200`, add `BadgeCheck` icon in `text-emerald-500` at top, replace bullet markers with Lucide `Check` in `text-emerald-600`, add `hover:-translate-y-0.5 hover:shadow-md transition-all duration-200`
    - [ ] Add vertical `"vs."` divider between cards: `hidden md:flex items-center text-slate-400 font-bold text-xl`

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Problem Section Component Upgrade' (Protocol in workflow.md)

---

## Phase 3: QA & Final Checks

- [ ] Task: Run full test suite and verify coverage ≥ 80%
- [ ] Task: Production build check (`npm run build`)
- [ ] Task: Lint check (`npm run lint`)
- [ ] Task: Conductor - User Manual Verification 'Phase 3: QA & Final Checks' (Protocol in workflow.md)
