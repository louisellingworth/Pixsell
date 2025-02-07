import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FounderTestimonialCard from '../../ui/FounderTestimonialCard'

const foundersTestimonials = [
  {
    name: "Dan Thompson",
    role: "Co-Founder & CEO",
    company: "Kluster",
    testimonial: "We went from wearing multiple hats with no clear processes to having systems in place that have streamlined every aspect of our business. The impact on our growth has been huge.",
    avatarUrl: "/avatars/dan-thompson-new.jpg",
    logoUrl: "/logos/kluster.png"
  },
  {
    name: "Rory Brown",
    role: "Co-Founder & CCO",
    company: "Kluster",
    testimonial: "The clarity and structure to our sales and customer success processes have been a game-changer. Our team is more efficient, and our customers are happier.",
    avatarUrl: "/avatars/rory-brown.jpg",
    logoUrl: "/logos/kluster.png"
  }
]

export default function FoundersTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? foundersTestimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === foundersTestimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-24 relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70%] h-[450px] bg-primary-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            A word from Kluster's Founders
          </h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-6 h-6 text-yellow-400 mx-0.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 text-white/60 hover:text-white transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <FounderTestimonialCard {...foundersTestimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {foundersTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-500 w-4' : 'bg-white/20'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 