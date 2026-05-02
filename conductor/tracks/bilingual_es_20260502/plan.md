# Implementation Plan: Bilingual Support — /es/

Track ID: `bilingual_es_20260502`

Note: Implemented as Option B (explicit /es/ routes, no next-intl restructuring) per user decision.
The existing /new-construction/es and /pricing/es remain in place.

---

## Phase 1: Components

- [x] Task: Build `BilingualContactCard` component
    - [x] Inspector avatars for Sebastian and Jay
    - [x] h3 heading, description paragraph
    - [x] Three buttons: tel: (Llamar), WhatsApp, Agendar inspección
    - [x] Phone: tel:+15712813846, WhatsApp: https://wa.me/15712813846

- [x] Task: Build `SpanishMobileStickyBar` component
    - [x] Sticky bottom bar: "Llamar" (Phone icon) + "WhatsApp" (MessageCircle icon)
    - [x] Only rendered on `/es/` routes (usePathname check)
    - [x] Brand colors

- [x] Task: Build `SpanishServiceDetailPage` component
    - [x] Spanish UI labels throughout
    - [x] Includes BilingualContactCard before final CTA
    - [x] enHref prop for language toggle

- [x] Task: Write unit tests for BilingualContactCard
    - [x] All three button links correct
    - [x] Phone number format matches

---

## Phase 2: Spanish Homepage

- [x] Task: Create `app/es/page.tsx`
    - [x] Spanish hero copy from spec
    - [x] BilingualContactCard
    - [x] Services grid linking to /es/ pages
    - [x] Why HomeKey differentiators
    - [x] Team spotlight (Sebastian + Jay)
    - [x] CoverageMap reuse
    - [x] SpanishMobileStickyBar

---

## Phase 3: Spanish Service Data + Pages

- [x] Task: Spanish service data files (app/es/_data/services/)
    - [x] inspeccion-de-vivienda.ts
    - [x] prueba-de-radon.ts
    - [x] prueba-de-moho.ts
    - [x] inspeccion-pre-drywall.ts
    - [x] inspeccion-de-garantia.ts
    - [x] inspeccion-termografica.ts
    - [x] sewer-scope.ts

- [x] Task: Spanish service pages
    - [x] /es/servicios/inspeccion-de-vivienda
    - [x] /es/servicios/prueba-de-radon
    - [x] /es/servicios/prueba-de-moho
    - [x] /es/servicios/inspeccion-pre-drywall
    - [x] /es/servicios/inspeccion-de-garantia
    - [x] /es/servicios/inspeccion-termografica
    - [x] /es/servicios/sewer-scope
    - [x] /es/servicios (index)

---

## Phase 4: Utility Pages + Nueva Construcción + Precios

- [x] Task: /es/nueva-construccion — reuse content.es
- [x] Task: /es/precios — reuse pricingPageEs + BilingualContactCard
- [x] Task: /es/contacto
- [x] Task: /es/equipo — bilingual inspector spotlight + full team grid

---

## Phase 5: QA & Final Checks

- [x] Task: Run `npx vitest run` — all passing
- [x] Task: Run `npm run build` — all 13 /es/ pages build cleanly
- [x] Task: Run `npm run lint` — no errors
- [x] Task: Verify hreflang alternates on all /es/ pages
- [x] Task: Verify BilingualContactCard appears on /es/ homepage, service pages, contacto
- [x] Task: Verify SpanishMobileStickyBar only shows on /es/ routes
