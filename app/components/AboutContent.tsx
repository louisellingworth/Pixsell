'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

export default function AboutContent() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  const hoverVariants = {
    hover: {
      scale: 1.03,
      y: -5
    }
  }

  const listItemVariants = {
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
      icon: "🔹",
      title: "Transparency",
      description: "No hidden terms, no restrictive contracts. Just clear, fair agreements."
    },
    {
      icon: "🔹",
      title: "Control",
      description: "Developers should own their IP, their decisions, and their future."
    },
    {
      icon: "🔹",
      title: "Simplicity",
      description: "Expanding into China should be straightforward, not overwhelming."
    },
    {
      icon: "🔹",
      title: "Sustainability",
      description: "Long-term success matters more than just a strong launch."
    }
  ]

  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2.25l2-6 3.5 10.5L13.75 7l2 6H18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21H3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 3v18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v8" />
          <circle cx="12" cy="15" r="1" />
        </svg>
      ),
      title: "1. Publisher Matching & Market Entry",
      description: "Finding the Right Partner – We match your game with a vetted Chinese co-publisher that aligns with your genre, audience, and business goals.",
      features: [
        "Negotiating the Best Deal – We secure fair revenue terms and ensure both parties' responsibilities are clear",
        "Regulatory Guidance – We navigate ISBN requirements and content approvals where necessary"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 19.5c-1.5-2-3.3-3-5.5-3s-4 1-5.5 3" />
        </svg>
      ),
      title: "2. Full-Service Marketing & Community Management",
      description: "Localised Marketing – We manage Chinese social media (WeChat, Weibo) and collaborate with influencers to amplify reach.",
      features: [
        "Community Growth – Working closely with your co-publisher, we build and engage player communities on platforms like QQ and Bilibili",
        "Performance Tracking – We monitor data and adjust marketing strategies for sustained growth"
      ]
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 19h18" />
          <circle cx="7" cy="5" r="1" />
          <circle cx="12" cy="12" r="1" />
          <circle cx="17" cy="19" r="1" />
        </svg>
      ),
      title: "3. Revenue Optimisation & Ongoing Support",
      description: "Pricing & Monetisation – Tailored strategies to maximise revenue while staying competitive.",
      features: [
        "Long-Term Engagement – Ongoing support beyond launch to ensure your game thrives in China"
      ]
    }
  ]

  const comparison = {
    traditional: [
      "Loss of IP control",
      "Opaque revenue terms",
      "Limited post-launch support",
      "Complex publishing process"
    ],
    pixsell: [
      "Full developer ownership",
      "Transparent revenue-sharing model",
      "Long-term growth focus",
      "We handle everything—seamless and stress-free"
    ]
  }

  return (
    <div ref={containerRef} className="min-h-screen py-32 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent animate-pulse" />
        <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-gradient-radial from-blue-500/10 via-transparent to-transparent animate-pulse" />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-[100px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2] 
          }} 
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5 
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full filter blur-[100px]" 
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 space-y-40 relative">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center relative max-w-5xl mx-auto"
        >
          <motion.div
            className="absolute -inset-x-20 -top-16 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          <motion.h1 
            variants={textRevealVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            <motion.span 
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              About Pixsell Games
            </motion.span>
          </motion.h1>
          <motion.div
            className="absolute -inset-x-20 -bottom-16 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          />
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute -inset-x-32 -inset-y-16 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5 rounded-3xl" />
          <motion.div 
            className="bg-gradient-to-br from-purple-900/30 via-black/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 shadow-xl shadow-purple-500/5 relative"
            variants={cardVariants}
            whileHover={hoverVariants.hover}
          >
            <motion.p 
              variants={textRevealVariants} 
              className="text-2xl leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-pink-200 mb-10"
            >
              Pixsell Games helps Western PC developers enter the Chinese market with clarity, confidence, and control. We specialise in matching developers with the right Chinese co-publisher and managing the entire process, making expansion into China seamless, profitable, and sustainable.
            </motion.p>
            <motion.p 
              variants={textRevealVariants} 
              className="text-xl leading-relaxed text-gray-300 mb-10"
            >
              Founded by an industry professional with experience publishing AAA games, Pixsell Games was built on a simple idea: developers should have a fair, transparent path to global success. We eliminate guesswork, protect your creative vision, and handle the complexities of the Chinese market so you can focus on making great games.
            </motion.p>
            <motion.p 
              variants={textRevealVariants} 
              className="text-xl leading-relaxed text-gray-300"
            >
              At Pixsell Games, we act as a plug-in to your company, handling everything from publisher matchmaking to marketing, compliance, and revenue optimisation. We seamlessly integrate into your workflow, making the process as easy as possible.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Our Philosophy Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center relative"
        >
          <div className="absolute -inset-x-32 -inset-y-16 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5 rounded-3xl" />
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center relative"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our Philosophy
            </span>
          </motion.h2>
          <motion.p variants={cardVariants} className="text-xl text-gray-300 text-center mb-16">
            We believe in:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-10">
            {philosophyPoints.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={hoverVariants.hover}
                className="bg-gradient-to-br from-purple-900/30 via-black/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-purple-500/5 relative"
              >
                <div className="flex flex-col items-center gap-6">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How We Help Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center relative"
        >
          <div className="absolute -inset-x-32 -inset-y-16 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5 rounded-3xl" />
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center relative"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              How We Help
            </span>
          </motion.h2>
          <motion.p variants={cardVariants} className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            The Chinese market is full of opportunity, but it comes with challenges—language barriers, legal requirements, and cultural differences that can hold developers back. We remove these obstacles, offering a streamlined approach to market entry.
          </motion.p>
          <div className="space-y-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={hoverVariants.hover}
                className="bg-gradient-to-br from-purple-900/30 via-black/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-purple-500/5 relative"
              >
                <div className="flex flex-col items-center gap-8">
                  <div className="text-purple-400 transform hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-6">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed mb-8 text-lg">{service.description}</p>
                    <div className="space-y-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-4">
                          <span className="text-emerald-400 text-xl mt-1">✓</span>
                          <p className="text-gray-300 text-left text-lg">{feature}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Pixsell Games Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center relative"
        >
          <div className="absolute -inset-x-32 -inset-y-16 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5 rounded-3xl" />
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center relative"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Why Choose Pixsell Games?
            </span>
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-br from-purple-900/30 via-black/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-purple-500/5 relative"
            variants={cardVariants}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-8">Traditional Publishers</h3>
                <ul className="space-y-6">
                  {comparison.traditional.map((point, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="text-red-400 text-2xl">✗</span>
                      <span className="text-gray-300 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-white mb-8">Pixsell Games Advantage</h3>
                <ul className="space-y-6">
                  {comparison.pixsell.map((point, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <span className="text-emerald-400 text-2xl">✓</span>
                      <span className="text-gray-300 text-lg">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Our Vision Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute -inset-x-32 -inset-y-16 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5 rounded-3xl" />
          <motion.h2 
            variants={cardVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center relative"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our Vision
            </span>
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-br from-purple-900/30 via-black/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-12 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 shadow-xl shadow-purple-500/5 relative"
            variants={cardVariants}
            whileHover={hoverVariants.hover}
          >
            <motion.p 
              variants={textRevealVariants} 
              className="text-xl leading-relaxed text-gray-300 text-lg"
            >
              We want to redefine how Western developers succeed in China—no more vague deals, no more complicated partnerships. Just a clear, efficient, and fair way to expand.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute -inset-x-32 -inset-y-16 bg-gradient-to-b from-purple-500/5 via-transparent to-purple-500/5 rounded-3xl" />
          <motion.div 
            variants={cardVariants}
            whileHover={hoverVariants.hover}
            className="bg-gradient-to-br from-purple-900/30 via-black/30 to-purple-900/30 backdrop-blur-xl rounded-2xl p-16 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 shadow-xl shadow-purple-500/5 relative"
          >
            <h2 className="text-4xl font-bold mb-8 text-white">Let's Talk</h2>
            <p className="text-xl text-gray-300 mb-12">
              If you're ready to bring your game to China without the stress, Pixsell Games is here to manage everything for you.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-xl font-semibold text-white text-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group transform hover:scale-[1.02]"
              >
                Schedule a Consultation
                <svg 
                  className="w-6 h-6 ml-3 transform transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}