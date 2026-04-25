import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FinalCTA } from './FinalCTA'
import { en } from '@/app/new-construction/_data/content'

describe('FinalCTA', () => {
  it('renders the headline', () => {
    render(<FinalCTA finalCta={en.finalCta} />)
    expect(screen.getByText(en.finalCta.headline)).toBeInTheDocument()
  })

  it('renders the CTA link', () => {
    render(<FinalCTA finalCta={en.finalCta} />)
    expect(screen.getByRole('link', { name: /reserve your bundle/i })).toBeInTheDocument()
  })
})
