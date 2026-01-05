import { useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import AiVerseIntro from "../components/AiVerseIntro";

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

// Floating Gradient Background Component - Small Liquid Mesh Globes
const FloatingGradientBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <style>{`
      @keyframes randomFloat1 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        12% { transform: translate(45px, -65px) scale(1.2) rotate(50deg); }
        25% { transform: translate(60, -80px) scale(1.3) rotate(90deg); }
        37% { transform: translate(30px, -45px) scale(1.1) rotate(140deg); }
        50% { transform: translate(-50px, 90px) scale(0.75) rotate(180deg); }
        62% { transform: translate(-35px, 55px) scale(0.95) rotate(220deg); }
        75% { transform: translate(70px, -30px) scale(1.25) rotate(270deg); }
        87% { transform: translate(25px, 35px) scale(1.15) rotate(330deg); }
        100% { transform: translate(0, 0) scale(1) rotate(360deg); }
      }
      @keyframes randomFloat2 {
        0% { transform: translate(0, 0) scale(1) rotate(360deg); }
        15% { transform: translate(-55px, 50px) scale(1.15) rotate(320deg); }
        30% { transform: translate(-70px, 70px) scale(1.35) rotate(270deg); }
        45% { transform: translate(-45px, 35px) scale(1.05) rotate(200deg); }
        60% { transform: translate(60px, -80px) scale(0.8) rotate(180deg); }
        75% { transform: translate(40px, -50px) scale(1.2) rotate(90deg); }
        90% { transform: translate(15px, 25px) scale(1.1) rotate(30deg); }
        100% { transform: translate(0, 0) scale(1) rotate(360deg); }
      }
      @keyframes randomFloat3 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        18% { transform: translate(65px, -75px) scale(0.8) rotate(100deg); }
        35% { transform: translate(40px, -60px) scale(1.4) rotate(120deg); }
        52% { transform: translate(-70px, 85px) scale(0.8) rotate(200deg); }
        68% { transform: translate(-50px, 50px) scale(1.1) rotate(280deg); }
        85% { transform: translate(55px, -25px) scale(1.2) rotate(340deg); }
        100% { transform: translate(0, 0) scale(1) rotate(360deg); }
      }
      @keyframes randomFloat4 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        20% { transform: translate(-75px, 85px) scale(1.3) rotate(80deg); }
        40% { transform: translate(70px, -75px) scale(0.7) rotate(180deg); }
        60% { transform: translate(-80px, 70px) scale(1.25) rotate(270deg); }
        80% { transform: translate(65px, -45px) scale(0.9) rotate(350deg); }
        100% { transform: translate(0, 0) scale(1) rotate(360deg); }
      }
    `}</style>

    {/* Small Liquid Globe 1 - Cyan */}
    <motion.div
      className="absolute w-[250px] h-[250px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 35% 35%, rgba(0, 242, 254, 0.5), rgba(0, 242, 254, 0.2), transparent)',
        filter: 'blur(40px)',
        opacity: 0.88,
        top: '10%',
        left: '5%',
      }}
      animate={{
        x: [0, 45, 60, 30, -50, -35, 70, 25, 0],
        y: [0, -65, -80, -45, 90, 55, -60, 35, 0],
        scale: [1, 1.2, 1.3, 1.15, 0.75, 0.95, 1.25, 1.1, 1],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />

    {/* Small Liquid Globe 2 - Violet/Purple */}
    <motion.div
      className="absolute w-[280px] h-[280px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 40% 40%, rgba(167, 51, 255, 0.45), rgba(139, 92, 246, 0.25), transparent)',
        filter: 'blur(45px)',
        opacity: 0.92,
        top: '20%',
        right: '8%',
      }}
      animate={{
        x: [0, -55, -70, -45, 60, 40, -80, -30, 0],
        y: [0, 50, 70, 35, -80, -50, 70, 25, 0],
        scale: [1, 1.15, 1.35, 1.05, 0.8, 0.95, 1.3, 1.15, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.5,
      }}
    />

    {/* Small Liquid Globe 3 - Green */}
    <motion.div
      className="absolute w-[260px] h-[260px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.4), rgba(74, 222, 128, 0.2), transparent)',
        filter: 'blur(42px)',
        opacity: 0.87,
        bottom: '15%',
        left: '10%',
      }}
      animate={{
        x: [0, 65, 40, -70, -50, 60, 35, -65, 0],
        y: [0, -75, -60, 85, 50, -70, 40, -80, 0],
        scale: [1, 0.8, 1.4, 1.2, 1.1, 0.9, 1.35, 0.85, 1],
      }}
      transition={{
        duration: 22,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.3,
      }}
    />

    {/* Small Liquid Globe 4 - Cyan-Purple Mix */}
    <motion.div
      className="absolute w-[240px] h-[240px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 60% 40%, rgba(0, 242, 254, 0.35), rgba(167, 51, 255, 0.3), transparent)',
        filter: 'blur(43px)',
        opacity: 0.85,
        bottom: '20%',
        right: '12%',
      }}
      animate={{
        x: [0, -75, 70, -45, -80, 55, -60, 40, 0],
        y: [0, 85, -75, 50, 85, -55, -70, 35, 0],
        scale: [1, 1.3, 0.7, 1.15, 1.25, 0.85, 1.2, 1.1, 1],
      }}
      transition={{
        duration: 21,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.7,
      }}
    />

    {/* Small Liquid Globe 5 - Center Glow - Cyan */}
    <motion.div
      className="absolute w-[220px] h-[220px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.4), rgba(0, 242, 254, 0.15), transparent)',
        filter: 'blur(38px)',
        opacity: 0.86,
        top: '48%',
        left: '48%',
        transform: 'translate(-50%, -50%)',
      }}
      animate={{
        scale: [1, 1.5, 0.7, 1.2, 1.15, 0.8, 1.35, 1.1, 1],
        x: [0, 55, -65, 35, 50, -50, 60, -40, 0],
        y: [0, -70, 80, -50, -60, 65, -70, 45, 0],
      }}
      transition={{
        duration: 19,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.2,
      }}
    />

    {/* Small Liquid Globe 6 - Right Side - Purple */}
    <motion.div
      className="absolute w-[230px] h-[230px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 45% 45%, rgba(167, 51, 255, 0.42), rgba(139, 92, 246, 0.2), transparent)',
        filter: 'blur(40px)',
        opacity: 0.89,
        top: '35%',
        right: '5%',
      }}
      animate={{
        x: [0, 50, -60, 40, 55, -50, 65, -35, 0],
        y: [0, -65, 75, -55, -70, 60, -75, 40, 0],
        scale: [1, 1.25, 0.8, 1.15, 1.2, 0.9, 1.3, 1.05, 1],
      }}
      transition={{
        duration: 21,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.9,
      }}
    />

    {/* Small Liquid Globe 7 - Left Side - Green */}
    <motion.div
      className="absolute w-[210px] h-[210px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.38), rgba(74, 222, 128, 0.15), transparent)',
        filter: 'blur(37px)',
        opacity: 0.84,
        bottom: '30%',
        left: '3%',
      }}
      animate={{
        x: [0, -60, 70, -50, -65, 55, -70, 45, 0],
        y: [0, 75, -80, 55, 75, -65, -75, 50, 0],
        scale: [1, 1.35, 0.75, 1.1, 1.25, 0.85, 1.3, 1.15, 1],
      }}
      transition={{
        duration: 23,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1.1,
      }}
    />

    {/* Dark Vignette - More Visible */}
    <motion.div
      className="absolute inset-0"
      style={{
        background: 'radial-gradient(circle at 50% 50%, transparent 0%, rgba(2, 2, 5, 0.5) 100%)',
      }}
      animate={{
        opacity: [0.4, 0.6, 0.4],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  </div>
);

const Logo = () => (
  <div className="flex items-center gap-4">
    <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-2xl border-4 border-cyan-400">
      <img 
        src="/logo.png" 
        alt="Vaagdevi College Logo" 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-[clamp(1rem,1.8vw,1.4rem)] font-extrabold text-white tracking-wide drop-shadow-lg">
        CSE (AI&ML)
      </span>
      <span className="text-[clamp(0.75rem,1.3vw,0.9rem)] text-cyan-200 font-medium mt-1 drop-shadow">
        Vaagdevi College of Engineering
      </span>
    </div>
  </div>
);

const Navbar = () => (
  <motion.nav
    className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/40 border-b border-white/10"
    variants={navbarVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <Logo />
    </div>
  </motion.nav>
);

const HeroSection = ({ onExploreClick }) => (
  <motion.section
    className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    variants={heroVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center">
      <motion.h2
        className="text-[clamp(0.9rem,1.8vw,1.3rem)] text-cyan-300 font-extrabold mb-3 tracking-[0.14em] drop-shadow-lg"
        variants={welcomeVariants}
        style={{ letterSpacing: '0.14em' }}
      >WELCOME TO</motion.h2>
      <div className="relative flex flex-col items-center">
        <motion.h1
          className="text-[clamp(2rem,6vw,4.5rem)] font-black leading-[0.95] mb-4 bg-gradient-to-r from-cyan-300 via-green-300 to-blue-400 bg-clip-text text-transparent animate-gradient-glow drop-shadow-[0_0_34px_rgba(0,242,254,0.45)]"
          style={{ WebkitTextStroke: '1px rgba(0,242,254,0.14)' }}
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
        className="text-[clamp(0.9rem,1.8vw,1.2rem)] leading-relaxed text-gray-200 mt-6 mb-8 font-medium max-w-3xl"
        variants={subtitleVariants}
      >WHERE AI MEETS THE POWER OF QUANTUM REALITY</motion.p>
      
      {/* Centered Explore Button */}
      <motion.button
        variants={exploreBtnVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onClick={onExploreClick}
        className="relative px-8 py-3.5 rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-cyan-400 text-white font-bold text-base shadow-2xl transition-all flex items-center gap-3 justify-center overflow-hidden border-2 border-cyan-300/50 hover:border-cyan-300 group"
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "linear-gradient(90deg,#7C5CFF,#00F2FE)" }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 opacity-0 blur-xl group-hover:opacity-100 transition-opacity duration-300"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        
        <motion.span className="relative text-white font-bold text-base tracking-wide">
          EXPLORE NOW
        </motion.span>
        
        <motion.span
          initial={{ x: 0 }}
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative"
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="15" y2="12"></line>
            <polyline points="10 7 15 12 10 17"></polyline>
          </svg>
        </motion.span>
      </motion.button>
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
  const [showIntro, setShowIntro] = useState(true);

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
          content="Welcome to CSE (AI&ML) Department - WHERE AI MEETS THE POWER OF QUANTUM REALITY"
        />
        <meta name="keywords" content="CSE, AIML, AI, ML, Artificial Intelligence, Machine Learning, AI Verse, Events" />
      </Helmet>

      <AnimatePresence>
        {showIntro && <AiVerseIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white overflow-hidden">
        {/* Full page floating gradient background */}
        <FloatingGradientBackground />
        
        {/* Content layer */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <HeroSection onExploreClick={handleExplore} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
