import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import type { County, Community } from '@/app/areas/_data/types'

const areaNav = {
  logo: 'HomeKey Inspections',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'New Construction', href: '/new-construction' },
    { label: 'Our Team', href: '/inspectors' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
  ],
  langToggle: { label: 'ES', href: '/es' },
  cta: 'Book inspection',
  ctaHref: '/schedule',
}

const areaFooter = {
  copy: '© HomeKey Inspections · The Key to Knowing More®',
  locations: 'Sterling, VA · Leander, TX',
}

type CountyProps = { type: 'county'; data: County }
type CommunityProps = { type: 'community'; data: Community }
type Props = CountyProps | CommunityProps

export function AreaPage(props: Props) {
  if (props.type === 'county') {
    return <CountyPageLayout county={props.data} />
  }
  return <CommunityPageLayout community={props.data} />
}

function CountyPageLayout({ county }: { county: County }) {
  const locationLabel = county.state === 'DC' ? 'Washington D.C.' : `${county.name}, ${county.state}`

  return (
    <>
      <NavBar nav={areaNav} />
      <main>
        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              Service Area
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Home Inspections in {locationLabel}
            </h1>
            <p className="text-lg text-white/70">
              ASHI-certified inspectors. Thermal imaging standard. ISO-accredited mold lab. We work for you.
            </p>
          </div>
        </section>

        {/* Description */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Why it matters here
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Inspecting {county.name}
            </h2>
            <div className="space-y-4">
              {county.description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Common findings */}
        <section className="bg-secondary px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Local knowledge
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Common findings in {county.name}
            </h2>
            <ul className="space-y-3">
              {county.commonFindings.map((finding, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{finding}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Inspector coverage */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Your inspectors
            </p>
            <h2 className="mb-4 text-2xl font-medium text-foreground md:text-3xl">
              Who serves {county.name}
            </h2>
            <div className="flex flex-wrap gap-3">
              {county.inspectorCoverage.map((name) => {
                const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')
                return (
                  <Link
                    key={name}
                    href={`/inspectors/${slug}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/50 bg-secondary px-4 py-2 text-sm font-medium text-foreground hover:border-brand-primary/40 hover:text-brand-primary transition-colors"
                  >
                    {name}
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* Community cards */}
        {county.communities.length > 0 && (
          <section className="bg-secondary px-7 py-16">
            <div className="mx-auto max-w-6xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                Hyper-local coverage
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                Communities we serve in {county.name}
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {county.communities.map((community) => (
                  <Link
                    key={community.slug}
                    href={`/areas/${county.slug}/${community.slug}`}
                    className="group rounded-xl border border-border/50 bg-background p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
                  >
                    <p className="font-semibold text-foreground group-hover:text-brand-primary transition-colors">
                      {community.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                      {community.description[0]}
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
        {county.testimonials.length > 0 && (
          <section className="px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                What clients say
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                {county.name} clients
              </h2>
              <div className="space-y-4">
                {county.testimonials.map((t, i) => (
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

        {/* CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              Schedule your {county.name} inspection
            </h2>
            <p className="mb-8 text-base text-white/70">
              Book online in 60 seconds or call us directly.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<Link href={`/schedule?area=${county.slug}`} />}
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
      <Footer footer={areaFooter} />
    </>
  )
}

function CommunityPageLayout({ community }: { community: Community }) {
  return (
    <>
      <NavBar nav={areaNav} />
      <main>
        {/* Breadcrumb */}
        <nav className="border-b border-border/50 px-7 py-3">
          <div className="mx-auto flex max-w-6xl items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/areas" className="hover:text-foreground transition-colors">Areas</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/areas/${community.countySlug}`} className="hover:text-foreground transition-colors">
              {community.countyName}
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{community.name}</span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-brand-primary">
              {community.countyName}
            </p>
            <h1 className="mb-4 text-4xl font-medium leading-tight text-white md:text-5xl">
              Home Inspections in {community.name}
            </h1>
            <p className="text-lg text-white/70">
              Independent inspections for {community.name} homebuyers and homeowners.
            </p>
          </div>
        </section>

        {/* Description */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <div className="space-y-4">
              {community.description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Builders */}
        {community.builders.length > 0 && (
          <section className="bg-secondary px-7 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
                New construction
              </p>
              <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
                Builders we&apos;ve inspected in {community.name}
              </h2>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {community.builders.map((builder) => (
                  <li key={builder} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                    {builder}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Why HomeKey */}
        <section className="px-7 py-16">
          <div className="mx-auto max-w-3xl">
            <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
              Why HomeKey
            </p>
            <h2 className="mb-6 text-2xl font-medium text-foreground md:text-3xl">
              Why {community.name} buyers choose HomeKey
            </h2>
            <ul className="space-y-3">
              {community.whyHomeKey.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-ink px-7 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
              Schedule in {community.name}
            </h2>
            <p className="mb-8 text-base text-white/70">
              Book online in 60 seconds or call us directly.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
                render={<Link href={`/schedule?area=${community.slug}`} />}
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
            <p className="mt-6 text-sm text-white/50">
              <Link href={`/areas/${community.countySlug}`} className="underline underline-offset-4 hover:text-white/80 transition-colors">
                ← Back to {community.countyName}
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer footer={areaFooter} />
    </>
  )
}
