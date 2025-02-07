import React from 'react';
import TestimonialCard from './ui/TestimonialCard';
import GradientButton from './ui/GradientButton';

// Sample testimonials data - this could be moved to a separate data file
const testimonials = [
  {
    name: "Dan Thompson",
    role: "Co-Founder & CEO",
    company: "Kluster",
    testimonial: "We went from wearing multiple hats with no clear processes to having systems in place that have streamlined every aspect of our business. The impact on our growth has been huge.",
    avatarUrl: "/avatars/dan-thompson-new.jpg"
  },
  {
    name: "Rory Brown",
    role: "Co-Founder & CCO",
    company: "Kluster",
    testimonial: "The clarity and structure to our sales and customer success processes have been a game-changer. Our team is more efficient, and our customers are happier.",
    avatarUrl: "/avatars/rory-brown.jpg"
  },
  {
    name: "Sindre Kaupang",
    role: "Co-Founder",
    company: "Procubate",
    testimonial: "Getting Elliott on board is the best thing I've done for my business. He is super smart, and I can't recommend him enough!",
    avatarUrl: "/avatars/sindre-kaupang.jpeg"
  },
  {
    name: "Matt Stevenson",
    role: "Design Lead",
    company: "Kluster",
    testimonial: "Elliott is an ops legend! He immediately helped me create and deploy processes to align commes through the business",
    avatarUrl: "/avatars/matt-stevenson.jpg"
  },
  {
    name: "Josephine Tse",
    role: "SDR Manager",
    company: "Kluster",
    testimonial: "Helped us generate more new business demos and generae them more efficiently too!",
    avatarUrl: "/avatars/josephine-tse.jpg"
  },
  {
    name: "Lucy Moore",
    role: "Technical Implementation Manager",
    company: "Kluster",
    testimonial: "Not only are the systems impressive, they ensured the entire team was fully trained and aligned on how to use them",
    avatarUrl: "/avatars/lucy-moore.jpg"
  },
  {
    name: "Charlotte Payne",
    role: "Key Account Manager",
    company: "Kluster",
    testimonial: "Key part of keeping the CS/AM team on track and in check. Enabled us to use our CRM in conjunction with our commission tool, call recordings which improved the speed at which we could input data and reduced the lengthy sequences we had to do before to ensure everything was logged correctly.",
    avatarUrl: "/avatars/charlotte-payne.jpg"
  },
  {
    name: "Enea Sharxhi",
    role: "Senior Data Analyst & Performance Specialist",
    company: "Kluster",
    testimonial: "He loves to help people. Elliott went above and beyond to help Kluster streamline processes, reduce delays in communication & lost infomation, meaning people had more un-interupted time to focus on their work.",
    avatarUrl: "/avatars/enea-sharxhi.jpg"
  },
  {
    name: "Jonny Caufield",
    role: "Senior Developer",
    company: "Kluster",
    testimonial: "Previously I felt a bit disconnected between C-Level product ideas and roadmaps. Now I feel more connected again and aligned with the bigger picture.",
    avatarUrl: "/avatars/jonny-caufield.jpg"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-8 sm:py-12 md:py-16 lg:py-20 relative">
      {/* Purple glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70%] h-[350px] sm:h-[450px] bg-primary-500/10 blur-[120px] rounded-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[50%] h-[250px] sm:h-[350px] bg-primary-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 mb-8 sm:mb-12 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        <p className="text-white/60 text-base sm:text-lg text-center max-w-2xl mx-auto">
          Hear from the businesses we've helped transform through AI automation and innovation
        </p>
      </div>

      {/* Testimonials slider */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-[50px] sm:w-[100px] bg-gradient-to-r from-[#0A0A0B] to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-[50px] sm:w-[100px] bg-gradient-to-l from-[#0A0A0B] to-transparent z-10" />
        
        <div className="flex overflow-hidden relative">
          <div className="animate-scroll-infinite flex gap-3 sm:gap-6 py-2 sm:py-4">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} {...testimonial} />
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="text-center relative mt-8 sm:mt-12 md:mt-16">
        <GradientButton
          variant="compact"
          className="mx-auto"
          href="/survey"
        >
          Get Price
        </GradientButton>
      </div>
    </section>
  );
} 
