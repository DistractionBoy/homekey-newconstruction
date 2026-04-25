import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { en } from '@/app/new-construction/_data/content'

describe('Footer', () => {
  it('renders the copyright line', () => {
    render(<Footer footer={en.footer} />)
    expect(screen.getByText(en.footer.copy)).toBeInTheDocument()
  })

  it('renders the locations', () => {
    render(<Footer footer={en.footer} />)
    expect(screen.getByText(en.footer.locations)).toBeInTheDocument()
  })
})
