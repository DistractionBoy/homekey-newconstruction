export type Lang = 'en' | 'es'

export type Content = typeof en

export const en = {
  nav: {
    logo: 'HomeKey Inspections',
    links: [
      { label: 'Services', href: '/services' },
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
    headline: `Your builder's "preferred inspector" works for your builder. Not for you.`,
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
    headline: 'Lock in all three — bundle discounts included.',
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
    homeTypeLabel: 'Home type',
    homeTypeOptions: [
      { id: 'sfh', label: 'Single Family / Townhouse' },
      { id: 'condo', label: 'Condominium' },
    ],
    militaryLabel: 'Current or former military (−$25)',
    estimateLabel: 'Your estimate',
    viewInvoice: 'View detailed estimate',
    pricingGuideLabel: 'See full pricing schedule',
    pricingGuideHref: '/pricing',
    invoiceTitle: 'Estimated Invoice',
    invoiceSubtitle: 'New-construction inspection bundle',
    invoiceNote:
      'Prices are subject to change without notice. This is an estimate — final pricing confirmed at booking.',
    invoiceCta: 'Book inspection →',
    discountLabels: {
      repeatSfh: 'Repeat customer discount',
      repeatCondo: 'Repeat customer discount',
      military: 'Military discount',
    },
    addons: [
      { id: 'radon', label: 'Radon testing', price: 195 },
      { id: 'sewer', label: 'Sewer scope', price: 425 },
      { id: 'mold', label: 'Mold testing (3 samples)', price: 425 },
      { id: 'infrared', label: 'Leak detection (IR camera)', price: 175 },
    ],
    lineItems: [
      { label: 'Pre-drywall', key: 'preDrywall' },
      { label: 'Pre-settlement inspection', key: 'preSettlement' },
      { label: '11-month warranty inspection', key: 'warrantyInspection' },
    ],
    discountLabel: 'Bundle discounts',
    totalLabel: 'Your total',
    cta: 'Reserve this bundle →',
  },
  testimonials: {
    sectionLabel: 'From new-build buyers',
    pullQuote:
      '"HomeKey caught $18K of framing defects before drywall. Builder fixed everything. No fight."',
    items: [
      {
        // Always Spanish on both routes
        quote: '"Absolutely thrilled with the service we received from the HomeKey Inspections service members today. We are in the process of purchasing a home and were fortunate to have a home inspection contingency included in our contract. Sebastian was thoughtful and thorough and, when he quickly realized there may be a piping issue, enlisted the assistance of Ian to perform a same day sewer scope inspection. As a result, HomeKey identified some major (and very pricey!) issues unknown to the seller, and us. We are so thankful to have these issues identified in advance of closing. I highly recommend anyone in need of inspection services to go with HomeKey, you won\'t be disappointed."',
        attribution: '— Wendy Coplen',
      },
      {
        quote:
          '"Home Inspected 03/10/25. 5,000,000 stars if I could. As a first time homebuyer, this process can be very overwhelming. Jay went above and beyond to make sure I understood everything he observed from start to finish. He talked me through all of his concerns, as well as addressing all of mine. I am certain that he didn\'t miss a single square inch of the property as he was extremely thorough. Thank you HomeKey Inspections for giving the confidence and knowledge I needed!!!"',
        attribution: '— Aaron Jackson',
      },
      {
        quote:
          '"HomeKey Inspections fit us in on short notice. They rearranged their schedules to do an inspection on the Saturday before Christmas! We spent 5 hours at the home. They were thorough and meticulous. We did mold testing, home inspection, and septic inspection. Due to their findings, we were able to avoid out of a home contract and saved ourselves a lot of headache and money if we had proceeded with the purchase. We were sad to not be purchasing that home, but glad that the inspection found things that helped us make the best decision for our family. A huge Thank you to Ian and Jay! You guys rock!."',
        attribution: '— Katrina Sullivan',
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
      { label: 'Servicios', href: '/es/servicios' },
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
    headline: 'Reserva los tres — descuentos de paquete incluidos.',
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
    homeTypeLabel: 'Tipo de propiedad',
    homeTypeOptions: [
      { id: 'sfh', label: 'Casa / Townhouse' },
      { id: 'condo', label: 'Condominio' },
    ],
    militaryLabel: 'Militar activo o veterano (−$25)',
    estimateLabel: 'Tu estimado',
    viewInvoice: 'Ver estimado detallado',
    pricingGuideLabel: 'Ver horario de precios completo',
    pricingGuideHref: '/pricing/es',
    invoiceTitle: 'Estimado de costo',
    invoiceSubtitle: 'Paquete de inspección de nueva construcción',
    invoiceNote:
      'Los precios están sujetos a cambios sin previo aviso. Este es un estimado — el precio final se confirma al reservar.',
    invoiceCta: 'Reservar inspección →',
    discountLabels: {
      repeatSfh: 'Descuento de cliente recurrente',
      repeatCondo: 'Descuento de cliente recurrente',
      military: 'Descuento militar',
    },
    addons: [
      { id: 'radon', label: 'Prueba de radón', price: 195 },
      { id: 'sewer', label: 'Inspección de alcantarilla', price: 425 },
      { id: 'mold', label: 'Prueba de moho (3 muestras)', price: 425 },
      { id: 'infrared', label: 'Detección de fugas (cámara IR)', price: 175 },
    ],
    lineItems: [
      { label: 'Pre-tabla yeso', key: 'preDrywall' },
      { label: 'Inspección pre-cierre', key: 'preSettlement' },
      { label: 'Inspección de garantía de 11 meses', key: 'warrantyInspection' },
    ],
    discountLabel: 'Descuentos del paquete',
    totalLabel: 'Tu total',
    cta: 'Reservar este paquete →',
  },
  testimonials: {
    sectionLabel: 'Compradores de casas nuevas',
    pullQuote:
      '"HomeKey encontró $18K en defectos de estructura antes del acabado. El constructor lo arregló todo. Sin problemas."',
    items: [
      {
        // Always Spanish on both routes
        quote: '"Estamos absolutamente encantados con el servicio que recibimos hoy por parte del equipo de HomeKey Inspections. Nos encontramos en pleno proceso de compra de una vivienda y tuvimos la fortuna de haber incluido una cláusula de contingencia sujeta a inspección en nuestro contrato. Sebastian demostró ser muy atento y minucioso; al percatarse rápidamente de que podría existir un problema en las tuberías, solicitó la asistencia de Ian para realizar una inspección de las alcantarillas ese mismo día. Como resultado, HomeKey identificó varios problemas graves (¡y muy costosos!) que eran desconocidos tanto para el vendedor como para nosotros. Estamos sumamente agradecidos de que estos problemas se hayan detectado antes del cierre de la operación. Recomiendo encarecidamente a cualquier persona que necesite servicios de inspección que recurra a HomeKey; no se sentirán decepcionados."',
        attribution: '— Wendy Coplen',
      },
      {
        quote:
          '"Inspección de la vivienda realizada el 10/03/25. Le daría 5.000.000 de estrellas si pudiera. Como comprador de una primera vivienda, este proceso puede resultar muy abrumador. Jay se esforzó al máximo para asegurarse de que yo comprendiera todo lo que observó, de principio a fin. Me explicó detalladamente todas sus inquietudes y, al mismo tiempo, respondió a todas las mías. Estoy seguro de que no pasó por alto ni una sola pulgada cuadrada de la propiedad, ya que fue sumamente minucioso. ¡¡¡Gracias, HomeKey Inspections, por brindarme la confianza y el conocimiento que necesitaba!!!"',
        attribution: '— Aaron Jackson',
      },
      {
        quote:
          '"HomeKey Inspections nos hizo un hueco en su agenda con muy poca antelación. ¡Reorganizaron sus horarios para realizar una inspección el sábado antes de Navidad! Pasamos 5 horas en la vivienda. Fueron exhaustivos y meticulosos. Realizamos pruebas de detección de moho, una inspección general de la casa y una inspección del sistema séptico. Gracias a sus hallazgos, pudimos desistir del contrato de compraventa y nos ahorramos muchos dolores de cabeza y dinero que habríamos perdido de haber seguido adelante con la adquisición. Nos entristeció no comprar esa casa, pero nos alegró que la inspección revelara aspectos que nos ayudaron a tomar la mejor decisión para nuestra familia. ¡Un enorme agradecimiento a Ian y Jay! ¡Son unos verdaderos cracks!"',
        attribution: '— Katrina Sullivan',
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
