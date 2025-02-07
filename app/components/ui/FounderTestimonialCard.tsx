import React from 'react'
import Image from 'next/image'

interface FounderTestimonialCardProps {
  name: string
  role: string
  company: string
  testimonial: string
  avatarUrl: string
  logoUrl: string
}

const FounderTestimonialCard = ({
  name,
  role,
  company,
  testimonial,
  avatarUrl,
  logoUrl
}: FounderTestimonialCardProps) => {
  return (
    <div className="group relative">
      {/* Base glass background */}
      <div className="absolute inset-0 rounded-[24px] bg-[#0A0A0B]/80 backdrop-blur-xl" />
      
      {/* Default border with hover gradient */}
      <div className="absolute inset-0 rounded-[24px] p-[1px] transition-all duration-300 bg-white/[0.08] group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-400">
        <div className="h-full w-full rounded-[24px] bg-[#0A0A0B]" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        <p className="text-2xl text-white/90 mb-8 font-light leading-relaxed">"{testimonial}"</p>
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 transition-colors duration-300 border-white/20 group-hover:border-primary-500">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-xl font-medium text-white">{name}</h4>
            <p className="text-white/60">{role} - {company}</p>
          </div>
          <div className="ml-auto">
            <Image
              src={logoUrl}
              alt={company}
              width={120}
              height={40}
              className="opacity-80"
            />
          </div>
        </div>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 
                    transition-all duration-500 bg-gradient-to-r from-primary-500/5 to-primary-400/5" />
    </div>
  )
}

export default FounderTestimonialCard 