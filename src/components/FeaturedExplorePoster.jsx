import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FeaturedExplorePoster = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-4xl mx-auto mb-12"
    >
      {/* Animated gradient border container */}
      <div className="relative p-[3px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-gradient-border overflow-hidden">
        {/* Glassmorphism card */}
        <motion.div
          whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(124, 92, 255, 0.4)" }}
          transition={{ duration: 0.3 }}
          className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden cursor-pointer"
        >
          {/* Featured badge */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute top-4 left-4 z-20 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg"
          >
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              🔥 FLAGSHIP EVENT
            </span>
          </motion.div>

          {/* Glow effect behind poster */}
          <div className="absolute inset-0 z-0">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-purple-600/30 via-blue-500/30 to-cyan-400/30 blur-3xl rounded-full"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
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
              className="w-full h-auto object-cover rounded-t-3xl"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Content section */}
          <div className="relative z-10 p-6 md:p-8">
            {/* Event title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-black text-white mb-2"
            >
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">VERSE 4.0</span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-300 text-lg font-medium mb-4"
            >
              WHERE AI MEETS THE POWER OF QUANTUM REALITY
            </motion.p>

            {/* Animated date */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-white/80 text-lg">📅</span>
              <motion.span
                className="text-xl font-bold text-white"
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
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Register Button */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 242, 254, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/ai-verse-4")}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold text-lg shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Register Now</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  →
                </motion.span>
              </motion.button>

              {/* View Details Button */}
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "#00F2FE" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/ai-verse-4")}
                className="px-8 py-4 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition-all"
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
