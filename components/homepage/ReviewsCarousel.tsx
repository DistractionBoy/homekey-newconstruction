'use client'

import * as React from 'react'
import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import { ReviewerAvatar } from '@/components/ui/ReviewerAvatar'
import { SEED_REVIEWS, type ReviewData } from '@/app/_data/homepage'

const SOURCE_COLORS: Record<ReviewData['source'], string> = {
  Google: 'bg-blue-50 text-blue-700',
  Yelp: 'bg-red-50 text-red-700',
  Angi: 'bg-orange-50 text-orange-700',
}

function truncate(text: string, max: number): { visible: string; truncated: boolean } {
  if (text.length <= max) return { visible: text, truncated: false }
  return { visible: text.slice(0, max).trimEnd() + '…', truncated: true }
}

function ReviewCard({ review }: { review: ReviewData }) {
  const { visible, truncated } = truncate(review.text, 200)
  return (
    <div className="flex h-full flex-col gap-3 rounded-xl border border-border/50 bg-card p-5">
      <div className="flex items-center gap-1">
        {Array.from({ length: review.stars }).map((_, i) => (
          <span key={i} className="text-yellow-400 text-sm" aria-hidden="true">★</span>
        ))}
        <span className="sr-only">{review.stars} out of 5 stars</span>
        <span
          className={`ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium ${SOURCE_COLORS[review.source]}`}
        >
          {review.source}
        </span>
      </div>
      <p className="flex-1 text-sm leading-relaxed text-foreground">
        &ldquo;{visible}&rdquo;{truncated && (
          <span className="text-muted-foreground"> Read more</span>
        )}
      </p>
      <div className="flex items-center gap-2.5 border-t border-border/40 pt-3">
        {review.avatar ? (
          <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
            <Image
              src={review.avatar}
              alt={review.reviewer}
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
        ) : (
          <ReviewerAvatar name={review.reviewer} />
        )}
        <div>
          <p className="text-xs font-medium text-foreground">{review.reviewer}</p>
          <p className="text-[10px] text-muted-foreground">
            {review.city}
            {review.inspectorName && ` · Inspected by ${review.inspectorName}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ReviewsCarousel() {
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 8000, stopOnInteraction: true }),
    []
  )

  return (
    <section className="bg-background px-7 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-[11px] uppercase tracking-widest text-brand-trust">
          What clients say
        </p>
        <h2 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
          4.9/5 across 500+ reviews
        </h2>
        <div aria-live="polite" aria-label="Customer reviews carousel">
          <Carousel
            opts={{ loop: true, align: 'start' }}
            plugins={[autoplay]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {SEED_REVIEWS.map((review) => (
                <CarouselItem
                  key={review.reviewer}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-6 flex items-center justify-end gap-2">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
