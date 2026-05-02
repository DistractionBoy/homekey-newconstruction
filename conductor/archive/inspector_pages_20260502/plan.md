# Implementation Plan: Inspector Bio Pages

Track ID: `inspector_pages_20260502`

---

## Phase 1: Data Architecture + Template

- [x] Task: Create `app/inspectors/_data/inspectors.ts`
    - [x] Typed `Inspector` interface: id, name, slug, title, photo, certifications[], bio, areasServed[], specialties[], languages[], testimonials[]
    - [x] Data for all 6 inspectors (Ian, Sebastian, Jay, Mike, Darren, Janet) from live site bios

- [x] Task: Build `InspectorPage` server component
    - [x] Header: photo, name, title, certification badges
    - [x] Bio section (long-form text)
    - [x] Areas Served section (county list)
    - [x] Specialties section
    - [x] Testimonials (2-3 review cards)
    - [x] BookWithMe CTA — links to `/schedule?inspector=[slug]`
    - [x] Office staff variant (no BookWithMe, contact CTA instead)

- [x] Task: Write InspectorPage unit test
    - [x] Name, title, and certification badges render
    - [x] BookWithMe link includes correct inspector query param
    - [x] Language badges render for bilingual inspectors
    - [x] Office staff gets contact CTA, not BookWithMe

- [x] Task: Conductor - User Manual Verification 'Phase 1: Data + Template' (Protocol in workflow.md)

---

## Phase 2: /inspectors Index Page

- [x] Task: Create `app/inspectors/page.tsx`
    - [x] Grid of inspector cards: photo, name, title, certifications, language badges
    - [x] Each card links to /inspectors/[slug]
    - [x] Language badge visually distinguishes Sebastian and Jay

- [x] Task: Conductor - User Manual Verification 'Phase 2: Index Page' (Protocol in workflow.md)

---

## Phase 3: Individual Inspector Pages

- [x] Task: `app/inspectors/[slug]/page.tsx` dynamic route
    - [x] Generate static params from inspectors data
    - [x] Render InspectorPage component with matched data
    - [x] 404 for unknown slugs

- [x] Task: Individual page metadata
    - [x] `<title>`: "[Name] — HomeKey Home Inspector, [Primary County]"
    - [x] `<meta description>`: summary of certifications and areas

- [x] Task: Verify all 6 slug routes resolve:
    - [x] /inspectors/ian-mcnaught
    - [x] /inspectors/sebastian-aste
    - [x] /inspectors/jay-carrillo
    - [x] /inspectors/mike-lawson
    - [x] /inspectors/darren-melnar
    - [x] /inspectors/janet-campana

- [x] Task: Conductor - User Manual Verification 'Phase 3: Individual Pages' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [x] Task: Run `npx vitest run` — 11 new tests pass (95 total passing)
- [x] Task: Run `npm run build` — all 7 inspector routes build cleanly
- [x] Task: Run `npm run lint` — 0 errors
- [x] Task: Verify BookWithMe CTA uses correct inspector slug in query param
- [x] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
