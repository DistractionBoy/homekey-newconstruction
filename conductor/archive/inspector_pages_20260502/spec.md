# Spec: Inspector Bio Pages (/inspectors)

## Overview
Each inspector gets a deep, SEO-rich personal page that builds trust and
supports request-by-name booking. These pages rank for "[inspector name]
home inspector" queries and support word-of-mouth referrals where clients
recommend a specific inspector to friends.

## Pages to Build
```
/inspectors                        (team index)
/inspectors/ian-mcnaught           (Principal, leads training, specialty inspections)
/inspectors/sebastian-aste         (Bilingual EN/ES)
/inspectors/jay-carrillo           (Bilingual EN/ES, retired Marine)
/inspectors/mike-lawson            (Retired Marine, construction background)
/inspectors/darren-melnar          (Texas branch principal)
/inspectors/janet-campana          (Office manager)
```

## Page Template
```tsx
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
    {/* Long-form bio: HomeKey existing copy + keyword-rich content
        covering areas served and specialties */}
  </Bio>

  <AreasServed>
    {/* Counties and communities this inspector covers */}
  </AreasServed>

  <Specialties>
    {/* What this inspector is known for */}
  </Specialties>

  <Testimonials>
    {/* Reviews mentioning this inspector by name */}
  </Testimonials>

  <BookWithMe>
    {/* CTA to book this specific inspector — links to /schedule?inspector=<slug> */}
  </BookWithMe>
</InspectorPage>
```

## Inspector Data

### Ian McNaught — Principal Inspector
- Certifications: ASHI ACI, InterNACHI CPI, AHIT
- Specialties: Advanced training oversight, specialty inspections, thermal imaging
- Areas: Loudoun, Fairfax, Fauquier, Prince William

### Sebastian Aste — Bilingual Inspector (EN/ES)
- Certifications: ASHI, InterNACHI
- Specialties: New construction, bilingual service (English/Spanish)
- Areas: Loudoun, Fairfax, Prince William
- Languages: English, Spanish

### Jay Carrillo — Bilingual Inspector (EN/ES), Retired Marine
- Certifications: ASHI, InterNACHI
- Specialties: Military relocation inspections, bilingual service, new construction
- Areas: Prince William, Fauquier, Stafford
- Languages: English, Spanish
- Background: Retired USMC

### Mike Lawson — Inspector, Retired Marine
- Certifications: ASHI, InterNACHI
- Specialties: Construction background, pre-drywall inspections
- Areas: Fairfax, Arlington, Montgomery County MD

### Darren Melnar — Texas Branch Principal
- Certifications: TREC licensed, InterNACHI
- Specialties: Texas market, new construction (Austin metro)
- Areas: Williamson County, Travis County, Hays County

### Janet Campana — Office Manager
- Role: Scheduling, client communications, operations
- No inspection certifications — page focuses on her experience and role

## /inspectors Index Page
Grid of all inspector cards — photo, name, title, certifications, languages spoken, "View profile" link.

## SEO Considerations
- Each page title: "[Name] — HomeKey Home Inspector, [County] VA"
- Each page includes LocalBusiness and Person schema.org markup
- Bio content should organically include county names, certifications, service types

## Acceptance Criteria
- [ ] All 6 inspector pages + /inspectors index render without errors
- [ ] Each page has unique `<title>` and `<meta description>`
- [ ] Book-with-me CTA links to /schedule pre-filled with inspector param
- [ ] Bilingual badge visually distinguishes Sebastian and Jay
- [ ] `npm run build` and `npm run lint` pass with no errors
- [ ] `npm test` passes

## Out of Scope
- Real-time availability calendar
- Spanish translations of bio pages (Track 4 follow-up)
- Photo uploads (use existing photos from public/ or placeholder)
