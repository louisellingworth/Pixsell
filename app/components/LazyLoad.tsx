'use client'

import { useEffect, useState, useRef, ReactNode } from 'react'

interface LazyLoadProps {
  children: ReactNode;
  threshold?: number;
  placeholder?: ReactNode;
}

export default function LazyLoad({ 
  children, 
  threshold = 0.1, 
  placeholder = <div className="min-h-[100px] animate-pulse bg-gray-800/30 rounded-lg" />
}: LazyLoadProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exit early if server-side or already visible
    if (typeof window === 'undefined' || !ref.current || isVisible) return;
    
    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      // Fallback for browsers without IntersectionObserver
      setIsVisible(true);
      return;
    }
    
    const element = ref.current;
    
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry?.isIntersecting && !isVisible) {
        setIsVisible(true);
      }
    }
    
    const observer = new IntersectionObserver(
      handleIntersection,
      { 
        threshold,
        rootMargin: '200px 0px', // Reduced margin for better performance
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, isVisible]);

  // Apply minimal transforms and avoid unnecessary style props
  return (
    <div ref={ref}>
      {isVisible ? children : placeholder}
    </div>
  );
} 