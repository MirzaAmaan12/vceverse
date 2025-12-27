import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBg() {
  const container = useRef();

  useGSAP(() => {
    // Select all bars and give them unique speeds
    const bars = gsap.utils.toArray(".bg-bar");
    
    bars.forEach((bar, i) => {
      // Each bar moves at a different speed based on its index
      const speed = (i + 1) * 150; 
      
      gsap.to(bar, {
        y: -speed,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });
  }, { scope: container });

  return (
    <div ref={container} className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      <div className="relative w-full h-full flex justify-around items-start">
        {/* We generate 6 vertical bars with different colors */}
        <div className="bg-bar w-px h-[200vh] bg-gradient-to-b from-[#FF0080] to-transparent" />
        <div className="bg-bar w-[2px] h-[250vh] bg-gradient-to-b from-[#7928CA] to-transparent" />
        <div className="bg-bar w-px h-[180vh] bg-gradient-to-b from-[#4FACFE] to-transparent" />
        <div className="bg-bar w-[1px] h-[220vh] bg-gradient-to-b from-[#B7FF00] to-transparent" />
        <div className="bg-bar w-px h-[240vh] bg-gradient-to-b from-white to-transparent" />
        <div className="bg-bar w-[2px] h-[190vh] bg-gradient-to-b from-[#FF0080] to-transparent" />
      </div>
    </div>
  );
}