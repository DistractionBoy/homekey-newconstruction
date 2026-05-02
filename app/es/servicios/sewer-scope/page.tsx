import type { Metadata } from 'next'
import { SpanishServiceDetailPage } from '@/components/es/SpanishServiceDetailPage'
import { sewerScopeEsData } from '@/app/es/_data/services/sewer-scope'

export const metadata: Metadata = {
  title: 'Inspección de alcantarillado — HomeKey Inspections',
  description: sewerScopeEsData.metaDescription,
  alternates: {
    canonical: '/es/servicios/sewer-scope',
    languages: {
      'en-US': '/services/sewer-scope',
      'es-US': '/es/servicios/sewer-scope',
    },
  },
}

export default function SewerScopeEsPage() {
  return <SpanishServiceDetailPage data={sewerScopeEsData} enHref="/services/sewer-scope" />
}
