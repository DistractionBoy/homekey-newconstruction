import type { Content } from '@/app/new-construction/_data/content'

type ProblemSectionProps = {
  problem: Content['problem']
}

export function ProblemSection({ problem }: ProblemSectionProps) {
  return (
    <section className="bg-background px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
          {problem.sectionLabel}
        </p>
        <h2 className="mb-8 max-w-2xl text-2xl font-medium leading-snug text-foreground">
          {problem.headline}
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Builder card */}
          <div className="rounded-lg border border-border/50 bg-[#FCEBEB] p-5">
            <h3 className="mb-3 text-sm font-medium text-[#791F1F]">
              {problem.builderCard.title}
            </h3>
            <ul className="space-y-1.5">
              {problem.builderCard.points.map((point) => (
                <li key={point} className="text-xs leading-relaxed text-[#501313]">
                  • {point}
                </li>
              ))}
            </ul>
          </div>

          {/* HomeKey card */}
          <div className="rounded-lg border border-border/50 bg-[#E1F5EE] p-5">
            <h3 className="mb-3 text-sm font-medium text-[#085041]">
              {problem.homekeyCard.title}
            </h3>
            <ul className="space-y-1.5">
              {problem.homekeyCard.points.map((point) => (
                <li key={point} className="text-xs leading-relaxed text-[#04342C]">
                  • {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
