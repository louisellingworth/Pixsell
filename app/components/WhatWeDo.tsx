import React from 'react';
import GradientButton from './ui/GradientButton';
import Card from './ui/Card';

const WhatWeDo = () => {
  const services = [
    {
      title: "Conversational AI",
      description: "Prompt engineering, automatic replies and more for customer service, sales, chat bots, front-office and marketing.",
      icon: "💬"
    },
    {
      title: "Image & Text Analysis",
      description: "Analyze and parse documents, biometrics, motion, facial, products, videos and more to summarize or automate actions based on keywords, identity, sentiment.",
      icon: "🔍"
    },
    {
      title: "Workflow Automations",
      description: "Most of your apps can be integrated with each other for instant handoffs of data and consolidation of information.",
      icon: "⚡"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven decision making through risk analytics, demand or inventory forecasting and other future planning tasks.",
      icon: "📊"
    },
    {
      title: "Data Silos",
      description: "We automate data entry, collection, cleansing and reporting from nuanced and silo'd locations, for fast and accurate decision making.",
      icon: "🗄️"
    }
  ];

  return (
    <section className="w-full py-[48px] relative">      
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[48px]">
          <h2 className="text-[48px] leading-[1.2] font-bold mb-6 text-white tracking-[-0.02em]">
            What we do
          </h2>
          <p className="text-[18px] leading-[1.6] text-white/80 max-w-2xl mx-auto tracking-[-0.01em] mb-8">
            Empowering businesses with cutting-edge AI solutions that transform operations and drive innovation
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
