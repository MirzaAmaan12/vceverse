import { motion } from "framer-motion";
import { thanveerImg, salimImg, swethaImg, prakashImg, amaanImg, pardhuImg, riyazImg } from "./public";

const TEAM = [
  { name: "Principal Dr K Prakash", role: "Principal", desc: "Vaagdevi College of Engineering", image: prakashImg },
  { name: "Dr. Thanveer Jahan", role: "Convener", desc: "HOD-CSE (AI & ML) Dept", image: thanveerImg },
  { name: "Mrs. A. Swetha", role: "Coordinator", image: swethaImg },
  { name: "Mr. Salim Jiwani", role: "Coordinator", image: salimImg }
];

const WEBSITE_COORDINATORS = [
   { name: "Pothana Pardhu", role: "Website Coordinator", image: pardhuImg },
   { name: "Mirza Amaanullah Baig", role: "Website Coordinator", image: amaanImg },
  { name: "Mohammad Riyaz", role: "Website Coordinator", image: riyazImg }
];

export default function Personnel() {
  return (
    <section className="py-10 sm:py-16 bg-[#020205] px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-black mb-8 sm:mb-12 tracking-[0.1em] sm:tracking-[0.2em] uppercase">
          <span className="text-[#7C5CFF]">FOUNDATION</span>
          <br className="sm:hidden" />
          <span className="sm:ml-2">TEAM</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {TEAM.map((p, i) => (
            <ProfileCard key={i} person={p} />
          ))}
        </div>

        {/* Website Coordinators Section */}
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl font-black mb-8 sm:mb-12 mt-16 sm:mt-20 tracking-[0.1em] sm:tracking-[0.2em] uppercase">
          WEBSITE <span className="text-[#00F2FE]">COORDINATORS</span>
        </h2>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          {WEBSITE_COORDINATORS.map((p, i) => (
            <ProfileCard key={i} person={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileCard({ person }) {
  // Determine if this image needs different styling (for images with letterboxing)
  const needsContain = person.name === "Pardhu";
  
  return (
    <motion.div whileTap={{ scale: 0.98 }} className="relative p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col items-center text-center overflow-hidden">
      <div className="w-24 h-24 sm:w-36 md:w-48 sm:h-36 md:h-48 lg:w-52 lg:h-52 rounded-full border border-white/20 p-0.5 sm:p-1 mb-2 sm:mb-4">
        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
          {person.image ? (
            <img 
              src={person.image} 
              alt={person.name} 
              className={`rounded-full ${needsContain ? 'w-full h-full object-contain' : 'w-full h-full object-cover scale-125'}`}
              style={{ objectPosition: 'center' }} 
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#7C5CFF]/30 to-[#00F2FE]/30 flex items-center justify-center">
              <span className="text-3xl sm:text-5xl md:text-6xl text-white/60 font-bold">
                {person.name.charAt(0)}
              </span>
            </div>
          )}
        </div>
      </div>
      <h4 className="text-white font-bold text-[10px] sm:text-sm md:text-lg leading-tight uppercase tracking-tight">{person.name}</h4>
      <p className="text-[#00F2FE] font-mono text-[8px] sm:text-[10px] uppercase mt-0.5 sm:mt-1 tracking-wider sm:tracking-widest">{person.role}</p>
      {person.desc && <p className="text-slate-500 text-[7px] sm:text-[9px] mt-1 sm:mt-2 uppercase leading-tight italic">{person.desc}</p>}
    </motion.div>
  );
}
