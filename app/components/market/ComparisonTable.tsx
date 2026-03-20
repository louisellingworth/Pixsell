'use client'

import { motion } from 'framer-motion'
import { CheckIcon, XMarkIcon, MinusIcon } from '@heroicons/react/24/outline'
import { ComparisonOption, SectionProps } from './types'

const comparisonData: ComparisonOption[] = [
  {
    name: 'EightSix Games',
    subtitle: '(Developer-First Partnership)',
    icon: '🚀',
    features: [
      { 
        label: 'Technical Freedom', 
        value: 'Full Control', 
        status: 'best', 
        detail: 'Keep complete control of your codebase and technical decisions. We handle all China-specific requirements while you focus on your game.' 
      },
      { 
        label: 'Market Entry', 
        value: 'Streamlined', 
        status: 'best', 
        detail: 'Fast, hassle-free entry to the Chinese market with our proven co-publishing model and established partnerships.' 
      },
      { 
        label: 'Revenue Model', 
        value: 'Performance-Based', 
        status: 'best', 
        detail: 'Fair, transparent revenue sharing with no upfront costs. Your success is our success.' 
      },
      { 
        label: 'Local Support', 
        value: 'Full Service', 
        status: 'best', 
        detail: 'Comprehensive local marketing, community management, and technical support tailored to the Chinese market.' 
      },
      { 
        label: 'Best For', 
        value: 'Growth-Focused Devs', 
        status: 'best', 
        detail: 'Perfect for developers of any size wanting efficient China market entry with maximum control and minimal risk.' 
      }
    ],
    highlight: true
  },
  {
    name: 'Traditional Publisher',
    subtitle: '(Full Publishing Model)',
    icon: '🏢',
    features: [
      { 
        label: 'Technical Freedom', 
        value: 'Limited Control', 
        status: 'bad', 
        detail: 'Publishers typically require source code access and can make significant changes to your game without your approval.' 
      },
      { 
        label: 'Market Entry', 
        value: 'Complex', 
        status: 'neutral', 
        detail: 'Can be slow and bureaucratic, often requiring multiple rounds of approvals and technical changes.' 
      },
      { 
        label: 'Revenue Model', 
        value: 'Revenue Split', 
        status: 'neutral', 
        detail: 'Standard revenue share but often with high fees, minimum guarantees, and marketing expenses deducted from your share.' 
      },
      { 
        label: 'Local Support', 
        value: 'Varies', 
        status: 'neutral', 
        detail: 'Quality varies widely; smaller developers often receive less attention than AAA titles.' 
      },
      { 
        label: 'Best For', 
        value: 'AAA Developers', 
        status: 'neutral', 
        detail: 'Larger studios with significant resources who can afford to lose some control and revenue.' 
      }
    ],
    highlight: false
  },
  {
    name: 'Direct Publishing',
    subtitle: '(On Your Own)',
    icon: '🧗',
    features: [
      { 
        label: 'Technical Freedom', 
        value: 'Complete', 
        status: 'best', 
        detail: 'Total control of your game and implementation, but you are responsible for all localization and compliance challenges.' 
      },
      { 
        label: 'Market Entry', 
        value: 'Extremely Difficult', 
        status: 'bad', 
        detail: 'Virtually impossible without a Chinese business entity, local staff, and regulatory connections.' 
      },
      { 
        label: 'Revenue Model', 
        value: 'Keep 100%', 
        status: 'best', 
        detail: 'Keep all revenue—if you can successfully navigate the complex payment, tax, and regulatory challenges.' 
      },
      { 
        label: 'Local Support', 
        value: 'None', 
        status: 'bad', 
        detail: 'No local support, requiring you to build your own China team for marketing, community management, and support.' 
      },
      { 
        label: 'Best For', 
        value: 'No One', 
        status: 'bad', 
        detail: 'Even large companies struggle with direct entry into China. Not recommended for most developers.' 
      }
    ],
    highlight: false
  }
];

const StatusIcon = ({ status }: { status: 'best' | 'neutral' | 'bad' }) => {
  switch (status) {
    case 'best':
      return <CheckIcon className="w-5 h-5 text-green-400" />
    case 'neutral':
      return <MinusIcon className="w-5 h-5 text-yellow-400" />
    case 'bad':
      return <XMarkIcon className="w-5 h-5 text-red-400" />
    default:
      return null
  }
}

export const ComparisonTable = ({ registerSectionRef }: SectionProps) => {
  return (
    <section 
      ref={registerSectionRef('comparison')}
      id="comparison"
      className="relative z-10 py-24 px-4 sm:px-6 lg:px-8 bg-black/40"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simplified <span className="heading-gradient">Comparison</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how EightSix Games compares to traditional publishing options for Western developers entering China
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisonData.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, y: 36, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.3, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-xl p-6 ${option.highlight ? 'bg-gradient-to-br from-purple-900/70 to-pink-900/70 border-2 border-purple-500/50' : 'bg-white/5 border border-white/10'}`}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{option.icon}</span>
                <div>
                  <h3 className="text-xl font-bold">{option.name}</h3>
                  <p className="text-sm text-gray-400">{option.subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {option.features.map((feature) => (
                  <div 
                    key={feature.label} 
                    className="p-3 rounded-lg bg-black/20"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{feature.label}</span>
                      <StatusIcon status={feature.status} />
                    </div>
                    <div className="text-lg font-semibold mb-1">{feature.value}</div>
                    <p className="text-xs text-gray-400">{feature.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 