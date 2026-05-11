import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, FileText, PenTool, Code, CheckCircle } from 'lucide-react';

const Workflow = () => {
  const steps = [
    { icon: <MessageCircle />, title: "Discussion" },
    { icon: <FileText />, title: "Planning" },
    { icon: <PenTool />, title: "Design" },
    { icon: <Code />, title: "Development" },
    { icon: <CheckCircle />, title: "Delivery" }
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Workflow</span>
          </motion.h2>
          <p className="text-text-secondary text-lg">A simple and transparent process to turn your ideas into reality.</p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full glass border border-white/10 flex items-center justify-center mb-4 text-accent-purple bg-bg-primary shadow-lg shadow-accent-purple/10">
                  {step.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <span className="text-text-secondary text-sm font-medium">Step 0{index + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
