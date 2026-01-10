// src/pages/AiVerse/AboutEvent.jsx
import { motion } from "framer-motion";
import { AIVERSE_DATA } from "./content";

export default function AboutEvent() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Event Insight Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">✨</span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#00F2FE]">
            {AIVERSE_DATA.eventInsight.title}
          </h3>
        </div>
        <p className="text-white/70 text-sm sm:text-base leading-relaxed">
          {AIVERSE_DATA.eventInsight.description}
        </p>
      </motion.div>

      {/* Main About Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
          {AIVERSE_DATA.about.title}
        </h2>
        <div className="h-1 w-20 bg-[#00F2FE] mx-auto rounded-full shadow-[0_0_15px_#00F2FE]" />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white/60 text-center max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mb-12"
      >
        {AIVERSE_DATA.about.description}
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {AIVERSE_DATA.about.highlights.map((highlight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F2FE]/30 transition-all"
          >
            <div className="w-2 h-2 rounded-full bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]" />
            <span className="text-white/80 text-sm">{highlight}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
