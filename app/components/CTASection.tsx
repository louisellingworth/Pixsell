import GradientButton from './ui/GradientButton'

export default function CTASection() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          
          <p className="text-lg sm:text-xl text-white/80 mb-8 sm:mb-10 md:mb-12">
            Let's discuss your goals and explore how AI can help you achieve them.
          </p>

          <div className="flex justify-center">
            <GradientButton 
              href="/survey" 
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              Get Price →
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  )
} 