import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import type { Inspector } from '@/app/inspectors/_data/inspectors'

const inspectorNav = {
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

const inspectorFooter = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

type Props = {
  inspector: Inspector
}

export function InspectorPage({ inspector }: Props) {
  const firstName = inspector.name.split(' ')[0]
  const isOfficeStaff = inspector.certifications.length === 0

  return (
    <>
      <NavBar nav={inspectorNav} />
      <main>
        {/* Hero header */}
        <section className="bg-brand-ink px-7 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
              {/* Photo */}
              <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-56">
                <Image
                  src={inspector.photo}
                  alt={inspector.name}
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-cover object-top"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <p className="mb-1 text-[11px] uppercase tracking-widest text-brand-primary">
                  {isOfficeStaff ? 'Office Team' : 'Inspector'}
                </p>
                <h1 className="mb-1 text-3xl font-medium text-white md:text-4xl">
                  {inspector.name}
                </h1>
                <p className="mb-4 text-base text-white/70">{inspector.title}</p>

                {/* Language badges */}
                {inspector.languages && inspector.languages.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-1.5">
                    {inspector.languages.map((lang) => (
                      <Badge
                        key={lang}
                        className="bg-brand-trust/20 text-blue-300 border-blue-400/30 text-[10px]"
                      >
                        {lang}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Certification badges */}
                {inspector.certifications.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {inspector.certifications.map((cert) => (
                      <Badge
                        key={cert}
                        className="bg-white/10 text-white/80 text-[10px]"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Bio */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Background
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              About {firstName}
            </h2>
            <div className="space-y-4">
              {inspector.bio.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Specialties + Areas (side by side on desktop) */}
        {(inspector.specialties.length > 0 || inspector.areasServed.length > 0) && (
          <section className="bg-secondary px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <div className="grid gap-8 sm:grid-cols-2">
                {inspector.specialties.length > 0 && (
                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                      Specialties
                    </p>
                    <h2 className="mb-4 text-xl font-medium text-foreground">
                      {isOfficeStaff ? 'Role' : 'What I specialize in'}
                    </h2>
                    <ul className="space-y-2">
                      {inspector.specialties.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {inspector.areasServed.length > 0 && (
                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                      Coverage
                    </p>
                    <h2 className="mb-4 text-xl font-medium text-foreground">
                      Areas served
                    </h2>
                    <ul className="space-y-2">
                      {inspector.areasServed.map((area) => (
                        <li key={area} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {inspector.testimonials.length > 0 && (
          <section className="px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                Client reviews
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                What clients say about {firstName}
              </h2>
              <div className="space-y-4">
                {inspector.testimonials.map((t, i) => (
                  <blockquote
                    key={i}
                    className="rounded-xl border border-border/50 bg-secondary p-5"
                  >
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <footer className="mt-3 flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">{t.reviewer}</span>
                      {t.platform && (
                        <span className="text-xs text-muted-foreground">· {t.platform}</span>
                      )}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Book with me CTA */}
        {!isOfficeStaff && (
          <section className="bg-brand-ink px-7 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
                Book with {firstName}
              </h2>
              <p className="mb-8 text-base text-white/70">
                Request {firstName} by name when you schedule your inspection.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                  render={<Link href={`/schedule?inspector=${inspector.slug}`} />}
                >
                  Book with {firstName} →
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
              </div>
            </div>
          </section>
        )}

        {/* Contact CTA for office staff */}
        {isOfficeStaff && (
          <section className="bg-brand-ink px-7 py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
                Get in touch
              </h2>
              <p className="mb-8 text-base text-white/70">
                {firstName} handles scheduling and client communications. Reach out any time.
              </p>
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                  render={<a href="mailto:info@homekeyinspections.com" />}
                >
                  Email the team →
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
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer footer={inspectorFooter} />
    </>
  )
}
