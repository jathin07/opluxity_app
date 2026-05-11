import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Users, Lightbulb } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Zap className="w-6 h-6 text-accent-cyan" />,
      title: "Startup-Friendly Pricing",
      description: "Premium quality without breaking the bank."
    },
    {
      icon: <Clock className="w-6 h-6 text-accent-purple" />,
      title: "Fast Delivery",
      description: "We value your time and launch faster."
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Creative + Tech Team",
      description: "The perfect blend of design and development."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
      title: "Modern Approach",
      description: "Using the latest tech stacks and trends."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent-purple/5 blur-[150px] rounded-full z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Why Choose <span className="text-gradient">Opluxity</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                {reason.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{reason.title}</h3>
              <p className="text-text-secondary text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
