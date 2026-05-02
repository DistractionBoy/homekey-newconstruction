import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { reInspectionData } from '@/app/services/_data/re-inspection'

export const metadata: Metadata = {
  title: 'Re-Inspection — HomeKey Inspections',
  description: reInspectionData.metaDescription,
  alternates: { canonical: '/services/re-inspection' },
}

export default function ReInspectionPage() {
  return <ServiceDetailPage data={reInspectionData} />
}
