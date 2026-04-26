import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ReviewerAvatar } from './ReviewerAvatar'

describe('ReviewerAvatar', () => {
  it('renders correct initials for two-word name', () => {
    render(<ReviewerAvatar name="John Smith" />)
    expect(screen.getByText('JS')).toBeInTheDocument()
  })

  it('renders correct initials for name with period (initial style)', () => {
    render(<ReviewerAvatar name="M. Rodriguez" />)
    expect(screen.getByText('MR')).toBeInTheDocument()
  })

  it('renders single initial for single-word name', () => {
    render(<ReviewerAvatar name="Cher" />)
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('renders without crashing when no color prop provided', () => {
    render(<ReviewerAvatar name="Jane Doe" />)
    expect(screen.getByText('JD')).toBeInTheDocument()
  })

  it('accepts an explicit color prop', () => {
    const { container } = render(<ReviewerAvatar name="Alex Kim" color="bg-purple-500" />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
