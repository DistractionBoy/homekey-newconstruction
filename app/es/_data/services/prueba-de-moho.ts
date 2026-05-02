import type { ServiceData } from '@/app/services/_data/types'

export const pruebaDeMohoData: ServiceData = {
  slug: 'prueba-de-moho',
  title: 'Prueba de moho',
  subtitle: 'Análisis de laboratorio acreditado ISO/IEC 17025. No solo "lo enviamos a algún lugar".',
  metaDescription:
    'Prueba de moho en el norte de Virginia. Muestras de aire analizadas por laboratorio acreditado ISO/IEC 17025:2017. Resultados en 1–2 días hábiles.',
  whyImportant: [
    'La mayoría de las empresas de pruebas de moho envían muestras a un laboratorio genérico de terceros y le entregan un informe que apenas comprenden. Las muestras de HomeKey son analizadas por un laboratorio acreditado ISO/IEC 17025:2017 — el mismo estándar de acreditación internacional utilizado en laboratorios médicos y científicos. Es un estándar significativamente más alto, y le informaremos exactamente quién analizó su aire.',
    'Los competidores a menudo no revelan su laboratorio. Pregúnteles. La calidad de sus resultados depende completamente de la calidad del análisis.',
    'El moho no siempre es visible. Crece dentro de las cavidades de las paredes, bajo los pisos, en los conductos de climatización y en los espacios del ático — áreas que la inspección visual de rutina no puede alcanzar. El muestreo de aire captura lo que realmente hay en su ambiente de respiración.',
  ],
  whatWeInspect: [
    {
      heading: 'Cuándo realizar la prueba',
      bullets: [
        'Moho visible o sospecha de crecimiento de moho en cualquier área',
        'Olor a humedad que persiste sin explicación',
        'Inundaciones recientes, infiltración de agua o goteras en el techo',
        'Síntomas respiratorios persistentes, dolores de cabeza o reacciones similares a alergias',
        'Nueva construcción donde la humedad pudo haber quedado atrapada durante el encuadre',
        'Verificación posterior a la remediación de que los niveles de moho han vuelto a la normalidad',
      ],
    },
    {
      heading: 'Qué captura el muestreo de aire',
      bullets: [
        'Tipos y concentraciones de esporas de moho en el aire',
        'Comparación entre niveles interiores y exteriores de referencia',
        'Identificación de especies elevadas o inusuales',
        'Stachybotrys (moho negro) y otras especies de alta preocupación',
        'Cladosporium, Aspergillus/Penicillium y mohos interiores comunes',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Evaluación del sitio',
      description: 'Su inspector revisa las áreas de preocupación, documenta signos visibles de moho o daño por agua, y determina los mejores puntos de muestreo.',
    },
    {
      step: 2,
      title: 'Recolección de muestras de aire',
      description: 'Utilizamos equipos de bomba calibrados con cassettes Air-o-Cell. Se toman muestras en áreas de preocupación y una muestra exterior de referencia para comparación.',
    },
    {
      step: 3,
      title: 'Análisis de laboratorio acreditado ISO',
      description: 'Las muestras se envían inmediatamente a nuestro laboratorio acreditado ISO/IEC 17025:2017. Los resultados regresan en 1–2 días hábiles.',
    },
    {
      step: 4,
      title: 'Informe y próximos pasos',
      description: 'Entregamos el informe del laboratorio con una explicación clara de lo que significan los resultados y, si se indica, referencias a remediadores calificados.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Prueba de moho (con inspección, 2 muestras)', price: '$200' },
      { label: 'Muestra adicional', price: '$75 c/u' },
      { label: 'Prueba de moho (servicio independiente)', price: 'Desde $250' },
    ],
    note: 'El precio incluye muestras de aire, análisis de laboratorio ISO acreditado e informe.',
  },
  sampleReports: [],
  testimonials: [],
  relatedServices: [
    {
      title: 'Inspección termográfica',
      href: '/es/servicios/inspeccion-termografica',
      description: 'Las cámaras térmicas encuentran infiltración de agua oculta antes de que el moho tenga oportunidad de crecer.',
    },
    {
      title: 'Inspección de vivienda',
      href: '/es/servicios/inspeccion-de-vivienda',
      description: 'La inspección más importante de su proceso de compra.',
    },
  ],
  faqs: [
    {
      question: '¿Qué hace que su laboratorio sea diferente?',
      answer: 'Nuestro laboratorio tiene acreditación ISO/IEC 17025:2017, el mismo estándar utilizado en laboratorios médicos y científicos. La mayoría de las empresas de pruebas de moho envían muestras a laboratorios genéricos sin esta acreditación.',
    },
    {
      question: '¿Cuánto tarda en llegar el informe?',
      answer: 'Los resultados del laboratorio están disponibles en 1–2 días hábiles después de la recolección de muestras. Le enviamos el informe del laboratorio con una explicación en lenguaje claro de lo que significan los resultados.',
    },
  ],
}
