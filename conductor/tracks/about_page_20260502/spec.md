# Spec: About / The Difference Page (/about)

## Overview
Combine HomeKey's existing "The Difference" content into a cleaner, more
visually engaging About section. These pages support the brand's premium
positioning and give visitors the "why" behind higher prices.

## Pages to Build
```
/about
/about/the-difference
/about/satisfaction-guarantee
/about/training-philosophy
```

## /about — Main About Page

### Hero Copy
```
# About HomeKey Inspections
## Founded by inspectors who weren't satisfied with the industry.

HomeKey Inspections has been operating in Northern Virginia since 2012,
performing thousands of residential inspections across Loudoun, Fairfax,
Prince William, and Fauquier counties — plus Maryland, DC, and our Austin,
Texas branch.

We started HomeKey because we saw a gap. The state minimum to become a home
inspector is shockingly low — you can pass the exam in a few weeks of study
with no construction experience. Most companies hire inspectors at that bare
minimum. We don't. Every HomeKey inspector goes through 6-8 months of in-
house advanced training before they ever lead an inspection on their own.
```

### Principles Section (4 columns, visual treatment)
1. **Train deeper than the state requires** — 6-8 months of in-house training in workshop with real HVAC, panels, and framing
2. **Equip with the best tools** — Thermal cameras, moisture meters, drones, 33-foot poles, all standard
3. **Take the time the home deserves** — 3-5 hours on site, never rushed
4. **Work for the buyer, never the deal** — We refuse to rush for closing timelines

### Additional Sections
- **Meet the team** — Inspector grid linking to /inspectors pages
- **Awards and certifications** — Logo grid: ASHI ACI, InterNACHI, NRS, AHIT, BBB A+, Angie's List Super Service Awards, Google Guaranteed
- **Coverage areas** — Embedded SVG map (reuse from homepage)
- **Read our story** — Optional long-form founder origin story (placeholder until Ian provides content)

## /about/the-difference
Detailed breakdown of what differentiates HomeKey. Expand the 3-column
homepage section into full-length content with supporting evidence (photos,
stats, process diagrams).

## /about/satisfaction-guarantee
Full text of HomeKey's satisfaction guarantee. Include:
- What the guarantee covers
- How to invoke it
- Re-inspection policy
- Contact information for disputes

## /about/training-philosophy
Deep dive into the 6-8 month training program:
- What new inspectors learn in months 1-2, 3-4, 5-6, 7-8
- The workshop setup (HVAC, panels, roof samples)
- How many shadow inspections before leading solo
- Continuing education requirements

## Acceptance Criteria
- [ ] All 4 pages render without errors
- [ ] Awards/certification logo grid renders (use placeholder SVGs if assets missing)
- [ ] Embedded map reuses homepage map component
- [ ] Each page has unique `<title>` and `<meta description>`
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes

## Out of Scope
- Ian founder story (placeholder "coming soon" section is acceptable)
- Spanish translations (Track 4 follow-up)
