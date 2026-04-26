# Tech Stack

## Core Framework
- **Next.js 16.2.4** — App Router; pages live under `app/`
- **React 19.2.4**
- **TypeScript 5**

## Styling
- **Tailwind CSS v4** — utility-first CSS; configured via `postcss.config.mjs`
- **shadcn/ui 4.x** — component library built on `@base-ui/react` (not Radix UI); initialized via `npx shadcn@latest init`
  - Components added so far: `badge`, `button`, `card`, `checkbox`, `input`, `select`, `separator`, `sheet`, `carousel`

## Animation
- **Framer Motion 12.x** — motion animations; use `useMemo` to instantiate plugins (avoids `react-hooks/refs` lint error)
- **embla-carousel-autoplay 8.x** — autoplay plugin for shadcn Carousel
- **react-intersection-observer 10.x** — `useInView` hook for triggering scroll-based animations; used by `AnimatedNumber`

## Reusable Animation Components
- **`AnimatedNumber`** (`components/ui/AnimatedNumber.tsx`) — count-up animation on scroll-into-view; `"use client"`; props: `value: number`, `suffix?: string`
- **`FadeUpSection`** (`components/ui/FadeUpSection.tsx`) — fade+lift wrapper on scroll-into-view; `"use client"`; props: `children`, `className?`

## Reusable Visual Components
- **`ReviewerAvatar`** (`components/ui/ReviewerAvatar.tsx`) — initials avatar with deterministic color palette; no image files required; props: `name: string`, `color?: string`

## Fonts
- **Geist Sans** + **Geist Mono** — loaded via `next/font/google` in `app/layout.tsx`

## Testing
- **Vitest 4.x** — unit test runner with jsdom environment; config at `vitest.config.ts`
- **@testing-library/react 16.x** — component rendering and assertions
- **@vitest/coverage-v8** — V8-based coverage provider; run via `npm run coverage`
- Coverage target: ≥80% statements/functions/lines across `lib/` and `components/` (excluding `components/ui/`)

## Tooling
- **ESLint 9** with `eslint-config-next` — linting via `npm run lint`
- **npm** — package manager

## Scripts
| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest (single pass) |
| `npm run test:watch` | Run Vitest in watch mode |
| `npm run coverage` | Run Vitest with V8 coverage report |

## Brand Tokens & Styling Conventions
- Brand color tokens defined in `app/globals.css` `@theme inline` block as `--color-brand-*` (primary, primaryDark, ink, paper, trust, growth, alert, warmth)
- All interactive buttons use `hover:scale-[1.02] hover:shadow-md transition-all duration-200`
- Section eyebrow labels alternate: `text-brand-primary` → `text-brand-trust` → `text-brand-growth` for visual rhythm

## Key Conventions
- All routes and layouts follow the Next.js App Router file convention (`page.tsx`, `layout.tsx`)
- Spanish route: `app/new-construction/es/page.tsx`; English route: `app/new-construction/page.tsx`
- shadcn/ui components are added to `components/ui/` via `npx shadcn@latest add <component>`
- **shadcn 4.x uses `render={<element />}` prop instead of `asChild`** — all Base UI components use this pattern; e.g. `<Button render={<a href="..." />}>label</Button>`
- Global styles and brand tokens live in `app/globals.css`
- HomeKey brand tokens: `--color-hk-green-dark/light`, `--color-builder-red-dark/light`, `--color-stage-purple-dark/light`
- **`next/image` `priority` prop is deprecated in Next.js 16** — use `loading="eager"` for above-fold images instead
- **All `next/image` instances with `fill` must include a `sizes` prop** — e.g. `sizes="100vw"` for full-width backgrounds, `sizes="(max-width: 768px) 100vw, 50vw"` for half-width
- Stage illustrations in `BundleTimeline` are inline React SVG components (not `next/image`) so they inherit `currentColor` for accent color theming
- **`matchMedia`, `ResizeObserver`, `IntersectionObserver` mocked globally in `vitest.setup.ts`** — required by embla-carousel-react in jsdom
- Feature-specific components live in `components/new-construction/` (alongside their `.test.tsx` files)
