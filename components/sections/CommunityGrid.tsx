import Link from 'next/link'
import type { Content } from '@/app/new-construction/_data/content'

type CommunityGridProps = {
  communities: Content['communities']
}

export function CommunityGrid({ communities }: CommunityGridProps) {
  return (
    <section className="bg-background px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-brand-primary">
          {communities.sectionLabel}
        </p>
        <h2 className="mb-8 text-xl font-medium text-foreground">{communities.headline}</h2>
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {communities.items.map((name) => (
            <Link
              key={name}
              href="#"
              className="rounded-md bg-blue-50 px-3 py-2.5 text-xs text-blue-900 transition-colors hover:bg-brand-primary hover:text-white"
            >
              {name} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
