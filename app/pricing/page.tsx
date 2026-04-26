import type { Metadata } from 'next'
import { content } from '@/app/new-construction/_data/content'
import { pricingPageEn } from './_data/content'
import { NavBar } from '@/components/NavBar'
import { PricingSchedule } from '@/components/sections/PricingSchedule'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: pricingPageEn.meta.title,
  description: pricingPageEn.meta.description,
  alternates: {
    canonical: '/pricing',
    languages: {
      'en-US': '/pricing',
      'es-US': '/pricing/es',
    },
  },
}

const c = content.en
const nav = {
  ...c.nav,
  links: c.nav.links.map((l) => ({ ...l, active: false })),
  langToggle: { label: 'ES', href: '/pricing/es' },
}

export default function PricingPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main>
        <PricingSchedule content={pricingPageEn} />
      </main>
      <Footer footer={c.footer} />
    </>
  )
}
