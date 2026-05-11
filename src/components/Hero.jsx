import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-accent-purple rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -right-64 w-96 h-96 bg-accent-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block px-4 py-2 rounded-full glass mb-6 border border-white/10">
            <span className="text-text-secondary text-sm font-medium">🚀 Award-winning Digital Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Crafting Digital <br/>
            <span className="text-gradient">Experiences</span> That <br/>
            Make Brands Stand Out
          </h1>
          
          <p className="text-text-secondary text-lg md:text-xl mb-10 max-w-lg">
            Web Development • UI/UX Design • Social Media Handling • Creative Branding. Built by Anna University Alumni.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-accent-purple hover:bg-opacity-90 text-white px-8 py-4 rounded-full font-medium transition-all transform hover:scale-105 flex items-center gap-2">
              View Services <ArrowRight size={18} />
            </button>
            <button className="glass hover:bg-white/5 text-white px-8 py-4 rounded-full font-medium transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-[600px]"
        >
          {/* Floating UI Elements Mockup */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-lg h-96 glass rounded-2xl p-6 border border-white/10 shadow-2xl"
            >
              {/* Fake Dashboard UI */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-4 w-24 bg-white/10 rounded-full"></div>
              </div>
              
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-white/10 rounded-lg"></div>
                <div className="h-4 w-1/2 bg-white/5 rounded-lg"></div>
                <div className="h-4 w-5/6 bg-white/5 rounded-lg"></div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="h-32 glass rounded-xl flex items-center justify-center bg-gradient-to-br from-accent-purple/20 to-transparent">
                  <div className="w-12 h-12 rounded-full border-4 border-accent-purple border-t-transparent animate-spin"></div>
                </div>
                <div className="h-32 glass rounded-xl p-4">
                  <div className="h-4 w-1/2 bg-white/10 rounded mb-4"></div>
                  <div className="flex items-end space-x-2 h-16">
                    <div className="w-1/4 bg-accent-cyan/40 h-full rounded-t"></div>
                    <div className="w-1/4 bg-accent-cyan/60 h-3/4 rounded-t"></div>
                    <div className="w-1/4 bg-accent-cyan/80 h-1/2 rounded-t"></div>
                    <div className="w-1/4 bg-accent-cyan h-full rounded-t"></div>
                  </div>
                </div>
              </div>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
