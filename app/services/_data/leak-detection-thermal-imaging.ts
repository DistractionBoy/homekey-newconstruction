import type { ServiceData } from './types'

export const leakDetectionData: ServiceData = {
  slug: 'leak-detection-thermal-imaging',
  title: 'Leak Detection & Thermal Imaging',
  subtitle: 'Infrared scanning on every inspection — standard, not an add-on.',
  metaDescription:
    'Thermal imaging and leak detection on every HomeKey inspection at no extra charge. Find hidden moisture, missing insulation, and electrical hot spots. Northern Virginia.',
  whyImportant: [
    'Thermal imaging is included on every HomeKey inspection at no extra charge. This isn\'t a marketing line — it\'s a significant difference from inspectors who charge $150–$300 extra for infrared scanning, or who don\'t own a thermal camera at all.',
    'A thermal camera sees what the naked eye cannot: moisture hidden behind drywall, insulation gaps that don\'t show up on a visual inspection, electrical components running hot under load, and HVAC air leaks that make rooms uncomfortable. These are real findings that change real decisions.',
    'Standalone leak detection services use the same infrared technology combined with moisture meters and targeted investigation to locate the source of known or suspected water intrusion — often without invasive opening of walls.',
  ],
  whatWeInspect: [
    {
      heading: 'What Thermal Imaging Finds',
      bullets: [
        'Moisture intrusion behind walls, ceilings, and floors',
        'Roof and window flashing leaks showing as thermal anomalies',
        'Missing or compressed insulation creating thermal bridging',
        'HVAC duct leaks and air handler inefficiencies',
        'Electrical hot spots: overloaded circuits, loose connections, failing equipment',
        'Plumbing leak locations within wall cavities',
        'Radiant floor heating system performance',
      ],
    },
    {
      heading: 'Moisture Meter Investigation',
      bullets: [
        'Confirmation of thermal anomalies with pin and pinless moisture meters',
        'Quantification of moisture content in affected building materials',
        'Documentation for insurance or remediation purposes',
        'Source tracing from visible staining back to point of entry',
      ],
    },
    {
      heading: 'Standalone Leak Detection',
      bullets: [
        'Investigation of known or suspected leaks with no visible staining',
        'Pre-remediation scope to identify extent of damage',
        'Post-repair verification that moisture has returned to normal levels',
        'Roof, plumbing, window, and HVAC leak source identification',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Included in every home inspection',
      description:
        'Your ASHI-certified inspector uses a full thermal imaging camera throughout every inspection. No extra charge, no upsell. If you want standalone leak detection, book that separately.',
    },
    {
      step: 2,
      title: 'Thermal scan of all accessible areas',
      description:
        'We scan exterior walls, ceilings, electrical panels, HVAC equipment, and any areas of visual concern. Optimal conditions are a temperature differential of at least 10°F between inside and outside.',
    },
    {
      step: 3,
      title: 'Anomalies confirmed with moisture meter',
      description:
        'Any thermal anomaly suggesting moisture is confirmed with a contact or non-invasive moisture meter before being reported. We don\'t flag false positives.',
    },
    {
      step: 4,
      title: 'Photo documentation',
      description:
        'Thermal images are included in your inspection report alongside regular photographs. The report includes a description of findings, location, and recommended action.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Thermal imaging (included with all home inspections)', price: 'Included' },
      { label: 'Standalone leak detection / moisture investigation', price: 'Call for quote' },
    ],
    note: 'Standalone leak detection pricing depends on scope of investigation. Call (571) 281-3846 to discuss.',
  },
  sampleReports: [
    {
      label: 'Leak detection sample report',
      href: 'https://www.homegauge.com/report/13621929/HKI-9.3-LeakDetection.html',
    },
  ],
  testimonials: [
    {
      reviewer: 'Diane P.',
      text: 'The thermal camera found moisture behind the master bedroom wall that wasn\'t visible anywhere. No staining, no smell — just a cold spot on the thermal image. Turned out to be a slow roof flashing leak. Caught before drywall damage was extensive.',
      platform: 'Google',
    },
    {
      reviewer: 'Marcus L.',
      text: 'I specifically chose HomeKey because thermal imaging is included. My previous inspector didn\'t use one and missed a moisture issue that cost me $3,000. Won\'t make that mistake again.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Home Inspection',
      href: '/services/home-inspection',
      description: 'Full home inspection with thermal imaging included at no extra charge.',
    },
    {
      title: 'Mold Testing',
      href: '/services/mold-testing',
      description: 'If thermal imaging finds moisture, test the air for mold.',
    },
    {
      title: 'Water Quality Testing',
      href: '/services/water-quality-testing',
      description: 'Test what\'s in your water supply.',
    },
  ],
  faqs: [
    {
      question: 'Why is thermal imaging included instead of an add-on?',
      answer:
        'Because a home inspection without thermal imaging is a less thorough home inspection. We don\'t believe in charging extra for better work. Thermal imaging is standard equipment for every HomeKey inspector.',
    },
    {
      question: 'When does thermal imaging work best?',
      answer:
        'Thermal imaging is most effective when there\'s a temperature differential of at least 10°F between inside and outside. Cold winter mornings and hot summer days are ideal conditions. It still provides useful data in moderate weather.',
    },
    {
      question: 'Can thermal imaging see through walls?',
      answer:
        'No — it measures surface temperature differences, not what\'s inside walls. When moisture or insulation gaps cause temperature variations at the surface, those variations are visible with thermal imaging. It\'s inference from surface data, not X-ray vision.',
    },
    {
      question: 'What if a thermal anomaly is found but no moisture?',
      answer:
        'We note it and provide context. Some anomalies are architectural features, cold air infiltration, or prior repairs. We distinguish between active moisture and dry anomalies in the report.',
    },
  ],
}
