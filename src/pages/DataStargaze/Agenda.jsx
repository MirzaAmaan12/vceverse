import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function Agenda() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-20 text-center tracking-tighter">
        CHRONICLE <span className="text-[#7C5CFF]">FLOW</span>
      </h2>
      
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2">
        {STARGAZE_DATA.agenda.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative mb-16 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:translate-x-[-100%]' : 'md:pl-12'}`}
          >
            {/* Glowing Timeline Node */}
            <div className="absolute top-2 w-4 h-4 bg-[#00F2FE] rounded-full shadow-[0_0_15px_#00F2FE] left-[-9px] md:left-auto md:right-[-9px]" 
                 style={{ right: i % 2 !== 0 ? 'auto' : '-9px', left: i % 2 !== 0 ? '-9px' : 'auto' }} />
            
            <span className="text-[#7C5CFF] font-mono text-[10px] uppercase tracking-widest block mb-2">
              {item.day} // {item.time}
            </span>
            <h4 className="text-xl md:text-2xl font-bold text-white leading-tight">
              {item.event}
            </h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}