# Spec: Service Detail Pages (/services)

## Overview
Build deep, SEO-optimized pages for each of HomeKey's services. These are
the primary organic search workhorses. Every page uses the same
`ServiceDetailPage` component template for consistency and SEO.

## Pages to Build
```
/services                                (index/directory)
/services/home-inspection
/services/pre-drywall-inspection
/services/warranty-inspection
/services/re-inspection
/services/mold-testing
/services/radon-testing
/services/sewer-scope
/services/leak-detection-thermal-imaging
/services/water-quality-testing
/services/voc-testing
/services/level-2-chimney-inspection
/services/annual-inspection-program
```

## Shared Template Structure
Each service detail page follows this structure:

```
<ServiceDetailPage
  title="..."
  subtitle="..."
  whyImportant={...}
  whatWeInspect={...}
  whatToExpect={...}
  pricing={...}
  sampleReportLink={...}
  testimonials={...}
  relatedServices={...}
  faqs={...}
/>
```

Sections per page:
1. **Hero** — title, subtitle, primary CTA
2. **Why It Matters** — 2–3 paragraph value explanation
3. **What We Inspect / Test** — accordion or grid of components
4. **What to Expect** — numbered timeline (schedule → walkthrough → report → follow-up)
5. **Pricing** — table drawn from `public/pricing/prices.md`
6. **Sample Report** — link to legacy sample report (never create a new one)
7. **Add to Your Inspection** — grid of related add-on service cards
8. **Testimonials** — 2–3 reviews mentioning this service
9. **FAQ** — accordion, 4–6 questions

## Sample Report Links (use these, do not create new ones)
| Service | Link |
|---|---|
| Home Inspection #1 | https://www.homegauge.com/report/13617934 |
| Home Inspection #2 | https://www.homegauge.com/report/13581748 |
| Pre-Settlement (New Construction) | https://www.homegauge.com/report/13621652 |
| Pre-Drywall | https://www.homegauge.com/report/13621482/HKI-3-PreDrywallInspection.html |
| Condo | https://www.homegauge.com/report/13584097 |
| Row House | https://www.homegauge.com/report/13622335 |
| Sewer Scope directory | https://homekeyinspections.com/sewer-scope-sample-reports/ |
| Mold Testing | https://homekeyinspections.com/wp-content/uploads/Mold-IAQ-Sample_Report.pdf |
| Leak Detection | https://www.homegauge.com/report/13621929/HKI-9.3-LeakDetection.html |
| Radon | https://homekeyinspections.com/wp-content/uploads/Sample_Radon-1.pdf |
| Re-inspection | https://www.homegauge.com/report/18361432 |
| VOC Standard | https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Basic-Standard.pdf |
| VOC Predict | https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Retain-Predict.pdf |
| VOC Extensive | https://homekeyinspections.com/wp-content/uploads/IAQ-Extensive-Sample-1.pdf |
| Water Quality | https://homekeyinspections.com/wp-content/uploads/simplewaterdata_com_report_commercial_738a0bc6dc39a41a67b20c.pdf |
| Level II Chimney | https://homekeyinspections.com/wp-content/uploads/Sample-Level-II-Chimney-Inspection.pdf |
| Annual Inspection | https://www.homegauge.com/report/20412681 |

## Key Page Copy Notes

### Home Inspection
- Subtitle: "The most important inspection of your buying journey."
- 3-5 hour evaluation, ASHI ACI-certified, photo/video-rich report within 24 hours
- Pricing table: Under 2,500 sq ft $525 | 2,500–4,000 sq ft $625 | Over 4,000 sq ft $725+

### Mold Testing
- Lead with ISO/IEC 17025:2017 accreditation — "not 'we sent it somewhere'"
- Call out that competitors often don't disclose their lab
- When to test: visible mold, musty odors, flooding, respiratory symptoms, new construction
- Pricing: 1 sample $325 | 2 samples $475 | 3 samples $625

### General Pattern for All Pages
- Emphasize ASHI certification, thermal imaging standard, 3-5 hour inspections
- Include "we work for the buyer, not the closing timeline" messaging
- Every page ends with related service cards so visitors can discover add-ons

## Data Organization
All page content lives in `app/services/_data/` with a file per service.
The `ServiceDetailPage` component is server-side rendered.

## Acceptance Criteria
- [ ] All 12 service pages + /services index render without errors
- [ ] Each page has correct `<title>` and `<meta description>` for SEO
- [ ] Sample report links open to correct legacy URLs
- [ ] Pricing tables match `public/pricing/prices.md`
- [ ] Related service cards link to correct sibling pages
- [ ] `npm run build` and `npm run lint` pass with no errors
- [ ] `npm test` passes (all tests green)

## Out of Scope
- Service-specific video embeds
- Booking form embedded on each service page (link to /schedule instead)
- Spanish translations (handled by Track 4)
