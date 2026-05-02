import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomepageHero } from './HomepageHero'

describe('HomepageHero', () => {
  it('renders the h1 tagline', () => {
    render(<HomepageHero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The Key to Knowing More®'
    )
  })

  it('renders the primary schedule CTA', () => {
    render(<HomepageHero />)
    const cta = screen.getByRole('link', { name: /schedule an inspection/i })
    expect(cta).toBeInTheDocument()
    expect(cta).toHaveAttribute('href', '/schedule')
  })

  it('renders the secondary differentiator CTA', () => {
    render(<HomepageHero />)
    const cta = screen.getByRole('link', { name: /see what makes us different/i })
    expect(cta).toHaveAttribute('href', '#difference')
  })
})
