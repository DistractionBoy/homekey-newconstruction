import type { Metadata } from 'next'
import { SpanishServiceDetailPage } from '@/components/es/SpanishServiceDetailPage'
import { inspeccionPreDrywallData } from '@/app/es/_data/services/inspeccion-pre-drywall'

export const metadata: Metadata = {
  title: 'Inspección pre-tabla yeso — HomeKey Inspections',
  description: inspeccionPreDrywallData.metaDescription,
  alternates: {
    canonical: '/es/servicios/inspeccion-pre-drywall',
    languages: {
      'en-US': '/services/pre-drywall-inspection',
      'es-US': '/es/servicios/inspeccion-pre-drywall',
    },
  },
}

export default function InspeccionPreDrywallPage() {
  return <SpanishServiceDetailPage data={inspeccionPreDrywallData} enHref="/services/pre-drywall-inspection" />
}
