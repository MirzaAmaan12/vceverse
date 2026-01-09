import React from 'react';
import './styles/aiv3.css';
import Navbar from './components/Layout/Navbar';
import Home from './components/Hero/Hero';
import About from './components/EventInfo/About';
import Schedule from './components/Schedule/Schedule';
import Personnel from './Personnel';
import Footer from './components/Layout/Footer'; 
import Gallery from './components/Gallery/Gallery';
import { FloatingGradientBg } from '../../components/FloatingGradientBg';
import BackButton from '../../components/BackButton';

export default function AiVerse3() {
  return (
    <div id="aiv3" className="relative bg-[#050a18] text-white selection:bg-orange-500 selection:text-white min-h-screen">
      <FloatingGradientBg />
      <div className="relative z-10">
        <BackButton />
        <Navbar />
        <main>
          <section id="home"><Home /></section>
          <section id="event"><About /></section>
          <section id="speakers"><Personnel /></section>
          <section id="agenda"><Schedule /></section>
          <section id="gallery"><Gallery /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}