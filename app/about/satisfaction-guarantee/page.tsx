import type { Metadata } from 'next'
import { Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Satisfaction Guarantee — HomeKey Inspections',
  description:
    'If you are not satisfied with your HomeKey inspection, we will make it right. Learn what our guarantee covers, how to invoke it, and our re-inspection policy.',
  alternates: { canonical: '/about/satisfaction-guarantee' },
}

const nav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'New Construction', href: '/new-construction' },
    { label: 'Our Team', href: '/inspectors' },
    { label: 'About', href: '/about', active: true },
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

export default function SatisfactionGuaranteePage() {
  return (
    <>
      <NavBar nav={nav} />
      <main>
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Our Commitment
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Satisfaction Guarantee
            </h1>
            <p className="text-xl text-white/70">
              If something isn&apos;t right, we make it right.
            </p>
          </div>
        </section>

        {/* What it covers */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              01 — What it covers
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              You get what you paid for — or we fix it
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                HomeKey stands behind the quality of every inspection we perform. Our guarantee is
                simple: if you are not satisfied with the thoroughness, professionalism, or accuracy
                of your inspection, contact us within 30 days of your inspection date and we will
                work to resolve the issue — up to and including a free re-inspection of the same
                property.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                This guarantee applies to the inspection service itself — the time on site, the
                completeness of the report, and the quality of communication from your inspector.
                It reflects our commitment that every buyer we serve leaves with an accurate,
                thorough picture of the home they&apos;re buying.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Our inspectors are human. If you believe an accessible system or component was
                missed in your report, let us know. We will review the inspection documentation and,
                where appropriate, return to the property at no charge to assess the concern.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                'Thoroughness of the inspection walkthrough',
                'Completeness of systems and components examined',
                'Accuracy and clarity of the written report',
                'Professionalism and communication from your inspector',
                'Re-inspection if an accessible item was missed',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-xs text-brand-primary">
                    ✓
                  </span>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to invoke */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              02 — How to invoke it
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Contact us within 30 days
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                To invoke the guarantee, reach out to us directly within 30 days of your inspection
                date. Email is preferred — it gives us a written record of your concern and allows
                us to review your report and inspection documentation before responding.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Please include your inspection address, the date of your inspection, and a brief
                description of the concern. We respond to all guarantee inquiries within one
                business day.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:info@homekeyinspections.com"
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 transition-colors"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <Mail className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Email us</p>
                  <p className="text-xs text-muted-foreground">info@homekeyinspections.com</p>
                </div>
              </a>
              <a
                href="tel:+15712813846"
                className="flex items-center gap-3 rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 transition-colors"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-primary/10">
                  <Phone className="h-5 w-5 text-brand-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Call us</p>
                  <p className="text-xs text-muted-foreground">(571) 281-3846</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Re-inspection policy */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              03 — Re-inspection policy
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              When we come back, we come back fully
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                If a re-inspection is warranted, we return to the same property with the same
                thoroughness as the original inspection. We do not send a different inspector
                to rubber-stamp a previous report. The re-inspection is treated as a fresh
                assessment of the specific concern raised.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Re-inspections under the guarantee are performed at no charge for items that were
                accessible at the time of the original inspection. If an item was inaccessible
                during the original visit (locked, blocked, or covered), this policy does not apply
                — though we are happy to return to assess it at our standard follow-up rate.
              </p>
            </div>
          </div>
        </section>

        {/* What it doesn't cover */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              04 — What it does not cover
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              We are inspectors, not insurers
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                A home inspection is a visual assessment of accessible systems and components at a
                specific point in time. It is not a warranty, guarantee of condition, or prediction
                of future failure. Our satisfaction guarantee covers the quality of our inspection
                — it does not cover pre-existing conditions that were not visible or accessible at
                the time of the inspection, systems that were turned off or locked out, or
                conditions that developed after the inspection date.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                If you discover a defect after closing that was not in your report, we are happy to
                review the documentation and discuss what was observed at the time of the inspection.
                If an item was inaccessible, concealed, or beyond the scope of a standard home
                inspection, it falls outside this guarantee.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {[
                'Conditions not visible or accessible at time of inspection',
                'Systems shut off, locked, or otherwise unavailable',
                'Defects that developed or worsened after the inspection date',
                'Items outside ASHI Standards of Practice scope',
                'Consequential or incidental damages',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-xs text-destructive">
                    ✕
                  </span>
                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              Questions about a recent inspection?
            </h2>
            <p className="mb-8 text-base text-white/70">
              We respond to all inquiries within one business day.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<a href="mailto:info@homekeyinspections.com" />}
              >
                <Mail className="mr-2 h-4 w-4" />
                Email us →
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
      </main>
      <Footer footer={footer} />
    </>
  )
}
