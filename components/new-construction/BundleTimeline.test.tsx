import { describe, it, expect, vi } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { BundleTimeline } from './BundleTimeline'

vi.mock('@/components/ui/AnimatedNumber', () => ({
  AnimatedNumber: ({ value, suffix }: { value: number; suffix?: string }) => (
    <span>{value}{suffix}</span>
  ),
}))

describe('BundleTimeline', () => {
  it('renders all 3 stage titles', () => {
    render(<BundleTimeline />)
    // Each title renders in both desktop and mobile layouts
    expect(screen.getAllByText('Pre-Drywall Inspection').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Pre-Settlement Inspection').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('11-Month Warranty Inspection').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 3 timing labels', () => {
    render(<BundleTimeline />)
    expect(screen.getAllByText('Week 8–12 of build').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Days before closing').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('11 months in').length).toBeGreaterThanOrEqual(1)
  })

  it('renders "Learn more" links for each stage', () => {
    render(<BundleTimeline />)
    const links = screen.getAllByRole('link', { name: /learn more/i })
    // 3 links per layout (desktop + mobile) = 6 total
    expect(links.length).toBeGreaterThanOrEqual(3)
  })

  it('renders stat strip values', () => {
    render(<BundleTimeline />)
    const strip = screen.getByTestId('stat-strip')
    expect(within(strip).getByText('3')).toBeInTheDocument()
    expect(within(strip).getByText('1')).toBeInTheDocument()
    expect(within(strip).getByText('100%')).toBeInTheDocument()
    expect(within(strip).getByText('inspections')).toBeInTheDocument()
    expect(within(strip).getByText('inspector')).toBeInTheDocument()
    expect(within(strip).getByText('advocacy')).toBeInTheDocument()
  })
})
