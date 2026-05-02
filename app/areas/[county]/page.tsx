import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AreaPage } from '@/components/areas/AreaPage'
import { COUNTIES, getCountyBySlug } from '@/app/areas/_data/counties'

type Props = {
  params: Promise<{ county: string }>
}

export function generateStaticParams() {
  return COUNTIES.map((c) => ({ county: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county: countySlug } = await params
  const county = getCountyBySlug(countySlug)
  if (!county) return {}

  return {
    title: `Home Inspections in ${county.name} — HomeKey Inspections`,
    description: county.metaDescription,
    alternates: { canonical: `/areas/${countySlug}` },
  }
}

export default async function CountyPage({ params }: Props) {
  const { county: countySlug } = await params
  const county = getCountyBySlug(countySlug)
  if (!county) notFound()
  return <AreaPage type="county" data={county} />
}
