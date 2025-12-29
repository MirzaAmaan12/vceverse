import React from 'react';
import './styles/aiv3.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer'; 
import Hero from './components/Hero/Hero';
import About from './components/EventInfo/About';
// Replace Schedule with EventStream for the archive look
import EventStream from './components/Experience/EventStream'; 
import Gallery from './components/Gallery/Gallery';

export default function AiVerse3() {
  return (
    <div id="aiv3" className="relative min-h-screen bg-[#0A0B1A]">
      {/* Navbar stays fixed at the top */}
      <Navbar />
      
      <main className="w-full">
        {/* Hero Section with fixed robot image scaling */}
        <Hero />
        
        {/* Institutional & Purpose Details */}
        <About />
        
        {/* Sequential event highlights - No more navigating between days */}
        <EventStream />
        
        {/* Full Image Gallery */}
        <Gallery />
      </main>
      
      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}