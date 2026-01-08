import React from 'react';
import './styles/aiv4.css';
import NavbarAIV4 from './components/Layout/NavbarAIV4';
import FooterAIV4 from './components/Layout/FooterAIV4'; 
import About from './components/EventInfo/About';
import EventStream from './components/EventInfo/EventStream'; 
import SessionsInclude from './SessionsInclude';
import Personnel from './Personnel';
import Home from './Home';
import { FloatingGradientBg } from '../../components/FloatingGradientBg';
import BackButton from '../../components/BackButton';

export default function AiVerse4() {
  return (
    <div id="aiv4" className="relative min-h-screen bg-[#0A0B1A]">
      <FloatingGradientBg />
      
      {/* Back Button */}
      <BackButton />
      
      {/* Navbar stays fixed at the top */}
      <NavbarAIV4 />
      
      <main className="w-full relative z-10">
        {/* Hero Section */}
        <Home />
        
        {/* Institutional & Purpose Details */}
        <About />
        
        {/* Sequential event highlights */}
        <EventStream />

        {/* Workshop Sessions Include */}
        <SessionsInclude />

        {/* Foundation Team */}
        <Personnel />
      </main>
      
      {/* Institutional Footer */}
      <FooterAIV4 />
    </div>
  );
}