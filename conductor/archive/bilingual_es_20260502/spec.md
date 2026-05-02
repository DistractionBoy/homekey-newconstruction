# Spec: Bilingual Support — /es/ Spanish Site Section

## Overview
Stand up a complete Spanish-language version of the site that positions HomeKey
as the only Northern Virginia inspection team that takes Spanish-speaking buyers
seriously. The /es/ section is a first-class experience, not a machine-translated
afterthought.

## Routing Setup
- Configure `next-intl` with two locales: `en` (default) and `es`
- Update routing to use `/[locale]/` structure under App Router
- Add language-detection middleware that routes Spanish-language browsers to `/es/`
  automatically (with override option)
- Add `hreflang` tags in metadata for SEO

## Pages to Build (priority order)
```
/es/                                      (Spanish homepage)
/es/nueva-construccion                    (translates /new-construction)
/es/servicios/inspeccion-de-vivienda      (Home Inspection)
/es/servicios/prueba-de-radon             (Radon Testing)
/es/servicios/prueba-de-moho             (Mold Testing)
/es/servicios/inspeccion-pre-drywall      (Pre-Drywall)
/es/servicios/inspeccion-de-garantia     (Warranty Inspection)
/es/servicios/inspeccion-termografica    (Thermal Imaging)
/es/servicios/sewer-scope                (Sewer Scope)
/es/precios                              (Pricing)
/es/contacto                             (Contact)
/es/equipo                               (Meet the team)
```

## Translation Requirements
- **Professional translation only** — no machine translation committed to production
- Have Sebastian Aste or Jay Carrillo review for real-estate terminology accuracy
- Budget: $500–$1,500 for all pages
- Translation files live in `messages/es.json` (next-intl format)

## Spanish Hero Copy
```
<h1>Inspección completa. Informe bilingüe. El mismo rigor, en su idioma.</h1>
<p>HomeKey Inspections es el único equipo de inspección en Northern Virginia
que ofrece inspectores bilingües certificados por ASHI, con cámaras
termográficas y laboratorio acreditado ISO para el análisis de moho.
Su hogar. Su idioma. Sin traducciones a medias.</p>
<Button>[Reservar inspección →]</Button>
<Button>[Ver informe de ejemplo]</Button>
```

## Bilingual Inspector Contact Card
Appears on Spanish homepage, every page footer (Spanish routes), and /es/contacto:

```tsx
<BilingualContactCard>
  <InspectorAvatar inspector="sebastian" />
  <InspectorAvatar inspector="jay" />
  <h3>Hable directamente con un inspector bilingüe</h3>
  <p>Sebastian y Jay están disponibles para responder sus preguntas en español.</p>
  <ButtonGroup>
    <Button href="tel:+15712813846">Llamar ahora</Button>
    <Button href="https://wa.me/15712813846">WhatsApp</Button>
    <Button href="/es/agendar?bilingual=true">Agendar inspección</Button>
  </ButtonGroup>
</BilingualContactCard>
```

## Mobile Sticky Bar (Spanish pages only)
- Sticky bottom bar with two buttons: "Llamar" and "WhatsApp"
- Lucide icons: `Phone` and `MessageCircle`
- Brand colors, only shown on `/es/` routes
- Dismissed on scroll-up (optional) — but always visible at bottom

## /es/equipo Page — Team Spotlight
Highlight Sebastian Aste and Jay Carrillo as the lead bilingual inspectors.
Include full team grid with language indicator badges on bilingual members.

## Language Toggle
- Toggle in NavBar: "EN | ES"
- Switches between equivalent pages (not just redirects to homepage)
- Persists language preference in localStorage

## Acceptance Criteria
- [ ] All /es/ routes render correct Spanish content
- [ ] `hreflang` tags present on all page pairs
- [ ] Language-detection middleware redirects Spanish browsers to /es/
- [ ] Language toggle switches between equivalent pages
- [ ] BilingualContactCard appears on Spanish homepage, footer, and /es/contacto
- [ ] Mobile sticky bar visible only on /es/ routes
- [ ] WhatsApp and tel: links use correct phone number (571-281-3846)
- [ ] `npm run build` and `npm run lint` pass with no errors
- [ ] `npm test` passes

## Out of Scope
- Machine translation of any copy
- Spanish versions of blog posts (Track 9 follow-up)
- Spanish booking flow UI (Track 10 can add language param support)
