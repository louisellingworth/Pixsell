'use client'

import { useEffect, useRef, useState } from 'react'
import { throttle } from 'lodash'

export const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isLowPerformance, setIsLowPerformance] = useState(false)
  
  useEffect(() => {
    const checkPerformance = () => {
      // Simple performance check based on device
      const isLowPerfDevice = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.devicePixelRatio < 1.5 ||
        (navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4)
      
      setIsLowPerformance(isLowPerfDevice)
    }
    
    checkPerformance()
    
    if (!canvasRef.current) return
    
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []
    
    // Create fewer particles on low-performance devices
    const particleCount = isLowPerformance ? 25 : 40
    
    // Set canvas dimensions accounting for pixel ratio
    const setCanvasDimensions = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
      
      // Re-initialize particles when canvas is resized
      particles.length = 0
      initParticles()
    }
    
    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.5 + 0.2
        })
      }
    }
    
    const animate = () => {
      if (!ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Lower quality rendering for low performance devices
      ctx.globalCompositeOperation = 'lighter'
      
      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY
        
        // Wrap around edges
        if (particle.x > window.innerWidth) particle.x = 0
        if (particle.x < 0) particle.x = window.innerWidth
        if (particle.y > window.innerHeight) particle.y = 0
        if (particle.y < 0) particle.y = window.innerHeight
        
        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        
        // Use gradients for higher-end devices, simple colors for lower-end
        if (!isLowPerformance) {
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 2
          )
          gradient.addColorStop(0, `rgba(120, 58, 180, ${particle.opacity})`)
          gradient.addColorStop(1, `rgba(120, 58, 180, 0)`)
          ctx.fillStyle = gradient
        } else {
          ctx.fillStyle = `rgba(120, 58, 180, ${particle.opacity * 0.7})`
        }
        
        ctx.fill()
      })
      
      requestAnimationFrame(animate)
    }
    
    setCanvasDimensions()
    initParticles()
    
    const resizeHandler = throttle(() => {
      setCanvasDimensions()
    }, 200)
    
    window.addEventListener('resize', resizeHandler)
    
    // Only start animation if not low performance
    if (!isLowPerformance) {
      animate()
    } else {
      // For low performance, just draw static particles
      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120, 58, 180, ${particle.opacity * 0.5})`
        ctx.fill()
      })
    }
    
    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [isLowPerformance])
  
  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        position: 'fixed',
        background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)'
      }}
    />
  )
}