# Spec: Contact + Booking Flow (/contact, /schedule)

## Overview
Convert the booking flow into a modern multi-step booking experience.
Replace the current ZIP-code lookup with a guided, multi-step form that
captures property details, inspection selections, and buyer info — then
writes to the database and sends confirmation emails.

## Pages to Build
```
/contact
/schedule
/schedule/property-type       (step 1)
/schedule/inspections         (step 2)
/schedule/add-ons             (step 3)
/schedule/details             (step 4)
/schedule/confirm             (step 5 — review + submit)
/schedule/success             (post-submission)
```

## Multi-Step Booking Flow

### Step 1 — Property
- Property type: single family / townhouse / condo
- Square footage tier
- Home age: new construction or resale + year built
- Address with autocomplete (Google Places or similar)

### Step 2 — Inspections
- Which inspections are needed
- Bundle calculator visible (reuse `PricingCalculator` component)
- Smart defaults: pre-select "Pre-Settlement" if new construction was selected

### Step 3 — Add-ons
- Optional services grid
- Each add-on shows: name, price, "best paired with" note
- Running total visible

### Step 4 — Details
- Buyer name, email, phone
- Agent name, email (optional)
- Preferred date/time (date picker)
- Special requests (textarea)
- Language preference: English / Spanish
- Specific inspector request (optional dropdown)

### Step 5 — Confirm
- Full review of all selections + total
- Submit button

### Success Page
- Booking reference number
- "What to expect" timeline
- Contact info for changes
- CTA to save to calendar

## Post-Submission Actions
1. Write booking to database (Prisma `Booking` model — see Track 15)
2. Send confirmation email to buyer (Resend)
3. Send internal notification to scheduling team (Resend)
4. Show success page with reference number

## /contact Page
- General contact form: name, email, phone, subject, message
- Phone number prominently displayed: (571) 281-3846
- Office hours
- Links to bilingual inspector contact (Sebastian/Jay) for Spanish speakers
- Map embed

## Progress Indicator
Visible step indicator throughout the booking flow (1 of 5, 2 of 5, etc.)
Back button on each step. State preserved across steps (React context or URL params).

## Acceptance Criteria
- [ ] All 5 booking steps render and navigate correctly
- [ ] Progress indicator updates on each step
- [ ] Back navigation preserves entered data
- [ ] Form validation gives clear error messages
- [ ] Submission writes a Booking record to the database
- [ ] Confirmation email is sent to buyer on submission
- [ ] Internal notification email is sent on submission
- [ ] Success page shows booking reference number
- [ ] /contact page form submits to /api/contact
- [ ] Language preference = "es" pre-fills bilingual inspector option
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes

## Out of Scope
- Real-time calendar availability
- Payment processing
- Automated booking confirmation to inspector
- SMS notifications
