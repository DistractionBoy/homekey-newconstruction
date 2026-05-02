# Spec: Legal Pages

## Overview
Standard legal and compliance pages. Content sourced from HomeKey's existing
privacy policy and terms; modernize formatting for the new site.

## Pages to Build
```
/privacy-policy
/terms-of-service
/satisfaction-guarantee
/accessibility-statement
```

## /privacy-policy
- Migrate existing HomeKey privacy policy from homekeyinspections.com
- Sections: data collected, how it's used, cookies, third-party services,
  contact info for requests, effective date
- Clean typography — no sidebar, just flowing text with anchor-linked sections

## /terms-of-service
- Migrate existing HomeKey ToS
- Sections: scope of services, limitations of liability, inspection standards
  (ASHI Standards of Practice), report delivery, dispute resolution
- Anchor-linked table of contents at top

## /satisfaction-guarantee
- Full satisfaction guarantee language
- What the guarantee covers (we'll re-inspect if client finds issues
  within X days that we missed)
- How to invoke (call/email within timeframe)
- What it does NOT cover (cosmetic items, conditions inaccessible on day of inspection)
- Contact: (571) 281-3846

## /accessibility-statement
- Commitment to WCAG 2.1 AA compliance
- Known issues (if any)
- Feedback/contact mechanism for accessibility concerns
- Last reviewed date

## Implementation Notes
- All four pages use a shared `LegalPage` layout component
- Table of contents generated from headings on long pages
- Print-friendly CSS

## Acceptance Criteria
- [ ] All 4 pages render with correct content
- [ ] Table of contents links scroll to correct sections
- [ ] Pages are print-friendly
- [ ] Each page has unique `<title>` and `<meta description>`
- [ ] `npm run build` and `npm run lint` pass
- [ ] `npm test` passes

## Out of Scope
- Spanish translations of legal pages
- Cookie consent banner (separate concern)
- GDPR/CCPA-specific flows
