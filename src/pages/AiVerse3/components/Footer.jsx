export default function Footer() {
  return (
    <footer className="py-20 bg-[#FCFCFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-light tracking-tighter text-slate-900">
            AI<span className="font-serif italic text-blue-400">Verse</span> 3.0
          </h3>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-2">
            Vaagdevi College of Engineering
          </p>
        </div>

        <div className="flex gap-12 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <a href="#origin" className="hover:text-blue-400 transition-colors">Vision</a>
          <a href="#timeline" className="hover:text-blue-400 transition-colors">Timeline</a>
          <a href="#synapse" className="hover:text-blue-400 transition-colors">Synapse</a>
        </div>

        <div className="text-right hidden md:block">
          <p className="text-[10px] text-slate-300 leading-relaxed uppercase">
            Bollikunta, Warangal<br/>
            Telangana 506005
          </p>
        </div>
      </div>
    </footer>
  );
}