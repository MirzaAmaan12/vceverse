import React from 'react';
import { motion } from 'framer-motion';
import { eventDetails } from '../../data/eventData';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 overflow-hidden px-3 sm:px-4">
      {/* Background Glows - Orange Theme */}
      <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-orange-600/20 blur-[80px] sm:blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-orange-500/15 blur-[80px] sm:blur-[120px] rounded-full" />

      {/* Institutional Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-4 sm:mb-6"
      >
        <p className="text-orange-500 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 text-xs sm:text-sm md:text-base">
          {eventDetails.institution}
        </p>
        <div className="inline-block px-3 sm:px-4 py-1 border border-white/20 rounded-full">
          <h2 className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wide font-medium">
            {eventDetails.organizer}
          </h2>
        </div>
      </motion.div>

      {/* Main Title */}
      <div className="relative z-10 flex flex-col items-center">
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic mt-2 glow-text tracking-tighter uppercase"
        >
          AI-VERSE 3.0
        </motion.h1>
      </div>

      {/* Date Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="z-10 mt-6 sm:mt-10 flex flex-col items-center gap-4 sm:gap-6 px-2"
      >
        <div className="bg-orange-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-sm font-black transform -skew-x-12 shadow-lg shadow-orange-600/20 text-sm sm:text-base md:text-lg">
          <span className="inline-block skew-x-12">NOV 4-6, 2024</span>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-4 sm:py-6 text-center mt-4">
          <p className="text-orange-500 font-bold text-xs sm:text-sm md:text-base uppercase tracking-widest mb-2">
            The Future of Intelligence Starts Here
          </p>
          <h2 className="text-white text-lg sm:text-2xl md:text-3xl font-bold">
            Join the Global AI Community
          </h2>
        </div>
      </motion.div>
    </section>
  );
}