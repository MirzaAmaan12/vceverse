import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Event", id: "event" },
  { label: "Speakers", id: "speakers" },
  { label: "Agenda", id: "agenda" },
  { label: "Sessions", id: "sessions" },
  { label: "Feedback", id: "feedback" },
];

const Logo = () => (
  <div className="flex items-center gap-3 group cursor-pointer">
    <div className="relative">
      <div className="absolute inset-0 bg-[#8B5CF6] blur-md opacity-20 group-hover:opacity-50 transition-opacity" />
      <svg 
        width="32" height="32" viewBox="0 0 100 100" fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <path d="M50 5L95 27.5V72.5L50 95L5 72.5V27.5L50 5Z" stroke="#00F2FE" strokeWidth="4" />
        <circle cx="50" cy="50" r="12" fill="#8B5CF6" className="animate-pulse" />
        <path d="M30 35L50 50L70 35" stroke="#00F2FE" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 65L50 50L70 65" stroke="#00F2FE" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>

    <div className="flex flex-col leading-none">
      <span className="text-xl font-black tracking-tighter text-white">
        AI<span className="text-[#8B5CF6]">VERSE</span>
      </span>
      <span className="text-[10px] font-mono tracking-[0.3em] text-[#00F2FE] opacity-80 uppercase">
        Version 4.0
      </span>
    </div>
  </div>
);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#020205]/80 border-b border-white/5 shadow-[0_4px_30px_rgba(0,242,254,0.05)]">
      <div className="flex justify-between items-center px-6 md:px-16 py-4">
        <div onClick={() => scrollTo("home")}>
          <Logo />
        </div>

        <div className="flex gap-4 md:gap-8 items-center">
          <div className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-sm transition-all duration-300 font-medium uppercase tracking-widest ${
                  activeSection === item.id ? "text-[#00F2FE] drop-shadow-[0_0_8px_#00F2FE]" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("register")}
            className="px-4 md:px-6 py-2 rounded-full bg-gradient-to-r from-[#00F2FE] to-[#8B5CF6] text-[#020205] font-bold text-xs md:text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300"
          >
            Join Us
          </button>

          <button className="lg:hidden text-[#00F2FE]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d={isMobileMenuOpen ? "M18 6L6 18M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} /></svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="lg:hidden bg-[#020205] border-t border-white/5 overflow-hidden">
            <div className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className={`text-left text-sm uppercase tracking-widest py-2 ${activeSection === item.id ? "text-[#00F2FE]" : "text-slate-400"}`}>{item.label}</button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}