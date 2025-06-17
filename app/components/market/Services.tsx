'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChartBarIcon, UserGroupIcon, CogIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface Service {
  title: string
  icon: typeof ChartBarIcon
  href: string
  description: string
  primaryFeatures: string[]
  secondaryFeatures: string[]
  stats: {
    value: string
    label: string
  }
}

const services: Service[] = [
  {
    title: 'Strategic Partner Matching',
    icon: UserGroupIcon,
    href: '/services/co-publishing',
    description: 'We facilitate strong partnerships between Western developers and Chinese co-publishers, ensuring mutual success through optimal matching.',
    primaryFeatures: [
      'Partner qualification',
      'Strategic alignment',
      'Value optimisation'
    ],
    secondaryFeatures: [
      'Cultural bridging',
      'Fair deal terms',
      'Growth planning'
    ],
    stats: {
      value: 'Strategic',
      label: 'Matching'
    }
  },
  {
    title: 'Localisation',
    icon: SparklesIcon,
    href: '/services/localisation',
    description: 'Transform your game for Chinese players with culturally-aware translations, UI adaptations, and market-specific optimisations.',
    primaryFeatures: [
      'Cultural adaptation',
      'UI/UX localisation',
      'Content optimisation'
    ],
    secondaryFeatures: [
      'Voice-over support',
      'Cultural consulting',
      'Market testing'
    ],
    stats: {
      value: 'Perfect',
      label: 'Adaptation'
    }
  },
  {
    title: 'Growth & Marketing',
    icon: ChartBarIcon,
    href: '/services/marketing',
    description: 'Create impactful marketing strategies that resonate with Chinese players and drive sustainable growth.',
    primaryFeatures: [
      'Market positioning',
      'Audience building',
      'Growth strategy'
    ],
    secondaryFeatures: [
      'Content strategy',
      'Performance tracking',
      'ROI optimisation'
    ],
    stats: {
      value: 'Growth',
      label: 'Driven'
    }
  },
  {
    title: 'Partnership Success',
    icon: CogIcon,
    href: '/services/partnership',
    description: 'Ensure long-term success through data-driven optimisation and strong partnership management.',
    primaryFeatures: [
      'Performance tracking',
      'Partnership support',
      'Success metrics'
    ],
    secondaryFeatures: [
      'Regular reviews',
      'Growth planning',
      'Strategic support'
    ],
    stats: {
      value: 'Success',
      label: 'Focused'
    }
  }
]

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const Icon = service.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{service.stats.value} • {service.stats.label}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-600">{service.description}</p>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium text-gray-900">Primary Features</h4>
          <ul className="mt-2 space-y-1">
            {service.primaryFeatures.map((feature) => (
              <li key={feature} className="text-sm text-gray-600">• {feature}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-900">Additional Benefits</h4>
          <ul className="mt-2 space-y-1">
            {service.secondaryFeatures.map((feature) => (
              <li key={feature} className="text-sm text-gray-600">• {feature}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-auto pt-4">
        <Link
          href={service.href}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          Learn more
          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">Our Services</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Comprehensive Support for Your China Journey
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          From market entry to ongoing growth, we provide end-to-end services to ensure your success in the Chinese gaming market.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </div>
  )
} 