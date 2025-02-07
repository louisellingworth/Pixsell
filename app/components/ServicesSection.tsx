import React from 'react';
import { motion } from 'framer-motion';
import { 
  GlobeAltIcon, 
  LanguageIcon, 
  ChartBarIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "Co-Publishing",
    description: "Partner with trusted Chinese publishers to handle ISBN acquisition, marketing, and distribution—no upfront costs, pure revenue sharing.",
    Icon: GlobeAltIcon
  },
  {
    title: "Localisation",
    description: "Expert translation and cultural adaptation services to ensure your game resonates with Chinese players while maintaining its core appeal.",
    Icon: LanguageIcon
  },
  {
    title: "Marketing",
    description: "Comprehensive marketing strategies including social media, influencer partnerships, and performance advertising tailored for the Chinese market.",
    Icon: ChartBarIcon
  },
  {
    title: "Compliance",
    description: "Navigate complex Chinese gaming regulations with confidence. We handle all necessary approvals and ensure your game meets local standards.",
    Icon: DocumentCheckIcon
  },
  {
    title: "Player Support",
    description: "24/7 native Chinese player support and community management to ensure high player satisfaction and retention.",
    Icon: UserGroupIcon
  },
  {
    title: "IP Protection",
    description: "Safeguard your intellectual property in China with our comprehensive legal protection and anti-piracy measures.",
    Icon: ShieldCheckIcon
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const iconVariants = {
  hover: { 
    scale: 1.1,
    rotate: 5,
    transition: { type: "spring", stiffness: 300 }
  }
};

export default function ServicesSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
      {/* Background gradient overlay - optimized for mobile */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header - improved responsive spacing */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg text-white/80 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to successfully launch and grow your game in China
          </motion.p>
        </div>

        {/* Services Grid - improved responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card - optimized for touch devices */}
              <div className="h-full p-6 sm:p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10
                             hover:border-blue-500/50 transition-all duration-300
                             hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]
                             active:scale-[0.98] touch-manipulation">
                {/* Icon */}
                <motion.div 
                  className="w-10 sm:w-12 h-10 sm:h-12 mb-4 sm:mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center
                            group-hover:bg-blue-500/20 transition-colors duration-300"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <service.Icon className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
                </motion.div>

                {/* Content - improved responsive typography */}
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {service.description}
                </p>

                {/* Animated gradient border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0 opacity-0 
                              group-hover:opacity-10 blur-xl transition-opacity duration-500" />
              </div>

              {/* Hover glow effect - performance optimized */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl opacity-0 
                            group-hover:opacity-10 blur-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 