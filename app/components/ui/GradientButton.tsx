import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  className?: string
  variant?: 'default' | 'wide' | 'compact'
  showArrow?: boolean
}

const GradientButton = ({ 
  children, 
  href, 
  className,
  variant = 'default',
  showArrow = true,
  ...props 
}: GradientButtonProps) => {
  const buttonClasses = cn(
    'group relative inline-flex items-center justify-center gap-2',
    variant === 'compact' ? 'px-4 py-2 text-sm' : 'px-8 py-3 text-[16px]',
    'font-medium rounded-lg',
    'bg-[#111111] hover:bg-[#181818] transition-all duration-200',
    'border border-primary-400/30 hover:border-primary-300/50',
    variant === 'wide' && 'w-full',
    className
  )

  const ButtonContent = () => (
    <>
      <span className="relative text-primary-200">
        {children}
      </span>
      {showArrow && (
        <ArrowRightIcon className="w-4 h-4 text-primary-400 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <ButtonContent />
      </Link>
    )
  }

  return (
    <button {...props} className={buttonClasses}>
      <ButtonContent />
    </button>
  )
}

export default GradientButton 
