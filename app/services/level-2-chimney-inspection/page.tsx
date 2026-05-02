import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { chimneyInspectionData } from '@/app/services/_data/level-2-chimney-inspection'

export const metadata: Metadata = {
  title: 'Level II Chimney Inspection — HomeKey Inspections',
  description: chimneyInspectionData.metaDescription,
  alternates: { canonical: '/services/level-2-chimney-inspection' },
}

export default function ChimneyInspectionPage() {
  return <ServiceDetailPage data={chimneyInspectionData} />
}
