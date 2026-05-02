import type { ServiceData } from './types'

export const radonTestingData: ServiceData = {
  slug: 'radon-testing',
  title: 'Radon Testing',
  subtitle: 'Northern Virginia is a high-radon region. Know what\'s in your home.',
  metaDescription:
    'Radon testing in Northern Virginia, Maryland & DC. Colorless, odorless, and the second leading cause of lung cancer. Test before you buy. ASHI certified.',
  whyImportant: [
    'Radon is a naturally occurring radioactive gas that seeps up from soil and rock. It\'s colorless, odorless, and tasteless — you can\'t detect it without testing. It\'s also the second leading cause of lung cancer in the United States, responsible for approximately 21,000 deaths per year.',
    'Northern Virginia sits in EPA Radon Zone 1 — the highest risk category. Loudoun, Fairfax, Arlington, and Prince William counties all have elevated average radon levels. High-radon levels can occur in any home — new or old, with or without a basement.',
    'The EPA action level is 4 pCi/L. Mitigation systems are highly effective, reliable, and typically cost $800–$1,500. Testing before you buy tells you what you\'re dealing with. Testing after you move in tells you whether mitigation worked.',
  ],
  whatWeInspect: [
    {
      heading: 'How Radon Enters Homes',
      bullets: [
        'Foundation cracks and expansion joints',
        'Sump pump pits and floor drains',
        'Construction joints and service pipe penetrations',
        'Crawl space soil and exposed earth',
        'Well water (contributes to indoor radon in some cases)',
      ],
    },
    {
      heading: 'Test Types Available',
      bullets: [
        'Short-term test (48–96 hours): required for real estate transactions',
        'Long-term test (90+ days): gives a more accurate annual average',
        'Closed-house conditions required for accurate short-term results',
        'Lowest livable level of the home tested (basement, first floor)',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Device placed during inspection',
      description:
        'For home purchases, we place a calibrated radon test device during or before your home inspection. Closed-house conditions must be maintained for the test duration.',
    },
    {
      step: 2,
      title: '48–96 hour test window',
      description:
        'The device collects continuously for the test period. Windows and exterior doors remain closed (except for brief entries/exits) during testing.',
    },
    {
      step: 3,
      title: 'Lab analysis',
      description:
        'The device is sent to a qualified laboratory for analysis. Results are returned within 1–2 business days of device retrieval.',
    },
    {
      step: 4,
      title: 'Results and next steps',
      description:
        'We deliver the lab report and explain what the pCi/L level means. If results are at or above 4 pCi/L, we discuss mitigation options and provide contractor referrals.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Radon testing (with home inspection)', price: '$195' },
      { label: 'Radon testing (standalone)', price: '$245' },
    ],
    note: 'Short-term test (48–96 hours). Meets EPA and state guidelines for real estate transactions.',
  },
  sampleReports: [
    {
      label: 'Sample radon report',
      href: 'https://homekeyinspections.com/wp-content/uploads/Sample_Radon-1.pdf',
    },
  ],
  testimonials: [
    {
      reviewer: 'Megan T.',
      text: 'We tested and came back at 6.8 pCi/L — well above the EPA action level. Had mitigation installed before closing and retested at 1.2. HomeKey made the whole process clear and helped us through next steps.',
      platform: 'Google',
    },
    {
      reviewer: 'Phil G.',
      text: 'Tested two homes we were considering buying. One came back clean, one required mitigation. That information directly affected our decision. Worth every dollar.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Add radon testing to your full home inspection for $195.',
    },
    {
      title: 'Mold Testing',
      href: '/services/mold-testing',
      description: 'ISO-accredited air quality testing for mold spores.',
    },
    {
      title: 'Water Quality Testing',
      href: '/services/water-quality-testing',
      description: 'Well water can also contribute to indoor radon exposure.',
    },
  ],
  faqs: [
    {
      question: 'What is the EPA action level for radon?',
      answer:
        'The EPA recommends mitigation when radon levels are at or above 4 pCi/L. Levels between 2 and 4 pCi/L are considered elevated and mitigation may be considered. Even below 4, there is no completely safe level of radon exposure.',
    },
    {
      question: 'Does a new home have radon?',
      answer:
        'Yes. Radon is a geologic phenomenon — it depends on the soil and rock beneath the home, not the home\'s age. New construction homes can have high radon levels, particularly in basements. Pre-drywall inspection is an excellent time to consider radon-rough-in or sub-slab depressurization.',
    },
    {
      question: 'What are closed-house conditions?',
      answer:
        'Windows and exterior doors remain closed except for brief entries and exits. HVAC systems may operate normally. This is required for 12 hours before and during the test period to ensure accurate results.',
    },
    {
      question: 'How much does radon mitigation cost?',
      answer:
        'A sub-slab depressurization system — the most common and effective method — typically costs $800–$1,500 installed. It reduces radon levels by 50–99%. We can refer you to qualified mitigation contractors.',
    },
    {
      question: 'Do I need to retest after mitigation?',
      answer:
        'Yes. Retest 24–48 hours after mitigation system installation, and again in the first year. Post-mitigation testing is typically under 2 pCi/L.',
    },
  ],
}
