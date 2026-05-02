export type PricingRow = {
  label: string
  price: string
  note?: string
}

export type ServiceTestimonial = {
  reviewer: string
  text: string
  platform?: string
}

export type RelatedService = {
  title: string
  href: string
  description: string
}

export type ServiceFAQ = {
  question: string
  answer: string
}

export type WhatWeInspectItem = {
  heading: string
  bullets: string[]
}

export type WhatToExpectStep = {
  step: number
  title: string
  description: string
}

export type SampleReport = {
  label: string
  href: string
}

export type ServiceData = {
  slug: string
  title: string
  subtitle: string
  metaDescription: string
  whyImportant: string[]
  whatWeInspect: WhatWeInspectItem[]
  whatToExpect: WhatToExpectStep[]
  pricing: {
    rows: PricingRow[]
    note?: string
  }
  sampleReports: SampleReport[]
  testimonials: ServiceTestimonial[]
  relatedServices: RelatedService[]
  faqs: ServiceFAQ[]
}
