'use client'

import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useMotionValue, useTransform, animate, motion } from 'framer-motion'

type AnimatedNumberProps = {
  value: number
  suffix?: string
}

export function AnimatedNumber({ value, suffix }: AnimatedNumberProps) {
  const { ref, inView } = useInView({ triggerOnce: true })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) => Math.round(v))

  useEffect(() => {
    if (inView) {
      animate(motionValue, value, { duration: 1.5, ease: 'easeOut' })
    }
  }, [inView, motionValue, value])

  return (
    <span ref={ref} role="presentation">
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </span>
  )
}
