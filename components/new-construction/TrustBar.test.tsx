import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TrustBar } from './TrustBar'

describe('TrustBar', () => {
  it('renders all 5 badge labels', () => {
    render(<TrustBar />)
    expect(screen.getByText('4.9/5')).toBeInTheDocument()
    expect(screen.getByText('ASHI ACI')).toBeInTheDocument()
    expect(screen.getByText('ISO/IEC 17025')).toBeInTheDocument()
    expect(screen.getByText('NoVA + DMV')).toBeInTheDocument()
    expect(screen.getByText('A+ BBB')).toBeInTheDocument()
  })

  it('renders all 5 badge sub-texts', () => {
    render(<TrustBar />)
    expect(screen.getByText('500+ reviews')).toBeInTheDocument()
    expect(screen.getByText('Certified')).toBeInTheDocument()
    expect(screen.getByText('Accredited lab')).toBeInTheDocument()
    expect(screen.getByText('Loudoun · Fairfax · Prince William')).toBeInTheDocument()
    expect(screen.getByText('Accredited business')).toBeInTheDocument()
  })

})
