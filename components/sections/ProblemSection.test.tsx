import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProblemSection } from './ProblemSection'
import { en } from '@/app/new-construction/_data/content'

describe('ProblemSection', () => {
  it('renders the section heading', () => {
    render(<ProblemSection problem={en.problem} />)
    expect(screen.getByText(en.problem.headline)).toBeInTheDocument()
  })

  it('renders the builder card title', () => {
    render(<ProblemSection problem={en.problem} />)
    expect(screen.getByText(en.problem.builderCard.title)).toBeInTheDocument()
  })

  it('renders the HomeKey card title', () => {
    render(<ProblemSection problem={en.problem} />)
    expect(screen.getByText(en.problem.homekeyCard.title)).toBeInTheDocument()
  })
})
