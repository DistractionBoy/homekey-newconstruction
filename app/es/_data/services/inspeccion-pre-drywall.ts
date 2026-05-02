import type { ServiceData } from '@/app/services/_data/types'

export const inspeccionPreDrywallData: ServiceData = {
  slug: 'inspeccion-pre-drywall',
  title: 'Inspección pre-tabla yeso',
  subtitle: 'La única oportunidad de ver el interior de su nueva vivienda antes de que se cierren las paredes.',
  metaDescription:
    'Inspección pre-tabla yeso en el norte de Virginia para viviendas de nueva construcción. Detecte defectos de encuadre, mecánicos y de aislamiento antes de que se instale la tabla yeso.',
  whyImportant: [
    'Cuando se instala la tabla yeso, todo lo que está detrás queda invisible. Una vez que esas paredes se cierran, cualquier error en el encuadre, cualquier brecha en el aislamiento, cualquier plomería o conducto mal conectado queda sellado — potencialmente por la vida útil de la vivienda. La inspección pre-tabla yeso es su única ventana para ver el interior.',
    'Los constructores están bajo presión de calendario, y los subcontratistas a veces toman atajos. Hemos visto bloqueo contra incendios faltante, barreras de vapor instaladas incorrectamente, conductos que terminan en la cavidad de la pared en lugar del cuarto, y instalaciones de plomería que no cumplen con el código. Nada de esto sería visible después de la tabla yeso. Todo se corrige fácilmente antes de que se instale.',
    'Una inspección pre-tabla yeso se combina naturalmente con un recorrido previo a la liquidación y una inspección de garantía de 11 meses. Juntos le brindan cobertura completa durante toda la línea de tiempo de su nueva construcción.',
  ],
  whatWeInspect: [
    {
      heading: 'Estructura y encuadre',
      bullets: [
        'Encuadre del suelo, paredes y techo para vano y espaciado adecuados',
        'Muescas y perforaciones de elementos estructurales para cumplimiento',
        'Bolsillos de vigas, colgantes y herraje de conexión',
        'Bloqueo contra incendios en ensamblajes piso-techo y alrededor de penetraciones',
        'Paredes de corte y herraje de retención donde se especifica',
      ],
    },
    {
      heading: 'Plomería en bruto',
      bullets: [
        'Enrutamiento de tuberías de suministro, dimensionamiento y soporte',
        'Configuración de drenaje, residuos y ventilación',
        'Ubicación y holguras de instalación del calentador de agua',
        'Posiciones de instalación de bañera y ducha según plano',
        'Ubicaciones de grifo exterior',
      ],
    },
    {
      heading: 'Electricidad en bruto',
      bullets: [
        'Ubicación del panel, tamaño del servicio y holguras',
        'Ubicaciones de cajas consistentes con el plano',
        'Métodos de cableado y protección a través de elementos de encuadre',
        'Protección requerida de GFCI y AFCI',
      ],
    },
    {
      heading: 'HVAC en bruto',
      bullets: [
        'Enrutamiento de conductos y dimensionamiento del sistema',
        'Registros de suministro y retorno según plano',
        'Sellado de conductos en penetraciones y empalmes',
        'Ubicación de la unidad de manejo de aire y holguras',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Programar en el momento adecuado',
      description: 'La inspección pre-tabla yeso debe realizarse después de que se complete la instalación en bruto (encuadre, plomería, electricidad, HVAC) pero antes de que se instale la tabla yeso. Su constructor puede proporcionar el calendario.',
    },
    {
      step: 2,
      title: 'Inspección de 2 a 3 horas',
      description: 'Su inspector trabaja sistemáticamente a través de cada sistema en bruto, documentando con fotos cada defecto encontrado.',
    },
    {
      step: 3,
      title: 'Informe en 24 horas',
      description: 'Informe con fotos entregado en 24 horas. Está organizado para que pueda entregarlo a su constructor y hacer un seguimiento de las correcciones.',
    },
    {
      step: 4,
      title: 'Verificación de correcciones',
      description: 'Algunos compradores programan una visita de seguimiento para verificar que los problemas identificados fueron corregidos. Este servicio adicional tiene un cargo separado.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Inspección pre-tabla yeso (sola)', price: '$300' },
      { label: 'Con inspección de vivienda o recorrido pre-cierre', price: 'Descuento de paquete' },
    ],
    note: 'El paquete de nueva construcción incluye inspección pre-tabla yeso, recorrido pre-cierre e inspección de garantía de 11 meses a precio reducido.',
  },
  sampleReports: [],
  testimonials: [],
  relatedServices: [
    {
      title: 'Inspección de garantía',
      href: '/es/servicios/inspeccion-de-garantia',
      description: 'Proteja su inversión antes de que expire la garantía del constructor.',
    },
    {
      title: 'Nueva construcción',
      href: '/es/nueva-construccion',
      description: 'Paquete de inspección completo para compradores de viviendas nuevas.',
    },
  ],
  faqs: [
    {
      question: '¿Cuándo exactamente debo programar la inspección pre-tabla yeso?',
      answer: 'Después de que se complete toda la instalación en bruto (encuadre, plomería, electricidad, HVAC) pero antes de que comience la instalación de la tabla yeso. Su gerente de construcción puede decirle cuándo el proyecto llegará a ese punto.',
    },
    {
      question: '¿Puede el constructor negarme acceso?',
      answer: 'Los constructores generalmente no pueden negarle acceso a su propio inspector durante la construcción — tiene derecho contractual a inspeccionar la propiedad que está comprando. Si hay resistencia, contáctenos.',
    },
  ],
}
