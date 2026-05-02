# Implementation Plan: Blog / Resources Hub

Track ID: `blog_resources_20260502`

---

## Phase 1: MDX Infrastructure + Content Architecture

- [ ] Task: Install MDX dependencies
    - [ ] `npm install @next/mdx @mdx-js/loader @mdx-js/react`
    - [ ] Configure `next.config.ts` for MDX

- [ ] Task: Create content directory structure
    - [ ] `content/blog/` — MDX files for blog posts
    - [ ] `content/resources/` — MDX files for resource guides
    - [ ] Frontmatter schema: title, date, excerpt, tags, category, author, featured_image, slug

- [ ] Task: Build `lib/mdx.ts` utilities
    - [ ] `getAllPosts()` — read and parse all blog post frontmatter
    - [ ] `getPostBySlug(slug)` — read full MDX content
    - [ ] `getAllResourceGuides()` — read and parse resource guide frontmatter

- [ ] Task: Write 3 placeholder blog posts in `content/blog/` to unblock development

- [ ] Task: Conductor - User Manual Verification 'Phase 1: MDX Infrastructure' (Protocol in workflow.md)

---

## Phase 2: /blog Listing Page + Post Pages

- [ ] Task: Create `app/blog/page.tsx`
    - [ ] Paginated listing (12 per page)
    - [ ] Featured post hero at top
    - [ ] Card grid: image, title, excerpt, date, author, read time
    - [ ] Category filter buttons

- [ ] Task: Create `app/blog/[slug]/page.tsx`
    - [ ] Render MDX content with custom components
    - [ ] `generateStaticParams` from MDX files
    - [ ] schema.org `BlogPosting` JSON-LD in `<head>`
    - [ ] Correct metadata: title, description, OG tags

- [ ] Task: Implement RSS feed at `app/blog/rss.xml/route.ts`
    - [ ] Valid RSS 2.0
    - [ ] All posts included

- [ ] Task: Write blog listing test
    - [ ] Renders post cards
    - [ ] RSS route returns 200 with correct Content-Type

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Blog Pages' (Protocol in workflow.md)

---

## Phase 3: /resources Hub + Buyer's Guide + New Construction Guide

- [ ] Task: Create `app/resources/page.tsx`
    - [ ] Hub overview with cards linking to each guide

- [ ] Task: Create `content/resources/buyers-guide.mdx`
    - [ ] Top 10 highest-dollar defects
    - [ ] How to read your inspection report
    - [ ] What to negotiate vs. walk away from

- [ ] Task: Create `content/resources/new-construction-guide.mdx`
    - [ ] Why new doesn't mean perfect
    - [ ] The 3-inspection journey
    - [ ] Builder warranty guide

- [ ] Task: Create `app/resources/buyers-guide/page.tsx` and `new-construction-guide/page.tsx`

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Resources Hub + Priority Guides' (Protocol in workflow.md)

---

## Phase 4: Remaining Guides + Glossary

- [ ] Task: Create `content/resources/sellers-guide.mdx` and page
- [ ] Task: Create `content/resources/maintenance-guide.mdx` and page
- [ ] Task: Create `content/resources/glossary.mdx`
    - [ ] A–Z terms, alphabetical index
- [ ] Task: Create `app/resources/glossary/page.tsx`

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Remaining Guides + Glossary' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Validate RSS feed at /blog/rss.xml with RSS validator
- [ ] Task: Verify schema.org BlogPosting markup on a post page
- [ ] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
