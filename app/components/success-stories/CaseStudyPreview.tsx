import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../ui/Card'

interface CaseStudyPreviewProps {
  title: string
  description: string
  company: string
  metrics: {
    label: string
    value: string
  }[]
  imageUrl: string
  href: string
}

export default function CaseStudyPreview({
  title,
  description,
  company,
  metrics,
  imageUrl,
  href
}: CaseStudyPreviewProps) {
  return (
    <Link href={href}>
      <Card className="group h-full hover:border-primary-500/50 transition-all duration-300">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-xl">
          <Image
            src={imageUrl}
            alt={`${company} case study`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-white/70 mb-6">
            {description}
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-white/60">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  )
} 