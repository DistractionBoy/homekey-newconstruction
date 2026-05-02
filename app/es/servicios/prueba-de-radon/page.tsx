import type { Metadata } from 'next'
import { SpanishServiceDetailPage } from '@/components/es/SpanishServiceDetailPage'
import { pruebaDeRadonData } from '@/app/es/_data/services/prueba-de-radon'

export const metadata: Metadata = {
  title: 'Prueba de radón — HomeKey Inspections',
  description: pruebaDeRadonData.metaDescription,
  alternates: {
    canonical: '/es/servicios/prueba-de-radon',
    languages: {
      'en-US': '/services/radon-testing',
      'es-US': '/es/servicios/prueba-de-radon',
    },
  },
}

export default function PruebaDeRadonPage() {
  return <SpanishServiceDetailPage data={pruebaDeRadonData} enHref="/services/radon-testing" />
}
