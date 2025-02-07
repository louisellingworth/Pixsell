import React from 'react';
import GradientButton from './ui/GradientButton';
import Card from './ui/Card';

const WhatWeDo = () => {
  const services = [
    {
      title: "Co-Publishing Deals",
      description: "We connect you with trusted Chinese publishers who handle ISBN acquisition, marketing, and distribution. Once they recoup their marketing spend, you share the revenue—no upfront costs, no risk.",
      icon: "🤝"
    },
    {
      title: "Localization",
      description: "Our team adapts your game for Chinese players, from translation to cultural adjustments. We ensure your game resonates with local audiences while staying true to your vision.",
      icon: "🌏"
    },
    {
      title: "Compliance & Regulations",
      description: "Navigate China's gaming regulations with confidence. We handle all compliance requirements and ensure your game meets local standards.",
      icon: "✅"
    },
    {
      title: "Market Research",
      description: "Get deep insights into Chinese player preferences, market trends, and monetization strategies to maximize your game's potential.",
      icon: "📊"
    },
    {
      title: "Cultural Consulting",
      description: "Avoid cultural pitfalls and optimize your game's appeal with expert guidance on Chinese gaming culture and player expectations.",
      icon: "🎮"
    }
  ];

  return (
    <section className="w-full py-[48px] relative">      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[48px]">
          <h2 className="text-[48px] leading-[1.2] font-bold mb-6 text-white tracking-[-0.02em]">
            Our Services
          </h2>
          <p className="text-[18px] leading-[1.6] text-white/80 max-w-2xl mx-auto tracking-[-0.01em] mb-8">
            Everything you need to successfully launch and grow your game in the Chinese market
          </p>
          <GradientButton 
            href="/services" 
            className="hover:scale-105 transition-transform duration-200"
            variant="compact"
          >
            Explore services
          </GradientButton>
        </div>

        {/* Top row - 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {services.slice(0, 2).map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Bottom row - 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.slice(2, 5).map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 
