import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { preDrywallData } from '@/app/services/_data/pre-drywall-inspection'

export const metadata: Metadata = {
  title: 'Pre-Drywall Inspection — HomeKey Inspections',
  description: preDrywallData.metaDescription,
  alternates: { canonical: '/services/pre-drywall-inspection' },
}

export default function PreDrywallPage() {
  return <ServiceDetailPage data={preDrywallData} />
}
