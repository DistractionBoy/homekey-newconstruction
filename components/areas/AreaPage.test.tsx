import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AreaPage } from './AreaPage'
import type { County, Community } from '@/app/areas/_data/types'

const mockCounty: County = {
  name: 'Test County',
  slug: 'test-county',
  state: 'VA',
  metaDescription: 'Test meta.',
  description: ['County paragraph one.', 'County paragraph two.'],
  housingStock: '1970s–present',
  commonFindings: ['Finding one', 'Finding two'],
  inspectorCoverage: ['Ian McNaught'],
  testimonials: [
    { reviewer: 'Jane D.', text: 'Great inspection.', platform: 'Google' },
  ],
  communities: [
    {
      name: 'Test Community',
      slug: 'test-community',
      countySlug: 'test-county',
      countyName: 'Test County',
      description: ['Community paragraph.'],
      builders: ['Toll Brothers'],
      whyHomeKey: ['ASHI certified'],
      metaDescription: 'Community meta.',
    },
  ],
}

const mockCommunity: Community = {
  name: 'Brambleton',
  slug: 'brambleton',
  countySlug: 'loudoun-county',
  countyName: 'Loudoun County',
  metaDescription: 'Community meta.',
  description: ['Community description paragraph.'],
  builders: ['Toll Brothers', 'Pulte Homes'],
  whyHomeKey: ['ASHI certified inspectors', 'Thermal imaging included'],
}

describe('AreaPage — county variant', () => {
  it('renders county h1', () => {
    render(<AreaPage type="county" data={mockCounty} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home Inspections in Test County, VA')
  })

  it('renders description paragraphs', () => {
    render(<AreaPage type="county" data={mockCounty} />)
    expect(screen.getByText('County paragraph one.')).toBeInTheDocument()
  })

  it('renders common findings', () => {
    render(<AreaPage type="county" data={mockCounty} />)
    expect(screen.getByText('Finding one')).toBeInTheDocument()
  })

  it('renders community cards grid', () => {
    render(<AreaPage type="county" data={mockCounty} />)
    expect(screen.getByText('Test Community')).toBeInTheDocument()
  })

  it('community card links to correct url', () => {
    render(<AreaPage type="county" data={mockCounty} />)
    const link = screen.getByText('Test Community').closest('a')
    expect(link).toHaveAttribute('href', '/areas/test-county/test-community')
  })

  it('renders testimonials', () => {
    render(<AreaPage type="county" data={mockCounty} />)
    expect(screen.getByText('Jane D.')).toBeInTheDocument()
  })

  it('schedule CTA pre-fills county slug', () => {
    render(<AreaPage type="county" data={mockCounty} />)
    const scheduleLink = document.querySelector('a[href*="schedule?area=test-county"]')
    expect(scheduleLink).toBeTruthy()
  })
})

describe('AreaPage — community variant', () => {
  it('renders community h1', () => {
    render(<AreaPage type="community" data={mockCommunity} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Home Inspections in Brambleton')
  })

  it('renders description paragraph', () => {
    render(<AreaPage type="community" data={mockCommunity} />)
    expect(screen.getByText('Community description paragraph.')).toBeInTheDocument()
  })

  it('renders builders list', () => {
    render(<AreaPage type="community" data={mockCommunity} />)
    expect(screen.getByText('Toll Brothers')).toBeInTheDocument()
    expect(screen.getByText('Pulte Homes')).toBeInTheDocument()
  })

  it('renders why HomeKey bullets', () => {
    render(<AreaPage type="community" data={mockCommunity} />)
    expect(screen.getByText('ASHI certified inspectors')).toBeInTheDocument()
  })

  it('renders breadcrumb with county link', () => {
    render(<AreaPage type="community" data={mockCommunity} />)
    expect(screen.getAllByText('Loudoun County').length).toBeGreaterThan(0)
  })

  it('schedule CTA pre-fills community slug', () => {
    render(<AreaPage type="community" data={mockCommunity} />)
    const scheduleLink = document.querySelector('a[href*="schedule?area=brambleton"]')
    expect(scheduleLink).toBeTruthy()
  })

  it('back link points to parent county', () => {
    render(<AreaPage type="community" data={mockCommunity} />)
    const backLink = document.querySelector('a[href="/areas/loudoun-county"]')
    expect(backLink).toBeTruthy()
  })
})
