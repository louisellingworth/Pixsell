import React from 'react';
import { motion } from 'framer-motion';

interface ColourfulTextProps {
  text: string;
  variant?: 'blue' | 'green' | 'blue-purple';
}

const gradients = {
  blue: 'linear-gradient(180deg, #ffffff 0%, #3b82f6 30%, #60a5fa 70%, #ffffff 100%)',
  green: 'linear-gradient(180deg, #ffffff 0%, #22c55e 30%, #10b981 70%, #ffffff 100%)',
  'blue-purple': 'linear-gradient(180deg, #ffffff 0%, #3b82f6 30%, #a78bfa 70%, #ffffff 100%)'
};

const ColourfulText: React.FC<ColourfulTextProps> = ({ text, variant = 'blue' }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ 
        once: true,
        margin: "-50% 0px -50% 0px"
      }}
      transition={{ 
        duration: 1.5,
        opacity: { duration: 2 },
        scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
      }}
      className="relative inline-block text-transparent bg-clip-text"
      style={{
        backgroundImage: gradients[variant],
        backgroundSize: 'auto 200%',
        animation: 'shine 3s linear infinite'
      }}
    >
      <style jsx>{`
        @keyframes shine {
          0% { background-position: center 0%; }
          100% { background-position: center 200%; }
        }
      `}</style>
      {text}
    </motion.span>
  );
};

export default ColourfulText; 