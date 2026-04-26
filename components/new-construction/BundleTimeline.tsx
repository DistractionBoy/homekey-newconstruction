import { Hammer, KeyRound, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

type StageData = {
  number: string
  timingLabel: string
  icon: LucideIcon
  title: string
  description: string
  tint: string
  accentColor: string
  learnMoreHref: string
}

const STAGES: StageData[] = [
  {
    number: '1',
    timingLabel: 'Week 8–12 of build',
    icon: Hammer,
    title: 'Pre-Drywall Inspection',
    description:
      'Framing, plumbing, electrical, and HVAC rough-in defects caught before drywall seals them in forever.',
    tint: 'bg-purple-50 border border-purple-100',
    accentColor: 'text-purple-600',
    learnMoreHref: '#bundle',
  },
  {
    number: '2',
    timingLabel: 'Days before closing',
    icon: KeyRound,
    title: 'Pre-Settlement Inspection',
    description:
      'Full inspection with thermal imaging and ISO-lab mold testing. Findings become your punch list before closing.',
    tint: 'bg-blue-50 border border-blue-100',
    accentColor: 'text-blue-600',
    learnMoreHref: '#bundle',
  },
  {
    number: '3',
    timingLabel: '11 months in',
    icon: ShieldCheck,
    title: '11-Month Warranty Inspection',
    description:
      'Catch settling defects and systems failures while the builder is still obligated to fix them.',
    tint: 'bg-emerald-50 border border-emerald-100',
    accentColor: 'text-emerald-600',
    learnMoreHref: '#bundle',
  },
]

const STATS = [
  { value: 3, suffix: undefined as string | undefined, label: 'inspections' },
  { value: 1, suffix: undefined as string | undefined, label: 'inspector' },
  { value: 100, suffix: '%', label: 'advocacy' },
]

const DOT_PATTERN = {
  backgroundImage:
    'radial-gradient(circle, rgb(168 162 236 / 0.15) 1px, transparent 1px)',
  backgroundSize: '24px 24px',
}

export function BundleTimeline() {
  return (
    <section
      className="px-7 py-16 md:py-24"
      style={DOT_PATTERN}
    >
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <p className="mb-2 text-xs uppercase tracking-widest text-brand-primary">
          The bundle
        </p>
        <h2 className="mb-12 text-2xl font-medium leading-snug text-foreground md:text-3xl">
          Three inspections. One inspector. Continuous defense.
        </h2>

        {/* Desktop timeline (lg+) */}
        <div className="hidden lg:block">
          {/* Timing labels row */}
          <div className="grid grid-cols-3 mb-2">
            {STAGES.map((stage) => (
              <p
                key={stage.number}
                className="text-center text-sm text-muted-foreground"
              >
                {stage.timingLabel}
              </p>
            ))}
          </div>

          {/* Nodes + connecting bar */}
          <div className="relative flex items-center justify-between px-[16.6%] mb-6">
            {/* Gradient bar behind nodes */}
            <div
              className="absolute inset-y-1/2 left-[16.6%] right-[16.6%] h-0.5 -translate-y-1/2 bg-gradient-to-r from-orange-400 to-orange-600"
              aria-hidden="true"
            />
            {STAGES.map((stage) => (
              <div
                key={stage.number}
                className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#f97316] text-sm font-bold text-white shadow-md"
                aria-label={`Stage ${stage.number}`}
              >
                {stage.number}
              </div>
            ))}
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-3 gap-6">
            {STAGES.map((stage) => {
              const Icon = stage.icon
              return (
                <div
                  key={stage.title}
                  className={[
                    'rounded-xl p-5 transition-all duration-200',
                    'hover:-translate-y-1 hover:shadow-lg',
                    stage.tint,
                  ].join(' ')}
                >
                  <Icon
                    size={20}
                    className={`mb-3 ${stage.accentColor}`}
                    aria-hidden="true"
                  />
                  <h3 className="mb-1 font-semibold text-foreground">
                    {stage.title}
                  </h3>
                  <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                    {stage.description}
                  </p>
                  <a
                    href={stage.learnMoreHref}
                    className={`text-xs font-medium ${stage.accentColor}`}
                  >
                    Learn more →
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mobile timeline (below lg) */}
        <div className="flex flex-col gap-0 lg:hidden">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon
            return (
              <div key={stage.title}>
                <div className="flex gap-4">
                  {/* Left column: node + dotted connector */}
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-xs font-bold text-white shadow-md"
                      aria-label={`Stage ${stage.number}`}
                    >
                      {stage.number}
                    </div>
                    {index < STAGES.length - 1 && (
                      <div className="mt-1 h-full w-px border-l-2 border-dashed border-orange-200 min-h-[2rem]" />
                    )}
                  </div>

                  {/* Right column: timing + card */}
                  <div className="flex-1 pb-6">
                    <p className="mb-2 text-sm text-muted-foreground">
                      {stage.timingLabel}
                    </p>
                    <div
                      className={[
                        'rounded-xl p-5 transition-all duration-200',
                        'hover:-translate-y-1 hover:shadow-lg',
                        stage.tint,
                      ].join(' ')}
                    >
                      <Icon
                        size={20}
                        className={`mb-3 ${stage.accentColor}`}
                        aria-hidden="true"
                      />
                      <h3 className="mb-1 font-semibold text-foreground">
                        {stage.title}
                      </h3>
                      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                        {stage.description}
                      </p>
                      <a
                        href={stage.learnMoreHref}
                        className={`text-xs font-medium ${stage.accentColor}`}
                      >
                        Learn more →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stat strip */}
        <div data-testid="stat-strip" className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-slate-200/60 pt-8 md:gap-16">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-foreground md:text-4xl">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
