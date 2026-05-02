import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Training Philosophy — HomeKey Inspections',
  description:
    '6–8 months of in-house advanced training before the first solo inspection. See how HomeKey builds inspectors who know what they are looking at and why.',
  alternates: { canonical: '/about/training-philosophy' },
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

const PHASES = [
  {
    months: 'Months 1–2',
    heading: 'Foundations: systems and failure modes',
    body: `New inspectors begin with an intensive classroom phase covering how homes are built and how they fail. The curriculum spans residential construction methods, building science fundamentals, and the physics of how water, heat, and electrical current behave in a structure. This isn't preparation for an exam — it's preparation for understanding what they're looking at on an actual job site.

The classroom work runs alongside daily hands-on time in our training workshop, a dedicated facility equipped with functioning HVAC equipment, live electrical panels, plumbing rigs, framing samples, and roof assemblies. Inspectors learn to identify normal and abnormal conditions on real systems — not diagrams or photos.`,
  },
  {
    months: 'Months 3–4',
    heading: 'Applied inspection: working through every system',
    body: `With the foundation in place, inspectors spend months 3 and 4 running mock inspections in the workshop. They work through every accessible system and component in a standardized sequence: roof, attic, structure, exterior, plumbing, HVAC, electrical, interior, insulation and ventilation, and built-in appliances.

This is the phase where inspectors develop the muscle memory for a thorough, systematic walkthrough. They learn how to use the full equipment kit — thermal imaging cameras, moisture meters, gas detectors, 33-foot inspection poles — and when each tool changes the finding versus when it confirms what they already knew from visual inspection.`,
  },
  {
    months: 'Months 5–6',
    heading: 'Shadow inspections: 100+ real homes',
    body: `Starting in month 5, new inspectors begin shadowing field inspections on real properties. They observe, they document, and they ask questions — but they do not lead. Over 100 shadow inspections, they work through every construction era, every building type, and every condition range present in Northern Virginia's housing stock: 1960s split-levels, 1990s colonials, 2000s townhomes, new construction.

This phase is where book knowledge becomes professional judgment. Inspectors start to develop pattern recognition — the subtle signs that precede a major finding, the conditions that look alarming but aren't, the defects that are easy to miss if you're not looking in the right place. No classroom instruction accelerates this. Only hours on site.`,
  },
  {
    months: 'Months 7–8',
    heading: 'Supervised lead inspections and final certification',
    body: `In the final two months, inspectors begin leading inspections under direct supervision. A senior HomeKey inspector accompanies them on every job, observing and available for consultation — but the new inspector runs the walkthrough, writes the report, and presents findings to the client.

By the end of month 8, inspectors have completed their state licensing requirements, passed HomeKey's internal evaluation, and demonstrated the ability to perform a complete, independent inspection to our standard. Only then do they lead inspections alone.`,
  },
]

export default function TrainingPhilosophyPage() {
  return (
    <>
      <NavBar nav={nav} />
      <main>
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              How we train
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Training Philosophy
            </h1>
            <p className="text-xl text-white/70">
              6–8 months before the first solo inspection.
            </p>
          </div>
        </section>

        {/* Why it matters */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              The standard
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              The state minimum is not a training program
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Virginia requires 35 hours of coursework and a passing exam to become a licensed
                home inspector. You could satisfy that requirement in a few weekends with no
                construction background. The bar exists to define a legal floor — not to produce
                inspectors who are genuinely capable of protecting buyers.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                HomeKey holds its inspectors to a different standard. Every inspector goes through
                6–8 months of in-house training before they lead their first solo inspection. That
                training includes both structured coursework and an extensive hands-on phase — real
                equipment, real homes, real findings.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The goal isn&apos;t just competency. It&apos;s the kind of fluency that comes from
                repetition: having seen the same failure mode in 40 different homes, having worked
                through a flooded crawl space and a 200-amp panel with a double-tapped breaker and
                an HVAC system running on its last season. That fluency is what makes the difference
                between a report that protects a buyer and a report that misses what matters.
              </p>
            </div>
          </div>
        </section>

        {/* The workshop */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              The facility
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              A training workshop with real systems
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Most home inspection training happens in a classroom or on screen. HomeKey built a
                dedicated workshop facility equipped with the actual systems inspectors will encounter
                in the field.
              </p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { label: 'HVAC systems', detail: 'Gas furnaces, heat pumps, central AC — operational' },
                { label: 'Electrical panels', detail: 'Live 100A and 200A panels with staged defects' },
                { label: 'Plumbing rigs', detail: 'Supply, drain, and fixture assemblies' },
                { label: 'Roof assemblies', detail: 'Multiple roofing types, staged failure conditions' },
                { label: 'Framing samples', detail: 'Dimensional lumber, engineered lumber, defects' },
                { label: 'Attic simulation', detail: 'Insulation types, ventilation configurations' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border/50 bg-background p-4">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training timeline */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              The program
            </p>
            <h2 className="mb-10 text-2xl font-medium text-foreground md:text-3xl">
              Month by month
            </h2>
            <div className="space-y-12">
              {PHASES.map((phase) => (
                <div key={phase.months}>
                  <p className="mb-1 text-[11px] uppercase tracking-widest text-brand-primary">
                    {phase.months}
                  </p>
                  <h3 className="mb-4 text-xl font-medium text-foreground">{phase.heading}</h3>
                  <div className="space-y-4">
                    {phase.body.split('\n\n').map((para, i) => (
                      <p key={i} className="text-base leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Continuing education */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              After certification
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Continuing education never stops
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Virginia requires 16 hours of continuing education per year for licensed home
                inspectors. ASHI requires 20 hours annually to maintain Certified Inspector status.
                HomeKey inspectors meet and exceed both requirements — but that&apos;s not the point.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Building science evolves. New construction methods create new failure modes. Code
                changes affect what&apos;s acceptable in homes built in different eras. Our inspectors
                stay current not because they have to, but because the job demands it. An inspector
                who stopped learning in 2015 is going to miss things in a 2025 build.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                All HomeKey inspectors hold or are actively pursuing ASHI Certified Inspector (ACI)
                status, the industry&apos;s most rigorous third-party credential. Several hold additional
                specialty certifications in thermography, new residential structure (NRS), and
                radon measurement.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-border/50 bg-background p-5">
              <p className="text-sm font-medium text-foreground">
                See what makes our training visible in the field.
              </p>
              <Link
                href="/about/the-difference"
                className="mt-1 text-sm text-brand-primary hover:underline underline-offset-4"
              >
                Read what makes HomeKey different →
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              Ready to put this training to work?
            </h2>
            <p className="mb-8 text-base text-white/70">
              Book online in 60 seconds or call us directly.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<Link href="/schedule" />}
              >
                Schedule an inspection →
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
