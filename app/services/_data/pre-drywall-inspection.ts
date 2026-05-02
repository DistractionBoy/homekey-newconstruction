import type { ServiceData } from './types'

export const preDrywallData: ServiceData = {
  slug: 'pre-drywall-inspection',
  title: 'Pre-Drywall Inspection',
  subtitle: 'The only chance to see inside your new home before the walls close.',
  metaDescription:
    'Pre-drywall inspection in Northern Virginia for new construction homes. Catch framing, mechanical, and insulation defects before drywall goes up. ASHI certified.',
  whyImportant: [
    'When drywall goes up, everything behind it becomes invisible. Once those walls close, any mistake in framing, any gap in insulation, any improperly connected plumbing or ductwork is sealed in — potentially for the life of the home. The pre-drywall inspection is your one window to see inside.',
    'Builders are under schedule pressure, and subcontractors sometimes cut corners. We\'ve seen missing fire blocking, incorrectly installed vapor barriers, ducts that dead-end into the wall cavity instead of the room, and plumbing rough-ins that don\'t meet code. None of these would be visible after drywall. All of them are easily fixed before it goes up.',
    'A pre-drywall inspection pairs naturally with a pre-settlement walkthrough and 11-month warranty inspection. Together they give you full coverage through your new construction timeline.',
  ],
  whatWeInspect: [
    {
      heading: 'Framing & Structure',
      bullets: [
        'Floor, wall, and roof framing for proper span and spacing',
        'Notching and boring of structural members for compliance',
        'Beam pockets, hangers, and connection hardware',
        'Fire blocking at floor-ceiling assemblies and around penetrations',
        'Shear walls and hold-down hardware where specified',
      ],
    },
    {
      heading: 'Rough Plumbing',
      bullets: [
        'Supply line routing, pipe sizing, and support',
        'Drain, waste, and vent configuration',
        'Water heater rough-in location and clearances',
        'Tub and shower rough-in positions against plan',
        'Exterior hose bib locations',
      ],
    },
    {
      heading: 'Rough Electrical',
      bullets: [
        'Panel location, service size, and clearances',
        'Box locations consistent with plan',
        'Wiring methods and protection through framing members',
        'Dedicated circuit rough-ins (HVAC, range, dryer)',
        'Smoke and CO detector rough-in locations',
      ],
    },
    {
      heading: 'HVAC Rough-In',
      bullets: [
        'Duct sizing and routing relative to plan',
        'Supply and return register rough-in locations',
        'Air handler and equipment clearances',
        'Combustion air and flue rough-in paths',
        'Condensate drain routing',
      ],
    },
    {
      heading: 'Insulation',
      bullets: [
        'Insulation type and R-value for walls, floors, and ceiling',
        'Gaps, voids, and compression that reduce effective R-value',
        'Vapor barrier installation and orientation',
        'Rim joist and band joist insulation',
        'Blocking for air sealing at top plates and penetrations',
      ],
    },
    {
      heading: 'Windows & Doors',
      bullets: [
        'Rough opening sizes against plan dimensions',
        'Header sizing for span',
        'Flashing and moisture barrier behind window openings',
        'Exterior door thresholds and weather barrier',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Schedule before drywall starts',
      description:
        'Coordinate with your builder to book the inspection after insulation is installed but before any drywall or exterior cladding goes up. We\'ll work around the construction schedule.',
    },
    {
      step: 2,
      title: '2–3 hour inspection',
      description:
        'We walk through every framed room documenting framing, rough mechanicals, and insulation. The open walls let us see everything that will be hidden after close-in.',
    },
    {
      step: 3,
      title: 'Detailed photo report',
      description:
        'Your report is delivered the same day or next morning with photos of every deficiency, the location, and what needs to be corrected before drywall.',
    },
    {
      step: 4,
      title: 'Share with your builder',
      description:
        'Take the report to your builder superintendent. Most deficiencies are simple corrections at this stage — far cheaper and easier than repairs after drywall.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Pre-drywall ≤ 4,500 sq ft', price: '$675' },
      { label: 'Pre-drywall 4,501–6,500 sq ft', price: '$775' },
    ],
    note: 'Bundle with pre-settlement and warranty inspections for new construction coverage from foundation to move-in.',
  },
  sampleReports: [
    {
      label: 'Pre-drywall sample report',
      href: 'https://www.homegauge.com/report/13621482/HKI-3-PreDrywallInspection.html',
    },
  ],
  testimonials: [
    {
      reviewer: 'James L.',
      text: 'Ian found several framing issues and a duct that was routed incorrectly before drywall went up. The builder corrected everything. I dread to think what it would have cost to fix after the walls were closed.',
      platform: 'Google',
    },
    {
      reviewer: 'Priya M.',
      text: 'Worth every dollar. The pre-drywall report gave us a written record of what was behind our walls. When we noticed an issue later during our warranty period, we had documentation to back us up.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Warranty Inspection',
      href: '/services/warranty-inspection',
      description: 'Document builder defects before your 11-month warranty expires.',
    },
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Pre-settlement final walkthrough of your completed new home.',
    },
    {
      title: 'Radon Testing',
      href: '/services/radon-testing',
      description: 'Add radon testing to your new construction inspection.',
    },
  ],
  faqs: [
    {
      question: 'When exactly should I schedule the pre-drywall inspection?',
      answer:
        'After all rough plumbing, electrical, HVAC, and framing are complete and insulation has been installed — but before any drywall, sheathing, or exterior cladding covers the work. Ask your builder superintendent for the insulation-complete milestone.',
    },
    {
      question: 'Will my builder allow a third-party inspector on site?',
      answer:
        'In Northern Virginia, most reputable builders allow it. It\'s your home and your purchase contract generally gives you this right. If a builder refuses, that\'s worth noting as a red flag.',
    },
    {
      question: 'Can I combine this with a pre-settlement inspection?',
      answer:
        'Yes — and we recommend it. The pre-drywall covers hidden systems; the pre-settlement covers the finished home. Together they give you complete coverage. Ask about our new construction bundle.',
    },
    {
      question: 'My builder offers their own inspections. Why do I need third-party?',
      answer:
        'Builder inspections are quality control for the builder. A third-party inspector works exclusively for you, with no financial stake in the closing. The motivations are different — and so are the results.',
    },
    {
      question: 'What if I miss the pre-drywall window?',
      answer:
        'If drywall is already up, a pre-settlement inspection is still valuable. And at 11 months, the warranty inspection gives you another opportunity to document and correct builder defects before your coverage expires.',
    },
  ],
}
