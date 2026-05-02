import type { Metadata } from 'next'
import { SpanishServiceDetailPage } from '@/components/es/SpanishServiceDetailPage'
import { pruebaDeMohoData } from '@/app/es/_data/services/prueba-de-moho'

export const metadata: Metadata = {
  title: 'Prueba de moho — HomeKey Inspections',
  description: pruebaDeMohoData.metaDescription,
  alternates: {
    canonical: '/es/servicios/prueba-de-moho',
    languages: {
      'en-US': '/services/mold-testing',
      'es-US': '/es/servicios/prueba-de-moho',
    },
  },
}

export default function PruebaDeMohoPage() {
  return <SpanishServiceDetailPage data={pruebaDeMohoData} enHref="/services/mold-testing" />
}
