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
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
  StarIcon,
  TrophyIcon
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }
}

// Style constants 
const styles = {
  gradientText: "bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent",
  cardStyle: "p-8 lg:p-10 rounded-2xl bg-black/40 backdrop-blur-sm border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden group text-center h-full",
  cardGlow: "absolute inset-0 bg-gradient-to-b from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500",
  shimmer: "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent"
}

// Types for card props
type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  color?: string;
};

// Reusable FeatureCard component
const FeatureCard = ({ icon: Icon, title, description, color = "from-purple-500 to-pink-500" }: FeatureCardProps) => (
  <motion.div
    variants={animations.cardVariants}
    whileHover="hover"
    className={styles.cardStyle}
  >
    <div className={styles.cardGlow} />
    <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative z-10">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} p-4 mb-8 mx-auto group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all duration-300`}
      >
        <Icon className="w-full h-full text-white" aria-hidden="true" />
      </motion.div>
      <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300">{title}</h3>
      <p className="text-white/60 text-lg leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// Reusable CTAButton component
type CTAButtonProps = {
  children: React.ReactNode;
  primary?: boolean;
  href?: string;
};

const CTAButton = ({ children, primary = false, href }: CTAButtonProps) => {
  const ButtonContent = (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group px-6 py-3 rounded-xl text-white font-medium text-base transition-all duration-300 relative overflow-hidden ${
        primary 
          ? "bg-gradient-to-r from-pink-500 to-purple-500 hover:shadow-lg hover:shadow-pink-500/20" 
          : "border-2 border-purple-500/20 hover:border-purple-500/40 bg-black/40 backdrop-blur-sm"
      }`}
    >
      <motion.div
        initial={{ x: "100%" }}
        whileHover={{ x: "-100%" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </motion.div>
  );

  return href ? (
    <Link href={href}>
      {ButtonContent}
    </Link>
  ) : ButtonContent;
};

// Reusable SectionHeading component
type SectionHeadingProps = {
  children: React.ReactNode;
  subtitle?: string;
  badge?: string;
};

const SectionHeading = ({ children, subtitle, badge }: SectionHeadingProps) => (
  <div className="text-center mb-20">
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20"
      >
        <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-medium">
          {badge}
        </span>
      </motion.div>
    )}
    <h2 className={`text-4xl sm:text-5xl font-bold mb-8 ${styles.gradientText}`}>
      {children}
    </h2>
    {subtitle && (
      <p className="text-white/50 text-lg leading-relaxed max-w-3xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
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
      description: "While obtaining an ISBN is required for domestic Chinese platforms, Steam Global allows foreign developers to publish without it. However, a Chinese co-publisher provides vital expertise to navigate localisation, marketing, and community engagement, ensuring a game's success in this unique market.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Local Marketing & Player Engagement",
      description: "A successful game in China requires more than just translation. Cultural adaptation, localised marketing, and influencer engagement are key. Co-publishers help developers launch tailored campaigns, run effective promotions on Chinese social media platforms like Weibo and Bilibili, and collaborate with streamers to drive engagement.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: UserGroupIcon,
      title: "Community Building & Customer Support",
      description: "Chinese gamers highly value ongoing interaction and support. A co-publisher manages player engagement, provides localised customer service, and builds strong communities on platforms like QQ and WeChat, fostering long-term player retention.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Revenue Optimisation & Payment Handling",
      description: "China's gaming market has distinct payment processing and monetisation structures. A co-publisher ensures smooth transactions, optimises monetisation models, and helps navigate local payment gateways to maximise revenue.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const howWeHelpData = [
    {
      icon: UserGroupIcon,
      title: "Strategic Partner Selection",
      description: "We leverage our deep industry connections to identify and secure the ideal co-publisher for your game, ensuring alignment with your genre, audience, and revenue goals.",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: DocumentCheckIcon,
      title: "Negotiating the Best Terms",
      description: "Our expertise ensures you get the best possible revenue share, fair recoupment structures, and transparent financial agreements, so you maximise profitability.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ChartBarIcon,
      title: "Comprehensive Market Strategy",
      description: "We coordinate the entire market entry process, ensuring marketing efforts meet the highest industry standards and align with both Western and Chinese player expectations for a seamless and impactful launch.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: RocketLaunchIcon,
      title: "Ongoing Performance Optimisation",
      description: "Through real-time data tracking and analytics, we continuously optimise campaigns and partnerships to ensure maximum return on investment.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const revenueData = [
    {
      icon: BanknotesIcon,
      title: "Marketing & Localisation Costs",
      description: "Typically covered by the co-publisher upfront and recouped from revenue before profit-sharing begins.",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: ChartBarIcon,
      title: "Recoupment Thresholds",
      description: "Once initial costs are covered, revenue splits become more favourable to the developer.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Non-Recoupable Spend",
      description: "Some deals include non-recoupable marketing budgets, allowing you to earn a higher revenue share sooner.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const benefitsData = [
    {
      icon: ShieldCheckIcon,
      title: "No IP Loss",
      description: "You keep full control of your game and intellectual property."
    },
    {
      icon: StarIcon,
      title: "Best Deal Negotiation",
      description: "We secure the most favourable terms on your behalf."
    },
    {
      icon: TrophyIcon,
      title: "Risk-Free Entry",
      description: "No upfront investment, just a performance-based revenue share."
    },
    {
      icon: GlobeAltIcon,
      title: "Local Expertise",
      description: "Your game gets top-tier marketing and support in China."
    },
    {
      icon: DocumentCheckIcon,
      title: "No ISBN Needed",
      description: "We focus on Steam Global to avoid complex regulations."
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
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

      {/* Enhanced Background Effects - Premium Design */}
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
                    Co-Publishing
                  </span>
                </h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-2xl sm:text-3xl text-white/90 font-light"
              >
                Strategic Market Entry
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed text-center"
              >
                Partner with trusted Chinese publishers and{' '}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="inline-block font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent px-1"
                >
                  optimise your game's success
                </motion.span>
                {' '}in the Chinese market – on Steam Global.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8"
              >
                <CTAButton primary href="/contact">
                  Schedule a Consultation
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </CTAButton>
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
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-12 lg:p-16 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative">
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="space-y-8 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20"
                  >
                    <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-medium">
                      Our Approach
                    </span>
                  </motion.div>
                  
                  <motion.p 
                    variants={animations.fadeIn} 
                    className="text-xl sm:text-2xl leading-relaxed text-white/90 font-medium"
                  >
                    Expanding your game into the Chinese market requires strategic partnerships to navigate its unique challenges. At Pixsell Games, we specialise in securing the best co-publishing deals, ensuring compliance, and optimising revenue structures to maximise your success—all while focusing exclusively on Steam Global, avoiding the complexities of mobile storefronts, WeGame, and ISBN requirements.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Why Need Section */}
          <div className="mb-40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={animations.staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <SectionHeading 
                badge="Market Entry"
                subtitle="China's gaming industry is highly competitive and comes with regulatory hurdles that make it difficult for foreign developers to succeed without the right local partner. A co-publisher is essential for:"
              >
                Why Do You Need a Co-Publisher in China?
              </SectionHeading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {whyNeedData.map((item, index) => (
                  <FeatureCard 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced How Our Co-Publishing Model Works Section */}
          <div className="mb-40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <SectionHeading 
                badge="Our Process"
                subtitle="We match you with the right Chinese co-publisher and negotiate the best possible terms—from revenue share to marketing commitments—so you stay in control while ensuring your success."
              >
                How Our Co-Publishing Model Works
              </SectionHeading>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 mb-12">
                <motion.div 
                  variants={animations.cardVariants}
                  className="bg-black/40 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative h-full"
                >
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">1</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Find the Right Partner</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    We screen our network of vetted Chinese co-publishers and shortlist candidates based on your game&apos;s genre, audience, and commercial goals. You review the shortlist and approve your preferred publisher before we move forward.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={animations.cardVariants}
                  className="bg-black/40 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative h-full"
                >
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">2</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Negotiate Deal Terms</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    We handle all contract negotiations — revenue share, marketing spend commitments, recoupment thresholds — and flag anything that isn&apos;t in your favour. You approve the final terms before anything is signed.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={animations.cardVariants}
                  className="bg-black/40 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative h-full"
                >
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">3</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Oversee Marketing & Localisation</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    We hold the co-publisher accountable for their marketing commitments on WeChat, Weibo, Bilibili, and Douyin — reviewing campaign plans, approving content direction, and coordinating localisation through our partner network.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={animations.cardVariants}
                  className="bg-black/40 backdrop-blur-sm p-8 lg:p-10 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 relative h-full"
                >
                  <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-white">4</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Monitor Revenue & Performance</h3>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    We track revenue reports, verify accuracy, escalate issues with the co-publisher, and send you regular performance summaries — so you always know exactly where things stand.
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                variants={animations.cardVariants}
                className="bg-gradient-to-r from-pink-900/30 via-black/50 to-purple-900/30 backdrop-blur-sm p-8 lg:p-12 rounded-2xl border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-y-0 -right-px w-px bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Why Choose This Model?</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefitsData.map((benefit, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-1">
                        <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
                      </div>
                      <div>
                        <span className="font-bold text-emerald-400">{benefit.title}</span>
                        <p className="text-white/60 text-sm mt-1">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Enhanced How We Help Section */}
          <div className="mb-40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <SectionHeading 
                badge="Partnership Strategy"
                subtitle="Not all co-publishers are the same. Some specialise in indie games, while others focus on high-budget titles. Pixsell Games ensures your game is matched with the right partner through a structured approach:"
              >
                How We Secure the Best Co-Publishing Partnership for You
              </SectionHeading>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {howWeHelpData.map((item, index) => (
                  <FeatureCard 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Revenue Section */}
          <div className="mb-40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.staggerContainer}
              className="max-w-6xl mx-auto"
            >
              <SectionHeading 
                badge="Financial Terms"
                subtitle="Understanding the financial structure is crucial for making informed decisions about your China market entry."
              >
                Revenue Recoupment & Financial Commitments
              </SectionHeading>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {revenueData.map((item, index) => (
                  <FeatureCard 
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    color={item.color}
                  />
                ))}
              </div>
              
              <motion.p 
                variants={animations.fadeIn}
                className="text-xl text-white/60 mt-12 text-center max-w-3xl mx-auto"
              >
                Pixsell Games ensures favourable financial terms, reducing risk while maximising earnings for developers.
              </motion.p>
            </motion.div>
          </div>

          {/* Enhanced Final CTA Section */}
          <div className="mb-40">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={animations.fadeIn}
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
                  
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">Get Started Today</h2>
                  <p className="text-white/70 text-xl mb-8">
                    Expand into China with confidence—while retaining full control over your game.
                  </p>
                  <p className="text-white/60 text-lg mb-12">
                    Book a free consultation and let us help you secure the best co-publishing partnership for your title.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                  >
                    <CTAButton primary href="/contact">
                      Schedule a Consultation
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </CTAButton>
                    <CTAButton href="/blog">
                      View Success Stories
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </CTAButton>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Internal Links Section for SEO */}
      <div className="max-w-5xl mx-auto mb-20">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Explore More</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-white mb-2">Related Services</h4>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li><Link href="/services/localisation" className="hover:underline text-pink-400">Game Localisation</Link></li>
                <li><Link href="/services/market-strategy" className="hover:underline text-pink-400">Market Strategy</Link></li>
                <li><Link href="/services/marketing" className="hover:underline text-pink-400">Game Marketing</Link></li>
                <li><Link href="/services/publisher-matching" className="hover:underline text-pink-400">Publisher Matching</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Related Blog Posts</h4>
              <ul className="list-disc list-inside text-white/80 space-y-1">
                <li><Link href="/blog/co-publishing-vs-self-publishing-china" className="hover:underline text-pink-400">Co-Publishing vs Self-Publishing in China</Link></li>
                <li><Link href="/blog/how-to-find-chinese-co-publisher" className="hover:underline text-pink-400">How to Find a Chinese Co-Publisher</Link></li>
                <li><Link href="/blog/revenue-share-models-chinese-game-publishing" className="hover:underline text-pink-400">Revenue Share Models in Chinese Game Publishing</Link></li>
                <li><Link href="/blog/5-mistakes-western-developers-make-in-china" className="hover:underline text-pink-400">5 Mistakes Western Developers Make in China</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingConsultButton />
    </main>
  )
} 