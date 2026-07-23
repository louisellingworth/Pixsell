'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Footer from '../../components/Footer'
import { CheckCircleIcon, ArrowRightIcon, ChartBarIcon, ChatBubbleBottomCenterTextIcon, DocumentTextIcon, UserGroupIcon, RocketLaunchIcon, CogIcon } from '@heroicons/react/24/outline'

export default function PartnershipPage() {
  const supportFeatures = [
    {
      title: "Regular Strategy Meetings",
      description: "We schedule frequent check-ins to update you on progress, discuss key developments, and refine strategies as needed."
    },
    {
      title: "Comprehensive Performance Reports",
      description: "Our data-driven reports give you a clear picture of how your game is performing, including player engagement, revenue trends, and market insights."
    },
    {
      title: "Dedicated Support & Availability",
      description: "Our team is always available to answer your questions, provide strategic advice, and ensure everything is running smoothly."
    }
  ]

  const informationFeatures = [
    {
      title: "Monthly Newsletters",
      description: "Insightful updates covering market trends, regulatory changes, and best practices for success in China."
    },
    {
      title: "Industry Reports",
      description: "Detailed reports on player behaviour, platform performance, and new opportunities for growth."
    },
    {
      title: "Exclusive Updates",
      description: "Stay informed about platform changes, marketing opportunities, and emerging challenges that could impact your game."
    }
  ]

  const extraMileFeatures = [
    {
      title: "Proactive Problem-Solving",
      items: [
        "Regulatory compliance monitoring",
        "Marketing campaign optimization",
        "Performance analysis and improvements",
        "Strategic planning and execution"
      ]
    },
    {
      title: "Localised Player Engagement",
      items: [
        "Cultural adaptation strategies",
        "Community management",
        "Player feedback analysis",
        "Engagement optimization"
      ]
    },
    {
      title: "Long-Term Partnership Management",
      items: [
        "Ongoing success monitoring",
        "Growth opportunity identification",
        "Strategic partnership development",
        "Continuous improvement plans"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="pt-24 pb-32 relative">
        {/* Enhanced Background Effects */}
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

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Enhanced Hero Section */}
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
                  className="absolute -bottom-2 left-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
                />
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent inline-block">
                    Partnership Success
                  </span>
                </h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl text-white/70 font-light"
              >
                Your Long-Term Growth Partner
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed text-center"
              >
                At EightSix Games, we believe that successful partnerships are built on{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="inline-block font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent px-1"
                >
                  trust
                </motion.span>
                ,{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="inline-block font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent px-1"
                >
                  transparency
                </motion.span>
                , and{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="inline-block font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent px-1"
                >
                  ongoing collaboration
                </motion.span>
                . Our Partnership Success service ensures that we work closely with our clients at every step of the journey, providing the support, insights, and expertise needed to thrive in the Chinese gaming market.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8"
              >
                <Link
                  href="/services/co-publishing"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl text-lg font-medium relative overflow-hidden group hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                >
                  <motion.div
                    initial={{ x: "100%" }}
                    whileHover={{ x: "-100%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <span className="relative flex items-center gap-2">
                    See How It Works
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

          {/* Enhanced End-to-End Support Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  End-to-End Support
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Comprehensive Support Structure
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                From the moment you partner with us, we provide a structured approach to ensure your game's success in China
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {supportFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 relative h-full flex flex-col items-center text-center">
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-4 mb-8 relative group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300"
                    >
                      {index === 0 && <ChatBubbleBottomCenterTextIcon className="w-12 h-12 text-violet-400" />}
                      {index === 1 && <ChartBarIcon className="w-12 h-12 text-violet-400" />}
                      {index === 2 && <UserGroupIcon className="w-12 h-12 text-violet-400" />}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-violet-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Keeping You Informed Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  Information & Insights
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Keeping You Informed
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                The gaming market moves fast, and staying ahead of trends is critical
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {informationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 relative h-full flex flex-col items-center text-center">
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-20 h-20 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 p-4 mb-8 relative group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-300"
                    >
                      {index === 0 && <DocumentTextIcon className="w-12 h-12 text-violet-400" />}
                      {index === 1 && <ChartBarIcon className="w-12 h-12 text-violet-400" />}
                      {index === 2 && <RocketLaunchIcon className="w-12 h-12 text-violet-400" />}
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-violet-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 text-lg leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced Going the Extra Mile Section */}
          <div className="mb-40">
            <div className="max-w-2xl mx-auto text-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20"
              >
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-medium">
                  Extra Mile Service
                </span>
              </motion.div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                Going Beyond Expectations
              </h2>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto">
                We are committed to your success every step of the way
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {extraMileFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10 hover:border-white/20 transition-all duration-300 relative h-full flex flex-col items-center">
                    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <h3 className="text-2xl font-bold text-white mb-8 text-center group-hover:text-violet-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <ul className="space-y-6 w-full">
                      {feature.items.map((item, i) => (
                        <motion.li 
                          key={i} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                          className="flex items-center gap-4 text-white/60 text-lg group-hover:text-white/70 transition-colors duration-300"
                        >
                          <CheckCircleIcon className="w-6 h-6 text-violet-400 flex-shrink-0" />
                          <span className="text-left">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-black/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              />
              
              <div className="relative z-10 space-y-8">
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-500/20 mx-auto mb-8 p-5"
                >
                  <RocketLaunchIcon className="w-full h-full text-violet-400" />
                </motion.div>
                
                <h2 className="text-4xl sm:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
                    Ready to take your game to the next level?
                  </span>
                </h2>
                
                <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                  Contact us today to explore how our Partnership Success service can help you thrive in the Chinese market.
                </p>
                
                <div className="flex justify-center gap-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-xl text-lg font-medium relative overflow-hidden group/button hover:shadow-lg hover:shadow-violet-500/20 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ x: "100%" }}
                      whileHover={{ x: "-100%" }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <span className="relative flex items-center gap-2">
                      Contact Us Today
                      <ArrowRightIcon className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
} 