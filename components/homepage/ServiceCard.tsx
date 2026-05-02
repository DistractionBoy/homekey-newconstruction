import Link from 'next/link'
import type { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { ChevronRight } from 'lucide-react'

type ServiceCardProps = {
  icon: ReactNode
  title: string
  description: string
  href: string
  badge?: string
}

export function ServiceCard({ icon, title, description, href, badge }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 hover:border-brand-primary/40 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between">
        <div className="rounded-lg bg-secondary p-2.5 text-brand-primary">
          {icon}
        </div>
        {badge && (
          <Badge className="bg-[#E1F5EE] text-[#085041] hover:bg-[#E1F5EE] text-[10px] font-medium">
            {badge}
          </Badge>
        )}
      </div>
      <div>
        <h3 className="mb-1.5 text-base font-semibold text-foreground group-hover:text-brand-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="mt-auto flex items-center gap-1 text-xs font-medium text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <ChevronRight className="h-3.5 w-3.5" />
      </div>
    </Link>
  )
}
