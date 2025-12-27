import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Launch() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Data Stargaze", path: "/data-stargaze", primary: false },
    { label: "AI Verse ", path: "/ai-verse", primary: false },
    { label: "AI Verse 2.0", path: "/ai-verse-2", primary: false },
    { label: "AI Verse 3.0", path: "/ai-verse-3", primary: false },
    { label: "AI Verse 4.0", path: "/ai-verse-4", primary: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 120, damping: 14 } 
    },
  };

  return (
    <div className="h-screen w-screen bg-[#020205] flex flex-col relative overflow-hidden">
      
      {/* Background Lighting - Optimized for mobile */}
      <div className="absolute top-0 right-0 w-[60vw] md:w-[40vw] h-[30vh] md:h-[40vh] bg-[#7C5CFF]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50vw] md:w-[30vw] h-[20vh] md:h-[30vh] bg-blue-500/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col p-6 sm:p-12 md:p-16 lg:p-20 relative z-10 justify-center">
        
        {/* Title Section */}
        <header className="mb-6 md:mb-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none"
          >
            <span className="text-white">AI </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C5CFF] to-[#D1C4FF]">
              VERSE
            </span>
          </motion.h1>
          <div className="h-1 w-16 md:w-24 bg-[#7C5CFF] mt-4 rounded-full shadow-[0_0_15px_#7C5CFF]" />
        </header>

        {/* Buttons List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 md:gap-5 mt-4 md:mt-6" 
        >
          {menuItems.map((item) => (
            <motion.button
              key={item.label}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 10 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.path)}
              className={`
                group relative flex items-center px-6 md:px-8
                w-full max-w-[500px] rounded-[15px] md:rounded-[25px] transition-all duration-300
                ${item.primary 
                  ? 'h-16 md:h-24 text-xl md:text-3xl font-bold' 
                  : 'h-12 md:h-16 text-base md:text-xl font-medium border border-white/10'}
              `}
              style={{
                background: item.primary 
                  ? "linear-gradient(90deg, #7C5CFF 0%, #5B3AE0 100%)" 
                  : "rgba(255, 255, 255, 0.03)",
                boxShadow: item.primary 
                  ? "0 10px 30px rgba(124, 92, 255, 0.25)" 
                  : "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <span className="text-white relative z-10">
                {item.label}
              </span>

              <span className={`ml-auto transition-transform duration-500 group-hover:translate-x-2 ${item.primary ? 'text-white' : 'text-[#7C5CFF]'}`}>
                <svg width="20" height="20" className="md:w-7 md:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 md:mt-auto">
          <p className="text-white text-[8px] md:text-[10px] font-mono tracking-[0.4em] opacity-20 uppercase">
            {/* &copy; 2024 Vaagdevi College of Engineering - All Rights Reserved */} .
          </p>
        </footer>
      </div>
    </div>
  );
}