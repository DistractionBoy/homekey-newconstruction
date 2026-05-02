'use client'

import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import type { WhatWeInspectItem } from '@/app/services/_data/types'

type Props = {
  items: WhatWeInspectItem[]
}

export function ServiceWhatWeInspect({ items }: Props) {
  return (
    <Accordion.Root defaultValue={['0']}>
      {items.map((item, i) => (
        <Accordion.Item key={i} value={String(i)} className="border-b border-border/50">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-foreground hover:text-brand-primary transition-colors [&[data-panel-open]>svg]:rotate-180">
              {item.heading}
              <ChevronDown className="ml-3 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="overflow-hidden pb-4">
            <ul className="space-y-1.5">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
