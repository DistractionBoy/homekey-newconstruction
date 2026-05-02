# Spec: Blog / Resources Hub (/blog, /resources)

## Overview
Migrate existing blog content from homekeyinspections.com/blog to MDX format
and build a structured resources section. This supports organic SEO and
provides high-value content for homebuyers.

## Pages to Build
```
/blog                        (listing page, paginated)
/blog/[slug]                 (individual post)
/blog/rss.xml                (RSS feed)
/resources                   (resources hub)
/resources/buyers-guide
/resources/sellers-guide
/resources/new-construction-guide
/resources/maintenance-guide
/resources/glossary
```

## Blog Migration Tasks
1. Pull all existing posts from homekeyinspections.com/blog
2. Convert to MDX format (frontmatter: title, date, excerpt, tags, category, author, featured_image)
3. Migrate images using `next/image` optimization
4. Set up category/tag taxonomy
5. Add `schema.org BlogPosting` markup on each post page
6. Implement RSS feed at `/blog/rss.xml`

## Blog Listing Page
- Paginated (12 posts per page)
- Filter by category and tag
- Featured post hero at top
- Card grid: featured image, title, excerpt, date, author, read time

## Resources Hub Content

### Buyer's Guide (`/resources/buyers-guide`)
- The 10 highest-dollar defects we find (primary lead magnet)
- How to read your inspection report
- What to negotiate vs. what to walk away from
- **Bilingual edition** — Spanish version linked from /es/

### Seller's Guide (`/resources/sellers-guide`)
- Why a pre-listing inspection helps sellers
- Common seller-side surprises
- How to prepare your home for inspection

### New Construction Guide (`/resources/new-construction-guide`)
- Why new doesn't mean perfect
- The 3-inspection journey explained (pre-drywall → pre-settlement → 11-month warranty)
- How to use your builder warranty
- **Bilingual edition** — Spanish version linked from /es/

### Home Maintenance Guide (`/resources/maintenance-guide`)
- Seasonal maintenance checklist
- Annual inspection program pitch
- Common deferred maintenance issues

### Glossary (`/resources/glossary`)
- A–Z glossary of inspection terms
- Each term gets a short definition
- Linked from relevant service pages

## Content Architecture
- MDX files live in `content/blog/` and `content/resources/`
- Frontmatter parsed at build time
- All resources pages are statically generated

## Acceptance Criteria
- [ ] /blog listing page renders with all migrated posts
- [ ] /blog/[slug] renders individual posts with correct content
- [ ] /blog/rss.xml returns valid RSS 2.0
- [ ] All 5 resource guide pages render
- [ ] /resources/glossary renders all terms alphabetically
- [ ] schema.org BlogPosting markup present on post pages
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes

## Out of Scope
- CMS integration (use MDX files; CMS is a future track)
- Comment system
- Social sharing buttons
- Email newsletter integration on blog pages
