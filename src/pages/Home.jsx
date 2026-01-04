import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

// Animation Variants
const navbarVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};
const heroVariants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 } },
};
const welcomeVariants = {
  hidden: { opacity: 0, y: -30, letterSpacing: "0.1em" },
  visible: { opacity: 1, y: 0, letterSpacing: "0.05em", transition: { duration: 0.7, ease: "easeOut" } },
};
const titleWordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.5 } },
};
const exploreBtnVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.8 } },
  hover: { scale: 1.05, boxShadow: "0 0 30px 8px #7C5CFF33", background: "linear-gradient(90deg,#7C5CFF,#00F2FE)", transition: { duration: 0.2 } },
  tap: { scale: 0.97 },
};

// Gradient shimmer for AI&ML
const shimmerStyle = {
  background: "linear-gradient(90deg,#00F2FE 0%,#8B5CF6 50%,#00F2FE 100%)",
  backgroundSize: "200% 100%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "shimmer 2.5s infinite linear",
};

const Logo = () => (
  <div className="flex items-center gap-5">
    <div className="w-20 h-20 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-2xl border-4 border-cyan-400">
      <img 
        src="/logo.png" 
        alt="Vaagdevi College Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">CSE (AI&ML)</span>
      <span className="text-lg text-cyan-200 font-medium mt-1 drop-shadow">Vaagdevi College of Engineering</span>
    </div>
  </div>
);

const AnimatedGradientBg = () => (
  <motion.div
    className="absolute inset-0 z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Floating blobs */}
    <motion.div
      className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400 opacity-30 blur-3xl rounded-full"
      animate={{ scale: [1, 1.2, 1], x: [0, 40, 0], y: [0, 20, 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-cyan-400 via-purple-400 to-blue-600 opacity-30 blur-2xl rounded-full"
      animate={{ scale: [1, 1.1, 1], x: [0, -30, 0], y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
    />
    {/* Subtle particles */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/10 blur-xl"
        style={{ width: 24, height: 24, top: `${10 + i * 8}%`, left: `${15 + i * 10}%` }}
        animate={{ y: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 30 + i * 2, ease: "easeInOut", delay: i * 1.5 }}
      />
    ))}
  </motion.div>
);

const Navbar = ({ onExploreClick }) => (
  <motion.nav
    className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/40 border-b border-white/10"
    variants={navbarVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <Logo />
      <motion.button
        variants={exploreBtnVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onClick={onExploreClick}
        className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold text-sm shadow-lg transition-all flex items-center gap-2 relative overflow-hidden"
      >
        <span>Explore</span>
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 8 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="ml-2"
        >
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="9" x2="13" y2="9"></line><polyline points="9 5 13 9 9 13"></polyline></svg>
        </motion.span>
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "linear-gradient(90deg,#7C5CFF,#00F2FE)", opacity: 0.2 }}
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
      </motion.button>
    </div>
  </motion.nav>
);

const HeroSection = () => (
  <motion.section
    className="relative min-h-screen pt-24 flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 overflow-hidden"
    variants={heroVariants}
    initial="hidden"
    animate="visible"
  >
    <AnimatedGradientBg />
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.h2
        className="text-2xl md:text-4xl text-cyan-300 font-extrabold mb-4 tracking-widest drop-shadow-lg"
        variants={welcomeVariants}
        style={{ letterSpacing: '0.18em' }}
      >WELCOME TO</motion.h2>
      <div className="relative flex flex-col items-center">
        <motion.h1
          className="text-[3.5rem] md:text-[6rem] lg:text-[8rem] font-black leading-none mb-4 bg-gradient-to-r from-cyan-300 via-green-300 to-blue-400 bg-clip-text text-transparent animate-gradient-glow drop-shadow-[0_0_40px_rgba(0,242,254,0.5)]"
          style={{ WebkitTextStroke: '2px rgba(0,242,254,0.15)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >CSE (AI&ML)</motion.h1>
        {/* Animated underline */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 bottom-0 h-2 w-[80%] rounded-full bg-gradient-to-r from-cyan-400 via-green-300 to-blue-400 blur-md opacity-80"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          style={{ transformOrigin: 'center' }}
        />
      </div>
      <motion.p
        className="text-2xl md:text-3xl text-gray-200 mt-8 mb-2 font-medium"
        variants={subtitleVariants}
      >Innovating the Future with <span className="relative text-cyan-300 font-bold underline underline-offset-4 decoration-cyan-400 animate-pulse">Artificial Intelligence</span> & <span className="text-cyan-300 font-bold">Machine Learning</span></motion.p>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="w-full absolute bottom-0 left-0 bg-slate-950 border-t border-white/10 py-8 px-6">
    <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm">
      <p>© 2026 CSE (AI&ML) Department - Vaagdevi College of Engineering</p>
      <p>Innovating the future with AI & Machine Learning</p>
    </div>
  </footer>
);

export default function Home() {
  const navigate = useNavigate();

  // Move useEffect here
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `@keyframes shimmer { 0%{background-position:0% 50%} 100%{background-position:100% 50%} }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const handleExplore = () => {
    navigate("/explore");
  };

  return (
    <>
      <Helmet>
        <title>CSE (AI&ML) - Artificial Intelligence & Machine Learning</title>
        <meta
          name="description"
          content="Welcome to CSE (AI&ML) Department - Innovating the future with Artificial Intelligence and Machine Learning."
        />
        <meta name="keywords" content="CSE, AIML, AI, ML, Artificial Intelligence, Machine Learning, AI Verse, Events" />
      </Helmet>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar onExploreClick={handleExplore} />
        <main>
          <HeroSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
