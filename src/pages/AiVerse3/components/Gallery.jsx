import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [1, 2, 3, 4, 5, 6]; // Placeholder for your event photos

  return (
    <section className="py-40 bg-[#FCFCFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <h2 className="text-6xl font-light tracking-tighter text-slate-900">
            Visual <span className="font-serif italic text-purple-400">Synapse</span>
          </h2>
          <p className="text-slate-400 text-sm tracking-widest uppercase pb-2 border-b border-slate-100">
            Archive // 350+ Participants
          </p>
        </div>

        <div className="columns-1 md:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white"
            >
              <img 
                src={`/images/aiv-${img}.jpg`} 
                alt="Event Detail" 
                className="rounded-[2rem] w-full object-cover transition-all duration-700"
              />
              <div className="absolute bottom-6 left-8">
                <span className="text-[10px] font-bold text-white/80 bg-black/10 backdrop-blur-md px-3 py-1 rounded-full uppercase">
                  Moment_0{img}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}