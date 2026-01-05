import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedExplorePoster = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full max-w-6xl mx-auto mb-16">
      {/* Animated gradient border container */}
      <div className="relative p-[3px] rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-gradient-border overflow-hidden">
        {/* Glassmorphism card */}
        <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden cursor-pointer">
          {/* Featured badge */}
          <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-lg">
            <span className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
              🔥 FLAGSHIP EVENT
            </span>
          </div>

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
          <div className="relative z-10">
            <img
              src="/poster.png"
              alt="AI Verse 4.0 Poster"
              className="w-full h-auto object-cover rounded-t-3xl"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
          </div>

          {/* Content section */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Event title */}
            <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">VERSE 4.0</span>
            </h2>

            {/* Tagline */}
            <p className="text-cyan-300 text-lg md:text-xl font-medium mb-5">
              WHERE AI MEETS THE POWER OF QUANTUM REALITY
            </p>

            {/* Animated date */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-white/80 text-lg">📅</span>
              <span className="text-2xl font-bold text-white">
                21<sup>st</sup>, 22<sup>nd</sup> & 23<sup>rd</sup> January 2026
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Register Button */}
              <button
                onClick={() => navigate("/ai-verse-4")}
                className="px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold text-lg shadow-lg hover:shadow-cyan-400/50 transition-all flex items-center justify-center gap-2"
              >
                <span>Register Now</span>
                <span>→</span>
              </button>

              {/* View Details Button */}
              <button
                onClick={() => navigate("/ai-verse-4")}
                className="px-10 py-5 rounded-full border-2 border-cyan-400/50 text-cyan-400 font-bold text-lg hover:bg-cyan-400/10 transition-all"
              >
                View Event Details
              </button>
            </div>
          </div>

          {/* Floating particles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-cyan-400/50"
              style={{
                top: `${20 + i * 12}%`,
                left: `${10 + i * 15}%`,
              }}
            />
          ))}
        </div>
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
    </div>
  );
};

export default FeaturedExplorePoster;
