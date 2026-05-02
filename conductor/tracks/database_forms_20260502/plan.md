# Implementation Plan: Database and Forms Backend

Track ID: `database_forms_20260502`

---

## Phase 1: Prisma Setup + Schema

- [ ] Task: Install Prisma
    - [ ] `npm install prisma @prisma/client`
    - [ ] `npx prisma init` — creates `prisma/schema.prisma` and `.env`
    - [ ] Configure datasource for PostgreSQL (Vercel Postgres or Neon)

- [ ] Task: Define schema in `prisma/schema.prisma`
    - [ ] `Booking` model (all fields from spec.md)
    - [ ] `BookingStatus` enum (NEW, CONTACTED, CONFIRMED, COMPLETED, CANCELLED)
    - [ ] `NewsletterSubscriber` model
    - [ ] `AgentPartner` model

- [ ] Task: Run initial migration
    - [ ] `npx prisma migrate dev --name init`
    - [ ] Verify tables created in dev database

- [ ] Task: Generate Prisma client
    - [ ] `npx prisma generate`
    - [ ] Add to `postinstall` script in `package.json`

- [ ] Task: Document all required environment variables in `.env.example`

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Prisma Setup' (Protocol in workflow.md)

---

## Phase 2: Zod Schemas + Validation

- [ ] Task: Create `lib/validations/booking.ts`
    - [ ] Zod schema matching all Booking model fields
    - [ ] Validate propertyType enum, email format, phone format

- [ ] Task: Create `lib/validations/newsletter.ts`
    - [ ] Email validation schema

- [ ] Task: Create `lib/validations/agent.ts`
    - [ ] Agent partnership form schema

- [ ] Task: Create `lib/validations/contact.ts`
    - [ ] General contact form schema

- [ ] Task: Write Zod schema unit tests
    - [ ] Valid data passes
    - [ ] Missing required fields fail with correct error messages

- [ ] Task: Conductor - User Manual Verification 'Phase 2: Zod Schemas' (Protocol in workflow.md)

---

## Phase 3: API Routes

- [ ] Task: `app/api/booking/route.ts` — POST
    - [ ] Validate body with Zod schema
    - [ ] Create Prisma `Booking` record
    - [ ] Call Resend to send confirmation email to buyer
    - [ ] Call Resend to send internal notification
    - [ ] Return `{ id, status }` on 201

- [ ] Task: `app/api/booking/[id]/route.ts` — GET + PATCH
    - [ ] GET: return full booking record (require ADMIN_API_KEY header)
    - [ ] PATCH: update status (require ADMIN_API_KEY header)

- [ ] Task: `app/api/newsletter/route.ts` — POST
    - [ ] Upsert NewsletterSubscriber (no error on duplicate)
    - [ ] Return `{ success: true }` on 200

- [ ] Task: `app/api/agent/route.ts` — POST
    - [ ] Create AgentPartner record
    - [ ] Send welcome email to agent via Resend
    - [ ] Send internal notification

- [ ] Task: `app/api/contact/route.ts` — POST
    - [ ] Validate form fields
    - [ ] Send email to booking notification address via Resend
    - [ ] Return `{ success: true }`

- [ ] Task: Write API route handler tests (mock Prisma + Resend)
    - [ ] 201 on valid booking creation
    - [ ] 400 on validation failure
    - [ ] 401 on missing API key for admin routes

- [ ] Task: Conductor - User Manual Verification 'Phase 3: API Routes' (Protocol in workflow.md)

---

## Phase 4: Email Templates

- [ ] Task: Create `lib/email/booking-confirmation.tsx`
    - [ ] React Email template for buyer confirmation
    - [ ] Booking reference, services selected, estimated total, next steps

- [ ] Task: Create `lib/email/booking-notification.tsx`
    - [ ] Internal email to scheduling team
    - [ ] All booking details in a clean table

- [ ] Task: Create `lib/email/agent-welcome.tsx`
    - [ ] Welcome email to new agent partner
    - [ ] Co-branded page URL (placeholder until slug assigned)

- [ ] Task: Run `npm run build` to verify email templates compile

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Email Templates' (Protocol in workflow.md)

---

## Phase 5: QA & Final Checks

- [ ] Task: End-to-end test: POST /api/booking with valid payload → verify DB record + email
- [ ] Task: Test duplicate newsletter subscription → verify no error
- [ ] Task: Test admin routes with and without API key
- [ ] Task: Run `npx vitest run --coverage` ≥ 80%
- [ ] Task: Run `npm run build` and `npm run lint`
- [ ] Task: Conductor - User Manual Verification 'Phase 5: QA & Final Checks' (Protocol in workflow.md)
