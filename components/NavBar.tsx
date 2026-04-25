'use client'

import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import type { Content } from '@/app/new-construction/_data/content'

type NavBarProps = {
  nav: Content['nav']
}

export function NavBar({ nav }: NavBarProps) {
  return (
    <header className="border-b border-border/50 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-3.5">
        {/* Logo */}
        <Link href="/" className="text-sm font-medium">
          {nav.logo}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'text-sm font-medium text-foreground'
                  : 'text-sm text-muted-foreground hover:text-foreground transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right side */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={nav.langToggle.href}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {nav.langToggle.label}
          </Link>
          <Button size="sm" render={<Link href="#" />}>
            {nav.cta}
          </Button>
        </div>

        {/* Mobile right side */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href={nav.langToggle.href}
            className="text-xs text-muted-foreground"
          >
            {nav.langToggle.label}
          </Link>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon-sm" aria-label="Open menu" />
              }
            >
              <Menu className="h-4 w-4" />
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>{nav.logo}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 p-4">
                {nav.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={
                      link.active
                        ? 'text-sm font-medium text-foreground'
                        : 'text-sm text-muted-foreground'
                    }
                  >
                    {link.label}
                  </Link>
                ))}
                <Button size="sm" className="mt-2" render={<Link href="#" />}>
                  {nav.cta}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
