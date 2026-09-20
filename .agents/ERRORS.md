# Errors

---

## [ERR-20260912-001] nested-interactive-html

**Logged**: 2026-09-12T21:39:38Z
**Priority**: high
**Status**: pending
**Area**: frontend

### Summary
`<Button render={<Link/>}>` renders a native `<button>` wrapping an `<a>` → nested interactive elements.

### Error
Invalid HTML / a11y: `<button>` containing another `<a>`/interactive element. Fails
`a11y/nested-interactive` type checks and lowers Lighthouse Accessibility.

### Context
- `components/ui/button.tsx` forwards to `@base-ui/react` `Button`, which defaults to a native
  `<button>`. Every CTA uses `render={<Link/>}` (or `<a>`).
- Root-cause fix applied: `Button` now defaults `nativeButton={false}` (correct for the link/CTA
  case). `components/ui/carousel.tsx` prev/next buttons use `onClick` and were opted back in with
  `nativeButton`.
- Could not build/lint here to confirm — see ERR-20260912-002.

### Suggested Fix
Keep `nativeButton={false}` as the wrapper default; pass `nativeButton` explicitly only for genuine
click/submit buttons (carousel prev/next). Prefer a dedicated link-button component to make the
intent structural.

### Resolution
- **Resolved**: 2026-09-13T07:40:00Z
- **Notes**: Build + lint verified after `npm install`. `next build` compiles and prerenders all
  routes; `npx eslint .` clean. Caveat discovered: defaulting `nativeButton={false}` does NOT remove
 the `role="button"` base-ui injects via `useButton` — see ERR-20260912-004.

### Metadata
- Reproducible: yes
- Related Files: components/ui/button.tsx, components/ui/carousel.tsx
- Pattern-Key: frontend.nested-interactive-html
- Recurrence-Count: 1
---

## [ERR-20260912-002] build-not-possible

**Logged**: 2026-09-12T21:39:38Z
**Priority**: medium
**Status**: pending
**Area**: infra

### Summary
This workspace has no `node_modules`, so `npm run lint` / `next build` cannot be run to verify changes.

### Error
`node_modules` is absent (0 entries) and lockfile is missing in this Conductor workspace;
`@base-ui/react` is not installed, so the `nativeButton` prop behavior cannot be runtime-verified.

### Context
- Attempted verification after defaulting `nativeButton={false}` in `components/ui/button.tsx`.
- The change is self-consistent by construction (link CTAs → non-native; carousel `onClick` buttons
  → explicitly native), but no build/test confirmation was possible.

### Suggested Fix
Run `npm install` then `npm run lint` and `npm run build` to confirm the carousel still scrolls and
that link CTAs no longer produce nested-interactive buttons. A redundant-`nativeButton={false}`
cleanup across the ~49 call sites is safe only after this passes.

### Resolution
- **Resolved**: 2026-09-13T07:40:00Z
- **Notes**: `npm install` then `npx next build` (exit 0, all 73 routes prerendered) and
  `npx eslint .` (clean) both pass. Verification now possible in this workspace after install.

### Metadata
- Reproducible: yes
- Related Files: package.json, components/ui/button.tsx, components/ui/carousel.tsx
- Pattern-Key: infra.node-modules-missing
- Recurrence-Count: 1
---

## [ERR-20260912-004] cta-link-role-mismatch

**Logged**: 2026-09-13T07:40:00Z
**Priority**: high
**Status**: pending
**Area**: tests

### Summary
11 tests assert CTAs are `role="link"` but base-ui `<Button render={<a/>}>` renders `role="button"`.

### Error
`TestingLibraryElementError: Unable to find an accessible element with the role "link"` — the CTA
`<a href=...>` is emitted with `role="button"` because base-ui `Button` always calls
`useButton({ native })` and `getButtonProps()` injects `role="button"` regardless of `nativeButton`.
Fails in HeroSection, HomepageHero, FinalCTA, BilingualContactCard, MobileStickyCTA,
PricingCalculator, app/about/page, TestimonialsSection, es pages.

### Context
- Discovered while verifying the dependency audit fix (`next` 16.2.4→16.3.5). Confirmed **pre-existing**
  by stashing the `button.tsx`/`carousel.tsx` edits and re-running: the same tests fail on the
  baseline, so this is NOT caused by the audit bumps or the `nativeButton` default.
- Root cause is the same family as ERR-20260912-001 (Button-as-link), on the a11y/role side.
  `getByRole('link')` won't match a `<a role="button">`.

### Suggested Fix
Two options: (a) give CTA links a proper `link` role — a dedicated link-button that passes
 `role="link"` and omits `useButton`'s button role; or (b) update the 11 tests to query the visible
 text / an accessible name instead of `role="link"`. Decide which reflects intended a11y semantics.
 Note this is independent of the audit work; fix it deliberately, don't bundle it into the audit bump.

### Metadata
- Reproducible: yes
- Related Files: components/sections/HeroSection.test.tsx, components/HomepageHero.test.tsx, components/sections/FinalCTA.test.tsx, components/es/BilingualContactCard.test.tsx, components/MobileStickyCTA.test.tsx
- Pattern-Key: tests.cta-role-mismatch
- Recurrence-Count: 1
---

## [ERR-20260912-003] lighthouse-ci-flaky

**Logged**: 2026-09-12T21:39:38Z
**Priority**: medium
**Status**: pending
**Area**: infra

### Summary
Lighthouse CI required 4 sequential fix commits; several were unverified guesses.

### Error
Repeated Lighthouse CI failures; commits `446264d`, `cf5111a`, `628d9cd`, `97858ab` each
partially addressed it ("try fixing lighthouse in CI", "pass hopefully").

### Context
- Missing `metadataBase`, missing/wait-on server startup, and small a11y tap-target sizing were all
  discovered piecemeal rather than checked up front.

### Suggested Fix
Set `metadataBase` + LHC workflow config in one pass; size interactive/tap controls to ≥44px by
default; verify with a local `lhci` run before pushing CI changes.

### Metadata
- Reproducible: yes
- Related Files: .github/workflows/lighthouse.yml, lighthouserc.json, app/layout.tsx
- Pattern-Key: infra.ci-repeated-fix
- Recurrence-Count: 1
---
