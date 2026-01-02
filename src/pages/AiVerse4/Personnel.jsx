import { motion } from "framer-motion";
import { thanveerImg, salimImg, swethaImg, prakashImg } from "./public";

const TEAM = [
  { name: "Dr. Thanveer Jahan", role: "Convener", desc: "HOD-CSE (AI & ML) Dept", image: thanveerImg },
  { name: "Mrs. A. Swetha", role: "Coordinator", image: swethaImg },
  { name: "Mr. Salim Jiwani", role: "Coordinator", image: salimImg },
  { name: "Principal Dr K Prakash", role: "Principal", image: prakashImg }
];

export default function Personnel() {
  return (
    <section className="py-16 bg-[#020205] px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-white text-2xl md:text-3xl font-black mb-12 tracking-[0.2em] uppercase">
          THE <span className="text-[#7C5CFF]">FOUNDATION</span> TEAM
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
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
    <motion.div whileTap={{ scale: 0.98 }} className="relative p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center overflow-hidden">
      <div className="w-48 h-48 md:w-52 md:h-52 rounded-full border border-white/20 p-1 mb-4">
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
          <img src={person.image} alt={person.name} className="w-full h-full object-cover rounded-full transform scale-125" style={{ objectPosition: 'center' }} />
        </div>
      </div>
      <h4 className="text-white font-bold text-sm md:text-lg leading-tight uppercase tracking-tight">{person.name}</h4>
      <p className="text-[#00F2FE] font-mono text-[10px] uppercase mt-1 tracking-widest">{person.role}</p>
      {person.desc && <p className="text-slate-500 text-[9px] mt-2 uppercase leading-tight italic">{person.desc}</p>}
    </motion.div>
  );
}
