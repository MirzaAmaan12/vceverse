import React from 'react';
import { motion } from 'framer-motion';
import { eventDetails } from '../../data/eventData';
import { Users, Cpu, Globe, MessageSquare } from 'lucide-react';

export default function About() {
  const stats = [
    { label: "Attendees", value: "350+", icon: <Users size={20} /> },
    { label: "Speakers", value: "2", icon: <MessageSquare size={20} /> },
    { label: "Sessions", value: "4", icon: <Cpu size={20} /> },
    { label: "Countries", value: "Global", icon: <Globe size={20} /> },
  ];

  return (
    <section id="about" className="relative py-24 px-6 max-w-7xl mx-auto">
      {/* 1. Stats Bar (Averis Style) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="glass-card p-6 flex flex-col items-center justify-center border-l-2 border-[#F0FF42]"
          >
            <div className="text-[#22D3EE] mb-2">{stat.icon}</div>
            <h4 className="text-3xl font-black text-white">{stat.value}</h4>
            <p className="text-[10px] uppercase tracking-widest text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 2. Main Content: Where AI Meets Human Creativity */}
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic uppercase">
            Where AI meets <br />
            <span className="text-[#22D3EE]">human creativity</span>
          </h2>
          <p className="text-white/70 leading-relaxed mb-6">
            {eventDetails.purpose.description}
          </p>
          <div className="h-1 w-20 bg-[#F0FF42]" />
        </div>

        {/* 3. Purpose Pillars (Bento Grid) */}
        <div className="grid gap-6">
          {eventDetails.purpose.pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 group hover:bg-white/5 transition-colors"
            >
              <h3 className="text-[#F0FF42] font-black mb-3 uppercase tracking-tighter italic">
                {pillar.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">
                {pillar.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}