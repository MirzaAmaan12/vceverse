import React from 'react';
import { motion } from 'framer-motion';
import { eventDetails } from '../../data/eventData';
import { Users, Cpu, Globe, MessageSquare } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Attendees", value: "350+", icon: <Users size={18} /> },
    { label: "Speakers", value: "2", icon: <MessageSquare size={18} /> },
    { label: "Sessions", value: "4", icon: <Cpu size={18} /> },
    { label: "Countries", value: "Global", icon: <Globe size={18} /> },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-24 px-3 sm:px-6 max-w-7xl mx-auto">
      {/* 1. Stats Bar (Averis Style) */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="glass-card p-4 sm:p-6 flex flex-col items-center justify-center border-l-2 border-[#F0FF42]"
          >
            <div className="text-[#22D3EE] mb-1 sm:mb-2">{stat.icon}</div>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-white">{stat.value}</h4>
            <p className="text-[8px] sm:text-[10px] uppercase tracking-wider sm:tracking-widest text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 2. Main Content: Where AI Meets Human Creativity */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-8 leading-tight italic uppercase">
            Where AI meets <br />
            <span className="text-[#22D3EE]">human creativity</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            {eventDetails.purpose.description}
          </p>
          <div className="h-1 w-16 sm:w-20 bg-[#F0FF42]" />
        </div>

        {/* 3. Purpose Pillars (Bento Grid) */}
        <div className="grid gap-4 sm:gap-6">
          {eventDetails.purpose.pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 sm:p-6 md:p-8 group hover:bg-white/5 transition-colors"
            >
              <h3 className="text-[#F0FF42] font-black mb-2 sm:mb-3 uppercase tracking-tighter italic text-sm sm:text-base">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                {pillar.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
