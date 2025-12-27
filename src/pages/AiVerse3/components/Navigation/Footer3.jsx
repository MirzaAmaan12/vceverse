import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import '../../styles/C2Styles.css';

export default function Footer3() {
  const footerRef = useRef();

  useGSAP(() => {
    // Flickering Glitch Animation
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom", 
      }
    });

    tl.to(".glitch-text", { skewX: 20, duration: 0.1, ease: "power4.inOut" })
      .to(".glitch-text", { skewX: 0, duration: 0.05 })
      .to(".glitch-text", { opacity: 0.5, x: -10, duration: 0.04 })
      .to(".glitch-text", { opacity: 1, x: 0, duration: 0.04 });

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative h-[60vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Moving Scan-line */}
      <div className="scanline"></div>
      
      <div className="relative">
        <h2 className="glitch-text text-[15vw] font-black text-white uppercase tracking-tighter leading-none">
          AI-VERSE
        </h2>
        {/* Pseudo-layers for the color-split effect */}
        <span className="absolute top-0 left-0 text-red-500 opacity-70 mix-blend-screen glitch-copy">AI-VERSE</span>
        <span className="absolute top-0 left-0 text-blue-500 opacity-70 mix-blend-screen glitch-copy">AI-VERSE</span>
      </div>
    </footer>
  );
}