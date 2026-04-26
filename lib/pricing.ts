export type HomeType = 'sfh' | 'condo'
export type AddOnId = 'radon' | 'sewer' | 'mold' | 'infrared'

export interface PricingInput {
  sqft: number
  homeType: HomeType
  isMilitary: boolean
  addOns: AddOnId[]
}

export interface AddOnBreakdown {
  id: AddOnId
  price: number
}

export interface BundleBreakdown {
  preDrywall: number
  preSettlement: number
  warrantyInspection: number
  repeatDiscountPreSettlement: number
  repeatDiscountWarranty: number
  militaryDiscount: number
  addOnsBreakdown: AddOnBreakdown[]
  addOnsTotal: number
  discountTotal: number
  total: number
}

export const ADDON_PRICES: Record<AddOnId, number> = {
  radon: 195,
  sewer: 425,
  mold: 425,
  infrared: 175,
}

const REINSPECTION_PRICE = 375
const MILITARY_DISCOUNT = 25

function sfhPrice(sqft: number): number {
  if (sqft <= 2500) return 675
  if (sqft <= 3000) return 725
  if (sqft <= 3500) return 775
  if (sqft <= 4000) return 850
  if (sqft <= 4500) return 925
  if (sqft <= 5000) return 1000
  if (sqft <= 5500) return 1075
  if (sqft <= 6000) return 1150
  if (sqft <= 6500) return 1250
  if (sqft <= 7000) return 1350
  if (sqft <= 7500) return 1450
  if (sqft <= 8000) return 1550
  if (sqft <= 8500) return 1650
  if (sqft <= 9000) return 1800
  if (sqft <= 9500) return 1950
  if (sqft <= 10000) return 2100
  if (sqft <= 10500) return 2250
  if (sqft <= 11000) return 2400
  if (sqft <= 11500) return 2550
  if (sqft <= 12000) return 2700
  return 2850
}

function condoPrice(sqft: number): number {
  if (sqft <= 1500) return 500
  if (sqft <= 2000) return 550
  if (sqft <= 2500) return 600
  if (sqft <= 3000) return 650
  if (sqft <= 3500) return 700
  if (sqft <= 4000) return 750
  if (sqft <= 4500) return 800
  if (sqft <= 5000) return 850
  if (sqft <= 5500) return 900
  if (sqft <= 6000) return 950
  return 1000
}

function preDrywallPrice(sqft: number, homeType: HomeType): number {
  if (homeType === 'condo') {
    if (sqft <= 1500) return 500
    return 575
  }
  if (sqft <= 4500) return 675
  if (sqft <= 6500) return 775
  if (sqft <= 7000) return 875
  if (sqft <= 7500) return 975
  return 1075
}

export function calculateBundlePrice({
  sqft,
  homeType,
  isMilitary,
  addOns,
}: PricingInput): BundleBreakdown {
  const preDrywall = preDrywallPrice(sqft, homeType)
  const preSettlement = homeType === 'sfh' ? sfhPrice(sqft) : condoPrice(sqft)
  const warrantyInspection = REINSPECTION_PRICE
  const repeatDisc = homeType === 'sfh' ? 50 : 25
  const militaryDiscount = isMilitary ? MILITARY_DISCOUNT : 0

  const addOnsBreakdown = addOns.map((id) => ({ id, price: ADDON_PRICES[id] }))
  const addOnsTotal = addOnsBreakdown.reduce((sum, a) => sum + a.price, 0)

  const discountTotal = repeatDisc + repeatDisc + militaryDiscount
  const total = preDrywall + preSettlement + warrantyInspection - discountTotal + addOnsTotal

  return {
    preDrywall,
    preSettlement,
    warrantyInspection,
    repeatDiscountPreSettlement: repeatDisc,
    repeatDiscountWarranty: repeatDisc,
    militaryDiscount,
    addOnsBreakdown,
    addOnsTotal,
    discountTotal,
    total,
  }
}
