import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Schedule an inspection | HomeKey Inspections',
  description: 'Schedule a HomeKey inspection.',
  alternates: { canonical: '/schedule' },
}

export default function SchedulePage() {
  return (
    <main className="px-7 py-16">
      <div className="mx-auto max-w-2xl">
        <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
          Scheduling
        </p>
        <h1 className="mb-4 text-3xl font-medium text-foreground md:text-4xl">
          Schedule an inspection
        </h1>
        <p className="mb-8 text-base leading-relaxed text-muted-foreground">
          Online booking is coming soon. In the meantime, call or email and we’ll get you on the calendar fast.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="inline-flex h-9 items-center justify-center rounded-lg bg-brand-primary px-4 text-sm font-medium text-white hover:bg-brand-primaryDark transition-colors"
            href="tel:+15712813846"
          >
            Call (571) 281-3846
          </a>
          <a
            className="inline-flex h-9 items-center justify-center rounded-lg border border-border/60 bg-background px-4 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            href="mailto:info@homekeyinspections.com"
          >
            Email info@homekeyinspections.com
          </a>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Prefer to browse first?{' '}
          <Link className="text-brand-primary hover:underline underline-offset-4" href="/services">
            View services
          </Link>
          .
        </p>
      </div>
    </main>
  )
}

