import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center">
      <div className="flex gap-8 mb-12">
        {['DISCOVER', 'DESIGN', 'DEVELOP'].map((text) => (
          <span key={text} className="text-red-500 font-black text-sm tracking-widest">{text}</span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-12">
        <div className="text-left md:w-1/2">
          <h1 className="text-7xl font-black leading-none uppercase tracking-tighter mb-6">
            AI-VERSE<br /><span className="text-red-600">3.0</span>
          </h1>
          <p className="text-slate-400 text-xs max-w-sm leading-relaxed mb-10 uppercase tracking-wider">
            Building the backbone of a new digital reality. An interconnected universe powered by artificial intelligence.
          </p>
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all">
            Explore Now
          </button>
        </div>

        {/* Mascot Image Placeholder */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-red-600 rounded-3xl rotate-12 flex items-center justify-center shadow-[0_0_50px_rgba(220,38,38,0.3)]">
             <span className="text-9xl transform -rotate-12">🤖</span>
          </div>
        </div>
      </div>
    </section>
  );
}