import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function BackButton({ className = "" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    // Check if there's history to go back to
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <motion.button
      onClick={handleBack}
      whileHover={{ scale: 1.05, x: -3 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed top-3 left-3 sm:top-4 sm:left-4 z-[1001] flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all shadow-lg ${className}`}
    >
      <ArrowLeft size={14} className="sm:w-[18px] sm:h-[18px]" />
      <span className="hidden xs:inline sm:inline">Back</span>
    </motion.button>
  );
}
