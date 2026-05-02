import type { ServiceData } from './types'

export const homeInspectionData: ServiceData = {
  slug: 'home-inspection',
  title: 'Home Inspection',
  subtitle: 'The most important inspection of your buying journey.',
  metaDescription:
    'ASHI ACI-certified home inspection in Northern Virginia, Maryland & DC. 3–5 hour evaluation, photo and video-rich report delivered within 24 hours. Book online.',
  whyImportant: [
    'Buying a home is the largest financial decision most people ever make — yet a home hides its problems well. Water damage behind fresh drywall. Faulty electrical in the attic. A cracked heat exchanger in a furnace that\'s been quietly leaking carbon monoxide. A thorough home inspection surfaces these issues before they become your problem.',
    'HomeKey inspectors spend 3 to 5 hours on every home. We work for the buyer, not the closing timeline. That means we take the time to check every accessible system and component: roof to foundation, HVAC to plumbing, electrical panel to crawl space.',
    'Our reports include photos and short video clips of every defect we find. They\'re written in plain language — not a cryptic checklist — so you can read it, share it with your agent, and use it to negotiate with confidence.',
  ],
  whatWeInspect: [
    {
      heading: 'Roof & Exterior',
      bullets: [
        'Roofing material condition, flashing, and penetrations',
        'Gutters, downspouts, and drainage grading',
        'Exterior cladding, soffits, fascia, and trim',
        'Foundation visible from exterior, driveway, and walkways',
        'Decks, porches, balconies, and railings',
        'Garage door operation, safety reversal, and firewall condition',
      ],
    },
    {
      heading: 'Structural & Foundation',
      bullets: [
        'Basement or crawl space — moisture intrusion, efflorescence, cracks',
        'Floor system: joists, girders, posts, and columns',
        'Wall structure and load-bearing elements',
        'Visible foundation walls and footings',
      ],
    },
    {
      heading: 'Electrical System',
      bullets: [
        'Main service panel — breakers, labeling, and capacity',
        'Subpanels and branch circuits',
        'Outlets, switches, and fixtures throughout',
        'GFCI and AFCI protection where required',
        'Smoke and CO detector presence and placement',
        'Visible wiring type and condition',
      ],
    },
    {
      heading: 'Plumbing System',
      bullets: [
        'Water heater — age, condition, TPR valve, and venting',
        'Supply piping material, visible leaks, and water pressure',
        'Drain, waste, and vent system performance',
        'Fixtures: toilets, sinks, tubs, and showers',
        'Hose bib shutoffs and exterior faucets',
      ],
    },
    {
      heading: 'HVAC System',
      bullets: [
        'Heating and cooling equipment — age, operation, and condition',
        'Heat exchanger integrity (cracking = CO risk)',
        'Ductwork distribution and air handler',
        'Filtration and thermostat operation',
        'Flue and combustion air ventilation',
      ],
    },
    {
      heading: 'Interior',
      bullets: [
        'Walls, ceilings, and floors — staining, cracks, and settlement',
        'Windows and doors — operation, sealing, and glazing',
        'Attic: insulation levels, ventilation, moisture, and sheathing',
        'Fireplace: firebox, damper, and visible flue condition',
        'Kitchen appliances (when left with home)',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Book online in 60 seconds',
      description:
        'Select your date, home size, and add-ons. You\'ll receive a confirmation and a reminder the day before.',
    },
    {
      step: 2,
      title: 'We arrive on time',
      description:
        'Your ASHI-certified inspector arrives at the scheduled time with all required equipment, including a full thermal imaging camera.',
    },
    {
      step: 3,
      title: '3–5 hour walk-through',
      description:
        'We inspect every accessible system and component from roof to foundation. You\'re welcome and encouraged to attend — we\'ll walk you through our findings in real time.',
    },
    {
      step: 4,
      title: 'Report within 24 hours',
      description:
        'Your photo-and-video-rich report is delivered the same day or by the following morning. Written in plain English, not inspector jargon.',
    },
    {
      step: 5,
      title: 'Follow-up support',
      description:
        'Questions after reading the report? Call or email your inspector directly. We\'re here until you\'re confident about your next step.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Single-family home ≤ 2,500 sq ft', price: '$675' },
      { label: 'Single-family home 2,501–3,000 sq ft', price: '$725' },
      { label: 'Single-family home 3,001–3,500 sq ft', price: '$775' },
      { label: 'Single-family home 3,501–4,000 sq ft', price: '$850' },
      { label: 'Single-family home > 4,000 sq ft', price: 'Call for quote' },
      { label: 'Condo ≤ 1,500 sq ft', price: '$500' },
      { label: 'Condo 1,501–2,000 sq ft', price: '$550' },
      { label: 'Condo 2,001–2,500 sq ft', price: '$600' },
    ],
    note: 'Thermal imaging included at no extra charge on every inspection.',
  },
  sampleReports: [
    {
      label: 'Sample report #1',
      href: 'https://www.homegauge.com/report/13617934',
    },
    {
      label: 'Sample report #2',
      href: 'https://www.homegauge.com/report/13581748',
    },
  ],
  testimonials: [
    {
      reviewer: 'Michael T.',
      text: 'Ian was incredibly thorough — spent nearly 4 hours on our 2,400 sq ft home and caught issues our agent didn\'t know about. The report was detailed, easy to read, and helped us negotiate a $6,000 credit. Worth every penny.',
      platform: 'Google',
    },
    {
      reviewer: 'Sarah K.',
      text: 'I was nervous as a first-time buyer but Ian walked me through everything he found in real time. He answered all my questions patiently and the report was in my inbox the same evening. I felt confident going into closing.',
      platform: 'Google',
    },
    {
      reviewer: 'David R.',
      text: 'Professional, punctual, and thorough. The thermal imaging caught a water intrusion issue behind the master bath wall that wouldn\'t have been visible otherwise. Saved me from a nasty surprise.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Radon Testing',
      href: '/services/radon-testing',
      description: 'Northern Virginia is a high-radon region. Add radon testing to your inspection for $195.',
    },
    {
      title: 'Sewer Scope',
      href: '/services/sewer-scope',
      description: 'Video inspection of the lateral sewer line. Catches root intrusion before it becomes your repair bill.',
    },
    {
      title: 'Mold Testing',
      href: '/services/mold-testing',
      description: 'ISO/IEC 17025-accredited lab analysis. Know what\'s in the air before you move in.',
    },
  ],
  faqs: [
    {
      question: 'Should I be present for the inspection?',
      answer:
        'Yes — we strongly recommend it. Being present lets your inspector walk you through findings in real time, answer your questions, and give you a complete picture of the home\'s condition. You\'ll leave with context that no report can fully capture.',
    },
    {
      question: 'How long does a home inspection take?',
      answer:
        'Typically 3 to 5 hours for a single-family home, depending on size and condition. Condos and townhomes may be shorter. We don\'t rush — if we need more time, we take it.',
    },
    {
      question: 'What does a home inspection not cover?',
      answer:
        'A home inspection covers visible and accessible systems and components. We don\'t inspect behind walls, under slabs, or inside sealed systems. Specialized inspections (mold, radon, sewer scope, pest) require separate testing. We\'ll flag anything that warrants further evaluation.',
    },
    {
      question: 'Can the seller be present?',
      answer:
        'The seller can be in the home but we recommend they step out during the inspection. It creates a more open environment for you to ask questions and for us to discuss findings candidly.',
    },
    {
      question: 'Will the inspector tell me if I should buy the house?',
      answer:
        'No — and you wouldn\'t want us to. Our job is to give you the most accurate picture of the home\'s condition possible. The decision to buy is yours, made with full information. We work for you, not the transaction.',
    },
    {
      question: 'Do you inspect new construction homes?',
      answer:
        'Yes. New construction homes have their own inspection types: pre-drywall (before walls close), pre-settlement (final walkthrough), and 11-month warranty. See our New Construction services for details.',
    },
  ],
}
