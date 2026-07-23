'use client'

import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'
import { 
  ShieldCheckIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  CogIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  XMarkIcon,
  ArrowRightIcon,
  StarIcon,
  GlobeAltIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

export default function AboutContent() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const textRevealVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const hoverVariants: Variants = {
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const listItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const philosophyPoints = [
    {
      icon: ShieldCheckIcon,
      title: "Transparency",
      description: "No hidden terms, no restrictive contracts. Just clear, fair agreements that protect your interests.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: UserGroupIcon,
      title: "Control",
      description: "Developers should own their IP, their decisions, and their future. We ensure you maintain full creative control.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: SparklesIcon,
      title: "Simplicity",
      description: "Expanding into China should be straightforward, not overwhelming. We handle the complexity so you don't have to.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: ChartBarIcon,
      title: "Sustainability",
      description: "Long-term success matters more than just a strong launch. We build lasting partnerships that grow with you.",
      color: "from-orange-500 to-red-500"
    }
  ]

  const services = [
    {
      icon: UserGroupIcon,
      title: "Strategic Partner Matching",
      subtitle: "Finding the Right Partner",
      description: "We match your game with a vetted Chinese co-publisher that aligns with your genre, audience, and business goals.",
      features: [
        "Comprehensive partner qualification and vetting process",
        "Negotiating fair revenue terms and clear responsibilities",
        "Regulatory guidance for ISBN requirements and content approvals"
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: ChartBarIcon,
      title: "Full-Service Marketing & Community",
      subtitle: "Localized Growth Strategy",
      description: "We manage Chinese social media platforms and collaborate with influencers to amplify your reach and build engaged communities.",
      features: [
        "Multi-platform social media management (WeChat, Weibo, Bilibili)",
        "Influencer partnerships and content strategy",
        "Performance tracking and data-driven optimization"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: CogIcon,
      title: "Revenue Optimization & Support",
      subtitle: "Maximizing Your Success",
      description: "Tailored strategies to maximize revenue while staying competitive, with ongoing support to ensure long-term success.",
      features: [
        "Pricing strategy and monetization optimization",
        "Continuous performance monitoring and improvement",
        "Long-term engagement and growth support"
      ],
      color: "from-emerald-500 to-teal-500"
    }
  ]

  const comparison = {
    traditional: [
      "Loss of IP control and creative freedom",
      "Opaque revenue terms and hidden fees",
      "Limited post-launch support and engagement",
      "Complex publishing process with long timelines"
    ],
    eightsix: [
      "Full developer ownership and creative control",
      "Transparent revenue-sharing with no hidden costs",
      "Comprehensive long-term growth and support",
      "Streamlined process handled entirely by our team"
    ]
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Background Effects - Matching Partnership Page */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black/50 to-black opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-900/20 via-black/50 to-black opacity-60" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-violet-500/20 rounded-full filter blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5 
          }}
          className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-purple-500/20 rounded-full filter blur-[150px]" 
        />
      </div>

      <div className="pt-24 pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Premium Hero Section - Matching Partnership Page Style */}
          <div className="min-h-[80vh] flex flex-col justify-center items-center mb-32 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl mx-auto space-y-8 text-center relative"
            >
              {/* Decorative Elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-2xl"
              />
              
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
                />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent inline-block">
                    About EightSix Games
                  </span>
                </h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl text-white/70 font-light"
              >
                Empowering Western Developers in China
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed text-center"
              >
                EightSix Games helps Western PC developers enter the Chinese market with{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="inline-block font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-1"
                >
                  clarity
                </motion.span>
                ,{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="inline-block font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-1"
                >
                  confidence
                </motion.span>
                , and{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline-block font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-1"
                >
                  control
                </motion.span>
                . We specialize in matching developers with the right Chinese co-publisher and managing the entire process, making expansion into China seamless, profitable, and sustainable.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl text-lg font-medium relative overflow-hidden group hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                >
                  <motion.div
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <span className="relative flex items-center gap-2">
                    Schedule a Consultation
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
              >
                <div className="w-1 h-2 bg-white/60 rounded-full" />
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced Introduction Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Our Story
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Built on Experience
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                Founded by industry professionals with experience publishing AAA games, we understand what developers need to succeed globally.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-white/10 hover:border-white/20 transition-all duration-300 relative">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-8 text-center">
                  <motion.p 
                    variants={textRevealVariants} 
                    className="text-xl sm:text-2xl leading-relaxed text-white/90 font-medium"
                  >
                    EightSix Games was built on a simple principle: developers deserve a fair, transparent path to global success. We eliminate guesswork, protect your creative vision, and handle the complexities of the Chinese market so you can focus on making great games.
                  </motion.p>
                  
                  <motion.p 
                    variants={textRevealVariants} 
                    className="text-lg sm:text-xl leading-relaxed text-white/60"
                  >
                    At EightSix Games, we act as a seamless extension of your team, handling everything from publisher matchmaking to marketing, compliance, and revenue optimization. We integrate into your workflow, making the process as effortless as possible.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Philosophy Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Our Philosophy
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Building Lasting Partnerships
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                We believe in building lasting partnerships based on mutual trust and shared success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {philosophyPoints.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 relative h-full">
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300`}
                      >
                        <item.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">{item.title}</h3>
                        <p className="text-white/60 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Services Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  How We Help
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Comprehensive Support
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                The Chinese market offers tremendous opportunities, but navigating its complexities requires expertise. We remove these obstacles with our comprehensive, streamlined approach to market entry.
              </p>
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-300 relative">
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300`}
                      >
                        <service.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors duration-300">{service.title}</h3>
                          <p className="text-violet-300 font-medium">{service.subtitle}</p>
                        </div>
                        <p className="text-white/60 leading-relaxed mb-6 text-lg">{service.description}</p>
                        <div className="space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div 
                              key={featureIndex} 
                              className="flex items-start gap-3"
                              variants={listItemVariants}
                            >
                              <CheckCircleIcon className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <p className="text-white/70">{feature}</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Comparison Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Why Choose Us
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                The EightSix Advantage
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                Compare our approach with traditional publishing models and see why developers choose us for their China market entry.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10 hover:border-white/20 transition-all duration-300 relative">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-8">
                      <XMarkIcon className="w-8 h-8 text-red-400" />
                      <h3 className="text-2xl font-bold text-white">Traditional Publishers</h3>
                    </div>
                    <ul className="space-y-4">
                      {comparison.traditional.map((point, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-4"
                          variants={listItemVariants}
                        >
                          <XMarkIcon className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                          <span className="text-white/70">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 mb-8">
                      <CheckCircleIcon className="w-8 h-8 text-emerald-400" />
                      <h3 className="text-2xl font-bold text-white">EightSix Games Advantage</h3>
                    </div>
                    <ul className="space-y-4">
                      {comparison.eightsix.map((point, index) => (
                        <motion.li 
                          key={index} 
                          className="flex items-start gap-4"
                          variants={listItemVariants}
                        >
                          <CheckCircleIcon className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                          <span className="text-white/70">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Vision Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                  Our Vision
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Redefining Success
              </h2>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-white/10 hover:border-white/20 transition-all duration-300 relative">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <motion.p 
                  variants={textRevealVariants} 
                  className="text-xl sm:text-2xl leading-relaxed text-white/90 font-medium text-center"
                >
                  We want to redefine how Western developers succeed in China: no more vague deals, no more complicated partnerships. Just a clear, efficient, and fair way to expand your game's reach and revenue.
                </motion.p>
              </div>
            </motion.div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mb-40">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-gradient-to-br from-violet-900/30 via-black/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="text-center relative z-10">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 mb-8"
                  >
                    <RocketLaunchIcon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
                  <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
                    If you're ready to bring your game to China without the stress, EightSix Games is here to manage everything for you. Let's discuss your project and create a tailored strategy for success.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl text-lg font-medium relative overflow-hidden group hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                    >
                      <motion.div
                        initial={{ x: "100%" }}
                        whileHover={{ x: "-100%" }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      <span className="relative flex items-center gap-2">
                        Schedule a Consultation
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}