import type { ServiceData } from './types'

export const annualInspectionData: ServiceData = {
  slug: 'annual-inspection-program',
  title: 'Annual Inspection Program',
  subtitle: 'An ongoing relationship with your home. Catch issues before they escalate.',
  metaDescription:
    'Annual home inspection program in Northern Virginia. Ongoing home health monitoring, seasonal maintenance, and peace of mind. HomeKey Inspections.',
  whyImportant: [
    'Homes don\'t announce when something is going wrong. A slow roof leak, a failing HVAC heat exchanger, a grade that\'s shifted toward the foundation — these develop quietly over months or years and announce themselves as expensive emergencies.',
    'Annual inspections turn reactive maintenance into proactive maintenance. A $375 annual inspection that catches a $4,000 roof repair in year two is the best money you spend on your home. An inspector who knows your home from previous visits notices what\'s changed.',
    'The Annual Inspection Program is for homeowners who want an ongoing relationship with a professional who knows their home. It\'s also how we stay connected with clients whose homes we inspected when they bought.',
  ],
  whatWeInspect: [
    {
      heading: 'Seasonal Exterior Check',
      bullets: [
        'Roof condition: shingles, flashing, and penetrations',
        'Gutters and downspout drainage',
        'Foundation grading and drainage',
        'Exterior caulking, sealants, and trim gaps',
        'Decks, steps, and railings for seasonal movement',
        'HVAC condenser and exterior equipment',
      ],
    },
    {
      heading: 'Mechanical Systems',
      bullets: [
        'HVAC heating and cooling performance',
        'Water heater age and condition',
        'Plumbing fixtures and visible supply connections',
        'Electrical panel and visible wiring condition',
        'Sump pump operation (where present)',
      ],
    },
    {
      heading: 'Interior Health',
      bullets: [
        'Attic: moisture, insulation, and ventilation',
        'Basement or crawl space: moisture, efflorescence, and cracks',
        'Ceilings and walls for new staining or cracking',
        'Window and door sealing',
        'Smoke and CO detector presence and function',
        'Fireplace damper and visible flue condition',
      ],
    },
    {
      heading: 'Maintenance Prioritization',
      bullets: [
        'Documentation of deferred maintenance items',
        'Priority ranking: immediate, within 1 year, monitor',
        'Contractor referrals for items needing repair',
        'Year-over-year comparison if HomeKey is your inspector',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Schedule annually',
      description:
        'Most homeowners schedule in spring (post-winter damage check) or fall (pre-heating season). We can time the inspection to your preference.',
    },
    {
      step: 2,
      title: '2–3 hour home evaluation',
      description:
        'A full walk-through of your home with emphasis on systems and conditions that have changed since your last visit.',
    },
    {
      step: 3,
      title: 'Prioritized report',
      description:
        'Your report organizes findings by urgency: immediate action, within the year, and monitor. Clear and actionable.',
    },
    {
      step: 4,
      title: 'Year-over-year tracking',
      description:
        'If HomeKey performed your original or previous inspections, we reference prior findings and track what\'s changed over time.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Annual inspection (single-family home)', price: '$375' },
    ],
    note: 'Thermal imaging included. Scheduling open to all homeowners, not just prior HomeKey clients.',
  },
  sampleReports: [
    {
      label: 'Annual inspection sample report',
      href: 'https://www.homegauge.com/report/20412681',
    },
  ],
  testimonials: [
    {
      reviewer: 'Patricia L.',
      text: 'Ian has inspected my home three years running now. The year-over-year comparison is incredibly valuable — he caught that a small moisture reading from year one had grown significantly by year three. That turned into a crawl space remediation that, caught early, cost half what it would have otherwise.',
      platform: 'Google',
    },
    {
      reviewer: 'Brian C.',
      text: 'I treated my first annual inspection as optional. After Ian found a failing heat exchanger in the furnace and a grade problem that was directing water toward my foundation, I stopped thinking of it as optional.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Original purchase inspection — the first step in knowing your home.',
    },
    {
      title: 'Warranty Inspection',
      href: '/services/warranty-inspection',
      description: 'Document builder defects before your new construction warranty expires.',
    },
    {
      title: 'Radon Testing',
      href: '/services/radon-testing',
      description: 'Add radon testing to your annual inspection.',
    },
  ],
  faqs: [
    {
      question: 'Is this only for HomeKey inspection clients?',
      answer:
        'No. Any homeowner in our service area can schedule an annual inspection. If you have prior inspection reports from another inspector, bring them and we\'ll reference them for context.',
    },
    {
      question: 'What\'s the best time of year to schedule?',
      answer:
        'Spring is ideal for catching winter damage before summer makes repairs more complex. Fall catches issues before heating season. Either works — what matters is consistency.',
    },
    {
      question: 'Does the annual inspection include radon testing?',
      answer:
        'Not by default. Radon testing can be added for $245 standalone. Radon levels can change over time as soil conditions shift, so periodic retesting is a good idea.',
    },
    {
      question: 'What do I do with the prioritized findings?',
      answer:
        'The report is organized for you to take action: immediate items should be addressed within 30 days, within-year items go on your maintenance calendar, and monitor items get noted for the following year\'s inspection.',
    },
  ],
}
