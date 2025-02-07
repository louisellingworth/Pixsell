import React from 'react';
import { motion } from 'framer-motion';

export default function ComplexitySection() {
  return (
    <section className="w-full py-24 relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
            Entering China is Complex – We Make It Simple
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-6"
            >
              <h3 className="text-3xl font-bold text-primary-300 mb-4">700M+</h3>
              <p className="text-lg text-white/80">Players in China, making it the world's largest gaming market</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="text-3xl font-bold text-primary-300 mb-4">Regulated</div>
              <p className="text-lg text-white/80">Strict regulations and cultural differences make entry challenging</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center p-6"
            >
              <div className="text-3xl font-bold text-primary-300 mb-4">Complete</div>
              <p className="text-lg text-white/80">We manage everything: co-publishing, localisation, approvals, and marketing</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 