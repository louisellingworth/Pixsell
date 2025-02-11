'use client'

import ParticlesBackground from './ui/ParticlesBackground'
import ContactModal from './ui/ContactModal'
import { useEffect, useState } from 'react'
import Link from 'next/link'

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
        <div className="relative">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-semibold tracking-tight text-gradient">
            Pixsell
          </h1>
          <div className="absolute inset-0 -z-10 blur-2xl opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-normal max-w-2xl mx-auto tracking-wide mt-8">
          Your Gateway to the China Video Game Market
        </p>

        {/* Button */}
        <div className="mt-12">
          <Link 
            href="/services/co-publishing"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-black/20 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-black/30 transition-colors duration-200"
          >
            Get Started
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <style jsx global>{`
        .text-gradient {
          background: linear-gradient(
            to right,
            #E9D5FF,
            #D8B4FE,
            #C084FC,
            #A78BFA,
            #818CF8,
            #6366F1,
            #4F46E5,
            #6366F1,
            #818CF8,
            #A78BFA,
            #C084FC,
            #D8B4FE
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradient 15s linear infinite;
          background-size: 300% auto;
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