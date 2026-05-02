import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import { JsonLd } from '@/components/JsonLd'
import { localBusinessSchema } from '@/lib/json-ld'
import { NavBar } from '@/components/NavBar'
import { TrustBar } from '@/components/TrustBar'
import { Footer } from '@/components/Footer'
import { FadeUpSection } from '@/components/ui/FadeUpSection'
import { HomepageHero } from '@/components/homepage/HomepageHero'
import { ServiceCardsSection } from '@/components/homepage/ServiceCardsSection'
import { DifferenceSection } from '@/components/homepage/DifferenceSection'
import { InspectorSpotlight } from '@/components/homepage/InspectorSpotlight'
import { CoverageMap } from '@/components/homepage/CoverageMap'
import { BlogTeaser } from '@/components/homepage/BlogTeaser'
import { HomepageFinalCTA } from '@/components/homepage/HomepageFinalCTA'
import { homepageNav, homepageTrustBar } from '@/app/_data/homepage'

const ReviewsCarousel = dynamic(
  () => import('@/components/homepage/ReviewsCarousel').then((m) => m.ReviewsCarousel)
)

export const metadata: Metadata = {
  title: 'HomeKey Inspections — The Key to Knowing More®',
  description:
    'Northern Virginia\'s most thorough home inspection team. ASHI-certified inspectors, ISO-accredited mold lab, thermal imaging on every inspection. Bilingual EN/ES.',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
      'es-US': '/es',
    },
  },
}

const homepageFooter = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <NavBar nav={homepageNav} />
      <main>
        <HomepageHero />
        <FadeUpSection>
          <TrustBar items={homepageTrustBar} />
        </FadeUpSection>
        <FadeUpSection>
          <ServiceCardsSection />
        </FadeUpSection>
        <FadeUpSection>
          <DifferenceSection />
        </FadeUpSection>
        <FadeUpSection>
          <InspectorSpotlight />
        </FadeUpSection>
        <FadeUpSection>
          <CoverageMap />
        </FadeUpSection>
        <FadeUpSection>
          <ReviewsCarousel />
        </FadeUpSection>
        <FadeUpSection>
          <BlogTeaser />
        </FadeUpSection>
        <HomepageFinalCTA />
      </main>
      <Footer footer={homepageFooter} />
    </>
  )
}
