# Implementation Plan: Brand Colors, Animations & Background Textures

Track ID: `brand_animations_20260425`

**Prerequisite:** Hero Slider, Trust Bar, Bundle Timeline, and Problem Section tracks must be merged before this track begins.

---

## Phase 1: Brand Color Tokens

- [x] Task: Add brand color tokens to Tailwind config
    - [x] Open `tailwind.config.ts`
    - [x] Add `brand` key under `theme.extend.colors` with all 8 values from spec
    - [x] Verify tokens are available by checking a `bg-brand-primary` class compiles

- [x] Task: Apply color accents across page
    - [x] Hero CTA buttons: update to `bg-brand-primary hover:bg-brand-primaryDark text-white shadow-sm`
    - [x] Section eyebrow labels: first per section → `text-brand-primary`, alternate with `text-brand-trust` and `text-brand-growth`
    - [x] Pricing bundle total: apply `text-brand-primary font-bold`; savings line `text-emerald-600`
    - [x] Community ZIP chips: update to `bg-blue-50 text-blue-900 hover:bg-brand-primary hover:text-white transition-colors`
    - [x] All buttons: add `hover:scale-[1.02] hover:shadow-md transition-all duration-200`

- [x] Task: Conductor - User Manual Verification 'Phase 1: Brand Color Tokens' (Protocol in workflow.md)

---

## Phase 2: Animated Utility Components

- [x] Task: Install react-intersection-observer
    - [x] Run `npm install react-intersection-observer`
    - [x] Verify `framer-motion` is already installed (installed by Hero Slider track)

- [x] Task: Write AnimatedNumber tests
    - [x] Create `src/components/ui/AnimatedNumber.test.tsx`
    - [x] Assert component renders the target value (static snapshot — motion values settle)
    - [x] Assert `suffix` prop text is rendered when provided

- [x] Task: Create AnimatedNumber component
    - [x] Create `src/components/ui/AnimatedNumber.tsx`
    - [x] Add `"use client"` directive
    - [x] Use `useInView` from `react-intersection-observer` with `triggerOnce: true`
    - [x] Use Framer Motion `useMotionValue` starting at `0`, animate to `value` over `1.5s` on inView
    - [x] Use `useTransform` to round the value for display
    - [x] Render via `motion.span` with `useMotionTemplate` or direct `useMotionValue` display
    - [x] Accept `value: number`, `suffix?: string` props

- [x] Task: Write FadeUpSection tests
    - [x] Create `src/components/ui/FadeUpSection.test.tsx`
    - [x] Assert children render inside the component
    - [x] Assert wrapper element is present in DOM

- [x] Task: Create FadeUpSection component
    - [x] Create `src/components/ui/FadeUpSection.tsx`
    - [x] Add `"use client"` directive
    - [x] Use Framer Motion `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, amount: 0.3 }}`, `transition={{ duration: 0.5 }}`
    - [x] Accept `children` and optional `className` props

- [x] Task: Conductor - User Manual Verification 'Phase 2: Animated Utility Components' (Protocol in workflow.md)

---

## Phase 3: Animation Wiring

- [x] Task: Wrap all page sections with FadeUpSection
    - [x] Import and wrap each major section in `<FadeUpSection>` in `src/app/new-construction/page.tsx` (or section components)
    - [x] Exclude hero section from FadeUpSection (hero uses stagger instead)

- [x] Task: Wire hero text stagger animation
    - [x] Add `"use client"` to hero section component if needed
    - [x] Use Framer Motion `variants` with `staggerChildren: 0.1` on container
    - [x] Each hero text line (headline, subheadline, CTA row, trust pills) fades up in sequence

- [x] Task: Wire AnimatedNumber to stat strip in BundleTimeline
    - [x] In `BundleTimeline.tsx`, replace plain stat text with `<AnimatedNumber value={3} />`, `<AnimatedNumber value={1} />`, `<AnimatedNumber value={100} suffix="%" />`

- [x] Task: Conductor - User Manual Verification 'Phase 3: Animation Wiring' (Protocol in workflow.md)

---

## Phase 4: Background Textures

- [x] Task: Apply hero section grid texture
    - [x] Add `style` prop to hero section with the CSS grid pattern from spec
    - [x] Verify texture is subtle and does not interfere with text readability

- [x] Task: Apply Pricing section gradient
    - [x] Locate pricing/calculator section
    - [x] Apply `bg-gradient-to-br from-slate-50 via-white to-orange-50/30`

- [x] Task: Apply Final CTA dark section with blueprint overlay
    - [x] Locate final CTA section
    - [x] Apply `bg-slate-900 text-white`
    - [x] Add blueprint grid CSS pattern overlay at `rgba(255,255,255,0.03)`

- [x] Task: Conductor - User Manual Verification 'Phase 4: Background Textures' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [x] Task: Run full test suite and verify coverage ≥ 80%
- [x] Task: Production build check (`npm run build`)
- [x] Task: Lint check (`npm run lint`)
- [x] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
