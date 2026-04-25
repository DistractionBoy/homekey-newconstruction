export type Lang = 'en' | 'es'

export type Content = typeof en

export const en = {
  nav: {
    logo: 'HomeKey Inspections',
    links: [
      { label: 'Services', href: '#' },
      { label: 'New Construction', href: '/new-construction', active: true },
      { label: 'Realtors', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Reports', href: '#' },
    ],
    langToggle: { label: 'ES', href: '/new-construction/es' },
    cta: 'Book inspection',
  },
  hero: {
    badge: 'For new-build buyers',
    headline: 'Builders have a warranty.\nWe make sure you actually get to use it.',
    subheadline:
      'Independent ACI-certified inspections at every stage of your new home build. Same inspector. Same thermal camera. Same ISO-accredited lab. One continuous defense from foundation to final warranty claim.',
    primaryCta: 'Get bundle pricing →',
    secondaryCta: 'Watch 90-sec overview',
    trustPills: [
      '✓ ASHI ACI certified',
      '✓ ISO/IEC 17025 lab',
      '✓ Thermal imaging standard',
      '✓ Bilingual EN/ES',
    ],
    imageAlt: 'HomeKey inspector with thermal camera at new-build framing stage',
  },
  trustBar: [
    '★ 4.9/5 across 500+ reviews',
    'ASHI · InterNACHI · NRS',
    'Serving Loudoun, Fairfax, Prince William',
    'A+ BBB',
  ],
  problem: {
    sectionLabel: 'The problem',
    headline: `Your builder's “preferred inspector” works for your builder. Not for you.`,
    builderCard: {
      title: "Builder's inspector",
      points: [
        "Paid by the builder's settlement process",
        'Speed-optimized for closing timeline',
        'Findings rarely delay closings',
        "No thermal imaging on defects you can't see",
        'Report goes to builder first',
      ],
    },
    homekeyCard: {
      title: 'HomeKey (independent)',
      points: [
        'Paid by you, works for you',
        'Quality-optimized for your 30-year ownership',
        'Findings create leverage before closing',
        'Thermal imaging + moisture meters standard',
        'Report goes to you first, always',
      ],
    },
  },
  bundle: {
    sectionLabel: 'The bundle',
    headline: 'Three inspections. One inspector. Continuous defense.',
    stages: [
      {
        number: '1',
        name: 'Pre-drywall',
        timing: 'Week ~8–12 of construction',
        description:
          'Catch framing, plumbing, electrical, and HVAC rough-in defects before drywall seals them in forever.',
      },
      {
        number: '2',
        name: 'Pre-settlement',
        timing: 'Days before closing',
        description:
          'Full inspection with thermal imaging + ISO-lab mold testing. Findings become your punch list.',
      },
      {
        number: '3',
        name: '11-month warranty',
        timing: 'Before your builder warranty expires',
        description:
          "Catch settling defects and systems failures while the builder is still obligated to fix them.",
      },
    ],
  },
  pricing: {
    sectionLabel: 'Bundle pricing',
    headline: 'Lock in all three at 15% off.',
    inputLabels: {
      sqft: 'Square footage',
      community: 'Build community',
      addons: 'Optional add-ons',
    },
    communities: [
      'Brambleton',
      'Ashburn',
      'Leesburg',
      'Dulles South',
      'Haymarket',
      'Gainesville',
      'Bristow',
      'Oak Hill',
      'Other',
    ],
    addons: [
      { id: 'radon', label: 'Radon testing', price: 150 },
      { id: 'sewer', label: 'Sewer scope', price: 200 },
    ],
    lineItems: [
      { label: 'Pre-drywall', key: 'preDrywall' },
      { label: 'Pre-settlement + thermal + mold', key: 'preSettlement' },
      { label: '11-month warranty', key: 'warranty' },
    ],
    discountLabel: 'Bundle discount',
    totalLabel: 'Your total',
    cta: 'Reserve this bundle →',
  },
  testimonials: {
    sectionLabel: 'From new-build buyers',
    pullQuote:
      '"HomeKey caught $18K of framing defects before drywall. Builder fixed everything. No fight."',
    items: [
      {
        quote:
          '"They found a missing header on a load-bearing wall at pre-drywall. Builder tried to brush it off. The report forced the fix."',
        attribution: '— M. Rodriguez, Ashburn',
      },
      {
        quote:
          '"Their 11-month inspection caught HVAC issues 3 days before my warranty expired. Saved me $4K."',
        attribution: '— J. Chen, Brambleton',
      },
      {
        // Always Spanish on both routes
        quote: '"Mi inspector hablaba español. El reporte fue bilingüe. Todo clarísimo."',
        attribution: '— L. Martínez, Haymarket',
      },
    ],
  },
  communities: {
    sectionLabel: 'New-build communities we serve',
    headline: 'Dedicated inspection teams for every major NoVA development.',
    items: [
      'Brambleton',
      'Ashburn',
      'Leesburg',
      'Dulles South',
      'Haymarket',
      'Gainesville',
      'Bristow',
      'Oak Hill',
    ],
  },
  finalCta: {
    headline: 'Know more. Own with confidence.',
    subtext: 'Book your new-construction bundle in 60 seconds.',
    cta: 'Reserve your bundle →',
  },
  footer: {
    copy: '© HomeKey Inspections · The Key to Knowing More®',
    locations: 'Sterling, VA · Leander, TX',
  },
  mobileStickyCta: 'Reserve your bundle →',
}

export const es: Content = {
  nav: {
    logo: 'HomeKey Inspections',
    links: [
      { label: 'Servicios', href: '#' },
      { label: 'Nueva Construcción', href: '/new-construction/es', active: true },
      { label: 'Agentes', href: '#' },
      { label: 'Nosotros', href: '#' },
      { label: 'Reportes', href: '#' },
    ],
    langToggle: { label: 'EN', href: '/new-construction' },
    cta: 'Reservar inspección',
  },
  hero: {
    badge: 'Para compradores de casas nuevas',
    headline: 'Los constructores tienen garantía.\nNosotros nos aseguramos de que la puedas usar.',
    subheadline:
      'Inspecciones independientes certificadas ACI en cada etapa de la construcción de tu hogar. El mismo inspector. La misma cámara térmica. El mismo laboratorio acreditado ISO. Una defensa continua desde los cimientos hasta la última reclamación de garantía.',
    primaryCta: 'Ver precios del paquete →',
    secondaryCta: 'Ver resumen de 90 segundos',
    trustPills: [
      '✓ Certificado ASHI ACI',
      '✓ Laboratorio ISO/IEC 17025',
      '✓ Imágenes térmicas estándar',
      '✓ Bilingüe EN/ES',
    ],
    imageAlt: 'Inspector de HomeKey con cámara térmica en estructura de casa nueva',
  },
  trustBar: [
    '★ 4.9/5 en más de 500 reseñas',
    'ASHI · InterNACHI · NRS',
    'Atendemos Loudoun, Fairfax, Prince William',
    'A+ BBB',
  ],
  problem: {
    sectionLabel: 'El problema',
    headline:
      'El inspector "preferido" de tu constructor trabaja para tu constructor. No para ti.',
    builderCard: {
      title: 'Inspector del constructor',
      points: [
        'Pagado por el proceso de cierre del constructor',
        'Optimizado para velocidad en el cierre',
        'Los hallazgos raramente retrasan los cierres',
        'Sin imágenes térmicas de defectos invisibles',
        'El reporte va primero al constructor',
      ],
    },
    homekeyCard: {
      title: 'HomeKey (independiente)',
      points: [
        'Pagado por ti, trabaja para ti',
        'Optimizado para tu propiedad de 30 años',
        'Los hallazgos crean ventaja antes del cierre',
        'Imágenes térmicas + medidores de humedad estándar',
        'El reporte va primero a ti, siempre',
      ],
    },
  },
  bundle: {
    sectionLabel: 'El paquete',
    headline: 'Tres inspecciones. Un inspector. Defensa continua.',
    stages: [
      {
        number: '1',
        name: 'Pre-tabla yeso',
        timing: 'Semanas ~8–12 de construcción',
        description:
          'Detecta defectos en estructura, plomería, electricidad y HVAC antes de que el acabado los cubra para siempre.',
      },
      {
        number: '2',
        name: 'Pre-cierre',
        timing: 'Días antes del cierre',
        description:
          'Inspección completa con imágenes térmicas + prueba de moho en laboratorio ISO. Los hallazgos se convierten en tu lista de correcciones.',
      },
      {
        number: '3',
        name: 'Garantía de 11 meses',
        timing: 'Antes de que venza la garantía del constructor',
        description:
          'Detecta defectos de asentamiento y fallas de sistemas mientras el constructor aún está obligado a repararlos.',
      },
    ],
  },
  pricing: {
    sectionLabel: 'Precio del paquete',
    headline: 'Reserva los tres con 15% de descuento.',
    inputLabels: {
      sqft: 'Pies cuadrados',
      community: 'Comunidad',
      addons: 'Opciones adicionales',
    },
    communities: [
      'Brambleton',
      'Ashburn',
      'Leesburg',
      'Dulles South',
      'Haymarket',
      'Gainesville',
      'Bristow',
      'Oak Hill',
      'Otra',
    ],
    addons: [
      { id: 'radon', label: 'Prueba de radón', price: 150 },
      { id: 'sewer', label: 'Inspección de alcantarilla', price: 200 },
    ],
    lineItems: [
      { label: 'Pre-tabla yeso', key: 'preDrywall' },
      { label: 'Pre-cierre + térmica + moho', key: 'preSettlement' },
      { label: 'Garantía de 11 meses', key: 'warranty' },
    ],
    discountLabel: 'Descuento del paquete',
    totalLabel: 'Tu total',
    cta: 'Reservar este paquete →',
  },
  testimonials: {
    sectionLabel: 'Compradores de casas nuevas',
    pullQuote:
      '"HomeKey encontró $18K en defectos de estructura antes del acabado. El constructor lo arregló todo. Sin problemas."',
    items: [
      {
        quote:
          '"Encontraron una viga faltante en una pared de carga antes del acabado. El constructor intentó ignorarlo. El reporte obligó la reparación."',
        attribution: '— M. Rodriguez, Ashburn',
      },
      {
        quote:
          '"Su inspección de 11 meses detectó problemas de HVAC 3 días antes de que venciera mi garantía. Ahorré $4K."',
        attribution: '— J. Chen, Brambleton',
      },
      {
        // Always Spanish on both routes
        quote: '"Mi inspector hablaba español. El reporte fue bilingüe. Todo clarísimo."',
        attribution: '— L. Martínez, Haymarket',
      },
    ],
  },
  communities: {
    sectionLabel: 'Comunidades de casas nuevas que atendemos',
    headline: 'Equipos de inspección dedicados para cada desarrollo importante de NoVA.',
    items: [
      'Brambleton',
      'Ashburn',
      'Leesburg',
      'Dulles South',
      'Haymarket',
      'Gainesville',
      'Bristow',
      'Oak Hill',
    ],
  },
  finalCta: {
    headline: 'Sabe más. Compra con confianza.',
    subtext: 'Reserva tu paquete en 60 segundos.',
    cta: 'Reservar tu paquete →',
  },
  footer: {
    copy: '© HomeKey Inspections · The Key to Knowing More®',
    locations: 'Sterling, VA · Leander, TX',
  },
  mobileStickyCta: 'Reservar tu paquete →',
}

export const content: Record<Lang, Content> = { en, es }
