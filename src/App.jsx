import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Workflow from './components/Workflow';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-bg-primary text-text-primary font-sans min-h-screen overflow-x-hidden selection:bg-accent-purple selection:text-white">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <WhyChooseUs />
      <Workflow />
      <Portfolio />
      <Team />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
