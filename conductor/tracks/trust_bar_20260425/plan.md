# Implementation Plan: Trust Bar Refinement

Track ID: `trust_bar_20260425`

---

## Phase 1: TrustBar Component

- [ ] Task: Write TrustBar tests
    - [ ] Create `src/components/new-construction/TrustBar.test.tsx`
    - [ ] Assert all 5 badge labels render ("4.9/5", "ASHI ACI", "ISO/IEC 17025", "NoVA + DMV", "A+ BBB")
    - [ ] Assert all 5 badge sub-texts render
    - [ ] Assert logo strip container is present in the DOM

- [ ] Task: Create TrustBar component
    - [ ] Create `src/components/new-construction/TrustBar.tsx`
    - [ ] Define `BadgeItem` type with `icon`, `label`, `subText`, `accentColor` fields
    - [ ] Define the 5-badge data array matching the spec
    - [ ] Render horizontal flex row with `justify-between` or `gap` evenly distributed
    - [ ] Each badge: icon left (16–20px), bold label, smaller sub-text, subtle accent background
    - [ ] Apply section background `bg-gradient-to-r from-slate-50 via-white to-slate-50`
    - [ ] Apply `border-t border-b border-slate-200/60` and `py-4 md:py-6`
    - [ ] Mobile: 2-column grid wrapping (`grid grid-cols-2 md:flex`)

- [ ] Task: Create logo strip
    - [ ] Create `public/logos/` directory (add `.gitkeep` so it commits)
    - [ ] Add logo strip below badges: render `<img>` placeholders for `ashi.svg`, `internachi.svg`, `nrs.svg`, `bbb.svg`, `homegauge.svg`, `ahit.svg`
    - [ ] Style: `h-7 md:h-8`, `grayscale opacity-40`, `hover:grayscale-0 hover:opacity-100 transition`
    - [ ] Add comment: `{/* Jason: drop actual SVG files into public/logos/ to activate */}`

- [ ] Task: Conductor - User Manual Verification 'Phase 1: TrustBar Component' (Protocol in workflow.md)

---

## Phase 2: Integration & Placement

- [ ] Task: Replace existing trust bar in page
    - [ ] Locate existing trust bar in `src/app/new-construction/page.tsx` or relevant section component
    - [ ] Replace with `<TrustBar />`
    - [ ] Verify placement between hero and next section

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Integration & Placement' (Protocol in workflow.md)

---

## Phase 3: QA & Final Checks

- [ ] Task: Run full test suite and verify coverage ≥ 80%
- [ ] Task: Production build check (`npm run build`)
- [ ] Task: Lint check (`npm run lint`)
- [ ] Task: Conductor - User Manual Verification 'Phase 3: QA & Final Checks' (Protocol in workflow.md)
