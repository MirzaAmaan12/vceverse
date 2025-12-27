import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function AboutEvent() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="space-y-16">
        
        {/* HEADING & STATS INTEGRATION */}
        <div className="space-y-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 leading-none">
              EVENT <span className="text-[#00F2FE]">OVERVIEW</span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-[#7C5CFF]" />
              <p className="text-[#7C5CFF] font-mono text-[10px] tracking-[0.5em] uppercase">
                2-Day Workshop // {STARGAZE_DATA.date}
              </p>
            </div>
          </motion.div>

          {/* Large-Scale Stats UI (Now under the heading) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STARGAZE_DATA.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative p-10 rounded-[3rem] bg-white/[0.02] border border-white/10 overflow-hidden group backdrop-blur-md"
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-[#7C5CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.h2 
                  className="text-6xl md:text-7xl font-black text-white mb-2 relative z-10"
                  whileHover={{ scale: 1.05 }}
                >
                  {stat.value}<span className="text-[#00F2FE]">{stat.suffix}</span>
                </motion.h2>
                <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.4em] relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* DETAILS & OBJECTIVES GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-start pt-8 border-t border-white/5">
          
          {/* Left: Institutional Context & Leadership */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <p className="text-slate-300 text-lg leading-relaxed font-medium opacity-90 italic border-l-2 border-[#7C5CFF] pl-6">
              Hosted by the <span className="text-white font-bold uppercase tracking-tight">CSE (AI & ML) Department</span>, 
              this initiative focused on identifying professional needs and mastering Machine Learning code implementation.
            </p>

            {/* Leadership & Coordination Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
               <InfoBlock label="Chief Guest" name="Prof. S.S.V.N. Sharma" role="Dean of Academy" color="#7C5CFF" />
               <InfoBlock label="Convener" name="Dr. Thanveer Jahan" role="HOD-CSE (AI & ML)" color="#00F2FE" />
               <InfoBlock label="Coordinator" name="Mrs. A. Swetha" role="Assistant Professor" color="#7C5CFF" />
               <InfoBlock label="Coordinator" name="Mr. Salim Jiwani" role="Assistant Professor" color="#00F2FE" />
            </div>
          </motion.div>

          {/* Right: Key Objectives Glass Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/10 backdrop-blur-2xl overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00F2FE]/10 blur-[100px] rounded-full" />
            
            <h3 className="text-white font-black text-2xl uppercase mb-10 flex items-center gap-4">
              <span className="w-1.5 h-8 bg-gradient-to-b from-[#7C5CFF] to-[#00F2FE] rounded-full" />
              Key Objectives
            </h3>

            <div className="space-y-8">
              {[
                "Enhance students’ coding and interviewing skills",
                "Expose learners to real-world communication",
                "Identify specific needs of IT professionals",
                "Involve learners in Machine Learning code implementation"
              ].map((text, i) => (
                <div key={i} className="flex gap-6 group items-start">
                  <span className="text-[#00F2FE] font-mono text-xs font-bold pt-1 opacity-30">0{i+1}</span>
                  <p className="text-slate-400 text-sm md:text-base leading-snug group-hover:text-white transition-colors duration-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function InfoBlock({ label, name, role, color }) {
  return (
    <div className="relative group">
      <span className="block text-[8px] font-mono mb-2 uppercase tracking-[0.4em] opacity-40 group-hover:opacity-100 transition-opacity" style={{ color: color }}>
        {label}
      </span>
      <div className="space-y-1 border-l border-white/10 pl-4 group-hover:border-white/40 transition-all duration-500">
        <h4 className="text-white font-black text-sm uppercase tracking-tight">{name}</h4>
        <p className="text-slate-500 text-[10px] uppercase font-bold tracking-tighter opacity-80">{role}</p>
      </div>
    </div>
  );
}