# Implementation Plan: Sample Reports + Testimonials

Track ID: `sample_reports_20260502`

---

## Phase 1: /sample-reports Directory Page

- [ ] Task: Create `app/sample-reports/_data/reports.ts`
    - [ ] Typed `SampleReport` interface: title, service, url, type (pdf | homegauge)
    - [ ] All report entries grouped by category (see spec.md for complete list)

- [ ] Task: Create `app/sample-reports/page.tsx`
    - [ ] Sections: Standard Inspections, Add-on Services, Sewer Scope, IAQ/VOC Testing
    - [ ] Each link: title, service type, PDF or external icon, `target="_blank" rel="noopener noreferrer"`
    - [ ] "These are reports from real HomeKey inspections" note

- [ ] Task: Write test
    - [ ] All report links have target="_blank" and rel attributes

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Sample Reports Page' (Protocol in workflow.md)

---

## Phase 2: /testimonials — Data + Layout

- [ ] Task: Create `app/testimonials/_data/reviews.ts`
    - [ ] Typed `Review` interface: id, reviewer, city, county, date, stars, text, source, serviceTags[], inspectorSlug?
    - [ ] Seed 20+ reviews (hardcoded, citing source)

- [ ] Task: Create `app/testimonials/page.tsx` — initial layout
    - [ ] Grid of review cards: stars, text, reviewer name + city, source badge, inspector tag
    - [ ] All reviews visible (no filter yet)

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Testimonials Layout' (Protocol in workflow.md)

---

## Phase 3: /testimonials — Filtering

- [ ] Task: Add filter controls (client component)
    - [ ] Filter by service type
    - [ ] Filter by inspector name
    - [ ] Filter by county
    - [ ] Filters stack (AND logic)
    - [ ] "X reviews shown" count

- [ ] Task: Implement "Load more" pagination
    - [ ] Show 12 initially, "Load more" appends next 12 without page reload
    - [ ] Hide button when all shown

- [ ] Task: Write filter tests
    - [ ] Filtering by service reduces displayed reviews
    - [ ] Multiple filters stack correctly

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Testimonials Filtering' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Verify all sample report links open correctly
- [ ] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
