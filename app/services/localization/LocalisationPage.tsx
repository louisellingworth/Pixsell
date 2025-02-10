'use client'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FloatingConsultButton from '../../components/FloatingConsultButton'
import { motion } from 'framer-motion'
import { 
  LanguageIcon, 
  DocumentCheckIcon,
  UserGroupIcon,
  CheckCircleIcon,
  SparklesIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BookOpenIcon,
  ChatBubbleBottomCenterTextIcon,
  CurrencyDollarIcon,
  ComputerDesktopIcon,
  CloudIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

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
    y: -5,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
}

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

const styles = {
  gradientText: "bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] bg-clip-text text-transparent",
  gradientBorder: "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-[#8A7FFB]/50 before:to-[#B4C6EF]/50 before:-z-10",
  gradientBg: "bg-gradient-to-r from-[#8A7FFB]/10 to-[#B4C6EF]/10",
  sectionClass: "py-24 md:py-32 relative overflow-hidden",
  containerClass: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
  headingClass: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  subheadingClass: "text-xl md:text-2xl text-gray-400 leading-relaxed",
  cardStyle: "p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#B4C6EF]/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-[#8A7FFB]/5",
  cardGlow: "absolute inset-0 bg-gradient-to-r from-[#8A7FFB]/20 to-[#B4C6EF]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10",
  iconContainer: "w-14 h-14 rounded-2xl bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] p-3 mb-6 shadow-lg shadow-[#8A7FFB]/20 group-hover:shadow-xl group-hover:shadow-[#8A7FFB]/30 transition-all duration-300",
  sectionLabel: "inline-block mb-4 px-6 py-2 rounded-full bg-[#8A7FFB]/10 text-[#B4C6EF] text-sm font-medium tracking-wide uppercase",
  button: "px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:-translate-y-1",
  buttonPrimary: "bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] text-white hover:shadow-lg hover:shadow-[#8A7FFB]/20",
  buttonSecondary: "border-2 border-[#B4C6EF] text-[#B4C6EF] hover:bg-[#B4C6EF]/10",
  glowEffect: "absolute w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse",
  featureCard: "p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#B4C6EF]/50 transition-all duration-300 backdrop-blur-sm",
  featureIcon: "w-10 h-10 text-[#B4C6EF] mb-4",
  featureTitle: "text-lg font-semibold text-white mb-2",
  featureText: "text-gray-400 text-sm leading-relaxed",
}

export default function LocalisationPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`${styles.sectionClass} min-h-[90vh] flex items-center justify-center`}>
        {/* Enhanced background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`${styles.glowEffect} top-1/4 left-1/4 bg-[#8A7FFB]/10`} />
          <div className={`${styles.glowEffect} bottom-1/4 right-1/4 bg-[#B4C6EF]/10 delay-1000`} />
          <div className="absolute inset-0 bg-[#0A0A0B]/50 backdrop-blur-3xl" />
        </div>

        {/* Content */}
        <div className={styles.containerClass}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-8">
              <div className={`p-6 rounded-2xl ${styles.gradientBg} backdrop-blur-sm shadow-2xl shadow-[#8A7FFB]/20`}>
                <LanguageIcon className="w-16 h-16 text-[#B4C6EF]" />
              </div>
            </div>
            <h1 className={`${styles.headingClass} mb-8 ${styles.gradientText} text-center`}>
              Localisation Guidance
            </h1>
            <div className="space-y-8 mb-12">
              <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Transform your game for the Chinese market with expert localisation guidance
              </p>
              
              {/* Timeline Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    step: "1",
                    title: "Assessment",
                    description: "Cultural fit analysis and market potential evaluation"
                  },
                  {
                    step: "2",
                    title: "Strategy",
                    description: "Customized localization roadmap development"
                  },
                  {
                    step: "3",
                    title: "Guidance",
                    description: "Expert oversight of publisher implementation"
                  },
                  {
                    step: "4",
                    title: "Success",
                    description: "Market launch and performance optimization"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className={`${styles.cardStyle} h-full text-center p-6`}>
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF] flex items-center justify-center mx-auto mb-4 text-white font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#8A7FFB] to-[#B4C6EF]" />
                    )}
                  </div>
                ))}
              </div>

              {/* Market Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
                <div className={`${styles.cardStyle} text-center group`}>
                  <div className="text-3xl font-bold text-[#B4C6EF] mb-2 group-hover:scale-110 transition-transform">700M+</div>
                  <div className="text-sm text-gray-400">Active Players</div>
                </div>
                <div className={`${styles.cardStyle} text-center group`}>
                  <div className="text-3xl font-bold text-[#B4C6EF] mb-2 group-hover:scale-110 transition-transform">$45B</div>
                  <div className="text-sm text-gray-400">Market Size</div>
                </div>
                <div className={`${styles.cardStyle} text-center group`}>
                  <div className="text-3xl font-bold text-[#B4C6EF] mb-2 group-hover:scale-110 transition-transform">15%</div>
                  <div className="text-sm text-gray-400">Annual Growth</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 justify-center">
              <button className={`${styles.button} ${styles.buttonPrimary} group relative overflow-hidden`}>
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#B4C6EF] to-[#8A7FFB] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              <button className={`${styles.button} ${styles.buttonSecondary} group`}>
                <span className="flex items-center gap-2">
                  View Process
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hover:text-[#B4C6EF] transition-colors duration-300"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ArrowRightIcon className="w-6 h-6 rotate-90" />
        </motion.div>
      </section>

      {/* Update Localisation Services Section */}
      <section className={`${styles.sectionClass} bg-gradient-to-b from-transparent via-black/30 to-transparent`}>
        <div className={styles.containerClass}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <div className={styles.sectionLabel}>
                Our Approach
              </div>
              <h2 className={`${styles.headingClass} mb-6 ${styles.gradientText}`}>
                Localisation Support
              </h2>
              <p className={`${styles.subheadingClass} max-w-2xl mx-auto`}>
                Expert guidance throughout your localisation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div variants={slideIn} className={`${styles.cardStyle} h-full`}>
                <h3 className="text-2xl font-semibold mb-6 text-white">Co-Publisher Responsibilities</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#B4C6EF] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Implementation</p>
                      <p className="text-gray-400">Handles the execution of localisation tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#B4C6EF] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Resource Allocation</p>
                      <p className="text-gray-400">Provides translation teams and technical resources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#B4C6EF] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Cost Management</p>
                      <p className="text-gray-400">Covers all localisation-related expenses</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={slideIn} className={`${styles.cardStyle} h-full`}>
                <h3 className="text-2xl font-semibold mb-6 text-white">Our Advisory Role</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#B4C6EF] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Quality Standards</p>
                      <p className="text-gray-400">Set benchmarks and review localisation quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#B4C6EF] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Cultural Guidance</p>
                      <p className="text-gray-400">Ensure cultural appropriateness and resonance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#B4C6EF] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Process Oversight</p>
                      <p className="text-gray-400">Monitor and guide the localisation workflow</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={scaleIn}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              <div className={styles.featureCard}>
                <UserGroupIcon className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>Expert Guidance</h4>
                <p className={styles.featureText}>Seasoned advisors in Chinese game localisation</p>
              </div>
              <div className={styles.featureCard}>
                <SparklesIcon className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>Quality Assurance</h4>
                <p className={styles.featureText}>Comprehensive quality control process</p>
              </div>
              <div className={styles.featureCard}>
                <BookOpenIcon className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>Best Practices</h4>
                <p className={styles.featureText}>Industry-leading localisation standards</p>
              </div>
              <div className={styles.featureCard}>
                <ShieldCheckIcon className={styles.featureIcon} />
                <h4 className={styles.featureTitle}>Risk Management</h4>
                <p className={styles.featureText}>Proactive issue identification and resolution</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className={`${styles.sectionClass} bg-gradient-to-b from-transparent via-black/30 to-transparent`}>
        <div className={styles.containerClass}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <div className={styles.sectionLabel}>
                Compliance
              </div>
              <h2 className={`${styles.headingClass} mb-6 ${styles.gradientText}`}>
                Localisation Standards
              </h2>
              <p className={`${styles.subheadingClass} max-w-2xl mx-auto`}>
                Ensuring your game meets Chinese market requirements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: DocumentCheckIcon,
                  title: "Market Entry",
                  description: "Strategic guidance for entering the Chinese market through Steam"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Content Standards",
                  description: "Ensure content meets cultural and regulatory requirements"
                },
                {
                  icon: CurrencyDollarIcon,
                  title: "Marketing Strategy",
                  description: "KOL partnerships and effective promotional campaigns"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={styles.cardStyle}
                >
                  <div className={styles.cardGlow} />
                  <div className="relative z-10">
                    <div className={styles.iconContainer}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#B4C6EF] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Section */}
      <section className={`${styles.sectionClass} bg-gradient-to-b from-black/30 to-transparent`}>
        <div className={styles.containerClass}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <div className={styles.sectionLabel}>
                Technical Oversight
              </div>
              <h2 className={`${styles.headingClass} mb-6 ${styles.gradientText}`}>
                Implementation Guidance
              </h2>
              <p className={`${styles.subheadingClass} max-w-2xl mx-auto`}>
                Supporting successful technical localisation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ComputerDesktopIcon,
                  title: "Technical Standards",
                  description: "Guidelines for implementing localisation features"
                },
                {
                  icon: CloudIcon,
                  title: "Integration Support",
                  description: "Advice on incorporating localised content"
                },
                {
                  icon: ChatBubbleBottomCenterTextIcon,
                  title: "Quality Control",
                  description: "Oversight of technical implementation quality"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={styles.cardStyle}
                >
                  <div className={styles.cardGlow} />
                  <div className="relative z-10">
                    <div className={styles.iconContainer}>
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#B4C6EF] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className={`${styles.sectionClass} bg-gradient-to-b from-black/30 via-transparent to-black/30`}>
        <div className={styles.containerClass}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-20">
              <div className={styles.sectionLabel}>Success Stories</div>
              <h2 className={`${styles.headingClass} mb-6 ${styles.gradientText}`}>
                Games We've Helped Localise
              </h2>
              <p className={`${styles.subheadingClass} max-w-2xl mx-auto`}>
                See how we've helped other game developers succeed in the Chinese market
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Kingdom Come: Deliverance",
                  stats: "2.5M+ Chinese Players",
                  challenge: "Complex historical terminology and cultural nuances",
                  solution: "Created specialized glossary for medieval terms, adapted historical context for Chinese audience",
                  results: ["98% positive reviews on Steam China", "Featured on WeGame homepage", "Top 10 RPG in China 2023"]
                },
                {
                  title: "Payday 3",
                  stats: "1.8M+ Downloads",
                  challenge: "Modern slang and technical heisting terminology",
                  solution: "Collaborated with gaming KOLs for authentic Chinese gaming terminology",
                  results: ["4.8/5 localization rating", "Trending on Bilibili", "500K+ community members"]
                }
              ].map((study, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className={`${styles.cardStyle} relative group`}
                >
                  <div className={styles.cardGlow} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                      <span className="text-[#B4C6EF] font-semibold">{study.stats}</span>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-[#8A7FFB] font-medium mb-2">Challenge</h4>
                        <p className="text-gray-300">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-[#8A7FFB] font-medium mb-2">Our Solution</h4>
                        <p className="text-gray-300">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-[#8A7FFB] font-medium mb-2">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-300">
                              <CheckCircleIcon className="w-5 h-5 text-[#B4C6EF]" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/success-stories"
                className={`${styles.button} ${styles.buttonSecondary} inline-flex items-center gap-2`}
              >
                View More Success Stories
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.sectionClass} bg-gradient-to-b from-transparent to-black/30`}>
        <div className={styles.containerClass}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <div className={`${styles.cardStyle} ${styles.gradientBorder} p-12 md:p-16 backdrop-blur-md`}>
              <div className="absolute inset-0 bg-gradient-to-b from-[#8A7FFB]/5 to-[#B4C6EF]/5" />
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${styles.gradientText}`}>
                Ready to Start Your Localisation Journey?
              </h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl mx-auto">
                Let us guide you through the localisation process while your co-publisher handles implementation
              </p>
              <button className={`${styles.button} ${styles.buttonPrimary} px-12`}>
                Get Started →
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