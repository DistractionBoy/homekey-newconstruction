# Spec: Deployment and DevOps

## Overview
Ship the site to production on Vercel with three environments, proper CI/CD
via GitHub Actions, error tracking via Sentry, and custom domain setup.
This track runs last — after all feature tracks are complete.

## Vercel Environments
Three environments:
- **production** — `homekeyinspections.com` (or `next.homekeyinspections.com` until cutover)
- **preview** — per-PR preview deployments
- **development** — local `npm run dev`

Each environment has its own set of environment variables (especially DB connection strings and API keys).

## Database
- Provider: Vercel Postgres or Neon (PostgreSQL)
- Run `prisma migrate deploy` as part of the production deployment pipeline
- Production database is separate from preview/development databases

## Environment Variables
All required variables documented in `.env.example`. Required variables:

```
# Database
DATABASE_URL=

# Resend (email)
RESEND_API_KEY=
RESEND_FROM_EMAIL=

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_CLARITY_ID=

# Internal
BOOKING_NOTIFICATION_EMAIL=
ADMIN_API_KEY=

# Google Maps (address autocomplete)
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=
```

## GitHub Actions CI Pipeline
Run on every PR:

```yaml
jobs:
  type-check:        # tsc --noEmit
  lint:              # npm run lint
  test:              # npx vitest run --coverage (must pass ≥ 80% coverage)
  build:             # npm run build
  lighthouse-ci:     # Lighthouse CI against Vercel preview URL (on PR deployments only)
```

Fail the PR if any job fails.

## Sentry Error Tracking
- Install `@sentry/nextjs`
- Configure in `sentry.client.config.ts` and `sentry.server.config.ts`
- Capture unhandled errors in API routes and page components
- Set up Sentry project and add `SENTRY_DSN` to environment variables
- Source maps uploaded to Sentry on build

## Custom Domain
- Stage: `next.homekeyinspections.com` (staging/preview subdomain)
- Production: `homekeyinspections.com` (after cutover approval from client)
- SSL/HTTPS: Managed by Vercel

## Cutover Checklist
Before switching DNS to new site:
- [ ] All tracks implemented and tested
- [ ] 301 redirects configured for all old URLs that have changed
- [ ] Google Search Console updated with new sitemap
- [ ] Analytics verified firing on production
- [ ] Client (Ian) signs off on content and functionality

## Acceptance Criteria
- [ ] `main` branch deploys automatically to production on Vercel
- [ ] PRs generate preview deployments
- [ ] GitHub Actions CI passes on a clean PR
- [ ] Lighthouse CI runs against preview deployment and reports scores
- [ ] Sentry DSN configured; test error appears in Sentry dashboard
- [ ] `prisma migrate deploy` runs as part of deployment
- [ ] `.env.example` documents all variables
- [ ] `next.homekeyinspections.com` resolves to staging environment

## Out of Scope
- Blue/green deployment strategy
- Database backups configuration (handled by Vercel/Neon)
- Monitoring/alerting beyond Sentry
- CDN configuration beyond Vercel defaults
