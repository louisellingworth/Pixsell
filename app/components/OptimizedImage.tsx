'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { cn } from '@/utils/cn'

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  responsive?: boolean;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  responsive = true,
  loading = 'lazy',
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Generate WebP version path
  const getWebPSrc = (originalSrc: string) => {
    if (!originalSrc) return originalSrc;
    
    // Check if it's already a WebP
    if (originalSrc.endsWith('.webp')) return originalSrc;
    
    // Check if it's a data URL or external URL
    if (originalSrc.startsWith('data:') || originalSrc.startsWith('http')) {
      return originalSrc;
    }
    
    // Generate WebP path
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    
    return originalSrc.substring(0, lastDotIndex) + '.webp';
  };

  // Generate responsive srcset for WebP
  const getResponsiveSrcSet = (baseSrc: string) => {
    if (!responsive || baseSrc.startsWith('data:') || baseSrc.startsWith('http')) {
      return undefined;
    }

    const webpSrc = getWebPSrc(baseSrc);
    const lastDotIndex = webpSrc.lastIndexOf('.');
    const baseName = webpSrc.substring(0, lastDotIndex);
    const extension = webpSrc.substring(lastDotIndex);

    // Generate responsive sizes
    const sizes = [320, 640, 1024, 1920];
    const srcSet = sizes
      .map(size => {
        const responsiveSrc = `${baseName}-${size}w${extension}`;
        return `${responsiveSrc} ${size}w`;
      })
      .join(', ');

    return srcSet;
  };

  useEffect(() => {
    // Check if WebP is supported
    const checkWebPSupport = async () => {
      try {
        const webpSrc = getWebPSrc(src);
        if (webpSrc !== src) {
          // Test if WebP image exists by trying to load it
          const img = new window.Image();
          img.onload = () => {
            setImageSrc(webpSrc);
          };
          img.onerror = () => {
            // WebP not available, keep original
            setImageSrc(src);
          };
          img.src = webpSrc;
        }
      } catch (error) {
        // Fallback to original
        setImageSrc(src);
      }
    };

    checkWebPSupport();
  }, [src]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    // Fallback to original image if WebP fails
    if (imageSrc !== src) {
      setImageSrc(src);
    }
  };

  // Generate responsive sizes string
  const getResponsiveSizes = () => {
    if (!responsive) return sizes;
    
    return '(max-width: 320px) 320px, (max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px';
  };

  const commonProps = {
    src: imageSrc,
    alt,
    className: cn(
      'transition-opacity duration-300',
      isLoading && 'opacity-0',
      hasError && 'opacity-50',
      className
    ),
    priority,
    quality,
    placeholder,
    blurDataURL,
    loading,
    onLoad: handleLoad,
    onError: handleError,
    sizes: getResponsiveSizes(),
  };

  if (fill) {
    return (
      <div className={cn('relative', className)}>
        <Image
          {...commonProps}
          fill
          style={{ objectFit: 'cover' }}
        />
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <Image
        {...commonProps}
        width={width}
        height={height}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </div>
  );
};

export default OptimizedImage; 