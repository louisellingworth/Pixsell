import Image from 'next/image'

const InvestorsSection = () => {
  return (
    <section className="w-full py-6 sm:py-8 md:py-12 bg-[#0A0A0B] border-t border-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <h2 className="text-center text-gray-500 text-xs sm:text-sm font-light tracking-wider uppercase">
            Worked with founders backed by investors... and more
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 items-center justify-items-center w-full max-w-4xl">
            <div className="w-full max-w-[100px] sm:max-w-[140px] relative aspect-[3/2] transition-all duration-300">
              <Image
                src="/investors/insight.png"
                alt="Data Insight"
                fill
                className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            
            <div className="w-full max-w-[100px] sm:max-w-[140px] relative aspect-[3/2] transition-all duration-300">
              <Image
                src="/investors/superseed.png"
                alt="Superseed"
                fill
                className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            
            <div className="w-full max-w-[100px] sm:max-w-[140px] relative aspect-[3/2] transition-all duration-300">
              <Image
                src="/investors/foresight-group.png"
                alt="Foresight"
                fill
                className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
            
            <div className="w-full max-w-[100px] sm:max-w-[140px] relative aspect-[3/2] transition-all duration-300">
              <Image
                src="/investors/newable.webp"
                alt="Newable"
                fill
                className="object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestorsSection 

