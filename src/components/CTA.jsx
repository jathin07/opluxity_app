import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-bg-primary z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] bg-accent-cyan/20 blur-[120px] rounded-full z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-12 md:p-20 rounded-3xl text-center max-w-5xl mx-auto border border-white/10"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ready to Build Your <br />
            <span className="text-gradient">Digital Presence?</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary. Whether it's a website, app, or complete brand identity, we're ready.
          </p>
          <button className="bg-accent-purple hover:bg-opacity-90 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(124,92,255,0.4)]">
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
