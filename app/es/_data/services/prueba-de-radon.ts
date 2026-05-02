import type { ServiceData } from '@/app/services/_data/types'

export const pruebaDeRadonData: ServiceData = {
  slug: 'prueba-de-radon',
  title: 'Prueba de radón',
  subtitle: 'El norte de Virginia es una región de alto riesgo de radón. Conozca el nivel de su vivienda.',
  metaDescription:
    'Prueba de radón en el norte de Virginia, Maryland y DC. El radón es incoloro, inodoro y la segunda causa de cáncer de pulmón. Sepa lo que hay en su hogar antes de comprar.',
  whyImportant: [
    'El radón es un gas radiactivo de origen natural que se filtra desde el suelo y las rocas. Es incoloro, inodoro e insípido — no se puede detectar sin realizar pruebas. También es la segunda causa de cáncer de pulmón en Estados Unidos, responsable de aproximadamente 21,000 muertes al año.',
    'El norte de Virginia se encuentra en la Zona 1 de radón de la EPA — la categoría de mayor riesgo. Los condados de Loudoun, Fairfax, Arlington y Prince William tienen niveles promedio de radón elevados. Los niveles altos pueden ocurrir en cualquier vivienda — nueva o antigua, con o sin sótano.',
    'El nivel de acción de la EPA es 4 pCi/L. Los sistemas de mitigación son muy eficaces, confiables y generalmente cuestan entre $800 y $1,500. Realizar la prueba antes de comprar le dice con qué está lidiando. Realizarla después de mudarse le dice si la mitigación funcionó.',
  ],
  whatWeInspect: [
    {
      heading: 'Cómo entra el radón en las viviendas',
      bullets: [
        'Grietas en la cimentación y juntas de expansión',
        'Pozos de bombas sumidero y desagües en el suelo',
        'Juntas de construcción y penetraciones de tuberías de servicio',
        'Suelo del espacio rastreo y tierra expuesta',
        'Agua de pozo (en algunos casos contribuye al radón interior)',
      ],
    },
    {
      heading: 'Tipos de pruebas disponibles',
      bullets: [
        'Prueba a corto plazo (48–96 horas): requerida para transacciones inmobiliarias',
        'Prueba a largo plazo (90+ días): proporciona un promedio anual más preciso',
        'Se requieren condiciones de casa cerrada para resultados precisos a corto plazo',
        'Se prueba el nivel habitable más bajo de la vivienda (sótano, primer piso)',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Dispositivo colocado durante la inspección',
      description: 'Para compras de vivienda, colocamos un dispositivo de prueba de radón calibrado durante o antes de su inspección. Se deben mantener condiciones de casa cerrada durante la prueba.',
    },
    {
      step: 2,
      title: 'Período de prueba de 48 a 96 horas',
      description: 'El dispositivo recopila datos continuamente durante el período de prueba. Las ventanas y puertas exteriores permanecen cerradas (excepto para entradas/salidas breves) durante la prueba.',
    },
    {
      step: 3,
      title: 'Análisis de laboratorio',
      description: 'El dispositivo se envía a un laboratorio certificado para su análisis. Los resultados se obtienen entre 1 y 2 días hábiles después de retirar el dispositivo.',
    },
    {
      step: 4,
      title: 'Resultados y próximos pasos',
      description: 'Entregamos el informe del laboratorio y explicamos qué significa el nivel de pCi/L. Si los resultados son de 4 pCi/L o más, discutimos opciones de mitigación y proporcionamos referencias de contratistas.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Prueba de radón (con inspección)', price: '$150' },
      { label: 'Prueba de radón (sola)', price: '$175' },
    ],
    note: 'El precio incluye la colocación del dispositivo, análisis de laboratorio y entrega del informe.',
  },
  sampleReports: [],
  testimonials: [],
  relatedServices: [
    {
      title: 'Inspección de vivienda',
      href: '/es/servicios/inspeccion-de-vivienda',
      description: 'La inspección más importante de su proceso de compra.',
    },
    {
      title: 'Prueba de moho',
      href: '/es/servicios/prueba-de-moho',
      description: 'Análisis de laboratorio acreditado ISO/IEC 17025.',
    },
  ],
  faqs: [
    {
      question: '¿Qué nivel de radón es peligroso?',
      answer: 'La EPA recomienda tomar medidas cuando los niveles son de 4 pCi/L o más. Entre 2 y 4 pCi/L también es un rango de acción según la EPA. Cualquier nivel por encima de 0.4 pCi/L supera el promedio exterior; la mitigación puede reducirlo a 0.1 pCi/L o menos.',
    },
    {
      question: '¿Cuánto cuesta la mitigación?',
      answer: 'Los sistemas de mitigación de radón en el norte de Virginia generalmente cuestan entre $800 y $1,500 instalados. Son altamente efectivos y pueden utilizarse como punto de negociación con el vendedor.',
    },
    {
      question: '¿Necesito una prueba de radón si la casa no tiene sótano?',
      answer: 'Sí. El radón puede acumularse en cualquier nivel habitable — los primeros pisos sin sótano también están en riesgo. Siempre probamos el nivel habitable más bajo de la vivienda.',
    },
  ],
}
