import type { ServiceData } from '@/app/services/_data/types'

export const sewerScopeEsData: ServiceData = {
  slug: 'sewer-scope',
  title: 'Inspección de alcantarillado',
  subtitle: 'Vea el interior de la tubería de alcantarillado antes de que se convierta en su factura de reparación.',
  metaDescription:
    'Inspección de alcantarillado con cámara en el norte de Virginia. La inspección por video de la tubería lateral atrapa raíces, grietas y juntas desplazadas antes del cierre.',
  whyImportant: [
    'El reemplazo de un lateral de alcantarillado en el norte de Virginia generalmente cuesta entre $5,000 y $15,000 o más. No está cubierto por el seguro de propietario. Una inspección de alcantarillado cuesta una fracción de eso — y puede decirle si la tubería está limpia, parcialmente obstruida o en necesidad de reemplazo inmediato.',
    'El lateral de alcantarillado va desde la vivienda hasta la conexión municipal en la calle. No es visible desde la superficie y no se evalúa durante una inspección de vivienda estándar. Las raíces de árboles, los vientres de tubería, las juntas desplazadas, el agrietamiento y los depósitos de calcita son problemas comunes que se acumulan con el tiempo y pueden causar obstrucciones de aguas residuales.',
    'Las viviendas con más de 20 años de antigüedad, las viviendas con árboles maduros cerca de la propiedad y las viviendas en áreas con sistemas de alcantarillado de baldosas de arcilla más antiguos son de mayor riesgo. Pero cualquier vivienda puede tener problemas de alcantarillado — los hemos encontrado en propiedades de 3 años de antigüedad.',
  ],
  whatWeInspect: [
    {
      heading: 'Qué muestra la cámara',
      bullets: [
        'Intrusión de raíces de árboles cercanos',
        'Vientre de tubería (hundimiento que permite la acumulación de desechos)',
        'Juntas desplazadas por movimiento del suelo o asentamiento',
        'Grietas, fracturas y deterioro de la pared',
        'Depósitos de calcita y acumulación de grasa',
        'Identificación del material de la tubería (arcilla, hierro fundido, PVC, Orangeburg)',
        'Estado en la conexión municipal principal',
      ],
    },
    {
      heading: 'Factores de riesgo',
      bullets: [
        'Viviendas con más de 20 años de antigüedad',
        'Árboles maduros a menos de 6 metros del trayecto del lateral',
        'Tubería de baldosas de arcilla u Orangeburg (materiales más antiguos)',
        'Áreas con suelos expansivos o en movimiento',
        'Obstrucciones de aguas residuales o drenajes lentos previos',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'El inspector localiza el acceso limpio',
      description: 'La inspección de alcantarillado generalmente accede a través del cleanout principal o de la tapa de alcantarillado más cercana a la vivienda. Su inspector localiza el punto de acceso adecuado.',
    },
    {
      step: 2,
      title: 'Inspección por video en tiempo real',
      description: 'La cámara registra la condición de la tubería desde la vivienda hasta la conexión municipal. Su inspector puede señalar lo que se ve en tiempo real.',
    },
    {
      step: 3,
      title: 'Video grabado incluido',
      description: 'El video completo se incluye en su informe para que pueda revisarlo o compartirlo con un plomero para presupuestos.',
    },
    {
      step: 4,
      title: 'Evaluación y próximos pasos',
      description: 'Si se encuentran problemas, su inspector explica la gravedad y el contexto — qué es crítico, qué puede esperar, y qué justificaría acción inmediata del vendedor.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Inspección de alcantarillado (con inspección de vivienda)', price: '$150' },
      { label: 'Inspección de alcantarillado (sola)', price: '$200' },
    ],
    note: 'El video grabado está incluido.',
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
      title: 'Inspección termográfica',
      href: '/es/servicios/inspeccion-termografica',
      description: 'Incluida en cada inspección de HomeKey sin costo adicional.',
    },
  ],
  faqs: [
    {
      question: '¿Todas las viviendas necesitan una inspección de alcantarillado?',
      answer: 'No todas, pero es especialmente valiosa para viviendas de más de 20 años, viviendas con árboles maduros cerca y viviendas en áreas conocidas por contar con tuberías de alcantarillado de arcilla más antiguas. Si no está seguro, pregúntenos — podemos hacer una evaluación basada en la dirección de la propiedad.',
    },
    {
      question: '¿Qué sucede si se encuentra un problema?',
      answer: 'Los problemas de alcantarillado suelen ser puntos de negociación con el vendedor. Un informe de inspección de alcantarillado que documente el problema respalda una solicitud de reparación o crédito antes del cierre. Los reemplazos de lateral de alcantarillado pueden solicitarse como condición del contrato.',
    },
  ],
}
