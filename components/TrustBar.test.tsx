import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrustBar } from './TrustBar'
import { en } from '@/app/new-construction/_data/content'

describe('TrustBar', () => {
  it('renders all trust items', () => {
    render(<TrustBar items={en.trustBar} />)
    en.trustBar.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })
})
