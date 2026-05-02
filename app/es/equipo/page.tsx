import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { BilingualContactCard } from '@/components/es/BilingualContactCard'
import { SpanishMobileStickyBar } from '@/components/es/SpanishMobileStickyBar'
import { INSPECTORS } from '@/app/inspectors/_data/inspectors'

export const metadata: Metadata = {
  title: 'Nuestro Equipo — HomeKey Inspections',
  description:
    'Conozca a los inspectores bilingües de HomeKey — Sebastian Aste y Jay Carrillo — y al equipo completo de inspectores certificados ASHI que sirven el norte de Virginia.',
  alternates: {
    canonical: '/es/equipo',
    languages: {
      'en-US': '/inspectors',
      'es-US': '/es/equipo',
    },
  },
}

const nav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Servicios', href: '/es/servicios' },
    { label: 'Nueva Construcción', href: '/es/nueva-construccion' },
    { label: 'Nuestro Equipo', href: '/es/equipo', active: true },
    { label: 'Precios', href: '/es/precios' },
  ],
  langToggle: { label: 'EN', href: '/inspectors' },
  cta: 'Agendar',
  ctaHref: '/schedule',
}

const footer = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

export default function EquipoPage() {
  const bilingualInspectors = INSPECTORS.filter((i) =>
    i.languages?.includes('Spanish')
  )
  const allFieldInspectors = INSPECTORS.filter((i) => i.certifications.length > 0)

  return (
    <>
      <NavBar nav={nav} />
      <main lang="es">
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              El equipo
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Nuestro equipo de inspectores
            </h1>
            <p className="text-xl text-white/70">
              Certificados ASHI. Bilingües. Aquí para trabajar para usted.
            </p>
          </div>
        </section>

        {/* Bilingual inspectors spotlight */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-4xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Inspectores bilingües
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              Su inspección, en su idioma
            </h2>
            <div className="space-y-6">
              {bilingualInspectors.map((inspector) => (
                <div
                  key={inspector.slug}
                  className="flex flex-col overflow-hidden rounded-2xl border border-border/50 sm:flex-row"
                >
                  <div className="relative h-48 w-full flex-shrink-0 bg-secondary sm:h-auto sm:w-40">
                    <Image
                      src={inspector.photo}
                      alt={inspector.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 160px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold text-foreground">{inspector.name}</h3>
                      <span className="rounded-full bg-brand-primary/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-primary">
                        Bilingüe EN/ES
                      </span>
                    </div>
                    <p className="mb-1 text-sm text-muted-foreground">{inspector.title}</p>
                    {inspector.areasServed && (
                      <p className="mb-3 text-xs text-muted-foreground">
                        {inspector.areasServed.join(' · ')}
                      </p>
                    )}
                    {inspector.bio?.slice(0, 2).map((para, i) => (
                      <p key={i} className="mb-2 text-sm leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button
                        nativeButton={false}
                        size="sm"
                        className="bg-brand-primary hover:bg-brand-primaryDark text-white"
                        render={<a href="tel:+15712813846" />}
                      >
                        <Phone className="mr-1.5 h-3.5 w-3.5" />
                        Llamar
                      </Button>
                      <Button nativeButton={false} size="sm" variant="outline" render={<Link href={`/inspectors/${inspector.slug}`} />}>
                        Ver perfil →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact card */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <BilingualContactCard />
          </div>
        </section>

        {/* Full team grid */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              El equipo completo
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              Todos nuestros inspectores
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {allFieldInspectors.map((inspector) => (
                <Link
                  key={inspector.slug}
                  href={`/inspectors/${inspector.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-border/50 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="relative h-32 w-full overflow-hidden bg-secondary">
                    <Image
                      src={inspector.photo}
                      alt={inspector.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                      {inspector.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{inspector.title}</p>
                    {inspector.languages?.includes('Spanish') && (
                      <p className="mt-1 text-[10px] font-semibold text-brand-primary">
                        Bilingüe EN/ES
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              ¿Listo para agendar?
            </h2>
            <p className="mb-8 text-base text-white/70">
              Reserve en línea o contáctenos directamente en español.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                nativeButton={false}
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<Link href="/schedule" />}
              >
                Agendar inspección →
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
                render={<a href="https://wa.me/15712813846" target="_blank" rel="noopener noreferrer" />}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
      <SpanishMobileStickyBar />
    </>
  )
}
