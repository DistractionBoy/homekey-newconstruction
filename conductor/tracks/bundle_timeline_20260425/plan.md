# Implementation Plan: Bundle Timeline Visual

Track ID: `bundle_timeline_20260425`

---

## Phase 1: BundleTimeline Component

- [ ] Task: Write BundleTimeline tests
    - [ ] Create `src/components/new-construction/BundleTimeline.test.tsx`
    - [ ] Assert all 3 stage titles render ("Pre-Drywall Inspection", "Pre-Settlement Inspection", "11-Month Warranty Inspection")
    - [ ] Assert all 3 timing labels render
    - [ ] Assert "Learn more" links render (3 total)
    - [ ] Assert stat strip renders with "3 inspections", "1 inspector", "100% advocacy"

- [ ] Task: Create BundleTimeline component
    - [ ] Create `src/components/new-construction/BundleTimeline.tsx`
    - [ ] Define `StageData` type with `number`, `timingLabel`, `icon`, `title`, `description`, `tint`, `accentColor` fields
    - [ ] Define the 3-stage data array matching the spec
    - [ ] Build desktop layout: horizontal flex with gradient timeline bar (`from-brand-primary to-orange-600`, `h-0.5`) and 3 node circles
    - [ ] Build mobile layout: vertical stack with dotted-line connector between cards
    - [ ] Node circles: `w-10 h-10` desktop / `w-8 h-8` mobile, `bg-[#f97316]`, white number text
    - [ ] Above node: timing label text (`text-sm text-muted-foreground`)
    - [ ] Below node: card with tinted background, icon, title, description
    - [ ] Card hover: `hover:-translate-y-1 hover:shadow-lg transition-all duration-200`
    - [ ] Card bottom-left: `"Learn more →"` anchor in card's accent color
    - [ ] Apply CSS dot pattern to section wrapper via `style` prop

- [ ] Task: Create stat strip
    - [ ] Render below timeline: flex row with "3 inspections", "1 inspector", "100% advocacy"
    - [ ] Leave stat values as plain text for now (AnimatedNumber added in Brand Colors & Animations track)

- [ ] Task: Conductor - User Manual Verification 'Phase 1: BundleTimeline Component' (Protocol in workflow.md)

---

## Phase 2: Integration & Placement

- [ ] Task: Replace existing bundle cards in page
    - [ ] Locate the bundle/timeline section in `src/app/new-construction/page.tsx` or relevant component
    - [ ] Replace existing three flat cards with `<BundleTimeline />`
    - [ ] Verify desktop horizontal layout and mobile vertical layout

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Integration & Placement' (Protocol in workflow.md)

---

## Phase 3: QA & Final Checks

- [ ] Task: Run full test suite and verify coverage ≥ 80%
- [ ] Task: Production build check (`npm run build`)
- [ ] Task: Lint check (`npm run lint`)
- [ ] Task: Conductor - User Manual Verification 'Phase 3: QA & Final Checks' (Protocol in workflow.md)
