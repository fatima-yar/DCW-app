// components/FadeInSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function FadeInSection({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  y?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  )
}
