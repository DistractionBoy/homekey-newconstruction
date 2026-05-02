import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { vocTestingData } from '@/app/services/_data/voc-testing'

export const metadata: Metadata = {
  title: 'VOC & Indoor Air Quality Testing — HomeKey Inspections',
  description: vocTestingData.metaDescription,
  alternates: { canonical: '/services/voc-testing' },
}

export default function VOCTestingPage() {
  return <ServiceDetailPage data={vocTestingData} />
}
