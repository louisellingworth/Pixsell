import { useState, useEffect } from 'react'

export function useProgressiveEnhancement() {
  const [isEnhanced, setIsEnhanced] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    // Check for modern browser features
    const hasIntersectionObserver = 'IntersectionObserver' in window
    const hasResizeObserver = 'ResizeObserver' in window
    const hasWebGL = !!window.WebGLRenderingContext
    const hasServiceWorker = 'serviceWorker' in navigator
    const hasFetch = 'fetch' in window
    const hasPromise = 'Promise' in window
    
    const supportsModernFeatures = 
      hasIntersectionObserver && 
      hasResizeObserver && 
      hasWebGL && 
      hasServiceWorker && 
      hasFetch && 
      hasPromise
    
    setIsEnhanced(supportsModernFeatures)
    setIsLoading(false)
  }, [])
  
  return { isEnhanced, isLoading }
}

export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])
  
  return prefersReducedMotion
} 