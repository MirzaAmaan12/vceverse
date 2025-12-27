import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Sidebar3() {
  const links = ["Programming", "Speakers", "Partners", "About"];

  // 1. Monitor the global scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // 2. Map scroll progress to a subtle rotation (-5 to 15 degrees)
  // This gives that "floating/kinetic" feel from the reference video
  const scrollRotation = useTransform(scrollYProgress, [0, 1], [-5, 15]);

  return (
    <aside className="fixed right-0 top-0 h-screen w-[80px] border-l border-black bg-white z-[100] flex flex-col items-center py-12 justify-between selection:bg-none">
      
      {/* C2 Signature Dots Logo */}
      <motion.div 
        whileHover={{ rotate: 90 }}
        className="w-8 h-8 grid grid-cols-2 gap-1 cursor-pointer"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-black rounded-full" />
        ))}
      </motion.div>

      {/* 3. Kinetic Vertical Links Wrapper */}
      <motion.div 
        style={{ rotate: scrollRotation }} 
        className="flex flex-col gap-20 transition-all ease-out"
      >
        {links.map((link, i) => (
          <motion.a
            key={i}
            href={`#${link.toLowerCase()}`}
            whileHover={{ 
              scale: 1.2, 
              color: "#FF3E55", // C2 Red
              x: -5 // Slight horizontal pop on hover
            }}
            className="nav-vertical uppercase font-black text-[10px] tracking-[0.4em] cursor-pointer whitespace-nowrap origin-center"
          >
            {link}
          </motion.a>
        ))}
      </motion.div>

      {/* 4. Bottom Action Button */}
      <div className="w-full border-t border-black overflow-hidden group">
        <motion.button 
          whileHover={{ height: "180px" }}
          className="w-full bg-[#B7FF00] py-16 nav-vertical font-black uppercase text-[11px] tracking-tighter transition-all duration-300 group-hover:bg-black group-hover:text-white"
        >
          Get Passes
        </motion.button>
      </div>
    </aside>
  );
}