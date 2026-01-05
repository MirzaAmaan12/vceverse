import React from 'react';
import { eventDetails } from '../../data/eventData';

export default function EventStream() {
  return (
    <section id="schedule" className="py-20 px-6 max-w-4xl mx-auto">
      <h3 className="text-[#F0FF42] font-black uppercase tracking-[0.3em] text-xs mb-10 text-center">
        Event Agenda & Highlights
      </h3>
      
      <div className="space-y-12">
        {eventDetails.schedule.map((item, idx) => (
          <div key={idx} className="relative pl-8 border-l border-[#22D3EE]/30">
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-[#22D3EE] rounded-full glow-cyan" />
            
            <div className="glass-card p-6 hover:bg-white/5 transition-all">
              <div className="flex flex-wrap justify-between items-center gap-4 mb-4">
                <span className="text-[10px] font-mono text-[#22D3EE]">{item.date}</span>
                <span className="text-[10px] bg-white/10 px-3 py-1 rounded-full uppercase">{item.session}</span>
              </div>
              
              <h4 className="text-2xl font-black uppercase italic text-white mb-2">{item.topic}</h4>
              
              {item.resourcePerson !== "-" && (
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500" />
                  <p className="text-sm font-bold text-white/80">Speaker: {item.resourcePerson}</p>
                </div>
              )}
              
              <p className="mt-4 text-xs text-white/40 uppercase tracking-widest font-bold">
                Engagement: {item.attendees} Participants
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
