import type { ServiceData } from './types'

export const sewerScopeData: ServiceData = {
  slug: 'sewer-scope',
  title: 'Sewer Scope Inspection',
  subtitle: 'See inside your lateral sewer line before it becomes your repair bill.',
  metaDescription:
    'Sewer scope inspection in Northern Virginia. Video inspection of the lateral sewer line catches root intrusion, cracks, and offset joints before you close. ASHI certified.',
  whyImportant: [
    'A sewer lateral replacement in Northern Virginia typically costs $5,000–$15,000 or more. It\'s not covered by homeowner\'s insurance. A sewer scope inspection costs a fraction of that — and can tell you whether the line is clear, partially obstructed, or in need of immediate replacement.',
    'The sewer lateral runs from the home to the municipal connection at the street. It\'s not visible from above ground and not evaluated during a standard home inspection. Tree roots, pipe bellies, offset joints, cracking, and calcite deposits are common problems that build up over time and can cause sewage backups.',
    'Homes over 20 years old, homes with mature trees near the property, and homes in areas with older clay tile sewer systems are highest risk. But any home can have sewer issues — we\'ve found them in 3-year-old properties.',
  ],
  whatWeInspect: [
    {
      heading: 'What the Camera Shows',
      bullets: [
        'Root intrusion from nearby trees',
        'Pipe belly (sag that allows debris accumulation)',
        'Offset joints from soil movement or settling',
        'Cracking, fractures, and wall deterioration',
        'Calcite deposits and grease buildup',
        'Pipe material identification (clay, cast iron, PVC, Orangeburg)',
        'Condition at the main municipal connection',
      ],
    },
    {
      heading: 'Risk Factors',
      bullets: [
        'Homes over 20 years old',
        'Mature trees within 20 feet of the lateral path',
        'Clay tile or Orangeburg pipe (older materials)',
        'Areas with expansive or shifting soils',
        'Prior sewage backups or slow drains',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Schedule with or alongside home inspection',
      description:
        'A sewer scope can be performed during your home inspection or as a standalone service. We recommend combining them to save a trip.',
    },
    {
      step: 2,
      title: '30–60 minute video inspection',
      description:
        'We access the sewer lateral through the main cleanout. A high-resolution camera travels the full length of the lateral to the municipal connection, recording continuously.',
    },
    {
      step: 3,
      title: 'Video recording included',
      description:
        'You receive the full video recording of the scope. Your inspector walks you through what was found in real time, and the findings are noted in the written report.',
    },
    {
      step: 4,
      title: 'Same-day report',
      description:
        'The written report documents pipe condition, any deficiencies found, recommended action, and urgency. You\'ll have what you need to negotiate or plan repairs.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Sewer scope (with home inspection)', price: '$425' },
      { label: 'Sewer scope (standalone)', price: '$495' },
    ],
    note: 'Video recording of full scope included. Must have accessible cleanout.',
  },
  sampleReports: [
    {
      label: 'Sewer scope sample reports',
      href: 'https://homekeyinspections.com/sewer-scope-sample-reports/',
    },
  ],
  testimonials: [
    {
      reviewer: 'Nathan W.',
      text: 'Sewer scope revealed root intrusion and a belly in the line. The seller credited us $4,500 toward repairs at closing. The scope cost $425. That\'s a 10x return on the same day.',
      platform: 'Google',
    },
    {
      reviewer: 'Christina A.',
      text: 'Ian was thorough and explained everything he was seeing as he was seeing it. The video recording was especially useful when sharing with our plumber for a repair estimate.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Add a sewer scope to your full home inspection for $425.',
    },
    {
      title: 'Water Quality Testing',
      href: '/services/water-quality-testing',
      description: 'Test your water supply for contaminants.',
    },
    {
      title: 'Re-Inspection',
      href: '/services/re-inspection',
      description: 'Verify sewer repairs were completed correctly.',
    },
  ],
  faqs: [
    {
      question: 'Does every home need a sewer scope?',
      answer:
        'We recommend it for homes over 20 years old or homes with significant tree coverage near the lateral path. That said, we\'ve found problems in much newer homes. It\'s a low-cost way to rule out a potentially large expense.',
    },
    {
      question: 'What if there\'s no cleanout access?',
      answer:
        'Most homes have a main cleanout in the basement, crawl space, or outside near the foundation. If there\'s no accessible cleanout, we may be able to access through a toilet. Let us know in advance so we can plan.',
    },
    {
      question: 'Can root intrusion be repaired without full replacement?',
      answer:
        'In some cases, hydro-jetting (high-pressure water clearing) can clear roots temporarily. For significant intrusion or pipe damage, lining (CIPP) or replacement is usually needed. A plumber can advise based on the video.',
    },
    {
      question: 'What is Orangeburg pipe?',
      answer:
        'Orangeburg is a type of pipe made from layers of wood pulp and tar, used from the 1860s to 1970s. It deteriorates over time, becoming soft and collapsing. Homes built before 1970 that haven\'t had their laterals replaced may have it.',
    },
    {
      question: 'How long does the lateral typically run?',
      answer:
        'In most suburban homes, the lateral runs 50–150 feet from the house to the municipal main at the street. We scope the full accessible length.',
    },
  ],
}
