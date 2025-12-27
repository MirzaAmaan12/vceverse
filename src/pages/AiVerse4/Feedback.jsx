import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Feedback() {
  const [isOpen, setIsOpen] = useState(false);

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "AI Enthusiast",
      text: "AI VERSE 3.0 was an incredible experience. The workshops were a game changer.",
    },
    {
      name: "Sneha Reddy",
      role: "CSE Student",
      text: "The best technical event at Vaagdevi! The prompt engineering challenge was rewarding.",
    },
  ];

  return (
    <motion.section 
      id="feedback"
      className="min-h-screen px-6 py-20 md:px-24 flex flex-col justify-center bg-[#050505] relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl text-[#7C5CFF] font-bold mb-4">Voices of AI VERSE</h2>
          <p className="text-gray-400 text-lg">Hear from our previous participants.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <div key={index} className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <p className="text-gray-300 italic mb-6">"{item.text}"</p>
              <h4 className="text-white font-bold">{item.name}</h4>
              <p className="text-[#7C5CFF] text-xs uppercase tracking-widest">{item.role}</p>
            </div>
          ))}
        </div>

        {/* TRIGGER BUTTON */}
        <div className="text-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="text-white hover:text-[#7C5CFF] underline underline-offset-8 transition-all font-semibold"
          >
            Submit Your Feedback →
          </button>
        </div>
      </div>

      {/* FEEDBACK MODAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Form Card */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg bg-[#111124] border border-[#7C5CFF]/30 p-8 rounded-3xl shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white"
              >
                ✕
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-6">Share Your Experience</h3>
              
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="bg-black/40 border border-white/10 p-3 rounded-xl outline-none focus:border-[#7C5CFF] text-white"
                  required
                />
                <textarea 
                  placeholder="Your Feedback" 
                  rows="4"
                  className="bg-black/40 border border-white/10 p-3 rounded-xl outline-none focus:border-[#7C5CFF] text-white resize-none"
                  required
                ></textarea>
                
                <button 
                  type="submit"
                  className="bg-[#7C5CFF] text-black font-bold py-3 rounded-xl hover:shadow-[0_0_20px_#7C5CFF] transition-all"
                >
                  Post Feedback
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}