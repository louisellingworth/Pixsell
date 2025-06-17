import Card from './Card'
import { motion } from 'framer-motion'

interface WarningBannerProps {
  label: string
  message: string
  className?: string
}

export default function WarningBanner({ label, message, className = '' }: WarningBannerProps) {
  return (
    <motion.div 
      className={`z-50 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="rounded-xl overflow-hidden border border-amber-500/10">
        <div className="py-2 px-3 bg-gradient-to-r from-amber-900/5 to-amber-900/10">
          <div className="flex items-center justify-center mb-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-300/80 animate-pulse mr-1.5" />
            <span className="text-amber-200/90 font-medium tracking-wide uppercase text-xs">{label}</span>
          </div>
          <p className="text-amber-100/70 leading-snug text-center text-sm">
            {message}
          </p>
        </div>
      </div>
    </motion.div>
  )
} 
