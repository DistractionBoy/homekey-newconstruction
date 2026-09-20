<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Conventions learned from history (see `.agents/LEARNINGS.md`, `.agents/ERRORS.md`)

- **`<Button>` link CTAs use `nativeButton={false}` by default** (base-ui `<Button>` wraps its `render={<Link/>}` in a native `<button>` → nested-interactive invalid HTML). The default is set in `components/ui/button.tsx`; only pass `nativeButton` for genuine `onClick`/`type="submit"` buttons (e.g. `components/ui/carousel.tsx` prev/next). Prefer a dedicated link-button component over sprinkling the prop.
- **`public/sitemap.xml` is a generated artifact** (`postbuild: "next-sitemap"`; `next-sitemap.config.js`). Don't hand-edit or rely on the checked-in copy — create the route before linking to it; confirm with the team whether the committed file is served statically.
- **Set `metadataBase` in `app/layout.tsx` and size interactive/tap controls ≥44px up front**, and verify Lighthouse locally (`lhci`) before pushing — don't add CI fixes with unverified "try/hopefully" commits.
- **Verify before committing**: this Conductor workspace may ship without `node_modules`; run `npm install` then `npm run lint` / `npm run build` to confirm changes.
