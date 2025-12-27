import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function StargazeHero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#020205] px-4 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[90vw] h-[40vh] bg-[#7C5CFF]/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: -20 }} 
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full"
      >
        {/* Institutional Branding */}
        <div className="flex flex-col items-center mb-10 space-y-2">
          <span className="text-white/40 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.5em]">
            Vaagdevi College of Engineering
          </span>
          <div className="px-4 py-1.5 rounded-full border border-[#7C5CFF]/30 bg-[#7C5CFF]/5 backdrop-blur-sm">
            <span className="text-[#7C5CFF] font-mono text-[9px] md:text-xs uppercase tracking-[0.3em] font-bold">
              Dept of CSE (AI & ML)
            </span>
          </div>
        </div>

        {/* Date / Status Tag */}
        <div className="text-[#00F2FE] font-mono text-[9px] md:text-xs uppercase mb-6 tracking-[0.4em] border-b border-[#00F2FE]/20 pb-2">
          {STARGAZE_DATA.date}
        </div>

        {/* Main Event Title */}
        <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black leading-[0.85] tracking-tighter text-white text-center">
          <span className="block">DATA</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">STARGAZE</span>
        </h1>

        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          className="h-[1px] bg-[#7C5CFF] mt-8 shadow-[0_0_15px_#7C5CFF]"
        />

        {/* Tagline / Department Focus */}
        <p className="mt-10 text-slate-500 max-w-xs md:max-w-lg text-center text-[10px] md:text-sm font-light tracking-[0.2em] uppercase leading-relaxed">
          "The first spark of AI & ML at Vaagdevi" <br />
          <span className="text-white/30 text-[8px] mt-2 block tracking-[0.4em]">Official Legacy Archive</span>
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 flex flex-col items-center">
        <div className="w-[1px] h-10 bg-gradient-to-b from-[#7C5CFF] to-transparent mb-4" />
        <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.5em] animate-pulse">
          Initiate Archive
        </span>
      </div>
    </section>
  );
}