import React from 'react';
import { motion } from 'framer-motion';

interface ColourfulTextProps {
  text: string;
  variant?: 'blue' | 'green' | 'blue-purple';
}

const gradients = {
  blue: 'linear-gradient(180deg, #ffffff 0%, #3b82f6 30%, #60a5fa 70%, #ffffff 100%)',
  green: 'linear-gradient(180deg, #ffffff 0%, #22c55e 30%, #10b981 70%, #ffffff 100%)',
  'blue-purple': 'linear-gradient(-45deg, #ffffff 0%, #6366F1 25%, #8B5CF6 50%, #6366F1 75%, #ffffff 100%)'
};

const ColourfulText: React.FC<ColourfulTextProps> = ({ text, variant = 'blue' }) => {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 1.5,
        opacity: { duration: 2 },
        scale: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
      }}
      className="relative inline-block text-transparent bg-clip-text font-press-start-2p"
      style={{
        backgroundImage: gradients[variant],
        backgroundSize: '400% 100%',
        animation: 'shine 8s linear infinite'
      }}
    >
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 400% center; }
        }
      `}</style>
      {text}
    </motion.span>
  );
};

export default ColourfulText; 