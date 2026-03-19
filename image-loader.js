// Custom image loader for CDN optimization
export default function imageLoader({ src, width, quality }) {
  // CDN base URL
  const cdnBase = 'https://cdn.pixsellgames.com';
  
  // If the image is already a full URL, return as is
  if (src.startsWith('http')) {
    return src;
  }
  
  // For local images, prepend CDN base URL
  const cdnUrl = `${cdnBase}${src}`;
  
  // Add width and quality parameters for optimization
  const params = new URLSearchParams();
  if (width) params.append('w', width.toString());
  if (quality) params.append('q', quality.toString());
  
  return params.toString() ? `${cdnUrl}?${params.toString()}` : cdnUrl;
} 