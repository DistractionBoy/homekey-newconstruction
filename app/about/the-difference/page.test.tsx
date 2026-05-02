import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TheDifferencePage from './page'

describe('TheDifferencePage', () => {
  it('renders the h1', () => {
    render(<TheDifferencePage />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the 4 section labels', () => {
    render(<TheDifferencePage />)
    expect(screen.getByText(/01 — Training/i)).toBeInTheDocument()
    expect(screen.getByText(/02 — Equipment/i)).toBeInTheDocument()
    expect(screen.getByText(/03 — Time on site/i)).toBeInTheDocument()
    expect(screen.getByText(/04 — Who we work for/i)).toBeInTheDocument()
  })
})
