import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ClockButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  href?: string
  className?: string
}

const ClockButton = ({ 
  children, 
  href, 
  className,
  ...props 
}: ClockButtonProps) => {
  const buttonClasses = cn(
    'relative inline-flex items-center justify-center',
    'w-auto min-w-[120px] h-[40px]',
    'bg-black text-white',
    'border-none rounded-lg',
    'cursor-pointer',
    'px-6 py-3',
    'isolate',
    'before:content-[""]',
    'before:absolute',
    'before:-inset-1',
    'before:m-auto',
    'before:w-[calc(100%+8px)]',
    'before:h-[48px]',
    'before:rounded-[10px]',
    'before:bg-gradient-to-r',
    'before:from-[#e81cff]',
    'before:to-[#40c9ff]',
    'before:-z-10',
    'before:transition-transform',
    'before:duration-[2000ms]',
    'before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]',
    'after:content-[""]',
    'after:absolute',
    'after:-inset-1',
    'after:rounded-[10px]',
    'after:bg-gradient-to-r',
    'after:from-[#fc00ff]',
    'after:to-[#00dbde]',
    'after:-z-20',
    'after:opacity-75',
    'after:transition-all',
    'after:duration-300',
    'after:blur-[20px]',
    'hover:after:blur-[30px]',
    'hover:before:rotate-180',
    'active:before:scale-75',
    className
  )

  const ButtonContent = () => (
    <span className="relative z-10">
      {children}
    </span>
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

export default ClockButton 