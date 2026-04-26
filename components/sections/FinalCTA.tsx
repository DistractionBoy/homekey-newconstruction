import { Button } from '@/components/ui/button'
import type { Content } from '@/app/new-construction/_data/content'

type FinalCTAProps = {
  finalCta: Content['finalCta']
}

const BLUEPRINT_GRID: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
}

export function FinalCTA({ finalCta }: FinalCTAProps) {
  return (
    <section
      style={BLUEPRINT_GRID}
      className="bg-slate-900 px-7 py-16 text-center text-white"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2.5 text-2xl font-medium">{finalCta.headline}</h2>
        <p className="mb-6 text-sm text-slate-300">{finalCta.subtext}</p>
        <Button
          size="lg"
          className="bg-brand-primary hover:bg-brand-primaryDark text-white hover:scale-[1.02] hover:shadow-md transition-all duration-200"
          render={<a href="#" />}
        >
          {finalCta.cta}
        </Button>
      </div>
    </section>
  )
}
