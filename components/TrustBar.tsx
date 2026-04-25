import type { Content } from '@/app/new-construction/_data/content'

type TrustBarProps = {
  items: Content['trustBar']
}

export function TrustBar({ items }: TrustBarProps) {
  return (
    <div className="border-y border-border/50 bg-secondary px-7 py-4">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-around gap-x-6 gap-y-2 text-center text-xs text-muted-foreground">
        {items.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
