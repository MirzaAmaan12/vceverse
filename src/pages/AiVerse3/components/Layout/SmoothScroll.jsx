import React from 'react';
import '../../styles/aiv3.css';
import SmoothScroll from '../../components/Layout/SmoothScroll';
import Navbar from '../../components/Layout/Navbar';
import Hero from '../../components/Hero/Hero';
import EventStream from '../../components/Experience/EventStream';
import About from '../../components/EventInfo/About';
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
          <EventStream />
          <Gallery />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}