import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'
import { en } from '@/app/new-construction/_data/content'

describe('HeroSection', () => {
  it('renders the badge', () => {
    render(<HeroSection hero={en.hero} />)
    expect(screen.getByText('For new-build buyers')).toBeInTheDocument()
  })

  it('renders the primary CTA', () => {
    render(<HeroSection hero={en.hero} />)
    expect(screen.getByRole('link', { name: /get bundle pricing/i })).toBeInTheDocument()
  })

  it('renders the secondary CTA', () => {
    render(<HeroSection hero={en.hero} />)
    expect(screen.getByRole('link', { name: /watch 90/i })).toBeInTheDocument()
  })

  it('renders all trust pills', () => {
    render(<HeroSection hero={en.hero} />)
    en.hero.trustPills.forEach((pill) => {
      expect(screen.getByText(pill)).toBeInTheDocument()
    })
  })
})
