interface LoadingSkeletonProps {
  className?: string
  lines?: number
  variant?: 'text' | 'card' | 'image'
}

export default function LoadingSkeleton({ 
  className = '', 
  lines = 3, 
  variant = 'text' 
}: LoadingSkeletonProps) {
  if (variant === 'card') {
    return (
      <div className={`animate-pulse space-y-4 ${className}`}>
        <div className="h-48 bg-gray-700 rounded-lg"></div>
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        <div className="h-4 bg-gray-700 rounded w-2/3"></div>
      </div>
    )
  }

  if (variant === 'image') {
    return (
      <div className={`animate-pulse ${className}`}>
        <div className="h-full w-full bg-gray-700 rounded-lg"></div>
      </div>
    )
  }

  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div 
          key={index}
          className={`h-4 bg-gray-700 rounded ${
            index === 0 ? 'w-3/4' : 
            index === lines - 1 ? 'w-1/2' : 'w-2/3'
          }`}
        />
      ))}
    </div>
  )
} 