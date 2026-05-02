import type { Metadata } from 'next'
import { content } from '@/app/new-construction/_data/content'
import { pricingPageEs } from '@/app/pricing/_data/content'
import { NavBar } from '@/components/NavBar'
import { PricingSchedule } from '@/components/sections/PricingSchedule'
import { Footer } from '@/components/Footer'
import { BilingualContactCard } from '@/components/es/BilingualContactCard'
import { SpanishMobileStickyBar } from '@/components/es/SpanishMobileStickyBar'

export const metadata: Metadata = {
  title: pricingPageEs.meta.title,
  description: pricingPageEs.meta.description,
  alternates: {
    canonical: '/es/precios',
    languages: {
      'en-US': '/pricing',
      'es-US': '/es/precios',
    },
  },
}

const c = content.es
const nav = {
  ...c.nav,
  links: [
    { label: 'Servicios', href: '/es/servicios' },
    { label: 'Nueva Construcción', href: '/es/nueva-construccion' },
    { label: 'Nuestro Equipo', href: '/es/equipo' },
    { label: 'Precios', href: '/es/precios', active: true },
  ],
  langToggle: { label: 'EN', href: '/pricing' },
  cta: 'Agendar',
  ctaHref: '/schedule',
}

const footer = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

export default function PreciosPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main lang="es">
        <PricingSchedule content={pricingPageEs} />
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <BilingualContactCard />
          </div>
        </section>
      </main>
      <Footer footer={footer} />
      <SpanishMobileStickyBar />
    </>
  )
}
