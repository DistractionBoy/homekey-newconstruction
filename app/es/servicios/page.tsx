import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { SpanishMobileStickyBar } from '@/components/es/SpanishMobileStickyBar'

export const metadata: Metadata = {
  title: 'Servicios de inspección — HomeKey Inspections',
  description:
    'Inspección de vivienda, prueba de radón, prueba de moho, inspección termográfica e inspección de nueva construcción en el norte de Virginia. Inspectores bilingües certificados ASHI.',
  alternates: {
    canonical: '/es/servicios',
    languages: {
      'en-US': '/services',
      'es-US': '/es/servicios',
    },
  },
}

const nav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Servicios', href: '/es/servicios', active: true },
    { label: 'Nueva Construcción', href: '/es/nueva-construccion' },
    { label: 'Nuestro Equipo', href: '/es/equipo' },
    { label: 'Precios', href: '/es/precios' },
  ],
  langToggle: { label: 'EN', href: '/services' },
  cta: 'Agendar',
  ctaHref: '/schedule',
}

const footer = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

const SERVICES = [
  {
    title: 'Inspección de vivienda',
    href: '/es/servicios/inspeccion-de-vivienda',
    desc: 'Evaluación sistemática de todos los sistemas y componentes accesibles — del techo a los cimientos. 3 a 5 horas en sitio, informe con fotos en 24 horas.',
  },
  {
    title: 'Prueba de radón',
    href: '/es/servicios/prueba-de-radon',
    desc: 'El norte de Virginia es Zona 1 de la EPA — la categoría de mayor riesgo. Dispositivo calibrado, análisis de laboratorio e informe de resultados.',
  },
  {
    title: 'Prueba de moho',
    href: '/es/servicios/prueba-de-moho',
    desc: 'Análisis de laboratorio acreditado ISO/IEC 17025:2017. Resultados en 1–2 días hábiles.',
  },
  {
    title: 'Inspección pre-tabla yeso',
    href: '/es/servicios/inspeccion-pre-drywall',
    desc: 'La única oportunidad de ver el interior de su nueva vivienda antes de que se cierren las paredes.',
  },
  {
    title: 'Inspección de garantía',
    href: '/es/servicios/inspeccion-de-garantia',
    desc: 'Documente los defectos del constructor en el mes 11 antes de que expire la garantía de un año.',
  },
  {
    title: 'Inspección termográfica',
    href: '/es/servicios/inspeccion-termografica',
    desc: 'Incluida en cada inspección de HomeKey sin costo adicional. Encuentra humedad oculta, huecos de aislamiento y puntos calientes eléctricos.',
  },
  {
    title: 'Inspección de alcantarillado',
    href: '/es/servicios/sewer-scope',
    desc: 'Video de la tubería lateral desde la vivienda hasta la conexión municipal. Detecta raíces, grietas y juntas desplazadas.',
  },
  {
    title: 'Nueva construcción',
    href: '/es/nueva-construccion',
    desc: 'Paquete completo para compradores de viviendas nuevas: pre-tabla yeso, recorrido pre-cierre e inspección de garantía de 11 meses.',
  },
]

export default function ServiciosPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main lang="es">
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Lo que hacemos
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Servicios de inspección
            </h1>
            <p className="text-xl text-white/70">
              Inspectores bilingües certificados ASHI. Imágenes térmicas estándar. Laboratorio acreditado ISO.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-6xl">
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
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              ¿Tiene preguntas?
            </h2>
            <p className="mb-8 text-base text-white/70">
              Hable directamente con Sebastian o Jay en español.
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
                render={<a href="tel:+15712813846" />}
              >
                <Phone className="mr-2 h-4 w-4" />
                (571) 281-3846
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
