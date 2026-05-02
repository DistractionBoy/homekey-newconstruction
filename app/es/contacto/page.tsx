import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { BilingualContactCard } from '@/components/es/BilingualContactCard'
import { SpanishMobileStickyBar } from '@/components/es/SpanishMobileStickyBar'

export const metadata: Metadata = {
  title: 'Contacto — HomeKey Inspections',
  description:
    'Contáctenos en español. Sebastian Aste y Jay Carrillo son inspectores bilingües certificados ASHI disponibles para responder sus preguntas en su idioma.',
  alternates: {
    canonical: '/es/contacto',
    languages: {
      'en-US': '/contact',
      'es-US': '/es/contacto',
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

export default function ContactoPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main lang="es">
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Hablemos
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Contáctenos
            </h1>
            <p className="text-xl text-white/70">
              En español. Sin intermediarios.
            </p>
          </div>
        </section>

        {/* Bilingual team card */}
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

        {/* Contact methods */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Cómo contactarnos
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              Todas las formas de llegar a nosotros
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="tel:+15712813846"
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 transition-colors"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <Phone className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Teléfono</p>
                  <p className="text-sm text-muted-foreground">(571) 281-3846</p>
                  <p className="text-xs text-muted-foreground">Lun–Sáb, 8am–7pm ET</p>
                </div>
              </a>
              <a
                href="https://wa.me/15712813846"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 transition-colors"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <MessageCircle className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+1 (571) 281-3846</p>
                  <p className="text-xs text-muted-foreground">Respuesta rápida en español</p>
                </div>
              </a>
              <a
                href="mailto:info@homekeyinspections.com"
                className="flex items-center gap-4 rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 transition-colors"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <Mail className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Correo electrónico</p>
                  <p className="text-sm text-muted-foreground">info@homekeyinspections.com</p>
                  <p className="text-xs text-muted-foreground">Respuesta en 1 día hábil</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl border border-border/50 bg-background p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <MapPin className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Área de servicio</p>
                  <p className="text-sm text-muted-foreground">Loudoun, Fairfax, Prince William</p>
                  <p className="text-xs text-muted-foreground">Maryland, DC y Austin, TX</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Book CTA */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Reservar en línea
            </p>
            <h2 className="mb-4 text-2xl font-medium text-foreground md:text-3xl">
              Reserve su inspección en 60 segundos
            </h2>
            <p className="mb-6 text-base text-muted-foreground">
              Elija la fecha, hora y tipo de inspección. Confirmaremos en 24 horas y le asignaremos a Sebastian o Jay si solicitó inspección en español.
            </p>
            <Button
              nativeButton={false}
              size="lg"
              className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] transition-all duration-200"
              render={<Link href="/schedule" />}
            >
              Agendar inspección →
            </Button>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
      <SpanishMobileStickyBar />
    </>
  )
}
