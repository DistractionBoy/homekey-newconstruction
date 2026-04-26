import Image from 'next/image'
import { AlertTriangle, BadgeCheck, X, Check } from 'lucide-react'
import type { Content } from '@/app/new-construction/_data/content'

type ProblemSectionProps = {
  problem: Content['problem']
}

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section className="relative overflow-hidden bg-background px-7 py-16">
      {/* Atmospheric background layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/unfinished-home-dusk.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-brand-primary">
          {problem.sectionLabel}
        </p>
        <h2 className="mb-8 max-w-xl text-2xl font-medium leading-snug text-foreground">
          {problem.headline}
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Builder card */}
          <div className="rounded-lg border border-rose-200 bg-rose-50/80 p-5 transition hover:opacity-90">
            <AlertTriangle
              data-testid="builder-card-icon"
              size={20}
              className="mb-3 text-amber-500"
              aria-hidden="true"
            />
            <h3 className="mb-3 text-sm font-medium text-[#791F1F]">
              {problem.builderCard.title}
            </h3>
            <ul className="space-y-1.5">
              {problem.builderCard.points.map((point) => (
                <li key={point} className="flex items-start gap-1.5 text-xs leading-relaxed text-[#501313]">
                  <X size={12} className="mt-0.5 shrink-0 text-rose-500" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* vs. divider — desktop only */}
          <div className="hidden items-center md:flex">
            <span className="text-xl font-bold text-slate-400">vs.</span>
          </div>

          {/* HomeKey card */}
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/80 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <BadgeCheck
              data-testid="homekey-card-icon"
              size={20}
              className="mb-3 text-emerald-500"
              aria-hidden="true"
            />
            <h3 className="mb-3 text-sm font-medium text-[#085041]">
              {problem.homekeyCard.title}
            </h3>
            <ul className="space-y-1.5">
              {problem.homekeyCard.points.map((point) => (
                <li key={point} className="flex items-start gap-1.5 text-xs leading-relaxed text-[#04342C]">
                  <Check size={12} className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
