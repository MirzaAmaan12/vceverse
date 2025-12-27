import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ActionGrid() {
  const container = useRef();

  useGSAP(() => {
    // Select all the masked text lines
    const textLines = gsap.utils.toArray(".reveal-text");

    textLines.forEach((line) => {
      gsap.from(line, {
        yPercent: 100, // Starts fully below its mask
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%", // Starts when the word enters the bottom of the screen
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: container });

  const actions = [
    { title: "Learn.", desc: "Discover the AI-Verse ecosystem." },
    { title: "Experience.", desc: "Hands-on with transformative tech." },
    { title: "Connect.", desc: "Build meaningful global networks." }
  ];

  return (
    <section ref={container} className="bg-white py-32 px-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {actions.map((item, index) => (
          <div key={index} className="action-item group">
            <div className="overflow-hidden mb-4">
              {/* This is the MASKED text */}
              <h2 className="reveal-text text-[12vw] font-black uppercase leading-[0.9] tracking-tighter text-black">
                {item.title}
              </h2>
            </div>
            <div className="flex justify-between items-center border-t border-black/10 pt-6">
              <p className="text-xl font-medium text-gray-500 uppercase tracking-widest">
                {item.desc}
              </p>
              <span className="text-3xl">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}