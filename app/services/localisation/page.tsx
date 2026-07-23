'use client'

import Footer from '../../components/Footer'
import FloatingConsultButton from '../../components/FloatingConsultButton'
import { motion, type Variants } from 'framer-motion'
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
  CloudIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const fadeIn: Variants = {
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
}

const cardVariants: Variants = {
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

const slideIn: Variants = {
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

const scaleIn: Variants = {
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
  gradientText: "bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent",
  gradientBorder: "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-purple-500/50 before:via-pink-500/50 before:to-purple-500/50 before:-z-10",
  gradientBg: "bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10",
  sectionClass: "py-24 md:py-32 relative overflow-hidden",
  containerClass: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
  headingClass: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight break-words sm:break-normal",
  subheadingClass: "text-xl md:text-2xl text-gray-400 leading-relaxed",
  cardStyle: "p-8 md:p-10 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/10",
  cardGlow: "absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10",
  iconContainer: "w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 mb-6 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300 border border-white/20",
  sectionLabel: "inline-block mb-4 px-6 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wide uppercase",
  button: "px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:-translate-y-1",
  buttonPrimary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/20",
  buttonSecondary: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10",
  glowEffect: "absolute w-[500px] h-[500px] rounded-full blur-[100px] animate-pulse",
  featureCard: "p-6 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm",
  featureIcon: "w-10 h-10 text-purple-400 mb-4",
  featureTitle: "text-lg font-semibold text-white mb-2",
  featureText: "text-gray-400 text-sm leading-relaxed",
}

const floatAnimation: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const pulseAnimation: Variants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

export default function LocalisationPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 sm:pt-40 md:pt-48 pb-24 sm:pb-32 md:pb-40 px-4 sm:px-6 lg:px-8">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/50 to-black -z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-purple-900/20 mix-blend-overlay -z-10" />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 -z-10"
          >
            <div className={`${styles.glowEffect} top-1/4 left-1/4 bg-purple-500/10 -z-10`} />
            <div className={`${styles.glowEffect} bottom-1/4 right-1/4 bg-violet-400/10 delay-1000 -z-10`} />
          </motion.div>
          {/* Animated gradient mesh */}
          <div className="absolute inset-0 opacity-30 -z-10">
            <motion.div
              animate={{
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 60% 40%, rgba(219, 39, 119, 0.2) 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -z-10"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div 
                variants={pulseAnimation}
                initial="initial"
                animate="animate"
                className={`p-6 rounded-2xl ${styles.gradientBg} backdrop-blur-sm shadow-2xl shadow-purple-500/20 relative group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <LanguageIcon className="w-16 h-16 text-purple-400 relative z-10 transform group-hover:scale-110 transition-transform duration-300" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-full mx-auto px-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center mb-8">
                <span className="block sm:inline">Expert Game</span>{' '}
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent inline-block">
                  Localisation
                </span>{' '}
                <span className="block sm:inline">for China</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                We connect you with trusted co-publishers and localisation experts to transform your game for the Chinese market
              </p>
              
              {/* Added clarification box */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-purple-900/30 border border-white/20 rounded-xl p-4 md:p-6 max-w-2xl mx-auto mb-10 backdrop-blur-sm"
              >
                <p className="text-white/80 text-base md:text-lg leading-relaxed">
                  While we don't provide localisation services directly, we work closely with co-publishers to offer expert guidance and can connect you with trusted localisation specialists in our network.
                </p>
              </motion.div>

              {/* Enhanced Timeline Steps */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {[
                  {
                    step: "1",
                    title: "Cultural Assessment",
                    description: "Deep analysis of your game's cultural elements and market fit",
                    icon: BookOpenIcon
                  },
                  {
                    step: "2",
                    title: "Localisation Strategy",
                    description: "Comprehensive roadmap for cultural and linguistic adaptation",
                    icon: DocumentCheckIcon
                  },
                  {
                    step: "3",
                    title: "Expert Guidance",
                    description: "Hands-on support throughout the localisation process",
                    icon: UserGroupIcon
                  },
                  {
                    step: "4",
                    title: "Quality Assurance",
                    description: "Rigorous testing and validation of localised content",
                    icon: CheckCircleIcon
                  }
                ].map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.step}
                      variants={fadeIn}
                      className="p-6 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-center"
                    >
                      <div className="relative mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 mb-4 mx-auto shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 border border-white/20">
                          <Icon className="w-8 h-8 text-purple-400" />
                        </div>
                        {index < 3 && (
                          <div className="hidden md:block absolute top-1/2 -right-12 w-24 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent" />
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-400">{step.description}</p>
                    </motion.div>
                  )
                })}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 relative z-20"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="/contact"
                  variants={fadeIn}
                  className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 relative z-20 backdrop-blur-sm flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Get Started</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
                </motion.a>
                <motion.a
                  href="#services"
                  variants={fadeIn}
                  className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 border-2 border-purple-500 text-purple-400 bg-black/40 hover:bg-purple-500/20 relative z-20 backdrop-blur-sm shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 flex items-center justify-center"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Learn More</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wide uppercase">Our Services</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Localisation</span>{' '}
              Advisory
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              Expert guidance and connections to help your game succeed in the Chinese market
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: SparklesIcon,
                title: "Cultural Consultation",
                description: "Expert guidance on adapting your game's content, themes, and mechanics for Chinese players",
                features: ["Content Analysis", "Cultural Advisory", "Partner Recommendations"]
              },
              {
                icon: ShieldCheckIcon,
                title: "Compliance Guidance",
                description: "Navigate Chinese gaming regulations through our network of partners and experts",
                features: ["Regulatory Overview", "Compliance Strategy", "Expert Referrals"]
              },
              {
                icon: ChatBubbleBottomCenterTextIcon,
                title: "Translation Partner Matching",
                description: "We connect you with high-quality translation services that capture your game's essence",
                features: ["Partner Vetting", "Service Coordination", "Quality Benchmarking"]
              },
              {
                icon: CurrencyDollarIcon,
                title: "Monetization Strategy",
                description: "Guidance on adapting your monetization strategy for the Chinese market's unique characteristics",
                features: ["Market Analysis", "Pricing Consultation", "Co-publisher Integration"]
              },
              {
                icon: ComputerDesktopIcon,
                title: "Technical Advisory",
                description: "Recommendations for optimizing your game's technical elements for Chinese platforms",
                features: ["Platform Requirements", "Technical Assessment", "Partner Coordination"]
              },
              {
                icon: CloudIcon,
                title: "Ongoing Consultation",
                description: "Continuous advice and partner coordination throughout your game's lifecycle in China",
                features: ["Performance Monitoring", "Partner Management", "Strategic Adaptation"]
              }
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={cardVariants}
                  whileHover="hover"
                  className="p-6 md:p-8 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group hover:shadow-2xl hover:shadow-purple-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3 mb-6 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300 border border-white/20">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        variants={slideIn}
                        className="flex items-center text-sm text-gray-300"
                      >
                        <CheckCircleIcon className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.sectionClass}>
        <div className={styles.containerClass}>
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block mb-4 px-6 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium tracking-wide uppercase">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Advisor</span>{' '}
              for China
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              We connect you with the right partners and provide expert guidance to ensure your success
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: ChartBarIcon,
                title: "Market Expertise",
                description: "Deep understanding of Chinese gaming market trends and player preferences to guide your localisation strategy"
              },
              {
                icon: UserGroupIcon,
                title: "Strong Network",
                description: "Established relationships with leading co-publishers and localisation specialists across China"
              },
              {
                icon: RocketLaunchIcon,
                title: "Strategic Guidance",
                description: "Efficient advisory process to help you navigate the complexities of the Chinese market"
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  variants={scaleIn}
                  className={styles.cardStyle}
                >
                  <div className={styles.cardGlow} />
                  <div className={styles.iconContainer}>
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Ready to{' '}
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Connect</span>{' '}
              With Experts?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed mb-12">
              Let's discuss how we can help you find the right localisation partners for the Chinese market
            </p>
            <motion.a
              href="/contact"
              variants={floatAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 relative z-20 backdrop-blur-sm inline-flex items-center"
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started</span>
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingConsultButton />
    </main>
  )
}