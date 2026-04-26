# Implementation Plan: Visual Assets & Image Optimization

Track ID: `visual_assets_20260425`

**Prerequisite:** Hero Slider, Trust Bar, Bundle Timeline, and Problem Section tracks must be merged before Phase 3 (audit will be accurate).

---

## Phase 1: Illustration Assets

- [x] Task: Source and save stage SVG illustrations
    - [x] Source 3 SVG illustrations from unDraw (undraw.co) or Storyset (storyset.com) — construction/inspection themes
    - [x] Set `currentColor` fill to neutral (component will apply accent color via CSS)
    - [x] Add attribution comment inside SVG if Storyset requires it
    - [x] Save as `public/illustrations/stage-1.svg` (framing/hammer), `stage-2.svg` (home keys), `stage-3.svg` (shield/warranty)

- [x] Task: Source or create NoVA map SVG
    - [x] Create or source a simplified NoVA county outline SVG
    - [x] Add dot markers for 8 communities: Brambleton, Ashburn, Leesburg, Dulles South, Haymarket, Gainesville, Bristow, Oak Hill
    - [x] Save as `public/illustrations/nova-map.svg` or prepare as inline SVG string

- [x] Task: Conductor - User Manual Verification 'Phase 1: Illustration Assets' (Protocol in workflow.md)

---

## Phase 2: Inline Components

- [x] Task: Write ReviewerAvatar tests
    - [x] Create `src/components/ui/ReviewerAvatar.test.tsx`
    - [x] Assert initials render correctly for "John Smith" → "JS"
    - [x] Assert initials render correctly for single-name input
    - [x] Assert component renders without crashing with no `color` prop

- [x] Task: Create ReviewerAvatar component
    - [x] Create `src/components/ui/ReviewerAvatar.tsx`
    - [x] Derive initials: first char of first word + first char of second word (if present)
    - [x] Deterministic color: `(charCodeSum % 5)` maps to 5 Tailwind background colors
    - [x] Render: `w-10 h-10` circle, centered initials, white text, `font-semibold text-sm`
    - [x] Accept `name: string`, `color?: string` props

- [x] Task: Wire ReviewerAvatar into testimonials section
    - [x] Locate testimonials/social proof section
    - [x] Replace any existing avatar placeholders with `<ReviewerAvatar name="..." />`
    - [x] Arrange as overlapping circles or individual avatars per testimonial card

- [x] Task: Add pricing calculator graphic
    - [x] Locate pricing calculator card component
    - [x] Add `ClipboardList` and `Search` Lucide icons at top of card: `size={28/22}`, `className="text-brand-primary"`

- [x] Task: Wire stage illustrations into BundleTimeline cards
    - [x] Import each SVG as `next/image` (or inline via `<img>` if SVG is inline — use next/image if file-based)
    - [x] Add to each stage card: `w-12 h-12` illustration above the icon/title

- [x] Task: Add NoVA map to communities section
    - [x] Import `nova-map.svg` via `next/image` or render inline SVG
    - [x] Position above or beside the community grid

- [x] Task: Conductor - User Manual Verification 'Phase 2: Inline Components' (Protocol in workflow.md)

---

## Phase 3: Image Optimization Audit

- [x] Task: Audit all image usage in src/
    - [x] Run `grep -r '<img' src/` to find any raw `<img>` tags
    - [x] Document any found instances

- [x] Task: Convert raw img tags to next/image
    - [x] For each raw `<img>` found (excluding logo strip placeholders in TrustBar):
        - Zero violations found (TrustBar logo strip is the only raw img, and is explicitly excluded by spec)

- [x] Task: Audit next/image props completeness
    - [x] Verify all `<Image>` components have `alt`, `sizes`, and either `width`+`height` or `fill`
    - [x] Confirm only slide 1 of HeroSlider has `loading="eager"`
    - [x] NavBar logo updated from deprecated `priority` to `loading="eager"`
    - [x] ProblemSection bg image: added `sizes="100vw"`

- [x] Task: Verify next.config.js image settings
    - [x] Confirm `images.formats: ['image/avif', 'image/webp']` is set
    - [x] Confirm `images.unsplash.com` remote pattern is set

- [x] Task: Conductor - User Manual Verification 'Phase 3: Image Optimization Audit' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [x] Task: Run full test suite and verify coverage ≥ 80%
- [x] Task: Production build check (`npm run build`)
- [x] Task: Lint check (`npm run lint`)
- [x] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
