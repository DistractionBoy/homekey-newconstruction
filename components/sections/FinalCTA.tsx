import { Button } from '@/components/ui/button'
import type { Content } from '@/app/new-construction/_data/content'

type FinalCTAProps = {
  finalCta: Content['finalCta']
}

export function FinalCTA({ finalCta }: FinalCTAProps) {
  return (
    <section className="bg-secondary px-7 py-16 text-center">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2.5 text-2xl font-medium text-foreground">{finalCta.headline}</h2>
        <p className="mb-6 text-sm text-muted-foreground">{finalCta.subtext}</p>
        <Button size="lg" render={<a href="#" />}>
          {finalCta.cta}
        </Button>
      </div>
    </section>
  )
}
