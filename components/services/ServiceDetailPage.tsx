import Link from 'next/link'
import { FileText, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { ServiceFAQAccordion } from '@/components/services/ServiceFAQAccordion'
import { ServiceWhatWeInspect } from '@/components/services/ServiceWhatWeInspect'
import { JsonLd } from '@/components/JsonLd'
import { serviceSchema, faqSchema } from '@/lib/json-ld'
import type { ServiceData } from '@/app/services/_data/types'

const serviceNav = {
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

const serviceFooter = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

type Props = {
  data: ServiceData
}

export function ServiceDetailPage({ data }: Props) {
  return (
    <>
      <JsonLd data={serviceSchema({ name: data.title, description: data.metaDescription, url: `/services/${data.slug}` })} />
      {data.faqs.length > 0 && <JsonLd data={faqSchema(data.faqs)} />}
      <NavBar nav={serviceNav} />
      <main>
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Services
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              {data.title}
            </h1>
            <p className="mb-8 text-lg text-white/70">{data.subtitle}</p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button
                nativeButton={false}
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] transition-all duration-200"
                render={<Link href="/schedule" />}
              >
                Schedule an inspection →
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="lg"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 transition-all duration-200"
                render={<a href="tel:+15712813846" />}
              >
                <Phone className="mr-2 h-4 w-4" />
                (571) 281-3846
              </Button>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Why it matters
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              What&apos;s at stake
            </h2>
            <div className="space-y-4">
              {data.whyImportant.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* What We Inspect */}
        {data.whatWeInspect.length > 0 && (
          <section className="bg-secondary px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                What we cover
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                What we inspect
              </h2>
              <ServiceWhatWeInspect items={data.whatWeInspect} />
            </div>
          </section>
        )}

        {/* What to Expect */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              The process
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              What to expect
            </h2>
            <ol className="space-y-6">
              {data.whatToExpect.map((step) => (
                <li key={step.step} className="flex gap-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-sm font-semibold text-brand-primary">
                    {step.step}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Transparent pricing
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Pricing
            </h2>
            <div className="overflow-hidden rounded-xl border border-border/50 bg-background">
              {data.pricing.rows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between border-b border-border/40 px-5 py-4 last:border-0"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">{row.label}</p>
                    {row.note && (
                      <p className="text-xs text-muted-foreground">{row.note}</p>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-brand-primary">{row.price}</p>
                </div>
              ))}
            </div>
            {data.pricing.note && (
              <p className="mt-4 text-xs text-muted-foreground">{data.pricing.note}</p>
            )}
          </div>
        </section>

        {/* Sample Reports */}
        {data.sampleReports.length > 0 && (
          <section className="px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                See the work
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                Sample reports
              </h2>
              <div className="flex flex-wrap gap-3">
                {data.sampleReports.map((report, i) => (
                  <a
                    key={i}
                    href={report.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm font-medium text-foreground hover:border-brand-primary/40 hover:text-brand-primary transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    {report.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {data.relatedServices.length > 0 && (
          <section className="bg-secondary px-7 py-16">
            <div className="mx-auto max-w-6xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                Add to your inspection
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                Related services
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {data.relatedServices.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="group rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <p className="mb-1 font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                      {svc.title}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {svc.description}
                    </p>
                    <span className="mt-3 block text-xs font-medium text-brand-primary">
                      Learn more →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Testimonials */}
        {data.testimonials.length > 0 && (
          <section className="px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                What clients say
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                Reviews
              </h2>
              <div className="space-y-4">
                {data.testimonials.map((t, i) => (
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

        {/* FAQ */}
        {data.faqs.length > 0 && (
          <section className="bg-secondary px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                Common questions
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                FAQ
              </h2>
              <ServiceFAQAccordion faqs={data.faqs} />
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              Ready to schedule?
            </h2>
            <p className="mb-8 text-base text-white/70">
              Book online in 60 seconds or call us directly.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                nativeButton={false}
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<Link href="/schedule" />}
              >
                Schedule an inspection →
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
      <Footer footer={serviceFooter} />
    </>
  )
}
