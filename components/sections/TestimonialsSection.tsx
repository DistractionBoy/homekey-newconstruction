import type { Content } from '@/app/new-construction/_data/content'

type TestimonialsSectionProps = {
  testimonials: Content['testimonials']
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="bg-secondary px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
          {testimonials.sectionLabel}
        </p>
        <blockquote className="mb-10 max-w-2xl text-2xl font-medium leading-snug text-foreground">
          {testimonials.pullQuote}
        </blockquote>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.items.map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-border/50 bg-background p-4"
            >
              <p className="mb-3 text-xs leading-relaxed text-foreground">{item.quote}</p>
              <p className="text-xs text-muted-foreground">{item.attribution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
