# Spec: Homepage (/)

## Overview
Build the modernized main homepage that positions HomeKey's full value proposition
and routes visitors to the right service. This is the primary entry point for
organic and paid traffic.

## Pre-condition: Decouple `/` from `/new-construction`
`app/page.tsx` currently re-exports the new-construction page, making `/` and
`/new-construction` render the same content. The first task of this track is to
replace `app/page.tsx` with a proper standalone homepage. The `/new-construction`
page and all its content are left completely untouched.

## Page Structure
`/` — Homepage

```
├── Hero (full-bleed image with overlay text)
├── Trust badges row
├── Service cards grid (6 services, 3×2 desktop / 1 col mobile)
├── "The Difference" highlight (3 key differentiators)
├── Inspector spotlight (rotating featured inspector)
├── Recent inspections feed (visual case studies)
├── Coverage map (NoVA + Texas SVG)
├── Reviews carousel (Google + Yelp, 3 visible, auto-rotate 8s)
├── Blog teaser (3 most recent posts)
└── Final CTA
```

## Hero Copy
```
<h1>The Key to Knowing More®</h1>
<p>Northern Virginia's most thorough home inspection team. ASHI-certified
inspectors, ISO-accredited mold lab, thermal imaging on every
inspection — bilingual when you need it.</p>
<Button variant="primary">Schedule an inspection →</Button>
<Button variant="ghost">See what makes us different</Button>
```

## Service Cards (6)
3×2 grid on desktop, single column on mobile. Each card:

| Title | Icon | Badge |
|---|---|---|
| Home Inspection | `<Home />` | "Most popular" |
| New Construction | `<HardHat />` | "Bundle available" |
| Mold Testing | `<Microscope />` | "ISO accredited lab" |
| Radon Testing | `<Wind />` | — |
| Sewer Scope | `<Wrench />` | — |
| Thermal Imaging | `<Thermometer />` | — |

Each links to its respective `/services/<slug>` page.

## "The Difference" Section — 3 Columns
**Heading:** "What sets HomeKey apart — We charge more than other inspectors. Here's why that's a good thing."

| Column | Heading | Body |
|---|---|---|
| Training | "6-8 months of advanced in-house training" | Most inspectors finish a multi-week online course and start working. Ours spend 6-8 months training in our workshop with real HVAC systems, electric panels, and roof samples — then shadow 100+ inspections before they ever lead one. |
| Tools | "Thermal imaging on every inspection" | Other companies charge extra for thermal imaging or skip it entirely. Every HomeKey inspection includes infrared scanning to find leaks and missing insulation that aren't visible to the naked eye. ISO/IEC 17025-accredited mold lab analysis when you need it. |
| Time | "3-5 hours, not 60 minutes" | Cheap inspections take an hour. Real ones take longer. Our inspectors take the time the home deserves, including time for you to ask questions. We work for you — not for the realtor's closing timeline. |

## Coverage Map
Clean SVG map showing:
- **Virginia:** Loudoun, Fairfax, Prince William, Fauquier, Arlington counties
- **Maryland/DC:** Montgomery County and parts of DC
- **Texas:** Williamson County, Travis County, parts of Hays County (Austin metro)

Each region is clickable, routing to its county-level landing page.

## Reviews Carousel
- 6 five-star reviews pulled from Google/Yelp/Angi
- Display 3 at a time, auto-rotate every 8 seconds
- Each card: star rating, review text (truncated at 200 chars with "Read more"), reviewer name + city, source platform badge, inspector name if mentioned

## Inspector Spotlight
Rotating featured inspector card — photo, name, title, certifications, short bio, link to full bio page.

## Blog Teaser
3 most recent blog posts — featured image, title, excerpt, date, "Read more" link.

## Final CTA
"Ready to schedule?" with primary booking CTA and phone number.

## Acceptance Criteria
- [ ] All 6 service cards render with correct icons, titles, descriptions, and links
- [ ] Hero CTA buttons link to /schedule and scroll to differentiators section
- [ ] Coverage map SVG renders with correct regions; all regions are clickable
- [ ] Reviews carousel auto-rotates and is keyboard/screen-reader accessible
- [ ] Page passes `npm run build` and `npm run lint` with no errors
- [ ] Core Web Vitals: LCP < 2.5s on Vercel preview
- [ ] `npm test` passes (all tests green)

## Out of Scope
- Actual Google/Yelp review API integration (use hardcoded seed data for now)
- Blog CMS integration (use static placeholder posts)
- Inspector spotlight backend (use static data)
