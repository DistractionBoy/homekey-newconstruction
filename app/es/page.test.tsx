import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import SpanishHomePage from './page'

vi.mock('next/navigation', () => ({ usePathname: () => '/es' }))

describe('SpanishHomePage', () => {
  it('renders the h1 with Spanish hero copy', () => {
    render(<SpanishHomePage />)
    expect(
      screen.getByRole('heading', { level: 1, name: /inspección completa/i })
    ).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<SpanishHomePage />)
    expect(screen.getByText('Inspección de vivienda')).toBeInTheDocument()
    expect(screen.getByText('Prueba de radón')).toBeInTheDocument()
  })

  it('renders the bilingual contact card', () => {
    render(<SpanishHomePage />)
    const matches = screen.getAllByText(/hable directamente con un inspector/i)
    expect(matches.length).toBeGreaterThan(0)
  })

  it('renders WhatsApp link', () => {
    render(<SpanishHomePage />)
    const waLinks = screen.getAllByRole('link', { name: /whatsapp/i })
    expect(waLinks.length).toBeGreaterThan(0)
  })

  it('links to /es equivalents in nav', () => {
    render(<SpanishHomePage />)
    expect(screen.getByRole('link', { name: /nueva construcción/i })).toBeInTheDocument()
  })
})
