'use client'

import { motion } from 'framer-motion'
import { ChartBarIcon, ShieldCheckIcon, UserGroupIcon, CogIcon, CheckCircleIcon, RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface Feature {
  title: string
  description: string
  icon: string
  stats: {
    value: string
    label: string
  }
}

export const uniqueFeatures: Feature[] = [
  {
    title: 'Industry-Leading Expertise',
    description: 'Our team has deep knowledge of the Chinese gaming ecosystem, helping Western developers navigate market challenges with confidence.',
    icon: 'trophy',
    stats: {
      value: 'Expert',
      label: 'Market Knowledge',
    },
  },
  {
    title: 'Tailored Market Strategies',
    description: 'Every game is unique, and so is our approach. We design customised marketing and engagement plans to maximise impact.',
    icon: 'target',
    stats: {
      value: '100%',
      label: 'Custom Plans',
    },
  },
  {
    title: 'Seamless Market Entry',
    description: 'From compliance to marketing and publisher negotiations, we handle everything — so you can focus on making great games.',
    icon: 'shield',
    stats: {
      value: '0',
      label: 'Hassle',
    },
  },
  {
    title: 'Data-Driven Growth',
    description: 'We continously look to optimise and improve campaigns, boost visibility, and drive revenue. Our approach ensures regular performance improvements.',
    icon: 'chart',
    stats: {
      value: 'Smart',
      label: 'Analytics',
    },
  },
  {
    title: 'No Risk, No Hassle',
    description: 'We work on a transparent revenue-share model, aligning our success with yours. No hidden fees, no restrictive publishing contracts — just results.',
    icon: 'check',
    stats: {
      value: '0%',
      label: 'Upfront Cost',
    },
  },
  {
    title: 'Built for Success',
    description: "Pixsell Games is founded with a clear mission: to help Western games succeed in China through strategic partnerships and market expertise.",
    icon: 'star',
    stats: {
      value: 'Ready',
      label: 'To Launch',
    },
  },
]

interface FeatureCardProps {
  feature: Feature
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy': return <RocketLaunchIcon className="h-6 w-6" />
      case 'target': return <SparklesIcon className="h-6 w-6" />
      case 'shield': return <ShieldCheckIcon className="h-6 w-6" />
      case 'chart': return <ChartBarIcon className="h-6 w-6" />
      case 'check': return <CheckCircleIcon className="h-6 w-6" />
      case 'star': return <UserGroupIcon className="h-6 w-6" />
      default: return <CogIcon className="h-6 w-6" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
          {getIcon(feature.icon)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{feature.stats.value} • {feature.stats.label}</p>
        </div>
      </div>
      <p className="text-sm text-gray-600">{feature.description}</p>
    </motion.div>
  )
}

export default function Features() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Pixsell Games</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Gateway to China's Gaming Market
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We combine deep market expertise with a developer-first approach to help you succeed in China.
        </p>
      </div>
      <div className="mx-auto mt-16 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {uniqueFeatures.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
} 