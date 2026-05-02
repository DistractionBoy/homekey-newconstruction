import type { Metadata } from 'next'
import { SpanishServiceDetailPage } from '@/components/es/SpanishServiceDetailPage'
import { inspeccionTermograficaData } from '@/app/es/_data/services/inspeccion-termografica'

export const metadata: Metadata = {
  title: 'Inspección termográfica — HomeKey Inspections',
  description: inspeccionTermograficaData.metaDescription,
  alternates: {
    canonical: '/es/servicios/inspeccion-termografica',
    languages: {
      'en-US': '/services/leak-detection-thermal-imaging',
      'es-US': '/es/servicios/inspeccion-termografica',
    },
  },
}

export default function InspeccionTermograficaPage() {
  return <SpanishServiceDetailPage data={inspeccionTermograficaData} enHref="/services/leak-detection-thermal-imaging" />
}
