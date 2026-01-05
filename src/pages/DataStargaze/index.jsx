// src/pages/DataStargaze/index.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StargazeHero from './Hero';
import Stats from './Stats';
import AboutEvent from './AboutEvent'; // NEW
import Personnel from './Personnel';
import Agenda from './Agenda';
import EventCategorization from './EventCategorization'; // NEW
import Gallery from './Gallery';
import Footer from './components/Footer';
import { FloatingGradientBg } from '../../components/FloatingGradientBg';

export default function DataStargaze() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden selection:bg-[#00F2FE]/30 relative">
      {/* Background Pulse */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#1A1A2E_0%,#020205_100%)] z-0" />
      <FloatingGradientBg />
      
      <div className="relative z-10 pt-16 sm:pt-0">
        <StargazeHero />
        {/* <Stats /> */}
        
        {/* NEW: Inserted after Stats to explain the objective */}
        <AboutEvent />
        
        {/* Decorative Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-10" />
        
        <Personnel />
        <Agenda />

        {/* NEW: Inserted after Agenda to detail specific module types */}
        <EventCategorization />

        <Gallery />

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
              onClick={() => navigate('/ai-verse-4')} 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 hover:shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-all text-sm font-bold tracking-widest uppercase text-white"
            >
              Explore AI-VERSE 4.0 →
            </button>
          </div>
        </section>
     
        <Footer />
      </div>
    </div>
  );
}