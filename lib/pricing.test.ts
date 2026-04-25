import { describe, it, expect } from 'vitest'
import { calculateBundlePrice } from './pricing'

describe('calculateBundlePrice', () => {
  it('calculates default 2800 sqft with no add-ons', () => {
    const result = calculateBundlePrice({ sqft: 2800, addOns: [] })
    expect(result.preDrywall).toBe(350)
    expect(result.preSettlement).toBe(525)
    expect(result.warranty).toBe(425)
    expect(result.addOns).toBe(0)
    expect(result.subtotal).toBe(1300)
    expect(result.discount).toBe(195)
    expect(result.total).toBe(1105)
  })

  it('scales down for small homes (<=1500 sqft)', () => {
    const result = calculateBundlePrice({ sqft: 1200, addOns: [] })
    expect(result.preDrywall).toBeLessThan(350)
    expect(result.total).toBeLessThan(1105)
  })

  it('scales up for large homes (>4000 sqft)', () => {
    const result = calculateBundlePrice({ sqft: 4500, addOns: [] })
    expect(result.preDrywall).toBeGreaterThan(350)
    expect(result.total).toBeGreaterThan(1105)
  })

  it('adds radon cost after discount', () => {
    const base = calculateBundlePrice({ sqft: 2800, addOns: [] })
    const withRadon = calculateBundlePrice({ sqft: 2800, addOns: ['radon'] })
    expect(withRadon.addOns).toBe(150)
    expect(withRadon.total).toBe(base.total + 150)
  })

  it('adds sewer scope cost after discount', () => {
    const base = calculateBundlePrice({ sqft: 2800, addOns: [] })
    const withSewer = calculateBundlePrice({ sqft: 2800, addOns: ['sewer'] })
    expect(withSewer.addOns).toBe(200)
    expect(withSewer.total).toBe(base.total + 200)
  })

  it('adds combined add-ons after discount', () => {
    const base = calculateBundlePrice({ sqft: 2800, addOns: [] })
    const withBoth = calculateBundlePrice({ sqft: 2800, addOns: ['radon', 'sewer'] })
    expect(withBoth.addOns).toBe(350)
    expect(withBoth.total).toBe(base.total + 350)
  })

  it('applies 15% bundle discount to inspection subtotal', () => {
    const result = calculateBundlePrice({ sqft: 2800, addOns: [] })
    expect(result.discount).toBe(Math.round(result.subtotal * 0.15))
  })

  it('does not apply discount to add-ons', () => {
    const withRadon = calculateBundlePrice({ sqft: 2800, addOns: ['radon'] })
    const base = calculateBundlePrice({ sqft: 2800, addOns: [] })
    expect(withRadon.discount).toBe(base.discount)
  })
})
