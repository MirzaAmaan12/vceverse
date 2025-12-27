import { motion } from "framer-motion";

export default function Home() {
  // Stagger logic: 0.1s delay between each child appearing
  const container = { 
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } 
  };

  // Your requested "Slide Up" animation logic
  const itemReveal = {
    hidden: { y: "100%", opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1] } 
    },
  };

  return (
    <motion.section
      id="home"
      className="relative min-h-screen px-6 md:px-24 flex flex-col justify-center overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #0B0B15 0%, #020205 100%)",
      }}
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* RICH NEBULA GLOWS */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#7C5CFF]/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[10%] w-[400px] h-[400px] bg-[#00F2FE]/10 blur-[100px] rounded-full pointer-events-none" />

      {/* 1. COLLEGE TAG - Reveal Animation */}
      <div className="overflow-hidden mb-6">
        <motion.div variants={itemReveal} className="flex items-center gap-3">
          <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] md:text-xs font-mono font-bold tracking-[0.2em] text-[#00F2FE]">
            VAAGDEVI COLLEGE OF ENGINEERING
          </span>
          <span className="h-[1px] w-8 bg-[#00F2FE]/30 animate-pulse" />
        </motion.div>
      </div>

      {/* 2. WELCOME TEXT - Reveal Animation */}
      <div className="overflow-hidden">
        <motion.h1 variants={itemReveal} className="text-3xl md:text-6xl font-light text-slate-300 mb-2">
          Welcome to
        </motion.h1>
      </div>
      
      {/* 3. MAIN TITLE - Reveal Animation with Rich Gradient */}
      <div className="overflow-hidden">
        <motion.h1
          variants={itemReveal}
          className="text-6xl sm:text-8xl md:text-9xl font-black leading-none tracking-tighter"
        >
          <span className="text-white">AI </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-[#00F2FE] via-[#7C5CFF] to-[#DB2777] drop-shadow-[0_0_25px_rgba(124,92,255,0.4)]">
            VERSE
          </span>
          <span className="text-white"> 4.0</span>
        </motion.h1>
      </div>

      {/* 4. SUBTITLE & DEPT - Reveal Animation */}
      <div className="overflow-hidden mt-10">
        <motion.div 
          variants={itemReveal} 
          className="flex flex-col md:flex-row md:items-center gap-6"
        >
          <p className="text-sm md:text-xl text-slate-400 font-mono tracking-widest uppercase flex items-center gap-3">
            <span className="w-12 h-[1px] bg-[#00F2FE]" />
            Innovation Meets Intelligence
          </p>
          <div className="h-6 w-[1px] bg-white/20 hidden md:block" />
          <p className="text-[#7C5CFF] font-bold text-sm md:text-lg">
            Dept. of CSE (AI & ML)
          </p>
        </motion.div>
      </div>

      {/* 5. ENHANCED SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-slate-500 mb-4">Explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#00F2FE] via-[#7C5CFF] to-transparent shadow-[0_0_10px_#7C5CFF]" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}