// src/pages/AiVerse/index.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AiVerseHero from './Hero';
import AboutEvent from './AboutEvent';
import Footer from './components/Footer';
import { FloatingGradientBg } from '../../components/FloatingGradientBg';
import BackButton from '../../components/BackButton';

export default function AiVerse() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden selection:bg-[#00F2FE]/30 relative">
      {/* Background Pulse */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#1A1A2E_0%,#020205_100%)] z-0" />
      <FloatingGradientBg />
      <BackButton />
      
      <div className="relative z-10 pt-16 sm:pt-0">
        <AiVerseHero />
        
        {/* Decorative Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
        
        <AboutEvent />

        {/* --- NAVIGATION FOOTER --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center border-t border-white/10 pt-16">
            <button 
              onClick={() => navigate('/')} 
              className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm font-bold tracking-widest uppercase text-white"
            >
              ← Home
            </button>
            
            <button 
              onClick={() => navigate('/ai-verse-2')} 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all text-sm font-bold tracking-widest uppercase text-white"
            >
              Explore AI-VERSE 2.0 →
            </button>
          </div>
        </section>
     
        <Footer />
      </div>
    </div>
  );
}
