// src/pages/AiVerse/Hero.jsx
import { motion } from "framer-motion";
import { AIVERSE_DATA } from "./content";

export default function AiVerseHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#020205] px-3 sm:px-4 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] h-[40vh] bg-[#00F2FE]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: -20 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full pt-16 sm:pt-0"
      >
        {/* Institutional Branding */}
        <div className="flex flex-col items-center mb-6 sm:mb-10 space-y-2">
          <span className="text-white/40 font-mono text-[7px] sm:text-[8px] md:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em]">
            Vaagdevi College of Engineering
          </span>
          <div className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#00F2FE]/30 bg-[#00F2FE]/5 backdrop-blur-sm">
            <span className="text-[#00F2FE] font-mono text-[8px] sm:text-[9px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">
              Dept of CSE (AI & ML)
            </span>
          </div>
        </div>

        {/* Year Tag */}
        <div className="px-4 py-1.5 rounded-full bg-[#00F2FE] text-black font-bold text-xs sm:text-sm mb-4 sm:mb-6">
          {AIVERSE_DATA.date}
        </div>

        {/* Main Event Title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-white text-center">
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#00F2FE] to-[#00F2FE]/40">AI-VERSE</span>
        </h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          className="h-[1px] bg-[#00F2FE] mt-6 sm:mt-8 shadow-[0_0_15px_#00F2FE]"
        />

        {/* Tagline */}
        <p className="mt-6 sm:mt-10 text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-cyan-300">
          {AIVERSE_DATA.tagline}
        </p>
        
        <p className="mt-4 text-white/50 max-w-xs md:max-w-lg text-center text-[10px] sm:text-xs md:text-sm leading-relaxed px-4">
          {AIVERSE_DATA.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {AIVERSE_DATA.tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-xs sm:text-sm hover:border-[#00F2FE]/50 hover:text-[#00F2FE] transition-all"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex gap-6 sm:gap-10 mt-10 sm:mt-14">
          {Object.entries(AIVERSE_DATA.stats).map(([key, value]) => (
            <div key={key} className="text-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-white">{value}</span>
              <span className="block text-[8px] sm:text-[9px] text-white/40 uppercase tracking-[0.2em] mt-1">{key}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
