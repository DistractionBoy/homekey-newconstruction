# Implementation Plan: Realtor Partner Portal

Track ID: `realtor_portal_20260502`

---

## Phase 1: /realtors Landing Page

- [ ] Task: Create `app/realtors/page.tsx`
    - [ ] Hero: "For Real Estate Agents — Make your buyer's offer the strongest one on the table."
    - [ ] Why agents partner section (5 bullet points from spec)
    - [ ] Partnership program tiers section
    - [ ] CTA: "Become a partner →" → /realtors/partner

- [ ] Task: Page metadata
    - [ ] Title: "Real Estate Agent Partners — HomeKey Inspections"

- [ ] Task: Write smoke test
    - [ ] Hero h1 and CTA button render

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Realtors Landing' (Protocol in workflow.md)

---

## Phase 2: /realtors/partner — Partnership Form

- [ ] Task: Create `app/realtors/partner/page.tsx`
    - [ ] Partnership form: agent name, brokerage, email, phone, monthly referral volume
    - [ ] Form validation (Zod schema)
    - [ ] Submit to `POST /api/agent`
    - [ ] Success message on submission

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Partnership Form' (Protocol in workflow.md)

---

## Phase 3: /realtors/co-branded/[partner-slug]

- [ ] Task: Create `app/realtors/co-branded/[partner-slug]/page.tsx`
    - [ ] Dynamic route — fetch partner data by slug from database (or static seed data if DB not yet ready)
    - [ ] Agent's name, brokerage, photo placeholder
    - [ ] "Referred by [Agent Name]" header
    - [ ] Full HomeKey service listings
    - [ ] Booking form link pre-fills agent info: `/schedule?agent=[slug]`
    - [ ] Graceful 404 for unknown slugs

- [ ] Task: Add 1 seed partner record for testing

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Co-Branded Pages' (Protocol in workflow.md)

---

## Phase 4: /realtors/resources

- [ ] Task: Create `app/realtors/resources/page.tsx`
    - [ ] HomeKey overview one-pager (PDF link placeholder)
    - [ ] Links to sample reports (reuse /sample-reports data)
    - [ ] "How to use the Create Request List" guide (inline content)
    - [ ] Inspection checklist for buyers (downloadable PDF placeholder)

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Resources' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Verify partner form submits correctly
- [ ] Task: Verify co-branded page renders for seed slug
- [ ] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
