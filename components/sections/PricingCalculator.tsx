'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from '@/components/ui/checkbox'
import { calculateBundlePrice, type AddOnId } from '@/lib/pricing'
import type { Content } from '@/app/new-construction/_data/content'

type PricingCalculatorProps = {
  pricing: Content['pricing']
}

function fmt(n: number) {
  return `$${n.toLocaleString()}`
}

export function PricingCalculator({ pricing }: PricingCalculatorProps) {
  const [sqft, setSqft] = useState(2800)
  const [addOns, setAddOns] = useState<AddOnId[]>([])

  const prices = calculateBundlePrice({ sqft, addOns })

  function toggleAddon(id: AddOnId, checked: boolean) {
    setAddOns((prev) =>
      checked ? [...prev, id] : prev.filter((a) => a !== id)
    )
  }

  return (
    <section id="pricing" className="bg-background px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
          {pricing.sectionLabel}
        </p>
        <h2 className="mb-8 text-2xl font-medium text-foreground">{pricing.headline}</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-lg bg-secondary p-5">
            <p className="mb-4 text-xs text-muted-foreground">{pricing.inputLabels.sqft}</p>
            <Input
              type="number"
              value={sqft}
              min={500}
              max={8000}
              step={100}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="mb-4 bg-background"
              aria-label={pricing.inputLabels.sqft}
            />

            <p className="mb-3 text-xs text-muted-foreground">{pricing.inputLabels.addons}</p>
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
                  <label htmlFor={addon.id} className="text-xs text-foreground cursor-pointer">
                    {addon.label} (+{fmt(addon.price)})
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Estimate */}
          <div className="rounded-lg border border-border/50 p-5">
            <p className="mb-4 text-xs text-muted-foreground">Estimated bundle</p>
            <div className="space-y-2">
              {pricing.lineItems.map((item) => (
                <div key={item.key} className="flex justify-between text-xs">
                  <span className="text-foreground">{item.label}</span>
                  <span>{fmt(prices[item.key as keyof typeof prices] as number)}</span>
                </div>
              ))}
            </div>

            <Separator className="my-3 border-dashed" />
            <div className="flex justify-between text-xs text-[#085041]">
              <span>{pricing.discountLabel}</span>
              <span>−{fmt(prices.discount)}</span>
            </div>

            {addOns.length > 0 && (
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>Add-ons</span>
                <span>+{fmt(prices.addOns)}</span>
              </div>
            )}

            <Separator className="my-3" />
            <div className="flex justify-between text-base font-medium">
              <span>{pricing.totalLabel}</span>
              <span>{fmt(prices.total)}</span>
            </div>

            <Button className="mt-4 w-full" render={<a href="#" />}>
              {pricing.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
