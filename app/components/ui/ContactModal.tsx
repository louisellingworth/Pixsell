'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 25
            }}
            style={{
              position: 'fixed',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 51,
              width: '100%',
              maxWidth: '440px',
              padding: '2px',
              borderRadius: '22px',
              background: 'linear-gradient(163deg, #8B5CF6 0%, #6D28D9 50%, #4C1D95 100%)',
            }}
            className="hover:shadow-[0_0_30px_1px_rgba(139,92,246,0.3)] transition-all duration-300"
          >
            <div 
              style={{
                background: '#171717',
                borderRadius: '20px',
                transition: 'transform 0.2s',
              }}
              className="hover:scale-[0.98]"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8">
                <h2 className="text-center text-2xl font-semibold mb-6 bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                
                <div className="bg-[#1f1f1f] rounded-lg p-3 shadow-inner">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-none outline-none text-[#ccd6f6] px-2 placeholder:text-gray-600"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="bg-[#1f1f1f] rounded-lg p-3 shadow-inner">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-none outline-none text-[#ccd6f6] px-2 placeholder:text-gray-600"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="bg-[#1f1f1f] rounded-lg p-3 shadow-inner">
                  <textarea
                    placeholder="Your message"
                    className="w-full bg-transparent border-none outline-none text-[#ccd6f6] px-2 min-h-[100px] resize-none placeholder:text-gray-600"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="mt-4 py-3 px-4 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#6D28D9] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 