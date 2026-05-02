'use client'

import { Accordion } from '@base-ui/react/accordion'
import { ChevronDown } from 'lucide-react'
import type { ServiceFAQ } from '@/app/services/_data/types'

type Props = {
  faqs: ServiceFAQ[]
}

export function ServiceFAQAccordion({ faqs }: Props) {
  return (
    <Accordion.Root>
      {faqs.map((faq, i) => (
        <Accordion.Item key={i} value={String(i)} className="border-b border-border/50">
          <Accordion.Header>
            <Accordion.Trigger className="flex w-full items-center justify-between py-4 text-left text-sm font-medium text-foreground hover:text-brand-primary transition-colors [&[data-panel-open]>svg]:rotate-180">
              {faq.question}
              <ChevronDown className="ml-3 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Panel className="overflow-hidden text-sm text-muted-foreground pb-4 data-[ending-style]:animate-none data-[starting-style]:animate-none">
            {faq.answer}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
}
