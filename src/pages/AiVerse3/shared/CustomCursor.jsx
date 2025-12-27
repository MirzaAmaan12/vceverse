import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function CustomCursor() {
  const cursorRef = useRef();
  const followerRef = useRef();

  useGSAP(() => {
    // 1. High-performance mouse tracking using quickTo
    const xTo = gsap.quickTo(cursorRef.current, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursorRef.current, "y", { duration: 0.1, ease: "power3" });
    
    const xFollowerTo = gsap.quickTo(followerRef.current, "x", { duration: 0.5, ease: "power3" });
    const yFollowerTo = gsap.quickTo(followerRef.current, "y", { duration: 0.5, ease: "power3" });

    const handleMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      xFollowerTo(e.clientX);
      yFollowerTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 2. Interaction Logic: Scale up when hovering over actionable items
    const interactiveElements = document.querySelectorAll('button, .action-item, h2');
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(followerRef.current, { scale: 3, backgroundColor: "#B7FF00", opacity: 0.2 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(followerRef.current, { scale: 1, backgroundColor: "transparent", opacity: 1 });
      });
    });

    return () => window.removeEventListener("mousemove", handleMouseMove);
  });

  return (
    <>
      {/* The main sharp dot */}
      <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
      
      {/* The trailing smooth circle */}
      <div ref={followerRef} className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2" />
    </>
  );
}