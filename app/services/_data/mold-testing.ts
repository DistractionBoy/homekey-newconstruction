import type { ServiceData } from './types'

export const moldTestingData: ServiceData = {
  slug: 'mold-testing',
  title: 'Mold Testing',
  subtitle: 'ISO/IEC 17025:2017-accredited lab analysis. Not "we sent it somewhere."',
  metaDescription:
    'Mold testing in Northern Virginia. Air samples analyzed by an ISO/IEC 17025:2017-accredited laboratory. Results in 1–2 business days. ASHI certified.',
  whyImportant: [
    'Most mold testing companies send samples to a generic third-party lab and hand you a report they barely understand. HomeKey samples are analyzed by an ISO/IEC 17025:2017-accredited laboratory — the same international accreditation standard used for medical and scientific labs. That\'s a meaningfully higher standard, and we\'ll tell you exactly who tested your air.',
    'Competitors often won\'t disclose their lab. Ask them. The quality of your results depends entirely on the quality of the analysis.',
    'Mold is not always visible. It grows inside wall cavities, under flooring, in HVAC ductwork, and in attic spaces — areas that routine visual inspection can\'t reach. Air sampling captures what\'s actually in your breathing environment.',
  ],
  whatWeInspect: [
    {
      heading: 'When to Test',
      bullets: [
        'Visible mold or suspected mold growth in any area',
        'Musty odor that persists without explanation',
        'Recent flooding, water intrusion, or roof leak',
        'Persistent respiratory symptoms, headaches, or allergy-like reactions',
        'New construction where moisture may have been trapped during framing',
        'Post-remediation verification that mold levels have returned to normal',
      ],
    },
    {
      heading: 'What Air Sampling Captures',
      bullets: [
        'Airborne mold spore types and concentrations',
        'Comparison between interior and exterior baseline levels',
        'Identification of elevated or unusual species',
        'Stachybotrys (black mold) and other high-concern species',
        'Cladosporium, Aspergillus/Penicillium, and common indoor molds',
      ],
    },
    {
      heading: 'Sampling Process',
      bullets: [
        'Air-o-Cell cassette sampling using calibrated pump equipment',
        'Indoor samples from areas of concern',
        'Outdoor baseline control sample (required for proper interpretation)',
        'Chain-of-custody documentation for lab submission',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Schedule your test',
      description:
        'Mold testing can be added to any home inspection or scheduled as a standalone service. Tell us the areas of concern and we\'ll build the right sampling plan.',
    },
    {
      step: 2,
      title: 'Air samples collected',
      description:
        'Calibrated pumps collect air samples from areas of concern plus an outdoor control sample. The process takes 30–60 minutes per location.',
    },
    {
      step: 3,
      title: 'ISO-accredited lab analysis',
      description:
        'Samples are submitted to our ISO/IEC 17025:2017-accredited laboratory under chain of custody. Analysis is completed in 1–2 business days.',
    },
    {
      step: 4,
      title: 'Results explained in plain language',
      description:
        'We call you with your results and walk you through what they mean. The written report includes species, counts, comparison to outdoor baseline, and recommended next steps.',
    },
  ],
  pricing: {
    rows: [
      { label: '1 air sample + outdoor control', price: '$325' },
      { label: '2 air samples + outdoor control', price: '$475' },
      { label: '3 air samples + outdoor control', price: '$625' },
      { label: 'Additional samples (each)', price: '$75' },
    ],
    note: 'Outdoor control sample always included. Rush lab results available — ask when booking.',
  },
  sampleReports: [
    {
      label: 'Mold / IAQ sample report',
      href: 'https://homekeyinspections.com/wp-content/uploads/Mold-IAQ-Sample_Report.pdf',
    },
  ],
  testimonials: [
    {
      reviewer: 'Angela B.',
      text: 'We had a musty smell that no one could explain. Ian\'s mold test found elevated Cladosporium levels and traced it back to a slow leak behind the laundry room wall. Having the specific species and counts made remediation planning much easier.',
      platform: 'Google',
    },
    {
      reviewer: 'Robert H.',
      text: 'I specifically asked what lab HomeKey uses before booking. Ian answered immediately — no hesitation. That alone told me I was working with professionals. The report was detailed and the results call was genuinely helpful.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'VOC / IAQ Testing',
      href: '/services/voc-testing',
      description: 'Volatile organic compound testing for chemical air quality concerns.',
    },
    {
      title: 'Radon Testing',
      href: '/services/radon-testing',
      description: 'Test for the colorless, odorless radioactive gas in your home.',
    },
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Add mold testing to your full home inspection.',
    },
  ],
  faqs: [
    {
      question: 'What is ISO/IEC 17025:2017 accreditation?',
      answer:
        'ISO/IEC 17025:2017 is the international standard for testing and calibration laboratories. It verifies that a lab has the technical competence and management systems to produce accurate, reliable results. It\'s the standard used for medical labs, environmental testing, and food safety — and it\'s what sets our lab apart from generic mail-in services.',
    },
    {
      question: 'Can you test for black mold specifically?',
      answer:
        'Yes. Stachybotrys chartarum — commonly called black mold — is identified in our analysis. However, color alone doesn\'t determine mold type or toxicity. Air sampling identifies the actual species present.',
    },
    {
      question: 'How many samples do I need?',
      answer:
        'One sample plus outdoor control covers a single area of concern. Two or three samples are common when there are multiple suspect locations or when you want to test multiple floors. We\'ll help you build the right plan.',
    },
    {
      question: 'What happens if mold is found?',
      answer:
        'We connect you with licensed remediation contractors and advise on next steps based on the species and concentration. High-concern findings are reviewed with you by phone before the written report is delivered.',
    },
    {
      question: 'Is mold testing the same as a visual mold inspection?',
      answer:
        'No. A visual inspection looks for visible mold growth. Air sampling captures what\'s in the air regardless of whether mold is visible. Both have their place — air sampling is how you quantify the problem.',
    },
  ],
}
