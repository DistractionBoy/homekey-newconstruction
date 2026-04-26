import type { Metadata } from 'next'
import { content } from '@/app/new-construction/_data/content'
import { pricingPageEs } from '../_data/content'
import { NavBar } from '@/components/NavBar'
import { PricingSchedule } from '@/components/sections/PricingSchedule'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: pricingPageEs.meta.title,
  description: pricingPageEs.meta.description,
  alternates: {
    canonical: '/pricing/es',
    languages: {
      'en-US': '/pricing',
      'es-US': '/pricing/es',
    },
  },
}

const c = content.es
const nav = {
  ...c.nav,
  links: c.nav.links.map((l) => ({ ...l, active: false })),
  langToggle: { label: 'EN', href: '/pricing' },
}

export default function PricingEsPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main lang="es">
        <PricingSchedule content={pricingPageEs} />
      </main>
      <Footer footer={c.footer} />
    </>
  )
}
