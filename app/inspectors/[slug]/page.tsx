import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { InspectorPage } from '@/components/inspectors/InspectorPage'
import { INSPECTORS, getInspectorBySlug } from '@/app/inspectors/_data/inspectors'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return INSPECTORS.map((inspector) => ({ slug: inspector.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const inspector = getInspectorBySlug(slug)
  if (!inspector) return {}

  const county = inspector.primaryCounty ?? 'Northern Virginia'
  const certSummary = inspector.certifications.slice(0, 2).join(', ')

  return {
    title: `${inspector.name} — HomeKey Home Inspector, ${county}`,
    description: inspector.certifications.length > 0
      ? `${inspector.name} is a ${certSummary} serving ${inspector.areasServed.slice(0, 3).join(', ')}. Book your inspection with HomeKey Inspections.`
      : `${inspector.name} is HomeKey Inspections' ${inspector.title}. ${inspector.areasServed[0]}.`,
    alternates: { canonical: `/inspectors/${slug}` },
  }
}

export default async function InspectorProfilePage({ params }: Props) {
  const { slug } = await params
  const inspector = getInspectorBySlug(slug)
  if (!inspector) notFound()
  return <InspectorPage inspector={inspector} />
}
