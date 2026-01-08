import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function SessionsInclude() {
  const sessionItems = [
    "Introduction to Quantum Computing",
    "Quantum Principles (Superposition, Entanglement)",
    "Quantum Gates & Algorithms",
    "Quantum Programming Basics",
    "Applications & Career Guidance",
    "Short breaks, lunch break, and feedback sessions"
  ];

  return (
    <section className="px-6 py-16 md:px-24 md:py-24 bg-[#020205] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#00F2FE]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-[#7C5CFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            Workshop <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FE] to-[#7C5CFF]">Includes</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#00F2FE] to-[#7C5CFF] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {sessionItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-[#00F2FE]/40 hover:bg-white/[0.08] transition-all group"
            >
              <CheckCircle 
                className="w-6 h-6 text-[#00F2FE] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform"
                strokeWidth={2.5}
              />
              <span className="text-white font-medium text-sm md:text-base leading-relaxed">
                {item}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
