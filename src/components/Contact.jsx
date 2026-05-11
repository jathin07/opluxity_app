import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send } from 'lucide-react';

const Instagram = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const Linkedin = ({size}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start a <br /> <span className="text-gradient">Conversation</span>
            </h2>
            <p className="text-text-secondary text-lg mb-12">
              Have a project in mind or just want to say hi? We'd love to hear from you.
            </p>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-accent-purple/10 text-accent-purple flex items-center justify-center group-hover:bg-accent-purple group-hover:text-white transition-colors">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-text-secondary text-sm">hello@opluxity.com</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <MessageCircle />
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-text-secondary text-sm">+91 98765 43210</p>
                </div>
              </a>

              <div className="flex gap-4 pt-6 border-t border-white/10">
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent-purple hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-accent-cyan hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-3xl"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">Project Details</label>
                <textarea 
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button className="w-full bg-accent-purple hover:bg-opacity-90 text-white px-6 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
