import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventDetails } from '../../data/eventData';
import { Mail, MapPin, Instagram, Linkedin, Twitter, ArrowRight, Home } from 'lucide-react';

export default function FooterAIV4() {
  return (
    <footer className="relative mt-12 sm:mt-20 border-t border-white/5 bg-[#0A0B1A] pt-12 sm:pt-20 pb-6 sm:pb-10 px-3 sm:px-6">
      {/* 1. Final CTA Section */}
      <div className="max-w-7xl mx-auto mb-12 sm:mb-20">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="glass-card p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8 border-t-4 border-[#F0FF42] glow-cyan bg-gradient-to-r from-white/5 to-cyan-500/5"
        >
          <div className="text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-black italic uppercase mb-1 sm:mb-2">Ready to Enter the <span className="text-[#22D3EE]">Verse?</span></h2>
            <p className="text-white/50 uppercase tracking-wider sm:tracking-widest text-[10px] sm:text-xs font-bold">Experience the future of AI at Vaagdevi College.</p>
          </div>
          <button className="bg-[#F0FF42] text-black px-6 sm:px-10 py-3 sm:py-4 rounded-full font-black uppercase tracking-tighter text-sm sm:text-base hover:bg-[#22D3EE] transition-all transform hover:scale-105 whitespace-nowrap">
            Grab Your Pass
          </button>
        </motion.div>
      </div>

      {/* 2. Navigation Buttons */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mb-12 sm:mb-20">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
        >
          <Home size={12} className="sm:w-3.5 sm:h-3.5" /> Back to Launch
        </Link>

        <Link 
          to="/ai-verse-3" 
          className="flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#00F2FE] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider sm:tracking-widest shadow-[0_0_20px_rgba(124,92,255,0.3)] hover:scale-105 transition-all w-full sm:w-auto justify-center"
        >
          Explore AI-VERSE 3.0 <ArrowRight size={12} className="sm:w-3.5 sm:h-3.5" />
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 border-b border-white/5 pb-8 sm:pb-12">
        <div className="col-span-1 sm:col-span-2">
          <h3 className="text-xl sm:text-2xl font-black tracking-tighter text-white mb-3 sm:mb-4 uppercase italic">AI-VERSE 4.0</h3>
          <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 max-w-sm">
            Organized by the {eventDetails.organizer}. {eventDetails.institution} (Autonomous). 
          </p>
          <div className="flex gap-4">
            <Instagram size={18} className="sm:w-5 sm:h-5 text-white/30 hover:text-[#22D3EE] cursor-pointer transition-colors" />
            <Linkedin size={18} className="sm:w-5 sm:h-5 text-white/30 hover:text-[#22D3EE] cursor-pointer transition-colors" />
            <Twitter size={18} className="sm:w-5 sm:h-5 text-white/30 hover:text-[#22D3EE] cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-[#F0FF42] uppercase text-[9px] sm:text-[10px] font-black tracking-wider sm:tracking-widest mb-4 sm:mb-6">Contact Info</h4>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/60 font-medium">
            <li className="flex items-center gap-2 sm:gap-3"><MapPin size={14} className="sm:w-4 sm:h-4 text-[#22D3EE] flex-shrink-0" /> <span className="text-[11px] sm:text-sm">{eventDetails.location}</span></li>
            <li className="flex items-center gap-2 sm:gap-3"><Mail size={14} className="sm:w-4 sm:h-4 text-[#22D3EE] flex-shrink-0" /> <span className="text-[11px] sm:text-sm">info@vaagdevi.edu.in</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#F0FF42] uppercase text-[9px] sm:text-[10px] font-black tracking-wider sm:tracking-widest mb-4 sm:mb-6">Quick Links</h4>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-white/60 font-medium">
            <li><a href="#home" className="hover:text-[#22D3EE] transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-[#22D3EE] transition-colors">About</a></li>
            <li><a href="#schedule" className="hover:text-[#22D3EE] transition-colors">Schedule</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 sm:mt-10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[8px] sm:text-[10px] text-white/20 uppercase font-black tracking-wider sm:tracking-widest text-center">
        <p>© 2025 VAAGDEVI COLLEGE OF ENGINEERING. ALL RIGHTS RESERVED.</p>
        <p>POWERED BY CSE (AI & ML) DEPARTMENT</p>
      </div>
    </footer>
  );
}
