# Implementation Plan: Service Detail Pages

Track ID: `service_pages_20260502`

---

## Phase 1: Shared Template + Data Architecture

- [x] Task: Build `ServiceDetailPage` server component
    - [x] Props: title, subtitle, whyImportant, whatWeInspect, whatToExpect, pricing, sampleReportLink, testimonials, relatedServices, faqs
    - [x] Sections: Hero, Why It Matters, What We Inspect (accordion), What to Expect (numbered timeline), Pricing table, Sample Report link, Related Services grid, Testimonials, FAQ accordion

- [x] Task: Create `app/services/_data/` directory
    - [x] One TypeScript file per service with typed content object
    - [x] Shared `ServiceData` type

- [x] Task: Create `/services` index page
    - [x] Grid of all 12 service cards

- [x] Task: Write ServiceDetailPage unit tests
    - [x] All sections render when props provided
    - [x] FAQ accordion toggles open/closed

- [x] Task: Conductor - User Manual Verification 'Phase 1: Template + Data Architecture' (Protocol in workflow.md)

---

## Phase 2: Home Inspection + Pre-Drywall + Warranty Inspection

- [x] Task: `app/services/home-inspection/page.tsx`
    - [x] Content: ASHI ACI certified, 3-5 hours, photo/video report, 24hr delivery
    - [x] Pricing: per prices.md ($675/$725/$775/$850)
    - [x] Sample: homegauge.com/report/13617934 and /13581748

- [x] Task: `app/services/pre-drywall-inspection/page.tsx`
    - [x] Content: what pre-drywall catches, framing/mechanicals/insulation
    - [x] Sample: homegauge.com/report/13621482/HKI-3-PreDrywallInspection.html

- [x] Task: `app/services/warranty-inspection/page.tsx`
    - [x] Content: 11-month warranty walkthrough, builder defects before warranty expires

- [x] Task: Conductor - User Manual Verification 'Phase 2: Core Inspection Pages' (Protocol in workflow.md)

---

## Phase 3: Re-Inspection + Mold + Radon

- [x] Task: `app/services/re-inspection/page.tsx`
    - [x] Content: verifying repairs were completed correctly
    - [x] Sample: homegauge.com/report/18361432

- [x] Task: `app/services/mold-testing/page.tsx`
    - [x] Lead with ISO/IEC 17025:2017 accreditation
    - [x] When to test section
    - [x] Pricing: 1 sample $325 | 2 $475 | 3 $625
    - [x] Sample: Mold-IAQ-Sample_Report.pdf

- [x] Task: `app/services/radon-testing/page.tsx`
    - [x] Why radon matters in NoVA
    - [x] Sample: Sample_Radon-1.pdf

- [x] Task: Conductor - User Manual Verification 'Phase 3: Re-Inspection + Mold + Radon' (Protocol in workflow.md)

---

## Phase 4: Sewer Scope + Leak Detection + Water Quality

- [x] Task: `app/services/sewer-scope/page.tsx`
    - [x] Sample report directory: homekeyinspections.com/sewer-scope-sample-reports/

- [x] Task: `app/services/leak-detection-thermal-imaging/page.tsx`
    - [x] Thermal imaging on every inspection — explain the value
    - [x] Sample: homegauge.com/report/13621929

- [x] Task: `app/services/water-quality-testing/page.tsx`
    - [x] When needed (well water, older homes)
    - [x] Sample: simplewaterdata PDF

- [x] Task: Conductor - User Manual Verification 'Phase 4: Sewer + Leak + Water' (Protocol in workflow.md)

---

## Phase 5: VOC + Chimney + Annual Inspection Program

- [x] Task: `app/services/voc-testing/page.tsx`
    - [x] Three tiers: Standard, Predict, Extensive
    - [x] Sample links for all three

- [x] Task: `app/services/level-2-chimney-inspection/page.tsx`
    - [x] When level II is required vs. level I
    - [x] Sample: Sample-Level-II-Chimney-Inspection.pdf

- [x] Task: `app/services/annual-inspection-program/page.tsx`
    - [x] Ongoing relationship, homeowner maintenance, peace of mind
    - [x] Sample: homegauge.com/report/20412681

- [x] Task: Conductor - User Manual Verification 'Phase 5: VOC + Chimney + Annual' (Protocol in workflow.md)

---

## Phase 6: QA & Final Checks

- [x] Task: Verify all sample report links open correctly in new tab
- [x] Task: Verify related services grid on each page links to sibling pages
- [x] Task: Run `npx vitest run` — 12 new tests pass
- [x] Task: Run `npm run build` and `npm run lint` — 0 errors
- [x] Task: Conductor - User Manual Verification 'Phase 6: QA & Final Checks' (Protocol in workflow.md)
