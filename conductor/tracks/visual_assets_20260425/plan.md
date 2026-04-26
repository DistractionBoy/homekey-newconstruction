# Implementation Plan: Visual Assets & Image Optimization

Track ID: `visual_assets_20260425`

**Prerequisite:** Hero Slider, Trust Bar, Bundle Timeline, and Problem Section tracks must be merged before Phase 3 (audit will be accurate).

---

## Phase 1: Illustration Assets

- [ ] Task: Source and save stage SVG illustrations
    - [ ] Source 3 SVG illustrations from unDraw (undraw.co) or Storyset (storyset.com) — construction/inspection themes
    - [ ] Set `currentColor` fill to neutral (component will apply accent color via CSS)
    - [ ] Add attribution comment inside SVG if Storyset requires it
    - [ ] Save as `public/illustrations/stage-1.svg` (framing/hammer), `stage-2.svg` (home keys), `stage-3.svg` (shield/warranty)

- [ ] Task: Source or create NoVA map SVG
    - [ ] Create or source a simplified NoVA county outline SVG
    - [ ] Add dot markers for 8 communities: Brambleton, Ashburn, Leesburg, Dulles South, Haymarket, Gainesville, Bristow, Oak Hill
    - [ ] Save as `public/illustrations/nova-map.svg` or prepare as inline SVG string

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Illustration Assets' (Protocol in workflow.md)

---

## Phase 2: Inline Components

- [ ] Task: Write ReviewerAvatar tests
    - [ ] Create `src/components/ui/ReviewerAvatar.test.tsx`
    - [ ] Assert initials render correctly for "John Smith" → "JS"
    - [ ] Assert initials render correctly for single-name input
    - [ ] Assert component renders without crashing with no `color` prop

- [ ] Task: Create ReviewerAvatar component
    - [ ] Create `src/components/ui/ReviewerAvatar.tsx`
    - [ ] Derive initials: first char of first word + first char of second word (if present)
    - [ ] Deterministic color: `(charCodeSum % 5)` maps to 5 Tailwind background colors
    - [ ] Render: `w-10 h-10` circle, centered initials, white text, `font-semibold text-sm`
    - [ ] Accept `name: string`, `color?: string` props

- [ ] Task: Wire ReviewerAvatar into testimonials section
    - [ ] Locate testimonials/social proof section
    - [ ] Replace any existing avatar placeholders with `<ReviewerAvatar name="..." />`
    - [ ] Arrange as overlapping circles or individual avatars per testimonial card

- [ ] Task: Add pricing calculator graphic
    - [ ] Locate pricing calculator card component
    - [ ] Add `ClipboardList` and `Search` Lucide icons at top of card: `size={48}`, `className="text-brand-primary"`

- [ ] Task: Wire stage illustrations into BundleTimeline cards
    - [ ] Import each SVG as `next/image` (or inline via `<img>` if SVG is inline — use next/image if file-based)
    - [ ] Add to each stage card: `w-16 h-16` illustration above the icon/title

- [ ] Task: Add NoVA map to communities section
    - [ ] Import `nova-map.svg` via `next/image` or render inline SVG
    - [ ] Position above or beside the community grid

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Inline Components' (Protocol in workflow.md)

---

## Phase 3: Image Optimization Audit

- [ ] Task: Audit all image usage in src/
    - [ ] Run `grep -r '<img' src/` to find any raw `<img>` tags
    - [ ] Document any found instances

- [ ] Task: Convert raw img tags to next/image
    - [ ] For each raw `<img>` found (excluding logo strip placeholders in TrustBar):
        - Replace with `<Image>` from `next/image`
        - Add explicit `width` and `height`, or use `fill` with a positioned parent
        - Add `sizes` prop appropriate to the layout context
        - Add descriptive `alt` text

- [ ] Task: Audit next/image props completeness
    - [ ] Verify all `<Image>` components have `alt`, `sizes`, and either `width`+`height` or `fill`
    - [ ] Confirm only slide 1 of HeroSlider has `priority`
    - [ ] Confirm hero images have `placeholder="blur"` with `blurDataURL`

- [ ] Task: Verify next.config.js image settings
    - [ ] Confirm `images.formats: ['image/avif', 'image/webp']` is set
    - [ ] Confirm `images.unsplash.com` remote pattern is set

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Image Optimization Audit' (Protocol in workflow.md)

---

## Phase 4: QA & Final Checks

- [ ] Task: Run full test suite and verify coverage ≥ 80%
- [ ] Task: Production build check (`npm run build`)
- [ ] Task: Lint check (`npm run lint`)
- [ ] Task: Conductor - User Manual Verification 'Phase 4: QA & Final Checks' (Protocol in workflow.md)
