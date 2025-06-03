
import React from 'react';
import { MessageCircle, Phone, Mail, ArrowDown } from 'lucide-react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
