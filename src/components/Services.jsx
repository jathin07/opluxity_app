import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Share2, PenTool, Award, MonitorSmartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code />,
      title: "Web Development",
      description: "Custom, scalable, and lightning-fast websites built with modern frameworks."
    },
    {
      icon: <Layout />,
      title: "UI/UX Design",
      description: "Intuitive, user-centered designs that drive engagement and conversions."
    },
    {
      icon: <Share2 />,
      title: "Social Media Handling",
      description: "Strategic content and management to grow your audience and brand."
    },
    {
      icon: <PenTool />,
      title: "Poster / Creative Design",
      description: "Eye-catching visuals that communicate your message effectively."
    },
    {
      icon: <Award />,
      title: "Branding",
      description: "Cohesive brand identities that leave a lasting impression."
    },
    {
      icon: <MonitorSmartphone />,
      title: "Landing Pages",
      description: "High-converting landing pages optimized for marketing campaigns."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            We offer end-to-end digital solutions to help your startup thrive in the modern landscape.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl group hover:border-accent-purple/50 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent-purple/10 text-accent-purple flex items-center justify-center mb-6 group-hover:bg-accent-purple group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
