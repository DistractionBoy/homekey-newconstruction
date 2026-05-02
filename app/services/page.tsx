import type { Metadata } from 'next'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { ALL_SERVICES } from '@/app/services/_data/index'

export const metadata: Metadata = {
  title: 'Home Inspection Services — HomeKey Inspections',
  description:
    'Full-service home inspection in Northern Virginia, Maryland, DC & Texas. Home inspection, mold testing, radon, sewer scope, thermal imaging, and more. ASHI certified.',
  alternates: { canonical: '/services' },
}

const nav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Services', href: '/services', active: true },
    { label: 'New Construction', href: '/new-construction' },
    { label: 'Realtors', href: '/realtors' },
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

export default function ServicesIndexPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main>
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              HomeKey Inspections
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Our Services
            </h1>
            <p className="text-lg text-white/70">
              ASHI-certified inspectors. ISO-accredited mold lab. Thermal imaging on every inspection. We work for you — not the closing timeline.
            </p>
          </div>
        </section>

        <section className="px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_SERVICES.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-sm font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                      {svc.title}
                    </h2>
                    {svc.badge && (
                      <Badge variant="secondary" className="shrink-0 text-[10px]">
                        {svc.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">
                    {svc.description}
                  </p>
                  <span className="mt-auto text-xs font-medium text-brand-primary">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
    </>
  )
}
