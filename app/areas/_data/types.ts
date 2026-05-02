export type AreaTestimonial = {
  reviewer: string
  text: string
  platform?: string
}

export type Community = {
  name: string
  slug: string
  countySlug: string
  countyName: string
  description: string[]
  builders: string[]
  whyHomeKey: string[]
  metaDescription: string
}

export type County = {
  name: string
  slug: string
  state: string
  description: string[]
  housingStock: string
  commonFindings: string[]
  inspectorCoverage: string[]
  testimonials: AreaTestimonial[]
  communities: Community[]
  metaDescription: string
}
