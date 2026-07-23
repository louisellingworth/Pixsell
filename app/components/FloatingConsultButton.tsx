'use client'

import Link from 'next/link'
import { CalendarIcon } from '@heroicons/react/24/outline'

export default function FloatingConsultButton() {
  return (
    <Link
      href="/contact"
      className="group relative flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg transition-all hover:bg-purple-500 hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
      style={{ 
        transform: 'translateZ(0)',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
    >
      <CalendarIcon className="h-5 w-5" aria-hidden="true" />
      <span>Book a Consult</span>
      <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
    </Link>
  )
} 