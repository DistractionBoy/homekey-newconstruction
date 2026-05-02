# Implementation Plan: Deployment and DevOps

Track ID: `deployment_devops_20260502`

---

## Phase 1: Environment Variables + .env.example

- [ ] Task: Audit all environment variables used across the codebase
    - [ ] grep for `process.env.` and `NEXT_PUBLIC_`
    - [ ] List all variables with descriptions

- [ ] Task: Create/update `.env.example`
    - [ ] All required variables with placeholder values and comments
    - [ ] Variables: DATABASE_URL, RESEND_API_KEY, RESEND_FROM_EMAIL, NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_CLARITY_ID, BOOKING_NOTIFICATION_EMAIL, ADMIN_API_KEY, NEXT_PUBLIC_GOOGLE_PLACES_API_KEY, SENTRY_DSN

- [ ] Task: Verify `.env` is in `.gitignore`

- [ ] Task: Conductor - User Manual Verification 'Phase 1: Environment Variables' (Protocol in workflow.md)

---

## Phase 2: GitHub Actions CI

- [ ] Task: Create `.github/workflows/ci.yml`
    - [ ] Trigger: on pull_request to main
    - [ ] Jobs (run in parallel where possible):
        - `type-check`: `npx tsc --noEmit`
        - `lint`: `npm run lint`
        - `test`: `npx vitest run --coverage` (fail if < 80%)
        - `build`: `npm run build`
    - [ ] All jobs use Node 20 + npm cache

- [ ] Task: Create `.github/workflows/lighthouse.yml`
    - [ ] Trigger: on pull_request (after Vercel preview deployment)
    - [ ] Use `@lhci/cli` to run Lighthouse against preview URL
    - [ ] Post results as PR comment
    - [ ] Fail if Performance < 90

- [ ] Task: Verify CI passes on a clean branch

- [ ] Task: Conductor - User Manual Verification 'Phase 2: GitHub Actions CI' (Protocol in workflow.md)

---

## Phase 3: Sentry Setup

- [ ] Task: Install Sentry
    - [ ] `npm install @sentry/nextjs`
    - [ ] Run `npx @sentry/wizard@latest -i nextjs` to generate config files

- [ ] Task: Configure Sentry
    - [ ] `sentry.client.config.ts` — DSN, tracesSampleRate
    - [ ] `sentry.server.config.ts` — DSN
    - [ ] Source maps upload on build (Sentry webpack plugin)

- [ ] Task: Add `SENTRY_DSN` to environment variables

- [ ] Task: Test Sentry integration
    - [ ] Trigger a test error
    - [ ] Verify it appears in Sentry dashboard

- [ ] Task: Conductor - User Manual Verification 'Phase 3: Sentry' (Protocol in workflow.md)

---

## Phase 4: Vercel Configuration

- [ ] Task: Configure `vercel.json` (if needed)
    - [ ] 301 redirects for any old URLs that changed
    - [ ] Headers for security (X-Frame-Options, CSP basics)

- [ ] Task: Set up Vercel environments
    - [ ] Production environment variables
    - [ ] Preview environment variables (separate DB)
    - [ ] Confirm `prisma migrate deploy` runs on production deploy

- [ ] Task: Configure custom domain
    - [ ] Add `next.homekeyinspections.com` as staging domain in Vercel
    - [ ] Verify SSL is provisioned

- [ ] Task: Conductor - User Manual Verification 'Phase 4: Vercel Config' (Protocol in workflow.md)

---

## Phase 5: Cutover Checklist + QA

- [ ] Task: Verify main branch deploys to production automatically
- [ ] Task: Verify PRs generate preview deployments
- [ ] Task: Verify Lighthouse CI runs on preview deployment
- [ ] Task: Verify Sentry captures a test error from production
- [ ] Task: Verify `prisma migrate deploy` ran successfully on production DB
- [ ] Task: Verify `next.homekeyinspections.com` resolves correctly
- [ ] Task: Run `npm run build` and `npm run lint` locally one final time
- [ ] Task: Conductor - User Manual Verification 'Phase 5: Cutover Checklist' (Protocol in workflow.md)
