'use client'

import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/legacy/image'
import { ChartBarIcon, ShieldCheckIcon, UserGroupIcon, CogIcon, CheckCircleIcon, RocketLaunchIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useCallback, useEffect, useMemo, useState, useRef } from 'react'
// Import throttle directly without debounce
import throttle from 'lodash/throttle'

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

// Add type definition before the comparison data
type ComparisonStatus = 'best' | 'neutral' | 'bad';

interface ComparisonFeature {
  label: string;
  value: string;
  status: ComparisonStatus;
  detail: string;
}

interface ComparisonOption {
  name: string;
  subtitle: string;
  icon: string;
  features: ComparisonFeature[];
  highlight: boolean;
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
    subtitle: '(The ISBN Route)',
    icon: '📋',
    features: [
      { label: 'Technical Freedom', value: 'Limited', status: 'bad', detail: 'Often requires significant technical changes and publisher maintains control over your game.' },
      { label: 'Market Entry', value: 'Slow', status: 'neutral', detail: 'Long negotiation process and complex contracts.' },
      { label: 'Revenue Model', value: 'Publisher-Favored', status: 'bad', detail: 'Deals often take larger revenue share and may include IP rights.' },
      { label: 'Local Support', value: 'Variable', status: 'neutral', detail: 'Support quality varies by publisher and sometimes prioritise their interests over developers.' },
      { label: 'Best For', value: 'AAA Studios', status: 'neutral', detail: 'Suited for large studios willing to give up control and accept traditional publishing terms.' }
    ],
    highlight: false
  }
];

const services = [
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
] as const

const processSteps = [
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
] as const

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
}

const containerVariants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const tableRowVariants = {
  hidden: { 
    opacity: 0, 
    x: -8,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
}

const timelineVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
}

const timelineContentVariants = {
  hidden: { 
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const timelineLineVariants = {
  hidden: { 
    scaleY: 0,
    opacity: 0
  },
  visible: {
    scaleY: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut"
    }
  }
}

const timelineDotVariants = {
  hidden: { 
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
}

const finalCTAVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Update section classes for optimal screen fitting
const sectionClasses = "relative min-h-[80vh] flex items-center justify-center py-12 lg:py-20 overflow-hidden"
const containerClasses = "container mx-auto px-6 sm:px-8 lg:px-12 max-w-[1400px] w-full"

// Add spacing constants for sections and content
const spacing = {
  desktop: {
    section: 'py-16 lg:py-24',
    content: 'space-y-10 lg:space-y-16',
    grid: 'gap-6 lg:gap-8'
  },
  mobile: {
    section: 'py-12',
    content: 'space-y-8',
    grid: 'gap-5'
  }
}

export default function MarketContent() {
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInView, setIsInView] = useState<Record<string, boolean>>({})

  // Optimized intersection observer
  useEffect(() => {
    if (typeof window === 'undefined') return

    const observerOptions = {
      root: null,
      rootMargin: '20% 0px',
      threshold: [0, 0.1]
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Use RAF to avoid layout thrashing
          requestAnimationFrame(() => {
            setIsInView(prev => ({
              ...prev,
              [entry.target.id]: true
            }))
          })
          // Unobserve after animation
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Batch DOM operations
    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]')
      sections.forEach(section => observer.observe(section))
    }, 100)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Optimized scroll lock
  useEffect(() => {
    const body = document.body
    const scrollY = window.scrollY

    if (isMobileMenuOpen) {
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.width = '100%'
    } else {
      const scrollY = body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }

    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on navigation
  useEffect(() => {
    const handleRouteChange = () => {
      setIsMobileMenuOpen(false)
    }

    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Get navigation items
  const navItems = useMemo(() => [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ], [])

  return (
    <div className="relative">
      <div className="relative pt-16">
        {/* Static background gradient instead of particle animation for better performance */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Background overlays removed for pure black background */}
        </div>

        {/* Hero Section */}
        <section className={sectionClasses + ' bg-black'}>
          <div className={containerClasses}>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto w-full translate-y-[-8vh] sm:translate-y-[-12vh]">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:pr-8 order-2 md:order-1"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-4 w-full"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight px-4 sm:px-0 text-center md:text-left pt-2">
                    <motion.span 
                      className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient"
                      variants={cardVariants}
                    >
                      Your Gateway to
                    </motion.span>
                    <motion.span 
                      className="block text-white mt-2"
                      variants={cardVariants}
                    >
                      the Chinese Gaming Market
                    </motion.span>
                  </h1>

                  <motion.p 
                    variants={cardVariants}
                    className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0 text-center md:text-left px-4 sm:px-0"
                  >
                    Pixsell Games helps indie developers navigate Steam publishing in China by connecting you with reputable Chinese co-publishers and guiding your marketing strategy.
                  </motion.p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-purple-500/20 w-full px-4 sm:px-0"
                >
                  {[
                    { value: '320M+', label: 'PC Gamers' },
                    { value: '$15.21B', label: 'Market Size' },
                    { value: '100%', label: 'Developer-First' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      variants={cardVariants}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                      className="space-y-1 bg-purple-900/10 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 text-center"
                    >
                      <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {stat.value}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-col sm:flex-row gap-4 pt-6 w-full px-4 sm:px-0"
                >
                  <motion.div variants={cardVariants} className="w-full sm:w-auto">
                    <Link
                      href="/contact"
                      className="flex w-full sm:w-auto justify-center items-center px-6 py-4 sm:py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                      role="button"
                      aria-label="Book a free consultation"
                    >
                      <span>Book a Free Consultation</span>
                      <svg 
                        className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </motion.div>
                  <motion.div variants={cardVariants} className="w-full sm:w-auto">
                    <Link
                      href="services/co-publishing"
                      className="flex w-full sm:w-auto justify-center items-center px-6 py-4 sm:py-3 border border-purple-500/20 hover:border-purple-500/40 rounded-xl font-semibold text-base transition-all duration-300 hover:bg-purple-500/10"
                      role="button"
                      aria-label="Learn how it works"
                    >
                      See How It Works
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-center h-full order-1 md:order-2 pt-20 sm:pt-32"
              >
                <motion.div
                  animate={shouldReduceMotion ? {} : {
                    y: [-5, 5, -5],
                    x: [0, 10, 0],
                    rotate: [0, 2, -2, 0],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="relative w-[220px] h-[220px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] lg:w-[520px] lg:h-[520px] max-w-full"
                >
                  <motion.div
                    animate={shouldReduceMotion ? {} : {
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.7, 0.5]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full animate-pulse opacity-75 md:opacity-100"
                  />
                  <div className="relative z-10 steam-hero-logo-wrapper">
                    <img
                      src="/steam Logo .gif"
                      alt="Steam Platform Logo"
                      width={400}
                      height={400}
                      loading="eager"
                      className="steam-hero-logo object-contain w-[120px] h-[120px] sm:w-[210px] sm:h-[210px] md:w-[250px] md:h-[250px] lg:w-[310px] lg:h-[310px] max-w-full mx-auto"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How Co-Publishing Works Section */}
        <section className="container mx-auto px-4 relative mt-32">
          <div className="max-w-7xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                How Our{' '}
                <span className="bg-gradient-to-r from-pink-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Co-Publishing
                </span>
                {' '}Model Works
              </h2>
              <p className="text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
                We match you with the right Chinese co-publisher and negotiate the best possible terms — from revenue share to marketing commitments — so you stay in control while ensuring your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12 text-left"
              >
                {[
                  {
                    title: 'Find the Right Partner',
                    description: 'We carefully select a co-publisher that fits your game\'s needs and secure the most favourable deal for you.',
                    icon: UserGroupIcon
                  },
                  {
                    title: 'Marketing & Localisation',
                    description: 'We work directly with the co-publisher to ensure they invest in effective Chinese marketing, social media, and player engagement—all while keeping your interests protected.',
                    icon: ChartBarIcon
                  },
                  {
                    title: 'Revenue Sharing',
                    description: 'We negotiate a performance-based revenue split that maximises your earnings while ensuring the co-publisher delivers results.',
                    icon: SparklesIcon
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'The co-publisher provides local customer support and continuously optimises game performance, with us ensuring they meet their obligations.',
                    icon: CogIcon
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-6 group"
                  >
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl backdrop-blur-sm bg-black/10 border border-purple-500/30 flex items-center justify-center relative z-10 group-hover:border-purple-500/50 transition-all duration-300">
                        <span className="text-xl font-bold text-purple-400 group-hover:text-purple-300">{index + 1}</span>
                      </div>
                      {index < 3 && (
                        <div className="absolute top-12 left-1/2 w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="w-6 h-6 text-purple-400" />
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-gray-100 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-green-900/80 border border-green-500/30 rounded-2xl p-8 hover:border-green-500/50 transition-all duration-300 h-fit sticky top-24 shadow-xl shadow-green-500/10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-900/5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl" />
                <h3 className="text-3xl font-bold text-green-100 mb-8 relative">
                  Why Choose This Model?
                  <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 rounded-full mt-4" />
                </h3>
                <div className="space-y-6 relative">
                  {[
                    { text: 'No IP Loss – You keep full control of your game.', icon: ShieldCheckIcon },
                    { text: 'Best Deal Negotiation – We secure the most favourable terms on your behalf.', icon: SparklesIcon },
                    { text: 'Risk-Free Entry – No upfront investment, just a performance-based revenue share.', icon: ChartBarIcon },
                    { text: 'Local Expertise – Your game gets top-tier marketing and support in China.', icon: CheckCircleIcon },
                    { text: 'No ISBN Needed – We focus on Steam Global to avoid complex regulations.', icon: CheckCircleIcon }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                        <benefit.icon className="w-4 h-4 text-green-400" />
                      </div>
                      <span className="text-green-100">{benefit.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Model CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mt-10 text-center"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 group transform hover:scale-[1.02]"
                  >
                    🔍 Explore Co-Publishing Options
                    <svg 
                      className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Pixsell Games Section */}
        <section className="container mx-auto px-4 relative mt-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      type: "tween"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
                    style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                  />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transform-gpu">
                    <SparklesIcon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Pixsell Games
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Compare different approaches to entering the Chinese gaming market and discover why developers choose us:
              </p>
            </motion.div>

            {/* Market Entry Comparison Table */}
            <div className="overflow-x-auto w-full mb-16 max-w-6xl mx-auto">
              {/* Desktop Table */}
              <div className="hidden md:block">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10"
                >
                  <table className="w-full border-collapse">
                    {/* Table Header */}
                    <thead>
                      <tr className="border-b border-purple-500/20">
                        {/* Empty cell for row headers */}
                        <th className="p-6 bg-black/40 w-48 border-r border-purple-500/20">
                          <div className="text-lg font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                            Comparison
                          </div>
                        </th>
                        {comparisonData.map((option, index) => (
                          <th
                            key={index}
                            className={`p-6 ${
                              option.highlight
                                ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                                : 'bg-black/40'
                            }`}
                          >
                            <div className="relative">
                              {option.highlight && (
                                <span className="absolute -top-3 right-0 px-3 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium">
                                  Developer Choice
                                </span>
                              )}
                              <div className="flex items-center justify-center gap-4 pt-6">
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                                  option.highlight 
                                    ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30' 
                                    : 'bg-black/20 border border-purple-500/20'
                                }`}>
                                  {option.icon}
                                </div>
                                <div>
                                  <h3 className="text-lg font-bold text-white">
                                    {option.name}
                                  </h3>
                                  <p className="text-sm text-gray-400">{option.subtitle}</p>
                                </div>
                              </div>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-purple-500/20">
                      {[
                        { key: 'Technical Freedom', index: 0 },
                        { key: 'Market Entry', index: 1 },
                        { key: 'Revenue Model', index: 2 },
                        { key: 'Local Support', index: 3 }
                      ].map(({ key, index }) => (
                        <tr key={key}>
                          <th className="p-6 bg-black/60 text-left border-r border-purple-500/20">
                            <div className="font-semibold text-gray-200">{key}</div>
                          </th>
                          {comparisonData.map((option, optionIndex) => {
                            const currentFeature = option.features[index];
                            return (
                              <td
                                key={optionIndex}
                                className={`p-6 relative ${
                                  option.highlight
                                    ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                                    : 'bg-black/40'
                                }`}
                              >
                                <div className="relative group">
                                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                                    <div className={`flex items-center justify-center gap-2 ${
                                      currentFeature.status === 'best' ? 'text-emerald-400' :
                                      currentFeature.status === 'bad' ? 'text-red-400' :
                                      'text-yellow-400'
                                    }`}>
                                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-sm ${
                                        currentFeature.status === 'best' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                                        currentFeature.status === 'bad' ? 'bg-red-500/10 border border-red-500/30' :
                                        'bg-yellow-500/10 border border-yellow-500/30'
                                      }`}>
                                        {currentFeature.status === 'best' ? '✓' :
                                         currentFeature.status === 'bad' ? '✕' :
                                         '⚠'}
                                      </div>
                                      <span className="text-sm font-medium">{currentFeature.value}</span>
                                    </div>
                                  </div>

                                  {/* Tooltip */}
                                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 absolute left-1/2 -translate-x-1/2 -translate-y-2 bottom-full mb-2 w-64 p-4 bg-black/95 backdrop-blur-lg rounded-xl border border-purple-500/20 text-sm text-gray-300 shadow-xl shadow-purple-500/10 z-50">
                                    <div className="text-center space-y-2">
                                      <div className="font-semibold text-white/90">{currentFeature.label}</div>
                                      <div className="text-gray-300 leading-relaxed">{currentFeature.detail}</div>
                                    </div>
                                    <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-black/95 border-r border-b border-purple-500/20 transform rotate-45"></div>
                                  </div>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </div>

              {/* Mobile Accordion */}
              <div className="md:hidden space-y-4">
                {comparisonData.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`backdrop-blur-xl rounded-xl border ${
                      option.highlight
                        ? 'border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-pink-500/10'
                        : 'border-purple-500/20 bg-black/40'
                    } shadow-lg shadow-purple-500/5`}
                  >
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                            option.highlight 
                              ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30' 
                              : 'bg-black/20 border border-purple-500/20'
                          }`}>
                            {option.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-white">{option.name}</h3>
                            <p className="text-sm text-gray-400">{option.subtitle}</p>
                          </div>
                        </div>
                        {option.highlight && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium">
                            Developer Choice
                          </span>
                        )}
                      </div>
                      <div className="space-y-3">
                        {option.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="border-t border-purple-500/20 pt-3"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-300">{feature.label}</span>
                                <div className={`flex items-center gap-2 ${
                                  feature.status === 'best' ? 'text-emerald-400' :
                                  feature.status === 'bad' ? 'text-red-400' :
                                  'text-yellow-400'
                                }`}>
                                  <div className={`w-6 h-6 rounded-lg flex items-center justify-center text-sm ${
                                    feature.status === 'best' ? 'bg-emerald-500/10 border border-emerald-500/30' :
                                    feature.status === 'bad' ? 'bg-red-500/10 border border-red-500/30' :
                                    'bg-yellow-500/10 border border-yellow-500/30'
                                  }`}>
                                    {feature.status === 'best' ? '✓' :
                                     feature.status === 'bad' ? '✕' :
                                     '⚠'}
                                  </div>
                                  <span className="text-sm font-semibold">{feature.value}</span>
                                </div>
                              </div>
                              <p className="text-sm text-gray-400 leading-relaxed text-center">{feature.detail}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Comparison CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto my-16 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl" />
              <div className="relative backdrop-blur-xl bg-black/40 rounded-2xl p-8 md:p-12 border border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Thinking about entering the{' '}
                      <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                        Chinese Market
                      </span>
                      ?
                    </h3>
                    <p className="text-gray-300 text-lg max-w-xl">
                      Whether you're just exploring your options or actively planning your entry, we can show you the revenue potential of your game and the best strategy to maximise success. Let's have a chat.
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group whitespace-nowrap"
                    >
                      Schedule a Call
                      <svg 
                        className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Unique Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-24"
            >
              <div className="flex items-center justify-center gap-6 mb-12">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-purple-500/50" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      type: "tween"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
                    style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                  />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transform-gpu">
                    <SparklesIcon className="w-8 h-8 text-purple-400" />
                  </div>
                </motion.div>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-500/50" />
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                How we help you succeed
              </h3>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-16">
                We're committed to helping Western developers navigate and succeed in the Chinese gaming market through strategic partnerships and local expertise
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {uniqueFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { 
                      opacity: 0,
                      y: 20,
                      scale: 0.95
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        duration: 0.8,
                        delay: index * 0.15,
                        bounce: 0.2
                      }
                    }
                  }}
                  className="group relative"
                >
                  {/* Enhanced Background Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 translate-y-1/2 blur-3xl rounded-2xl group-hover:translate-y-0 group-hover:scale-125 transition-all duration-700" />
                  
                  {/* Enhanced Card Container */}
                  <div className="relative backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 h-full transition-all duration-700 group-hover:border-purple-500/40 group-hover:translate-y-[-4px] group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />
                    
                    {/* Enhanced Header with Icon and Title */}
                    <div className="flex flex-col items-center text-center gap-4 mb-6">
                      {/* Enhanced Icon Container */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 transform-gpu" />
                        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 group-hover:border-purple-500/40 group-hover:scale-110 transition-all duration-700">
                          <motion.div 
                            initial={{ scale: 0.8, rotate: -15 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl transform group-hover:scale-110 transition-transform duration-700 text-purple-400"
                            style={{ filter: 'hue-rotate(240deg) saturate(70%) brightness(150%)' }}
                          >
                            {
                              feature.icon === 'trophy' ? '🏆' :
                              feature.icon === 'target' ? '🎯' :
                              feature.icon === 'shield' ? '🛡️' :
                              feature.icon === 'chart' ? '📈' :
                              feature.icon === 'check' ? '✅' :
                              '⭐'
                            }
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Enhanced Title */}
                      <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text group-hover:from-purple-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-700">
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Enhanced Description */}
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-500 min-h-[100px] mb-8 text-center">
                      {feature.description}
                    </p>
                    
                    {/* Enhanced Stats Container */}
                    <div className="relative mt-auto pt-6 border-t border-purple-500/20">
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-700">
                          {feature.stats.value}
                        </span>
                        <span className="text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-500">
                          {feature.stats.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-4 relative mt-32">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Our{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions to ensure your success in the Chinese gaming market
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="backdrop-blur-xl bg-black/40 border border-purple-500/20 rounded-2xl p-8 h-full hover:border-purple-500/40 transition-all duration-500 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                          <service.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                            {service.title}
                          </h3>
                          
                          <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                            {service.description}
                          </p>

                          {/* Primary Features List */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {service.primaryFeatures.map((feature, idx) => (
                                <li key={idx} className="text-gray-300 flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Stats and CTA */}
                          <div className="flex items-center justify-between pt-6 border-t border-purple-500/20">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                {service.stats.value}
                              </span>
                              <span className="text-sm text-gray-400">
                                {service.stats.label}
                              </span>
                            </div>
                            <div className="flex items-center text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                              <span className="mr-2">Learn more</span>
                              <ArrowRightIcon className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Co-Publishing Roadmap Section */}
        <section className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
          />
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                      type: "tween"
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"
                    style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                  />
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center transform-gpu">
                    <RocketLaunchIcon className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Co-Publishing{' '}
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Roadmap
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We've laid out a structured timeline for securing the right co-publisher and executing a successful Steam Global launch in China
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line Container */}
              <div className="absolute left-[15%] sm:left-[50%] top-0 bottom-0 w-px">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={timelineLineVariants}
                  className="w-full h-full bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-purple-500/50 origin-top"
                >
                  {/* Animated particles along the line */}
                  <motion.div
                    animate={{
                      y: ["0%", "100%"],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute w-2 h-2 -left-[3px] rounded-full bg-purple-400/50 blur-sm"
                  />
                </motion.div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-24">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={timelineVariants}
                    custom={index}
                    className="relative"
                  >
                    <div className={`flex flex-col ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-8`}>
                      <div className="w-full sm:w-[45%]">
                        <motion.div
                          variants={timelineContentVariants}
                          whileHover={{ scale: 1.02, y: -5 }}
                          className={`backdrop-blur-sm bg-black/30 border border-purple-500/20 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 relative group ${
                            index % 2 === 0 ? 'text-left' : 'text-left sm:text-right'
                          }`}
                        >
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Animated corner accents */}
                          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-purple-500/30 rounded-tl-lg group-hover:border-purple-400/60 transition-colors duration-300" />
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-purple-500/30 rounded-br-lg group-hover:border-purple-400/60 transition-colors duration-300" />
                          
                          <div className="relative">
                            <div className="text-purple-400 font-semibold mb-4 flex items-center gap-2">
                              <motion.span 
                                whileHover={{ scale: 1.05 }}
                                className="bg-purple-500/20 px-4 py-2 rounded-full text-sm border border-purple-500/30 hover:border-purple-500/50 transition-colors duration-300"
                              >
                                {step.when}
                              </motion.span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-100 bg-clip-text">{step.what}</h3>
                            <div className="text-gray-300 space-y-3">
                              {step.details.split('\n').map((detail, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex items-start gap-3 group/item"
                                >
                                  <span className="flex-shrink-0 w-2 h-2 rounded-full bg-purple-400/50 group-hover/item:bg-purple-400 transition-colors duration-300 mt-2" />
                                  <p className="leading-relaxed group-hover/item:text-white transition-colors duration-300">{detail.substring(2)}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      <div className="relative">
                        <motion.div
                          variants={timelineDotVariants}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center relative z-10 transform-gpu"
                        >
                          <span className="text-white text-xl font-bold">{index + 1}</span>
                          {/* Pulse Effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 animate-ping opacity-20" />
                          {/* Glow Effect */}
                          <div className="absolute inset-0 rounded-xl bg-purple-500/30 blur-xl" />
                        </motion.div>
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-xl blur-xl"
                        />
                      </div>

                      <div className="hidden sm:block w-[45%]" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 py-32 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-3xl"
          />
          
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={finalCTAVariants}
              className="backdrop-blur-xl bg-black/40 rounded-3xl p-20 border border-purple-500/20 relative overflow-hidden group transform-gpu hover:scale-[1.01] transition-transform duration-700"
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 transition-opacity duration-700"
              />
              
              <motion.div 
                className="relative z-10 text-center max-w-3xl mx-auto"
                animate={{ 
                  scale: [1, 1.02, 1],
                  opacity: [0.95, 1, 0.95]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-6xl font-bold mb-10 text-white tracking-tight"
                >
                  Thinking about{' '}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    launching
                  </span>
                  {' '}in China?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl text-gray-100 mb-14 leading-relaxed"
                >
                  Whether you're just exploring your options or actively planning your entry, we can show you the revenue potential of your game and the best strategy to maximise success. Let's have a chat.
                </motion.p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-block"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl font-semibold text-xl tracking-wide transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden transform-gpu"
                  >
                    <motion.div
                      initial={{ x: "-100%", opacity: 0.5 }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <span className="relative flex items-center justify-center gap-3">
                      Get Started
                      <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <style jsx global>{`
          body {
            background: transparent;
            overflow-x: hidden;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          :root {
            --section-spacing: clamp(2rem, 5vw, 4rem);
            --content-max-width: 1400px;
            --header-height: 5rem;
          }
          
          .container {
            max-width: var(--content-max-width);
            margin-left: auto;
            margin-right: auto;
            padding-left: max(1rem, env(safe-area-inset-left));
            padding-right: max(1rem, env(safe-area-inset-right));
          }
          
          @supports (height: 100dvh) {
            .min-h-screen {
              min-height: 100dvh;
            }
          }
          
          @media (prefers-reduced-motion: reduce) {
            *,
            ::before,
            ::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
              scroll-behavior: auto !important;
            }
          }
          
          .optimize-animation {
            backface-visibility: hidden;
            perspective: 1000;
            transform-style: preserve-3d;
            will-change: transform;
          }
          
          @media (max-width: 768px) {
            .reduce-animation {
              transition-duration: 200ms !important;
              animation-duration: 200ms !important;
            }
            
            .container {
              padding-left: 1rem;
              padding-right: 1rem;
            }
          }
          
          @media (hover: none) {
            .hover\:scale-105 {
              transform: none !important;
            }
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 8s linear infinite;
            will-change: background-position;
          }
          
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }
          
          .scroll-margin-top {
            scroll-margin-top: var(--header-height);
          }
          
          .content-visibility-auto {
            content-visibility: auto;
          }
          
          .backdrop-blur-optimized {
            -webkit-backdrop-filter: blur(8px);
            backdrop-filter: blur(8px);
          }
          
          .text-balance {
            text-wrap: balance;
          }
          
          .text-pretty {
            text-wrap: pretty;
          }
          
          .optimize-legibility {
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          .optimize-performance {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
            will-change: transform;
          }
          
          .safe-bottom {
            padding-bottom: env(safe-area-inset-bottom);
          }
        `}</style>
      </div>
    </div>
  )
} 