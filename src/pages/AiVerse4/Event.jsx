import { motion } from "framer-motion";

export default function Event() {
  const highlights = [
    { title: "Cutting Edge", desc: "Explore the latest in LLMs and Neural Networks." },
    { title: "Networking", desc: "Connect with tech enthusiasts from across the region." },
    { title: "Recognition", desc: "Win certificates and prizes backed by CSE AIML Dept." }
  ];

  return (
    <motion.section 
      id="event"
      className="relative min-h-screen px-6 py-20 md:px-24 flex flex-col justify-center overflow-hidden"
      style={{ background: "radial-gradient(circle at 50% 50%, #0B0B15 0%, #020205 100%)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#8B5CF6]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-white">
          About the <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FE] to-[#8B5CF6]">Event</span>
        </h2>
        <p className="text-[#CBD5E1] text-lg md:text-2xl leading-relaxed mb-12 font-light max-w-4xl">
          AI VERSE 4.0 is the flagship technical symposium of <span className="text-white font-semibold">Vaagdevi College of Engineering</span>. 
          Hosted by the <span className="text-[#00F2FE] font-mono">CSE (AI & ML)</span> department.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#00F2FE]/40 transition-all duration-500">
              <h3 className="text-[#8B5CF6] font-bold mb-3 uppercase tracking-tighter text-xl">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}