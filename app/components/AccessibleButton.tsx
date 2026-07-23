import { forwardRef } from 'react'
import { cn } from '../utils/cn'

interface AccessibleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const AccessibleButton = forwardRef<HTMLButtonElement, AccessibleButtonProps>(({
  children,
  onClick,
  className = '',
  disabled = false,
  ariaLabel,
  type = 'button',
  variant = 'primary',
  size = 'md'
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-violet-600 text-white hover:bg-violet-500',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    outline: 'border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/5'
  }
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm min-h-[36px] min-w-[36px]',
    md: 'px-4 py-2 text-base min-h-[44px] min-w-[44px]',
    lg: 'px-6 py-3 text-lg min-h-[48px] min-w-[48px]'
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        'touch-target',
        className
      )}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
})

AccessibleButton.displayName = 'AccessibleButton'

export default AccessibleButton 