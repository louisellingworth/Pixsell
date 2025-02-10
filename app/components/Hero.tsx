'use client'

import VariableFontHoverByRandomLetter from './ui/VariableFontHoverByRandomLetter'
import PixelTrail from './ui/PixelTrail'
import ColourfulText from './ui/ColourfulText'
import ParticlesBackground from './ui/ParticlesBackground'

export default function Hero() {
  return (
    <div className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <ParticlesBackground />
      <PixelTrail 
        pixelSize={16}
        fadeDuration={2000}
        delay={0}
        pixelClassName="bg-blue-500/80"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 
          className={`
            relative font-press-start-2p text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] 
            cursor-pointer hover:scale-105 transition-transform duration-300 
            tracking-tight leading-none pl-4 sm:pl-6 md:pl-8 lg:pl-10
          `}
        >
          <ColourfulText text="PIXSELL" />
        </h1>
        <h2 className="font-press-start-2p text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl bg-gradient-to-b from-white via-white to-blue-100 bg-clip-text text-transparent tracking-tight max-w-3xl text-center -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          YOUR GATEWAY TO THE CHINA VIDEO GAME MARKET
        </h2>
      </div>
    </div>
  )
} 