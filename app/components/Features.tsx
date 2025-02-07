'use client'

import React from 'react'
import Card from './ui/Card'

const Features = () => {
  const features = [
    {
      title: "Curated Community",
      description: "It doesn't have to be lonely at the top. Community is a foundational component of our entire system. Connect with fellow entrepreneurs, learn, and level up together.",
    },
    {
      title: "Gain Massive Clarity",
      description: "Get clear on your goals, identify your perfect niche, and determine the steps you need to take to make your vision a reality.",
    },
    {
      title: "Lead Generation & Conversion",
      description: "Feast or famine is a thing of the past. Leverage proven lead generation and conversion systems that print money while you sleep.",
    },
    {
      title: "Expert Guidance",
      description: "Eliminate any guesswork with real-time feedback from successful founders that have been there before.",
    },
    {
      title: "Raving Fans",
      description: "Build an audience of raving fans with a proven content creation system. Maximize your reach and impact.",
    },
    {
      title: "Plug & Play Systems",
      description: "A founder's most valuable asset is their time. Implement systems that maximize efficiency and automate tasks – and remove yourself from operations.",
    }
  ]

  return (
    <section className="w-full py-24 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* First Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Large Card (spans 7 columns) */}
          <div className="lg:col-span-7">
            <Card className="h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {features[0].title}
                </h3>
                <p className="text-white/80">
                  {features[0].description}
                </p>
              </div>
            </Card>
          </div>
          {/* Two Stacked Cards (spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card>
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {features[1].title}
                </h3>
                <p className="text-white/80">
                  {features[1].description}
                </p>
              </div>
            </Card>
            <Card>
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {features[2].title}
                </h3>
                <p className="text-white/80">
                  {features[2].description}
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Two Stacked Cards (spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <Card>
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {features[3].title}
                </h3>
                <p className="text-white/80">
                  {features[3].description}
                </p>
              </div>
            </Card>
            <Card>
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {features[4].title}
                </h3>
                <p className="text-white/80">
                  {features[4].description}
                </p>
              </div>
            </Card>
          </div>
          {/* Large Card (spans 7 columns) */}
          <div className="lg:col-span-7">
            <Card className="h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
                  {features[5].title}
                </h3>
                <p className="text-white/80">
                  {features[5].description}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features 