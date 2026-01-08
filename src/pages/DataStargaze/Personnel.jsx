import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function Personnel() {
  return (
    <section className="py-10 sm:py-16 md:py-24 bg-[#020205] px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-4xl font-black mb-8 sm:mb-12 md:mb-20 tracking-[0.1em] sm:tracking-[0.2em] uppercase">
          <span className="text-[#7C5CFF]">FOUNDATION</span>
          <br className="sm:hidden" />
          <span className="sm:ml-2">TEAM</span>
        </h2>

        {/* Grid layout - 2 columns on mobile, 4 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {[...STARGAZE_DATA.leaders, ...STARGAZE_DATA.team].map((p, i) => (
            <ProfileCard key={i} person={p} glow="#00F2FE" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ person, glow }) {
  return (
    <motion.div 
      whileTap={{ scale: 0.98 }}
      className="relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center overflow-hidden transition-colors hover:bg-white/[0.04]"
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 blur-[50px] opacity-10 pointer-events-none" style={{ backgroundColor: glow }} />
      
      <div className="w-20 h-20 sm:w-32 md:w-40 lg:w-48 sm:h-32 md:h-40 lg:h-48 rounded-full border border-white/20 p-0.5 sm:p-1 mb-2 sm:mb-4">
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className={`w-full h-full object-cover rounded-full transform ${person.name === 'Dr. Thanveer Jahan' ? 'scale-150' : 'scale-125'}`}
                style={{ objectPosition: 'center' }}
              />
            ) : (
              <div className="text-[10px] text-white/10 font-mono">PHOTO</div>
            )}
        </div>
      </div>

      <h4 className="text-white font-bold text-[10px] sm:text-sm md:text-lg leading-tight uppercase tracking-tight">{person.name}</h4>
      <p className="text-[#00F2FE] font-mono text-[8px] sm:text-[10px] uppercase mt-0.5 sm:mt-1 tracking-wider sm:tracking-widest">{person.role}</p>
      {person.desc && <p className="text-slate-500 text-[7px] sm:text-[9px] mt-1 sm:mt-2 uppercase leading-tight italic">{person.desc}</p>}
    </motion.div>
  );
}