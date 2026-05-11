import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-purple/5 blur-[150px] rounded-full z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <div className="text-3xl font-bold tracking-tighter mb-6">
              OPLUXITY<span className="text-accent-cyan">.</span>
            </div>
            <p className="text-text-secondary max-w-sm mb-6">
              A creative digital agency crafting premium web experiences, founded by Anna University alumni.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              Available for new projects
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-text-secondary">
              <li><a href="#home" className="hover:text-accent-cyan transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent-cyan transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-accent-cyan transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent-cyan transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Socials</h4>
            <ul className="space-y-4 text-text-secondary">
              <li><a href="#" className="flex items-center gap-1 hover:text-accent-purple transition-colors">Instagram <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-accent-purple transition-colors">LinkedIn <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-accent-purple transition-colors">Twitter <ArrowUpRight size={14} /></a></li>
              <li><a href="#" className="flex items-center gap-1 hover:text-accent-purple transition-colors">Dribbble <ArrowUpRight size={14} /></a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-text-secondary text-sm">
          <p>© {new Date().getFullYear()} Opluxity. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
