const schedule = [
  { day: "Day 1", date: "04 Nov", topic: "Generative AI", icon: "📅" },
  { day: "Day 2", date: "05 Nov", topic: "Next-Wave Web", icon: "📅" },
  { day: "Day 3", date: "06 Nov", topic: "Technical Quiz", icon: "📅" },
  { day: "Results", date: "06 Nov", topic: "Cultural Pulse", icon: "🏆" }
];

export default function Timeline() {
  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-widest">Timeline</h2>
      <div className="space-y-4">
        {schedule.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-xl">
            <div className="w-16 h-16 bg-red-50 rounded-xl flex items-center justify-center text-3xl">
              {item.icon}
            </div>
            <div>
              <p className="text-red-600 font-black text-[10px] uppercase tracking-widest">{item.day}</p>
              <h4 className="text-slate-900 text-xl font-black uppercase">{item.topic}</h4>
              <p className="text-slate-500 font-bold text-xs uppercase">{item.date} // 2024</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}