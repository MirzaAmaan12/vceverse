import { motion } from 'framer-motion';

export default function Leadership() {
  const leaders = [
    { name: "Dr. V. Janaki", role: "HOD / Convener", label: "Executive Vision" },
    { name: "Sandeep Akkapelli", role: "Coordinator", label: "Operational Lead" },
    { name: "Prashanth R.", role: "Lead Dev", label: "Technical Design" }
  ];

  return (
    <section className="py-40 bg-white border-t border-slate-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-[1em] mb-12 block">Leadership</span>
        
        <div className="grid md:grid-cols-3 gap-16">
          {leaders.map((lead, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="group">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-50 to-slate-100 rounded-full mx-auto mb-8 flex items-center justify-center text-slate-300 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h4 className="text-xl font-medium text-slate-800 tracking-tight">{lead.name}</h4>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">{lead.role}</p>
              <div className="mt-4 text-[9px] font-bold text-blue-300 opacity-0 group-hover:opacity-100 transition-opacity">
                {lead.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}