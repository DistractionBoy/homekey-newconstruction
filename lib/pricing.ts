export type AddOnId = 'radon' | 'sewer'

export interface PricingInput {
  sqft: number
  addOns: AddOnId[]
}

export interface BundlePrice {
  preDrywall: number
  preSettlement: number
  warranty: number
  addOns: number
  subtotal: number
  discount: number
  total: number
}

const ADDON_PRICES: Record<AddOnId, number> = {
  radon: 150,
  sewer: 200,
}

const BUNDLE_DISCOUNT_RATE = 0.15

function sqftMultiplier(sqft: number): number {
  if (sqft <= 1500) return 0.85
  if (sqft <= 2000) return 0.92
  if (sqft <= 2500) return 0.96
  if (sqft <= 3000) return 1.0
  if (sqft <= 3500) return 1.07
  if (sqft <= 4000) return 1.14
  return 1.22
}

export function calculateBundlePrice({ sqft, addOns }: PricingInput): BundlePrice {
  const m = sqftMultiplier(sqft)

  const preDrywall = Math.round(350 * m)
  const preSettlement = Math.round(525 * m)
  const warranty = Math.round(425 * m)
  const addOnsTotal = addOns.reduce((sum, id) => sum + ADDON_PRICES[id], 0)

  const inspectionSubtotal = preDrywall + preSettlement + warranty
  const discount = Math.round(inspectionSubtotal * BUNDLE_DISCOUNT_RATE)
  const total = inspectionSubtotal - discount + addOnsTotal

  return {
    preDrywall,
    preSettlement,
    warranty,
    addOns: addOnsTotal,
    subtotal: inspectionSubtotal,
    discount,
    total,
  }
}
