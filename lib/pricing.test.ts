import { describe, it, expect } from 'vitest'
import { calculateBundlePrice } from './pricing'

describe('calculateBundlePrice', () => {
  it('calculates 3125 sqft SFH bundle matching the documented example', () => {
    // Example from prices.md: $675 + ($775 - $50) + ($375 - $50) - $25 = $1700
    const result = calculateBundlePrice({
      sqft: 3125,
      homeType: 'sfh',
      isMilitary: true,
      addOns: [],
    })
    expect(result.preDrywall).toBe(675)
    expect(result.preSettlement).toBe(775)
    expect(result.warrantyInspection).toBe(375)
    expect(result.repeatDiscountPreSettlement).toBe(50)
    expect(result.repeatDiscountWarranty).toBe(50)
    expect(result.militaryDiscount).toBe(25)
    expect(result.total).toBe(1700)
  })

  it('uses condo pre-settlement table for condo home type', () => {
    const result = calculateBundlePrice({
      sqft: 1800,
      homeType: 'condo',
      isMilitary: false,
      addOns: [],
    })
    expect(result.preSettlement).toBe(550) // 1501-2000 condo
    expect(result.preDrywall).toBe(575)    // condo under 3000 (1800 > 1500)
    expect(result.repeatDiscountPreSettlement).toBe(25)
    expect(result.repeatDiscountWarranty).toBe(25)
    expect(result.militaryDiscount).toBe(0)
  })

  it('applies no military discount when isMilitary is false', () => {
    const result = calculateBundlePrice({
      sqft: 2800,
      homeType: 'sfh',
      isMilitary: false,
      addOns: [],
    })
    expect(result.militaryDiscount).toBe(0)
    expect(result.discountTotal).toBe(100) // 50 + 50
  })

  it('adds radon add-on to total', () => {
    const base = calculateBundlePrice({ sqft: 2800, homeType: 'sfh', isMilitary: false, addOns: [] })
    const withRadon = calculateBundlePrice({ sqft: 2800, homeType: 'sfh', isMilitary: false, addOns: ['radon'] })
    expect(withRadon.addOnsTotal).toBe(195)
    expect(withRadon.total).toBe(base.total + 195)
  })

  it('adds sewer scope to total', () => {
    const base = calculateBundlePrice({ sqft: 2800, homeType: 'sfh', isMilitary: false, addOns: [] })
    const withSewer = calculateBundlePrice({ sqft: 2800, homeType: 'sfh', isMilitary: false, addOns: ['sewer'] })
    expect(withSewer.addOnsTotal).toBe(425)
    expect(withSewer.total).toBe(base.total + 425)
  })

  it('combines multiple add-ons', () => {
    const base = calculateBundlePrice({ sqft: 2800, homeType: 'sfh', isMilitary: false, addOns: [] })
    const withBoth = calculateBundlePrice({ sqft: 2800, homeType: 'sfh', isMilitary: false, addOns: ['radon', 'sewer'] })
    expect(withBoth.addOnsTotal).toBe(620) // 195 + 425
    expect(withBoth.total).toBe(base.total + 620)
  })

  it('scales up for large SFH homes', () => {
    const small = calculateBundlePrice({ sqft: 2000, homeType: 'sfh', isMilitary: false, addOns: [] })
    const large = calculateBundlePrice({ sqft: 8000, homeType: 'sfh', isMilitary: false, addOns: [] })
    expect(large.preSettlement).toBeGreaterThan(small.preSettlement)
    expect(large.total).toBeGreaterThan(small.total)
  })
})
