import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_DATA } from "../content/eventData";

export default function Leadership() {
  return (
    <section id="speakers" className="py-32 px-10 md:px-24 border-t border-black bg-white">
      {/* Title with C2 Motion Styling */}
      <h2 className="text-[10vw] c2-motion-title mb-20 leading-none">The Minds</h2>
      
      {/* The Tiled Grid - gap-0.5 with bg-black creates the thin line effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-black border border-black">
        
        {/* Safe mapping using Optional Chaining */}
        {EVENT_DATA?.leadership?.map((leader, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "#FF3E55" }} // C2 Red on Hover
            className="bg-white p-12 h-[450px] flex flex-col justify-between group transition-colors duration-500"
          >
            {/* Index Counter */}
            <div className="text-xs font-black uppercase tracking-[0.3em] group-hover:text-white/60">
              Leadership // 0{i + 1}
            </div>

            <div>
              {/* Massive Kinetic Surname - Splits name and takes the last word */}
              <h3 className="text-6xl c2-motion-title group-hover:text-white transition-colors">
                {leader.name ? leader.name.split(' ').pop() : "LEADER"}
              </h3>
              
              {/* Full Name */}
              <p className="text-xl font-bold mt-4 group-hover:text-white">
                {leader.name}
              </p>
              
              {/* Role with Opacity effect */}
              <p className="text-sm uppercase tracking-widest mt-2 opacity-50 group-hover:opacity-100 group-hover:text-white/80">
                {leader.role}
              </p>
            </div>
          </motion.div>
        ))}

        {/* C2 Placeholder Style for Guest Speakers */}
        <div className="bg-[#f0f0f0] p-12 h-[450px] flex items-center justify-center border-l border-black/5">
          <div className="text-center">
            <p className="italic text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">
              AI-VERSE 3.0
            </p>
            <h4 className="text-2xl font-black uppercase tracking-tighter opacity-20">
              Global Speakers <br/> TBA
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}