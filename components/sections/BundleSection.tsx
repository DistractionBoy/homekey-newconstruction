import type { Content } from '@/app/new-construction/_data/content'

type BundleSectionProps = {
  bundle: Content['bundle']
}

export function BundleSection({ bundle }: BundleSectionProps) {
  return (
    <section className="bg-secondary px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
          {bundle.sectionLabel}
        </p>
        <h2 className="mb-10 text-2xl font-medium leading-snug text-foreground">
          {bundle.headline}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {bundle.stages.map((stage) => (
            <div
              key={stage.number}
              className="rounded-lg border border-border/50 bg-background p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-medium"
                  style={{ background: '#AFA9EC', color: '#26215C' }}
                  aria-label={`Stage ${stage.number}`}
                >
                  {stage.number}
                </span>
                <h3 className="text-sm font-medium text-foreground">{stage.name}</h3>
              </div>
              <p className="mb-2.5 text-xs text-muted-foreground">{stage.timing}</p>
              <p className="text-xs leading-relaxed text-muted-foreground">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
