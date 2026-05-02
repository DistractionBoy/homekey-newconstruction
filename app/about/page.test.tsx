import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AboutPage from './page'

describe('AboutPage', () => {
  it('renders the h1', () => {
    render(<AboutPage />)
    expect(screen.getByRole('heading', { level: 1, name: /about homekey inspections/i })).toBeInTheDocument()
  })

  it('renders 4 principle cards', () => {
    render(<AboutPage />)
    expect(screen.getByText('Train deeper than the state requires')).toBeInTheDocument()
    expect(screen.getByText('Equip with the best tools')).toBeInTheDocument()
    expect(screen.getByText('Take the time the home deserves')).toBeInTheDocument()
    expect(screen.getByText('Work for the buyer, never the deal')).toBeInTheDocument()
  })

  it('renders the awards section', () => {
    render(<AboutPage />)
    expect(screen.getByText(/awards/i)).toBeInTheDocument()
  })

  it('renders links to sub-pages', () => {
    render(<AboutPage />)
    expect(screen.getByRole('link', { name: /what makes us different/i })).toBeInTheDocument()
  })
})
