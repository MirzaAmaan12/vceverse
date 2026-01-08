import React from 'react';
import { motion } from 'framer-motion';
import { eventDetails } from '../../data/eventData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 overflow-hidden px-3 sm:px-4">
      {/* Background Glows (Averis Aesthetic) */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-600/20 blur-[80px] sm:blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-cyan-600/20 blur-[80px] sm:blur-[120px] rounded-full" />

      {/* Institutional Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-4 sm:mb-6"
      >
        <h3 className="text-white/80 font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[9px] sm:text-[10px] md:text-xs uppercase">
          {eventDetails.institution}
        </h3>
        <p className="dept-title text-[7px] sm:text-[8px] md:text-[10px] mt-1.5 sm:mt-2 font-black">
          {eventDetails.organizer}
        </p>
      </motion.div>

      {/* Main Title & Visual Container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Large Outlined Text (Like Averis Image) */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[13vw] sm:text-[14vw] md:text-[12vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase italic"
        >
          AI-VERSE 3.0
        </motion.h1>
      </div>

      {/* Floating Info Cards (Glassmorphism) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 mt-6 sm:mt-10 flex flex-col items-center gap-4 sm:gap-6 px-2"
      >
        <div className="glass-card px-4 sm:px-8 py-3 sm:py-4 text-center border-t border-white/10 glow-cyan">
          <p className="text-[#F0FF42] font-mono text-[9px] sm:text-xs uppercase tracking-widest mb-1">
            The Future of Intelligence Starts Here
          </p>
          <h2 className="text-white text-base sm:text-xl md:text-2xl font-black uppercase tracking-tight">
            Join the Global AI Community
          </h2>
        </div>

        {/* Scroll Hint */}
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em]">Scroll to Explore</span>
          <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#22D3EE] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}