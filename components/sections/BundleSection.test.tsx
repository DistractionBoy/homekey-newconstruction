import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BundleSection } from './BundleSection'
import { en } from '@/app/new-construction/_data/content'

describe('BundleSection', () => {
  it('renders all three stage cards', () => {
    render(<BundleSection bundle={en.bundle} />)
    en.bundle.stages.forEach((stage) => {
      expect(screen.getByText(stage.name)).toBeInTheDocument()
    })
  })

  it('renders stage number badges', () => {
    render(<BundleSection bundle={en.bundle} />)
    expect(screen.getByLabelText('Stage 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Stage 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Stage 3')).toBeInTheDocument()
  })

  it('renders the section headline', () => {
    render(<BundleSection bundle={en.bundle} />)
    expect(screen.getByText(en.bundle.headline)).toBeInTheDocument()
  })
})
