import React from 'react';
import { motion } from 'framer-motion';

interface ColourfulTextProps {
  text: string;
}

const ColourfulText: React.FC<ColourfulTextProps> = ({ text }) => {
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
        backgroundImage: 'linear-gradient(90deg, #22c55e 0%, #10b981 30%, #14b8a6 70%, #22c55e 100%)',
        backgroundSize: '200% auto',
        animation: 'shine 3s linear infinite'
      }}
    >
      <style jsx>{`
        @keyframes shine {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
      {text}
    </motion.span>
  );
};

export default ColourfulText; 