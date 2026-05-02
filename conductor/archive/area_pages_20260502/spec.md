# Spec: County and Community Landing Pages (/areas)

## Overview
SEO-optimized pages for every NoVA county and major new-construction community.
This is how HomeKey competes with NextDay's geographic content moat — hyper-local
pages that rank for "[city/county] home inspection" queries.

## County Pages (8)
```
/areas/loudoun-county
/areas/fairfax-county
/areas/prince-william-county
/areas/fauquier-county
/areas/arlington-county
/areas/stafford-county
/areas/montgomery-county-md
/areas/washington-dc
```

## Community Pages (17)
```
/areas/loudoun/brambleton
/areas/loudoun/ashburn
/areas/loudoun/leesburg
/areas/loudoun/sterling
/areas/loudoun/aldie
/areas/loudoun/dulles-south
/areas/fairfax/oak-hill
/areas/fairfax/herndon
/areas/fairfax/centreville
/areas/fairfax/chantilly
/areas/prince-william/haymarket
/areas/prince-william/gainesville
/areas/prince-william/bristow
/areas/prince-william/manassas
/areas/fauquier/warrenton
/areas/fauquier/bealeton
/areas/fauquier/new-baltimore
```

## County Page Template
```
# Home Inspections in [County Name], Virginia

## [Specific positioning for this county]

[2–3 paragraphs covering:]
- Housing stock character (mix of older homes, new builds, rural, etc.)
- Common inspection issues specific to this county
- HomeKey's track record in this county
- Which inspectors typically serve this county

## New construction communities we serve in [County]
[Grid of community cards → community pages]

## Common inspection findings in [County]
[3–5 specific examples relevant to this geography]

## What our [County] clients say
[3–5 testimonials filtered to this county]

## Schedule your [County] inspection
[Booking CTA with pre-filled location]
```

## Community Page Template (smaller, hyper-local)
```
# Home Inspections in [Community Name]

## Independent inspections for [Community] homebuyers and homeowners.

[1–2 paragraphs about this community: home types, builders, year ranges, features]

## Builders we've inspected in [Community]
[List: Toll Brothers, Pulte, NVR/Ryan, M/I Homes, Beazer, etc.]

## Why [Community] new-construction buyers choose HomeKey
[Bullets: bilingual inspectors, ISO mold lab, thermal imaging standard]

## Schedule in [Community]
[Booking CTA]
```

## Data Strategy
- County and community data lives in `app/areas/_data/` — one file per location
- A shared `AreaPage` component renders both county and community pages
- Community pages are nested under their county in the data

## SEO Schema
- `LocalBusiness` schema on every area page with `areaServed`
- Page titles: "Home Inspections in [Area] — HomeKey Inspections"

## Acceptance Criteria
- [ ] All 8 county pages and 17 community pages render without errors
- [ ] County pages link to their nested community pages
- [ ] Community pages link back to their parent county page
- [ ] Each page has unique `<title>` and `<meta description>`
- [ ] Booking CTAs pre-fill location where possible
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes

## Out of Scope
- Texas community pages (separate track after Austin content is ready)
- Dynamic review filtering by county (use static seed data)
- Map embeds on individual community pages
