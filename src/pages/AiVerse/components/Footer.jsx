// src/pages/AiVerse/components/Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 sm:py-16 px-4 border-t border-white/10 bg-[#050a18]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl sm:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300 mb-2">
            AI-VERSE
          </h3>
          <p className="text-white/40 text-xs sm:text-sm mb-6">
            The Genesis • 21st - 22nd November, 2022
          </p>
          
          <div className="flex flex-col items-center gap-2 text-white/30 text-[10px] sm:text-xs">
            <span>Vaagdevi College of Engineering</span>
            <span>Department of CSE (AI & ML)</span>
          </div>

          <div className="mt-6 text-orange-500 text-xs">
            Follow us on Instagram <span className="font-bold">@csmconnect.vce</span>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-white/20 text-[10px] sm:text-xs">
              © AI-VERSE • Official Legacy Archive
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
