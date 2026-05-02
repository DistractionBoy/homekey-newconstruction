# Implementation Plan: About / The Difference Page

Track ID: `about_page_20260502`

---

## Phase 1: /about Main Page

- [x] Task: Create `app/about/page.tsx`
    - [x] Hero: "Founded by inspectors who weren't satisfied with the industry."
    - [x] Origin story paragraphs (2 paragraphs from spec)
    - [x] Principles section: 4-column grid (Train / Equip / Time / Work for buyer)
    - [x] Team grid: reuse inspector data from inspector_pages track (link to /inspectors)
    - [x] Awards/certifications logo grid: ASHI ACI, InterNACHI, NRS, AHIT, BBB A+, Angi Super Service, Google Guaranteed
    - [x] Coverage map: reuse SVG map component from homepage track
    - [x] "Read our story" placeholder section

- [x] Task: Page metadata
    - [x] Title: "About HomeKey Inspections — The Key to Knowing More®"

- [x] Task: Write smoke test for /about
    - [x] h1 renders, principles section renders 4 items

- [x] Task: Conductor - User Manual Verification 'Phase 1: About Main Page' (Protocol in workflow.md)

---

## Phase 2: /about/the-difference

- [x] Task: Create `app/about/the-difference/page.tsx`
    - [x] Expand the 3-column homepage differentiator section into full-length content
    - [x] Training deep-dive: workshop setup, 6-8 months detail
    - [x] Tools deep-dive: thermal camera, moisture meter, drone, 33-foot pole
    - [x] Time deep-dive: what 3-5 hours vs 60 minutes means for the buyer
    - [x] Supporting visuals (photos or placeholders)

- [x] Task: Conductor - User Manual Verification 'Phase 2: The Difference' (Protocol in workflow.md)

---

## Phase 3: /about/satisfaction-guarantee + /about/training-philosophy

- [x] Task: Create `app/about/satisfaction-guarantee/page.tsx`
    - [x] What the guarantee covers
    - [x] How to invoke it
    - [x] What it does NOT cover
    - [x] Contact info

- [x] Task: Create `app/about/training-philosophy/page.tsx`
    - [x] Month-by-month training timeline (months 1-2, 3-4, 5-6, 7-8)
    - [x] Workshop setup description
    - [x] Shadow inspection count before leading solo
    - [x] Continuing education

- [x] Task: Conductor - User Manual Verification 'Phase 3: Guarantee + Training' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [x] Task: Run `npx vitest run --coverage` ≥ 80%
- [x] Task: Run `npm run build` and `npm run lint`
- [x] Task: Verify all 4 pages (/, /the-difference, /satisfaction-guarantee, /training-philosophy) render
- [x] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
