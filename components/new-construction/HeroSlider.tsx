"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

export type SlideData = {
  src: string
  alt: string
  caption: string
}

const DEFAULT_SLIDES: SlideData[] = [
  {
    src: "/inspection-next-level.jpg",
    alt: "Independent inspector using thermal imaging camera during new home pre-drywall inspection",
    caption: "Thermal imaging on every inspection — standard.",
  },
  {
    src: "/pre-drywall.avif",
    alt: "New residential construction framing stage in Northern Virginia",
    caption: "Catch defects before drywall seals them in.",
  },
  {
    src: "/framing.avif",
    alt: "New homeowner receiving keys after independent inspection-backed closing",
    caption: "Independent advocacy through closing day.",
  },
]

type HeroSliderProps = {
  slides?: SlideData[]
}

export function HeroSlider({ slides = DEFAULT_SLIDES }: HeroSliderProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  // useMemo ensures the plugin instance is stable and not re-created on re-renders
  const autoplay = React.useMemo(
    () => Autoplay({ delay: 5000, stopOnInteraction: false }),
    []
  )

  React.useEffect(() => {
    if (!api) return
    const onSelect = () => setCurrent(api.selectedScrollSnap())
    api.on("select", onSelect)
    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div className="relative w-full">
      <Carousel
        opts={{ loop: true }}
        plugins={[autoplay]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.src} className="pl-0">
              {/* aspect-[16/9] on mobile, aspect-[4/3] on md+ */}
              <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-xl bg-[#F1EFE8]">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.08],
                    x: [0, index % 2 === 0 ? "2%" : "-2%"],
                  }}
                  transition={{
                    duration: 7,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </motion.div>

                {/* Gradient overlay for caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                {/* Caption pinned bottom-left */}
                <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-medium leading-snug drop-shadow-sm">
                  {slide.caption}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-3" role="group" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={[
              "h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
              index === current
                ? "w-6 bg-foreground"
                : "w-2 bg-foreground/30 hover:bg-foreground/50",
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  )
}
