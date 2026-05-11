import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Rocket } from 'lucide-react';

const Trust = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-accent-cyan" />,
      title: "7 Creative Minds",
      description: "Dedicated team of designers and developers"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-accent-purple" />,
      title: "Anna University Alumni",
      description: "Rooted in strong technical foundations"
    },
    {
      icon: <Rocket className="w-8 h-8 text-white" />,
      title: "Startup Focused",
      description: "Tailored solutions for growing brands"
    }
  ];

  return (
    <section className="py-20 bg-bg-secondary relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center hover:bg-white/5 transition-colors border-t border-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{stat.title}</h3>
              <p className="text-text-secondary">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
