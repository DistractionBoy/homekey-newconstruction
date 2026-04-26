const PALETTE = [
  'bg-orange-500',
  'bg-blue-600',
  'bg-emerald-600',
  'bg-purple-600',
  'bg-rose-600',
]

function deterministicColor(name: string): string {
  const sum = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  return PALETTE[sum % PALETTE.length]
}

function initials(name: string): string {
  const words = name
    .replace(/\./g, '')
    .trim()
    .split(/\s+/)
    .filter(Boolean)
  if (words.length === 0) return '?'
  const first = words[0][0].toUpperCase()
  const second = words[1] ? words[1][0].toUpperCase() : ''
  return first + second
}

type ReviewerAvatarProps = {
  name: string
  color?: string
}

export function ReviewerAvatar({ name, color }: ReviewerAvatarProps) {
  const bg = color ?? deterministicColor(name)
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bg} font-semibold text-sm text-white`}
      aria-label={name}
    >
      {initials(name)}
    </div>
  )
}
