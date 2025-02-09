'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface Props {
  label: string
  className?: string
  staggerDuration?: number
  fromFontVariationSettings?: string
  toFontVariationSettings?: string
}

const VariableFontHoverByRandomLetter = ({
  label,
  className = '',
  staggerDuration = 0.05,
  fromFontVariationSettings = "'wght' 400",
  toFontVariationSettings = "'wght' 800",
}: Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={className}>
      {label.split('').map((char, index) => (
        <motion.span
          key={index}
          style={{
            display: 'inline-block',
            fontVariationSettings:
              hoveredIndex === index ? toFontVariationSettings : fromFontVariationSettings,
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          transition={{
            duration: 0.2,
            delay: index * staggerDuration,
          }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  )
}

export default VariableFontHoverByRandomLetter 