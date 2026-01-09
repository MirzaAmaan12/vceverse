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
      className="absolute w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] md:w-[250px] md:h-[250px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 35% 35%, rgba(0, 242, 254, 0.5), rgba(0, 242, 254, 0.2), transparent)',
        filter: 'blur(30px)',
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
      className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 40% 40%, rgba(167, 51, 255, 0.45), rgba(139, 92, 246, 0.25), transparent)',
        filter: 'blur(35px)',
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
      className="absolute w-[130px] h-[130px] sm:w-[190px] sm:h-[190px] md:w-[260px] md:h-[260px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.4), rgba(74, 222, 128, 0.2), transparent)',
        filter: 'blur(32px)',
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
      className="absolute w-[110px] h-[110px] sm:w-[170px] sm:h-[170px] md:w-[240px] md:h-[240px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 60% 40%, rgba(0, 242, 254, 0.35), rgba(167, 51, 255, 0.3), transparent)',
        filter: 'blur(33px)',
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
      className="absolute w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] md:w-[220px] md:h-[220px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(0, 242, 254, 0.4), rgba(0, 242, 254, 0.15), transparent)',
        filter: 'blur(28px)',
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
      className="absolute w-[115px] h-[115px] sm:w-[170px] sm:h-[170px] md:w-[230px] md:h-[230px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 45% 45%, rgba(167, 51, 255, 0.42), rgba(139, 92, 246, 0.2), transparent)',
        filter: 'blur(30px)',
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
      className="absolute w-[105px] h-[105px] sm:w-[155px] sm:h-[155px] md:w-[210px] md:h-[210px] rounded-full"
      style={{
        background: 'radial-gradient(circle at 30% 30%, rgba(34, 197, 94, 0.38), rgba(74, 222, 128, 0.15), transparent)',
        filter: 'blur(27px)',
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
  <motion.div 
    className="flex items-center gap-2 sm:gap-4 md:gap-5"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <motion.div 
      className="relative w-10 h-10 sm:w-14 md:w-20 sm:h-14 md:h-20 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Glow effect behind logo */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-md"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <img 
        src="/logo.png" 
        alt="Vaagdevi College Logo" 
        className="w-full h-full object-cover relative z-10"
      />
    </motion.div>
    <div className="flex flex-col leading-tight">
      <motion.span 
        className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-wide"
        animate={{ 
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{ backgroundSize: "200% 200%" }}
      >
        CSE (AI&ML)
      </motion.span>
      <motion.span 
        className="text-[10px] sm:text-sm md:text-base lg:text-lg text-cyan-400/90 font-semibold mt-0.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Vaagdevi College of Engineering
      </motion.span>
    </div>
  </motion.div>
);

const Navbar = ({ onExploreClick }) => (
  <motion.nav
    className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/60 border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5"
    variants={navbarVariants}
    initial="hidden"
    animate="visible"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 md:py-6 flex justify-between items-center">
      <Logo />
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 242, 254, 0.5)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onExploreClick}
        className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-white font-bold text-sm sm:text-base md:text-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center gap-3"
      >
        Explore
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="10" x2="15" y2="10"></line>
          <polyline points="10 5 15 10 10 15"></polyline>
        </svg>
      </motion.button>
    </div>
  </motion.nav>
);

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.id % 3 === 0 
              ? 'rgba(0, 242, 254, 0.6)' 
              : particle.id % 3 === 1 
                ? 'rgba(139, 92, 246, 0.6)' 
                : 'rgba(34, 197, 94, 0.5)',
            boxShadow: particle.id % 3 === 0 
              ? '0 0 10px rgba(0, 242, 254, 0.8)' 
              : particle.id % 3 === 1 
                ? '0 0 10px rgba(139, 92, 246, 0.8)' 
                : '0 0 10px rgba(34, 197, 94, 0.6)',
          }}
          animate={{
            y: [0, -100, -200, -100, 0],
            x: [0, 30, -20, 40, 0],
            opacity: [0.3, 0.8, 0.6, 0.9, 0.3],
            scale: [1, 1.3, 0.8, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated Grid Lines
const AnimatedGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="0.5"/>
        </pattern>
        <linearGradient id="gridFade" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0"/>
          <stop offset="50%" stopColor="white" stopOpacity="1"/>
          <stop offset="100%" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <mask id="gridMask">
          <rect width="100%" height="100%" fill="url(#gridFade)"/>
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)"/>
    </svg>
  </div>
);

// Animated Typing Text
const TypewriterText = ({ text, delay = 0 }) => {
  const letters = text.split("");
  return (
    <span className="inline-flex">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + index * 0.05,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

// Glowing Ring Animation
const GlowingRings = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    {[1, 2, 3].map((ring) => (
      <motion.div
        key={ring}
        className="absolute rounded-full border"
        style={{
          width: `${ring * 250}px`,
          height: `${ring * 250}px`,
          borderColor: ring === 1 ? 'rgba(0, 242, 254, 0.15)' : ring === 2 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(34, 197, 94, 0.08)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: ring % 2 === 0 ? [0, 360] : [360, 0],
        }}
        transition={{
          duration: 8 + ring * 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const HeroSection = ({ onExploreClick }) => (
  <motion.section
    className="relative min-h-[75vh] sm:min-h-[70vh] flex flex-col justify-center items-center overflow-hidden pt-24 sm:pt-32 md:pt-36 pb-4 sm:pb-8"
    variants={heroVariants}
    initial="hidden"
    animate="visible"
  >
    {/* Background effects */}
    <FloatingParticles />
    <AnimatedGrid />
    <GlowingRings />

    <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto flex flex-col items-center justify-center">
      {/* Animated Welcome Text */}
      <motion.div
        className="text-sm sm:text-lg md:text-xl lg:text-2xl text-cyan-400 font-black mb-3 sm:mb-6 tracking-[0.15em] sm:tracking-[0.25em] uppercase"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <TypewriterText text="WELCOME TO THE" delay={0.5} />
      </motion.div>

      <div className="relative flex flex-col items-center">
        {/* Main Title with Letter Animation */}
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.95] mb-4 sm:mb-8 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {["C", "S", "E", " ", "(", "A", "I", "&", "M", "L", ")"].map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block bg-gradient-to-r from-cyan-400 via-cyan-300 to-teal-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.3 + index * 0.08,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.2,
                color: "#00F2FE",
                textShadow: "0 0 30px rgba(0, 242, 254, 0.8)",
              }}
              style={{ 
                textShadow: "0 0 50px rgba(0, 242, 254, 0.5)",
                display: letter === " " ? "inline" : "inline-block",
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated Underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80%", opacity: 1 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
        />

        {/* Pulsing Glow Effect */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -bottom-4 sm:-bottom-6 h-20 sm:h-28 w-[100%] rounded-full"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0, 242, 254, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Subtitle with Stagger Animation */}
      <motion.p
        className="text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed text-gray-300 mt-6 sm:mt-10 font-medium max-w-4xl px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        Innovating the Future with{" "}
        <motion.span 
          className="text-cyan-400 font-bold"
          animate={{ 
            textShadow: ["0 0 10px rgba(0, 242, 254, 0.5)", "0 0 20px rgba(0, 242, 254, 0.8)", "0 0 10px rgba(0, 242, 254, 0.5)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Artificial Intelligence
        </motion.span>{" "}
        &{" "}
        <motion.span 
          className="text-purple-400 font-bold"
          animate={{ 
            textShadow: ["0 0 10px rgba(139, 92, 246, 0.5)", "0 0 20px rgba(139, 92, 246, 0.8)", "0 0 10px rgba(139, 92, 246, 0.5)"]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        >
          Machine Learning
        </motion.span>
      </motion.p>

    </div>
  </motion.section>
);

const Footer = () => (
  <motion.footer 
    className="w-full bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent border-t border-cyan-500/20 py-6 sm:py-10 md:py-12 px-4 sm:px-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.5 }}
  >
    <div className="max-w-7xl mx-auto text-center">
      <motion.p 
        className="text-gray-300 text-xs sm:text-base md:text-lg font-medium"
        whileHover={{ color: "#00F2FE" }}
        transition={{ duration: 0.3 }}
      >
        © 2026 CSE (AI&ML) Department - Vaagdevi College of Engineering
      </motion.p>
      <motion.p 
        className="mt-1 sm:mt-2 text-cyan-400/70 text-[10px] sm:text-sm md:text-base font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Innovating the future with AI & Machine Learning
      </motion.p>
    </div>
  </motion.footer>
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
          content="Welcome to CSE (AI&ML) Department - Innovating the Future with Artificial Intelligence & Machine Learning"
        />
        <meta name="keywords" content="CSE, AIML, AI, ML, Artificial Intelligence, Machine Learning, AI Verse, Events, Vaagdevi College" />
      </Helmet>

      <AnimatePresence>
        {showIntro && <AiVerseIntro onComplete={() => setShowIntro(false)} />}
      </AnimatePresence>

      <div className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white overflow-hidden">
        {/* Full page floating gradient background */}
        <FloatingGradientBackground />
        
        {/* Content layer */}
        <div className="relative z-10">
          <Navbar onExploreClick={handleExplore} />
          <main>
            <HeroSection onExploreClick={handleExplore} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
