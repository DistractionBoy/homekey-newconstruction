import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Thermometer, Clock, Shield, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { CoverageMap } from '@/components/homepage/CoverageMap'
import { INSPECTORS } from '@/app/inspectors/_data/inspectors'

export const metadata: Metadata = {
  title: 'About HomeKey Inspections — The Key to Knowing More®',
  description:
    'HomeKey Inspections has served Northern Virginia since 2012. Learn why we train harder, equip better, and work exclusively for the buyer — never the closing timeline.',
  alternates: { canonical: '/about' },
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

const PRINCIPLES = [
  {
    icon: GraduationCap,
    heading: 'Train deeper than the state requires',
    body: '6–8 months of in-house advanced training in our workshop — real HVAC systems, live electric panels, roof samples — then 100+ shadow inspections before leading solo. The state minimum is a few weeks of coursework. We hold our inspectors to a different standard.',
  },
  {
    icon: Thermometer,
    heading: 'Equip with the best tools',
    body: 'Thermal imaging cameras, calibrated moisture meters, 33-foot inspection poles, crawl space crawlers — all standard, not add-ons. Every inspector arrives with the equipment to see what the naked eye cannot.',
  },
  {
    icon: Clock,
    heading: 'Take the time the home deserves',
    body: 'Three to five hours on site for a typical single-family home. Not sixty minutes. Not ninety. We walk you through findings in real time and deliver a photo-and-video-rich report within 24 hours.',
  },
  {
    icon: Shield,
    heading: 'Work for the buyer, never the deal',
    body: 'We have no financial relationship with real estate agents, sellers, or closing timelines. Our obligation is entirely to the person paying for the inspection. We won\'t rush for a closing date.',
  },
]

const AWARD_LOGOS = [
  { src: '/images/logos/aci.jpg', alt: 'ASHI Certified Inspector (ACI)', width: 150, height: 150 },
  { src: '/images/logos/nova-ashi.jpg', alt: 'NOVA ASHI Chapter', width: 150, height: 92 },
  { src: '/images/logos/ahit-logo.jpg', alt: 'AHIT Graduate', width: 150, height: 150 },
  { src: '/images/logos/crt-logo.jpg', alt: 'Certified Residential Thermographer', width: 150, height: 150 },
  { src: '/images/logos/google-guaranteed.webp', alt: 'Google Guaranteed', width: 150, height: 150 },
  { src: '/images/logos/yelp-5star.png', alt: 'Yelp 5-Star Reviews', width: 150, height: 150 },
  { src: '/images/logos/angi-ssa-2023.png', alt: "Angi Super Service Award 2023", width: 150, height: 150 },
  { src: '/images/logos/angi-ssa-2020.png', alt: "Angi Super Service Award 2020", width: 150, height: 150 },
  { src: '/images/logos/angi-ssa-2019.png', alt: "Angi Super Service Award 2019", width: 150, height: 150 },
  { src: '/images/logos/angi-ssa-2018.png', alt: "Angi Super Service Award 2018", width: 150, height: 150 },
  { src: '/images/logos/angi-ssa-2017.png', alt: "Angi Super Service Award 2017", width: 150, height: 150 },
  { src: '/images/logos/expertise-2018.png', alt: 'Expertise Award 2018', width: 150, height: 150 },
  { src: '/images/logos/homeguide-2018.png', alt: 'HomeGuide 2018', width: 150, height: 150 },
  { src: '/images/logos/the-difference.png', alt: 'The Difference', width: 150, height: 150 },
]

export default function AboutPage() {
  const fieldInspectors = INSPECTORS.filter((i) => i.certifications.length > 0)

  return (
    <>
      <NavBar nav={nav} />
      <main>
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Since 2012
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              About HomeKey Inspections
            </h1>
            <p className="text-xl text-white/70">
              Founded by inspectors who weren&apos;t satisfied with the industry.
            </p>
          </div>
        </section>

        {/* Origin story */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-5">
              <p className="text-base leading-relaxed text-muted-foreground">
                HomeKey Inspections has been operating in Northern Virginia since 2012, performing
                thousands of residential inspections across Loudoun, Fairfax, Prince William, and
                Fauquier counties — plus Maryland, DC, and our Austin, Texas branch.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                We started HomeKey because we saw a gap. The state minimum to become a home inspector
                is shockingly low — you can pass the exam in a few weeks of study with no construction
                experience. Most companies hire inspectors at that bare minimum. We don&apos;t. Every
                HomeKey inspector goes through 6–8 months of in-house advanced training before they
                ever lead an inspection on their own.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                The result is a team of inspectors who genuinely know how homes are built, what
                goes wrong, and how to find the problems that matter — the ones that would cost
                you thousands after closing if no one caught them first.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] transition-all duration-200"
                render={<Link href="/about/the-difference" />}
              >
                What makes us different →
              </Button>
              <Button
                variant="outline"
                size="lg"
                render={<Link href="/about/training-philosophy" />}
              >
                Our training program
              </Button>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              How we operate
            </p>
            <h2 className="mb-10 text-2xl font-medium text-foreground md:text-3xl">
              Four principles we don&apos;t compromise on
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {PRINCIPLES.map((p, i) => (
                <div key={i} className="rounded-xl border border-border/50 bg-background p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary/10">
                    <p.icon className="h-5 w-5 text-brand-primary" />
                  </div>
                  <h3 className="mb-3 text-sm font-semibold leading-snug text-foreground">
                    {p.heading}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team grid */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              The people
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              Meet the team
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {fieldInspectors.map((inspector) => (
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
                    {inspector.languages && (
                      <p className="mt-1 text-[10px] text-brand-trust">
                        {inspector.languages.join(' · ')}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/inspectors"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:underline underline-offset-4"
              >
                View full team profiles
                <ChevronRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </section>

        {/* Awards & Certifications */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Credentials
            </p>
            <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
              Awards &amp; certifications
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              {AWARD_LOGOS.map((logo) => (
                <div key={logo.src} className="relative h-16 w-16 flex-shrink-0">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage map reuse */}
        <CoverageMap />

        {/* Story placeholder */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Origin story
            </p>
            <h2 className="mb-4 text-2xl font-medium text-foreground md:text-3xl">
              Read our story
            </h2>
            <p className="mb-6 text-base text-muted-foreground">
              The full founder story — from a home improvement business in Southern California
              to building Northern Virginia&apos;s most thorough inspection team — is coming soon.
            </p>
            <Button variant="outline" size="lg" render={<Link href="/schedule" />}>
              Schedule an inspection in the meantime →
            </Button>
          </div>
        </section>
      </main>
      <Footer footer={footer} />
    </>
  )
}
