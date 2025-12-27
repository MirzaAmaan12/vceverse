import { motion } from 'framer-motion';
import { CLASSIC_DATA } from '../content';

export default function Philosophy() {
  return (
    <section className="py-40 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {CLASSIC_DATA.vision.map((item, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className={`p-12 rounded-[3rem] bg-gradient-to-br ${item.theme} border border-white shadow-sm`}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6 tracking-tight">{item.title}</h3>
            <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}