'use client'

import { motion } from 'framer-motion'
import { TrophyIcon, AdjustmentsHorizontalIcon, ShieldCheckIcon, ChartBarIcon, CheckCircleIcon, SparklesIcon } from '@heroicons/react/24/outline'

type FeatureProps = {
  title: string
  description: string
  icon: string
  stats: {
    value: string
    label: string
  }
}

const uniqueFeatures = [
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
    description: 'From compliance to marketing and publisher negotiations, we handle everything, so you can focus on making great games.',
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
    description: 'We work on a transparent revenue-share model, aligning our success with yours. No hidden fees, no restrictive publishing contracts, just results.',
    icon: 'check',
    stats: {
      value: '0%',
      label: 'Upfront Cost',
    },
  },
  {
    title: 'Built for Success',
    description: "EightSix Games is founded with a clear mission: to help Western games succeed in China through strategic partnerships and market expertise.",
    icon: 'star',
    stats: {
      value: 'Ready',
      label: 'To Launch',
    },
  },
] as const

const FeatureIcon = ({ icon }: { icon: string }) => {
  switch (icon) {
    case 'trophy':
      return <TrophyIcon className="w-8 h-8 text-purple-400" />
    case 'target':
      return <AdjustmentsHorizontalIcon className="w-8 h-8 text-violet-400" />
    case 'shield':
      return <ShieldCheckIcon className="w-8 h-8 text-blue-400" />
    case 'chart':
      return <ChartBarIcon className="w-8 h-8 text-green-400" />
    case 'check':
      return <CheckCircleIcon className="w-8 h-8 text-amber-400" />
    case 'star':
      return <SparklesIcon className="w-8 h-8 text-red-400" />
    default:
      return <SparklesIcon className="w-8 h-8 text-purple-400" />
  }
}

const FeatureCard = ({ feature }: { feature: typeof uniqueFeatures[number] }) => {
  return (
    <div className="feature-card h-full">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-purple-500/20 text-purple-400 mb-5 transform-gpu">
          <FeatureIcon icon={feature.icon} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
        <p className="text-gray-300 text-base mb-0">{feature.description}</p>
      </div>
      
      <div className="mt-6 pt-6 border-t border-white/10">
        <div className="text-2xl font-bold text-white">{feature.stats.value}</div>
        <div className="text-sm text-gray-400">{feature.stats.label}</div>
      </div>
    </div>
  )
}

interface UniqueFeaturesProps {
  registerSectionRef: (section: string) => (ref: HTMLDivElement | null) => void
}

export const UniqueFeatures = ({ registerSectionRef }: UniqueFeaturesProps) => {
  return (
    <section
      id="benefits"
      ref={registerSectionRef('benefits')}
      className="section container-wide relative z-10"
    >
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 2.4, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="section-title"
        >
          Why EightSix Games for China?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px 0px" }}
          transition={{ duration: 2.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="section-subtitle"
        >
          Our specialized knowledge and experience create a bridge between Western developers and China's lucrative gaming market.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {uniqueFeatures.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 32, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 2.3, delay: 0.15 * (index + 2), ease: [0.16, 1, 0.3, 1] }}
          >
            <FeatureCard feature={feature} />
          </motion.div>
        ))}
      </div>
    </section>
  )
} 