import React from 'react';

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#event" },
    { name: "Schedule", href: "#agenda" },
    { name: "Gallery", href: "#gallery" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-3 sm:py-4">
        {/* Branding */}
        <div className="flex flex-col">
          <span className="text-lg sm:text-2xl md:text-3xl font-black tracking-tighter italic text-orange-500">AI-VERSE 3.0</span>
          <span className="text-[10px] sm:text-xs text-gray-400 font-medium">Vaagdevi CSE (AI & ML)</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm lg:text-base uppercase tracking-widest font-semibold text-gray-300 hover:text-orange-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}