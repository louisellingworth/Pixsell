'use client'

import React from 'react'
import Image from 'next/image'
import { performanceConfig } from '../lib/config'
import { cn } from '../utils/cn'

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
}) => {
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
    <picture>
      {!isExternalUrl && (
        <source
          srcSet={getWebPSrc(src)}
          type="image/webp"
        />
      )}
      <source
        srcSet={src}
        type={src.match(/\.jpe?g$/i) ? 'image/jpeg' : 
               src.match(/\.png$/i) ? 'image/png' : 
               src.match(/\.gif$/i) ? 'image/gif' : 'image/jpeg'}
      />
      <Image
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
        priority={priority}
        style={{
          objectFit,
          objectPosition,
        }}
      />
    </picture>
  );
};

export default OptimizedImage; 