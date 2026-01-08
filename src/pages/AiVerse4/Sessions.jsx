import { motion } from "framer-motion";

export default function Sessions() {
  const sessions = [
    "Introduction to Quantum Computing",
    "Quantum Principles (Superposition, Entanglement)",
    "Quantum Gates & Algorithms",
    "Quantum Programming Basics",
    "Applications & Career Guidance",
    "Includes short breaks, lunch break, and feedback sessions"
  ];

  return (
    <section id="sessions" className="min-h-screen px-6 py-20 md:px-24 bg-[#020205]">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter">
        WORKSHOP <span className="text-[#7C5CFF]">SESSIONS</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {sessions.map((session, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group hover:border-[#7C5CFF]/50 transition-all"
          >
            {/* Glow Accent */}
            <div className="absolute -right-10 -top-10 w-32 h-32 blur-[60px] opacity-10 transition-opacity group-hover:opacity-30 bg-[#7C5CFF]" />
            
            <span className="text-[#00F2FE] font-mono text-xs uppercase tracking-widest">Session {i + 1}</span>
            <h3 className="text-white text-lg md:text-xl font-semibold mt-3 group-hover:text-[#00F2FE] transition-colors">
              {session}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}