import Image from 'next/image'
import Link from 'next/link'

const VA_COUNTIES = [
  { name: 'Loudoun County', slug: 'loudoun-county' },
  { name: 'Fairfax County', slug: 'fairfax-county' },
  { name: 'Prince William County', slug: 'prince-william-county' },
  { name: 'Fauquier County', slug: 'fauquier-county' },
  { name: 'Arlington County', slug: 'arlington-county' },
  { name: 'Stafford County', slug: 'stafford-county' },
]

const OTHER_AREAS = [
  { name: 'Montgomery County, MD', slug: 'montgomery-county-md' },
  { name: 'Washington, DC', slug: 'washington-dc' },
]

export function CoverageMap() {
  return (
    <section className="bg-secondary px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
          Where we work
        </p>
        <h2 className="mb-3 text-2xl font-medium text-foreground md:text-3xl">
          Coverage areas
        </h2>
        <p className="mb-10 max-w-xl text-base text-muted-foreground">
          Northern Virginia, Maryland, DC — and our Austin, Texas branch.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* NoVA map */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex flex-col gap-4 rounded-xl border border-border/50 bg-background p-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-primary" />
              <h3 className="text-sm font-semibold text-foreground">Northern Virginia</h3>
            </div>
            <div className="relative h-40 w-full">
              <Image
                src="/illustrations/nova-map.svg"
                alt="Map of Northern Virginia service area showing covered communities"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain"
              />
            </div>
            <ul className="space-y-1">
              {VA_COUNTIES.map((county) => (
                <li key={county.slug}>
                  <Link
                    href={`/areas/${county.slug}`}
                    className="text-xs text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {county.name} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* MD/DC */}
          <div className="flex flex-col gap-4 rounded-xl border border-border/50 bg-background p-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-trust" />
              <h3 className="text-sm font-semibold text-foreground">Maryland &amp; DC</h3>
            </div>
            <ul className="space-y-1">
              {OTHER_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-xs text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {area.name} →
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground">
              Serving the greater DMV area including all of Northern Virginia, suburban Maryland, and Washington, DC.
            </p>
          </div>

          {/* Texas */}
          <div className="flex flex-col gap-4 rounded-xl border border-border/50 bg-background p-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-growth" />
              <h3 className="text-sm font-semibold text-foreground">Austin, Texas</h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Our Texas branch serves the Austin metro — Williamson County, Travis County, and parts of Hays County. Principal inspector: Darren Melnar, TREC licensed.
            </p>
            <p className="text-xs font-medium text-foreground">
              Williamson · Travis · Hays counties
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
