import React from 'react';
import { motion } from 'framer-motion';
import GradientButton from './ui/GradientButton';

const steps = [
  {
    number: "1",
    title: "Discovery",
    description: "We assess your game's potential in China and define the best approach.",
  },
  {
    number: "2",
    title: "Co-Publishing Deals",
    description: "We secure a trusted Chinese publisher and negotiate the best deal for you.",
  },
  {
    number: "3",
    title: "Localisation & Compliance",
    description: "We adapt your game for Chinese audiences and ensure it meets government regulations.",
  },
  {
    number: "4",
    title: "Marketing & Launch",
    description: "We handle social media, influencer marketing, and performance advertising.",
  },
  {
    number: "5",
    title: "Ongoing Support & Growth",
    description: "We monitor performance and optimise post-launch strategies.",
  }
];

export default function ProcessSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
            How We Bring Your Game to China
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-start gap-6 mb-12"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-2xl font-bold text-red-400">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <span className="text-red-400">Step {step.number}:</span> {step.title}
                </h3>
                <p className="text-red-200/80 text-lg">{step.description}</p>
              </div>
            </motion.div>
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
            className="text-lg px-8 py-4 bg-black/50 backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all"
          >
            Start Your Expansion Today →
          </GradientButton>
        </motion.div>
      </div>
    </section>
  );
} 