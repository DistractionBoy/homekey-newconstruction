import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { annualInspectionData } from '@/app/services/_data/annual-inspection-program'

export const metadata: Metadata = {
  title: 'Annual Inspection Program — HomeKey Inspections',
  description: annualInspectionData.metaDescription,
  alternates: { canonical: '/services/annual-inspection-program' },
}

export default function AnnualInspectionPage() {
  return <ServiceDetailPage data={annualInspectionData} />
}
