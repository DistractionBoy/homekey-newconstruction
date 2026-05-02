import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { moldTestingData } from '@/app/services/_data/mold-testing'

export const metadata: Metadata = {
  title: 'Mold Testing — HomeKey Inspections',
  description: moldTestingData.metaDescription,
  alternates: { canonical: '/services/mold-testing' },
}

export default function MoldTestingPage() {
  return <ServiceDetailPage data={moldTestingData} />
}
