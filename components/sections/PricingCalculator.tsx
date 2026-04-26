'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { ClipboardList } from 'lucide-react'
import {
  calculateBundlePrice,
  type AddOnId,
  type HomeType,
  type BundleBreakdown,
} from '@/lib/pricing'
import type { Content } from '@/app/new-construction/_data/content'

type PricingCalculatorProps = {
  pricing: Content['pricing']
}

function fmt(n: number) {
  return `$${n.toLocaleString()}`
}

function InvoiceContent({
  prices,
  pricing,
  sqft,
  homeType,
  isMilitary,
}: {
  prices: BundleBreakdown
  pricing: Content['pricing']
  sqft: number
  homeType: HomeType
  isMilitary: boolean
}) {
  const homeTypeLabel =
    pricing.homeTypeOptions.find((o) => o.id === homeType)?.label ?? ''
  const repeatLabel =
    homeType === 'sfh'
      ? pricing.discountLabels.repeatSfh
      : pricing.discountLabels.repeatCondo

  return (
    <>
      <DialogHeader>
        <DialogTitle>{pricing.invoiceTitle}</DialogTitle>
        <DialogDescription>{pricing.invoiceSubtitle}</DialogDescription>
      </DialogHeader>

      <p className="mb-4 text-xs font-medium text-muted-foreground">
        {homeTypeLabel} · {sqft.toLocaleString()} sq ft
      </p>

      <div className="space-y-2">
        {/* Pre-drywall */}
        <div className="flex justify-between text-xs">
          <span>{pricing.lineItems[0].label}</span>
          <span className="font-medium">{fmt(prices.preDrywall)}</span>
        </div>

        {/* Pre-settlement + repeat discount */}
        <div className="flex justify-between text-xs">
          <span>{pricing.lineItems[1].label}</span>
          <span className="font-medium">{fmt(prices.preSettlement)}</span>
        </div>
        <div className="flex justify-between text-xs text-emerald-600 pl-4">
          <span>{repeatLabel}</span>
          <span>−{fmt(prices.repeatDiscountPreSettlement)}</span>
        </div>

        {/* Warranty + repeat discount */}
        <div className="flex justify-between text-xs">
          <span>{pricing.lineItems[2].label}</span>
          <span className="font-medium">{fmt(prices.warrantyInspection)}</span>
        </div>
        <div className="flex justify-between text-xs text-emerald-600 pl-4">
          <span>{repeatLabel}</span>
          <span>−{fmt(prices.repeatDiscountWarranty)}</span>
        </div>

        {/* Military discount */}
        {isMilitary && (
          <div className="flex justify-between text-xs text-emerald-600">
            <span>{pricing.discountLabels.military}</span>
            <span>−{fmt(prices.militaryDiscount)}</span>
          </div>
        )}
      </div>

      {/* Add-ons */}
      {prices.addOnsBreakdown.length > 0 && (
        <>
          <Separator className="my-3 border-dashed" />
          <div className="space-y-2">
            {prices.addOnsBreakdown.map((a) => {
              const addon = pricing.addons.find((ad) => ad.id === a.id)
              return (
                <div key={a.id} className="flex justify-between text-xs">
                  <span>{addon?.label ?? a.id}</span>
                  <span className="font-medium">+{fmt(a.price)}</span>
                </div>
              )
            })}
          </div>
        </>
      )}

      <Separator className="my-3" />
      <div className="flex justify-between text-sm font-semibold">
        <span>{pricing.totalLabel}</span>
        <span className="text-brand-primary">{fmt(prices.total)}</span>
      </div>

      <p className="mt-4 text-[10px] leading-relaxed text-muted-foreground">
        {pricing.invoiceNote}
      </p>

      <Button
        className="mt-4 w-full hover:scale-[1.02] hover:shadow-md transition-all duration-200"
        render={<a href="#" />}
      >
        {pricing.invoiceCta}
      </Button>
    </>
  )
}

export function PricingCalculator({ pricing }: PricingCalculatorProps) {
  const [sqft, setSqft] = useState(2800)
  const [homeType, setHomeType] = useState<HomeType>('sfh')
  const [isMilitary, setIsMilitary] = useState(false)
  const [addOns, setAddOns] = useState<AddOnId[]>([])

  const prices = calculateBundlePrice({ sqft, homeType, isMilitary, addOns })

  function toggleAddon(id: AddOnId, checked: boolean) {
    setAddOns((prev) =>
      checked ? [...prev, id] : prev.filter((a) => a !== id)
    )
  }

  const maxSqft = homeType === 'condo' ? 6500 : 12500

  return (
    <section id="pricing" className="bg-gradient-to-br from-slate-50 via-white to-orange-50/30 px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-brand-trust">
          {pricing.sectionLabel}
        </p>
        <h2 className="mb-8 text-2xl font-medium text-foreground">{pricing.headline}</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Inputs */}
          <div className="space-y-5 rounded-lg bg-secondary p-5">
            {/* Home type toggle */}
            <div>
              <p className="mb-2 text-xs text-muted-foreground">{pricing.homeTypeLabel}</p>
              <div className="flex overflow-hidden rounded-lg border border-border">
                {pricing.homeTypeOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => {
                      setHomeType(opt.id as HomeType)
                      setSqft((prev) =>
                        opt.id === 'condo' ? Math.min(prev, 6500) : prev
                      )
                    }}
                    className={[
                      'flex-1 px-3 py-2 text-xs font-medium transition-colors',
                      homeType === opt.id
                        ? 'bg-brand-primary text-white'
                        : 'bg-background text-muted-foreground hover:text-foreground',
                    ].join(' ')}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Square footage */}
            <div>
              <p className="mb-2 text-xs text-muted-foreground">{pricing.inputLabels.sqft}</p>
              <Input
                type="number"
                value={sqft}
                min={500}
                max={maxSqft}
                step={100}
                onChange={(e) =>
                  setSqft(Math.min(Number(e.target.value), maxSqft))
                }
                className="bg-background"
                aria-label={pricing.inputLabels.sqft}
              />
            </div>

            {/* Add-ons */}
            <div>
              <p className="mb-2 text-xs text-muted-foreground">{pricing.inputLabels.addons}</p>
              <div className="space-y-2">
                {pricing.addons.map((addon) => (
                  <div key={addon.id} className="flex items-center gap-2">
                    <Checkbox
                      id={addon.id}
                      checked={addOns.includes(addon.id as AddOnId)}
                      onCheckedChange={(checked) =>
                        toggleAddon(addon.id as AddOnId, checked === true)
                      }
                    />
                    <label
                      htmlFor={addon.id}
                      className="cursor-pointer text-xs text-foreground"
                    >
                      {addon.label} (+{fmt(addon.price)})
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Military */}
            <div className="flex items-center gap-2">
              <Checkbox
                id="military"
                checked={isMilitary}
                onCheckedChange={(checked) => setIsMilitary(checked === true)}
              />
              <label htmlFor="military" className="cursor-pointer text-xs text-foreground">
                {pricing.militaryLabel}
              </label>
            </div>
          </div>

          {/* Estimate panel */}
          <div className="rounded-lg border border-border/50 p-5">
            <div className="mb-3 flex items-center gap-2">
              <ClipboardList size={24} className="text-brand-primary" aria-hidden="true" />
              <span className="text-xs text-muted-foreground">{pricing.estimateLabel}</span>
            </div>

            <div className="space-y-2">
              {[
                { label: pricing.lineItems[0].label, value: prices.preDrywall },
                { label: pricing.lineItems[1].label, value: prices.preSettlement },
                { label: pricing.lineItems[2].label, value: prices.warrantyInspection },
              ].map((item) => (
                <div key={item.label} className="flex justify-between text-xs">
                  <span className="text-foreground">{item.label}</span>
                  <span>{fmt(item.value)}</span>
                </div>
              ))}
            </div>

            <Separator className="my-3 border-dashed" />

            <div className="flex justify-between text-xs text-emerald-600">
              <span>{pricing.discountLabel}</span>
              <span>−{fmt(prices.discountTotal)}</span>
            </div>

            {addOns.length > 0 && (
              <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                <span>{pricing.inputLabels.addons}</span>
                <span>+{fmt(prices.addOnsTotal)}</span>
              </div>
            )}

            <Separator className="my-3" />

            <div className="flex justify-between text-base font-medium">
              <span>{pricing.totalLabel}</span>
              <span className="font-bold text-brand-primary">{fmt(prices.total)}</span>
            </div>

            {/* Invoice modal */}
            <Dialog>
              <DialogTrigger
                render={<Button variant="outline" className="mt-4 w-full" />}
              >
                {pricing.viewInvoice}
              </DialogTrigger>
              <DialogContent>
                <InvoiceContent
                  prices={prices}
                  pricing={pricing}
                  sqft={sqft}
                  homeType={homeType}
                  isMilitary={isMilitary}
                />
              </DialogContent>
            </Dialog>

            <Button
              className="mt-2 w-full hover:scale-[1.02] hover:shadow-md transition-all duration-200"
              render={<a href="#" />}
            >
              {pricing.cta}
            </Button>
          </div>
        </div>

        {/* Link to full pricing schedule */}
        <div className="mt-6 text-center">
          <Link
            href={pricing.pricingGuideHref}
            className="text-xs text-brand-primary underline-offset-2 hover:underline"
          >
            {pricing.pricingGuideLabel} →
          </Link>
        </div>
      </div>
    </section>
  )
}
