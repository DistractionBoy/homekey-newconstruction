# Implementation Plan: About / The Difference Page

Track ID: `about_page_20260502`

---

## Phase 1: /about Main Page

- [ ] Task: Create `app/about/page.tsx`
    - [ ] Hero: "Founded by inspectors who weren't satisfied with the industry."
    - [ ] Origin story paragraphs (2 paragraphs from spec)
    - [ ] Principles section: 4-column grid (Train / Equip / Time / Work for buyer)
    - [ ] Team grid: reuse inspector data from inspector_pages track (link to /inspectors)
    - [ ] Awards/certifications logo grid: ASHI ACI, InterNACHI, NRS, AHIT, BBB A+, Angi Super Service, Google Guaranteed
    - [ ] Coverage map: reuse SVG map component from homepage track
    - [ ] "Read our story" placeholder section

- [ ] Task: Page metadata
    - [ ] Title: "About HomeKey Inspections — The Key to Knowing More®"

- [ ] Task: Write smoke test for /about
    - [ ] h1 renders, principles section renders 4 items

- [ ] Task: Conductor - User Manual Verification 'Phase 1: About Main Page' (Protocol in workflow.md)

---

## Phase 2: /about/the-difference

- [ ] Task: Create `app/about/the-difference/page.tsx`
    - [ ] Expand the 3-column homepage differentiator section into full-length content
    - [ ] Training deep-dive: workshop setup, 6-8 months detail
    - [ ] Tools deep-dive: thermal camera, moisture meter, drone, 33-foot pole
    - [ ] Time deep-dive: what 3-5 hours vs 60 minutes means for the buyer
    - [ ] Supporting visuals (photos or placeholders)

- [ ] Task: Conductor - User Manual Verification 'Phase 2: The Difference' (Protocol in workflow.md)

---

## Phase 3: /about/satisfaction-guarantee + /about/training-philosophy

- [ ] Task: Create `app/about/satisfaction-guarantee/page.tsx`
    - [ ] What the guarantee covers
    - [ ] How to invoke it
    - [ ] What it does NOT cover
    - [ ] Contact info

- [ ] Task: Create `app/about/training-philosophy/page.tsx`
    - [ ] Month-by-month training timeline (months 1-2, 3-4, 5-6, 7-8)
    - [ ] Workshop setup description
    - [ ] Shadow inspection count before leading solo
    - [ ] Continuing education

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Guarantee + Training' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Verify all 4 pages (/, /the-difference, /satisfaction-guarantee, /training-philosophy) render
- [ ] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
