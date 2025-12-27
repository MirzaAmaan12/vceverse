import { motion } from 'framer-motion';

const details = [
  { 
    title: "Generative AI", 
    category: "Technical", 
    date: "04-11-2024", 
    desc: "A deep dive into the 'Backbone of Digital Reality'. 350+ pioneers explored the transition from consumption to creation using LLMs.",
    accent: "#ADFF2F" 
  },
  { 
    title: "Next-Wave Web", 
    category: "Technical", 
    date: "05-11-2024", 
    desc: "Architecting the hyper-connected world through decentralized AI and modern web frameworks.",
    accent: "#38BDF8" 
  },
  { 
    title: "Technical Quiz", 
    category: "Non-Technical", 
    date: "06-11-2024", 
    desc: "The intellectual battleground. A fast-paced competition testing the cognitive limits of our AI-ML students.",
    accent: "#C084FC" 
  },
  { 
    title: "Cultural Pulse", 
    category: "Non-Technical", 
    date: "06-11-2024", 
    desc: "Celebrating the human element in an AI-curated society. A explosion of creativity, music, and legacy.",
    accent: "#FF2E63" 
  }
];

export default function EventsDetail() {
  return (
    <section className="py-60 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-[10vw] font-black tracking-tighter uppercase leading-[0.8] mb-40">
          The <span className="text-slate-200">Execution</span><br/>Archives
        </h2>
        
        <div className="space-y-40">
          {details.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col md:flex-row items-start gap-20 border-b border-slate-100 pb-20"
            >
              <div className="text-4xl font-mono font-black text-slate-100">0{i + 1}</div>
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.5em]" style={{ color: item.accent }}>
                  {item.category} // {item.date}
                </span>
                <h3 className="text-7xl font-black uppercase tracking-tighter mt-4 group-hover:italic transition-all duration-500">
                  {item.title}
                </h3>
              </div>
              <div className="max-w-md">
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
                <div className="mt-8 h-1 w-0 bg-black group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}