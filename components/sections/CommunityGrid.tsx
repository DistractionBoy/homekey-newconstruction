import Link from 'next/link'
import type { Content } from '@/app/new-construction/_data/content'

type CommunityGridProps = {
  communities: Content['communities']
}

function NovaMap() {
  return (
    <svg
      viewBox="0 0 200 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Map of Northern Virginia communities"
      className="mb-8 w-full max-w-xs opacity-80"
    >
      <path
        d="M15,20 L95,8 L165,22 L175,50 L168,90 L140,118 L95,128 L50,120 L20,95 L10,60 Z"
        stroke="#cbd5e1"
        strokeWidth="1.5"
        fill="#f8fafc"
      />
      <path d="M95,8 L95,128" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3"/>
      <path d="M10,65 L175,58" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 3"/>
      {/* Leesburg */}
      <circle cx="42" cy="28" r="5" fill="#f97316"/>
      <text x="42" y="20" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="system-ui">Leesburg</text>
      {/* Brambleton */}
      <circle cx="72" cy="55" r="5" fill="#f97316"/>
      <text x="72" y="47" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="system-ui">Brambleton</text>
      {/* Ashburn */}
      <circle cx="110" cy="35" r="5" fill="#f97316"/>
      <text x="110" y="27" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="system-ui">Ashburn</text>
      {/* Dulles South */}
      <circle cx="130" cy="60" r="5" fill="#f97316"/>
      <text x="148" y="64" textAnchor="start" fontSize="8" fill="#64748b" fontFamily="system-ui">Dulles S.</text>
      {/* Oak Hill */}
      <circle cx="148" cy="78" r="5" fill="#f97316"/>
      <text x="148" y="70" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="system-ui">Oak Hill</text>
      {/* Haymarket */}
      <circle cx="75" cy="100" r="5" fill="#f97316"/>
      <text x="75" y="92" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="system-ui">Haymarket</text>
      {/* Gainesville */}
      <circle cx="100" cy="88" r="5" fill="#f97316"/>
      <text x="100" y="80" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="system-ui">Gainesville</text>
      {/* Bristow */}
      <circle cx="115" cy="108" r="5" fill="#f97316"/>
      <text x="115" y="100" textAnchor="middle" fontSize="8" fill="#64748b" fontFamily="system-ui">Bristow</text>
    </svg>
  )
}

export function CommunityGrid({ communities }: CommunityGridProps) {
  return (
    <section className="bg-background px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-brand-primary">
          {communities.sectionLabel}
        </p>
        <h2 className="mb-6 text-xl font-medium text-foreground">{communities.headline}</h2>
        <NovaMap />
        <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
          {communities.items.map((name) => (
            <Link
              key={name}
              href="#"
              className="rounded-md bg-blue-50 px-3 py-2.5 text-xs text-blue-900 transition-colors hover:bg-brand-primary hover:text-white"
            >
              {name} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
