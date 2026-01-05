import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeaturedExplorePoster = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-3xl mx-auto mb-8"
    >
      {/* Animated gradient border container */}
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-gradient-border overflow-hidden">
        {/* Glassmorphism card */}
        <motion.div
          whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(124, 92, 255, 0.3)" }}
          transition={{ duration: 0.3 }}
          className="relative bg-slate-900/90 backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer"
        >
          {/* Featured badge */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-3 left-3 z-20 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"
          >
            <span className="text-white font-bold text-xs tracking-wide flex items-center gap-1.5">
              🔥 FLAGSHIP EVENT
            </span>
          </motion.div>

          {/* Multi-layered Professional Glow Effect */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Primary Glow - Cyan */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, rgba(6, 182, 212, 0.1) 40%, transparent 70%)',
                filter: 'blur(60px)',
              }}
              animate={{
                scale: [1, 1.15, 1.05, 1],
                x: [-10, 10, -5, -10],
                y: [-5, 5, -10, -5],
                opacity: [0.6, 0.8, 0.7, 0.6],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            />

            {/* Secondary Glow - Purple */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, rgba(139, 92, 246, 0.15) 40%, transparent 70%)',
                filter: 'blur(50px)',
              }}
              animate={{
                scale: [1.05, 1, 1.1, 1.05],
                x: [10, -10, 5, 10],
                y: [5, -5, 10, 5],
                opacity: [0.5, 0.7, 0.6, 0.5],
              }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />

            {/* Tertiary Glow - Blue */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.12) 40%, transparent 70%)',
                filter: 'blur(45px)',
              }}
              animate={{
                scale: [1, 1.1, 1.05, 1],
                x: [-5, 5, -10, -5],
                y: [10, -10, 5, 10],
                opacity: [0.55, 0.75, 0.65, 0.55],
              }}
              transition={{
                repeat: Infinity,
                duration: 8,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Accent Glow - Pink/Purple blend */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                scale: [1.1, 1, 1.15, 1.1],
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.4, 0.6, 0.5, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut",
                delay: 1.5,
              }}
            />
          </div>

          {/* Poster Image */}
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="/poster.png"
              alt="AI Verse 4.0 Poster"
              className="w-full h-auto object-cover rounded-t-2xl"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Content section */}
          <div className="relative z-10 p-5 md:p-7">
            {/* Event title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-black text-white mb-2"
            >
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">VERSE 4.0</span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-300 text-sm md:text-base font-medium mb-4"
            >
              WHERE AI MEETS THE POWER OF QUANTUM REALITY
            </motion.p>

            {/* Animated date */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-5"
            >
              <span className="text-white/80 text-base">📅</span>
              <motion.span
                className="text-lg font-bold text-white"
                animate={{ textShadow: ["0 0 10px #00F2FE", "0 0 20px #8B5CF6", "0 0 10px #00F2FE"] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                21<sup>st</sup>, 22<sup>nd</sup> & 23<sup>rd</sup> January 2026
              </motion.span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              {/* Register Button */}
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(0, 242, 254, 0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/ai-verse-4")}
                className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-semibold text-sm shadow-md hover:shadow-cyan-400/40 transition-all"
              >
                Register Now
              </motion.button>

              {/* View Details Button */}
              <motion.button
                whileHover={{ scale: 1.03, borderColor: "#00F2FE" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/ai-verse-4")}
                className="px-6 py-2.5 rounded-lg border-2 border-cyan-400/50 text-cyan-400 font-semibold text-sm hover:bg-cyan-400/10 transition-all"
              >
                View Event Details
              </motion.button>
            </motion.div>
          </div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/50"
              style={{
                top: `${20 + i * 12}%`,
                left: `${10 + i * 15}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + i,
                delay: i * 0.5,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Add CSS for animated gradient border */}
      <style>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradient-border 3s ease infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default FeaturedExplorePoster;
