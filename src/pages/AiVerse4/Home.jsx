import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 sm:pt-24 overflow-hidden px-3 sm:px-4">
      {/* ENHANCED NEBULA GLOWS - Scaled for mobile */}
      <div className="absolute top-1/4 left-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-purple-600/25 blur-[100px] sm:blur-[150px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-cyan-600/25 blur-[100px] sm:blur-[150px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-pink-600/15 blur-[80px] sm:blur-[120px] rounded-full" />

      {/* FLOATING PARTICLES - Fewer on mobile */}
      {[...Array(typeof window !== 'undefined' && window.innerWidth < 640 ? 8 : 15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-cyan-400/40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* INSTITUTIONAL HEADER */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 mb-6 sm:mb-12 mt-4 sm:mt-8"
      >
        <h3 className="text-white/80 font-bold tracking-[0.2em] sm:tracking-[0.35em] text-[10px] sm:text-xs md:text-sm uppercase mb-2 sm:mb-3">
          Vaagdevi College of Engineering
        </h3>
        <p className="text-[#22D3EE] text-[9px] sm:text-[10px] md:text-xs font-black tracking-[0.15em] sm:tracking-[0.25em] uppercase">
          Department of CSE (AI & ML)
        </p>
      </motion.div>

      {/* MAIN TITLE CONTAINER */}
      <div className="relative z-10 flex flex-col items-center max-w-7xl mx-auto">
        {/* WELCOME TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-slate-400 text-sm sm:text-lg md:text-2xl font-light tracking-[0.15em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-4"
        >
          Welcome to
        </motion.p>

        {/* MASSIVE TITLE */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[15vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black leading-none tracking-tighter text-center"
        >
          <motion.span 
            className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30"
            animate={{ 
              textShadow: [
                "0 0 30px rgba(255,255,255,0.3)",
                "0 0 50px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.3)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            AI VERSE
          </motion.span>
        </motion.h1>

        {/* FLOATING 4.0 BADGE - CENTERED */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 sm:mt-6"
        >
          <motion.div
            className="relative px-5 sm:px-8 py-2.5 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#00F2FE] to-[#7C5CFF] shadow-[0_0_30px_rgba(0,242,254,0.4)] sm:shadow-[0_0_50px_rgba(0,242,254,0.5)]"
            animate={{ 
              y: [-4, 4, -4],
              boxShadow: [
                "0 0 30px rgba(0,242,254,0.4)",
                "0 0 50px rgba(124,92,255,0.6)",
                "0 0 30px rgba(0,242,254,0.4)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <span className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white">4.0</span>
            <motion.div
              className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/30 to-transparent"
              animate={{ opacity: [0.3, 0, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* TAGLINE CARD */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="z-10 mt-8 sm:mt-12 flex flex-col items-center gap-6 sm:gap-8 px-2"
      >
        <div className="glass-card px-4 sm:px-10 py-4 sm:py-6 text-center border border-white/10 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-[0_0_20px_rgba(34,211,238,0.15)] sm:shadow-[0_0_30px_rgba(34,211,238,0.2)]">
          <p className="text-[#F0FF42] font-mono text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.3em] mb-1 sm:mb-2">
            Where Innovation Meets Intelligence
          </p>
          <motion.h2 
            className="text-white text-base sm:text-xl md:text-3xl font-black uppercase tracking-tight"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(0,242,254,0.3)",
                "0 0 30px rgba(124,92,255,0.5)",
                "0 0 20px rgba(0,242,254,0.3)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Join the Future of AI
          </motion.h2>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-2 sm:gap-3 opacity-60"
        >
          <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-slate-400">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="relative w-5 h-8 sm:w-6 sm:h-10 border-2 border-[#22D3EE]/50 rounded-full flex items-start justify-center p-1.5 sm:p-2"
          >
            <motion.div
              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#22D3EE]"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}