import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { PricingCalculator } from './PricingCalculator'
import { en } from '@/app/new-construction/_data/content'

describe('PricingCalculator', () => {
  it('renders the default total of $1,105', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    expect(screen.getByText('$1,105')).toBeInTheDocument()
  })

  it('renders the reserve CTA', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    expect(screen.getByRole('link', { name: /reserve this bundle/i })).toBeInTheDocument()
  })

  it('updates total when radon is checked', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    const radonCheckbox = screen.getByRole('checkbox', { name: /radon/i })
    fireEvent.click(radonCheckbox)
    expect(screen.getByText('$1,255')).toBeInTheDocument()
  })

  it('updates total when sewer scope is checked', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    const sewerCheckbox = screen.getByRole('checkbox', { name: /sewer/i })
    fireEvent.click(sewerCheckbox)
    expect(screen.getByText('$1,305')).toBeInTheDocument()
  })

  it('renders the bundle discount', () => {
    render(<PricingCalculator pricing={en.pricing} />)
    expect(screen.getByText('−$195')).toBeInTheDocument()
  })
})
