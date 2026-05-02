import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ReviewerAvatar } from '@/components/ui/ReviewerAvatar'
import { FEATURED_INSPECTOR } from '@/app/_data/homepage'

export function InspectorSpotlight() {
  const inspector = FEATURED_INSPECTOR
  return (
    <section className="bg-background px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-growth">
          Meet our team
        </p>
        <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
          Inspector spotlight
        </h2>
        <div className="flex flex-col gap-6 rounded-xl border border-border/50 bg-secondary p-6 md:flex-row md:items-start md:gap-8">
          <div className="shrink-0">
            <ReviewerAvatar name={inspector.name} className="h-20 w-20 text-2xl" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold text-foreground">{inspector.name}</h3>
              <span className="text-sm text-muted-foreground">{inspector.title}</span>
            </div>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {inspector.certifications.map((cert) => (
                <Badge
                  key={cert}
                  className="bg-[#E1F5EE] text-[#085041] hover:bg-[#E1F5EE] text-[10px]"
                >
                  {cert}
                </Badge>
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {inspector.bio}
            </p>
            <p className="mb-4 text-xs text-muted-foreground">
              <span className="font-medium text-foreground">Areas served: </span>
              {inspector.areasServed.join(' · ')}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                nativeButton={false}
                size="sm"
                className="bg-brand-primary hover:bg-brand-primaryDark text-white hover:scale-[1.02] transition-all duration-200"
                render={<Link href={`/inspectors/${inspector.slug}`} />}
              >
                View full profile
              </Button>
              <Button
                nativeButton={false}
                variant="outline"
                size="sm"
                className="hover:scale-[1.02] transition-all duration-200"
                render={<Link href={`/schedule?inspector=${inspector.slug}`} />}
              >
                Book with {inspector.name.split(' ')[0]}
              </Button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          <Link href="/inspectors" className="underline underline-offset-4 hover:text-foreground transition-colors">
            Meet the full team →
          </Link>
        </p>
      </div>
    </section>
  )
}
