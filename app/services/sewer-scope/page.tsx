import type { Metadata } from 'next'
import { ServiceDetailPage } from '@/components/services/ServiceDetailPage'
import { sewerScopeData } from '@/app/services/_data/sewer-scope'

export const metadata: Metadata = {
  title: 'Sewer Scope Inspection — HomeKey Inspections',
  description: sewerScopeData.metaDescription,
  alternates: { canonical: '/services/sewer-scope' },
}

export default function SewerScopePage() {
  return <ServiceDetailPage data={sewerScopeData} />
}
