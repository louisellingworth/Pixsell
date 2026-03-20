'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { SectionProps, FAQItem } from './types'

const faqs: FAQItem[] = [
  {
    question: 'What does your China publishing partnership involve?',
    answer: 'Our partnership handles every aspect of bringing your game to China: localization, compliance management, app store relations, marketing strategy, community management, and ongoing support. Unlike traditional publishers, we work on a transparent revenue-share model with no upfront costs. You maintain control of your game and IP.'
  },
  {
    question: 'Do I need to provide source code access?',
    answer: 'No. Unlike traditional publishers, we do not require source code access to publish your game in China. We work with your compiled builds and help with any necessary technical adaptations through our specialized SDK and integration tools. This approach allows you to maintain full control of your intellectual property.'
  },
  {
    question: 'How much does it cost to get started?',
    answer: 'Our business model is based on revenue sharing, meaning there are no upfront costs to work with us. We invest our resources in adapting, launching, and promoting your game, and only earn when your game succeeds in the Chinese market. This aligns our incentives completely with your success.'
  },
  {
    question: 'How long does the process take, from agreement to launch?',
    answer: 'Typically, we can bring a game to market in China within 3-4 months. This includes all compliance processes, localization, technical adaptation, and pre-launch marketing preparation. The timeline can vary depending on the complexity of your game and current regulatory environment.'
  },
  {
    question: 'What are the compliance requirements for games in China?',
    answer: 'China has specific requirements including content reviews, real-name verification, anti-addiction systems for minors, and data privacy regulations. Our team specializes in navigating these requirements, ensuring your game maintains its core experience while meeting all local regulations.'
  },
  {
    question: 'Which platforms do you support?',
    answer: 'We provide comprehensive support for iOS, Android, and PC platforms. Our expertise covers all major Chinese app stores and distribution channels, including the Apple App Store, all major Android stores (like Huawei, Xiaomi, OPPO, Vivo), and PC platforms like WeGame and Steam China.'
  }
];

const FaqItem = ({ faq, index }: { faq: FAQItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(index === 0)

  return (
    <div className="faq-item">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="faq-question w-full"
      >
        <span>{faq.question}</span>
        <span className="text-purple-400">
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          )}
        </span>
      </button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="faq-answer prose-light"
        >
          {faq.answer}
        </motion.div>
      )}
    </div>
  )
}

export const FaqSection = ({ registerSectionRef }: SectionProps) => {
  return (
    <section 
      ref={registerSectionRef('faq')}
      id="faq" 
      className="section container-tight relative z-10"
    >
      {/* FAQPage Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })}} />
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Frequently Asked Questions
        </h2>
        <p className="section-subtitle">
          Everything you need to know about our China publishing services
        </p>
      </motion.div>
      
      <div className="space-y-content">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 2.2, delay: 0.07 * (index + 1), ease: [0.16, 1, 0.3, 1] }}
          >
            <FaqItem faq={faq} index={index} />
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 2.3, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
      >
        <h3 className="text-2xl font-semibold mb-4">Still have questions?</h3>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Our team is ready to answer any questions you might have about launching your game in China.
        </p>
        <a 
          href="#contact" 
          className="btn btn-primary px-8 py-3 rounded-lg"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  )
} 