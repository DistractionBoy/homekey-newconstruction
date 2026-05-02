import type { Metadata } from 'next'
import { SpanishServiceDetailPage } from '@/components/es/SpanishServiceDetailPage'
import { inspeccionDeGarantiaData } from '@/app/es/_data/services/inspeccion-de-garantia'

export const metadata: Metadata = {
  title: 'Inspección de garantía — HomeKey Inspections',
  description: inspeccionDeGarantiaData.metaDescription,
  alternates: {
    canonical: '/es/servicios/inspeccion-de-garantia',
    languages: {
      'en-US': '/services/warranty-inspection',
      'es-US': '/es/servicios/inspeccion-de-garantia',
    },
  },
}

export default function InspeccionDeGarantiaPage() {
  return <SpanishServiceDetailPage data={inspeccionDeGarantiaData} enHref="/services/warranty-inspection" />
}
