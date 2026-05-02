import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InspectorPage } from './InspectorPage'
import type { Inspector } from '@/app/inspectors/_data/inspectors'

const mockInspector: Inspector = {
  id: 'test-inspector',
  slug: 'test-inspector',
  name: 'Test Inspector',
  title: 'ASHI Certified Inspector',
  photo: '/images/inspectors/test.jpg',
  primaryCounty: 'Fairfax County',
  certifications: ['ASHI Certified Inspector (ACI)', 'Virginia Licensed Home Inspector'],
  bio: ['First bio paragraph.', 'Second bio paragraph.'],
  areasServed: ['Fairfax County', 'Loudoun County'],
  specialties: ['Thermal imaging', 'New construction'],
  testimonials: [
    { reviewer: 'Jane D.', text: 'Great inspector.', platform: 'Google' },
  ],
}

const mockOfficeStaff: Inspector = {
  id: 'office-staff',
  slug: 'office-staff',
  name: 'Office Person',
  title: 'Office Manager',
  photo: '/images/inspectors/office.jpg',
  certifications: [],
  bio: ['Office bio paragraph.'],
  areasServed: ['Sterling, VA (Office)'],
  specialties: ['Client communications'],
  testimonials: [],
}

describe('InspectorPage', () => {
  it('renders inspector name in hero', () => {
    render(<InspectorPage inspector={mockInspector} />)
    expect(screen.getAllByText('Test Inspector').length).toBeGreaterThan(0)
  })

  it('renders inspector title', () => {
    render(<InspectorPage inspector={mockInspector} />)
    expect(screen.getByText('ASHI Certified Inspector')).toBeInTheDocument()
  })

  it('renders certification badges', () => {
    render(<InspectorPage inspector={mockInspector} />)
    expect(screen.getByText('ASHI Certified Inspector (ACI)')).toBeInTheDocument()
    expect(screen.getByText('Virginia Licensed Home Inspector')).toBeInTheDocument()
  })

  it('renders bio paragraphs', () => {
    render(<InspectorPage inspector={mockInspector} />)
    expect(screen.getByText('First bio paragraph.')).toBeInTheDocument()
    expect(screen.getByText('Second bio paragraph.')).toBeInTheDocument()
  })

  it('renders areas served', () => {
    render(<InspectorPage inspector={mockInspector} />)
    expect(screen.getByText('Fairfax County')).toBeInTheDocument()
    expect(screen.getByText('Loudoun County')).toBeInTheDocument()
  })

  it('renders specialties', () => {
    render(<InspectorPage inspector={mockInspector} />)
    expect(screen.getByText('Thermal imaging')).toBeInTheDocument()
  })

  it('renders testimonials', () => {
    render(<InspectorPage inspector={mockInspector} />)
    expect(screen.getByText('Jane D.')).toBeInTheDocument()
  })

  it('BookWithMe CTA includes correct inspector slug query param', () => {
    render(<InspectorPage inspector={mockInspector} />)
    const bookLinks = document.querySelectorAll('a[href*="schedule?inspector=test-inspector"]')
    expect(bookLinks.length).toBeGreaterThan(0)
  })

  it('renders language badges when languages provided', () => {
    const bilingualInspector = { ...mockInspector, languages: ['English', 'Spanish'] }
    render(<InspectorPage inspector={bilingualInspector} />)
    expect(screen.getByText('English')).toBeInTheDocument()
    expect(screen.getByText('Spanish')).toBeInTheDocument()
  })

  it('does not render BookWithMe CTA for office staff', () => {
    render(<InspectorPage inspector={mockOfficeStaff} />)
    const scheduleLinks = document.querySelectorAll('a[href*="schedule?inspector="]')
    expect(scheduleLinks.length).toBe(0)
  })

  it('renders contact CTA for office staff', () => {
    render(<InspectorPage inspector={mockOfficeStaff} />)
    expect(screen.getByText('Get in touch')).toBeInTheDocument()
  })
})
