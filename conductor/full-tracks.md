
Status / reality check (adjustments since this doc was written)

- /new-construction is already implemented in this repo (including Spanish route). Treat “Track 1 (New Construction Page)” as DONE/SHIPPED unless we explicitly decide to iterate.
  - Implementation lives in:
    - app/new-construction/page.tsx
    - app/new-construction/_data/content.ts
    - components/sections/PricingCalculator.tsx (bundle estimator used on /new-construction)

- /pricing is already implemented in this repo (including /pricing/es) with accurate prices and supporting copy. Treat “Track 7 (Pricing Page)” as IMPLEMENTED BASELINE.
  - Implementation lives in:
    - app/pricing/page.tsx
    - app/pricing/es/page.tsx
    - app/pricing/_data/content.ts
    - public/pricing/prices.md (source-of-truth pricing schedule)
    - components/sections/PricingSchedule.tsx (renders the schedule)
  - Note: “Build your bundle” calculator + FAQ accordion were in the original scope, but are NOT required to consider pricing “done” for the purpose of track generation. If we want them, make them a follow-up track.

- Sample reports already exist on the legacy site we are replacing. Whenever we need to “show a sample report” for a service, DO NOT create/host a new sample report page — just link directly to the existing sample report URL(s) from the legacy site’s Sample Reports directory:
  - Directory page: https://homekeyinspections.com/sample-dmv/
  - Direct links (DMV):
    - Home Inspection Sample #1: https://www.homegauge.com/report/13617934
    - Home Inspection Sample #2: https://www.homegauge.com/report/13581748
    - Pre-Settlement Inspection (New Construction): https://www.homegauge.com/report/13621652
    - Pre-Drywall Inspection: https://www.homegauge.com/report/13621482/HKI-3-PreDrywallInspection.html
    - Condo Inspection: https://www.homegauge.com/report/13584097
    - Row House Inspection: https://www.homegauge.com/report/13622335
    - Sewer line video inspection directory: https://homekeyinspections.com/sewer-scope-sample-reports/
      - New Construction Sewer Scope (public sewer): https://www.homegauge.com/report/19778040
      - Existing/Older Construction Sewer Scope (public sewer): https://www.homegauge.com/report/13621850/HKI-7-SewerScope.html
      - New Construction Septic Lateral Pipe (private septic): https://www.homegauge.com/report/20357689
    - Mold Testing (particulates): https://homekeyinspections.com/wp-content/uploads/Mold-IAQ-Sample_Report.pdf
    - Leak Detection: https://www.homegauge.com/report/13621929/HKI-9.3-LeakDetection.html
    - Radon Test: https://homekeyinspections.com/wp-content/uploads/Sample_Radon-1.pdf
    - Re-inspection: https://www.homegauge.com/report/18361432
    - VOC Test (standard): https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Basic-Standard.pdf
    - VOC / Mold VOC Test (predict): https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Retain-Predict.pdf
    - VOC / Mold VOC Test (extensive): https://homekeyinspections.com/wp-content/uploads/IAQ-Extensive-Sample-1.pdf
    - Water Quality Test: https://homekeyinspections.com/wp-content/uploads/simplewaterdata_com_report_commercial_738a0bc6dc39a41a67b20c.pdf
    - Level II Chimney Inspection: https://homekeyinspections.com/wp-content/uploads/Sample-Level-II-Chimney-Inspection.pdf
    - Annual Inspection: https://www.homegauge.com/report/20412681

Track 2: Homepage
Goal: Build a modernized homepage that positions HomeKey's full value proposition and routes visitors to the right service.
Page structure
/  (Homepage)

├── Hero (full-bleed image with overlay text)

├── Trust badges row

├── Service cards grid (6 services)

├── "The Difference" highlight (3 key differentiators)

├── Inspector spotlight (rotating featured inspector)

├── Recent inspections feed (visual case studies)

├── Coverage map (NoVA + Texas)

├── Reviews carousel (Google + Yelp)

├── Blog teaser (3 most recent posts)

└── Final CTA
Hero copy
<section className="hero">

  <div className="overlay-content">

    <h1>The Key to Knowing More®</h1>

    <p className="lead">

      Northern Virginia's most thorough home inspection team. ASHI-certified

      inspectors, ISO-accredited mold lab, thermal imaging on every

      inspection — bilingual when you need it.

    </p>

    <div className="cta-row">

      <Button variant="primary">Schedule an inspection →</Button>

      <Button variant="ghost">See what makes us different</Button>

    </div>

  </div>

</section>
Service cards (6 cards in a 3x2 grid on desktop, 1 column on mobile)
For each card, use this structure:

<ServiceCard

  icon={<Home />}

  title="Home Inspection"

  description="Our bread and butter. ASHI-certified inspectors spend 3-5 hours on your home — far longer than the state minimum — and deliver a photo/video-rich report."

  href="/services/home-inspection"

  badge="Most popular"

/>

Six cards:

Home Inspection — <Home /> icon
New Construction — <HardHat /> icon — badge "Bundle available"
Mold Testing — <Microscope /> icon — badge "ISO accredited lab"
Radon Testing — <Wind /> icon
Sewer Scope — <Wrench /> icon
Thermal Imaging — <Thermometer /> icon
"The Difference" section copy
## What sets HomeKey apart

We charge more than other inspectors. Here's why that's a good thing.

[3 columns]

[Column 1 — Training]

Heading: "6-8 months of advanced in-house training"

Body: Most inspectors finish a multi-week online course and start working. Ours

spend 6-8 months training in our workshop with real HVAC systems, electric panels,

and roof samples — then shadow 100+ inspections before they ever lead one.

[Column 2 — Tools]

Heading: "Thermal imaging on every inspection"

Body: Other companies charge extra for thermal imaging or skip it entirely. Every

HomeKey inspection includes infrared scanning to find leaks and missing insulation

that aren't visible to the naked eye. ISO/IEC 17025-accredited mold lab analysis

when you need it.

[Column 3 — Time]

Heading: "3-5 hours, not 60 minutes"

Body: Cheap inspections take an hour. Real ones take longer. Our inspectors take

the time the home deserves, including time for you to ask questions. We work

for you — not for the realtor's closing timeline.
Coverage map
Build a clean SVG map showing service areas:

Loudoun, Fairfax, Prince William, Fauquier, Arlington counties in Virginia
Montgomery County and parts of DC
Williamson County, Travis County, parts of Hays County in Texas (Austin metro)

Each region is clickable and routes to a county-level landing page.
Reviews carousel
Pull 6 5-star reviews. Display 3 at a time, auto-rotating every 8 seconds. Each card shows:

5-star rating
Review text (truncate at 200 chars with "Read more")
Reviewer name + city
Source platform (Google/Yelp/Angi) badge
Inspector name (if mentioned)


Track 3: Service Detail Pages
Goal: Build deep, SEO-optimized pages for each service. These are the workhorses for organic search.
Pages to build
/services

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
Common page template
Each service detail page follows this structure:

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
Example: Home Inspection page copy
# Home Inspection

## The most important inspection of your buying journey.

You'll only have one chance to know what you're buying before you sign.

Make it count.

A HomeKey home inspection is a 3-5 hour, top-to-bottom evaluation of every

major system in the home — exterior, roof, structure, electrical, plumbing,

HVAC, kitchen, bathrooms, garage, attic, crawlspace, and more. Our ASHI ACI-

certified inspectors deliver a photo and video-rich report within 24 hours,

giving you the leverage you need to negotiate or walk away.

[Components inspected — accordion sections from the actual HomeKey list]

## What to expect

[Numbered timeline]

1. **Schedule** — Book online or call (571) 281-3846. We confirm within hours.

2. **Walkthrough** — We invite you to attend. The inspector explains as they go.

3. **Detailed report** — HomeGauge software with zoomable photos, video clips,

   and a Create Request List feature for negotiation.

4. **Follow-up** — Questions after the report? Call us. We answer.

## Pricing

[Display from PRICING constant]

| Home size | Investment |

|---|---|

| Under 2,500 sq ft | $525 |

| 2,500 – 4,000 sq ft | $625 |

| Over 4,000 sq ft | $725+ |

Pricing varies by home age and complexity. We'll quote exactly when you call.

## See a sample report

Link to the existing legacy sample reports (do not create a new one):

- Home Inspection Sample #1 (DMV): https://www.homegauge.com/report/13617934
- Home Inspection Sample #2 (DMV): https://www.homegauge.com/report/13581748

## Add to your inspection

Most clients add at least one of these. They're often the difference between

a clean closing and a $10,000 surprise.

[Grid of add-on cards: Mold, Radon, Sewer Scope, Thermal, etc.]
Example: Mold Testing page (highlight ISO lab)
# Mold Testing

## ISO/IEC 17025:2017 accredited lab analysis. Not "we sent it somewhere."

A visual inspection alone cannot determine if there's mold in a home. Mold

spores are invisible until they've taken hold. By then, you're looking at

remediation costs that can run $5,000 to $25,000.

We sample the air with professional equipment, send the samples to an ISO/IEC

17025:2017 accredited laboratory, and deliver detailed results in 1-2 business

days. The accreditation matters — it means the lab follows international

standards for testing accuracy. Many of our competitors don't disclose where

their samples go. We do.

## When to test for mold

- Visible mold or recurring water damage

- Persistent musty odors

- Recent flooding or HVAC condensation issues

- Family members with unexplained respiratory symptoms

- New construction (yes, even new homes can have mold from rainwater on

  framing during the build)

## Pricing

[1, 2, or 3 sample options at $325/$475/$625]

## Sample report

Link to the existing legacy sample report (do not create a new one):

- Mold Testing (particulates): https://homekeyinspections.com/wp-content/uploads/Mold-IAQ-Sample_Report.pdf

(Build similar templates for each service. Keep the structure identical for SEO consistency and user familiarity.)


Track 4: Bilingual Support (/es/ Spanish Site Section)
Goal: Stand up a complete Spanish-language version of the site that positions HomeKey as the only Northern Virginia inspection team that takes Spanish-speaking buyers seriously.
Setup
Configure next-intl with two locales: en (default) and es
Update routing to use /[locale]/ structure under App Router
Add language detection middleware that routes Spanish-language browsers to /es/ automatically (with override option)
Add hreflang tags in metadata for SEO
Pages to translate (priority order)
/es/ — Homepage
/es/nueva-construccion — New Construction (translates /new-construction)
/es/servicios/inspeccion-de-vivienda — Home Inspection
/es/servicios/prueba-de-radon — Radon Testing
/es/servicios/prueba-de-moho — Mold Testing
/es/servicios/inspeccion-pre-drywall — Pre-Drywall
/es/servicios/inspeccion-de-garantia — Warranty Inspection
/es/servicios/inspeccion-termografica — Thermal Imaging
/es/servicios/sewer-scope — Sewer Scope
/es/precios — Pricing
/es/contacto — Contact (with bilingual inspector booking)
/es/equipo — Meet the team (highlighting Sebastian Aste and Jay Carrillo)
Translation requirements
Use professional translation, not machine translation
Have Sebastian Aste or Jay Carrillo (HomeKey's bilingual inspectors) review for real-estate terminology accuracy
Budget: $500-$1,500 for professional translation of all pages
Spanish hero copy
# Inspección completa. Informe bilingüe. El mismo rigor, en su idioma.

HomeKey Inspections es el único equipo de inspección en Northern Virginia

que ofrece inspectores bilingües certificados por ASHI, con cámaras

termográficas y laboratorio acreditado ISO para el análisis de moho.

Su hogar. Su idioma. Sin traducciones a medias.

[Reservar inspección →]  [Ver informe de ejemplo]
Critical UX detail: bilingual inspector contact
On the Spanish homepage, every page footer, and especially the contact page, include a prominent "Hable directamente con un inspector bilingüe" section with:

Photo of Sebastian and Jay
Click-to-call button (tel: link) — sticky on mobile
WhatsApp button (very common preference for Spanish-speaking demographic) — link to WhatsApp Business if HomeKey sets one up
"Schedule with bilingual inspector" CTA that pre-fills the booking form

<BilingualContactCard>

  <InspectorAvatar inspector="sebastian" />

  <InspectorAvatar inspector="jay" />

  <h3>Hable directamente con un inspector bilingüe</h3>

  <p>Sebastian y Jay están disponibles para responder sus preguntas en español.</p>

  <ButtonGroup>

    <Button href="tel:+15712813846">📞 Llamar ahora</Button>

    <Button href="https://wa.me/15712813846">💬 WhatsApp</Button>

    <Button href="/es/agendar?bilingual=true">Agendar inspección</Button>

  </ButtonGroup>

</BilingualContactCard>
Mobile-specific behavior
Add a sticky bottom bar on mobile (Spanish pages only) with two buttons: "Llamar" and "WhatsApp"
Use Lucide icons (Phone and MessageCircle) with brand colors


Track 5: Inspector Bio Pages
Goal: Each inspector gets a deep, SEO-rich personal page that builds trust and supports request-by-name booking.
Pages to build
/inspectors

/inspectors/ian-mcnaught          (Principal, leads training, performs specialty)

/inspectors/sebastian-aste        (Bilingual)

/inspectors/jay-carrillo          (Bilingual, retired Marine)

/inspectors/mike-lawson           (Retired Marine, construction background)

/inspectors/darren-melnar         (Texas branch principal)

/inspectors/janet-campana         (Office manager)
Inspector page template
For each inspector, build a page with:

<InspectorPage>

  <Header>

    <Photo src={...} alt={inspectorName} />

    <Name>...</Name>

    <Title>...</Title>

    <CertificationBadges>

      {certifications.map(c => <Badge>{c}</Badge>)}

    </CertificationBadges>

  </Header>

  <Bio>

    {/* Long-form bio combining HomeKey's existing copy with new keyword-rich

        content for areas served and specialties */}

  </Bio>

  <AreasServed>

    {/* List of counties and communities this inspector covers */}

  </AreasServed>

  <Specialties>

    {/* What this inspector is best known for */}

  </Specialties>

  <Testimonials>

    {/* Reviews mentioning this inspector by name */}

  </Testimonials>

  <BookWithMe>

    {/* CTA to book this specific inspector */}

  </BookWithMe>

</InspectorPage>
Reference docs
See 04_Inspector_Pages.md for detailed instructions on the Fauquier County and Spanish-speaking inspector pages.


Track 6: County and Community Landing Pages
Goal: SEO-optimized pages for every NoVA county and major new-construction community. This is how we compete with NextDay's geographic content moat.
Pages to build (county level)
/areas/loudoun-county

/areas/fairfax-county

/areas/prince-william-county

/areas/fauquier-county

/areas/arlington-county

/areas/stafford-county

/areas/montgomery-county-md

/areas/washington-dc
Pages to build (community level — focused on new-build hotspots)
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
County page template
# Home Inspections in [County Name], Virginia

## [Specific positioning for this county based on its character]

[2-3 paragraphs covering:]

- What this county's housing stock is like (mix of older homes, new builds,

  rural properties, etc.)

- Common inspection issues specific to this county

- HomeKey's track record in this county (X inspections completed)

- Who from the team typically inspects in this county

## New construction communities we serve in [County]

[Grid of community cards linking to community pages]

## Common inspection findings in [County]

[3-5 specific examples relevant to this geography]

## What our [County] clients say

[3-5 testimonials filtered to this county]

## Schedule your [County] inspection

[Booking CTA with pre-filled location]
Community page template (smaller, hyper-local)
# Home Inspections in [Community Name]

## Independent inspections for [Community] homebuyers and homeowners.

[1-2 paragraphs about this specific community — typical home types, builders,

year ranges, common features]

## Builders we've inspected in [Community]

[List of builders active in this community: Toll Brothers, Pulte, NVR/Ryan,

M/I Homes, Beazer, etc.]

## Why [Community] new-construction buyers choose HomeKey

[Bullet list: bilingual inspectors, ISO mold lab, thermal imaging standard]

## Schedule in [Community]

[Booking CTA]


Track 7: Pricing Page
Goal: (IMPLEMENTED BASELINE) A real, structured, accessible pricing schedule page with accurate prices (EN + ES).
Page structure
/pricing                                 (Implemented)
Layout
Current implementation in repo:
- /pricing and /pricing/es exist and render the full schedule tables (SFH/Townhouse, Condo, Pre-Drywall, Add-ons, Discounts)
- Pricing values match public/pricing/prices.md

Optional follow-ups (if/when we want them):
- Add a “Build your bundle” calculator section on /pricing (reuse the PricingCalculator UI/logic)
- Add a small FAQ accordion at the bottom (payment methods, what affects price, what’s included, re-inspection policy, satisfaction guarantee)
- De-duplicate pricing rows by parsing/generating from public/pricing/prices.md (instead of hardcoding tables)
Copy
# Pricing

## Quality inspections are never cheap. Cheap inspections are never quality.

[Brief explanation of HomeKey's pricing philosophy — pull from existing site

copy on /the-difference page]

## Inspection pricing — Virginia, Maryland, DC

[Tables built from PRICING markdown file]

## Add-on services

[Add-on table with descriptions and "best paired with" notes]

## Build a custom bundle

[Embedded calculator]

## Frequently asked questions

[Accordion with: payment methods, what affects price, what's included,

re-inspection policy, satisfaction guarantee, etc.]


Track 8: About / The Difference Page
Goal: Combine HomeKey's existing "The Difference" content into a cleaner, more visually engaging "About" page.
Page structure
/about

/about/the-difference  (existing content)

/about/satisfaction-guarantee

/about/training-philosophy
About page copy
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

## Our principles

[Visual treatment — 4 columns]

1. **Train deeper than the state requires** — 6-8 months of in-house training

   in our workshop with real HVAC, panels, and framing

2. **Equip with the best tools** — Thermal cameras, moisture meters, drones,

   33-foot poles, all standard

3. **Take the time the home deserves** — 3-5 hours on site, never rushed

4. **Work for the buyer, never the deal** — We refuse to rush for closing

   timelines

## Meet the team

[Team grid linking to individual inspector pages]

## Awards and certifications

[Logo grid: ASHI ACI, InterNACHI, NRS, AHIT, BBB A+, multiple Angie's List

Super Service Awards, Google Guaranteed]

## Coverage areas

[Embedded map]

## Read our story

[Optional long-form founder origin story — ask Ian for content]


Track 9: Blog / Resources Hub
Goal: Migrate existing blog content and create a structured resources section that supports SEO and provides value to homebuyers.
Page structure
/blog

/blog/[slug]

/resources

/resources/buyers-guide

/resources/sellers-guide

/resources/new-construction-guide

/resources/maintenance-guide

/resources/glossary
Migration tasks
Pull all existing blog posts from current homekeyinspections.com/blog
Convert to MDX format for the new site
Migrate images with next/image optimization
Set up category/tag taxonomy
Add schema.org BlogPosting markup
Implement RSS feed at /blog/rss.xml
Resources guides (new content)
Buyer's Guide:

The 10 highest-dollar defects we find (this is the lead magnet from the original GTM plan)
How to read your inspection report
What to negotiate vs. what to walk away from
Bilingual edition

New Construction Guide:

Why new doesn't mean perfect
The 3-inspection journey explained
How to use your builder warranty
Bilingual edition


Track 10: Contact + Booking Flow
Goal: Convert the booking flow from the current ZIP-code lookup into a modern multi-step booking experience.
Page structure
/contact

/schedule

/schedule/property-type

/schedule/inspections

/schedule/add-ons

/schedule/details

/schedule/confirm
Booking flow
Multi-step form with progress indicator:

Property — Type (single family, townhouse, condo), sqft tier, age (new construction or resale + year built), address with autocomplete
Inspections — Which inspections needed (with bundle calculator visible)
Add-ons — Optional services
Details — Buyer info, agent info (optional), preferred date/time, special requests, language preference (English/Spanish), specific inspector request (optional)
Confirm — Review and submit

After submission:

Trigger confirmation email (Resend or similar)
Send internal notification to scheduling team
Show success page with booking reference and "what to expect" content
Add to Prisma database


Track 11: Realtor Partner Portal
Goal: Build a dedicated section for real estate agents — partnership pitch, co-branding options, referral tracking.
Page structure
/realtors

/realtors/partner

/realtors/co-branded/[partner-slug]

/realtors/resources
Realtor landing page copy
# For Real Estate Agents

## Make your buyer's offer the strongest one on the table.

Inspections shouldn't be a roll-of-the-dice on whether the deal closes.

Partner with HomeKey and your buyers get fast scheduling, thorough reports,

and inspector-led negotiation guidance — making you look smart and protecting

your reputation.

## Why agents partner with us

- Same-or-next-day availability when contingency windows are tight

- Detailed reports with the Create Request List feature — your buyer can

  build a repair addendum in minutes

- Bilingual inspectors when your buyer needs Spanish-language service

- Direct line to inspectors for follow-up questions

- Transparent pricing — no surprise upcharges your buyer wasn't expecting

## Partnership program

- Co-branded landing page with your brokerage

- Volume discount for high-referral agents

- Priority scheduling on your active deals

- Quarterly market reports for your team

## Get started

[Form: agent name, brokerage, email, phone, average inspections referred per

month]


Track 12: Sample Reports + Testimonials Pages
Pages
/sample-reports

/testimonials
Sample reports page
Do NOT create new sample reports. This page is just a curated directory of links to the existing sample reports on the legacy site (DMV). Group by:

- Standard home inspection (DMV): https://www.homegauge.com/report/13617934 and https://www.homegauge.com/report/13581748
- New construction pre-settlement inspection: https://www.homegauge.com/report/13621652
- Pre-drywall inspection: https://www.homegauge.com/report/13621482/HKI-3-PreDrywallInspection.html
- Condo inspection: https://www.homegauge.com/report/13584097
- Row house inspection: https://www.homegauge.com/report/13622335
- Sewer scope sample reports directory: https://homekeyinspections.com/sewer-scope-sample-reports/
- Mold testing sample: https://homekeyinspections.com/wp-content/uploads/Mold-IAQ-Sample_Report.pdf
- Leak detection sample: https://www.homegauge.com/report/13621929/HKI-9.3-LeakDetection.html
- Radon sample: https://homekeyinspections.com/wp-content/uploads/Sample_Radon-1.pdf
- Re-inspection sample: https://www.homegauge.com/report/18361432
- IAQ / VOC samples:
  - Standard: https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Basic-Standard.pdf
  - Predict: https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Retain-Predict.pdf
  - Extensive: https://homekeyinspections.com/wp-content/uploads/IAQ-Extensive-Sample-1.pdf
- Water quality sample: https://homekeyinspections.com/wp-content/uploads/simplewaterdata_com_report_commercial_738a0bc6dc39a41a67b20c.pdf
- Level II chimney sample: https://homekeyinspections.com/wp-content/uploads/Sample-Level-II-Chimney-Inspection.pdf
- Annual inspection sample: https://www.homegauge.com/report/20412681

If we later need Texas samples, make that a separate track after we decide where Texas sample reports should live.
Testimonials page
Filterable by service type
Filterable by inspector name
Filterable by county
Pull from Google, Yelp, Angi, Redfin (cite source per review)


Track 13: Privacy Policy, Terms, and Legal
Pages
/privacy-policy

/terms-of-service

/satisfaction-guarantee

/accessibility-statement

Standard legal pages. Use existing HomeKey privacy policy content and modernize formatting.


Track 14: Performance, SEO, and Analytics
Goal: Optimize the site for Lighthouse 90+ across all categories and integrate analytics.
Tasks
Image optimization audit — every image uses next/image with proper sizes
Code splitting — verify route-level chunking is working
Font optimization — use next/font for Google Fonts
Schema.org markup on every page:
LocalBusiness on homepage and county pages
Service on each service detail page
FAQPage on pages with FAQs
Review on testimonials
BlogPosting on blog
Sitemap generation at /sitemap.xml (use next-sitemap)
Robots.txt configured properly
Google Analytics 4 + Google Tag Manager integration
Conversion event tracking:
Booking form started
Booking form submitted
Phone link clicks
PDF downloads
Language toggle clicks
Microsoft Clarity for heatmaps and session replay (free)


Track 15: Database and Forms Backend
Goal: Stand up Prisma schema and form submission handling.
Prisma schema
model Booking {

  id              String   @id @default(cuid())

  createdAt       DateTime @default(now())

  status          BookingStatus @default(NEW)

  // Property

  propertyType    String

  sqftTier        String

  yearBuilt       Int?

  address         String

  city            String

  state           String

  zip             String

  // Inspections

  preDrywall      Boolean  @default(false)

  preSettlement   Boolean  @default(false)

  warranty11      Boolean  @default(false)

  // Add-ons (JSON for flexibility)

  addons          Json

  // Pricing

  estimatedTotal  Decimal

  // Contact

  buyerName       String

  buyerEmail      String

  buyerPhone      String

  agentName       String?

  agentEmail      String?

  preferredDate   DateTime?

  language        String   @default("en")

  bilingualInspector Boolean @default(false)

  inspectorRequest String?

  notes           String?

  // Tracking

  source          String?  // utm_source

  medium          String?  // utm_medium

  campaign        String?  // utm_campaign

  referrerAgent   String?  // for tracking agent-referred bookings

}

enum BookingStatus {

  NEW

  CONTACTED

  CONFIRMED

  COMPLETED

  CANCELLED

}

model NewsletterSubscriber {

  id              String   @id @default(cuid())

  email           String   @unique

  language        String   @default("en")

  source          String?

  createdAt       DateTime @default(now())

}

model AgentPartner {

  id              String   @id @default(cuid())

  agentName       String

  brokerage       String

  email           String   @unique

  phone           String?

  monthlyVolume   String?

  partnershipTier String?  // standard, volume, brokerage

  coBrandedSlug   String?  @unique

  createdAt       DateTime @default(now())

}
API routes
/api/booking          POST (create new booking)

/api/booking/[id]     GET, PATCH (admin)

/api/newsletter       POST (subscribe)

/api/agent           POST (agent partnership inquiry)

/api/contact         POST (general contact form)


Track 16: Deployment and DevOps
Goal: Ship to production with proper environments and monitoring.
Tasks
Vercel deployment with three environments: production, preview, development
Set up Vercel Postgres or Neon for database
Environment variables documented in .env.example
GitHub Actions for CI:
Type check on PR
Lint on PR
Build verification on PR
Lighthouse CI on preview deployments
Sentry for error tracking
Set up custom domain when ready (subdomain for staging like next.homekeyinspections.com)


Track Order and Dependencies
Track 0 (Foundation)

  ├── Track 1 (New Construction Page) — DONE/SHIPPED (already implemented)

  ├── Track 2 (Homepage)

  ├── Track 3 (Service Pages)

  ├── Track 5 (Inspector Pages)

  └── Track 7 (Pricing Page) — IMPLEMENTED BASELINE (already implemented)

       ├── Track 4 (Bilingual Site) — depends on key pages being built first

       ├── Track 6 (County/Community Pages) — depends on shared location data

       ├── Track 8 (About Page)

       ├── Track 9 (Blog/Resources)

       ├── Track 10 (Contact/Booking)

       ├── Track 11 (Realtor Portal)

       ├── Track 12 (Sample Reports/Testimonials)

       ├── Track 13 (Legal Pages)

       └── Track 15 (Database/Forms) — runs parallel with Track 10

            ├── Track 14 (Performance/SEO/Analytics)

            └── Track 16 (Deployment)


Sitemap Summary
Complete sitemap of pages to be built:

/                                       (Homepage)

/new-construction                       (Implemented)

/services

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

/inspectors

/inspectors/ian-mcnaught

/inspectors/sebastian-aste

/inspectors/jay-carrillo

/inspectors/mike-lawson

/inspectors/darren-melnar

/inspectors/janet-campana

/areas/loudoun-county

/areas/fairfax-county

/areas/prince-william-county

/areas/fauquier-county

/areas/arlington-county

/areas/stafford-county

/areas/montgomery-county-md

/areas/washington-dc

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

/pricing

/about

/about/the-difference

/about/satisfaction-guarantee

/about/training-philosophy

/blog

/blog/[slug]

/resources

/resources/buyers-guide

/resources/sellers-guide

/resources/new-construction-guide

/resources/maintenance-guide

/resources/glossary

/contact

/schedule

/realtors

/realtors/partner

/realtors/co-branded/[partner-slug]

/realtors/resources

/sample-reports

/testimonials

/privacy-policy

/terms-of-service

/satisfaction-guarantee

/accessibility-statement

# Spanish-language equivalents

/es/                                  (Spanish homepage)

/es/nueva-construccion

/es/servicios/inspeccion-de-vivienda

/es/servicios/prueba-de-radon

/es/servicios/prueba-de-moho

/es/servicios/inspeccion-pre-drywall

/es/servicios/inspeccion-de-garantia

/es/servicios/inspeccion-termografica

/es/servicios/sewer-scope

/es/precios

/es/contacto

/es/equipo
