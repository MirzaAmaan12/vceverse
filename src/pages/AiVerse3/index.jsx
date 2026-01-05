import React from 'react';
import './styles/aiv3.css';
import Navbar from '../../pages/AiVerse4/Navbar';
import Home from './components/Hero/Hero';
import Event from '../../pages/AiVerse4/Event';
import Agenda from '../../pages/AiVerse4/Agenda';
import Sessions from '../../pages/AiVerse4/Sessions';
import Feedback from '../../pages/AiVerse4/Feedback';
import Personnel from './Personnel';
import Footer from './components/Layout/Footer'; 
import Gallery from './components/Gallery/Gallery';
import { FloatingGradientBg } from '../../components/FloatingGradientBg';

export default function AiVerse3() {
  return (
    <div className="relative bg-[#0B0B0B] text-white selection:bg-[#7C5CFF] selection:text-black">
      <FloatingGradientBg />
      <div className="relative z-10">
        <Navbar />
        <main>
          <section id="home"><Home /></section>
          <section id="event"><Event /></section>
          <section id="speakers"><Personnel /></section>
          <section id="agenda"><Agenda /></section>
          <section id="sessions"><Sessions /></section>
          <section id="feedback"><Feedback /></section>
          <section id="gallery"><Gallery /></section>
        </main>
        <Footer />
      </div>
    </div>
  );
}