import { motion } from "framer-motion";

export default function Agenda() {
  const schedule = [
    { time: "09:30 AM", event: "Inauguration Ceremony" },
    { time: "11:00 AM", event: "Keynote: Future of AIML" },
    { time: "01:00 PM", event: "Technical Breakout Sessions" },
    { time: "03:30 PM", event: "Workshops & Awards" },
  ];

  return (
    <motion.section 
      id="agenda"
      className="min-h-screen px-6 py-20 md:px-24 md:py-32 flex flex-col justify-center relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        background: "radial-gradient(circle at 50% 50%, #0B0B15 0%, #020205 100%)",
      }}
    >
      {/* Nebula Mesh Gradients for background depth */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#8B5CF6]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-[#00F2FE]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Dual-Tone Heading */}
      <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter">
        Event <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FE] to-[#8B5CF6]">Timeline</span>
      </h2>

      <div className="max-w-4xl relative z-10">
        <div className="space-y-0 border-l border-white/10 ml-2">
          {schedule.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="relative pl-8 pb-12 last:pb-0 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Timeline Dot with Glow */}
              <div className="absolute left-[-6.5px] top-2 h-3 w-3 bg-gradient-to-r from-[#00F2FE] to-[#8B5CF6] rounded-full shadow-[0_0_15px_rgba(0,242,254,0.5)] group-hover:scale-125 transition-transform" />
              
              {/* Time - Neon Cyan */}
              <span className="text-[#00F2FE] font-mono text-sm font-bold uppercase tracking-[0.2em]">
                {item.time}
              </span>

              {/* Event Name - Slate-300 Metallic feel */}
              <h3 className="text-[#CBD5E1] text-xl md:text-3xl font-semibold mt-2 tracking-tight group-hover:text-white transition-colors">
                {item.event}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}