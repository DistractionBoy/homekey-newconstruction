# Tech Stack

## Core Framework
- **Next.js 16.2.4** — App Router; pages live under `app/`
- **React 19.2.4**
- **TypeScript 5**

## Styling
- **Tailwind CSS v4** — utility-first CSS; configured via `postcss.config.mjs`
- **shadcn/ui** — component library built on Radix UI primitives; to be initialized and themed to match homekeyinspections.com

## Fonts
- **Geist Sans** + **Geist Mono** — loaded via `next/font/google` in `app/layout.tsx`

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

## Key Conventions
- All routes and layouts follow the Next.js App Router file convention (`page.tsx`, `layout.tsx`)
- Spanish route lives at `app/new-construction/es/page.tsx`; English at `app/new-construction/page.tsx` (or root `app/page.tsx` for this project)
- shadcn/ui components are added to `components/ui/` via the shadcn CLI
- Global styles live in `app/globals.css`
