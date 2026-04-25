import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NavBar } from './NavBar'
import { en } from '@/app/new-construction/_data/content'

describe('NavBar', () => {
  it('renders the logo image', () => {
    render(<NavBar nav={en.nav} />)
    expect(screen.getByRole('img', { name: 'HomeKey Inspections' })).toBeInTheDocument()
  })

  it('renders the active nav link', () => {
    render(<NavBar nav={en.nav} />)
    const activeLinks = screen.getAllByText('New Construction')
    expect(activeLinks.length).toBeGreaterThan(0)
  })

  it('renders the language toggle', () => {
    render(<NavBar nav={en.nav} />)
    const toggle = screen.getAllByText('ES')
    expect(toggle.length).toBeGreaterThan(0)
  })

  it('renders the book inspection CTA', () => {
    render(<NavBar nav={en.nav} />)
    expect(screen.getByText('Book inspection')).toBeInTheDocument()
  })

  it('renders the hamburger menu button on mobile', () => {
    render(<NavBar nav={en.nav} />)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})
