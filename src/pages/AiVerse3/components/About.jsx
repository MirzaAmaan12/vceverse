import { motion } from 'framer-motion';
import { SYSTEM_DATA } from '../content';

export default function About() {
  return (
    <section className="py-40 bg-[#050505] text-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1">
        {SYSTEM_DATA.modules.map((m, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98, backgroundColor: "#111" }}
            className="border border-white/10 p-12 relative overflow-hidden group"
          >
            <span className="font-mono text-[#ADFF2F] text-xs">{m.id}</span>
            <h3 className="text-3xl font-black mt-8 mb-6 uppercase">{m.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-10">{m.desc}</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-[#ADFF2F] rounded-full animate-pulse" />
              <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{m.status}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}