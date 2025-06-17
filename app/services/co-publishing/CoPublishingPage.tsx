'use client'

import { useRef, useState } from 'react'
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
  SparklesIcon,
  BanknotesIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FloatingConsultButton from '../../components/FloatingConsultButton'

// Animation variants
const animations = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  },
  cardVariants: {
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
}

// Style constants 
const styles = {
  gradientText: "bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent",
  cardStyle: "p-8 rounded-2xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 hover:border-purple-500/40 transition-colors backdrop-blur-sm relative overflow-hidden group text-center",
  cardGlow: "absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10",
  shimmer: "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
}

// Types for card props
type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
};

// Reusable FeatureCard component
const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => (
  <motion.div
    variants={animations.cardVariants}
    whileHover="hover"
    className={styles.cardStyle}
  >
    <div className={styles.cardGlow} />
    <div className="relative z-10">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-3 mb-6 mx-auto">
        <Icon className="w-full h-full text-white" aria-hidden="true" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Reusable CTAButton component
type CTAButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
};

const CTAButton = ({ children, primary = false }: CTAButtonProps) => (
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`group px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 ${
      primary 
        ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 relative overflow-hidden" 
        : "border-2 border-purple-500/20 hover:border-purple-500/40"
    }`}
  >
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
    {primary && (
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    )}
  </motion.button>
);

// Reusable SectionHeading component
type SectionHeadingProps = {
  children: React.ReactNode;
  subtitle?: string;
};

const SectionHeading = ({ children, subtitle }: SectionHeadingProps) => (
  <>
    <h2 className={`text-4xl sm:text-5xl font-bold mb-8 text-center ${styles.gradientText}`}>
      {children}
    </h2>
    {subtitle && (
      <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </>
);

// Main component
export default function CoPublishingPage() {
  const [activeStep, setActiveStep] = useState(0);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  // Data for cards in sections
  const whyNeedData = [
    {
      icon: DocumentCheckIcon,
      title: "Market Access Without ISBN Restrictions",
      description: "While obtaining an ISBN is required for domestic Chinese platforms, Steam Global allows foreign developers to publish without it. However, a Chinese co-publisher provides vital expertise to navigate localisation, marketing, and community engagement, ensuring a game's success in this unique market."
    },
    {
      icon: GlobeAltIcon,
      title: "Local Marketing & Player Engagement",
      description: "A successful game in China requires more than just translation. Cultural adaptation, localised marketing, and influencer engagement are key. Co-publishers help developers launch tailored campaigns, run effective promotions on Chinese social media platforms like Weibo and Bilibili, and collaborate with streamers to drive engagement."
    },
    {
      icon: UserGroupIcon,
      title: "Community Building & Customer Support",
      description: "Chinese gamers highly value ongoing interaction and support. A co-publisher manages player engagement, provides localised customer service, and builds strong communities on platforms like QQ and WeChat, fostering long-term player retention."
    },
    {
      icon: CurrencyDollarIcon,
      title: "Revenue Optimisation & Payment Handling",
      description: "China's gaming market has distinct payment processing and monetisation structures. A co-publisher ensures smooth transactions, optimises monetisation models, and helps navigate local payment gateways to maximise revenue."
    }
  ];

  const howWeHelpData = [
    {
      icon: UserGroupIcon,
      title: "Strategic Partner Selection",
      description: "We leverage our deep industry connections to identify and secure the ideal co-publisher for your game, ensuring alignment with your genre, audience, and revenue goals."
    },
    {
      icon: DocumentCheckIcon,
      title: "Negotiating the Best Terms",
      description: "Our expertise ensures you get the best possible revenue share, fair recoupment structures, and transparent financial agreements, so you maximise profitability."
    },
    {
      icon: ChartBarIcon,
      title: "Comprehensive Market Strategy",
      description: "We coordinate the entire market entry process, ensuring marketing efforts meet the highest industry standards and align with both Western and Chinese player expectations for a seamless and impactful launch."
    },
    {
      icon: RocketLaunchIcon,
      title: "Ongoing Performance Optimisation",
      description: "Through real-time data tracking and analytics, we continuously optimise campaigns and partnerships to ensure maximum return on investment."
    }
  ];

  const revenueData = [
    {
      icon: BanknotesIcon,
      title: "Marketing & Localisation Costs",
      description: "Typically covered by the co-publisher upfront and recouped from revenue before profit-sharing begins."
    },
    {
      icon: ChartBarIcon,
      title: "Recoupment Thresholds",
      description: "Once initial costs are covered, revenue splits become more favourable to the developer."
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Non-Recoupable Spend",
      description: "Some deals include non-recoupable marketing budgets, allowing you to earn a higher revenue share sooner."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigation />
      </div>
      
      {/* Hero Section with enhanced gradient background and parallax */}
      <section 
        ref={targetRef} 
        className="relative h-screen flex flex-col justify-center pb-0"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{ scale, opacity, y }}
            className="absolute w-[800px] h-[800px] top-1/4 left-1/4 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            aria-hidden="true"
          />
          <motion.div 
            style={{ scale, opacity, y }}
            className="absolute w-[600px] h-[600px] bottom-1/4 right-1/4 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#0A0A0B]/40 backdrop-blur-sm" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0B]/50 to-[#0A0A0B]" aria-hidden="true" />
          {/* Animated particles */}
          <div className="absolute inset-0" aria-hidden="true">
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
        <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-12 -translate-y-16">
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
                <SparklesIcon className="w-6 h-6 text-purple-400 animate-pulse mr-2" aria-hidden="true" />
                <span className="text-purple-400 font-medium">Game Publishing Solutions</span>
              </motion.div>
              <h1 id="hero-heading" className={`text-6xl sm:text-7xl md:text-8xl font-bold ${styles.gradientText} leading-tight relative overflow-hidden`}>
                Co-Publishing
                <div className="absolute inset-0 -z-10 animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" aria-hidden="true" />
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Partner with trusted Chinese publishers and optimise your game's success in the Chinese market – on Steam Global.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <CTAButton primary>
                  Book a Consultation
                  <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </CTAButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section with enhanced styling */}
      <section 
        className="py-12 bg-gradient-to-b from-[#0A0A0B] to-black relative text-center"
        aria-labelledby="intro-heading"
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px]" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animations.fadeIn}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-purple-400 font-medium mb-8">
              <span className="h-px w-8 bg-purple-500/50" aria-hidden="true" />
              <span id="intro-heading">Our Approach</span>
              <span className="h-px w-8 bg-purple-500/50" aria-hidden="true" />
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed text-center">
              Expanding your game into the Chinese market requires strategic partnerships to navigate its unique challenges. At Pixsell Games, we specialise in securing the best co-publishing deals, ensuring compliance, and optimising revenue structures to maximise your success—all while focusing exclusively on Steam Global, avoiding the complexities of mobile storefronts, WeGame, and ISBN requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Need Section with enhanced card animations */}
      <section 
        className="py-24 bg-black/30 relative text-center"
        aria-labelledby="why-need-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={animations.staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <SectionHeading subtitle="China's gaming industry is highly competitive and comes with regulatory hurdles that make it difficult for foreign developers to succeed without the right local partner. A co-publisher is essential for:">
              <span id="why-need-heading">Why Do You Need a Co-Publisher in China?</span>
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyNeedData.map((item, index) => (
                <FeatureCard 
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Our Co-Publishing Model Works Section */}
      <section 
        className="py-24 bg-black relative"
        aria-labelledby="model-works-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <h2 id="model-works-heading" className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${styles.gradientText}`}>
              How Our Co-Publishing Model Works
            </h2>
            <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
              We match you with the right Chinese co-publisher and negotiate the best possible terms—from revenue share to marketing commitments—so you stay in control while ensuring your success.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-12">
              <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <span className="text-2xl">1</span>
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">Find the Right Partner</h3>
                </div>
                <p className="text-gray-300">
                  We carefully select a co-publisher that fits your game's needs and secure the most favourable deal for you.
                </p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <span className="text-2xl">2</span>
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">Marketing & Localisation</h3>
                </div>
                <p className="text-gray-300">
                  We work directly with the co-publisher to ensure they invest in effective Chinese marketing, social media, and player engagement—all while keeping your interests protected.
                </p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <span className="text-2xl">3</span>
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">Revenue Sharing</h3>
                </div>
                <p className="text-gray-300">
                  We negotiate a performance-based revenue split that maximises your earnings while ensuring the co-publisher delivers results.
                </p>
              </div>
              
              <div className="bg-white/5 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-colors duration-300 hover:bg-white/10">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
                    <span className="text-2xl">4</span>
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">Ongoing Support</h3>
                </div>
                <p className="text-gray-300">
                  The co-publisher provides local customer support and continuously optimises game performance, with us ensuring they meet their obligations.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-900/30 to-transparent p-8 rounded-xl mb-10 border-l-4 border-purple-500">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent">Why Choose This Model?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-green-400">No IP Loss</span> – You keep full control of your game.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-green-400">Best Deal Negotiation</span> – We secure the most favourable terms on your behalf.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-green-400">Risk-Free Entry</span> – No upfront investment, just a performance-based revenue share.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-green-400">Local Expertise</span> – Your game gets top-tier marketing and support in China.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500/20 flex items-center justify-center mt-1 mr-3">
                    <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <span className="font-bold text-green-400">No ISBN Needed</span> – We focus on Steam Global to avoid complex regulations.
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg transition-colors inline-block whitespace-nowrap transform-gpu hover:scale-[1.05] transition-transform duration-300"
              >
                🔍 Explore Co-Publishing Options
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
      <section 
        className="py-24 bg-black relative"
        aria-labelledby="how-help-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <SectionHeading subtitle="Not all co-publishers are the same. Some specialise in indie games, while others focus on high-budget titles. Pixsell Games ensures your game is matched with the right partner through a structured approach:">
              <span id="how-help-heading">How We Secure the Best Co-Publishing Partnership for You</span>
            </SectionHeading>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {howWeHelpData.map((item, index) => (
                <FeatureCard 
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Section */}
      <section 
        className="py-24 bg-black/30 relative"
        aria-labelledby="revenue-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <h2 id="revenue-heading" className={`text-4xl sm:text-5xl font-bold mb-16 text-center ${styles.gradientText}`}>
              Revenue Recoupment & Financial Commitments
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {revenueData.map((item, index) => (
                <FeatureCard 
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            <p className="text-xl text-gray-300 mt-12 text-center max-w-3xl mx-auto">
              Pixsell Games ensures favourable financial terms, reducing risk while maximising earnings for developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        className="py-24 bg-black relative"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={animations.fadeIn}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 id="cta-heading" className={`text-4xl sm:text-5xl font-bold mb-8 ${styles.gradientText}`}>
              Get Started Today
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              🚀 Expand into China with confidence—while retaining full control over your game.
            </p>
            <p className="text-xl text-gray-400 mb-12">
              Book a free consultation and let us help you secure the best co-publishing partnership for your title.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <CTAButton primary>
                📩 Book a Consultation
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </CTAButton>
              <CTAButton>
                📖 View Success Stories
                <ArrowRightIcon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 