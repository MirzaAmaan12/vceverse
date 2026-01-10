// src/pages/AiVerse/index.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AIVERSE_DATA } from './content';
import AboutSection from './AboutEvent';
import Personnel from './Personnel';
import ImageSlideshow from '../../components/ImageSlideshow';
import { FloatingGradientBg } from '../../components/FloatingGradientBg';
import BackButton from '../../components/BackButton';
import Footer from './components/Footer';
import "./AiVerse.css";

// Gallery Images - using placeholder paths, you'll add the actual images
import img1 from './public/img1.png';
import img2 from './public/img2.png';
import img3 from './public/img3.png';
import img4 from './public/img4.png';

const galleryImages = [img1, img2, img3, img4];

export default function AiVerse() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aiverse-wrapper relative">
      <FloatingGradientBg />
      <BackButton />
      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="hero text-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-3 sm:px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-orange-500 font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-3 sm:mb-4 text-xs sm:text-sm">
              {AIVERSE_DATA.college}
            </p>
            <div className="inline-block px-3 sm:px-4 py-1 border border-white/20 rounded-full mb-6 sm:mb-8">
              <h2 className="text-[10px] sm:text-xs md:text-sm text-gray-300 tracking-wide font-medium">
                {AIVERSE_DATA.department}
              </h2>
            </div>
            
            <p className="text-white/60 text-xs sm:text-sm uppercase tracking-widest mb-2">
              {AIVERSE_DATA.subtitle}
            </p>
            
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic mt-2 glow-text tracking-tighter uppercase">
              {AIVERSE_DATA.title}
            </h1>
            
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500/80 mt-4 italic">
              {AIVERSE_DATA.tagline}
            </p>
            
            <div className="mt-6 sm:mt-10 flex flex-col items-center gap-3 sm:gap-4">
              <div className="bg-orange-600 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-sm font-black transform -skew-x-12 shadow-lg shadow-orange-600/20 text-sm sm:text-base">
                <span className="inline-block skew-x-12">{AIVERSE_DATA.date}</span>
              </div>
              
              <p className="mt-4 text-white/40 text-xs sm:text-sm">
                Follow us on Instagram <span className="text-orange-500">{AIVERSE_DATA.social}</span>
              </p>
            </div>
          </div>
        </section>

        {/* --- ABOUT SECTION --- */}
        <AboutSection />

        {/* --- TRACKS SECTION --- */}
        <section className="section-container px-3 sm:px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
              <div>
                <h3 className="text-orange-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-1 sm:mb-2">Curriculum</h3>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Workshop Tracks</h2>
              </div>
              <p className="text-gray-400 max-w-md text-xs sm:text-sm italic">
                Focused on building strong foundations in Machine Learning and Python programming.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {AIVERSE_DATA.tracks.map((track, i) => (
                <div key={i} className="group p-4 sm:p-6 bg-white/5 rounded-xl border border-white/5 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-orange-500 font-black text-xl sm:text-2xl mb-3 sm:mb-4 opacity-30 group-hover:opacity-100 transition-opacity">
                    0{i + 1}
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold group-hover:text-orange-500 transition-colors">
                    {track}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOUNDATION TEAM --- */}
        <section className="section-container pb-8">
          <Personnel />
        </section>

        {/* --- IMAGE SLIDESHOW GALLERY SECTION --- */}
        <ImageSlideshow 
          images={galleryImages} 
          eventName="AI-VERSE"
          title="Workshop Memories"
        />

        {/* --- NAVIGATION FOOTER --- */}
        <section className="section-container pb-24">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center border-t border-white/10 pt-16">
            <button 
              onClick={() => navigate('/')} 
              className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-all text-sm font-bold tracking-widest uppercase text-white"
            >
              ← Home
            </button>
            
            <button 
              onClick={() => navigate('/ai-verse-2')} 
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 hover:shadow-[0_0_20px_rgba(245,130,32,0.4)] transition-all text-sm font-bold tracking-widest uppercase text-white"
            >
              Explore AI-VERSE 2.0 →
            </button>
          </div>
        </section>
        
        <Footer />
      </div>
    </div>
  );
}
