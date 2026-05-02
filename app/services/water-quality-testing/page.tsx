import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { waterQualityData } from '@/app/services/_data/water-quality-testing'

export const metadata: Metadata = {
  title: 'Water Quality Testing — HomeKey Inspections',
  description: waterQualityData.metaDescription,
  alternates: { canonical: '/services/water-quality-testing' },
}

export default function WaterQualityPage() {
  return <ServiceDetailPage data={waterQualityData} />
}
