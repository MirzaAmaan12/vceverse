import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: "Rogers", logo: "https://via.placeholder.com/150?text=ROGERS" },
  { name: "Air Canada", logo: "https://via.placeholder.com/150?text=AIR+CANADA" },
  { name: "CGI", logo: "https://via.placeholder.com/150?text=CGI" },
  { name: "Mazda", logo: "https://via.placeholder.com/150?text=MAZDA" }
];

export default function Partners() {
  return (
    <div className="py-32 px-10 md:px-24 border-t border-white/10">
      <p className="text-[10px] font-black uppercase tracking-[0.5em] mb-12 opacity-50 text-center">
        Strategic Partners // 2025
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-white/10 border border-white/10">
        {partners.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ backgroundColor: "rgba(255,255,255,1)" }}
            className="h-40 bg-black flex items-center justify-center p-8 group transition-all"
          >
            <img 
              src={p.logo} 
              alt={p.name} 
              className="max-h-12 grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}