import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AreaPage } from '@/components/areas/AreaPage'
import { COMMUNITIES, getCommunityBySlug } from '@/app/areas/_data/communities'

type Props = {
  params: Promise<{ county: string; community: string }>
}

export function generateStaticParams() {
  return COMMUNITIES.map((c) => ({ county: c.countySlug, community: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { county: countySlug, community: communitySlug } = await params
  const community = getCommunityBySlug(countySlug, communitySlug)
  if (!community) return {}

  return {
    title: `Home Inspections in ${community.name} — HomeKey Inspections`,
    description: community.metaDescription,
    alternates: { canonical: `/areas/${countySlug}/${communitySlug}` },
  }
}

export default async function CommunityPage({ params }: Props) {
  const { county: countySlug, community: communitySlug } = await params
  const community = getCommunityBySlug(countySlug, communitySlug)
  if (!community) notFound()
  return <AreaPage type="community" data={community} />
}
