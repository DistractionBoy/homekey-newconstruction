# Implementation Plan: Bilingual Support — /es/

Track ID: `bilingual_es_20260502`

---

## Phase 1: next-intl Setup + Routing

- [ ] Task: Install and configure `next-intl`
    - [ ] `npm install next-intl`
    - [ ] Create `messages/en.json` and `messages/es.json` with initial keys
    - [ ] Update `next.config.ts` with i18n routing config
    - [ ] Create `middleware.ts` with locale detection logic

- [ ] Task: Set up `[locale]` routing
    - [ ] Move existing routes under `/[locale]/` or configure next-intl without path prefix for `en`
    - [ ] Verify `/` still works (en default) and `/es/` resolves

- [ ] Task: Add `hreflang` tags to root layout metadata
    - [ ] `<link rel="alternate" hreflang="en" href="..." />`
    - [ ] `<link rel="alternate" hreflang="es" href="..." />`

- [ ] Task: Add language toggle to NavBar
    - [ ] "EN | ES" switcher
    - [ ] Switches to equivalent page (not homepage)
    - [ ] Persists preference in localStorage

- [ ] Task: Conductor - User Manual Verification 'Phase 1: next-intl Setup' (Protocol in workflow.md)

---

## Phase 2: BilingualContactCard + Mobile Sticky Bar

- [ ] Task: Build `BilingualContactCard` component
    - [ ] Inspector avatars for Sebastian and Jay
    - [ ] h3 heading, description paragraph
    - [ ] Three buttons: tel: (Llamar), WhatsApp, Agendar inspección
    - [ ] Phone: tel:+15712813846, WhatsApp: https://wa.me/15712813846

- [ ] Task: Build `SpanishMobileStickyBar` component
    - [ ] Sticky bottom bar: "Llamar" (Phone icon) + "WhatsApp" (MessageCircle icon)
    - [ ] Only rendered on `/es/` routes (check locale in component)
    - [ ] Brand colors

- [ ] Task: Write unit tests for BilingualContactCard
    - [ ] All three button links correct
    - [ ] Phone number format matches

- [ ] Task: Conductor - User Manual Verification 'Phase 2: BilingualContactCard + Sticky Bar' (Protocol in workflow.md)

---

## Phase 3: Spanish Homepage (/es/)

- [ ] Task: Create `app/es/page.tsx` (or `/[locale]` equivalent)
    - [ ] Spanish hero copy (see spec.md)
    - [ ] All homepage sections translated
    - [ ] BilingualContactCard in hero/footer area
    - [ ] SpanishMobileStickyBar

- [ ] Task: Wire Spanish homepage to same section components as EN homepage
    - [ ] Pass translated strings as props or via useTranslations hook

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Spanish Homepage' (Protocol in workflow.md)

---

## Phase 4: Spanish Service + Utility Pages

- [ ] Task: `/es/nueva-construccion` — translate /new-construction
- [ ] Task: `/es/servicios/inspeccion-de-vivienda` — Home Inspection
- [ ] Task: `/es/servicios/prueba-de-radon` — Radon Testing
- [ ] Task: `/es/servicios/prueba-de-moho` — Mold Testing
- [ ] Task: `/es/servicios/inspeccion-pre-drywall` — Pre-Drywall
- [ ] Task: `/es/servicios/inspeccion-de-garantia` — Warranty Inspection
- [ ] Task: `/es/servicios/inspeccion-termografica` — Thermal Imaging
- [ ] Task: `/es/servicios/sewer-scope` — Sewer Scope
- [ ] Task: `/es/precios` — Pricing (reuse PricingSchedule component with Spanish labels)

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Spanish Service Pages' (Protocol in workflow.md)

---

## Phase 5: /es/contacto + /es/equipo

- [ ] Task: `/es/contacto`
    - [ ] Spanish contact form
    - [ ] BilingualContactCard prominently placed
    - [ ] Sticky WhatsApp/Call bar

- [ ] Task: `/es/equipo`
    - [ ] Team page highlighting Sebastian Aste and Jay Carrillo as bilingual inspectors
    - [ ] Full team grid with language badges

- [ ] Task: Conductor - User Manual Verification 'Phase 5: Contact + Team' (Protocol in workflow.md)

---

## Phase 6: QA & Final Checks

- [ ] Task: Verify hreflang tags on all page pairs
- [ ] Task: Verify language-detection middleware redirects Spanish Accept-Language headers
- [ ] Task: Verify language toggle navigates to equivalent page (not homepage)
- [ ] Task: Verify BilingualContactCard appears on /es/ homepage, all /es/ footers, /es/contacto
- [ ] Task: Verify SpanishMobileStickyBar only shows on /es/ routes
- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Conductor - User Manual Verification 'Phase 6: QA & Final Checks' (Protocol in workflow.md)
