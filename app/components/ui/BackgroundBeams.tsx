'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export const BackgroundBeams = () => {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      if (beamsRef.current) {
        const rect = beamsRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  if (!mounted) {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -inset-[10px] opacity-50">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 h-full w-full"
              style={{
                transform: `rotate(${i * 45}deg)`,
              }}
            >
              <div
                className="absolute top-1/2 left-1/2 h-[400px] w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20"
                style={{
                  filter: 'blur(4px)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div ref={beamsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Static beams */}
      <div className="absolute -inset-[10px] opacity-50">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 h-full w-full"
            style={{
              transform: `rotate(${i * 45}deg)`,
            }}
          >
            <div
              className="absolute top-1/2 left-1/2 h-[400px] w-[2px] -translate-y-1/2 bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20"
              style={{
                filter: 'blur(4px)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Mouse-following beam */}
      <motion.div
        className="absolute h-[400px] w-[2px] bg-gradient-to-b from-transparent via-indigo-500 to-transparent opacity-20"
        style={{
          left: mousePosition.x,
          top: mousePosition.y - 200,
          filter: 'blur(4px)',
        }}
        animate={{
          left: mousePosition.x,
          top: mousePosition.y - 200,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
      />
    </div>
  )
} 