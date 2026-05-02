import type { ServiceData } from '@/app/services/_data/types'

export const inspeccionTermograficaData: ServiceData = {
  slug: 'inspeccion-termografica',
  title: 'Inspección termográfica',
  subtitle: 'Imágenes térmicas en cada inspección — estándar, no un adicional.',
  metaDescription:
    'Imágenes térmicas y detección de fugas en cada inspección de HomeKey sin cargo adicional. Encuentre humedad oculta, aislamiento faltante y puntos calientes eléctricos. Norte de Virginia.',
  whyImportant: [
    'Las imágenes térmicas están incluidas en cada inspección de HomeKey sin cargo adicional. Esto no es una frase de marketing — es una diferencia significativa frente a inspectores que cobran entre $150 y $300 adicionales por escaneo infrarrojo, o que no tienen una cámara térmica en absoluto.',
    'Una cámara térmica ve lo que el ojo humano no puede: humedad oculta detrás de la tabla yeso, huecos de aislamiento que no aparecen en una inspección visual, componentes eléctricos calientes bajo carga y fugas de aire de climatización que hacen las habitaciones incómodas. Estos son hallazgos reales que cambian decisiones reales.',
    'Los servicios independientes de detección de fugas utilizan la misma tecnología infrarroja combinada con medidores de humedad e investigación específica para localizar el origen de infiltración de agua conocida o sospechosa — a menudo sin abrir las paredes de forma invasiva.',
  ],
  whatWeInspect: [
    {
      heading: 'Qué encuentra la termografía',
      bullets: [
        'Infiltración de humedad detrás de paredes, techos y suelos',
        'Goteras del techo y alrededor de ventanas que aparecen como anomalías térmicas',
        'Aislamiento faltante o comprimido que crea puentes térmicos',
        'Fugas de conductos de climatización e ineficiencias en el manejo de aire',
        'Puntos calientes eléctricos: circuitos sobrecargados, conexiones sueltas, equipos defectuosos',
        'Ubicaciones de fugas de plomería dentro de las cavidades de la pared',
        'Rendimiento del sistema de calefacción de suelo radiante',
      ],
    },
    {
      heading: 'Investigación con medidor de humedad',
      bullets: [
        'Confirmación de anomalías térmicas con medidores de humedad de punta y sin punta',
        'Cuantificación del contenido de humedad en materiales de construcción afectados',
        'Documentación para fines de seguro o remediación',
        'Rastreo de fuente desde manchas visibles hasta el punto de entrada',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Incluido en cada inspección de vivienda',
      description: 'No es necesario programar por separado. Cada inspector de HomeKey lleva una cámara termográfica completa y la usa en cada inspección.',
    },
    {
      step: 2,
      title: 'Condiciones de temperatura activa',
      description: 'La termografía es más efectiva cuando hay una diferencia de temperatura entre el interior y el exterior — lo que ocurre en la mayoría de las inspecciones en el norte de Virginia. Su inspector evaluará las condiciones y documentará qué áreas se evaluaron termográficamente.',
    },
    {
      step: 3,
      title: 'Confirmación con medidor de humedad',
      description: 'Cuando la cámara térmica detecta una anomalía, el inspector la confirma con un medidor de humedad calibrado antes de incluirla en el informe.',
    },
    {
      step: 4,
      title: 'Fotos térmicas en el informe',
      description: 'Todas las anomalías térmicas significativas se documentan con imágenes de la cámara térmica en el informe final.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Imágenes térmicas (con inspección de vivienda)', price: 'Incluido' },
      { label: 'Detección de fugas independiente', price: 'Desde $250' },
    ],
    note: 'No hay cargo adicional por imágenes térmicas en las inspecciones estándar de HomeKey.',
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
      description: 'Las cámaras térmicas encuentran humedad oculta; las pruebas de moho confirman si ha crecido.',
    },
  ],
  faqs: [
    {
      question: '¿Todas las inspecciones incluyen imágenes térmicas sin cargo adicional?',
      answer: 'Sí. Cada inspector de HomeKey lleva una cámara termográfica completa a cada inspección. No hay cargo adicional, sin importar el tamaño de la vivienda o la duración de la inspección.',
    },
    {
      question: '¿Qué tipo de cámara utilizan?',
      answer: 'Utilizamos cámaras termográficas de resolución completa capaces de detectar diferencias de temperatura de menos de 0.1°C. Son el mismo tipo de equipo utilizado en auditorías energéticas industriales, no las cámaras de baja resolución "de nivel de entrada" que algunos inspectores utilizan.',
    },
  ],
}
