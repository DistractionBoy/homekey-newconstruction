# Implementation Plan: Brand Colors, Animations & Background Textures

Track ID: `brand_animations_20260425`

**Prerequisite:** Hero Slider, Trust Bar, Bundle Timeline, and Problem Section tracks must be merged before this track begins.

---

## Phase 1: Brand Color Tokens

- [ ] Task: Add brand color tokens to Tailwind config
    - [ ] Open `tailwind.config.ts`
    - [ ] Add `brand` key under `theme.extend.colors` with all 8 values from spec
    - [ ] Verify tokens are available by checking a `bg-brand-primary` class compiles

- [ ] Task: Apply color accents across page
    - [ ] Hero CTA buttons: update to `bg-brand-primary hover:bg-brand-primaryDark text-white shadow-sm`
    - [ ] Section eyebrow labels: first per section → `text-brand-primary`, alternate with `text-brand-trust` and `text-brand-growth`
    - [ ] Pricing bundle total: apply `text-brand-primary font-bold`; savings line `text-emerald-600`
    - [ ] Community ZIP chips: update to `bg-blue-50 text-blue-900 hover:bg-brand-primary hover:text-white transition-colors`
    - [ ] All buttons: add `hover:scale-[1.02] hover:shadow-md transition-all duration-200`

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Brand Color Tokens' (Protocol in workflow.md)

---

## Phase 2: Animated Utility Components

- [ ] Task: Install react-intersection-observer
    - [ ] Run `npm install react-intersection-observer`
    - [ ] Verify `framer-motion` is already installed (installed by Hero Slider track)

- [ ] Task: Write AnimatedNumber tests
    - [ ] Create `src/components/ui/AnimatedNumber.test.tsx`
    - [ ] Assert component renders the target value (static snapshot — motion values settle)
    - [ ] Assert `suffix` prop text is rendered when provided

- [ ] Task: Create AnimatedNumber component
    - [ ] Create `src/components/ui/AnimatedNumber.tsx`
    - [ ] Add `"use client"` directive
    - [ ] Use `useInView` from `react-intersection-observer` with `triggerOnce: true`
    - [ ] Use Framer Motion `useMotionValue` starting at `0`, animate to `value` over `1.5s` on inView
    - [ ] Use `useTransform` to round the value for display
    - [ ] Render via `motion.span` with `useMotionTemplate` or direct `useMotionValue` display
    - [ ] Accept `value: number`, `suffix?: string` props

- [ ] Task: Write FadeUpSection tests
    - [ ] Create `src/components/ui/FadeUpSection.test.tsx`
    - [ ] Assert children render inside the component
    - [ ] Assert wrapper element is present in DOM

- [ ] Task: Create FadeUpSection component
    - [ ] Create `src/components/ui/FadeUpSection.tsx`
    - [ ] Add `"use client"` directive
    - [ ] Use Framer Motion `motion.div` with `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, amount: 0.3 }}`, `transition={{ duration: 0.5 }}`
    - [ ] Accept `children` and optional `className` props

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Animated Utility Components' (Protocol in workflow.md)

---

## Phase 3: Animation Wiring

- [ ] Task: Wrap all page sections with FadeUpSection
    - [ ] Import and wrap each major section in `<FadeUpSection>` in `src/app/new-construction/page.tsx` (or section components)
    - [ ] Exclude hero section from FadeUpSection (hero uses stagger instead)

- [ ] Task: Wire hero text stagger animation
    - [ ] Add `"use client"` to hero section component if needed
    - [ ] Use Framer Motion `variants` with `staggerChildren: 0.1` on container
    - [ ] Each hero text line (headline, subheadline, CTA row, trust pills) fades up in sequence

- [ ] Task: Wire AnimatedNumber to stat strip in BundleTimeline
    - [ ] In `BundleTimeline.tsx`, replace plain stat text with `<AnimatedNumber value={3} />`, `<AnimatedNumber value={1} />`, `<AnimatedNumber value={100} suffix="%" />`

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Animation Wiring' (Protocol in workflow.md)

---

## Phase 4: Background Textures

- [ ] Task: Apply hero section grid texture
    - [ ] Add `style` prop to hero section with the CSS grid pattern from spec
    - [ ] Verify texture is subtle and does not interfere with text readability

- [ ] Task: Apply Pricing section gradient
    - [ ] Locate pricing/calculator section
    - [ ] Apply `bg-gradient-to-br from-slate-50 via-white to-orange-50/30`

- [ ] Task: Apply Final CTA dark section with blueprint overlay
    - [ ] Locate final CTA section
    - [ ] Apply `bg-slate-900 text-white`
    - [ ] Add blueprint grid CSS pattern overlay at `rgba(255,255,255,0.03)`

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Background Textures' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [ ] Task: Run full test suite and verify coverage ≥ 80%
- [ ] Task: Production build check (`npm run build`)
- [ ] Task: Lint check (`npm run lint`)
- [ ] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
