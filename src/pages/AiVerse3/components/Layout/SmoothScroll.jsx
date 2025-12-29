import React from 'react';
import '../../styles/aiv3.css';
import SmoothScroll from '../../components/Layout/SmoothScroll';
import Navbar from '../../components/Layout/Navbar';
import Hero from '../../components/Hero/Hero';
import About from '../../components/EventInfo/About';
import Schedule from '../../components/Schedule/Schedule';
import Gallery from '../../components/Gallery/Gallery';
import Footer from '../../components/Layout/Footer.jsx';

export default function AiVerse3() {
  return (
    <SmoothScroll>
      <div id="aiv3" className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Schedule />
          <Gallery />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}