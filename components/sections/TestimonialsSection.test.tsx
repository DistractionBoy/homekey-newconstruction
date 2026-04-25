import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TestimonialsSection } from './TestimonialsSection'
import { en } from '@/app/new-construction/_data/content'

describe('TestimonialsSection', () => {
  it('renders all three testimonials', () => {
    render(<TestimonialsSection testimonials={en.testimonials} />)
    en.testimonials.items.forEach((item) => {
      expect(screen.getByText(item.attribution)).toBeInTheDocument()
    })
  })

  it('renders the Spanish testimonial on the EN route', () => {
    render(<TestimonialsSection testimonials={en.testimonials} />)
    expect(
      screen.getByText(/Mi inspector hablaba español/)
    ).toBeInTheDocument()
  })

  it('renders the pull quote', () => {
    render(<TestimonialsSection testimonials={en.testimonials} />)
    expect(screen.getByText(en.testimonials.pullQuote)).toBeInTheDocument()
  })
})
