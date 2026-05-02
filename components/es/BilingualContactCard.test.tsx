import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BilingualContactCard } from './BilingualContactCard'

describe('BilingualContactCard', () => {
  it('renders the heading', () => {
    render(<BilingualContactCard />)
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
  })

  it('renders the tel: link with correct number', () => {
    render(<BilingualContactCard />)
    const telLink = screen.getByRole('link', { name: /llamar/i })
    expect(telLink).toHaveAttribute('href', 'tel:+15712813846')
  })

  it('renders the WhatsApp link with correct number', () => {
    render(<BilingualContactCard />)
    const waLink = screen.getByRole('link', { name: /whatsapp/i })
    expect(waLink).toHaveAttribute('href', 'https://wa.me/15712813846')
  })

  it('renders both inspector avatars', () => {
    render(<BilingualContactCard />)
    expect(screen.getByAltText('Sebastian Aste')).toBeInTheDocument()
    expect(screen.getByAltText('Jay Carrillo')).toBeInTheDocument()
  })
})
