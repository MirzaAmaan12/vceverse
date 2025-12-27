import { motion } from "framer-motion";

export default function Sessions() {
  const categories = [
    {
      type: "Technical",
      color: "#7C5CFF",
      events: ["Hackathons", "Neural Debugging", "Prompt Engineering"],
    },
    {
      type: "Non-Technical",
      color: "#00F2FE",
      events: ["AI Art Gallery", "E-Sports", "Tech Quizzes"],
    },
  ];

  return (
    <section id="sessions" className="min-h-screen px-6 py-20 md:px-24 bg-[#020205]">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter">
        SESSIONS <span className="text-[#7C5CFF]">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 relative overflow-hidden group"
          >
            {/* Glow Accent */}
            <div 
              className="absolute -right-10 -top-10 w-32 h-32 blur-[60px] opacity-20 transition-opacity group-hover:opacity-40"
              style={{ backgroundColor: cat.color }}
            />
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: cat.color }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: cat.color }} />
              {cat.type}
            </h3>

            <ul className="space-y-4">
              {cat.events.map((event, index) => (
                <li key={index} className="flex justify-between items-center text-gray-300 group/item">
                  <span className="text-lg group-hover/item:text-white transition-colors">{event}</span>
                  <button className="text-[10px] font-mono tracking-widest uppercase border border-white/20 px-3 py-1 rounded-md hover:bg-white hover:text-black transition-all">
                    View Rules
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}