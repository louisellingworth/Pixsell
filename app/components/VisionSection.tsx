import { GoogleGeminiEffect } from './ui/google-gemini-effect'
import { useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

export default function VisionSection() {
  // Create motion values for the paths
  const pathLengths = [
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
    useMotionValue(0),
  ]

  // Animate the paths
  useEffect(() => {
    const interval = setInterval(() => {
      pathLengths.forEach((length) => {
        length.set(Math.random())
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 w-full h-full">
        <GoogleGeminiEffect pathLengths={pathLengths} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Scale Smarter. Live Better.
          </h2>
          
          <p className="text-xl text-white/80 mb-12">
            Envision a business that thrives on autopilot. A future where you're in control, 
            leading with vision and achieving your goals without sacrifice.
          </p>

          {/* Vision Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 text-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                Your Business, Automated
              </h3>
              <p className="text-white/70">
                Experience the freedom of a business that runs efficiently without constant oversight. 
                Our AI systems handle the day-to-day, so you can focus on growth.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                Continuous Evolution
              </h3>
              <p className="text-white/70">
                Your system grows with you, constantly learning and adapting to new challenges. 
                Stay ahead of the curve with AI that evolves alongside your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 