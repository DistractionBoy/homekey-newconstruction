import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { radonTestingData } from '@/app/services/_data/radon-testing'

export const metadata: Metadata = {
  title: 'Radon Testing — HomeKey Inspections',
  description: radonTestingData.metaDescription,
  alternates: { canonical: '/services/radon-testing' },
}

export default function RadonTestingPage() {
  return <ServiceDetailPage data={radonTestingData} />
}
