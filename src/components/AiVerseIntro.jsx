import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const posterLoaders = [
  () => import("../pages/AiVerse/poster/a1.0.png"),
  () => import("../pages/AiVerse/poster/a2.0.jpg"),
  () => import("../pages/AiVerse/poster/ai3.0.jpg"),
  () => import("../pages/AiVerse/poster/a4.0.jpg"),
];

const preloadImage = (src) => {
  if (!src) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    const done = () => resolve();
    img.onload = done;
    img.onerror = reject;
    if (typeof img.decode === "function") {
      img.decode().then(done).catch(() => {
        // decode may fail on some browsers; fall back to onload
      });
    }
  });
};

const SplitPoster = ({ src, alt, isSplitting, zIndex, scale }) => {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ zIndex }}
      initial={{ scale }}
      animate={{ scale }}
    >
      {/* Left Half */}
      <motion.div 
        className="relative w-1/2 h-full overflow-hidden bg-black shadow-2xl"
        initial={{ x: 0, opacity: 1 }}
        animate={isSplitting ? { x: "-110%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ 
          x: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.6, delay: 0.8, ease: "easeOut" }
        }}
      >
        <div className="absolute top-0 left-0 w-[200%] h-full">
          {src ? (
            <img src={src} alt={alt} className="w-full h-full object-contain" draggable={false} />
          ) : (
            <div className="w-full h-full bg-black" aria-hidden="true" />
          )}
        </div>
        {/* Border line */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/10" />
      </motion.div>

      {/* Right Half */}
      <motion.div 
        className="relative w-1/2 h-full overflow-hidden bg-black shadow-2xl"
        initial={{ x: 0, opacity: 1 }}
        animate={isSplitting ? { x: "110%", opacity: 0 } : { x: 0, opacity: 1 }}
        transition={{ 
          x: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
          opacity: { duration: 0.6, delay: 0.8, ease: "easeOut" }
        }}
      >
        <div className="absolute top-0 left-[-100%] w-[200%] h-full">
          {src ? (
            <img src={src} alt={alt} className="w-full h-full object-contain" draggable={false} />
          ) : (
            <div className="w-full h-full bg-black" aria-hidden="true" />
          )}
        </div>
        {/* Border line */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
      </motion.div>
    </motion.div>
  );
};

const AiVerseIntro = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [posters, setPosters] = useState([null, null, null, null]);
  const [loadingText, setLoadingText] = useState("Loading posters…");
  const postersRef = useRef([null, null, null, null]);

  const ensurePosterLoaded = async (index) => {
    if (postersRef.current[index]) return postersRef.current[index];
    setLoadingText(`Loading poster ${index + 1} of 4…`);
    const mod = await posterLoaders[index]();
    const src = mod.default;
    await preloadImage(src);
    if (!postersRef.current[index]) {
      postersRef.current[index] = src;
      setPosters([...postersRef.current]);
    }
    return src;
  };

  const handleSkip = () => {
    setStep(5);
    onComplete();
  };

  useEffect(() => {
    let cancelled = false;

    const sequence = async () => {
      // Load first poster before showing animation
      await ensurePosterLoaded(0);
      if (cancelled) return;

      // Step 0: Show 1.0 briefly
      await new Promise((r) => setTimeout(r, 650));

      // Step 1: Ensure 2.0 is ready, then split 1.0
      await ensurePosterLoaded(1);
      if (cancelled) return;
      setStep(1);
      await new Promise((r) => setTimeout(r, 1200));

      // Step 2: Ensure 3.0 is ready, then split 2.0
      await ensurePosterLoaded(2);
      if (cancelled) return;
      setStep(2);
      await new Promise((r) => setTimeout(r, 1200));

      // Step 3: Ensure 4.0 is ready, then split 3.0
      await ensurePosterLoaded(3);
      if (cancelled) return;
      setStep(3);
      await new Promise((r) => setTimeout(r, 1200));

      // Step 4: Hold 4.0
      setStep(4);
      await new Promise((r) => setTimeout(r, 1600));

      // Step 5: Exit
      setStep(5);
      await new Promise((r) => setTimeout(r, 450));
      onComplete();
    };
    
    sequence();
    return () => {
      cancelled = true;
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={step === 5 ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />

      {/* Skip */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute top-5 right-5 z-[110] px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold tracking-wider uppercase backdrop-blur-md"
      >
        Skip
      </button>

      {/* Loading overlay until first poster is ready */}
      {!posters[0] && (
        <div className="absolute inset-0 z-[105] flex flex-col items-center justify-center text-center px-6">
          <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-cyan-400 animate-spin" />
          <p className="mt-4 text-white/80 text-sm font-semibold tracking-wide">{loadingText}</p>
          <p className="mt-1 text-white/40 text-xs">This can take a moment on mobile data</p>
        </div>
      )}
      
      {/* Container for Posters - Centered for all screen sizes */}
      <div className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] w-auto aspect-[2/3] max-w-[85vw] sm:max-w-[90vw] flex items-center justify-center mx-auto">
        
        {/* Poster 4.0 (Base Layer) - Always visible at back, smallest, zooms in when revealed */}
        <motion.div
          className="absolute inset-0 z-10 flex items-center justify-center"
          initial={{ scale: 0.7 }}
          animate={step >= 4 ? { scale: 1.0 } : { scale: 0.7 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full h-full overflow-hidden shadow-2xl">
            {posters[3] ? (
              <img src={posters[3]} alt="AI Verse 4.0" className="w-full h-full object-contain" draggable={false} />
            ) : (
              <div className="w-full h-full bg-black" aria-hidden="true" />
            )}
          </div>
        </motion.div>

        {/* Poster 3.0 (Splits at Step 3) - Always visible */}
        <SplitPoster 
          src={posters[2]} 
          alt="AI Verse 3.0" 
          isSplitting={step >= 3} 
          zIndex={30}
          scale={0.8}
        />

        {/* Poster 2.0 (Splits at Step 2) - Always visible */}
        <SplitPoster 
          src={posters[1]} 
          alt="AI Verse 2.0" 
          isSplitting={step >= 2} 
          zIndex={40}
          scale={0.9}
        />

        {/* Poster 1.0 (Splits at Step 1) - Always visible at front, full size */}
        <SplitPoster 
          src={posters[0]} 
          alt="AI Verse 1.0" 
          isSplitting={step >= 1} 
          zIndex={50}
          scale={1.0}
        />

      </div>
    </motion.div>
  );
};

export default AiVerseIntro;
