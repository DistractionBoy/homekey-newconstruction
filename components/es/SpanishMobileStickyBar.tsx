'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'

export function SpanishMobileStickyBar() {
  const pathname = usePathname()
  if (!pathname?.startsWith('/es')) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:hidden">
      <a
        href="tel:+15712813846"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
      >
        <Phone className="h-4 w-4 text-brand-primary" />
        Llamar
      </a>
      <div className="w-px bg-border/50" />
      <a
        href="https://wa.me/15712813846"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
      >
        <MessageCircle className="h-4 w-4 text-brand-primary" />
        WhatsApp
      </a>
    </div>
  )
}
