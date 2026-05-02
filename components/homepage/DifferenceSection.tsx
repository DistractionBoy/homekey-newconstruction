import { DIFFERENTIATORS } from '@/app/_data/homepage'

export function DifferenceSection() {
  return (
    <section id="difference" className="bg-secondary px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-trust">
          What sets HomeKey apart
        </p>
        <h2 className="mb-3 text-2xl font-medium text-foreground md:text-3xl">
          We charge more than other inspectors.
        </h2>
        <p className="mb-10 max-w-xl text-base text-muted-foreground">
          Here&apos;s why that&apos;s a good thing.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DIFFERENTIATORS.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-background p-6"
            >
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary text-sm font-semibold text-white">
                {i + 1}
              </div>
              <h3 className="mb-3 text-base font-semibold leading-snug text-foreground">
                {item.heading}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
