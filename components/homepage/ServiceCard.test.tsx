import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceCard } from './ServiceCard'

const defaultProps = {
  icon: <span data-testid="icon" />,
  title: 'Home Inspection',
  description: 'A thorough inspection of your home.',
  href: '/services/home-inspection',
}

describe('ServiceCard', () => {
  it('renders title and description', () => {
    render(<ServiceCard {...defaultProps} />)
    expect(screen.getByText('Home Inspection')).toBeInTheDocument()
    expect(screen.getByText('A thorough inspection of your home.')).toBeInTheDocument()
  })

  it('links to the correct href', () => {
    render(<ServiceCard {...defaultProps} />)
    expect(screen.getByRole('link')).toHaveAttribute('href', '/services/home-inspection')
  })

  it('renders badge when provided', () => {
    render(<ServiceCard {...defaultProps} badge="Most popular" />)
    expect(screen.getByText('Most popular')).toBeInTheDocument()
  })

  it('does not render badge when not provided', () => {
    render(<ServiceCard {...defaultProps} />)
    expect(screen.queryByText('Most popular')).not.toBeInTheDocument()
  })
})
