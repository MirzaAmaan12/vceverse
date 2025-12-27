import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ImageReveal({ src, alt }) {
  const container = useRef();
  const imageRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    // The Mask Reveal (Clip-Path)
    tl.fromTo(container.current, 
      { clipPath: "inset(100% 0% 0% 0%)" }, 
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power4.inOut" }
    )
    // The Image Zoom (Scale down to 1 from 1.5)
    .fromTo(imageRef.current,
      { scale: 1.5 },
      { scale: 1, duration: 1.5, ease: "power4.inOut" },
      0 // Start both at the same time
    );
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full h-[60vh] overflow-hidden my-20 bg-gray-900">
      <img 
        ref={imageRef}
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover will-change-transform"
      />
    </div>
  );
}