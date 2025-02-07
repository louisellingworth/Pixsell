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
    <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-black">
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-[#B4C6EF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl sm:text-2xl text-gray-400 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Everything you need to successfully launch and grow your game in China
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full p-8 rounded-[24px] bg-[#0A0A0B] border border-white/10
                             transition-all duration-300">
                {/* Icon */}
                <motion.div 
                  className="w-12 h-12 mb-6 rounded-xl bg-[#0A0A0B] flex items-center justify-center"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <service.Icon className="w-6 h-6 text-[#B4C6EF]" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <p className="text-base text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 