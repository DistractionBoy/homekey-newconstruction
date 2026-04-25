import type { Content } from '@/app/new-construction/_data/content'

type FooterProps = {
  footer: Content['footer']
}

export function Footer({ footer }: FooterProps) {
  return (
    <footer className="border-t border-border/50 px-7 py-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between text-xs text-muted-foreground">
        <span>{footer.copy}</span>
        <span>{footer.locations}</span>
      </div>
    </footer>
  )
}
