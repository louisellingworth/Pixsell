'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FloatingConsultButton from '../../components/FloatingConsultButton'
import { BackgroundBeams } from '../../components/ui/BackgroundBeams'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  BanknotesIcon,
  DocumentMagnifyingGlassIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CursorArrowRaysIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
  BuildingStorefrontIcon,
  UsersIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const gradientText = "bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] bg-clip-text text-transparent"
const cardStyle = "bg-white/[0.02] border border-white/10 hover:border-[#B4C6EF]/50 transition-colors backdrop-blur-sm"

const marketStats = [
  {
    value: "850M+",
    label: "Active Gamers",
    description: "in the Chinese market"
  },
  {
    value: "£33.7B",
    label: "Market Value",
    description: "annual gaming revenue"
  },
  {
    value: "78%",
    label: "Mobile Share",
    description: "of gaming market"
  }
]

const processSteps = [
  {
    title: "Strategic Budget Optimisation",
    description: "We collaborate with publishers to establish and secure optimal marketing budgets, aligned with your market entry objectives and revenue targets.",
    icon: BanknotesIcon,
    keyPoints: ["Budget planning", "Revenue forecasting", "Resource allocation"]
  },
  {
    title: "Comprehensive Planning",
    description: "Our team conducts thorough analyses and optimisation of marketing strategies, ensuring harmonisation with both Western and Chinese market requirements.",
    icon: DocumentMagnifyingGlassIcon,
    keyPoints: ["Market analysis", "Strategy development", "Timeline planning"]
  },
  {
    title: "Precision Execution",
    description: "We implement campaigns with meticulous attention to detail, ensuring cultural authenticity and maximising market impact.",
    icon: RocketLaunchIcon,
    keyPoints: ["Campaign launch", "Content delivery", "Platform management"]
  },
  {
    title: "Performance Optimisation",
    description: "Continuous monitoring and refinement of campaigns using advanced analytics to maximise return on marketing investment.",
    icon: ChartBarIcon,
    keyPoints: ["Data analysis", "Performance tracking", "Strategy refinement"]
  }
]

const platformReach = [
  {
    platform: "WeChat",
    users: "1.2B Monthly Users",
    icon: BuildingStorefrontIcon
  },
  {
    platform: "Douyin",
    users: "600M Daily Users",
    icon: UsersIcon
  },
  {
    platform: "Bilibili",
    users: "223M Monthly Users",
    icon: GlobeAltIcon
  }
]

const marketingCapabilities = [
  {
    title: "Platform Strategy",
    description: "Comprehensive platform-specific marketing strategies tailored for the Chinese digital ecosystem.",
    points: [
      "Strategic presence across WeChat, Weibo, Douyin and Bilibili",
      "Platform-specific content optimisation",
      "Audience targeting and engagement strategies",
      "Cross-platform campaign orchestration"
    ]
  },
  {
    title: "Market Entry",
    description: "Expert guidance through every step of your entry into the Chinese gaming market.",
    points: [
      "Comprehensive launch strategy development",
      "Cultural adaptation and localisation",
      "Regulatory compliance management",
      "Market positioning and differentiation"
    ]
  }
]

const benefits = [
  {
    title: "Strategic Expertise",
    description: "Leverage our deep understanding of the Chinese gaming market to optimise your market entry strategy.",
    icon: CheckBadgeIcon,
    stats: "10+ Years Experience"
  },
  {
    title: "Data-Driven Approach",
    description: "Make informed decisions based on comprehensive market analytics and performance measurements.",
    icon: ArrowTrendingUpIcon,
    stats: "Real-time Analytics"
  },
  {
    title: "Market Access",
    description: "Benefit from our established network of Chinese platforms and industry partnerships.",
    icon: UserGroupIcon,
    stats: "50+ Partners"
  },
  {
    title: "Risk Management",
    description: "Navigate regulatory requirements and market complexities with our experienced guidance.",
    icon: ShieldCheckIcon,
    stats: "100% Compliance"
  }
]

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

export default function MarketingPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden relative">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-32 relative"
          style={{ opacity, scale }}
        >
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[#8A7FFB]/5 blur-3xl rounded-full transform -translate-y-1/2"></div>
            <div className="absolute inset-0 bg-[#B4C6EF]/5 blur-3xl rounded-full transform translate-y-1/2"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="text-sm font-semibold text-[#B4C6EF] tracking-widest uppercase mb-6 block">
              Marketing Excellence
            </span>
            <h1 className={`text-7xl font-bold mb-8 ${gradientText} tracking-tight leading-tight`}>
              Strategic Marketing<br />Solutions
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive Market Entry and Growth Strategies<br />for the Chinese Gaming Market
            </p>
          </motion.div>
        </motion.div>

        {/* Market Stats */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
        >
          {marketStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUpVariant}
              className={`text-center p-8 rounded-xl ${cardStyle} relative group overflow-hidden`}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#8A7FFB]/10 to-[#B4C6EF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
              <div className="relative">
                <div className={`text-4xl font-bold mb-2 ${gradientText}`}>{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Introduction */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-40 max-w-4xl mx-auto"
        >
          <div className="text-center space-y-6">
            <h2 className={`text-3xl font-bold mb-6 ${gradientText}`}>
              Your Gateway to the Chinese Gaming Market
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              At Pixsell Games, we provide comprehensive marketing solutions tailored for successful market entry and sustained growth in China's gaming sector. Our strategic approach combines data-driven insights with deep market understanding to ensure optimal resource allocation and maximum return on investment.
            </p>
          </div>
        </motion.div>

        {/* Platform Reach */}
        <motion.div
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
          className={`mb-40 rounded-2xl p-12 ${cardStyle} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A7FFB]/5 to-[#B4C6EF]/5"></div>
          <div className="relative">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-[#B4C6EF] tracking-widest uppercase mb-4 block">
                Platform Reach
              </span>
              <h2 className={`text-3xl font-bold ${gradientText}`}>
                Access China's Largest Gaming Platforms
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformReach.map((platform) => (
                <div key={platform.platform} className={`text-center p-6 rounded-xl ${cardStyle} group`}>
                  <platform.icon className="w-12 h-12 text-[#B4C6EF] group-hover:text-[#8A7FFB] transition-colors duration-300 mx-auto mb-4" />
                  <div className="text-xl font-semibold text-white mb-2">{platform.platform}</div>
                  <div className="text-gray-400">{platform.users}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Timeline */}
        <motion.div 
          className="mb-40"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="text-center mb-20"
            variants={fadeInUpVariant}
          >
            <span className="text-sm font-semibold text-[#B4C6EF] tracking-widest uppercase mb-4 block">
              Methodology
            </span>
            <h2 className={`text-4xl font-bold mb-4 ${gradientText}`}>
              Our Strategic Approach
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A systematic four-phase process designed to maximise your success in the Chinese market
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUpVariant}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#8A7FFB]/10 to-[#B4C6EF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                <div className={`rounded-xl p-8 h-full relative ${cardStyle}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#8A7FFB]/10 flex items-center justify-center mr-4 group-hover:bg-[#B4C6EF]/20 transition-colors duration-300">
                      <step.icon className="w-8 h-8 text-[#B4C6EF] group-hover:text-[#8A7FFB] transition-colors duration-300" />
                    </div>
                    <span className="text-[#B4C6EF] group-hover:text-[#8A7FFB] transition-colors duration-300 font-bold text-sm tracking-widest uppercase">Phase {index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.keyPoints.map((point, idx) => (
                      <li key={idx} className="text-sm text-[#B4C6EF]/80 group-hover:text-[#8A7FFB]/80 transition-colors duration-300 font-medium">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Capabilities Section */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={`rounded-2xl p-20 ${cardStyle} mb-40 relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A7FFB]/5 to-[#B4C6EF]/5"></div>
          <div className="relative">
            <span className="text-sm font-semibold text-[#B4C6EF] tracking-widest uppercase mb-4 block">
              Services
            </span>
            <h2 className={`text-4xl font-bold mb-6 ${gradientText}`}>
              Core Capabilities
            </h2>
            <p className="text-gray-400 max-w-2xl mb-20">
              Comprehensive marketing solutions designed specifically for the unique requirements of the Chinese gaming market
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {marketingCapabilities.map((capability, index) => (
                <motion.div 
                  key={capability.title} 
                  variants={fadeInUpVariant}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className={`text-2xl font-semibold tracking-tight mb-4 ${gradientText}`}>
                      {capability.title}
                    </h3>
                    <p className="text-gray-400 mb-8">{capability.description}</p>
                  </div>
                  <ul className="space-y-6">
                    {capability.points.map((point, pointIndex) => (
                      <motion.li
                        key={pointIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (pointIndex * 0.1) }}
                        className="flex items-start group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-[#8A7FFB]/10 flex items-center justify-center mr-4 group-hover:bg-[#B4C6EF]/20 transition-colors duration-300">
                          <svg className="w-5 h-5 text-[#B4C6EF] group-hover:text-[#8A7FFB] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-gray-300 text-lg font-light group-hover:text-white transition-colors duration-300">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-40"
        >
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-[#B4C6EF] tracking-widest uppercase mb-4 block">
              Benefits
            </span>
            <h2 className={`text-4xl font-bold mb-4 ${gradientText}`}>
              Strategic Advantages
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Why leading game developers choose Pixsell Games for their China market entry
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={fadeInUpVariant}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group"
              >
                <div className={`rounded-xl p-8 h-full ${cardStyle} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-[#8A7FFB]/10 to-[#B4C6EF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-[#8A7FFB]/10 flex items-center justify-center mb-6 group-hover:bg-[#B4C6EF]/20 transition-colors duration-300">
                      <benefit.icon className="w-8 h-8 text-[#B4C6EF] group-hover:text-[#8A7FFB] transition-colors duration-300" />
                    </div>
                    <div className="text-sm text-[#B4C6EF] group-hover:text-[#8A7FFB] transition-colors duration-300 font-semibold mb-4">{benefit.stats}</div>
                    <h4 className="text-xl font-semibold text-white mb-4 tracking-tight">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed font-light">{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
          className={`text-center rounded-2xl p-20 ${cardStyle} relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#8A7FFB]/5 to-[#B4C6EF]/5"></div>
          <div className="relative">
            <span className="text-sm font-semibold text-[#B4C6EF] tracking-widest uppercase mb-4 block">
              Get Started
            </span>
            <h2 className="text-4xl font-bold mb-8 text-white tracking-tight">
              Begin Your Market Entry Strategy
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
              Schedule a consultation to discuss your strategic objectives and discover how we can facilitate your success in the Chinese gaming market.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-12 py-5 rounded-lg bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] text-white font-semibold hover:opacity-90 transition-all duration-300 text-lg group relative overflow-hidden"
            >
              <span className="relative z-10">Schedule Strategic Consultation</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300 relative z-10">
                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#B4C6EF] to-[#8A7FFB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </motion.div>
      </div>

      <BackgroundBeams />
      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 