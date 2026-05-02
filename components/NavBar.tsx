'use client'

import Image from 'next/image'
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
export type NavData = {
  logo?: string
  links: { label: string; href: string; active?: boolean }[]
  langToggle: { label: string; href: string }
  cta: string
  ctaHref?: string
}

type NavBarProps = {
  nav: NavData
}

export function NavBar({ nav }: NavBarProps) {
  return (
    <header className="border-b border-border/50 bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-3.5">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/Main-logo-Registered.jpg"
            height={32}
            width={128}
            alt="HomeKey Inspections"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? 'text-base font-semibold text-foreground'
                  : 'text-base font-medium text-muted-foreground hover:text-foreground transition-colors'
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
          <Button size="lg" className="px-4 text-base" render={<Link href={nav.ctaHref ?? '#'} />}>
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
                        ? 'text-base font-semibold text-foreground'
                        : 'text-base font-medium text-muted-foreground'
                    }
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  size="lg"
                  className="mt-2 px-4 text-base"
                  render={<Link href={nav.ctaHref ?? '#'} />}
                >
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
