import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventDetails } from '../../data/eventData';
import { Calendar, User, Clock } from 'lucide-react';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <section id="schedule" className="relative py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-[#F0FF42] uppercase tracking-[0.4em] text-xs mb-4 font-bold">Timeline</h2>
          <h3 className="text-5xl font-black italic uppercase leading-none">Event <span className="text-[#22D3EE]">Schedule</span></h3>
        </div>
        
        {/* Day Selectors */}
        <div className="flex gap-2">
          {eventDetails.schedule.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`px-6 py-2 rounded-full text-[10px] uppercase font-bold tracking-tighter transition-all ${
                selectedDay === idx ? 'bg-[#22D3EE] text-black glow-cyan' : 'bg-white/5 text-white/50 hover:bg-white/10'
              }`}
            >
              Day {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Day Details Card */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="glass-card p-10 relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Calendar size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-[#F0FF42] text-black px-4 py-1 rounded-full text-[10px] font-black uppercase">
                    {eventDetails.schedule[selectedDay].date}
                  </span>
                  <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                    <Clock size={14} /> {eventDetails.schedule[selectedDay].session}
                  </div>
                </div>

                <h4 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase italic leading-tight">
                  {eventDetails.schedule[selectedDay].topic}
                </h4>

                {eventDetails.schedule[selectedDay].resourcePerson !== "-" && (
                  <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1] to-[#A855F7] flex items-center justify-center">
                      <User size={30} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[#22D3EE] mb-1 font-bold">Resource Person</p>
                      <p className="text-xl font-black text-white">{eventDetails.schedule[selectedDay].resourcePerson}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="glass-card p-8 flex flex-col justify-center border-r-4 border-[#22D3EE]">
          <p className="text-[#F0FF42] font-mono text-[10px] uppercase mb-4 tracking-[0.3em]">Participation</p>
          <h5 className="text-6xl font-black mb-2">{eventDetails.schedule[selectedDay].attendees}</h5>
          <p className="text-white/40 uppercase tracking-widest text-xs font-bold leading-relaxed">
            Active participants engaged in {eventDetails.schedule[selectedDay].topic}
          </p>
        </div>
      </div>
    </section>
  );
}