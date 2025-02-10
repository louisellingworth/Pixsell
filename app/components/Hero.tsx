'use client'

import ParticlesBackground from './ui/ParticlesBackground'
import ContactModal from './ui/ContactModal'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[400px] h-[250px] top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4C1D95]/15 rounded-[100%]"
          style={{
            filter: 'blur(60px)',
            transform: 'translateY(-20px) translateX(-50%)',
          }}
        />
      </div>

      {/* Particles Effect */}
      {mounted && <ParticlesBackground />}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4">
        <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-semibold tracking-tight animate-gradient-text">
          Pixsell
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-normal max-w-2xl mx-auto tracking-wide mt-8">
          Your Gateway to the China Video Game Market
        </p>

        {/* Button */}
        <div className="mt-12">
          <button 
            onClick={handleOpenModal}
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-black/30 transition-colors duration-200"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style jsx>{`
        .animate-gradient-text {
          background: linear-gradient(
            to right,
            #C4B5FD,
            #A78BFA,
            #8B5CF6,
            #7C3AED,
            #6D28D9,
            #5B21B6,
            #4C1D95,
            #6D28D9,
            #7C3AED,
            #8B5CF6,
            #A78BFA,
            #C4B5FD
          );
          background-size: 300% auto;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          animation: gradient 8s linear infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 300% center;
          }
        }
      `}</style>
    </div>
  )
} 