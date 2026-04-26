import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HeroSlider } from '@/components/new-construction/HeroSlider'
import type { Content } from '@/app/new-construction/_data/content'

type HeroSectionProps = {
  hero: Content['hero']
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-7 py-16 md:grid-cols-[1.1fr_1fr] md:py-24">
      {/* Copy */}
      <div>
        <Badge className="mb-4 bg-[#E1F5EE] text-[#085041] hover:bg-[#E1F5EE]">
          {hero.badge}
        </Badge>
        <h1 className="mb-4 text-4xl font-medium leading-tight tracking-tight text-foreground whitespace-pre-line">
          {hero.headline}
        </h1>
        <p className="mb-6 max-w-md text-base leading-relaxed text-muted-foreground">
          {hero.subheadline}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button render={<a href="#pricing" />}>{hero.primaryCta}</Button>
          <Button variant="outline" render={<Link href="#" />}>
            {hero.secondaryCta}
          </Button>
        </div>
        <ul className="mt-6 flex flex-wrap gap-4">
          {hero.trustPills.map((pill) => (
            <li key={pill} className="text-xs text-muted-foreground">
              {pill}
            </li>
          ))}
        </ul>
      </div>

      {/* Image slider */}
      <div className="order-first md:order-last">
        <HeroSlider />
      </div>
    </section>
  )
}
