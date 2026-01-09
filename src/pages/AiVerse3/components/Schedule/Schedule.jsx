import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { eventDetails } from '../../data/eventData';
import { Calendar, User, Clock } from 'lucide-react';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <section id="schedule" className="relative py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
        <div>
          <h3 className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-1 sm:mb-2">Timeline</h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Event Schedule</h2>
        </div>
        
        {/* Day Selectors */}
        <div className="flex flex-wrap gap-2">
          {eventDetails.schedule.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedDay(idx)}
              className={`px-4 sm:px-6 py-2 rounded-full text-[10px] sm:text-xs uppercase font-bold tracking-tighter transition-all ${
                selectedDay === idx ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/20' : 'bg-white/5 text-white/50 hover:bg-white/10'
              }`}
            >
              Day {idx + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Day Details Card */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 relative overflow-hidden h-full"
            >
              <div className="absolute top-0 right-0 p-4 sm:p-8 opacity-10">
                <Calendar size={80} className="sm:w-[120px] sm:h-[120px]" />
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <span className="bg-orange-600 text-white px-3 sm:px-4 py-1 rounded-sm font-black text-[10px] sm:text-xs transform -skew-x-12">
                    <span className="inline-block skew-x-12">{eventDetails.schedule[selectedDay].date}</span>
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-xs uppercase tracking-widest">
                    <Clock size={14} /> {eventDetails.schedule[selectedDay].session}
                  </div>
                </div>

                <h4 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                  {eventDetails.schedule[selectedDay].topic}
                </h4>

                {eventDetails.schedule[selectedDay].resourcePerson !== "-" && (
                  <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                      <User size={24} className="sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs uppercase tracking-widest text-orange-500 mb-1 font-bold">Resource Person</p>
                      <p className="text-base sm:text-xl font-bold text-white">{eventDetails.schedule[selectedDay].resourcePerson}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Stats Sidebar */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-center border-l-2 border-orange-500">
          <p className="text-orange-500 font-bold text-[10px] sm:text-xs uppercase mb-3 sm:mb-4 tracking-widest">Participation</p>
          <h5 className="text-4xl sm:text-6xl font-black mb-2">{eventDetails.schedule[selectedDay].attendees}</h5>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Active participants engaged in {eventDetails.schedule[selectedDay].topic}
          </p>
        </div>
      </div>
    </section>
  );
}