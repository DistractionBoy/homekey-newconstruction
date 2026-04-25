import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CommunityGrid } from './CommunityGrid'
import { en } from '@/app/new-construction/_data/content'

describe('CommunityGrid', () => {
  it('renders all community links', () => {
    render(<CommunityGrid communities={en.communities} />)
    en.communities.items.forEach((name) => {
      expect(screen.getByRole('link', { name: new RegExp(name) })).toBeInTheDocument()
    })
  })

  it('renders the section headline', () => {
    render(<CommunityGrid communities={en.communities} />)
    expect(screen.getByText(en.communities.headline)).toBeInTheDocument()
  })
})
