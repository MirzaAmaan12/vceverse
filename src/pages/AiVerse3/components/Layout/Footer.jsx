import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { eventDetails } from '../../data/eventData';
import { Mail, MapPin, Instagram, Linkedin, Twitter, ArrowRight, Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-12 sm:mt-20 border-t border-white/5 bg-[#050a18] pt-12 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6">
      {/* Navigation Buttons */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-20">
        <Link 
          to="/" 
          className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border border-white/20 text-white text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
        >
          <Home size={14} /> Back to Launch
        </Link>

        <Link 
          to="/ai-verse-4" 
          className="flex items-center gap-2 px-8 sm:px-10 py-3 sm:py-4 rounded-sm bg-orange-600 text-white text-xs sm:text-sm font-black uppercase tracking-widest shadow-lg shadow-orange-600/20 transform -skew-x-12 hover:bg-orange-500 transition-all"
        >
          <span className="inline-block skew-x-12 flex items-center gap-2">Explore AI-VERSE 4.0 <ArrowRight size={14} /></span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-12 border-b border-white/5 pb-8 sm:pb-12">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-orange-500 mb-3 sm:mb-4 italic">AI-VERSE 3.0</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 max-w-sm">
            Organized by the {eventDetails.organizer}. {eventDetails.institution} (Autonomous). 
          </p>
          <div className="flex gap-4">
            <Instagram size={20} className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
            <Twitter size={20} className="text-gray-500 hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="text-orange-500 uppercase text-xs sm:text-sm font-bold tracking-widest mb-4 sm:mb-6">Contact Info</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400 font-medium">
            <li className="flex items-center gap-3"><MapPin size={16} className="text-orange-500" /> {eventDetails.location}</li>
            <li className="flex items-center gap-3"><Mail size={16} className="text-orange-500" /> info@vaagdevi.edu.in</li>
          </ul>
        </div>

        <div>
          <h4 className="text-orange-500 uppercase text-xs sm:text-sm font-bold tracking-widest mb-4 sm:mb-6">Quick Links</h4>
          <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-400 font-medium">
            <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#event" className="hover:text-orange-500 transition-colors">About</a></li>
            <li><a href="#agenda" className="hover:text-orange-500 transition-colors">Schedule</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-white/20 uppercase font-black tracking-widest text-center">
        <p>© 2025 VAAGDEVI COLLEGE OF ENGINEERING. ALL RIGHTS RESERVED.</p>
        <p>POWERED BY CSE (AI & ML) DEPARTMENT</p>
      </div>
    </footer>
  );
}