import Image from 'next/image'
import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function BilingualContactCard() {
  return (
    <div className="rounded-2xl border border-brand-primary/20 bg-brand-primary/5 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
        <div className="flex flex-shrink-0 -space-x-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-background">
            <Image
              src="/images/inspectors/sebastian-aste.jpg"
              alt="Sebastian Aste"
              fill
              sizes="56px"
              className="object-cover object-top"
            />
          </div>
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-background">
            <Image
              src="/images/inspectors/jay-carrillo.jpg"
              alt="Jay Carrillo"
              fill
              sizes="56px"
              className="object-cover object-top"
            />
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="mb-1 text-base font-semibold text-foreground">
            Hable directamente con un inspector bilingüe
          </h3>
          <p className="mb-4 text-sm text-muted-foreground">
            Sebastian y Jay están disponibles para responder sus preguntas en español — antes, durante y después de la inspección.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
            <Button
              nativeButton={false}
              size="sm"
              className="bg-brand-primary hover:bg-brand-primaryDark text-white"
              render={<a href="tel:+15712813846" />}
            >
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              Llamar ahora
            </Button>
            <Button
              nativeButton={false}
              size="sm"
              variant="outline"
              render={<a href="https://wa.me/15712813846" target="_blank" rel="noopener noreferrer" />}
            >
              <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
              WhatsApp
            </Button>
            <Button
              nativeButton={false}
              size="sm"
              variant="outline"
              render={<Link href="/schedule" />}
            >
              <Calendar className="mr-1.5 h-3.5 w-3.5" />
              Agendar inspección
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
