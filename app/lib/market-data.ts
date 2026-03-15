import { ChartBarIcon, UserGroupIcon, CogIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const uniqueFeatures = [
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
] as const

export type ComparisonStatus = 'best' | 'neutral' | 'bad'

export interface ComparisonFeature {
  label: string
  value: string
  status: ComparisonStatus
  detail: string
}

export interface ComparisonOption {
  name: string
  subtitle: string
  icon: string
  features: ComparisonFeature[]
  highlight: boolean
}

export const comparisonData: ComparisonOption[] = [
  {
    name: 'Pixsell Games',
    subtitle: '(Developer-First Partnership)',
    icon: '🚀',
    features: [
      { label: 'Technical Freedom', value: 'Full Control', status: 'best', detail: 'Keep complete control of your codebase and technical decisions. We handle all China-specific requirements while you focus on your game.' },
      { label: 'Market Entry', value: 'Streamlined', status: 'best', detail: 'Fast, hassle-free entry to the Chinese market with our proven co-publishing model and established partnerships.' },
      { label: 'Revenue Model', value: 'Performance-Based', status: 'best', detail: 'Fair, transparent revenue sharing with no upfront costs. Your success is our success.' },
      { label: 'Local Support', value: 'Full Service', status: 'best', detail: 'Comprehensive local marketing, community management, and technical support tailored to the Chinese market.' },
      { label: 'Best For', value: 'Growth-Focused Devs', status: 'best', detail: 'Perfect for developers of any size wanting efficient China market entry with maximum control and minimal risk.' },
    ],
    highlight: true,
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
      { label: 'Best For', value: 'Large Studios', status: 'neutral', detail: 'Only viable for large teams with extensive resources and existing China market experience.' },
    ],
    highlight: false,
  },
  {
    name: 'Traditional Publishing',
    subtitle: '(The ISBN Route)',
    icon: '📋',
    features: [
      { label: 'Technical Freedom', value: 'Limited', status: 'bad', detail: 'Often requires significant technical changes and publisher maintains control over your game.' },
      { label: 'Market Entry', value: 'Slow', status: 'neutral', detail: 'Long negotiation process and complex contracts.' },
      { label: 'Revenue Model', value: 'Publisher-Favored', status: 'bad', detail: 'Deals often take larger revenue share and may include IP rights.' },
      { label: 'Local Support', value: 'Variable', status: 'neutral', detail: 'Support quality varies by publisher and sometimes prioritise their interests over developers.' },
      { label: 'Best For', value: 'AAA Studios', status: 'neutral', detail: 'Suited for large studios willing to give up control and accept traditional publishing terms.' },
    ],
    highlight: false,
  },
]

export const services = [
  {
    title: 'Strategic Partner Matching',
    icon: UserGroupIcon,
    href: '/services/co-publishing',
    description: 'We facilitate strong partnerships between Western developers and Chinese co-publishers, ensuring mutual success through optimal matching.',
    primaryFeatures: [
      'Partner qualification',
      'Strategic alignment',
      'Value optimisation',
    ],
    secondaryFeatures: [
      'Cultural bridging',
      'Fair deal terms',
      'Growth planning',
    ],
    stats: {
      value: 'Strategic',
      label: 'Matching',
    },
  },
  {
    title: 'Localisation',
    icon: SparklesIcon,
    href: '/services/localisation',
    description: 'Transform your game for Chinese players with culturally-aware translations, UI adaptations, and market-specific optimisations.',
    primaryFeatures: [
      'Cultural adaptation',
      'UI/UX localisation',
      'Content optimisation',
    ],
    secondaryFeatures: [
      'Voice-over support',
      'Cultural consulting',
      'Market testing',
    ],
    stats: {
      value: 'Perfect',
      label: 'Adaptation',
    },
  },
  {
    title: 'Growth & Marketing',
    icon: ChartBarIcon,
    href: '/services/marketing',
    description: 'Create impactful marketing strategies that resonate with Chinese players and drive sustainable growth.',
    primaryFeatures: [
      'Market positioning',
      'Audience building',
      'Growth strategy',
    ],
    secondaryFeatures: [
      'Content strategy',
      'Performance tracking',
      'ROI optimisation',
    ],
    stats: {
      value: 'Growth',
      label: 'Driven',
    },
  },
  {
    title: 'Partnership Success',
    icon: CogIcon,
    href: '/services/partnership',
    description: 'Ensure long-term success through data-driven optimisation and strong partnership management.',
    primaryFeatures: [
      'Performance tracking',
      'Partnership support',
      'Success metrics',
    ],
    secondaryFeatures: [
      'Regular reviews',
      'Growth planning',
      'Strategic support',
    ],
    stats: {
      value: 'Success',
      label: 'Focused',
    },
  },
] as const

export const processSteps = [
  {
    when: 'Months 1-2',
    what: 'Strategic Assessment',
    details: "• Initial consultation and market opportunity analysis.\n• Evaluate game potential and identify optimal partnership models.\n• Develop preliminary market entry strategy.",
  },
  {
    when: 'Months 3-5',
    what: 'Partnership Development',
    details: "• Connect with qualified Chinese co-publishers.\n• Facilitate partnership discussions and strategic alignment.\n• Structure mutually beneficial collaboration frameworks.",
  },
  {
    when: 'Months 5-7',
    what: 'Market Strategy',
    details: "• Collaborative go-to-market planning with partners.\n• Market positioning and audience strategy development.\n• Localisation and cultural adaptation planning.",
  },
  {
    when: 'Months 8-10',
    what: 'Launch Preparation',
    details: "• Coordinated marketing campaign development.\n• Community building on key platforms.\n• Performance tracking framework setup.",
  },
  {
    when: 'Months 11-12',
    what: 'Market Entry',
    details: "• Orchestrated Steam Global launch.\n• Active performance monitoring and optimisation.\n• Rapid response to market feedback.",
  },
  {
    when: 'Months 12+',
    what: 'Growth & Optimisation',
    details: "• Ongoing partnership support and optimiation.\n• Data-driven growth strategy implementation.\n• Long-term success planning and execution.",
  },
] as const

// Re-export icons used across market sub-components for convenience
export { ArrowRightIcon }
