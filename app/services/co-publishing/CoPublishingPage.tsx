'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FloatingConsultButton from '../../components/FloatingConsultButton'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  GlobeAltIcon, 
  DocumentCheckIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { useRef, useState } from 'react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
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

const gradientText = "bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] bg-clip-text text-transparent"
const cardStyle = "p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#B4C6EF]/50 transition-colors backdrop-blur-sm relative overflow-hidden group text-center"
const cardGlow = "absolute inset-0 bg-gradient-to-r from-[#8A7FFB]/20 to-[#B4C6EF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"

const shimmer = "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"

export default function CoPublishingPage() {
  const [activeStep, setActiveStep] = useState(0)
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100])

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with enhanced gradient background and parallax */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center py-24 sm:py-32 md:py-40">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{ scale, opacity, y }}
            className="absolute w-[800px] h-[800px] top-1/4 left-1/4 bg-[#B4C6EF]/10 rounded-full blur-3xl animate-pulse"
          />
          <motion.div 
            style={{ scale, opacity, y }}
            className="absolute w-[600px] h-[600px] bottom-1/4 right-1/4 bg-[#8A7FFB]/10 rounded-full blur-3xl animate-pulse"
          />
          <div className="absolute inset-0 bg-[#0A0A0B]/40 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/50 to-[#0A0A0B]" />
          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#B4C6EF]/30 rounded-full"
                animate={{
                  y: [-20, -40],
                  x: Math.random() * 20 - 10,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center justify-center"
              >
                <SparklesIcon className="w-6 h-6 text-[#B4C6EF] animate-pulse mr-2" />
                <span className="text-[#B4C6EF] font-medium">Game Publishing Solutions</span>
              </motion.div>
              <h1 className={`text-6xl sm:text-7xl md:text-8xl font-bold ${gradientText} leading-tight relative overflow-hidden`}>
                Co-Publishing
                <div className="absolute inset-0 -z-10 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Partner with trusted Chinese publishers and optimize your game's success in the Chinese market
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Journey
                    <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#B4C6EF] to-[#8A7FFB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section with enhanced styling */}
      <section className="py-12 bg-gradient-to-b from-[#0A0A0B] to-black relative text-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-[#B4C6EF] font-medium mb-8">
              <span className="h-px w-8 bg-[#B4C6EF]" />
              <span>Our Approach</span>
              <span className="h-px w-8 bg-[#B4C6EF]" />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed text-center">
              Expanding your game into the Chinese market requires a local publishing partner who understands the regulatory landscape, marketing ecosystem, and player expectations. At Pixsell Games, we specialise in securing the best co-publishing deals, ensuring compliance, and optimising revenue structures to maximise your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Need Section with enhanced card animations */}
      <section className="py-24 bg-black/30 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B4C6EF]/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <h2 className={`text-4xl sm:text-5xl font-bold mb-16 text-center ${gradientText}`}>
              Why Do You Need a Co-Publisher in China?
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              China's gaming industry is highly regulated, and foreign developers cannot self-publish without a local partner. A co-publisher is essential for:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: DocumentCheckIcon,
                  title: "ISBN Licensing & Compliance",
                  description: "While an ISBN number isn't always necessary, ensuring compliance with Chinese regulations is crucial. A co-publisher provides invaluable guidance through the complex regulatory landscape and helps secure any required approvals for your game."
                },
                {
                  icon: GlobeAltIcon,
                  title: "Distribution & Localisation",
                  description: "Chinese co-publishers help navigate the game distribution channels, including Steam China, Tencent's WeGame, and mobile storefronts. They also manage localisation, voiceovers, and cultural adaptations."
                },
                {
                  icon: ChartBarIcon,
                  title: "Marketing & Player Acquisition",
                  description: "A co-publisher runs regional marketing campaigns, secures influencer partnerships, and helps build a strong local community."
                },
                {
                  icon: CurrencyDollarIcon,
                  title: "Payment & Monetisation",
                  description: "Navigating China's monetisation strategies is crucial. A co-publisher ensures proper revenue collection and compliance with China's payment processing laws."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={cardStyle}
                >
                  <div className={cardGlow} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] p-3 mb-6 mx-auto">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section with interactive timeline */}
      <section className="py-24 relative text-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <h2 className={`text-4xl sm:text-5xl font-bold mb-16 text-center ${gradientText}`}>
              How We Secure the Best Co-Publishing Deal for You
            </h2>
            
            <div className="space-y-16">
              {[
                {
                  title: "1. Market Assessment & Game Readiness Check",
                  description: "Before securing a co-publisher, we conduct an in-depth evaluation of your game's market fit in China, including:",
                  items: [
                    "Genre popularity and player demand",
                    "Potential regulatory challenges",
                    "Competitive analysis"
                  ]
                },
                {
                  title: "2. Identifying & Negotiating with the Right Co-Publisher",
                  description: "Not all Chinese publishers are the same. We use our network of trusted partners to match you with a publisher who aligns with your game's goals. Key considerations include:",
                  items: [
                    "Revenue split negotiations to ensure you get the best deal",
                    "Marketing budget commitments from the publisher",
                    "Their track record with similar game genres",
                    "Experience in handling regulatory approvals"
                  ]
                },
                {
                  title: "3. Structuring the Revenue Model",
                  description: "Getting the right revenue structure is critical for a profitable deal. Common revenue models include:",
                  items: [
                    "Revenue Share Model: The co-publisher takes a percentage of revenue after launch (e.g., 30-50%), covering marketing and operational costs",
                    "Recoup Model: The publisher funds marketing and localisation upfront, and revenue is split after costs are recouped",
                    "Hybrid Model: A mix of both models, ensuring developers keep a larger share of long-term revenue after initial recoupment"
                  ]
                },
                {
                  title: "4. Managing Marketing, Distribution, and Launch",
                  description: "Once a deal is secured, we coordinate all aspects of your China launch, including:",
                  items: [
                    "Social media and influencer campaigns on Weibo, WeChat, Douyin, and Bilibili",
                    "Advertising on key gaming platforms",
                    "Community engagement and Chinese player support",
                    "Ongoing content updates and post-launch optimisations"
                  ]
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`relative pl-12 border-l-2 transition-colors duration-300 ${
                    activeStep === index ? 'border-[#B4C6EF]' : 'border-[#B4C6EF]/30'
                  }`}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <motion.div 
                    className={`absolute left-[-25px] top-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] flex items-center justify-center text-2xl font-bold shadow-lg transition-shadow duration-300 ${
                      activeStep === index ? 'shadow-[#B4C6EF]/40' : 'shadow-[#B4C6EF]/20'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {index + 1}
                  </motion.div>
                  <div className={`${cardStyle} ${activeStep === index ? 'border-[#B4C6EF]/50' : ''}`}>
                    <div className={cardGlow} />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold mb-4 text-white">{step.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{step.description}</p>
                      <ul className="space-y-3">
                        {step.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center justify-center space-x-3 text-gray-400">
                            <span className="text-[#B4C6EF] mt-1">•</span>
                            <span className="text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Section with enhanced cards */}
      <section className="py-24 bg-black/30 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#B4C6EF]/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <h2 className={`text-4xl sm:text-5xl font-bold mb-16 text-center ${gradientText}`}>
              Revenue Recoupment & Financial Commitments
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Marketing & Localisation Costs",
                  description: "Typically, the co-publisher covers all marketing and localisation expenses upfront. These costs must be recouped before profit-sharing begins."
                },
                {
                  title: "Recoupment Thresholds",
                  description: "Once the game generates enough revenue to cover the publisher's initial investment, revenue splits shift in favour of the developer."
                },
                {
                  title: "Non-Recoupable Spend",
                  description: "Some deals allow for a portion of the publisher's marketing budget to be non-recoupable, meaning you start receiving a higher revenue share sooner."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={cardStyle}
                >
                  <div className={cardGlow} />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] flex items-center justify-center mb-6 shadow-lg shadow-[#B4C6EF]/20 mx-auto">
                      <span className="text-2xl">🔹</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.p 
              variants={fadeIn}
              className="mt-12 text-center text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our team negotiates the best recoupment terms so that your game remains profitable as quickly as possible.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section with enhanced cards */}
      <section className="py-24 relative text-center">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <h2 className={`text-4xl sm:text-5xl font-bold mb-16 text-center ${gradientText}`}>
              Why Choose Pixsell Games for Co-Publishing?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: UserGroupIcon,
                  title: "Access to Top-Tier Co-Publishers",
                  description: "We leverage years of experience and strong relationships with China's leading gaming publishers."
                },
                {
                  icon: CurrencyDollarIcon,
                  title: "The Best Possible Deal",
                  description: "Our negotiation expertise ensures you get maximum revenue share and marketing investment."
                },
                {
                  icon: ChartBarIcon,
                  title: "A Seamless Expansion Strategy",
                  description: "We handle everything from localisation to compliance, so you can focus on building great games."
                },
                {
                  icon: RocketLaunchIcon,
                  title: "Proven Track Record",
                  description: "We've helped titles like Kingdom Come Deliverance 2 and Payday 3 become top-sellers in China."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={cardStyle}
                >
                  <div className={cardGlow} />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] p-3 mb-6 shadow-lg shadow-[#B4C6EF]/20 mx-auto">
                      <item.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">{item.title}</h3>
                    <p className="text-gray-400 text-lg leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative text-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#B4C6EF]/5 rounded-full blur-3xl animate-pulse" />
          {/* Add animated particles */}
          <div className="absolute inset-0">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#B4C6EF]/30 rounded-full"
                animate={{
                  y: [20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: 0,
                }}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-[#B4C6EF] font-medium mb-8">
              <span className="h-px w-8 bg-[#B4C6EF]" />
              <span>Get Started Today</span>
              <span className="h-px w-8 bg-[#B4C6EF]" />
            </div>
            <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${gradientText}`}>
              🚀 Expand into China with Confidence
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Join the ranks of successful game studios who have trusted us with their Chinese market expansion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] rounded-full text-white font-semibold text-xl hover:opacity-90 transition-opacity shadow-lg shadow-[#B4C6EF]/20 flex items-center gap-2"
              >
                Book a Free Consultation
                <ArrowRightIcon className="w-6 h-6" />
              </motion.button>
              <button className="px-8 py-4 border border-[#B4C6EF]/30 rounded-full text-white font-semibold text-lg hover:bg-white/5 transition-all duration-300 flex items-center gap-2">
                View Success Stories
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 