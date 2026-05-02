export type ServiceCard = {
  title: string
  description: string
  href: string
  badge?: string
}

export const ALL_SERVICES: ServiceCard[] = [
  {
    title: 'Home Inspection',
    description: 'ASHI ACI-certified inspectors spend 3–5 hours on your home and deliver a photo-and-video-rich report within 24 hours.',
    href: '/services/home-inspection',
    badge: 'Most popular',
  },
  {
    title: 'Pre-Drywall Inspection',
    description: 'Catch framing, mechanical, and insulation defects before the walls close up. The only time to see inside your new build.',
    href: '/services/pre-drywall-inspection',
    badge: 'New construction',
  },
  {
    title: 'Warranty Inspection',
    description: 'Document builder defects before your 11-month warranty expires. Protect your investment before the clock runs out.',
    href: '/services/warranty-inspection',
    badge: 'New construction',
  },
  {
    title: 'Re-Inspection',
    description: 'Verify repairs were completed correctly after your initial inspection. Confirm what was fixed before you close.',
    href: '/services/re-inspection',
  },
  {
    title: 'Mold Testing',
    description: 'Air sampling analyzed by an ISO/IEC 17025:2017-accredited lab — not "sent somewhere." Results in 1–2 business days.',
    href: '/services/mold-testing',
    badge: 'ISO accredited lab',
  },
  {
    title: 'Radon Testing',
    description: 'Northern Virginia sits in a high-radon zone. Accurate testing, fast turnaround, plain-language results.',
    href: '/services/radon-testing',
  },
  {
    title: 'Sewer Scope',
    description: 'Video inspection of the lateral sewer line. Catches root intrusion, cracks, and offset joints before they become your problem.',
    href: '/services/sewer-scope',
  },
  {
    title: 'Leak Detection & Thermal Imaging',
    description: 'Infrared scanning is standard on every inspection — not an add-on. Finds hidden moisture, missing insulation, and electrical hot spots.',
    href: '/services/leak-detection-thermal-imaging',
  },
  {
    title: 'Water Quality Testing',
    description: 'Know what\'s in your water before you close. Essential for well water, older homes, and anyone with health concerns.',
    href: '/services/water-quality-testing',
  },
  {
    title: 'VOC / IAQ Testing',
    description: 'Three testing tiers covering volatile organic compounds, allergens, and chemical contaminants. ISO-certified lab analysis.',
    href: '/services/voc-testing',
  },
  {
    title: 'Level II Chimney Inspection',
    description: 'Required when buying, selling, or after any change of occupancy. Includes video scan of the flue lining.',
    href: '/services/level-2-chimney-inspection',
  },
  {
    title: 'Annual Inspection Program',
    description: 'Ongoing relationship with your home. Catch deferred maintenance, seasonal issues, and emerging problems before they escalate.',
    href: '/services/annual-inspection-program',
  },
]
