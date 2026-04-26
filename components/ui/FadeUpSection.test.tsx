import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FadeUpSection } from './FadeUpSection'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, className }: { children: React.ReactNode; className?: string }) => (
      <div className={className}>{children}</div>
    ),
  },
}))

describe('FadeUpSection', () => {
  it('renders children', () => {
    render(
      <FadeUpSection>
        <p>Hello world</p>
      </FadeUpSection>
    )
    expect(screen.getByText('Hello world')).toBeInTheDocument()
  })

  it('renders wrapper element in DOM', () => {
    const { container } = render(
      <FadeUpSection>
        <span>content</span>
      </FadeUpSection>
    )
    expect(container.firstChild).toBeInTheDocument()
  })

  it('passes className to wrapper', () => {
    const { container } = render(
      <FadeUpSection className="my-class">
        <span>content</span>
      </FadeUpSection>
    )
    expect((container.firstChild as HTMLElement).className).toContain('my-class')
  })
})
