'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface TextRotateProps {
  texts: string[]
  mainClassName?: string
  staggerFrom?: 'first' | 'last'
  initial?: any
  animate?: any
  exit?: any
  staggerDuration?: number
  splitLevelClassName?: string
  transition?: any
  rotationInterval?: number
}

export default function TextRotate({
  texts,
  mainClassName = '',
  staggerFrom = 'last',
  initial = { y: '100%' },
  animate = { y: 0 },
  exit = { y: '-120%' },
  staggerDuration = 0.025,
  splitLevelClassName = 'overflow-hidden pb-0.5 sm:pb-1 md:pb-1',
  transition = { type: 'spring', damping: 30, stiffness: 400 },
  rotationInterval = 2000,
}: TextRotateProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(intervalId)
  }, [texts.length, rotationInterval])

  return (
    <div className={`${mainClassName} relative`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentIndex}
          className={splitLevelClassName}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={transition}
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
} 

