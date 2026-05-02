import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { homeInspectionData } from '@/app/services/_data/home-inspection'

export const metadata: Metadata = {
  title: 'Home Inspection — HomeKey Inspections',
  description: homeInspectionData.metaDescription,
  alternates: { canonical: '/services/home-inspection' },
}

export default function HomeInspectionPage() {
  return <ServiceDetailPage data={homeInspectionData} />
}
