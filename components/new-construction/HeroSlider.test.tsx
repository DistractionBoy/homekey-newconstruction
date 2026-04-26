import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSlider } from './HeroSlider'

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

describe('HeroSlider', () => {
  it('renders without crashing', () => {
    render(<HeroSlider />)
    expect(document.body).toBeTruthy()
  })

  it('renders all 3 slide alt texts', () => {
    render(<HeroSlider />)
    expect(
      screen.getByAltText(
        'Independent inspector using thermal imaging camera during new home pre-drywall inspection'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByAltText(
        'New residential construction framing stage in Northern Virginia'
      )
    ).toBeInTheDocument()
    expect(
      screen.getByAltText(
        'New homeowner receiving keys after independent inspection-backed closing'
      )
    ).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(3)
  })

  it('renders custom slides when provided', () => {
    const customSlides = [
      { src: '/test.jpg', alt: 'Custom slide alt', caption: 'Custom caption' },
    ]
    render(<HeroSlider slides={customSlides} />)
    expect(screen.getByAltText('Custom slide alt')).toBeInTheDocument()
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(1)
  })
})
