import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function EventCategorization() {
  const { technical, nonTechnical } = STARGAZE_DATA.eventCategories;

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      {/* 1. UPGRADED MAIN HEADING */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 text-center relative"
      >
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none">
          EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] via-white to-[#00F2FE]">ARCHITECTURE</span>
        </h2>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="h-[1px] w-12 bg-[#7C5CFF]" />
          <p className="text-[#00F2FE] font-mono text-[10px] tracking-[0.6em] uppercase">Structural Breakdown</p>
          <div className="h-[1px] w-12 bg-[#00F2FE]" />
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Technical Vertical */}
        <div className="space-y-10">
          <SectionHeader title="Technical Vertical" count="01" color="#7C5CFF" />
          {technical.map((item, i) => (
            <EnhancedCard key={i} item={item} color="#7C5CFF" index={i} />
          ))}
        </div>

        {/* Creative Vertical */}
        <div className="space-y-10">
          <SectionHeader title="Creative Vertical" count="02" color="#00F2FE" />
          {nonTechnical.map((item, i) => (
            <EnhancedCard key={i} item={item} color="#00F2FE" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EnhancedCard({ item, color, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative p-10 rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-white/30"
    >
      {/* Tech-Glow Background Effect */}
      <div 
        className="absolute -top-20 -right-20 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundColor: color }}
      />

      <div className="relative z-10">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: color }} />
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Module_{index + 1}</span>
          </div>
          <motion.div 
            whileHover={{ rotate: 90 }}
            className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/20 group-hover:text-white transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" />
            </svg>
          </motion.div>
        </div>
        
        {/* FIX: Bolder Text for Better Readability */}
        <h4 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter mb-4 group-hover:text-[#00F2FE] transition-colors duration-300">
          {item.title}
        </h4>
        
        <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 font-normal md:font-medium opacity-80 group-hover:opacity-100 transition-opacity">
          {item.desc}
        </p>

        {/* Footer Data */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-500 uppercase font-mono mb-1">Speaker / Mentor</span>
            <span className="text-[10px] text-white font-bold uppercase tracking-widest" style={{ color: color }}>
              {item.speaker || "General Event"}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeader({ title, count, color }) {
  return (
    <div className="flex items-center gap-6 mb-12 px-4">
      <div className="relative">
        <span className="text-6xl font-black text-transparent opacity-20" style={{ WebkitTextStroke: `1px ${color}` }}>{count}</span>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: color, filter: `drop-shadow(0 0 10px ${color})` }} />
      </div>
      <div className="flex flex-col">
        <h3 className="text-white font-black tracking-[0.4em] uppercase text-lg">{title}</h3>
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2" />
      </div>
    </div>
  );
}