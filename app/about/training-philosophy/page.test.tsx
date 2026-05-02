import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import TrainingPhilosophyPage from './page'

describe('TrainingPhilosophyPage', () => {
  it('renders the h1', () => {
    render(<TrainingPhilosophyPage />)
    expect(screen.getByRole('heading', { level: 1, name: /training philosophy/i })).toBeInTheDocument()
  })

  it('renders all 4 training phase labels', () => {
    render(<TrainingPhilosophyPage />)
    expect(screen.getByText('Months 1–2')).toBeInTheDocument()
    expect(screen.getByText('Months 3–4')).toBeInTheDocument()
    expect(screen.getByText('Months 5–6')).toBeInTheDocument()
    expect(screen.getByText('Months 7–8')).toBeInTheDocument()
  })
})
