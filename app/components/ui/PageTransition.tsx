'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isFirstRender, setIsFirstRender] = useState(true)

  // Skip animation on initial page load
  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  // Enhanced animations for page transitions and content reveal
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1], // custom cubic-bezier for smooth feel
        when: "beforeChildren",
        staggerChildren: 0.15,
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  }

  // Variants for children elements to create staggered animations
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut"
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstRender ? { opacity: 1 } : pageVariants.hidden}
        animate={pageVariants.visible}
        exit={pageVariants.exit}
        className="relative"
      >
        {!isFirstRender && (
          <motion.div
            className="fixed inset-0 bg-black z-50 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ 
              opacity: 0,
              transition: { 
                duration: 0.6, 
                ease: "easeOut",
              }
            }}
          />
        )}
        
        {/* Add motion context for child animations */}
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate="visible"
          className="page-content-wrapper"
        >
          {/* We're passing motion props down to children */}
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
} 