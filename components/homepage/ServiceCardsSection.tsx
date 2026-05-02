import {
  Home,
  HardHat,
  Microscope,
  Wind,
  Wrench,
  Thermometer,
} from 'lucide-react'
import { ServiceCard } from './ServiceCard'
import { SERVICE_CARDS } from '@/app/_data/homepage'

const ICON_MAP: Record<string, React.ReactNode> = {
  Home: <Home className="h-5 w-5" />,
  HardHat: <HardHat className="h-5 w-5" />,
  Microscope: <Microscope className="h-5 w-5" />,
  Wind: <Wind className="h-5 w-5" />,
  Wrench: <Wrench className="h-5 w-5" />,
  Thermometer: <Thermometer className="h-5 w-5" />,
}

export function ServiceCardsSection() {
  return (
    <section className="bg-background px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-primary">
          Our services
        </p>
        <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
          Every type of inspection, covered.
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CARDS.map((card) => (
            <ServiceCard
              key={card.title}
              icon={ICON_MAP[card.iconName]}
              title={card.title}
              description={card.description}
              href={card.href}
              badge={card.badge}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
