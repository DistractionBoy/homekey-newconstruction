# Next.js, Tailwind CSS v4 & shadcn/ui Style Guide

## Next.js App Router

- All routes live under `app/`; use nested folders for nested routes
- `page.tsx` — the publicly accessible UI for a route segment
- `layout.tsx` — shared shell; keep root layout minimal (fonts, metadata, body wrapper only)
- `loading.tsx` — Suspense boundary UI; use for async data pages
- Server Components are the default; add `"use client"` only when you need interactivity or
  browser APIs (event handlers, useState, useEffect)
- Fetch data in Server Components; pass results down as props to Client Components
- Use `next/image` for all images — never a raw `<img>` tag
- Use `next/link` for all internal navigation — never a raw `<a>` tag for internal hrefs
- Metadata (title, description, hreflang) is exported from `page.tsx` using the `metadata` or
  `generateMetadata` API — never via raw `<head>` tags

## Tailwind CSS v4

- Tailwind v4 uses a CSS-first config — theme tokens are defined in `globals.css` via `@theme`,
  not in `tailwind.config.js`
- Utility classes are the default styling mechanism; avoid inline `style` props unless a value is
  dynamic and cannot be expressed as a Tailwind class
- Use semantic token names for brand colors (e.g., `bg-homekey-green`, `text-builder-red`) defined
  in the theme, not raw hex values in class strings
- Responsive variants follow mobile-first order: base → `sm:` → `md:` → `lg:`
- Dark mode: use `dark:` variants; do not write separate dark stylesheets
- No `!important` overrides — restructure the component instead

## shadcn/ui

- Components are added via `npx shadcn@latest add <component>` — never copy-paste from the docs
- Added components live in `components/ui/` and are owned by this project (edit freely)
- Compose shadcn primitives into project-specific components in `components/` (one level up)
  rather than using shadcn components directly in page files
- The shadcn theme (CSS variables) is configured in `globals.css`; match to homekeyinspections.com
  brand colors at initialization
- Prefer shadcn's `Button`, `Card`, `Badge`, `Separator` over hand-rolling equivalents
- Use `cn()` (from `lib/utils.ts`) for conditional class merging — never string concatenation

## Bilingual Routing

- English: `app/(marketing)/new-construction/page.tsx`
- Spanish: `app/(marketing)/new-construction/es/page.tsx`
- Shared section components accept a `lang: "en" | "es"` prop for copy switching
- `hreflang` alternates are set via `generateMetadata` in each page

## Performance

- Images use `priority` on hero images only; all others are lazy-loaded
- Fonts are loaded via `next/font` — no external font `<link>` tags
- No third-party scripts in `<head>` without `next/script` and an appropriate `strategy`
