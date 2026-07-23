import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/utils/cn'
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
    'bg-white text-black hover:bg-gray-200 transition-colors duration-200',
    variant === 'wide' && 'w-full',
    className
  )

  const ButtonContent = () => (
    <>
      <span className="relative">
        {children}
      </span>
      {showArrow && (
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
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
