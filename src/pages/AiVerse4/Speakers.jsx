import { motion } from "framer-motion";

export default function Speakers() {
  return (
    <section id="speakers" className="min-h-screen px-6 py-20 md:px-24 bg-[#050505]">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-4">THE GURUS</h2>
        <div className="h-1 w-20 bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {[1, 2, 3].map((_, i) => (
          <motion.div key={i} className="flex flex-col items-center">
            <div className="relative group">
              {/* Outer Glow Circle */}
              <div className="absolute inset-0 bg-[#7C5CFF] rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity" />
              
              {/* Image Frame */}
              <div className="relative w-48 h-48 rounded-full border-2 border-[#7C5CFF] p-2 bg-black overflow-hidden shadow-[0_0_20px_#7C5CFF55]">
                 <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center italic text-gray-500">
                    Photo
                 </div>
              </div>
            </div>
            <h3 className="mt-6 text-xl font-bold text-white uppercase tracking-wider">Speaker Name</h3>
            <p className="text-[#00F2FE] font-mono text-xs uppercase">Professor / Guest</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}