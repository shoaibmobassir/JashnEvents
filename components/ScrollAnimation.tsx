'use client'

import { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollAnimation({ children, className = '', delay = 0 }: ScrollAnimationProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
