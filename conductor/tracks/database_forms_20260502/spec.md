# Spec: Database and Forms Backend

## Overview
Stand up the Prisma schema and API routes that back the booking flow,
newsletter signups, agent partnership inquiries, and general contact form.
Runs in parallel with Track 10 (Contact + Booking Flow).

## Database Models

### Booking
```prisma
model Booking {
  id              String        @id @default(cuid())
  createdAt       DateTime      @default(now())
  status          BookingStatus @default(NEW)

  // Property
  propertyType    String
  sqftTier        String
  yearBuilt       Int?
  address         String
  city            String
  state           String
  zip             String

  // Inspections
  preDrywall      Boolean  @default(false)
  preSettlement   Boolean  @default(false)
  warranty11      Boolean  @default(false)

  // Add-ons (flexible JSON)
  addons          Json

  // Pricing
  estimatedTotal  Decimal

  // Contact
  buyerName       String
  buyerEmail      String
  buyerPhone      String
  agentName       String?
  agentEmail      String?
  preferredDate   DateTime?
  language        String   @default("en")
  bilingualInspector Boolean @default(false)
  inspectorRequest String?
  notes           String?

  // UTM tracking
  source          String?
  medium          String?
  campaign        String?
  referrerAgent   String?
}

enum BookingStatus {
  NEW
  CONTACTED
  CONFIRMED
  COMPLETED
  CANCELLED
}
```

### NewsletterSubscriber
```prisma
model NewsletterSubscriber {
  id        String   @id @default(cuid())
  email     String   @unique
  language  String   @default("en")
  source    String?
  createdAt DateTime @default(now())
}
```

### AgentPartner
```prisma
model AgentPartner {
  id              String   @id @default(cuid())
  agentName       String
  brokerage       String
  email           String   @unique
  phone           String?
  monthlyVolume   String?
  partnershipTier String?
  coBrandedSlug   String?  @unique
  createdAt       DateTime @default(now())
}
```

## API Routes

### `POST /api/booking`
- Validate request body (Zod schema)
- Create `Booking` record in database
- Send confirmation email via Resend
- Send internal notification email
- Return `{ id, status }` on success

### `GET /api/booking/[id]` (admin)
- Return full booking record
- Protected by simple API key header

### `PATCH /api/booking/[id]` (admin)
- Update booking status
- Protected by API key

### `POST /api/newsletter`
- Validate email
- Upsert `NewsletterSubscriber` (ignore duplicate, no error)
- Return `{ success: true }`

### `POST /api/agent`
- Validate agent partnership form
- Create `AgentPartner` record
- Send welcome email to agent
- Send internal notification

### `POST /api/contact`
- Validate general contact form (name, email, phone, subject, message)
- Send email to info@homekeyinspections.com via Resend
- Return `{ success: true }`

## Infrastructure
- Database: Vercel Postgres or Neon (PostgreSQL)
- ORM: Prisma with `@prisma/client`
- Email: Resend (`resend` npm package)
- Validation: Zod for all API request bodies
- Environment variables documented in `.env.example`

## Acceptance Criteria
- [ ] Prisma schema migrates without errors on a fresh database
- [ ] `POST /api/booking` creates a record and returns correct response
- [ ] `POST /api/newsletter` upserts correctly and handles duplicates
- [ ] `POST /api/agent` creates an AgentPartner record
- [ ] `POST /api/contact` sends an email (verifiable in Resend dashboard)
- [ ] All API routes return proper HTTP status codes (400 on validation error, 500 on DB error)
- [ ] `.env.example` documents all required variables
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes with ≥ 80% coverage on API route handlers

## Out of Scope
- Admin dashboard UI
- Booking payment processing
- Automated inspector assignment
- SMS/WhatsApp notifications
