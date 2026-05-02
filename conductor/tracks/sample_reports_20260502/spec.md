# Spec: Sample Reports + Testimonials (/sample-reports, /testimonials)

## Overview
Build a curated sample reports directory and a filterable testimonials page.
The sample reports page links to existing legacy reports — do NOT create or
host new reports.

## Pages to Build
```
/sample-reports
/testimonials
```

## /sample-reports — Link Directory
Group links by service type. All links point to existing legacy URLs.

### Standard Inspections
| Service | Link |
|---|---|
| Home Inspection #1 (DMV) | https://www.homegauge.com/report/13617934 |
| Home Inspection #2 (DMV) | https://www.homegauge.com/report/13581748 |
| Pre-Settlement (New Construction) | https://www.homegauge.com/report/13621652 |
| Pre-Drywall | https://www.homegauge.com/report/13621482/HKI-3-PreDrywallInspection.html |
| Condo | https://www.homegauge.com/report/13584097 |
| Row House | https://www.homegauge.com/report/13622335 |
| Re-inspection | https://www.homegauge.com/report/18361432 |
| Annual Inspection | https://www.homegauge.com/report/20412681 |

### Add-on Services
| Service | Link |
|---|---|
| Mold Testing (particulates) | https://homekeyinspections.com/wp-content/uploads/Mold-IAQ-Sample_Report.pdf |
| Leak Detection | https://www.homegauge.com/report/13621929/HKI-9.3-LeakDetection.html |
| Radon Test | https://homekeyinspections.com/wp-content/uploads/Sample_Radon-1.pdf |
| Water Quality | https://homekeyinspections.com/wp-content/uploads/simplewaterdata_com_report_commercial_738a0bc6dc39a41a67b20c.pdf |
| Level II Chimney | https://homekeyinspections.com/wp-content/uploads/Sample-Level-II-Chimney-Inspection.pdf |

### Sewer Scope
| Service | Link |
|---|---|
| Directory page | https://homekeyinspections.com/sewer-scope-sample-reports/ |
| New Construction (public sewer) | https://www.homegauge.com/report/19778040 |
| Existing Construction (public sewer) | https://www.homegauge.com/report/13621850/HKI-7-SewerScope.html |
| New Construction (private septic) | https://www.homegauge.com/report/20357689 |

### IAQ / VOC Testing
| Service | Link |
|---|---|
| VOC Standard | https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Basic-Standard.pdf |
| VOC Predict | https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Retain-Predict.pdf |
| VOC Extensive | https://homekeyinspections.com/wp-content/uploads/IAQ-Extensive-Sample-1.pdf |

All links open in a new tab (`target="_blank"` with `rel="noopener noreferrer"`).
PDF links show a PDF icon. HomeGauge links show a preview thumbnail if available.

## /testimonials — Filterable Review Page
### Data
- Source: Google, Yelp, Angi, Redfin reviews (cite source per review)
- Each review: reviewer name, city, date, star rating, text, source badge, inspector name (if mentioned), service type

### Filters
- By service type (Home Inspection, Mold, Radon, etc.)
- By inspector name
- By county
- Filters can stack

### Display
- Grid of review cards
- Source platform badge (Google/Yelp/Angi/Redfin) on each card
- "Load more" pagination (not full-page reload)

## Acceptance Criteria
- [ ] /sample-reports renders all grouped links correctly
- [ ] All links open in a new tab
- [ ] PDF links have PDF icon indicator
- [ ] /testimonials renders seed review data
- [ ] All three filters work independently and in combination
- [ ] "Load more" loads additional reviews without full page reload
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes

## Out of Scope
- Texas sample reports (separate track)
- Live review API pull (Google/Yelp APIs) — use seed data
- Reviewer photos
