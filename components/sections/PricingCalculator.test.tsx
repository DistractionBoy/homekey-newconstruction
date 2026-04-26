import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { PricingCalculator } from './PricingCalculator'
import { en } from '@/app/new-construction/_data/content'

// Default: 2800 sqft SFH, no military, no add-ons
// Pre-drywall (≤4500): $675 | Pre-settlement (2501-3000): $725 | Warranty: $375
// Repeat discounts: $50 × 2 = $100 | Total: $675 + $725 + $375 - $100 = $1,675

describe('PricingCalculator', () => {
  it('renders the default total', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    expect(screen.getByText('$1,675')).toBeInTheDocument()
  })

  it('renders the reserve CTA', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    expect(screen.getByRole('link', { name: /reserve this bundle/i })).toBeInTheDocument()
  })

  it('updates total when radon is checked (+$195)', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    const radonCheckbox = screen.getByRole('checkbox', { name: /radon/i })
    fireEvent.click(radonCheckbox)
    expect(screen.getByText('$1,870')).toBeInTheDocument()
  })

  it('updates total when sewer scope is checked (+$425)', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    const sewerCheckbox = screen.getByRole('checkbox', { name: /sewer/i })
    fireEvent.click(sewerCheckbox)
    expect(screen.getByText('$2,100')).toBeInTheDocument()
  })

  it('renders the bundle discounts amount', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    expect(screen.getByText('−$100')).toBeInTheDocument()
  })
})
