import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

export function HomepageFinalCTA() {
  return (
    <section className="bg-brand-ink px-7 py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 text-3xl font-medium leading-tight text-white md:text-4xl">
          Ready to schedule?
        </h2>
        <p className="mb-8 text-base text-white/70">
          Book online in 60 seconds or call us directly.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="bg-brand-primary hover:bg-brand-primaryDark text-white px-8 hover:scale-[1.02] hover:shadow-md transition-all duration-200"
            render={<Link href="/schedule" />}
          >
            Schedule an inspection →
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white bg-white/10 hover:bg-white/20 hover:scale-[1.02] transition-all duration-200"
            render={<a href="tel:+15712813846" />}
          >
            <Phone className="mr-2 h-4 w-4" />
            (571) 281-3846
          </Button>
        </div>
      </div>
    </section>
  )
}
