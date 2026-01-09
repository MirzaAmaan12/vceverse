import { motion } from "framer-motion";
import { thanveerImg, salimImg, swethaImg, prakashImg } from "./public";

const TEAM = [
  { name: "Principal Dr K Prakash", role: "Principal", desc: "Vaagdevi College of Engineering", image: prakashImg },
  { name: "Dr. Thanveer Jahan", role: "Convener", desc: "HOD-CSE (AI & ML) Dept", image: thanveerImg },
  { name: "Mrs. A. Swetha", role: "Coordinator", image: swethaImg },
  { name: "Mr. Salim Jiwani", role: "Coordinator", image: salimImg }
];

export default function Personnel() {
  return (
    <section className="py-10 sm:py-16 bg-[#050a18] px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-black mb-8 sm:mb-12 tracking-[0.1em] sm:tracking-[0.2em] uppercase">
          <span className="text-orange-500">FOUNDATION</span>
          <br className="sm:hidden" />
          <span className="sm:ml-2">TEAM</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {TEAM.map((p, i) => (
            <ProfileCard key={i} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ person }) {
  return (
    <motion.div whileTap={{ scale: 0.98 }} className="relative p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-orange-500/20 flex flex-col items-center text-center overflow-hidden hover:border-orange-500/50 transition-colors">
      <div className="w-20 h-20 sm:w-32 md:w-40 lg:w-48 sm:h-32 md:h-40 lg:h-48 rounded-full border border-orange-500/30 p-0.5 sm:p-1 mb-2 sm:mb-4">
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
          <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full transform scale-125" style={{ objectPosition: 'center' }} />
        </div>
      </div>
      <h4 className="text-white font-bold text-[10px] sm:text-sm md:text-lg leading-tight uppercase tracking-tight">{person.name}</h4>
      <p className="text-orange-500 font-mono text-[8px] sm:text-[10px] uppercase mt-0.5 sm:mt-1 tracking-wider sm:tracking-widest">{person.role}</p>
      {person.desc && <p className="text-slate-400 text-[7px] sm:text-[9px] mt-1 sm:mt-2 uppercase leading-tight italic">{person.desc}</p>}
    </motion.div>
  );
}
