import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
}

const TestimonialCard = ({ name, role, company, testimonial, avatarUrl }: TestimonialCardProps) => {
  return (
    <div className="group relative w-[280px] sm:w-[400px] md:w-[500px] h-[220px] mx-2 sm:mx-4">
      {/* Base glass background */}
      <div className="absolute inset-0 rounded-[24px] bg-[#0A0A0B]/80 backdrop-blur-xl" />
      
      {/* Default border with hover gradient */}
      <div className="absolute inset-0 rounded-[24px] p-[1px] transition-all duration-300 bg-white/[0.08] group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-primary-400">
        <div className="h-full w-full rounded-[24px] bg-[#0A0A0B]" />
      </div>

      {/* Content */}
      <div className="relative p-4 sm:p-6 md:p-8">
        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 line-clamp-3">{testimonial}</p>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 transition-colors duration-300 border-white/20 group-hover:border-primary-500">
            <Image
              src={avatarUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="text-sm sm:text-base font-medium text-white">{name}</h4>
            <p className="text-xs sm:text-sm text-gray-400">{role} - {company}</p>
          </div>
        </div>
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 
                    transition-all duration-500 bg-gradient-to-r from-primary-500/5 to-primary-400/5" />
    </div>
  );
};

export default TestimonialCard; 
