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
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-20">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center border-l-2 border-orange-500"
          >
            <div className="text-orange-500 mb-2">{stat.icon}</div>
            <h4 className="text-2xl sm:text-3xl font-black text-white">{stat.value}</h4>
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-white/50">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-start">
        <div>
          <h3 className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-1 sm:mb-2">About Event</h3>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
            Where AI meets <br />
            <span className="text-orange-500">human creativity</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            {eventDetails.purpose.description}
          </p>
          <div className="h-1 w-20 bg-orange-500" />
        </div>

        {/* Purpose Pillars */}
        <div className="grid gap-4 sm:gap-6">
          {eventDetails.purpose.pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 sm:p-6 group hover:border-orange-500/50 transition-all duration-300"
            >
              <h3 className="text-orange-500 font-bold mb-2 sm:mb-3 text-sm sm:text-base">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {pillar.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}