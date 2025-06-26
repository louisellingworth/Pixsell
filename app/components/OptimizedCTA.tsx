import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { trackButtonClick } from '../lib/analytics'

interface OptimizedCTAProps {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  urgency?: boolean
  className?: string
  onClick?: () => void
  external?: boolean
}

export default function OptimizedCTA({ 
  text, 
  href, 
  variant = 'primary',
  size = 'md',
  urgency = false,
  className = '',
  onClick,
  external = false
}: OptimizedCTAProps) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      trackButtonClick(text, window.location.pathname)
    }
    onClick?.()
  }

  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30',
    outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const urgencyClasses = urgency ? 'animate-pulse' : ''

  const Component = external ? 'a' : Link
  const props = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href }

  return (
    <Component
      {...props}
      onClick={handleClick}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${urgencyClasses}
        ${className}
      `}
    >
      {text}
      <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Component>
  )
} 