# Spec: Realtor Partner Portal (/realtors)

## Overview
A dedicated section for real estate agents. Partnership pitch, co-branding
options, and agent referral tracking. Agents are a high-value referral channel —
this section should make partnering with HomeKey feel premium and effortless.

## Pages to Build
```
/realtors                          (landing page)
/realtors/partner                  (partnership signup form)
/realtors/co-branded/[partner-slug] (dynamic co-branded pages per agent)
/realtors/resources                (agent resource downloads)
```

## /realtors — Landing Page Copy
```
# For Real Estate Agents
## Make your buyer's offer the strongest one on the table.

Inspections shouldn't be a roll-of-the-dice on whether the deal closes.
Partner with HomeKey and your buyers get fast scheduling, thorough reports,
and inspector-led negotiation guidance — making you look smart and protecting
your reputation.
```

### Why Agents Partner With Us
- Same-or-next-day availability when contingency windows are tight
- Detailed reports with the Create Request List feature — your buyer can build a repair addendum in minutes
- Bilingual inspectors when your buyer needs Spanish-language service
- Direct line to inspectors for follow-up questions
- Transparent pricing — no surprise upcharges

### Partnership Program Tiers
- **Co-branded landing page** with your brokerage branding
- **Volume discount** for high-referral agents
- **Priority scheduling** on your active deals
- **Quarterly market reports** for your team

### CTA
Button: "Become a partner →" → links to /realtors/partner

## /realtors/partner — Partnership Form
Fields: agent name, brokerage, email, phone, average inspections referred per month
On submit: write to `AgentPartner` database model (Track 15), send welcome email

## /realtors/co-branded/[partner-slug]
Dynamic co-branded pages for partnered agents:
- Agent's name/photo/brokerage displayed prominently
- "Referred by [Agent Name]" header
- Full HomeKey service listings
- Booking form pre-fills agent info
- Unique URL partners can share with their clients

The `partner-slug` is assigned when the agent partnership is confirmed
(stored in `AgentPartner.coBrandedSlug`).

## /realtors/resources
Downloadable resources for agent partners:
- HomeKey Overview one-pager (PDF)
- Sample inspection report links (reuse from /sample-reports)
- "How to use the Create Request List" guide
- Inspection checklist for buyers

## Acceptance Criteria
- [ ] /realtors landing page renders with all copy and partnership program details
- [ ] /realtors/partner form submits and writes to database
- [ ] /realtors/co-branded/[partner-slug] renders for a test slug
- [ ] /realtors/resources renders download links
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes

## Out of Scope
- Agent dashboard / login portal
- Automated co-branded page provisioning (manual slug assignment is fine)
- Referral tracking dashboard
- Volume discount calculation
