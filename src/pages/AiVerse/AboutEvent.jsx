// src/pages/AiVerse/AboutEvent.jsx
import { motion } from "framer-motion";
import { AIVERSE_DATA } from "./content";

export default function AboutSection() {
  return (
    <section className="section-container px-3 sm:px-6">
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start">
        
        {/* Left: About Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-2">
            The Beginning
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            {AIVERSE_DATA.about.title}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {AIVERSE_DATA.about.description}
          </p>
          
          {/* Event Insight Card */}
          <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">✨</span>
              <h4 className="text-orange-500 font-bold text-sm sm:text-base">
                {AIVERSE_DATA.eventInsight.title}
              </h4>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              {AIVERSE_DATA.eventInsight.description}
            </p>
          </div>
        </motion.div>

        {/* Right: Overview Points */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6"
        >
          {AIVERSE_DATA.overviewPoints.map((point, i) => (
            <div 
              key={i} 
              className="p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-orange-500 font-black text-lg sm:text-xl opacity-50">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-1 sm:mb-2">
                    {point.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {AIVERSE_DATA.tags.map((tag, index) => (
              <span
                key={tag}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20 text-white/70 text-[10px] sm:text-xs hover:border-orange-500/50 hover:text-orange-500 transition-all"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
