# Implementation Plan: Contact + Booking Flow

Track ID: `contact_booking_20260502`

---

## Phase 1: Booking Flow Shell + State Management

- [ ] Task: Install dependencies
    - [ ] `npm install react-hook-form zod @hookform/resolvers`
    - [ ] Email: Resend (`npm install resend`) — or confirm already installed

- [ ] Task: Create booking flow state management
    - [ ] `app/schedule/_context/BookingContext.tsx` — React context with booking state
    - [ ] State shape matches `Booking` model fields (Track 15)
    - [ ] Persists across step navigation

- [ ] Task: Create progress indicator component
    - [ ] `ScheduleProgress` — displays "Step X of 5" with step labels
    - [ ] Active step highlighted

- [ ] Task: Create `app/schedule/layout.tsx`
    - [ ] BookingContext provider
    - [ ] ScheduleProgress component
    - [ ] Back navigation button

- [ ] Task: Write BookingContext test
    - [ ] State persists through step navigation

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Booking Shell + State' (Protocol in workflow.md)

---

## Phase 2: Steps 1–3 (Property, Inspections, Add-ons)

- [ ] Task: `app/schedule/property-type/page.tsx` — Step 1
    - [ ] Property type selector: Single family / Townhouse / Condo
    - [ ] Square footage tier
    - [ ] Home age: New construction / Resale + year built
    - [ ] Address with autocomplete
    - [ ] Validate and advance to step 2

- [ ] Task: `app/schedule/inspections/page.tsx` — Step 2
    - [ ] Inspection type checkboxes
    - [ ] Reuse `PricingCalculator` component for bundle pricing
    - [ ] Smart default: pre-select Pre-Settlement if new construction
    - [ ] Running total displayed

- [ ] Task: `app/schedule/add-ons/page.tsx` — Step 3
    - [ ] Add-on services grid (from pricing data)
    - [ ] Each add-on: name, price, "best paired with" note
    - [ ] Updated running total

- [ ] Task: Write form validation tests for steps 1-3

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Steps 1-3' (Protocol in workflow.md)

---

## Phase 3: Steps 4–5 (Details, Confirm) + Success Page

- [ ] Task: `app/schedule/details/page.tsx` — Step 4
    - [ ] Buyer name, email, phone
    - [ ] Agent name, email (optional)
    - [ ] Preferred date/time picker
    - [ ] Special requests textarea
    - [ ] Language preference: English / Spanish
    - [ ] Inspector request dropdown (optional)

- [ ] Task: `app/schedule/confirm/page.tsx` — Step 5
    - [ ] Full review of all selections
    - [ ] Estimated total
    - [ ] Submit button → POST /api/booking
    - [ ] Loading state during submission

- [ ] Task: `app/schedule/success/page.tsx`
    - [ ] Booking reference number
    - [ ] "What to expect" timeline
    - [ ] Contact info for changes
    - [ ] Add to calendar CTA

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Steps 4-5 + Success' (Protocol in workflow.md)

---

## Phase 4: /contact Page

- [ ] Task: Create `app/contact/page.tsx`
    - [ ] General contact form: name, email, phone, subject, message
    - [ ] Phone number: (571) 281-3846
    - [ ] Office hours
    - [ ] BilingualContactCard (from Track 4, or build inline if Track 4 not done)
    - [ ] Submit to /api/contact

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Contact Page' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [ ] Task: End-to-end flow test: complete all 5 steps and verify booking written to DB
- [ ] Task: Verify confirmation email received in test inbox
- [ ] Task: Verify internal notification email received
- [ ] Task: Verify language=es pre-fills bilingual inspector option
- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
