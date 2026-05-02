import type { ServiceData } from './types'

export const reInspectionData: ServiceData = {
  slug: 're-inspection',
  title: 'Re-Inspection',
  subtitle: 'Verify repairs were done right before you close.',
  metaDescription:
    'Re-inspection services in Northern Virginia. Confirm seller repairs were completed correctly after your initial home inspection. ASHI certified.',
  whyImportant: [
    'The seller agreed to fix the issues your inspection found. But "fixed" can mean many things — properly repaired, temporarily patched, or hastily concealed. A re-inspection confirms which one you got.',
    'Re-inspections typically take 1 to 2 hours and focus on the specific items from the original report. We verify the repair was completed, meets code, and is likely to hold up — not just that something was done.',
    'Closing without a re-inspection on items that were supposed to be fixed means accepting those repairs sight-unseen. If the work was substandard, you\'ll own that problem the day you close.',
  ],
  whatWeInspect: [
    {
      heading: 'Agreed Repair Items',
      bullets: [
        'All items listed in the repair addendum or seller\'s repair response',
        'Verification of professional work versus DIY patches',
        'Code compliance for electrical, plumbing, and structural repairs',
        'Evidence that the underlying cause was addressed, not just the symptom',
      ],
    },
    {
      heading: 'Related Areas',
      bullets: [
        'Adjacent systems that may have been disturbed by the repair',
        'New deficiencies created during the repair process',
        'Documentation of incomplete or inadequate work',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Schedule after repair completion',
      description:
        'Book the re-inspection after the seller notifies your agent all repairs are complete. Try to allow a day or two before closing for follow-up if issues arise.',
    },
    {
      step: 2,
      title: '1–2 hour focused evaluation',
      description:
        'We return to the home with the original inspection report and review each repair item on the list.',
    },
    {
      step: 3,
      title: 'Same-day report',
      description:
        'You receive a supplemental report referencing the original findings, with photos and a pass/fail status for each repair item.',
    },
    {
      step: 4,
      title: 'Use report before closing',
      description:
        'If repairs are incomplete or inadequate, your agent can use the report to go back to the seller before you close.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Re-inspection (focused repair verification)', price: '$375' },
    ],
    note: 'Must reference an original HomeKey Inspections report. Items are verified against the agreed repair list.',
  },
  sampleReports: [
    {
      label: 'Re-inspection sample report',
      href: 'https://www.homegauge.com/report/18361432',
    },
  ],
  testimonials: [
    {
      reviewer: 'Lena P.',
      text: 'The re-inspection caught that two of the three agreed items were not actually completed. We had the documentation we needed to go back to the seller before closing. Absolutely worth it.',
      platform: 'Google',
    },
    {
      reviewer: 'Carlos M.',
      text: 'Quick, professional, and gave me real peace of mind. All repairs were done correctly and I closed knowing everything was taken care of.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'The original thorough evaluation your re-inspection follows up on.',
    },
    {
      title: 'Radon Testing',
      href: '/services/radon-testing',
      description: 'Add radon to your inspection package if not already tested.',
    },
    {
      title: 'Sewer Scope',
      href: '/services/sewer-scope',
      description: 'Video inspection of the lateral sewer line.',
    },
  ],
  faqs: [
    {
      question: 'Do I need to use HomeKey for my original inspection to get a re-inspection?',
      answer:
        'Yes. Our re-inspection service references the original HomeKey report and addresses those specific findings. We don\'t re-inspect work from another inspector\'s report.',
    },
    {
      question: 'What if repairs are incomplete?',
      answer:
        'We document it in the re-inspection report. Your agent can use the report to require the seller complete the agreed repairs before closing, or to negotiate a credit.',
    },
    {
      question: 'How close to closing can I schedule?',
      answer:
        'As close as 24 hours before closing if needed. But ideally, schedule 2–3 days out so you have time to respond if repairs are incomplete.',
    },
    {
      question: 'What if the seller made additional repairs beyond the agreed list?',
      answer:
        'We focus on the agreed items. If you want the additional repairs evaluated, let us know in advance and we\'ll incorporate them into the scope.',
    },
  ],
}
