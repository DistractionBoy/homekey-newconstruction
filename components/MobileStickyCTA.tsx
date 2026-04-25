'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

type MobileStickyCTAProps = {
  label: string
}

export function MobileStickyCTA({ label }: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-background p-3 md:hidden">
      <Button className="w-full" render={<a href="#pricing" />}>
        {label}
      </Button>
    </div>
  )
}
