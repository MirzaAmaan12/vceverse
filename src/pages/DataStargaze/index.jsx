// src/pages/DataStargaze/index.jsx
import React from 'react';
import StargazeHero from './Hero';
import Stats from './Stats';
import AboutEvent from './AboutEvent'; // NEW
import Personnel from './Personnel';
import Agenda from './Agenda';
import EventCategorization from './EventCategorization'; // NEW
import Gallery from './Gallery';

export default function DataStargaze() {
  return (
    <div className="min-h-screen bg-[#020205] text-white overflow-x-hidden selection:bg-[#00F2FE]/30">
      {/* Background Pulse */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,#1A1A2E_0%,#020205_100%)] z-0" />
      
      <div className="relative z-10">
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

        <footer className="py-20 text-center">
          <div className="w-20 h-1 bg-[#7C5CFF] mx-auto mb-8 rounded-full" />
          <p className="text-[10px] font-mono text-slate-600 tracking-[0.5em] uppercase">
            Built for the AI Verse Legacy // 2025
          </p>
        </footer>
      </div>
    </div>
  );
}