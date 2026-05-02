import type { ServiceData } from './types'

export const vocTestingData: ServiceData = {
  slug: 'voc-testing',
  title: 'VOC & Indoor Air Quality Testing',
  subtitle: 'Three testing tiers for comprehensive chemical air quality analysis.',
  metaDescription:
    'VOC and indoor air quality testing in Northern Virginia. Three tiers: Standard, Predict, and Extensive. ISO-certified lab analysis. New construction and existing homes.',
  whyImportant: [
    'New construction and recently renovated homes off-gas volatile organic compounds from paint, adhesives, flooring, cabinetry, and building materials for months or years after installation. Many are harmless. Some — formaldehyde, benzene, toluene — are not.',
    'VOC concentrations in indoor air are often 2–5 times higher than outdoor levels. In tightly sealed, energy-efficient homes, they can be significantly higher. Children, pregnant women, and anyone with respiratory conditions are particularly sensitive.',
    'Our three testing tiers are designed for different needs: a basic screening for common contaminants, a predictive model for future exposure, and a comprehensive chemical panel for thorough documentation.',
  ],
  whatWeInspect: [
    {
      heading: 'Standard Tier — Basic Screening',
      bullets: [
        'Most common VOCs: formaldehyde, benzene, toluene, xylene',
        'Total VOC concentration',
        'Comparison to EPA reference concentrations',
        'Suitable for move-in peace of mind or mild concerns',
      ],
    },
    {
      heading: 'Predict Tier — Predictive Modeling',
      bullets: [
        'All Standard tier compounds plus extended VOC panel',
        'Predictive modeling for long-term exposure levels',
        'Source identification and decay rate estimates',
        'Suitable for new construction, recent renovation, or known off-gassing materials',
      ],
    },
    {
      heading: 'Extensive Tier — Full Chemical Panel',
      bullets: [
        'Comprehensive VOC library — hundreds of compounds',
        'SVOC (semi-volatile organic compounds)',
        'Aldehyde panel',
        'Full documentation for health-sensitive occupants, due diligence, or legal purposes',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Choose your tier',
      description:
        'We\'ll discuss your situation — new construction, renovation, specific health concerns — and help you choose the right testing tier.',
    },
    {
      step: 2,
      title: 'Closed-house sampling',
      description:
        'Air samples are collected after a closed-house period to ensure representative readings. We place passive samplers at key locations throughout the home.',
    },
    {
      step: 3,
      title: 'ISO-certified lab analysis',
      description:
        'Samples are analyzed by an ISO-certified laboratory. Results are returned within 5–7 business days.',
    },
    {
      step: 4,
      title: 'Results and mitigation options',
      description:
        'We explain your results in plain language and advise on ventilation, source removal, or mitigation if any compounds are elevated.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Standard (basic VOC screening)', price: '$475' },
      { label: 'Extensive (full chemical panel)', price: '$950' },
    ],
    note: 'Predict tier pricing — call for quote based on scope. ISO-certified lab included.',
  },
  sampleReports: [
    {
      label: 'VOC standard sample report',
      href: 'https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Basic-Standard.pdf',
    },
    {
      label: 'VOC predict sample report',
      href: 'https://homekeyinspections.com/wp-content/uploads/IAQ-sample-Retain-Predict.pdf',
    },
    {
      label: 'VOC extensive sample report',
      href: 'https://homekeyinspections.com/wp-content/uploads/IAQ-Extensive-Sample-1.pdf',
    },
  ],
  testimonials: [
    {
      reviewer: 'Alison D.',
      text: 'We moved into a newly built home and I was concerned about off-gassing. The VOC test gave us clear documentation of what was in the air and what we could expect over the first year. Very professional and thorough.',
      platform: 'Google',
    },
    {
      reviewer: 'Frank T.',
      text: 'We had the extensive panel done for a client with multiple chemical sensitivities. The documentation was detailed enough for their physician to review. HomeKey was extremely professional throughout.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Mold Testing',
      href: '/services/mold-testing',
      description: 'ISO-accredited lab mold testing for air quality concerns.',
    },
    {
      title: 'Radon Testing',
      href: '/services/radon-testing',
      description: 'Test for the radioactive gas that accumulates in homes.',
    },
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Start with a full home inspection and add IAQ testing.',
    },
  ],
  faqs: [
    {
      question: 'When should I test for VOCs?',
      answer:
        'Best times are 3–12 months after new construction or major renovation — when off-gassing peaks. Testing before move-in and then again at 6 months gives you a useful baseline comparison.',
    },
    {
      question: 'Does closing windows make a difference?',
      answer:
        'Yes. Closed-house sampling (windows closed 8–12 hours before sampling) concentrates VOCs to measurable levels and gives you a worst-case indoor reading. We\'ll provide instructions for proper sampling conditions.',
    },
    {
      question: 'Are VOCs dangerous?',
      answer:
        'It depends on the specific compound and concentration. Formaldehyde and benzene are classified carcinogens at elevated levels. Many common VOCs are relatively benign. The Standard panel will tell you which ones are present and at what level.',
    },
    {
      question: 'What can I do if VOC levels are elevated?',
      answer:
        'Source removal (replacing off-gassing materials if possible), ventilation (fresh air exchanges), and air purifiers with activated carbon filtration are the main options. We\'ll advise based on what we find.',
    },
  ],
}
