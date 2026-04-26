export const pricingPageEn = {
  meta: {
    title: 'Pricing Schedule | HomeKey Inspections',
    description:
      'Full pricing schedule for HomeKey Inspections — single family homes, condominiums, pre-drywall, additional services, and available discounts.',
  },
  page: {
    eyebrow: 'Pricing',
    headline: 'Pricing Schedule',
    subtext: 'Transparent, upfront pricing for every type of inspection we offer.',
    backLabel: 'Back to New Construction',
    backHref: '/new-construction',
    note: 'Square footage includes all finished and unfinished spaces (basements, utility rooms, etc.). Repeat discounts are only valid on full home inspections within the last 12 months for clients intending to live in the property — does not apply to investors or properties purchased for profit.',
    pricingNotice: 'Prices are subject to change without notice.',
    bookCta: 'Book an inspection →',
  },
  sections: {
    sfh: 'Single Family & Townhouse',
    condo: 'Condominiums',
    preDrywall: 'Pre-Drywall',
    addons: 'Additional Services & Fees',
    discounts: 'Discounts',
  },
  tableHeaders: {
    sqft: 'Size (Sq. Feet)',
    price: 'Price',
    service: 'Service',
    discount: 'Discount',
    amount: 'Amount',
  },
}

export type PricingPageContent = typeof pricingPageEn

export const pricingPageEs: PricingPageContent = {
  meta: {
    title: 'Horario de Precios | HomeKey Inspections',
    description:
      'Horario de precios completo de HomeKey Inspections — casas unifamiliares, condominios, pre-tabla yeso, servicios adicionales y descuentos disponibles.',
  },
  page: {
    eyebrow: 'Precios',
    headline: 'Horario de Precios',
    subtext: 'Precios transparentes y claros para cada tipo de inspección que ofrecemos.',
    backLabel: 'Volver a Nueva Construcción',
    backHref: '/new-construction/es',
    note: 'Los pies cuadrados incluyen todos los espacios terminados y sin terminar (sótanos, cuartos de servicio, etc.). Los descuentos de clientes recurrentes solo son válidos en inspecciones completas dentro de los últimos 12 meses para clientes que tengan intención de vivir en la propiedad — no aplica para inversores.',
    pricingNotice: 'Los precios están sujetos a cambios sin previo aviso.',
    bookCta: 'Reservar una inspección →',
  },
  sections: {
    sfh: 'Casa Unifamiliar y Townhouse',
    condo: 'Condominios',
    preDrywall: 'Pre-Tabla Yeso',
    addons: 'Servicios Adicionales y Tarifas',
    discounts: 'Descuentos',
  },
  tableHeaders: {
    sqft: 'Tamaño (Pies Cuadrados)',
    price: 'Precio',
    service: 'Servicio',
    discount: 'Descuento',
    amount: 'Monto',
  },
}
