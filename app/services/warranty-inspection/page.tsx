import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { warrantyInspectionData } from '@/app/services/_data/warranty-inspection'

export const metadata: Metadata = {
  title: 'Warranty Inspection — HomeKey Inspections',
  description: warrantyInspectionData.metaDescription,
  alternates: { canonical: '/services/warranty-inspection' },
}

export default function WarrantyInspectionPage() {
  return <ServiceDetailPage data={warrantyInspectionData} />
}
