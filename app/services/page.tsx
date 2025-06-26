'use client'

import { useRef } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FloatingConsultButton from '../components/FloatingConsultButton'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  SparklesIcon,
  GlobeAltIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    title: "Co-Publishing Solutions",
    subtitle: "Strategic Market Entry",
    description: "Partner with us to bring your game to the Chinese market. Our co-publishing service ensures your game reaches the right audience while maintaining the highest publishing standards.",
    features: ["Publisher Partnerships", "Market Strategy", "Revenue Optimisation", "Launch Support"],
    href: "/services/co-publishing",
    icon: UserGroupIcon,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Marketing & Promotion",
    subtitle: "Localized Growth Strategy",
    description: "Reach Chinese gamers through strategic marketing campaigns. Our expertise in local platforms and influencer networks helps your game stand out.",
    features: ["KOL Partnerships", "Social Media Strategy", "Platform Optimisation", "Community Building"],
    href: "/services/marketing",
    icon: ChartBarIcon,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Localisation Services",
    subtitle: "Cultural Adaptation",
    description: "Adapt your game for Chinese players with our comprehensive localisation services. We ensure cultural authenticity while maintaining your game's core appeal.",
    features: ["Cultural Adaptation", "Text Translation", "Asset Localisation", "Quality Assurance"],
    href: "/services/localisation",
    icon: GlobeAltIcon,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Partnership Success",
    subtitle: "Ongoing Support",
    description: "Discover our approach to ensuring your success in the Chinese market through dedicated support, regular communication, and comprehensive reporting.",
    features: ["Regular Strategy Meetings", "Comprehensive Reports", "Dedicated Support", "Market Insights"],
    href: "/services/partnership",
    icon: ChatBubbleBottomCenterTextIcon,
    color: "from-orange-500 to-red-500"
  }
]

const additionalServices = [
  {
    title: "Market Strategy & Analysis",
    description: "Data-driven insights to position your game for maximum success in the Chinese market.",
    icon: DocumentTextIcon,
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Revenue Optimization",
    description: "Maximize your earnings through strategic pricing and monetization strategies.",
    icon: CogIcon,
    color: "from-green-500 to-emerald-500"
  }
]

export default function ServicesPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          contain: 'layout paint style'
        }}
      >
        <Navigation />
      </div>
      
      {/* Spacer for fixed navbar */}
      <div className="h-12 md:h-16"></div>

      {/* Enhanced Background Effects - Matching Premium Design */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black/50 to-black opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-pink-900/20 via-black/50 to-black opacity-60" />
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
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-pink-500/20 rounded-full filter blur-[150px]" 
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

      <div className="relative z-10 pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Premium Hero Section */}
          <div className="min-h-[60vh] flex flex-col justify-center items-center mb-32 relative">
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
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"
              />
              
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent"
                />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent inline-block">
                    Our Services
                  </span>
                </h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl text-white/70 font-light"
              >
                Comprehensive Solutions for China
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed text-center"
              >
                From{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="inline-block font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent px-1"
                >
                  strategic partnerships
                </motion.span>
                {' '}to{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="inline-block font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent px-1"
                >
                  localized marketing
                </motion.span>
                , we provide end-to-end solutions that ensure your game thrives in the Chinese market.
              </motion.p>
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

          {/* Enhanced Services Grid */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20"
              >
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  Core Services
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                End-to-End Solutions
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                Our comprehensive suite of services covers every aspect of bringing your game to the Chinese market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Link href={service.href}>
                    <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative h-full">
                      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className="text-center">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} p-5 mb-8 group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all duration-300`}
                        >
                          <service.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-pink-300 font-medium mb-6">{service.subtitle}</p>
                        <p className="text-white/60 leading-relaxed mb-8 text-lg">{service.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-8">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                              className="flex items-center justify-center text-sm text-white/70 group-hover:text-white transition-colors duration-200"
                            >
                              <CheckCircleIcon className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0" />
                              <span className="text-center">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                        
                        <motion.div 
                          className="flex items-center justify-center text-pink-400 group-hover:text-purple-400 transition-colors duration-200"
                          whileHover={{ x: 5 }}
                        >
                          <span className="font-medium">Learn more</span>
                          <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Additional Services Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20"
              >
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  Specialized Support
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Additional Expertise
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                Beyond our core services, we offer specialized expertise to maximize your success in China.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative h-full">
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="flex items-start gap-6">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all duration-300`}
                      >
                        <service.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">{service.title}</h3>
                        <p className="text-white/60 leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              <div className="bg-gradient-to-br from-pink-900/30 via-black/50 to-purple-900/30 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="text-center relative z-10">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-8"
                  >
                    <RocketLaunchIcon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Ready to Get Started?</h2>
                  <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
                    Let's discuss your game and create a tailored strategy for success in the Chinese market. Our team is ready to help you navigate every step of the journey.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-3"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl text-lg font-medium relative overflow-hidden group hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
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

      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 