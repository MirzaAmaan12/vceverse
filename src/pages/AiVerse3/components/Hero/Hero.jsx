import React from 'react';
import { motion } from 'framer-motion';
import { eventDetails } from '../../data/eventData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Background Glows (Averis Aesthetic) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full" />

      {/* Institutional Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-6"
      >
        <h3 className="text-white/80 font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">
          {eventDetails.institution}
        </h3>
        <p className="dept-title text-[8px] md:text-[10px] mt-2 font-black">
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
          className="text-[15vw] md:text-[12vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 uppercase italic"
        >
          AI-VERSE 3.0
        </motion.h1>

        {/* Robot Visual Placeholder (Centered) */}
{/* // Inside Hero.jsx */}
{/* <div className="relative z-10 w-full max-w-2xl mx-auto flex justify-center items-center">
  <img 
    src="https://img.freepik.com/premium-photo/white-robot-head-with-blue-eyes-dark-background-generative-ai_1034449-65123.jpg" 
    alt="AI Visual" 
    className="w-[300px] md:w-[450px] object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.3)]"
  />
</div> */}
      </div>

      {/* Floating Info Cards (Glassmorphism) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 mt-10 flex flex-col items-center gap-6"
      >
        <div className="glass-card px-8 py-4 text-center border-t border-white/10 glow-cyan">
          <p className="text-[#F0FF42] font-mono text-xs uppercase tracking-widest mb-1">
            The Future of Intelligence Starts Here
          </p>
          <h2 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight">
            Join the Global AI Community
          </h2>
        </div>

        {/* Scroll Hint */}
        <div className="flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] uppercase tracking-[0.4em]">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#22D3EE] to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}