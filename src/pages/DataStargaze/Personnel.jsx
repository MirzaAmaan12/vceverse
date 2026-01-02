import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";

export default function Personnel() {
  return (
    <section className="py-24 bg-[#020205] px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white text-2xl md:text-4xl font-black mb-20 tracking-[0.2em] uppercase">
          THE <span className="text-[#7C5CFF]">FOUNDATION</span> TEAM
        </h2>

        {/* LEADERS: Stacks on mobile, Side-by-side on Desktop */}
          {/* All personnel in a single horizontal row with large boxes */}
          <div className="flex items-center justify-center gap-6 overflow-x-auto pb-4 md:pb-8">
            {[...STARGAZE_DATA.leaders, ...STARGAZE_DATA.team].map((p, i) => (
              <ProfileCard key={i} person={p} size="large" glow="#00F2FE" />
            ))}
          </div>
      </div>
    </section>
  );
}

function ProfileCard({ person, size, glow }) {
  return (
    <motion.div 
      whileTap={{ scale: 0.98 }}
      className="relative p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/10 flex flex-col items-center text-center overflow-hidden transition-colors hover:bg-white/[0.04]"
    >
      <div className="absolute -top-10 -right-10 w-24 h-24 blur-[50px] opacity-10 pointer-events-none" style={{ backgroundColor: glow }} />
      
      <div className={`${size === 'large' ? 'w-24 h-24 md:w-40 md:h-40' : 'w-20 h-20'} rounded-full border border-white/20 p-1 mb-4 md:mb-6`}>
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
            {person.image ? (
              <img
                src={person.image}
                alt={person.name}
                className={`w-full h-full object-cover rounded-full transform ${person.name === 'Dr. Thanveer Jahan' ? 'scale-150 md:scale-150' : 'scale-125 md:scale-125'}`}
                style={{ objectPosition: 'center' }}
              />
            ) : (
              <div className="text-[10px] text-white/10 font-mono">PHOTO</div>
            )}
        </div>
      </div>

      <h4 className="text-white font-bold text-sm md:text-xl leading-tight uppercase tracking-tight">{person.name}</h4>
      <p className="text-[#00F2FE] font-mono text-[8px] md:text-[10px] uppercase mt-1 tracking-widest">{person.role}</p>
      {person.desc && <p className="text-slate-500 text-[8px] md:text-[9px] mt-3 uppercase leading-tight italic">{person.desc}</p>}
    </motion.div>
  );
}