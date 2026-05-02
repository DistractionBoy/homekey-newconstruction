'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { HeroSlider } from '@/components/new-construction/HeroSlider'
import type { Content } from '@/app/new-construction/_data/content'

type HeroSectionProps = {
  hero: Content['hero']
}

const HERO_GRID: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      style={HERO_GRID}
      className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-7 py-16 md:grid-cols-[1.1fr_1fr] md:py-24"
    >
      {/* Copy — stagger on load */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <Badge className="mb-4 bg-[#E1F5EE] text-[#085041] hover:bg-[#E1F5EE]">
            {hero.badge}
          </Badge>
        </motion.div>
        <motion.h1
          variants={itemVariants}
          className="mb-4 text-4xl font-medium leading-tight tracking-tight text-foreground whitespace-pre-line"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="mb-6 max-w-md text-base leading-relaxed text-muted-foreground"
        >
          {hero.subheadline}
        </motion.p>
        <motion.div variants={itemVariants} className="flex flex-col gap-3 sm:flex-row">
          <Button
            nativeButton={false}
            className="bg-brand-primary hover:bg-brand-primaryDark text-white shadow-sm hover:scale-[1.02] hover:shadow-md transition-all duration-200"
            render={<a href="#pricing" />}
          >
            {hero.primaryCta}
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            className="hover:scale-[1.02] hover:shadow-md transition-all duration-200"
            render={<Link href="#" />}
          >
            {hero.secondaryCta}
          </Button>
        </motion.div>
        <motion.ul variants={itemVariants} className="mt-6 flex flex-wrap gap-4">
          {hero.trustPills.map((pill) => (
            <li key={pill} className="text-xs text-muted-foreground">
              {pill}
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Image slider */}
      <div className="order-first md:order-last">
        <HeroSlider />
      </div>
    </section>
  )
}
