import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { COUNTIES } from '@/app/areas/_data/counties'

export const metadata: Metadata = {
  title: 'Service Areas — HomeKey Inspections',
  description:
    'HomeKey Inspections serves Northern Virginia, Maryland, DC & Texas. Find your county or community for local home inspection expertise.',
  alternates: { canonical: '/areas' },
}

const nav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'New Construction', href: '/new-construction' },
    { label: 'Our Team', href: '/inspectors' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ],
  langToggle: { label: 'ES', href: '/es' },
  cta: 'Book inspection',
  ctaHref: '/schedule',
}

const footer = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

export default function AreasIndexPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main>
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Service Areas
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Where We Inspect
            </h1>
            <p className="text-lg text-white/70">
              Northern Virginia, Maryland, Washington D.C., and Texas. Select your area for hyper-local inspection expertise.
            </p>
          </div>
        </section>

        <section className="px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {COUNTIES.map((county) => (
                <div key={county.slug} className="rounded-xl border border-border/50 bg-card p-5">
                  <Link
                    href={`/areas/${county.slug}`}
                    className="group block"
                  >
                    <h2 className="mb-1 font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                      {county.name}
                    </h2>
                    <p className="mb-3 text-xs text-muted-foreground">{county.state}</p>
                  </Link>
                  {county.communities.length > 0 && (
                    <ul className="space-y-1">
                      {county.communities.map((c) => (
                        <li key={c.slug}>
                          <Link
                            href={`/areas/${county.slug}/${c.slug}`}
                            className="text-xs text-muted-foreground hover:text-brand-primary transition-colors"
                          >
                            {c.name} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
    </>
  )
}
