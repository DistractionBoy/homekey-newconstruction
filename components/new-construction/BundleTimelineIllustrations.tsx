export type IllustrationProps = { className?: string }

export function FramingIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <polyline
        points="6,28 32,6 58,28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="12"
        y="28"
        width="40"
        height="30"
        rx="1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="32"
        y1="28"
        x2="32"
        y2="58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 2.5"
      />
      <line
        x1="12"
        y1="43"
        x2="52"
        y2="43"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 2.5"
      />
      <line
        x1="22"
        y1="28"
        x2="22"
        y2="58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 2.5"
      />
      <line
        x1="42"
        y1="28"
        x2="42"
        y2="58"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="3 2.5"
      />
    </svg>
  )
}

export function SettlementIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <polyline
        points="8,30 32,10 56,30"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="15"
        y="30"
        width="34"
        height="22"
        rx="1"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="26"
        y="40"
        width="12"
        height="12"
        rx="1"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="32" cy="46" r="1.5" fill="currentColor" />
      <circle cx="10" cy="54" r="4.5" stroke="currentColor" strokeWidth="2" />
      <line
        x1="14"
        y1="54"
        x2="26"
        y2="54"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="22"
        y1="54"
        x2="22"
        y2="57"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="25"
        y1="54"
        x2="25"
        y2="57"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function WarrantyIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
      <path
        d="M32 5 L54 15 L54 35 C54 48 43 57 32 61 C21 57 10 48 10 35 L10 15 Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,33 29,41 42,25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

