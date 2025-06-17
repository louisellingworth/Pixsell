'use client'

import { motion } from 'framer-motion'

interface ProcessStep {
  when: string
  what: string
  details: string
}

const processSteps: ProcessStep[] = [
  {
    when: 'Months 1-2',
    what: 'Strategic Assessment',
    details: "• Initial consultation and market opportunity analysis.\n• Evaluate game potential and identify optimal partnership models.\n• Develop preliminary market entry strategy."
  },
  {
    when: 'Months 3-5',
    what: 'Partnership Development',
    details: "• Connect with qualified Chinese co-publishers.\n• Facilitate partnership discussions and strategic alignment.\n• Structure mutually beneficial collaboration frameworks."
  },
  {
    when: 'Months 5-7',
    what: 'Market Strategy',
    details: "• Collaborative go-to-market planning with partners.\n• Market positioning and audience strategy development.\n• Localisation and cultural adaptation planning."
  },
  {
    when: 'Months 8-10',
    what: 'Launch Preparation',
    details: "• Coordinated marketing campaign development.\n• Community building on key platforms.\n• Performance tracking framework setup."
  },
  {
    when: 'Months 11-12',
    what: 'Market Entry',
    details: "• Orchestrated Steam Global launch.\n• Active performance monitoring and optimisation.\n• Rapid response to market feedback."
  },
  {
    when: 'Months 12+',
    what: 'Growth & Optimisation',
    details: "• Ongoing partnership support and optimiation.\n• Data-driven growth strategy implementation.\n• Long-term success planning and execution."
  }
]

const ProcessStepCard: React.FC<{ step: ProcessStep; index: number }> = ({ step, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 font-semibold">
          {index + 1}
        </div>
        <div>
          <p className="text-sm font-medium text-blue-600">{step.when}</p>
          <h3 className="text-lg font-semibold text-gray-900">{step.what}</h3>
        </div>
      </div>
      
      <div className="space-y-2">
        {step.details.split('\n').map((detail, i) => (
          <p key={i} className="text-sm text-gray-600">{detail}</p>
        ))}
      </div>
    </motion.div>
  )
}

export default function ProcessSteps() {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold leading-7 text-blue-600">Our Process</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your Journey to China Market Success
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          A structured, proven approach to help you navigate the complexities of entering and succeeding in the Chinese gaming market.
        </p>
      </div>
      <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <ProcessStepCard key={step.when} step={step} index={index} />
        ))}
      </div>
    </div>
  )
} 