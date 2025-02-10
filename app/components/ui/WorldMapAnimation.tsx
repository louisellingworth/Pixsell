'use client'

import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface Point {
  x: number
  y: number
  size: number
  opacity: number
}

interface Line {
  x1: number
  y1: number
  x2: number
  y2: number
  progress: number
}

// Define world regions for point distribution
const WORLD_REGIONS = [
  { x1: 0.05, x2: 0.25, y1: 0.2, y2: 0.4 },  // North America
  { x1: 0.15, x2: 0.25, y1: 0.4, y2: 0.7 },  // South America
  { x1: 0.35, x2: 0.45, y1: 0.15, y2: 0.35 }, // Europe
  { x1: 0.35, x2: 0.45, y1: 0.35, y2: 0.6 },  // Africa
  { x1: 0.45, x2: 0.75, y1: 0.15, y2: 0.45 }, // Asia
  { x1: 0.65, x2: 0.85, y1: 0.45, y2: 0.65 }  // Oceania
]

const WorldMapAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size with device pixel ratio
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.scale(dpr, dpr)
    }

    setCanvasSize()

    // China location (normalized coordinates)
    const china = { x: 0.7, y: 0.3 }
    let points: Point[] = []
    let lines: Line[] = []

    const generatePoints = () => {
      points = []
      const pointsPerRegion = 40 // Density of points per region

      WORLD_REGIONS.forEach(region => {
        for (let i = 0; i < pointsPerRegion; i++) {
          const x = (region.x1 + Math.random() * (region.x2 - region.x1)) * canvas.width
          const y = (region.y1 + Math.random() * (region.y2 - region.y1)) * canvas.height
          points.push({
            x,
            y,
            size: Math.random() * 1 + 1,
            opacity: Math.random() * 0.3 + 0.2
          })
        }
      })
    }

    const drawPoints = () => {
      ctx.save()
      points.forEach(point => {
        ctx.beginPath()
        ctx.fillStyle = `rgba(100, 200, 255, ${point.opacity})`
        ctx.shadowColor = 'rgba(100, 200, 255, 0.5)'
        ctx.shadowBlur = 5
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.restore()
    }

    const drawChina = () => {
      const x = china.x * canvas.width
      const y = china.y * canvas.height
      
      ctx.save()
      // Main point
      ctx.beginPath()
      ctx.fillStyle = '#ff4500'
      ctx.shadowColor = '#ff4500'
      ctx.shadowBlur = 20
      ctx.arc(x, y, 4, 0, Math.PI * 2)
      ctx.fill()

      // Pulse effect
      const pulseSize = 15 + Math.sin(Date.now() / 500) * 5
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(255, 69, 0, 0.3)'
      ctx.lineWidth = 2
      ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }

    const createLine = () => {
      if (points.length === 0) return
      const sourcePoint = points[Math.floor(Math.random() * points.length)]
      const targetX = china.x * canvas.width
      const targetY = china.y * canvas.height
      
      lines.push({
        x1: sourcePoint.x,
        y1: sourcePoint.y,
        x2: targetX,
        y2: targetY,
        progress: 0
      })

      gsap.to(lines[lines.length - 1], {
        progress: 1,
        duration: 2,
        ease: 'none',
        onComplete: () => {
          lines = lines.filter(l => l.progress < 1)
        }
      })
    }

    const drawLines = () => {
      ctx.save()
      lines.forEach(line => {
        const currentX = line.x1 + (line.x2 - line.x1) * line.progress
        const currentY = line.y1 + (line.y2 - line.y1) * line.progress
        
        ctx.beginPath()
        ctx.strokeStyle = `rgba(255, 140, 0, ${0.3 * (1 - line.progress)})`
        ctx.lineWidth = 2
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(currentX, currentY)
        ctx.stroke()
      })
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawPoints()
      drawLines()
      drawChina()
      requestAnimationFrame(animate)
    }

    generatePoints()
    animate()

    // Create new lines at regular intervals
    const lineInterval = setInterval(createLine, 2000)

    // Handle window resize
    const handleResize = () => {
      setCanvasSize()
      generatePoints()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      clearInterval(lineInterval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  )
}

export default WorldMapAnimation 