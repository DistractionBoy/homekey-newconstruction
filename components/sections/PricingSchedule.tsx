import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import type { PricingPageContent } from '@/app/pricing/_data/content'

const SFH_ROWS = [
  { label: '2,500 or less', price: '$675' },
  { label: '2,501 – 3,000', price: '$725' },
  { label: '3,001 – 3,500', price: '$775' },
  { label: '3,501 – 4,000', price: '$850' },
  { label: '4,001 – 4,500', price: '$925' },
  { label: '4,501 – 5,000', price: '$1,000' },
  { label: '5,001 – 5,500', price: '$1,075' },
  { label: '5,501 – 6,000', price: '$1,150' },
  { label: '6,001 – 6,500', price: '$1,250' },
  { label: '6,501 – 7,000', price: '$1,350' },
  { label: '7,001 – 7,500', price: '$1,450' },
  { label: '7,501 – 8,000', price: '$1,550' },
  { label: '8,001 – 8,500', price: '$1,650' },
  { label: '8,501 – 9,000', price: '$1,800' },
  { label: '9,001 – 9,500', price: '$1,950' },
  { label: '9,501 – 10,000', price: '$2,100' },
  { label: '10,001 – 10,500', price: '$2,250' },
  { label: '10,501 – 11,000', price: '$2,400' },
  { label: '11,001 – 11,500', price: '$2,550' },
  { label: '11,501 – 12,000', price: '$2,700' },
  { label: '12,001 – 12,500', price: '$2,850' },
]

const CONDO_ROWS = [
  { label: '1,500 or less', price: '$500' },
  { label: '1,501 – 2,000', price: '$550' },
  { label: '2,001 – 2,500', price: '$600' },
  { label: '2,501 – 3,000', price: '$650' },
  { label: '3,001 – 3,500', price: '$700' },
  { label: '3,501 – 4,000', price: '$750' },
  { label: '4,001 – 4,500', price: '$800' },
  { label: '4,501 – 5,000', price: '$850' },
  { label: '5,001 – 5,500', price: '$900' },
  { label: '5,501 – 6,000', price: '$950' },
  { label: '6,001 – 6,500', price: '$1,000' },
]

const PRE_DRYWALL_ROWS = [
  { label: '4,500 or less', price: '$675' },
  { label: '4,501 – 6,500', price: '$775' },
  { label: '6,501 – 7,000', price: '$875' },
  { label: '7,001 – 7,500', price: '$975' },
  { label: '7,501 – 8,000', price: '$1,075' },
  { label: 'Condo only — under 1,500', price: '$500' },
  { label: 'Condo only — under 3,000', price: '$575' },
]

const ADDON_ROWS = [
  { label: 'Pre-1975 original construction fee', price: '$75' },
  { label: 'Radon Test (with a home inspection)', price: '$195' },
  { label: 'Leak Detection (Infrared Thermal Imaging Camera)', price: '$175' },
  { label: 'Sewer Scope (with a home inspection)', price: '$425' },
  { label: 'Sewer Scope (NO home inspection)', price: '$495' },
  { label: 'Level II Chimney Inspection', price: '$275' },
  { label: 'Mold Testing (3 samples, 2-day turnaround)', price: '$425' },
  { label: 'Mold Testing — Additional Samples', price: '$75' },
  { label: 'IAQ VOC Test (covers 2,000 sq ft, 3-day turnaround)', price: '$475' },
  { label: 'Additional IAQ VOC tests (each)', price: '$375' },
  { label: 'IAQ VOC Full Chemical Analysis (10-day turnaround)', price: '$950' },
  { label: 'Additional IAQ VOC Full Chemical Analysis (each)', price: '$800' },
  { label: 'Water Quality Test', price: '$400–$500' },
  { label: 'Re-inspection', price: '$375' },
  { label: 'Single Item / Consultation (Per 60 minutes)', price: '$375' },
  { label: 'Annual Inspection Program (60 minutes)', price: '$375' },
  { label: 'Showing Walk & Talk (no report)', price: '$375' },
  { label: '90-Minute Professional Consultation (no report)', price: '$425' },
  { label: 'Major Systems Only Inspection (under 3,500 sq ft)', price: '$425' },
  { label: 'Rush Report Delivery (24-hour turnaround)', price: '$100' },
  { label: 'Basement Apartment / In-law Suite (attached)', price: '$195' },
  { label: 'Detached Guest House / In-Law Suite (up to 1,200 sq ft)', price: '$425' },
  { label: 'Detached Garage / Building (w/o systems)', price: '$175' },
  { label: 'Detached Garage / Building (with systems)', price: '$375' },
  { label: 'Carport (in addition to a garage)', price: '$75' },
  { label: 'Second Kitchen', price: '$75' },
]

const DISCOUNT_ROWS = [
  { label: 'Walkthrough (no report) SFH', price: '($125)' },
  { label: 'Walkthrough (no report) Condo', price: '($75)' },
  { label: 'Repeat Customer (SFH full inspection)', price: '($50)' },
  { label: 'Repeat Customer (Condo full inspection)', price: '($25)' },
  { label: 'Military Discount', price: '($25)' },
]

type Row = { label: string; price: string }

function PriceTable({
  leftHeader,
  rightHeader,
  rows,
}: {
  leftHeader: string
  rightHeader: string
  rows: Row[]
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-secondary">
            <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">
              {leftHeader}
            </th>
            <th className="px-4 py-2.5 text-right font-medium text-muted-foreground">
              {rightHeader}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? 'bg-background' : 'bg-secondary/40'}
            >
              <td className="px-4 py-2.5 text-foreground">{row.label}</td>
              <td className="px-4 py-2.5 text-right font-medium text-foreground">
                {row.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function PricingSchedule({ content: c }: { content: PricingPageContent }) {
  return (
    <div className="px-7 py-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href={c.page.backHref}
          className="mb-8 inline-flex items-center text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          ← {c.page.backLabel}
        </Link>

        <p className="mb-2 mt-2 text-xs uppercase tracking-widest text-brand-trust">
          {c.page.eyebrow}
        </p>
        <h1 className="mb-3 text-3xl font-medium text-foreground">{c.page.headline}</h1>
        <p className="mb-12 text-sm text-muted-foreground max-w-xl">{c.page.subtext}</p>

        <div className="space-y-12">
          <section>
            <h2 className="mb-4 text-lg font-medium text-foreground">{c.sections.sfh}</h2>
            <PriceTable
              leftHeader={c.tableHeaders.sqft}
              rightHeader={c.tableHeaders.price}
              rows={SFH_ROWS}
            />
          </section>

          <Separator />

          <section>
            <h2 className="mb-4 text-lg font-medium text-foreground">{c.sections.condo}</h2>
            <PriceTable
              leftHeader={c.tableHeaders.sqft}
              rightHeader={c.tableHeaders.price}
              rows={CONDO_ROWS}
            />
          </section>

          <Separator />

          <section>
            <h2 className="mb-4 text-lg font-medium text-foreground">{c.sections.preDrywall}</h2>
            <PriceTable
              leftHeader={c.tableHeaders.sqft}
              rightHeader={c.tableHeaders.price}
              rows={PRE_DRYWALL_ROWS}
            />
          </section>

          <Separator />

          <section>
            <h2 className="mb-4 text-lg font-medium text-foreground">{c.sections.addons}</h2>
            <PriceTable
              leftHeader={c.tableHeaders.service}
              rightHeader={c.tableHeaders.price}
              rows={ADDON_ROWS}
            />
          </section>

          <Separator />

          <section>
            <h2 className="mb-4 text-lg font-medium text-foreground">{c.sections.discounts}</h2>
            <PriceTable
              leftHeader={c.tableHeaders.discount}
              rightHeader={c.tableHeaders.amount}
              rows={DISCOUNT_ROWS}
            />
          </section>

          <div className="rounded-lg bg-secondary p-5 text-xs text-muted-foreground space-y-2">
            <p>{c.page.note}</p>
            <p className="font-medium text-foreground">{c.page.pricingNotice}</p>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
              render={<a href="#" />}
            >
              {c.page.bookCta}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
