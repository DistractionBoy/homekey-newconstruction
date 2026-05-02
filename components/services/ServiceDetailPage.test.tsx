import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServiceDetailPage } from './ServiceDetailPage'
import type { ServiceData } from '@/app/services/_data/types'

const mockData: ServiceData = {
  slug: 'test-service',
  title: 'Test Service',
  subtitle: 'Test subtitle copy.',
  metaDescription: 'Test meta description.',
  whyImportant: ['First paragraph.', 'Second paragraph.'],
  whatWeInspect: [
    {
      heading: 'Category One',
      bullets: ['Bullet A', 'Bullet B'],
    },
  ],
  whatToExpect: [
    {
      step: 1,
      title: 'Step one title',
      description: 'Step one description.',
    },
    {
      step: 2,
      title: 'Step two title',
      description: 'Step two description.',
    },
  ],
  pricing: {
    rows: [
      { label: 'Small home', price: '$500' },
      { label: 'Large home', price: '$700', note: 'Over 3,000 sq ft' },
    ],
    note: 'Thermal imaging included.',
  },
  sampleReports: [
    { label: 'Sample report #1', href: 'https://example.com/report1' },
  ],
  testimonials: [
    {
      reviewer: 'Jane D.',
      text: 'Excellent inspector.',
      platform: 'Google',
    },
  ],
  relatedServices: [
    {
      title: 'Related Service',
      href: '/services/related',
      description: 'A related service description.',
    },
  ],
  faqs: [
    {
      question: 'Test question?',
      answer: 'Test answer.',
    },
  ],
}

describe('ServiceDetailPage', () => {
  it('renders the service title', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getAllByText('Test Service').length).toBeGreaterThan(0)
  })

  it('renders the subtitle', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Test subtitle copy.')).toBeInTheDocument()
  })

  it('renders whyImportant paragraphs', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('First paragraph.')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph.')).toBeInTheDocument()
  })

  it('renders whatWeInspect category', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Category One')).toBeInTheDocument()
  })

  it('renders whatToExpect steps', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Step one title')).toBeInTheDocument()
    expect(screen.getByText('Step two title')).toBeInTheDocument()
  })

  it('renders pricing rows', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Small home')).toBeInTheDocument()
    expect(screen.getByText('$500')).toBeInTheDocument()
    expect(screen.getByText('$700')).toBeInTheDocument()
  })

  it('renders pricing note', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Thermal imaging included.')).toBeInTheDocument()
  })

  it('renders sample report links', () => {
    render(<ServiceDetailPage data={mockData} />)
    const link = screen.getByText('Sample report #1')
    expect(link.closest('a')).toHaveAttribute('href', 'https://example.com/report1')
  })

  it('renders testimonials', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Jane D.')).toBeInTheDocument()
  })

  it('renders related service links', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Related Service')).toBeInTheDocument()
  })

  it('renders FAQ question', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getByText('Test question?')).toBeInTheDocument()
  })

  it('renders schedule CTA buttons', () => {
    render(<ServiceDetailPage data={mockData} />)
    expect(screen.getAllByText(/Schedule an inspection/i).length).toBeGreaterThan(0)
  })
})
