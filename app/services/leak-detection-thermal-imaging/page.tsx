import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { leakDetectionData } from '@/app/services/_data/leak-detection-thermal-imaging'

export const metadata: Metadata = {
  title: 'Leak Detection & Thermal Imaging — HomeKey Inspections',
  description: leakDetectionData.metaDescription,
  alternates: { canonical: '/services/leak-detection-thermal-imaging' },
}

export default function LeakDetectionPage() {
  return <ServiceDetailPage data={leakDetectionData} />
}
