import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavbarAIV4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] px-3 sm:px-6 py-2 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-4 sm:px-8 py-3 sm:py-4 glow-cyan">
        {/* Branding */}
        <div className="flex flex-col">
          <span className="text-base sm:text-xl font-black tracking-tighter text-white">AI-VERSE 4.0</span>
          <span className="text-[7px] sm:text-[8px] dept-title font-bold">Vaagdevi CSE (AI & ML)</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest font-semibold hover:text-[#22D3EE] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-3 right-3 mt-2 glass-card p-4 glow-cyan">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block py-3 text-sm uppercase tracking-widest font-semibold hover:text-[#22D3EE] transition-colors border-b border-white/10 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
