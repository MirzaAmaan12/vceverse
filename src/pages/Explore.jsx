import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import FeaturedExplorePoster from "../components/FeaturedExplorePoster";

const Logo = () => (
  <div className="flex items-center gap-2 sm:gap-3">
    <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-lg">
      <img 
        src="/logo.png" 
        alt="Vaagdevi College Logo" 
        className="w-full h-full object-cover" 
      />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-sm sm:text-lg font-bold text-white">CSE (AI&ML)</span>
      <span className="text-[10px] sm:text-xs text-gray-400 hidden xs:block">Vaagdevi College of Engineering</span>
    </div>
  </div>
);

const Navbar = ({ onHomeClick }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-slate-950/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2 sm:py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={onHomeClick}
          className="cursor-pointer"
        >
          <Logo />
        </motion.div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onHomeClick}
          className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-semibold text-xs sm:text-sm hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Home</span>
        </motion.button>
      </div>
    </nav>
  );
};

export default function Explore() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Data Stargaze", path: "/data-stargaze", primary: false },
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

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Explore Events - CSE (AI&ML)</title>
        <meta name="description" content="Explore all CSE (AI&ML) events including Data Stargaze, AI Verse 2.0, 3.0, and 4.0" />
      </Helmet>

      <div className="min-h-screen w-screen bg-[#020205] flex flex-col relative overflow-x-hidden overflow-y-auto">
        
        <Navbar onHomeClick={handleHomeClick} />

        {/* Background Lighting */}
        <div className="absolute top-0 right-0 w-[60vw] md:w-[40vw] h-[30vh] md:h-[40vh] bg-[#7C5CFF]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[50vw] md:w-[30vw] h-[20vh] md:h-[30vh] bg-blue-500/5 blur-[80px] md:blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col p-6 sm:p-8 md:p-12 lg:p-16 pt-24 relative z-10">
          
          {/* Title Section */}
          <header className="mb-6 md:mb-8">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none"
            >
              <span className="text-white">EXPLORE</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7C5CFF] to-[#D1C4FF]"> EVENTS</span>
            </motion.h1>
            <div className="h-1 w-16 md:w-20 bg-[#7C5CFF] mt-3 rounded-full shadow-[0_0_15px_#7C5CFF]" />
          </header>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-start">
            
            {/* Featured Poster Section */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <FeaturedExplorePoster />
            </div>

            {/* Events List Section */}
            <div className="w-full lg:w-1/2 flex-shrink-0">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xl md:text-2xl font-bold text-white mb-5"
              >
                All Events
              </motion.h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col gap-3 md:gap-4" 
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
                      w-full rounded-[15px] md:rounded-[20px] transition-all duration-300
                      ${item.primary 
                        ? 'h-16 md:h-20 text-lg md:text-2xl font-bold' 
                        : 'h-12 md:h-16 text-base md:text-lg font-medium border border-white/10'}
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
                      <svg width="20" height="20" className="md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
