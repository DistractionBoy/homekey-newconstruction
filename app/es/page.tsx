import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, MessageCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { CoverageMap } from '@/components/homepage/CoverageMap'
import { BilingualContactCard } from '@/components/es/BilingualContactCard'
import { SpanishMobileStickyBar } from '@/components/es/SpanishMobileStickyBar'

export const metadata: Metadata = {
  title: 'HomeKey Inspections — Inspecciones bilingües en el norte de Virginia',
  description:
    'El único equipo de inspección en Northern Virginia con inspectores bilingües certificados ASHI, cámaras termográficas e informe en su idioma. Sebastian Aste y Jay Carrillo.',
  alternates: {
    canonical: '/es',
    languages: {
      'en-US': '/',
      'es-US': '/es',
    },
  },
}

const nav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Servicios', href: '/es/servicios' },
    { label: 'Nueva Construcción', href: '/es/nueva-construccion' },
    { label: 'Nuestro Equipo', href: '/es/equipo' },
    { label: 'Precios', href: '/es/precios' },
  ],
  langToggle: { label: 'EN', href: '/' },
  cta: 'Agendar',
  ctaHref: '/schedule',
}

const footer = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

const SERVICES = [
  { title: 'Inspección de vivienda', href: '/es/servicios/inspeccion-de-vivienda', desc: 'Evaluación completa de 3 a 5 horas de todos los sistemas accesibles.' },
  { title: 'Prueba de radón', href: '/es/servicios/prueba-de-radon', desc: 'El norte de Virginia es Zona 1 de la EPA — la categoría de mayor riesgo.' },
  { title: 'Prueba de moho', href: '/es/servicios/prueba-de-moho', desc: 'Laboratorio acreditado ISO/IEC 17025. No solo "lo enviamos a algún lugar".' },
  { title: 'Inspección pre-tabla yeso', href: '/es/servicios/inspeccion-pre-drywall', desc: 'La única oportunidad de ver el interior antes de que se cierren las paredes.' },
  { title: 'Inspección de garantía', href: '/es/servicios/inspeccion-de-garantia', desc: 'Documente los defectos del constructor antes de que expire la garantía de un año.' },
  { title: 'Inspección termográfica', href: '/es/servicios/inspeccion-termografica', desc: 'Incluida en cada inspección de HomeKey sin costo adicional.' },
]

const DIFFERENTIATORS = [
  { label: 'Inspectores bilingües certificados ASHI', detail: 'Sebastian Aste y Jay Carrillo hablan español con fluidez.' },
  { label: 'Informe bilingüe en 24 horas', detail: 'Fotos, video y descripción clara de cada hallazgo.' },
  { label: 'Cámara termográfica en cada inspección', detail: 'Sin costo adicional. Sin excepciones.' },
  { label: 'Laboratorio ISO acreditado para pruebas de moho', detail: 'El mismo estándar que los laboratorios médicos y científicos.' },
  { label: '3 a 5 horas en sitio', detail: 'No 60 minutos. No 90 minutos. El tiempo que la vivienda merece.' },
  { label: 'Trabajamos para usted, no para el cierre', detail: 'Sin relación financiera con agentes ni constructores.' },
]

export default function SpanishHomePage() {
  return (
    <>
      <NavBar nav={nav} />
      <main lang="es">
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[11px] uppercase tracking-widest text-brand-primary">
              Inspecciones en el norte de Virginia · En su idioma
            </p>
            <h1 className="mb-5 text-4xl font-medium leading-tight text-white md:text-5xl lg:text-6xl">
              Inspección completa. Informe bilingüe. El mismo rigor, en su idioma.
            </h1>
            <p className="mb-8 text-lg text-white/70 md:text-xl">
              HomeKey Inspections es el único equipo de inspección en Northern Virginia
              que ofrece inspectores bilingües certificados por ASHI, con cámaras
              termográficas y laboratorio acreditado ISO para el análisis de moho.
              Su hogar. Su idioma. Sin traducciones a medias.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<Link href="/schedule" />}
              >
                Reservar inspección →
              </Button>
              <Button
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

        {/* Trust bar */}
        <section className="border-b border-border/50 bg-secondary px-7 py-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-xs text-muted-foreground">
              <span>★ 4.9/5 en más de 500 reseñas</span>
              <span>ASHI · InterNACHI · NRS</span>
              <span>Loudoun, Fairfax, Prince William</span>
              <span>Certificación BBB A+</span>
              <span>Inspectores bilingües EN/ES</span>
            </div>
          </div>
        </section>

        {/* Bilingual contact card */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Su equipo bilingüe
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Hable directamente con un inspector
            </h2>
            <BilingualContactCard />
          </div>
        </section>

        {/* Services */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Lo que hacemos
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              Servicios de inspección
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="group rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <p className="mb-2 font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                    {svc.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{svc.desc}</p>
                  <span className="mt-3 block text-xs font-medium text-brand-primary">
                    Saber más →
                  </span>
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/es/servicios"
                className="text-sm font-medium text-brand-primary hover:underline underline-offset-4"
              >
                Ver todos los servicios →
              </Link>
            </p>
          </div>
        </section>

        {/* Why HomeKey */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Por qué HomeKey
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              La diferencia que puede comprobar
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {DIFFERENTIATORS.map((d) => (
                <div key={d.label} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{d.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{d.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team spotlight */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              El equipo
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              Sus inspectores bilingües
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[
                {
                  slug: 'sebastian-aste',
                  name: 'Sebastian Aste',
                  title: 'Inspector Certificado ASHI',
                  counties: 'Loudoun, Fairfax, Prince William',
                  photo: '/images/inspectors/sebastian-aste.jpg',
                },
                {
                  slug: 'jay-carrillo',
                  name: 'Jay (Jorge) Carrillo',
                  title: 'Inspector Certificado ASHI',
                  counties: 'Prince William, Fauquier, Stafford',
                  photo: '/images/inspectors/jay-carrillo.jpg',
                },
              ].map((inspector) => (
                <Link
                  key={inspector.slug}
                  href={`/inspectors/${inspector.slug}`}
                  className="group flex items-center gap-4 rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full bg-secondary">
                    <Image
                      src={inspector.photo}
                      alt={inspector.name}
                      fill
                      sizes="64px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                      {inspector.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{inspector.title}</p>
                    <p className="mt-1 text-xs text-brand-trust">
                      English · Spanish
                    </p>
                    <p className="text-xs text-muted-foreground">{inspector.counties}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/es/equipo"
                className="text-sm font-medium text-brand-primary hover:underline underline-offset-4"
              >
                Ver equipo completo →
              </Link>
            </p>
          </div>
        </section>

        {/* Coverage map */}
        <CoverageMap />

        {/* Final CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              ¿Listo para agendar?
            </h2>
            <p className="mb-8 text-base text-white/70">
              Reserve en línea en 60 segundos o contáctenos directamente en español.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<Link href="/schedule" />}
              >
                Agendar inspección →
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
                render={<a href="tel:+15712813846" />}
              >
                <Phone className="mr-2 h-4 w-4" />
                (571) 281-3846
              </Button>
              <Button
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
