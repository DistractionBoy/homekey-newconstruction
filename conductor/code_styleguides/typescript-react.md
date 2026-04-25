# TypeScript & React Style Guide

## TypeScript

- Prefer `type` over `interface` for component props; use `interface` only for extendable contracts
- No `any` — use `unknown` and narrow, or define a proper type
- Export prop types alongside their component: `export type HeroProps = { ... }`
- Use `satisfies` for config objects where inference should be preserved
- Avoid type assertions (`as`) except at true system boundaries (e.g., API responses)

## React Components

- One component per file; filename matches the exported component name (PascalCase)
- Prefer function declarations over arrow functions for top-level components
- Keep components small — if JSX exceeds ~60 lines, extract a sub-component
- No default exports for utility functions or hooks; default exports for page/layout components only
  (Next.js App Router requires it)
- Derive state from props where possible; avoid redundant `useState` that mirrors a prop

## Hooks

- Custom hooks live in `hooks/` and are prefixed `use`
- A hook that fetches data returns `{ data, isLoading, error }` — never throws to the render tree
- No business logic inside components — extract to hooks or utility functions

## File & Folder Naming

- Components: `PascalCase.tsx` (e.g., `BundleCard.tsx`)
- Hooks: `camelCase.ts` prefixed with `use` (e.g., `usePriceCalculator.ts`)
- Utilities: `camelCase.ts` (e.g., `formatCurrency.ts`)
- All files under `app/` follow Next.js App Router conventions (`page.tsx`, `layout.tsx`, `loading.tsx`)

## Props

- Destructure props at the function signature: `function Card({ title, price }: CardProps)`
- Boolean props use the shorthand: `<Card featured />` not `<Card featured={true} />`
- Avoid passing raw objects as props when a flat shape would work

## Comments

- No comments explaining what the code does — names should do that
- One-line comments only, and only when the WHY is non-obvious
