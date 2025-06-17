'use client';

/**
 * Utility to get the appropriate image size based on device
 * @param mobileSrc Source for mobile devices
 * @param desktopSrc Source for desktop devices
 * @param isMobile Boolean indicating if the current device is mobile
 * @returns The appropriate image source
 */
export function getResponsiveImageSrc(mobileSrc: string, desktopSrc: string, isMobile: boolean): string {
  return isMobile ? mobileSrc : desktopSrc;
}

/**
 * Utility to get image dimensions based on device
 * @param options Configuration options
 * @returns Object with width and height
 */
export function getResponsiveImageDimensions({
  mobileWidth = 640,
  mobileHeight,
  desktopWidth = 1200,
  desktopHeight,
  isMobile = false,
  aspectRatio = 16/9
}: {
  mobileWidth?: number;
  mobileHeight?: number;
  desktopWidth?: number;
  desktopHeight?: number;
  isMobile?: boolean;
  aspectRatio?: number;
}) {
  const width = isMobile ? mobileWidth : desktopWidth;
  
  // Calculate height based on provided height or aspect ratio
  let height;
  if (isMobile && mobileHeight) {
    height = mobileHeight;
  } else if (!isMobile && desktopHeight) {
    height = desktopHeight;
  } else {
    // Calculate height based on aspect ratio
    height = Math.round(width / aspectRatio);
  }
  
  return { width, height };
}

/**
 * Utility to generate srcSet for responsive images
 * @param basePath Base path of the image
 * @param widths Array of widths to generate
 * @param extension File extension
 * @returns srcSet string
 */
export function generateSrcSet(basePath: string, widths: number[] = [640, 750, 828, 1080, 1200, 1920], extension: string = 'jpg'): string {
  return widths
    .map(width => `${basePath}-${width}.${extension} ${width}w`)
    .join(', ');
}

/**
 * Utility to generate sizes attribute for responsive images
 * @param sizes Array of size configurations
 * @returns sizes string
 */
export function generateSizes(sizes: { breakpoint: string; width: string }[] = [
  { breakpoint: '640px', width: '100vw' },
  { breakpoint: '1024px', width: '50vw' },
  { breakpoint: '1280px', width: '33vw' }
]): string {
  return sizes
    .map(size => `(max-width: ${size.breakpoint}) ${size.width}`)
    .join(', ') + ', 100vw';
} 