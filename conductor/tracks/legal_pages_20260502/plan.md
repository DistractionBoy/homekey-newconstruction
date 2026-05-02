# Implementation Plan: Legal Pages

Track ID: `legal_pages_20260502`

---

## Phase 1: Shared LegalPage Layout + /privacy-policy

- [ ] Task: Build `LegalPage` layout component
    - [ ] Clean typography, no sidebar
    - [ ] Auto-generated table of contents from headings (for long pages)
    - [ ] Print-friendly CSS (`@media print`)
    - [ ] Anchor-linked sections

- [ ] Task: Migrate content from homekeyinspections.com/privacy-policy
    - [ ] Sections: data collected, how used, cookies, third-party services, contact, effective date

- [ ] Task: Create `app/privacy-policy/page.tsx`
    - [ ] Render migrated content in LegalPage layout
    - [ ] Metadata: title "Privacy Policy — HomeKey Inspections"

- [ ] Task: Write smoke test
    - [ ] Page renders with correct heading

- [ ] Task: Conductor - User Manual Verification 'Phase 1: LegalPage + Privacy Policy' (Protocol in workflow.md)

---

## Phase 2: /terms-of-service + /satisfaction-guarantee

- [ ] Task: Migrate terms of service content
    - [ ] Sections: scope of services, liability limitations, ASHI Standards, report delivery, disputes
    - [ ] Anchor-linked ToC at top

- [ ] Task: Create `app/terms-of-service/page.tsx`

- [ ] Task: Create `app/satisfaction-guarantee/page.tsx`
    - [ ] What the guarantee covers
    - [ ] How to invoke: call (571) 281-3846 within timeframe
    - [ ] What it does NOT cover
    - [ ] Note: also lives at /about/satisfaction-guarantee (can share content via redirect or shared component)

- [ ] Task: Conductor - User Manual Verification 'Phase 2: ToS + Guarantee' (Protocol in workflow.md)

---

## Phase 3: /accessibility-statement

- [ ] Task: Create `app/accessibility-statement/page.tsx`
    - [ ] WCAG 2.1 AA commitment statement
    - [ ] Known issues (none for initial launch)
    - [ ] Feedback contact mechanism
    - [ ] Last reviewed date: 2026-05-02

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Accessibility Statement' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Verify all 4 pages render
- [ ] Task: Verify table of contents links on ToS and Privacy Policy scroll correctly
- [ ] Task: Print-preview all pages — verify print styles look correct
- [ ] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
