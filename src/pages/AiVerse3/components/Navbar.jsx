import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-[500] w-[90%] md:w-auto"
    >
      <div className="bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_10px_30px_rgba(0,0,0,0.04)] px-8 py-4 rounded-full flex items-center gap-12">
        <span className="text-xs font-black tracking-tighter text-slate-900 uppercase">AIV 3.0</span>
        
        <div className="hidden md:flex gap-8">
          {['Vision', 'Timeline', 'Synapse'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-[10px] font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="h-4 w-px bg-slate-200 hidden md:block" />
        
        <span className="text-[9px] font-mono text-blue-400 font-bold uppercase">CSM_DEPT</span>
      </div>
    </motion.nav>
  );
}