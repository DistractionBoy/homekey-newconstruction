import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AnimatedNumber } from './AnimatedNumber'

vi.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: vi.fn(), inView: true }),
}))

vi.mock('framer-motion', () => ({
  useMotionValue: (initial: number) => initial,
  useTransform: (_mv: unknown, fn: (v: number) => number) => fn(42),
  animate: vi.fn(),
  motion: {
    span: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
  },
}))

describe('AnimatedNumber', () => {
  it('renders a numeric value', () => {
    render(<AnimatedNumber value={42} />)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })

  it('renders suffix when provided', () => {
    render(<AnimatedNumber value={100} suffix="%" />)
    expect(screen.getByText('%')).toBeInTheDocument()
  })
})
