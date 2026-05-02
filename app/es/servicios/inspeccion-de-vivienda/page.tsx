import type { Metadata } from 'next'
import { SpanishServiceDetailPage } from '@/components/es/SpanishServiceDetailPage'
import { inspeccionDeViviendaData } from '@/app/es/_data/services/inspeccion-de-vivienda'

export const metadata: Metadata = {
  title: 'Inspección de vivienda — HomeKey Inspections',
  description: inspeccionDeViviendaData.metaDescription,
  alternates: {
    canonical: '/es/servicios/inspeccion-de-vivienda',
    languages: {
      'en-US': '/services/home-inspection',
      'es-US': '/es/servicios/inspeccion-de-vivienda',
    },
  },
}

export default function InspeccionDeViviendaPage() {
  return <SpanishServiceDetailPage data={inspeccionDeViviendaData} enHref="/services/home-inspection" />
}
