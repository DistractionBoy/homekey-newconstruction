import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import SatisfactionGuaranteePage from './page'

describe('SatisfactionGuaranteePage', () => {
  it('renders the h1', () => {
    render(<SatisfactionGuaranteePage />)
    expect(screen.getByRole('heading', { level: 1, name: /satisfaction guarantee/i })).toBeInTheDocument()
  })

  it('renders the 4 section labels', () => {
    render(<SatisfactionGuaranteePage />)
    expect(screen.getByText(/01 — What it covers/i)).toBeInTheDocument()
    expect(screen.getByText(/02 — How to invoke it/i)).toBeInTheDocument()
    expect(screen.getByText(/03 — Re-inspection policy/i)).toBeInTheDocument()
    expect(screen.getByText(/04 — What it does not cover/i)).toBeInTheDocument()
  })
})
