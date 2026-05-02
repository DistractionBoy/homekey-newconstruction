import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Badge } from '@/components/ui/badge'
import { INSPECTORS } from '@/app/inspectors/_data/inspectors'

export const metadata: Metadata = {
  title: 'Meet the Team — HomeKey Inspections',
  description:
    'ASHI-certified home inspectors in Northern Virginia, Maryland, DC & Texas. Meet the HomeKey team — bilingual inspectors, military veterans, and specialists.',
  alternates: { canonical: '/inspectors' },
}

const nav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'New Construction', href: '/new-construction' },
    { label: 'Our Team', href: '/inspectors', active: true },
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

export default function InspectorsIndexPage() {
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
              Meet the Team
            </h1>
            <p className="text-lg text-white/70">
              ASHI-certified inspectors, military veterans, bilingual professionals. Every inspector trains through our Advanced Training program.
            </p>
          </div>
        </section>

        <section className="px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INSPECTORS.map((inspector) => (
                <Link
                  key={inspector.slug}
                  href={`/inspectors/${inspector.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/50 bg-card hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                >
                  {/* Photo */}
                  <div className="relative h-48 w-full overflow-hidden bg-secondary">
                    <Image
                      src={inspector.photo}
                      alt={inspector.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <div>
                      <h2 className="font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                        {inspector.name}
                      </h2>
                      <p className="text-sm text-muted-foreground">{inspector.title}</p>
                    </div>

                    {/* Language badges */}
                    {inspector.languages && inspector.languages.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {inspector.languages.map((lang) => (
                          <Badge
                            key={lang}
                            className="bg-brand-trust/10 text-brand-trust text-[10px]"
                          >
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Top certifications (first 2) */}
                    {inspector.certifications.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {inspector.certifications.slice(0, 2).map((cert) => (
                          <Badge key={cert} variant="secondary" className="text-[10px]">
                            {cert}
                          </Badge>
                        ))}
                        {inspector.certifications.length > 2 && (
                          <Badge variant="secondary" className="text-[10px]">
                            +{inspector.certifications.length - 2} more
                          </Badge>
                        )}
                      </div>
                    )}

                    <span className="mt-auto text-xs font-medium text-brand-primary">
                      View profile →
                    </span>
                  </div>
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
