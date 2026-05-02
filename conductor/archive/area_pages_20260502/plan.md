# Implementation Plan: County and Community Landing Pages

Track ID: `area_pages_20260502`

---

## Phase 1: Data Architecture + Shared Template

- [x] Task: Create `app/areas/_data/` directory
    - [x] `types.ts` — County, Community, AreaTestimonial types
    - [x] `counties.ts` — typed county data for all 8 counties
    - [x] `communities.ts` — typed community data for all 17 communities

- [x] Task: Build `AreaPage` server component (shared for county + community)
    - [x] County layout: intro, community grid, findings, inspector coverage, testimonials, CTA
    - [x] Community layout: intro, builders list, why HomeKey bullets, breadcrumb, CTA
    - [x] Detect page type from props discriminated union

- [x] Task: Write AreaPage unit test
    - [x] County variant renders community grid with correct links
    - [x] Community variant renders builders list
    - [x] Schedule CTAs pre-fill area slug
    - [x] Breadcrumb back link points to parent county

- [x] Task: Conductor - User Manual Verification 'Phase 1: Data + Template' (Protocol in workflow.md)

---

## Phase 2: County Pages

- [x] Task: Create `app/areas/[county]/page.tsx` dynamic route
    - [x] Generate static params for all 8 counties
    - [x] Render AreaPage in county mode
    - [x] Each page: unique title, meta description with county name + "home inspection"

- [x] Task: Verify all 8 county routes resolve:
    - [x] loudoun-county, fairfax-county, prince-william-county, fauquier-county
    - [x] arlington-county, stafford-county, montgomery-county-md, washington-dc

- [x] Task: Conductor - User Manual Verification 'Phase 2: County Pages' (Protocol in workflow.md)

---

## Phase 3: Community Pages

- [x] Task: Create `app/areas/[county]/[community]/page.tsx` dynamic route
    - [x] Generate static params for all 17 communities
    - [x] Render AreaPage in community mode
    - [x] Each page: unique title, meta description mentioning community + county

- [x] Task: Verify all 17 community routes resolve:
    - [x] Loudoun: brambleton, ashburn, leesburg, sterling, aldie, dulles-south
    - [x] Fairfax: oak-hill, herndon, centreville, chantilly
    - [x] Prince William: haymarket, gainesville, bristow, manassas
    - [x] Fauquier: warrenton, bealeton, new-baltimore

- [x] Task: Conductor - User Manual Verification 'Phase 3: Community Pages' (Protocol in workflow.md)

---

## Phase 4: Cross-Links + Navigation

- [x] Task: Community grid on county pages links to /areas/[county]/[community]
- [x] Task: Breadcrumb on community pages: Home → Areas → [County] → [Community]
- [x] Task: Back link on community CTA returns to parent county
- [x] Task: Conductor - User Manual Verification 'Phase 4: Cross-Links' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [x] Task: Run `npx vitest run` — 14 new tests pass (109 total passing)
- [x] Task: Run `npm run build` — all 26 routes (8 county + 17 community + 1 index) build cleanly
- [x] Task: Run `npm run lint` — 0 errors
- [x] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
