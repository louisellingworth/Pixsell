'use client'

import { motion } from 'framer-motion'

type ComparisonStatus = 'best' | 'neutral' | 'bad'

interface ComparisonFeature {
  label: string
  value: string
  status: ComparisonStatus
  detail: string
}

interface ComparisonOption {
  name: string
  subtitle: string
  icon: string
  features: ComparisonFeature[]
  highlight: boolean
}

const comparisonData: ComparisonOption[] = [
  {
    name: 'Pixsell Games',
    subtitle: '(Developer-First Partnership)',
    icon: '🚀',
    features: [
      { label: 'Technical Freedom', value: 'Full Control', status: 'best', detail: 'Keep complete control of your codebase and technical decisions. We handle all China-specific requirements while you focus on your game.' },
      { label: 'Market Entry', value: 'Streamlined', status: 'best', detail: 'Fast, hassle-free entry to the Chinese market with our proven co-publishing model and established partnerships.' },
      { label: 'Revenue Model', value: 'Performance-Based', status: 'best', detail: 'Fair, transparent revenue sharing with no upfront costs. Your success is our success.' },
      { label: 'Local Support', value: 'Full Service', status: 'best', detail: 'Comprehensive local marketing, community management, and technical support tailored to the Chinese market.' },
      { label: 'Best For', value: 'Growth-Focused Devs', status: 'best', detail: 'Perfect for developers of any size wanting efficient China market entry with maximum control and minimal risk.' }
    ],
    highlight: true
  },
  {
    name: 'Self-Publishing',
    subtitle: '(DIY Approach)',
    icon: '⚙️',
    features: [
      { label: 'Technical Freedom', value: 'Complete', status: 'best', detail: 'Full control but requires significant investment in China-specific features and infrastructure.' },
      { label: 'Market Entry', value: 'Complex', status: 'bad', detail: 'Time-consuming process requiring deep market knowledge and local business relationships.' },
      { label: 'Revenue Model', value: 'Direct', status: 'neutral', detail: 'Keep all revenue but bear all costs and risks of market entry and operations.' },
      { label: 'Local Support', value: 'None', status: 'bad', detail: 'Must build and maintain all local operations and support infrastructure from scratch.' },
      { label: 'Best For', value: 'Large Studios', status: 'neutral', detail: 'Only viable for large teams with extensive resources and existing China market experience.' }
    ],
    highlight: false
  },
  {
    name: 'Traditional Publishing',
    subtitle: '(Full Handover)',
    icon: '📋',
    features: [
      { label: 'Technical Freedom', value: 'Limited', status: 'bad', detail: 'Publisher often requires significant technical changes and maintains control over your game.' },
      { label: 'Market Entry', value: 'Slow', status: 'neutral', detail: 'Long negotiation process with traditional publishers and complex contracts.' },
      { label: 'Revenue Model', value: 'Publisher-Favored', status: 'bad', detail: 'Traditional publishing deals often take larger revenue share and may include IP rights.' },
      { label: 'Local Support', value: 'Variable', status: 'neutral', detail: 'Support quality varies by publisher and sometimes prioritise their interests over developers.' },
      { label: 'Best For', value: 'AAA Studios', status: 'neutral', detail: 'Suited for large studios willing to give up control and accept traditional publishing terms.' }
    ],
    highlight: false
  }
]

const ComparisonCard: React.FC<{ option: ComparisonOption }> = ({ option }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`rounded-2xl p-6 ${
        option.highlight
          ? 'border-2 border-blue-500 bg-white shadow-lg'
          : 'border border-gray-200 bg-gray-50'
      }`}
    >
      <div className="flex items-center gap-4">
        <span className="text-3xl">{option.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{option.name}</h3>
          <p className="text-sm text-gray-500">{option.subtitle}</p>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        {option.features.map((feature) => (
          <div key={feature.label} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">{feature.label}</span>
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${
                  feature.status === 'best'
                    ? 'bg-green-100 text-green-800'
                    : feature.status === 'neutral'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {feature.value}
              </span>
            </div>
            <p className="text-sm text-gray-600">{feature.detail}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Comparison() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">Compare Options</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Choose the Right Path to China
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          See how different approaches to entering the Chinese market compare, and why Pixsell Games offers the best balance of control, support, and success potential.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
        {comparisonData.map((option) => (
          <ComparisonCard key={option.name} option={option} />
        ))}
      </div>
    </div>
  )
} 