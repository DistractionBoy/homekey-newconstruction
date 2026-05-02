import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function HomepageHero() {
  return (
    <section className="relative min-h-[580px] flex items-center" aria-label="Hero">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/unfinished-home-dusk.jpg"
          alt="New home under construction at dusk in Northern Virginia"
          fill
          sizes="100vw"
          loading="eager"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
      </div>

      <div className="mx-auto max-w-6xl px-7 py-20">
        <div className="max-w-xl">
          <p className="mb-3 text-[11px] uppercase tracking-[0.1em] text-orange-300 font-medium">
            Northern Virginia · Maryland · DC · Texas
          </p>
          <h1 className="mb-5 text-4xl font-medium leading-tight tracking-tight text-white md:text-5xl">
            The Key to Knowing More®
          </h1>
          <p className="mb-8 text-base leading-relaxed text-white/80 max-w-md">
            Northern Virginia&apos;s most thorough home inspection team. ASHI-certified
            inspectors, ISO-accredited mold lab, thermal imaging on every
            inspection — bilingual when you need it.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-brand-primary hover:bg-brand-primaryDark text-white shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-200"
              render={<Link href="/schedule" />}
            >
              Schedule an inspection →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/50 text-white bg-white/10 hover:bg-white/20 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
              render={<a href="#difference" />}
            >
              See what makes us different
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
