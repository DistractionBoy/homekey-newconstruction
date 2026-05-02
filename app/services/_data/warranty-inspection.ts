import type { ServiceData } from './types'

export const warrantyInspectionData: ServiceData = {
  slug: 'warranty-inspection',
  title: 'Warranty Inspection',
  subtitle: 'Protect your investment before the builder\'s warranty expires.',
  metaDescription:
    '11-month warranty inspection for new construction homes in Northern Virginia. Document builder defects before your warranty clock runs out. ASHI certified.',
  whyImportant: [
    'Most new construction homes come with a one-year builder\'s warranty. At the 11-month mark, that clock is almost up — and you\'re still responsible for everything that happens after it expires.',
    'The first year of a new home reveals problems that weren\'t visible at move-in: settlement cracks, HVAC issues that only show under load, roof penetrations that leak in the first hard rain, grading that directs water toward the foundation. A warranty inspection documents all of it while the builder is still obligated to make it right.',
    'This is not a minor formality. Builders take warranty claims seriously when backed by a professional inspection report. Homeowners who skip this inspection often pay out of pocket for repairs that were the builder\'s responsibility.',
  ],
  whatWeInspect: [
    {
      heading: 'Exterior & Drainage',
      bullets: [
        'Foundation settlement and grading against the home',
        'Caulking, sealants, and trim gaps that have opened since move-in',
        'Driveway, walkway, and patio settlement and cracking',
        'Decks, railings, and steps for movement or loosening',
        'Roof penetrations and flashing for evidence of leakage',
      ],
    },
    {
      heading: 'Interior Structure',
      bullets: [
        'Wall and ceiling cracks from settlement or framing movement',
        'Floor squeaks and soft spots indicating subfloor issues',
        'Door and window operation — sticking or racking from settlement',
        'Stair handrail and baluster security',
      ],
    },
    {
      heading: 'Mechanical Systems',
      bullets: [
        'HVAC operation in both heating and cooling modes',
        'Filter access and maintenance status',
        'Water heater operation and TPR valve condition',
        'All plumbing fixtures for leaks at connections',
        'Electrical panel labeling, GFCI, and AFCI operation',
      ],
    },
    {
      heading: 'Attic & Crawl Space',
      bullets: [
        'Insulation levels and vapor barrier condition',
        'Ventilation for moisture accumulation or ice damming evidence',
        'Evidence of roof leak staining at sheathing',
        'Ductwork connections for separation or disconnection',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Schedule at 10–11 months',
      description:
        'Book your inspection in month 10 or 11 so you have time to submit a warranty claim before the one-year mark.',
    },
    {
      step: 2,
      title: 'Full home inspection',
      description:
        'We perform a complete inspection of the home — not just a punch list walkthrough. Every system and component gets evaluated.',
    },
    {
      step: 3,
      title: 'Photo-documented report',
      description:
        'Your report is delivered the same day with photos of every deficiency. The report is formatted to support a formal builder warranty claim.',
    },
    {
      step: 4,
      title: 'Submit your warranty claim',
      description:
        'Use the report to submit a formal warranty claim to your builder. Most builders have online portals; attach the report directly.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Single-family home ≤ 2,500 sq ft', price: '$675' },
      { label: 'Single-family home 2,501–3,000 sq ft', price: '$725' },
      { label: 'Single-family home 3,001–3,500 sq ft', price: '$775' },
      { label: 'Single-family home 3,501–4,000 sq ft', price: '$850' },
    ],
    note: 'Bundle with pre-drywall and pre-settlement inspections for new construction coverage from foundation to warranty.',
  },
  sampleReports: [
    {
      label: 'Pre-settlement sample report',
      href: 'https://www.homegauge.com/report/13621652',
    },
  ],
  testimonials: [
    {
      reviewer: 'Keisha W.',
      text: 'My builder dismissed my concerns until I had a professional report in hand. Ian found 14 warranty items at my 11-month inspection. The builder addressed all of them. That report paid for itself many times over.',
      platform: 'Google',
    },
    {
      reviewer: 'Tom S.',
      text: 'I almost skipped this thinking a new home wouldn\'t have issues. Ian found drainage grading problems, several settlement cracks, and an HVAC issue that would have been expensive to fix out of warranty. Do not skip this inspection.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Pre-Drywall Inspection',
      href: '/services/pre-drywall-inspection',
      description: 'Catch framing and mechanical defects before drywall covers them.',
    },
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Pre-settlement final walkthrough of your completed new home.',
    },
    {
      title: 'Annual Inspection Program',
      href: '/services/annual-inspection-program',
      description: 'Ongoing home health monitoring after your warranty expires.',
    },
  ],
  faqs: [
    {
      question: 'When should I schedule a warranty inspection?',
      answer:
        'Month 10 or 11 of occupancy — early enough to receive your report, review it, and submit a warranty claim before the one-year mark. Don\'t wait until month 12; you may run out of time.',
    },
    {
      question: 'What if I already submitted a warranty punch list to my builder?',
      answer:
        'The builder\'s punch list and a third-party warranty inspection serve different purposes. The punch list covers cosmetic items you noticed; the inspection covers systems and components you may not have known to look for. Do both.',
    },
    {
      question: 'Does the builder need to be present?',
      answer:
        'No. The inspection is for your benefit. You\'re welcome to share the report with your builder\'s warranty department after you\'ve reviewed it.',
    },
    {
      question: 'What happens after the warranty expires?',
      answer:
        'You\'re responsible for repairs. Some structural elements carry longer warranties (often 10 years for major structural defects), but most systems are your responsibility after year one. Our Annual Inspection Program helps you stay ahead of issues going forward.',
    },
    {
      question: 'I\'m past 11 months. Is it too late?',
      answer:
        'It depends on your warranty language. Some builders honor claims submitted within the year even if the inspection was slightly late. If you\'re at month 12, call us — we can still do the inspection and the documentation is yours to use as you see fit.',
    },
  ],
}
