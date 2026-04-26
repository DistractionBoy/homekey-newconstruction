import {
  Star,
  ShieldCheck,
  Award,
  MapPin,
  BadgeCheck,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type BadgeItem = {
  icon: LucideIcon
  iconClassName: string
  wrapperClassName: string
  label: string
  subText: string
}

const BADGES: BadgeItem[] = [
  {
    icon: Star,
    iconClassName: 'fill-yellow-400 text-yellow-400',
    wrapperClassName: 'bg-yellow-50',
    label: '4.9/5',
    subText: '500+ reviews',
  },
  {
    icon: ShieldCheck,
    iconClassName: 'text-blue-600',
    wrapperClassName: 'bg-blue-50',
    label: 'ASHI ACI',
    subText: 'Certified',
  },
  {
    icon: Award,
    iconClassName: 'text-emerald-600',
    wrapperClassName: 'bg-emerald-50',
    label: 'ISO/IEC 17025',
    subText: 'Accredited lab',
  },
  {
    icon: MapPin,
    iconClassName: 'text-purple-600',
    wrapperClassName: 'bg-purple-50',
    label: 'NoVA + DMV',
    subText: 'Loudoun · Fairfax · Prince William',
  },
  {
    icon: BadgeCheck,
    iconClassName: 'text-amber-600',
    wrapperClassName: 'bg-amber-50',
    label: 'A+ BBB',
    subText: 'Accredited business',
  },
]

const LOGOS = [
  { src: '/logos/ashi.svg', alt: 'ASHI' },
  { src: '/logos/internachi.svg', alt: 'InterNACHI' },
  { src: '/logos/nrs.svg', alt: 'NRS' },
  { src: '/logos/bbb.svg', alt: 'BBB' },
  { src: '/logos/homegauge.svg', alt: 'HomeGauge' },
  { src: '/logos/ahit.svg', alt: 'AHIT' },
]

export function TrustBar() {
  return (
    <div className="border-y border-slate-200/60 bg-gradient-to-r from-slate-50 via-white to-slate-50 py-4 md:py-6">
      <div className="mx-auto max-w-6xl px-7">
        {/* Badge row */}
        <div className="grid grid-cols-2 gap-3 md:flex md:items-center md:justify-between md:gap-4">
          {BADGES.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.label}
                className={[
                  'flex items-center gap-2 rounded-lg px-3 py-2',
                  badge.wrapperClassName,
                ].join(' ')}
              >
                <Icon size={18} className={badge.iconClassName} aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold leading-tight text-foreground">
                    {badge.label}
                  </p>
                  <p className="text-xs leading-tight text-muted-foreground">
                    {badge.subText}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Jason: drop actual SVG files into public/logos/ to activate the logo strip */}
        <ul
          className="mt-4 flex items-center justify-center gap-6 md:gap-8"
          aria-label="Certification logos"
        >
          {LOGOS.map((logo) => (
            <li key={logo.src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                width={80}
                height={32}
                className="h-7 w-auto opacity-40 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 md:h-8"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
