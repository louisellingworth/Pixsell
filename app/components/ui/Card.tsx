import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
}

const Card = ({ children, className = '', title, description }: CardProps) => {
  return (
    <div className={`group relative w-full h-full ${className}`}>
      {/* Base glass background */}
      <div className="absolute inset-0 rounded-[24px] bg-[#0A0A0B]/80 backdrop-blur-xl" />
      
      {/* Glass border */}
      <div className="absolute inset-0 rounded-[24px] p-[1px]">
        <div className="h-full w-full rounded-[24px] bg-white/[0.02]" />
      </div>

      {/* Content */}
      <div className="relative p-8">
        {title && (
          <h3 className="text-2xl font-semibold text-white mb-4">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-white/80">
            {description}
          </p>
        )}
        {children}
      </div>

      {/* Subtle hover effect */}
      <div className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 
                    transition-all duration-500 bg-white/[0.02]" />
    </div>
  );
};

export default Card;
