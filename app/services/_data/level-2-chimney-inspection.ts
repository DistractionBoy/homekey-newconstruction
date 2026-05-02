import type { ServiceData } from './types'

export const chimneyInspectionData: ServiceData = {
  slug: 'level-2-chimney-inspection',
  title: 'Level II Chimney Inspection',
  subtitle: 'Required when buying or selling. Includes video scan of the flue lining.',
  metaDescription:
    'Level II chimney inspection in Northern Virginia. Required at change of occupancy. Video scan of flue lining included. NFPA 211 standard. HomeKey Inspections.',
  whyImportant: [
    'A Level II chimney inspection is required by NFPA 211 whenever there is a change of occupancy — meaning every home sale involving a fireplace or wood stove. This isn\'t optional or a formality. A cracked or compromised flue liner is a serious fire and carbon monoxide hazard.',
    'A standard home inspection includes a visual check of the firebox and visible flue. It does not include a video scan of the interior flue lining. That\'s the Level II component — and it\'s the only way to identify liner cracks, spalling, deterioration, and blockages that can\'t be seen from below.',
    'Chimney fires and CO poisoning from flue gas leaks into living space are preventable. A Level II inspection before you close gives you documentation of the chimney\'s condition and the ability to require repairs or factor the cost into your negotiation.',
  ],
  whatWeInspect: [
    {
      heading: 'Level II Inspection Components',
      bullets: [
        'Full video scan of the flue lining from firebox to cap',
        'Firebox: floor, walls, throat, and smoke chamber',
        'Damper operation and sealing',
        'Smoke chamber: parging and smoke shelf condition',
        'Flue cap, crown, and top flashing',
        'Exterior chimney masonry or siding and step flashing',
        'Clearances from combustibles at flue penetrations',
      ],
    },
    {
      heading: 'Common Findings',
      bullets: [
        'Liner cracks, spalling, and mortar joint failure',
        'Creosote and soot accumulation (refer for cleaning)',
        'Deteriorated mortar joints in the firebox or smoke chamber',
        'Animal nests or debris blocking the flue',
        'Missing or inadequate flue cap',
        'Improper installation or clearance violations',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Schedule with or separate from home inspection',
      description:
        'A Level II chimney inspection can be added to your home inspection or scheduled as a standalone service.',
    },
    {
      step: 2,
      title: '45–60 minute inspection',
      description:
        'We inspect the firebox, smoke chamber, and run the video camera through the full length of the flue lining to the cap.',
    },
    {
      step: 3,
      title: 'Video review with your inspector',
      description:
        'We review significant findings with you on the camera screen in real time. You can see exactly what we\'re referencing.',
    },
    {
      step: 4,
      title: 'Written report with video stills',
      description:
        'The report includes captured video stills of any deficiencies with location, description, and recommended action.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Level II chimney inspection (with home inspection)', price: '$275' },
      { label: 'Level II chimney inspection (standalone)', price: '$325' },
    ],
    note: 'Video scan of flue lining included. Does not include chimney cleaning.',
  },
  sampleReports: [
    {
      label: 'Level II chimney sample report',
      href: 'https://homekeyinspections.com/wp-content/uploads/Sample-Level-II-Chimney-Inspection.pdf',
    },
  ],
  testimonials: [
    {
      reviewer: 'Helen W.',
      text: 'The video scan showed a significant crack in the terra cotta flue liner that never would have been visible from below. The seller had the liner replaced before closing. That fireplace is now safe to use.',
      platform: 'Google',
    },
    {
      reviewer: 'Greg K.',
      text: 'Thorough, professional, and explained what he was seeing in real time. The report was detailed enough for our masonry contractor to quote the repairs directly.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Add a Level II chimney inspection to your full home inspection.',
    },
    {
      title: 'Re-Inspection',
      href: '/services/re-inspection',
      description: 'Verify chimney repairs were completed correctly.',
    },
    {
      title: 'Annual Inspection Program',
      href: '/services/annual-inspection-program',
      description: 'Annual home health monitoring including fireplace and chimney.',
    },
  ],
  faqs: [
    {
      question: 'What\'s the difference between Level I, II, and III?',
      answer:
        'Level I is a visual inspection of accessible portions during routine cleaning. Level II is required at change of occupancy and includes video scanning of the flue lining. Level III involves opening walls or structure to access hidden areas — required when Level II finds significant damage.',
    },
    {
      question: 'Does this include chimney cleaning?',
      answer:
        'No. The Level II inspection documents condition. Cleaning is a separate service performed by a certified chimney sweep. We can refer you to qualified sweeps if the inspection finds significant creosote buildup.',
    },
    {
      question: 'What if the flue has a problem?',
      answer:
        'We document it in the report with video stills. Common resolutions include stainless steel liner relining, HeatShield liner repair, or in severe cases, rebuilding. A masonry contractor can quote repairs based on the report and video.',
    },
    {
      question: 'We have a gas fireplace. Do we need a Level II?',
      answer:
        'Yes — gas fireplaces also have flue systems that can deteriorate. Gas flue issues can be less visible than wood-burning issues but are equally serious. Level II applies to all fuel types.',
    },
    {
      question: 'The seller says the chimney was recently cleaned. Do I still need an inspection?',
      answer:
        'Cleaning and inspection are different. A chimney sweep who cleans the flue is not required to perform a Level II inspection. You need an independent Level II inspection at change of occupancy regardless of cleaning history.',
    },
  ],
}
