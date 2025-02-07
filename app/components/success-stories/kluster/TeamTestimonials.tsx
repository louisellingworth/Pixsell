import React from 'react'
import TestimonialCard from '../../ui/TestimonialCard'

// Filter only Kluster team members (excluding founders)
const teamTestimonials = [
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
    testimonial: "Helped us generate more new business demos and generate them more efficiently too!",
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
    testimonial: "He loves to help people. Elliott went above and beyond to help Kluster streamline processes, reduce delays in communication & lost information, meaning people had more un-interrupted time to focus on their work.",
    avatarUrl: "/avatars/enea-sharxhi.jpg"
  },
  {
    name: "Jonny Caufield",
    role: "Senior Developer",
    company: "Kluster",
    testimonial: "Previously I felt a bit disconnected between C-Level product ideas and roadmaps. Now I feel more connected again and aligned with the bigger picture.",
    avatarUrl: "/avatars/jonny-caufield.jpg"
  }
]

export default function TeamTestimonials() {
  return (
    <section className="py-24 overflow-hidden relative">
      {/* Purple glow effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70%] h-[450px] bg-primary-500/10 blur-[120px] rounded-full" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[50%] h-[350px] bg-primary-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto mb-12 relative">
        <h2 className="text-4xl font-bold text-center mb-4">
          Hear from the Kluster Team
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          See how our systems and processes impacted every level of the organization
        </p>
      </div>

      {/* Testimonials slider */}
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-[100px] bg-gradient-to-r from-[#0A0A0B] to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-[100px] bg-gradient-to-l from-[#0A0A0B] to-transparent z-10" />
        
        <div className="flex overflow-hidden relative">
          <div className="animate-scroll-infinite flex gap-6 py-4">
            {/* First set of testimonials */}
            {teamTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} {...testimonial} />
            ))}
            {/* Duplicate set for seamless loop */}
            {teamTestimonials.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 