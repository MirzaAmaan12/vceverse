import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventDetails } from '../../data/eventData';
import { Mail, MapPin, Instagram, Linkedin, Twitter, ArrowRight, Home } from 'lucide-react';

export default function FooterAIV4() {
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#0A0B1A] pt-20 pb-10 px-6">
      {/* 1. Final CTA Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="glass-card p-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t-4 border-[#F0FF42] glow-cyan bg-gradient-to-r from-white/5 to-cyan-500/5"
        >
          <div>
            <h2 className="text-4xl font-black italic uppercase mb-2">Ready to Enter the <span className="text-[#22D3EE]">Verse?</span></h2>
            <p className="text-white/50 uppercase tracking-widest text-xs font-bold">Experience the future of AI at Vaagdevi College.</p>
          </div>
          <button className="bg-[#F0FF42] text-black px-10 py-4 rounded-full font-black uppercase tracking-tighter hover:bg-[#22D3EE] transition-all transform hover:scale-105">
            Grab Your Pass
          </button>
        </motion.div>
      </div>

      {/* 2. Navigation Buttons */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
        >
          <Home size={14} /> Back to Launch
        </Link>

        <Link 
          to="/ai-verse-3" 
          className="flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#00F2FE] text-white text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(124,92,255,0.3)] hover:scale-105 transition-all"
        >
          Explore AI-VERSE 3.0 <ArrowRight size={14} />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/5 pb-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-black tracking-tighter text-white mb-4 uppercase italic">AI-VERSE 4.0</h3>
          <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
            Organized by the {eventDetails.organizer}. {eventDetails.institution} (Autonomous). 
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="text-white/30 hover:text-[#22D3EE] cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-white/30 hover:text-[#22D3EE] cursor-pointer transition-colors" />
            <Twitter size={20} className="text-white/30 hover:text-[#22D3EE] cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-[#F0FF42] uppercase text-[10px] font-black tracking-widest mb-6">Contact Info</h4>
          <ul className="space-y-4 text-sm text-white/60 font-medium">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-[#22D3EE]" /> {eventDetails.location}</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-[#22D3EE]" /> info@vaagdevi.edu.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#F0FF42] uppercase text-[10px] font-black tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/60 font-medium">
            <li><a href="#home" className="hover:text-[#22D3EE] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#22D3EE] transition-colors">About</a></li>
            <li><a href="#schedule" className="hover:text-[#22D3EE] transition-colors">Schedule</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase font-black tracking-widest">
        <p>© 2025 VAAGDEVI COLLEGE OF ENGINEERING. ALL RIGHTS RESERVED.</p>
        <p>POWERED BY CSE (AI & ML) DEPARTMENT</p>
      </div>
    </footer>
  );
}
