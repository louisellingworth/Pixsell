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
  gradientText: "bg-gradient-to-r from-[#fc00ff] to-[#00dbde] bg-clip-text text-transparent",
  gradientBorder: "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-[#fc00ff]/50 before:to-[#00dbde]/50 before:-z-10",
  gradientBg: "bg-gradient-to-r from-[#fc00ff]/10 to-[#00dbde]/10",
  sectionClass: "py-24 md:py-32 relative overflow-hidden",
  containerClass: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
  headingClass: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight",
  subheadingClass: "text-xl md:text-2xl text-gray-400 leading-relaxed",
  cardStyle: "p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00dbde]/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-[#fc00ff]/5",
  cardGlow: "absolute inset-0 bg-gradient-to-r from-[#fc00ff]/20 to-[#00dbde]/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10",
  iconContainer: "w-14 h-14 rounded-2xl bg-gradient-to-r from-[#fc00ff] to-[#00dbde] p-3 mb-6 shadow-lg shadow-[#fc00ff]/20 group-hover:shadow-xl group-hover:shadow-[#fc00ff]/30 transition-all duration-300",
  sectionLabel: "inline-block mb-4 px-6 py-2 rounded-full bg-[#fc00ff]/10 text-[#00dbde] text-sm font-medium tracking-wide uppercase",
  button: "px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:-translate-y-1",
  buttonPrimary: "bg-gradient-to-r from-[#fc00ff] to-[#00dbde] text-white hover:shadow-lg hover:shadow-[#fc00ff]/20",
  buttonSecondary: "border-2 border-[#00dbde] text-[#00dbde] hover:bg-[#00dbde]/10",
  glowEffect: "absolute w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse",
  featureCard: "p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#00dbde]/50 transition-all duration-300 backdrop-blur-sm",
  featureIcon: "w-10 h-10 text-[#00dbde] mb-4",
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
          <div className={`${styles.glowEffect} top-1/4 left-1/4 bg-[#fc00ff]/10`} />
          <div className={`${styles.glowEffect} bottom-1/4 right-1/4 bg-[#00dbde]/10 delay-1000`} />
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
              <div className={`p-6 rounded-2xl ${styles.gradientBg} backdrop-blur-sm shadow-2xl shadow-[#fc00ff]/20`}>
                <LanguageIcon className="w-16 h-16 text-[#00dbde]" />
              </div>
            </div>
            <h1 className={`${styles.headingClass} mb-8 ${styles.gradientText} text-center`}>
              Localisation Guidance
            </h1>
            <div className="space-y-8 mb-12">
              <p className="text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Expert advice on localisation best practices while your co-publisher handles implementation
              </p>
              <div className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
                We guide you through the localisation process, ensuring quality and compliance while your co-publisher manages the execution
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00dbde] mb-2">700M+</div>
                  <div className="text-sm text-gray-400">Active Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00dbde] mb-2">$45B</div>
                  <div className="text-sm text-gray-400">Market Size</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#00dbde] mb-2">15%</div>
                  <div className="text-sm text-gray-400">Annual Growth</div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              <button className={`${styles.button} ${styles.buttonPrimary}`}>
                Get Started
              </button>
              <button className={`${styles.button} ${styles.buttonSecondary}`}>
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer hover:text-[#00dbde] transition-colors duration-300"
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
                    <CheckCircleIcon className="w-6 h-6 text-[#00dbde] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Implementation</p>
                      <p className="text-gray-400">Handles the execution of localisation tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00dbde] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Resource Allocation</p>
                      <p className="text-gray-400">Provides translation teams and technical resources</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00dbde] flex-shrink-0 mt-1" />
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
                    <CheckCircleIcon className="w-6 h-6 text-[#00dbde] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Quality Standards</p>
                      <p className="text-gray-400">Set benchmarks and review localisation quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00dbde] flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white font-medium mb-1">Cultural Guidance</p>
                      <p className="text-gray-400">Ensure cultural appropriateness and resonance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircleIcon className="w-6 h-6 text-[#00dbde] flex-shrink-0 mt-1" />
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
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#00dbde] transition-colors duration-300">
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
                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-[#00dbde] transition-colors duration-300">
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
              <div className="absolute inset-0 bg-gradient-to-b from-[#fc00ff]/5 to-[#00dbde]/5" />
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