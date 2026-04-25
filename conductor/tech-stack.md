# Tech Stack

## Core Framework
- **Next.js 16.2.4** — App Router; pages live under `app/`
- **React 19.2.4**
- **TypeScript 5**

## Styling
- **Tailwind CSS v4** — utility-first CSS; configured via `postcss.config.mjs`
- **shadcn/ui 4.x** — component library built on `@base-ui/react` (not Radix UI); initialized via `npx shadcn@latest init`

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

## Key Conventions
- All routes and layouts follow the Next.js App Router file convention (`page.tsx`, `layout.tsx`)
- Spanish route: `app/new-construction/es/page.tsx`; English route: `app/new-construction/page.tsx`
- shadcn/ui components are added to `components/ui/` via `npx shadcn@latest add <component>`
- **shadcn 4.x uses `render={<element />}` prop instead of `asChild`** — all Base UI components use this pattern; e.g. `<Button render={<a href="..." />}>label</Button>`
- Global styles and brand tokens live in `app/globals.css`
- HomeKey brand tokens: `--color-hk-green-dark/light`, `--color-builder-red-dark/light`, `--color-stage-purple-dark/light`
