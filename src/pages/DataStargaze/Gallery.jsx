import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function Gallery() {
  return (
    <section className="py-20 md:py-32 px-6 max-w-7xl mx-auto">
      {/* ADJUSTED HEADER: Changed items-end to items-start for mobile alignment */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none">
          Legacy <br /> <span className="text-[#00F2FE]">Archives</span>
        </h2>
        {/* Adjusted max-w and alignment for mobile screens */}
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest max-w-[250px] md:max-w-[200px] leading-relaxed">
          Visual evidence of the 2021 foundation workshop.
        </p>
      </div>

      {/* ADJUSTED GRID: 1 column on mobile (grid-cols-1) to ensure images aren't squashed */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {STARGAZE_DATA.images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 0.98 }}
            className={`relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 group ${
              // Grid logic: first image takes full width on mobile, 2 columns on desktop
              i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:col-span-2" : ""
            }`}
          >
            {/* Image Layer */}
            <div className="absolute inset-0 bg-slate-900 overflow-hidden">
               <img 
                 src={img.url} 
                 alt={img.title} 
                 className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100" 
               />
            </div>

            {/* Glass Overlay - Matching your original project color */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <p className="text-[#00F2FE] font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] mb-1">Archive_{i+1}</p>
              <h5 className="text-white font-bold text-sm md:text-lg uppercase">{img.title}</h5>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}