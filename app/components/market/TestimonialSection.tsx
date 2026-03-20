'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SectionProps, Testimonial } from './types'

// Default avatar in case one isn't provided
const DEFAULT_AVATAR = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"

const testimonials: Testimonial[] = [
  {
    quote: "EightSix's deep understanding of the Chinese market was a game-changer for us. They handled everything from compliance to marketing, and our revenue increased by 300% in just three months.",
    author: "Jane Cooper",
    role: "CEO",
    company: "Stellar Games",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "We tried working with traditional publishers in China but got lost in the complexity. EightSix streamlined everything and maintained our game's integrity while adapting it perfectly for Chinese players.",
    author: "Michael Chen",
    role: "CTO",
    company: "Quantum Interactive",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "As a small indie studio, we never thought China was accessible to us. EightSix not only made it possible but made it our most profitable market. Their team feels like an extension of our own.",
    author: "Sarah Williams",
    role: "Founder",
    company: "Neon Arcade",
    avatarUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

export const TestimonialSection = ({ registerSectionRef }: SectionProps) => {
  return (
    <section 
      ref={registerSectionRef('testimonials')}
      id="testimonials"
      className="section container-wide relative z-10"
    >
      <motion.div 
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px 0px" }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          What Our Partners Say
        </h2>
        <p className="section-subtitle">
          Hear from the game developers who've trusted us with their China market entry
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 36, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px 0px" }}
            transition={{ duration: 2.3, delay: 0.18 * (index + 1), ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="testimonial-card h-full">
              <p className="testimonial-quote">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <Image
                    src={testimonial.avatarUrl || DEFAULT_AVATAR}
                    alt={`Avatar of ${testimonial.author}`}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-purple-500/30"
                  />
                </div>
                <div>
                  <div className="font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 