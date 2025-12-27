// import { motion } from 'framer-motion';
// import { AIVERSE_DATA } from '../content';

// export default function Schedule() {
//   return (
//     <section className="py-40 bg-white relative">
//       <div className="max-w-4xl mx-auto px-6 relative">
//         {/* The Central Path Line */}
//         <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-slate-100" />
        
//         {AIVERSE_DATA.sessions.map((session, i) => (
//           <motion.div 
//             key={i}
//             initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className={`flex items-center mb-32 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-12`}
//           >
//             <div className={`w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
//               <span className="text-4xl font-black text-slate-900 uppercase tracking-tighter block mb-2">{session.topic}</span>
//               <p className="text-[#38BDF8] font-mono text-[10px] uppercase font-black tracking-widest">{session.lead} // 350 Pioneers</p>
//             </div>
//             <div className="z-10 w-12 h-12 rounded-full bg-white border-4 border-[#ADFF2F] shadow-xl flex items-center justify-center font-black text-[10px]">
//               {session.date.split('-')[0]}
//             </div>
//             <div className="w-1/2" />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }