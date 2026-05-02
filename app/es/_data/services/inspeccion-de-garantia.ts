import type { ServiceData } from '@/app/services/_data/types'

export const inspeccionDeGarantiaData: ServiceData = {
  slug: 'inspeccion-de-garantia',
  title: 'Inspección de garantía',
  subtitle: 'Proteja su inversión antes de que expire la garantía del constructor.',
  metaDescription:
    'Inspección de garantía de 11 meses para viviendas de nueva construcción en el norte de Virginia. Documente los defectos del constructor antes de que expire su garantía.',
  whyImportant: [
    'La mayoría de las viviendas de nueva construcción incluyen una garantía de un año del constructor. En el mes 11, ese reloj está a punto de agotarse — y usted es responsable de todo lo que suceda después de que expire.',
    'El primer año de una vivienda nueva revela problemas que no eran visibles al momento de mudarse: grietas de asentamiento, problemas de HVAC que solo se manifiestan bajo carga, penetraciones del techo que gotean en la primera lluvia fuerte, nivelación que dirige el agua hacia la cimentación. Una inspección de garantía documenta todo esto mientras el constructor aún tiene la obligación de corregirlo.',
    'Esta no es una formalidad menor. Los constructores toman en serio los reclamos de garantía cuando están respaldados por un informe de inspección profesional. Los propietarios que omiten esta inspección a menudo pagan de su bolsillo reparaciones que eran responsabilidad del constructor.',
  ],
  whatWeInspect: [
    {
      heading: 'Exterior y drenaje',
      bullets: [
        'Asentamiento de la cimentación y nivelación alrededor de la vivienda',
        'Calafateado, selladores y huecos en molduras que se han abierto desde la mudanza',
        'Asentamiento y agrietamiento de la entrada de vehículos, senderos y patio',
        'Terrazas, barandillas y escalones por movimiento o aflojamiento',
        'Penetraciones del techo y tapajuntas por evidencia de goteras',
      ],
    },
    {
      heading: 'Estructura interior',
      bullets: [
        'Grietas en paredes y techos por asentamiento o movimiento del encuadre',
        'Crujidos del suelo y puntos blandos que indican problemas en el subsuelo',
        'Funcionamiento de puertas y ventanas — atascamiento o deformación por asentamiento',
        'Seguridad de pasamanos y balaustres de escaleras',
      ],
    },
    {
      heading: 'Sistemas mecánicos',
      bullets: [
        'Funcionamiento del HVAC en modos de calefacción y refrigeración',
        'Acceso al filtro y estado de mantenimiento',
        'Funcionamiento del calentador de agua y estado de la válvula TPR',
        'Todos los accesorios de plomería en busca de fugas en las conexiones',
        'Panel eléctrico y todos los circuitos accesibles',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Programe en el mes 10 u 11',
      description: 'No espere hasta el mes 12. Programe entre los meses 10 y 11 para tener tiempo de enviar los reclamos de garantía antes de que expire la garantía.',
    },
    {
      step: 2,
      title: 'Inspección completa de la vivienda',
      description: 'Su inspector realiza una evaluación sistemática de todos los sistemas accesibles, con especial atención a los problemas de asentamiento, infiltración de agua y desgaste mecánico del primer año.',
    },
    {
      step: 3,
      title: 'Informe con documentación de reclamos',
      description: 'Informe completo con fotos organizado para facilitar el envío de reclamos de garantía. El informe identifica claramente cada elemento que requiere atención del constructor.',
    },
    {
      step: 4,
      title: 'Presente sus reclamos',
      description: 'Use nuestro informe para respaldar sus reclamos de garantía ante el constructor. Los reclamos respaldados por informes de inspección profesionales obtienen una respuesta más rápida y completa.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Inspección de garantía de 11 meses (sola)', price: 'Desde $350' },
      { label: 'Como parte del paquete de nueva construcción', price: 'Precio de paquete' },
    ],
    note: 'El paquete de nueva construcción incluye inspección pre-tabla yeso, recorrido pre-cierre e inspección de garantía.',
  },
  sampleReports: [],
  testimonials: [],
  relatedServices: [
    {
      title: 'Inspección pre-tabla yeso',
      href: '/es/servicios/inspeccion-pre-drywall',
      description: 'La única oportunidad de ver el interior de su nueva vivienda antes de que se cierren las paredes.',
    },
    {
      title: 'Nueva construcción',
      href: '/es/nueva-construccion',
      description: 'Paquete de inspección completo para compradores de viviendas nuevas.',
    },
  ],
  faqs: [
    {
      question: '¿Qué pasa si ya estoy en el mes 11?',
      answer: 'Todavía puede beneficiarse de una inspección. Incluso con solo unos días hasta el vencimiento, un informe de inspección le da documentación de los defectos existentes que puede usar para negociar con el constructor.',
    },
    {
      question: '¿El constructor tiene que corregir todo lo que se encuentre?',
      answer: 'Los constructores están obligados a corregir defectos de mano de obra y materiales durante el período de garantía. Lo que está cubierto varía según el contrato de garantía específico. El informe de HomeKey documenta los defectos; usted y su abogado pueden determinar qué está cubierto.',
    },
  ],
}
