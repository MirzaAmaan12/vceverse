import React from 'react';

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Schedule", href: "#schedule" },
    { name: "Gallery", href: "#gallery" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass-card px-8 py-4 glow-cyan">
        {/* Branding */}
        <div className="flex flex-col">
          <span className="text-xl font-black tracking-tighter text-white">AI-VERSE 3.0</span>
          <span className="text-[8px] dept-title font-bold">Vaagdevi CSE (AI & ML)</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
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

        {/* Action Button */}
    
      </div>
    </nav>
  );
}