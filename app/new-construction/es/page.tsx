import type { Metadata } from 'next'
import { content } from '../_data/content'
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
import { FadeUpSection } from '@/components/ui/FadeUpSection'

export const metadata: Metadata = {
  title: 'Paquete de Inspección de Nueva Construcción | HomeKey Inspections',
  description:
    'Inspecciones independientes certificadas ACI en cada etapa de la construcción de tu hogar nuevo — pre-tabla yeso, pre-cierre y garantía de 11 meses. Servicio en el norte de Virginia.',
  alternates: {
    canonical: '/new-construction/es',
    languages: {
      'en-US': '/new-construction',
      'es-US': '/new-construction/es',
    },
  },
}

const c = content.es

export default function NewConstructionEsPage() {
  return (
    <>
      <NavBar nav={c.nav} />
      <main lang="es">
        <HeroSection hero={c.hero} />
        <FadeUpSection>
          <TrustBar />
        </FadeUpSection>
        <FadeUpSection>
          <ProblemSection problem={c.problem} />
        </FadeUpSection>
        <FadeUpSection>
          <BundleTimeline />
        </FadeUpSection>
        <FadeUpSection>
          <PricingCalculator pricing={c.pricing} />
        </FadeUpSection>
        <FadeUpSection>
          <TestimonialsSection testimonials={c.testimonials} />
        </FadeUpSection>
        <FadeUpSection>
          <CommunityGrid communities={c.communities} />
        </FadeUpSection>
        <FinalCTA finalCta={c.finalCta} />
      </main>
      <Footer footer={c.footer} />
      <MobileStickyCTA label={c.mobileStickyCta} />
    </>
  )
}
