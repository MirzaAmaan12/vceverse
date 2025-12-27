import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Timeline from './components/Timeline';
import Reasons from './components/Reasons';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function AIVerseCyberRed() {
  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Red Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-red-900/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-red-900/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      <Hero />
      <WhoWeAre />
      <Timeline />
      <Reasons />
      <Sponsors />
      <Footer />
    </div>
  );
}