import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

// Import poster images
import poster1 from "../pages/AiVerse/poster/a1.0.png";
import poster2 from "../pages/AiVerse/poster/a2.0.jpg";
import poster3 from "../pages/AiVerse/poster/ai3.0.jpg";
import poster4 from "../pages/AiVerse/poster/a4.0.jpg";

const AiVerseEvolution = () => {
  const [currentPoster, setCurrentPoster] = useState(-1);

  const posters = [
    { id: 1, src: poster1, title: "AI Verse 1.0", year: "2021" },
    { id: 2, src: poster2, title: "AI Verse 2.0", year: "2022" },
    { id: 3, src: poster3, title: "AI Verse 3.0", year: "2023" },
    { id: 4, src: poster4, title: "AI Verse 4.0", year: "2024", isCurrent: true },
  ];

  useEffect(() => {
    const timings = [500, 2800, 4800, 6800]; // Delays for each poster
    const timeouts = timings.map((delay, index) => 
      setTimeout(() => setCurrentPoster(index), delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center py-12 overflow-hidden">
      {/* Background glow effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-to-r from-purple-600/20 to-cyan-400/20 rounded-full blur-3xl" />
      </motion.div>

      {/* Posters Container */}
      <div className="relative w-full max-w-2xl h-[600px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {posters.map((poster, index) => {
            const isActive = index === currentPoster;
            const isFinal = poster.isCurrent;

            if (!isActive) return null;

            return (
              <motion.div
                key={poster.id}
                className="absolute"
                style={{
                  transformStyle: "preserve-3d",
                }}
                initial={{
                  opacity: 0,
                  y: -600,
                  x: "-50%",
                  rotateX: isFinal ? 0 : 45,
                  rotateY: isFinal ? 0 : (Math.random() - 0.5) * 60,
                  rotateZ: isFinal ? 0 : (Math.random() - 0.5) * 45,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  y: "-50%",
                  x: "-50%",
                  rotateX: 0,
                  rotateY: 0,
                  rotateZ: 0,
                  scale: isFinal ? 1.05 : 0.95,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  y: "-50%",
                  transition: { duration: 0.5, ease: "easeIn" }
                }}
                transition={{
                  duration: isFinal ? 1.5 : 1.2,
                  ease: isFinal ? [0.34, 1.56, 0.64, 1] : [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {/* Poster Card */}
                <motion.div
                  className={`relative rounded-2xl overflow-hidden shadow-2xl ${
                    isFinal
                      ? "border-4 border-cyan-400"
                      : "border-2 border-gray-600/30"
                  }`}
                  style={{
                    width: isFinal ? "420px" : "380px",
                    height: isFinal ? "550px" : "500px",
                    transformStyle: "preserve-3d",
                  }}
                  animate={
                    isFinal
                      ? {
                          boxShadow: [
                            "0 30px 60px -15px rgba(6, 182, 212, 0.6), 0 0 50px rgba(139, 92, 246, 0.4)",
                            "0 30px 60px -15px rgba(139, 92, 246, 0.6), 0 0 50px rgba(6, 182, 212, 0.4)",
                            "0 30px 60px -15px rgba(6, 182, 212, 0.6), 0 0 50px rgba(139, 92, 246, 0.4)",
                          ],
                        }
                      : {
                          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                        }
                  }
                  transition={
                    isFinal
                      ? {
                          boxShadow: {
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }
                      : {}
                  }
                >
                  {/* Poster Image */}
                  <img
                    src={poster.src}
                    alt={poster.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay for past posters */}
                  {!isFinal && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    />
                  )}

                  {/* Glow effect for AI Verse 4.0 */}
                  {isFinal && (
                    <>
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={{
                          background: [
                            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
                            "radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.25) 0%, transparent 70%)",
                            "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      
                      {/* Sparkle effects */}
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          style={{
                            top: `${15 + Math.random() * 70}%`,
                            left: `${15 + Math.random() * 70}%`,
                            boxShadow: "0 0 10px rgba(255, 255, 255, 0.8)",
                          }}
                          animate={{
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      ))}

                      {/* Corner glow effects */}
                      <motion.div
                        className="absolute -top-4 -left-4 w-20 h-20 bg-cyan-400/40 rounded-full blur-2xl"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-4 -right-4 w-20 h-20 bg-purple-500/40 rounded-full blur-2xl"
                        animate={{
                          opacity: [0.3, 0.6, 0.3],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1,
                        }}
                      />
                    </>
                  )}

                  {/* Label at bottom */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 p-5 ${
                      isFinal
                        ? "bg-gradient-to-t from-cyan-600/95 via-purple-600/85 to-transparent"
                        : "bg-gradient-to-t from-black/90 to-transparent"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <h3
                      className={`text-3xl font-bold mb-2 ${
                        isFinal ? "text-white drop-shadow-lg" : "text-gray-200"
                      }`}
                    >
                      {poster.title}
                    </h3>
                    {isFinal && (
                      <motion.div
                        className="mt-3 flex items-center gap-3"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                      >
                        <motion.span
                          className="px-4 py-2 bg-white text-slate-900 rounded-full text-base font-black shadow-lg"
                          animate={{
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          LAUNCHING NOW
                        </motion.span>
                        <motion.span
                          className="text-3xl"
                          animate={{
                            rotate: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          🚀
                        </motion.span>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>

                {/* Floating shadow */}
                <motion.div
                  className="absolute inset-0 -z-10 bg-black/40 rounded-2xl blur-2xl"
                  style={{
                    transform: "translateY(30px) scale(0.9)",
                  }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Title Section */}
      <AnimatePresence>
        {currentPoster === 3 && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              The Evolution Continues
            </motion.h2>
            <motion.p
              className="text-xl text-gray-300 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Join us for the most spectacular AI Verse yet! ✨
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AiVerseEvolution;
