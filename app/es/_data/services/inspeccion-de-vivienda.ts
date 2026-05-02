import type { ServiceData } from '@/app/services/_data/types'

export const inspeccionDeViviendaData: ServiceData = {
  slug: 'inspeccion-de-vivienda',
  title: 'Inspección de vivienda',
  subtitle: 'La inspección más importante de su proceso de compra.',
  metaDescription:
    'Inspección de vivienda certificada ASHI ACI en el norte de Virginia, Maryland y DC. Evaluación de 3 a 5 horas con informe fotográfico entregado en 24 horas.',
  whyImportant: [
    'Comprar una vivienda es la decisión financiera más importante de la mayoría de las personas — y sin embargo, una casa esconde sus problemas muy bien. Daños por agua detrás de la tabla yeso reciente. Instalación eléctrica defectuosa en el ático. Un intercambiador de calor agrietado en una calefacción que lleva años filtrando monóxido de carbono. Una inspección de vivienda completa revela estos problemas antes de que se conviertan en su responsabilidad.',
    'Los inspectores de HomeKey pasan de 3 a 5 horas en cada vivienda. Trabajamos para el comprador, no para los plazos del cierre. Eso significa que nos tomamos el tiempo necesario para revisar cada sistema accesible: desde el techo hasta los cimientos, desde el HVAC hasta la plomería, desde el panel eléctrico hasta el espacio del rastreo.',
    'Nuestros informes incluyen fotos y clips de video cortos de cada defecto encontrado. Están escritos en lenguaje claro — no en una lista de verificación críptica — para que usted pueda leerlo, compartirlo con su agente y usarlo para negociar con confianza.',
  ],
  whatWeInspect: [
    {
      heading: 'Techo y exterior',
      bullets: [
        'Estado del material del techo, tapajuntas y penetraciones',
        'Canaletas, bajantes y drenaje del terreno',
        'Revestimiento exterior, aleros, fascias y molduras',
        'Cimientos visibles desde el exterior, entrada de vehículos y senderos',
        'Terrazas, porches, balcones y barandillas',
        'Funcionamiento de la puerta del garaje, inversión de seguridad y muro cortafuegos',
      ],
    },
    {
      heading: 'Estructura y cimientos',
      bullets: [
        'Sótano o espacio rastreo — infiltración de humedad, eflorescencia, grietas',
        'Sistema de suelo: viguetas, vigas, postes y columnas',
        'Estructura de paredes y elementos de carga',
        'Paredes de cimentación y zapatas visibles',
      ],
    },
    {
      heading: 'Sistema eléctrico',
      bullets: [
        'Panel de servicio principal — disyuntores, etiquetado y capacidad',
        'Subpaneles y circuitos secundarios',
        'Tomas de corriente, interruptores y luminarias',
        'Protección GFCI y AFCI donde se requiera',
        'Presencia y ubicación de detectores de humo y CO',
        'Tipo y condición del cableado visible',
      ],
    },
    {
      heading: 'Sistema de plomería',
      bullets: [
        'Calentador de agua — antigüedad, estado, válvula TPR y ventilación',
        'Material de tuberías de suministro, fugas visibles y presión del agua',
        'Rendimiento del sistema de drenaje, residuos y ventilación',
        'Accesorios: inodoros, lavabos, bañeras y duchas',
        'Válvulas de cierre de grifo exterior y llaves exteriores',
      ],
    },
    {
      heading: 'Sistema HVAC',
      bullets: [
        'Equipos de calefacción y refrigeración — antigüedad, funcionamiento y estado',
        'Integridad del intercambiador de calor (grietas = riesgo de CO)',
        'Sistema de distribución de aire — conductos, registros y retornos',
        'Funcionamiento del termostato y estado del filtro',
        'Unidades de aire acondicionado: bobinas, aletas y drenaje del condensador',
      ],
    },
    {
      heading: 'Ático e interior',
      bullets: [
        'Acceso, estructura y ventilación del ático',
        'Estado, tipo y cobertura del aislamiento',
        'Techos, paredes, suelos y puertas interiores',
        'Ventanas — funcionamiento, sellado y condensación',
        'Electrodomésticos integrados incluidos en la venta',
      ],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Reserve en línea',
      description: 'Elija fecha y hora en línea. Confirmamos en 24 horas. Si necesita un idioma específico, indíquelo y le asignaremos a Sebastian o Jay.',
    },
    {
      step: 2,
      title: 'Inspección de 3 a 5 horas',
      description: 'Su inspector trabaja de forma sistemática por cada sistema accesible. Le recomendamos que asista — es su oportunidad de hacer preguntas y comprender la vivienda antes de ser propietario.',
    },
    {
      step: 3,
      title: 'Revisión en tiempo real de los hallazgos principales',
      description: 'Antes de salir, su inspector le lleva a través de los hallazgos significativos en persona. No hay sorpresas al leer el informe.',
    },
    {
      step: 4,
      title: 'Informe en 24 horas',
      description: 'Informe completo con fotos y notas de video de cada defecto, entregado en 24 horas. Escrito en lenguaje claro, listo para compartir con su agente.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Hasta 2,000 pies cuadrados', price: 'Desde $400' },
      { label: '2,001 – 3,000 pies cuadrados', price: 'Desde $450' },
      { label: '3,001 – 4,000 pies cuadrados', price: 'Desde $500' },
      { label: 'Más de 4,000 pies cuadrados', price: 'Precio personalizado' },
    ],
    note: 'Imágenes térmicas incluidas en todas las inspecciones sin cargo adicional.',
  },
  sampleReports: [],
  testimonials: [
    {
      reviewer: 'Maria G.',
      text: 'Sebastian fue increíble. Explicó todo en español con paciencia y encontró problemas que el inspector anterior había pasado por alto. El informe fue muy claro.',
      platform: 'Google',
    },
    {
      reviewer: 'Carlos M.',
      text: 'Jay hizo un trabajo excelente. Muy profesional y detallado. Como ex-militar, tiene una atención al detalle que realmente se nota en su trabajo.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Prueba de radón',
      href: '/es/servicios/prueba-de-radon',
      description: 'El norte de Virginia es una región de alto riesgo de radón. Conozca el nivel de su vivienda.',
    },
    {
      title: 'Prueba de moho',
      href: '/es/servicios/prueba-de-moho',
      description: 'Análisis de laboratorio acreditado ISO/IEC 17025. No solo "lo enviamos a algún lugar".',
    },
    {
      title: 'Inspección termográfica',
      href: '/es/servicios/inspeccion-termografica',
      description: 'Incluida en cada inspección de HomeKey sin costo adicional.',
    },
  ],
  faqs: [
    {
      question: '¿Debo estar presente durante la inspección?',
      answer: 'Le recomendamos que asista. No es obligatorio, pero la hora o más que pasa con el inspector al final es su oportunidad de ver la vivienda con un experto, hacer preguntas en contexto y entender lo que está comprando antes de ser propietario.',
    },
    {
      question: '¿Cuándo recibiré el informe?',
      answer: 'En 24 horas. Los informes de HomeKey incluyen fotos y clips de video de cada defecto. Están escritos en lenguaje claro, no en una lista de verificación técnica.',
    },
    {
      question: '¿Las cámaras termográficas están incluidas?',
      answer: 'Sí. Cada inspector de HomeKey lleva una cámara termográfica completa a cada inspección. Sin cargo adicional, sin necesidad de programar quién tiene el equipo.',
    },
    {
      question: '¿Pueden realizar la inspección en español?',
      answer: 'Sí. Sebastian Aste y Jay Carrillo son inspectores bilingües certificados ASHI que realizan inspecciones completas en español. Indíquelo al reservar y le asignaremos a uno de ellos.',
    },
  ],
}
