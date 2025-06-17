import React, { useState, ReactNode } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface LazyLoadedSectionProps {
  children: ReactNode;
  placeholder?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  id?: string;
  triggerOnce?: boolean;
  delayMs?: number;
  fadeIn?: boolean;
  showPlaceholderUntilLoad?: boolean;
}

/**
 * LazyLoadedSection defers rendering its children until it's near the viewport.
 * This improves performance by reducing the initial page load time and deferring
 * the rendering of off-screen content until needed.
 */
const LazyLoadedSection: React.FC<LazyLoadedSectionProps> = ({
  children,
  placeholder,
  rootMargin = '200px 0px',
  threshold = 0.1,
  className = '',
  id,
  triggerOnce = true,
  delayMs = 0,
  fadeIn = true,
  showPlaceholderUntilLoad = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, isInView] = useIntersectionObserver<HTMLDivElement>({
    rootMargin,
    threshold,
    triggerOnce,
  });
  
  // Load content when it comes into view (with optional delay)
  React.useEffect(() => {
    if (isInView && !isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, delayMs);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, isLoaded, delayMs]);
  
  // Default placeholder if none provided
  const defaultPlaceholder = (
    <div className="w-full h-40 bg-gray-800/50 animate-pulse rounded-lg" />
  );

  // Determine what to render
  const renderContent = () => {
    if (!isLoaded) {
      return placeholder || defaultPlaceholder;
    }
    
    if (fadeIn) {
      return (
        <div 
          className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={!isLoaded}
        >
          {children}
        </div>
      );
    }
    
    return children;
  };

  return (
    <div 
      ref={ref} 
      className={className}
      id={id}
      data-loaded={isLoaded}
    >
      {/* When showPlaceholderUntilLoad is false, we render both and handle visibility with CSS */}
      {showPlaceholderUntilLoad ? (
        renderContent()
      ) : (
        <>
          <div 
            className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}
            aria-hidden={isLoaded}
          >
            {placeholder || defaultPlaceholder}
          </div>
          <div 
            className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}
            aria-hidden={!isLoaded}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default LazyLoadedSection; 