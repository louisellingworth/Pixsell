import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from './ui/GradientButton';

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What happens during the free consultation?",
        answer: [
          "We analyse your game and its market potential in China.",
          "We provide an overview of the co-publishing process and potential revenue opportunities."
        ]
      },
      {
        question: "What costs are involved?",
        answer: [
          "Marketing and localisation are covered by the co-publisher.",
          "The only upfront cost for developers is LQA (Linguistic Quality Assurance)."
        ]
      },
      {
        question: "Can I self-publish in China?",
        answer: [
          "No, China requires foreign games to have a local publishing partner."
        ]
      }
    ]
  },
  {
    category: "Post-Launch",
    questions: [
      {
        question: "Will Pixsell Games continue to support my game after launch?",
        answer: [
          "Yes, we provide ongoing marketing, community engagement, and performance monitoring."
        ]
      }
    ]
  }
];

export default function FAQSection() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="text-2xl font-semibold mb-6 text-primary-300"
              >
                {category.category}
              </motion.h3>

              <div className="space-y-6">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: (categoryIndex * 0.2) + (faqIndex * 0.1) }}
                    className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors duration-300"
                  >
                    <h4 className="text-xl font-semibold mb-4">{faq.question}</h4>
                    <div className="space-y-2">
                      {faq.answer.map((line, index) => (
                        <p key={index} className="text-white/80">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <GradientButton
            href="/contact"
            className="text-lg px-8 py-4 bg-black/50 backdrop-blur-sm border border-primary-500/20 hover:border-primary-400/40 transition-all"
          >
            Learn More →
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
} 