import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'What Makes HomeKey Different — HomeKey Inspections',
  description:
    'Training that takes months, not weeks. Thermal imaging on every inspection. 3–5 hours on site. A team that works for the buyer, not the closing timeline.',
  alternates: { canonical: '/about/the-difference' },
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

export default function TheDifferencePage() {
  return (
    <>
      <NavBar nav={nav} />
      <main>
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Why HomeKey
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              We charge more than other inspectors.
            </h1>
            <p className="text-xl text-white/70">
              Here&apos;s why that&apos;s a good thing.
            </p>
          </div>
        </section>

        {/* Training */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              01 — Training
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              6–8 months before the first solo inspection
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                The state of Virginia requires 35 hours of coursework and a passing exam score to become
                a licensed home inspector. That&apos;s it. You could pass in a few weekends with no
                background in construction, no hands-on experience, and no understanding of how buildings
                actually fail. The bar is low by design — it&apos;s set by bureaucrats, not by the buyers
                who rely on inspectors to protect them.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                HomeKey inspectors don&apos;t go through weeks of training. They go through 6–8 months.
                We built a training workshop with real systems: functioning HVAC equipment, live electrical
                panels, roof sample stations, plumbing rigs. New inspectors work through every system until
                they understand not just what failure looks like, but why it happens and what it means for
                the buyer.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                After the workshop phase, every inspector shadows 100+ full inspections before leading
                one alone. That&apos;s not a formality — that&apos;s how you learn to read a house. By the
                time a HomeKey inspector walks through your door, they have seen hundreds of homes across
                every construction era, condition, and building type in Northern Virginia.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-border/50 bg-secondary p-5">
              <p className="text-sm font-medium text-foreground">
                Want to know the full training program?
              </p>
              <Link
                href="/about/training-philosophy"
                className="mt-1 text-sm text-brand-primary hover:underline underline-offset-4"
              >
                Read our training philosophy →
              </Link>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              02 — Equipment
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Thermal imaging on every inspection — not an upsell
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Many inspection companies advertise thermal imaging. They charge $150–$300 extra for it,
                and it&apos;s performed by whoever happens to have the camera that day. At HomeKey, every
                inspector carries a full thermal imaging camera to every inspection. No extra fee.
                No scheduling around who has the equipment.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Thermal imaging finds what the naked eye can&apos;t: water intrusion hidden behind drywall,
                insulation gaps that drive heating and cooling costs up, electrical components running hot
                under load, HVAC duct leaks that make rooms uncomfortable. These are the findings that
                change inspection outcomes — and they don&apos;t show up on a visual walkthrough.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Beyond thermal imaging, our inspectors carry calibrated moisture meters, 33-foot inspection
                poles for high rooflines, crawl space lighting rigs, and gas detectors. The right tool for
                every scenario — not a minimum kit that technically satisfies the requirement.
              </p>
            </div>
          </div>
        </section>

        {/* Time */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              03 — Time on site
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              3–5 hours. Not 60 minutes.
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Sixty-minute home inspections exist. We&apos;ve heard stories. Sixty minutes is enough
                time to walk through the house, check a few outlets, glance in the attic, and produce a
                boilerplate report with stock photos. It is not enough time to inspect a home.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                A HomeKey inspection typically runs 3–5 hours for a single-family home, depending on
                size and condition. That&apos;s 3–5 hours of an ASHI-certified inspector working
                systematically through every accessible system and component — roof to foundation, attic
                to crawl space, panel to plumbing fixtures.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We encourage you to attend your inspection. The time on site isn&apos;t just about the
                written report — it&apos;s your opportunity to walk through the home with an expert,
                ask questions in context, and understand the home you&apos;re buying before you own it.
                Your inspector will walk you through significant findings in real time.
              </p>
            </div>
          </div>
        </section>

        {/* Buyer allegiance */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              04 — Who we work for
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              We work for the buyer. Only.
            </h2>
            <div className="space-y-4">
              <p className="text-base leading-relaxed text-muted-foreground">
                Home inspectors occupy an unusual position in the real estate transaction. The buyer pays
                for the inspection. But the inspector is often referred by the real estate agent — the
                same agent whose commission depends on the deal closing. That creates a subtle but
                significant conflict of interest.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                HomeKey has no financial relationship with real estate agents, brokers, or sellers.
                We don&apos;t get referral fees. We don&apos;t participate in preferred vendor programs.
                Our only obligation is to the person writing the check for the inspection — you.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                That means we won&apos;t soften a finding because an agent is anxious about the deal.
                We won&apos;t rush through an inspection because closing is on Friday. We won&apos;t
                tell you a home is fine when it isn&apos;t. We will tell you the truth about the
                condition of the home — and let you decide what to do with that information.
              </p>
            </div>
            <div className="mt-8 rounded-xl border border-border/50 bg-background p-5">
              <p className="text-sm font-medium text-foreground">
                Our satisfaction guarantee backs this up.
              </p>
              <Link
                href="/about/satisfaction-guarantee"
                className="mt-1 text-sm text-brand-primary hover:underline underline-offset-4"
              >
                Read our guarantee →
              </Link>
            </div>
          </div>
        </section>

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
      <Footer footer={footer} />
    </>
  )
}
