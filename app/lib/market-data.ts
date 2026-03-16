import { ChartBarIcon, UserGroupIcon, CogIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const uniqueFeatures = [
  {
    title: 'Industry-Leading Expertise',
    description: 'Our team has deep knowledge of the Chinese gaming ecosystem, helping Western developers navigate market challenges with confidence.',
    icon: 'trophy',
    stats: {
      value: '10+',
      label: 'Yrs China market experience',
    },
  },
  {
    title: 'Tailored Market Strategies',
    description: 'Every game is unique, and so is our approach. We design a dedicated go-to-market strategy for your specific game, genre, and audience — not a template.',
    icon: 'target',
    stats: {
      value: '1',
      label: 'Dedicated strategy per game',
    },
  },
  {
    title: 'Seamless Market Entry',
    description: 'We handle publisher vetting, contract negotiation, and compliance coordination — so you never have to navigate Chinese regulatory complexity alone.',
    icon: 'shield',
    stats: {
      value: '0',
      label: 'Upfront approvals to manage',
    },
  },
  {
    title: 'Data-Driven Growth',
    description: 'We verify revenue reports, track campaign performance, and send you regular summaries so you always have a clear picture of how your game is doing in China.',
    icon: 'chart',
    stats: {
      value: 'Monthly',
      label: 'Revenue & campaign reports',
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
    title: 'Built for Speed',
    description: "From your first call to Steam Global launch, our structured process keeps things moving. Most developers reach their China launch within 90 days of signing.",
    icon: 'star',
    stats: {
      value: '90',
      label: 'Days to first launch',
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
      { label: 'Best For', value: 'Indie & AA Studios', status: 'best', detail: 'Western PC developers with a shipped game on Steam who want China revenue without a China team. No legal entity, no upfront spend, no ISBN required.' },
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
      value: 'Vetted',
      label: 'Publisher network',
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
      value: 'CN',
      label: 'Cultural QA included',
    },
  },
  {
    title: 'Growth & Marketing',
    icon: ChartBarIcon,
    href: '/services/marketing',
    description: 'We oversee your co-publisher\'s marketing across WeChat, Weibo, Bilibili, and Douyin — reviewing campaign plans, approving content direction, and tracking spend against commitments.',
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
      value: '4',
      label: 'Platforms: WeChat Weibo Bilibili Douyin',
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
      value: 'Active',
      label: 'Partnership monitoring',
    },
  },
] as const

export const processSteps = [
  {
    when: 'Months 1-2',
    what: 'Strategic Assessment',
    details: "• Pixsell: Market opportunity analysis for your specific game.\n• Pixsell: Identify ideal co-publisher profile and deal structure.\n• You: Provide game build, genre details, and revenue targets.",
  },
  {
    when: 'Months 3-5',
    what: 'Publisher Shortlisting & Vetting',
    details: "• Pixsell: Research and screen co-publisher candidates.\n• Pixsell: Conduct introductory calls and assess publisher fit.\n• You: Review shortlist and select preferred candidates.",
  },
  {
    when: 'Months 5-7',
    what: 'Deal Negotiation & Signing',
    details: "• Pixsell: Negotiate revenue share, marketing commitments, and recoupment terms.\n• Pixsell: Review contract for developer-unfavourable clauses.\n• You: Approve final deal terms and sign agreement.",
  },
  {
    when: 'Months 8-10',
    what: 'Launch Preparation',
    details: "• Pixsell: Coordinate localisation and cultural QA via partner network.\n• Pixsell: Review co-publisher's marketing campaign plan.\n• You: Provide game assets, approve localised content and marketing direction.",
  },
  {
    when: 'Months 11-12',
    what: 'Steam Global Launch',
    details: "• Pixsell: Monitor launch performance and hold co-publisher accountable.\n• Pixsell: Escalate issues and track revenue reporting accuracy.\n• You: Receive weekly performance summaries during launch window.",
  },
  {
    when: 'Months 12+',
    what: 'Growth & Oversight',
    details: "• Pixsell: Ongoing revenue verification and partner performance reviews.\n• Pixsell: Identify growth opportunities (DLC, events, platform expansion).\n• You: Receive monthly reports, approve major strategic decisions.",
  },
] as const

// Re-export icons used across market sub-components for convenience
export { ArrowRightIcon }
