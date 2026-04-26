import type { Metadata } from 'next'
import { content } from './_data/content'
import { NavBar } from '@/components/NavBar'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/new-construction/TrustBar'
import { ProblemSection } from '@/components/sections/ProblemSection'
import { BundleTimeline } from '@/components/new-construction/BundleTimeline'
import { PricingCalculator } from '@/components/sections/PricingCalculator'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CommunityGrid } from '@/components/sections/CommunityGrid'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/Footer'
import { MobileStickyCTA } from '@/components/MobileStickyCTA'

export const metadata: Metadata = {
  title: 'New Construction Inspection Bundle | HomeKey Inspections',
  description:
    'Independent ACI-certified inspections at every stage of your new home build — pre-drywall, pre-settlement, and 11-month warranty. Serving Northern Virginia.',
  alternates: {
    canonical: '/new-construction',
    languages: {
      'en-US': '/new-construction',
      'es-US': '/new-construction/es',
    },
  },
}

const c = content.en

export default function NewConstructionPage() {
  return (
    <>
      <NavBar nav={c.nav} />
      <main>
        <HeroSection hero={c.hero} />
        <TrustBar />
        <ProblemSection problem={c.problem} />
        <BundleTimeline />
        <PricingCalculator pricing={c.pricing} />
        <TestimonialsSection testimonials={c.testimonials} />
        <CommunityGrid communities={c.communities} />
        <FinalCTA finalCta={c.finalCta} />
      </main>
      <Footer footer={c.footer} />
      <MobileStickyCTA label={c.mobileStickyCta} />
    </>
  )
}
