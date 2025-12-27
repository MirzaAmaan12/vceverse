import React from 'react';
// Core Engine & Styles
import SmoothScroll from './shared/SmoothScroll';
import CustomCursor from './shared/CustomCursor';
import './styles/C2Styles.css';

// Components
import Sidebar3 from './components/Navigation/Sidebar3';
import MotionHero from './components/Hero/MotionHero';
import ParallaxBg from './components/Hero/ParallaxBg';
import ActionGrid from './components/Experience/ActionGrid';
import ImageReveal from './components/Experience/ImageReveal';
import Footer3 from './components/Navigation/Footer3';

export default function AiVerse3() {
  return (
    <SmoothScroll>
      {/* 1. Global Interactive Layer */}
      <CustomCursor />
      
      <div className="relative bg-black min-h-screen selection:bg-[#B7FF00] selection:text-black">
        {/* 2. Fixed Navigation */}
        <Sidebar3 />
        
        <main className="relative">
          {/* 3. Background Layer (Deep Parallax) */}
          <ParallaxBg />
          
          {/* 4. Hero Section (Scale & Fade Animation) */}
          <section id="hero">
            <MotionHero />
          </section>

          {/* 5. Storytelling Content (The "C2" Narrative Flow) */}
          <div className="px-5 md:px-10 max-w-7xl mx-auto space-y-20 relative z-10">
            
            {/* Cinematic Image Reveal 1 */}
            <ImageReveal 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000" 
              alt="Neural Networks Visualization" 
            />

            {/* Masked Text Reveal Section */}
            <ActionGrid />

            {/* Cinematic Image Reveal 2 */}
            <ImageReveal 
              src="https://images.unsplash.com/photo-1620712943543-bcc4628c6750?auto=format&fit=crop&q=80&w=2000" 
              alt="Cybernetic Interfaces" 
            />
            
          </div>

          {/* 6. High-Contrast Footer (Glitch Effect) */}
          <Footer3 />
        </main>
      </div>
    </SmoothScroll>
  );
}