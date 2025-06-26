'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { performanceConfig } from '../lib/config'
import { cn } from '../utils/cn'

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  width,
  height
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Generate the WebP source path
  const getWebPSrc = (originalSrc: string) => {
    // Handle paths that already have a query string
    const [path, query] = originalSrc.split('?');
    const webpPath = path.replace(/\.(jpe?g|png|gif)$/i, '.webp');
    return query ? `${webpPath}?${query}` : webpPath;
  };

  // Check if the path is a URL or local
  const isExternalUrl = src.startsWith('http') || src.startsWith('//');
  
  // If it's an external URL, we'll use the original image
  // If it's a local path, use our optimized WebP image
  const imageSrc = isExternalUrl ? src : getWebPSrc(src);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        sizes={sizes}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  );
} 