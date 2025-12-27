import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function Stats() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STARGAZE_DATA.stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 overflow-hidden group"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-[#7C5CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <motion.h2 
              className="text-6xl md:text-7xl font-black text-white mb-2"
              whileHover={{ scale: 1.05 }}
            >
              {stat.value}<span className="text-[#00F2FE]">{stat.suffix}</span>
            </motion.h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}