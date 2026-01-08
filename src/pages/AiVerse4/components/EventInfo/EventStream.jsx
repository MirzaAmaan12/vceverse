import React from 'react';
import { eventDetails } from '../../data/eventData';

export default function EventStream() {
  return (
    <section id="schedule" className="py-12 sm:py-16 md:py-20 px-3 sm:px-6 max-w-4xl mx-auto">
      <h3 className="text-[#F0FF42] font-black uppercase tracking-[0.15em] sm:tracking-[0.3em] text-[10px] sm:text-xs mb-6 sm:mb-10 text-center">
        Event Agenda & Highlights
      </h3>
      
      <div className="space-y-6 sm:space-y-8 md:space-y-12">
        {eventDetails.schedule.map((item, idx) => (
          <div key={idx} className="relative pl-5 sm:pl-8 border-l border-[#22D3EE]/30">
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] sm:left-[-5px] top-0 w-2 h-2 sm:w-[10px] sm:h-[10px] bg-[#22D3EE] rounded-full glow-cyan" />
            
            <div className="glass-card p-4 sm:p-6 hover:bg-white/5 transition-all">
              <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <span className="text-[9px] sm:text-[10px] font-mono text-[#22D3EE]">{item.date}</span>
                <span className="text-[9px] sm:text-[10px] bg-white/10 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase">{item.session}</span>
              </div>
              
              <h4 className="text-lg sm:text-xl md:text-2xl font-black uppercase italic text-white mb-2">{item.topic}</h4>
              
              {item.resourcePerson !== "-" && (
                <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                  <p className="text-xs sm:text-sm font-bold text-white/80">Speaker: {item.resourcePerson}</p>
                </div>
              )}
              
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-white/40 uppercase tracking-wider sm:tracking-widest font-bold">
                Engagement: {item.attendees} Participants
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
