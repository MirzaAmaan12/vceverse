import { motion } from "framer-motion";

export default function Register() {
  const inputStyles = `
    w-full bg-white/[0.03] border border-white/10 p-4 rounded-2xl outline-none transition-all 
    text-[#CBD5E1] focus:border-[#00F2FE] placeholder:text-slate-600 font-light
    focus:bg-white/[0.05] focus:shadow-[0_0_15px_rgba(0,242,254,0.1)]
  `;

  const labelStyles = "block text-[10px] font-mono uppercase tracking-[0.2em] text-[#00F2FE] mb-2 ml-1";

  return (
    <motion.section 
      id="register"
      className="relative min-h-screen px-6 py-20 md:px-24 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(circle at 50% 50%, #0B0B15 0%, #020205 100%)" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Decorative Nebula */}
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#00F2FE]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#8B5CF6]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">
            Secure Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F2FE] to-[#8B5CF6]">Slot</span>
          </h2>
          <p className="text-slate-400 font-mono text-xs tracking-[0.3em] uppercase">Enter the AI Verse Portal</p>
        </div>

        {/* Updated Registration Form Card */}
        <div className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-3xl shadow-2xl relative">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            
            {/* Full Name */}
            <div className="space-y-1">
              <label className={labelStyles}>Student Name *</label>
              <input type="text" placeholder="Enter your full name" required className={inputStyles} />
            </div>

            {/* Branch */}
            <div className="space-y-1">
              <label className={labelStyles}>Branch *</label>
              <input type="text" placeholder="e.g., CSE, ECE, EEE" required className={inputStyles} />
            </div>

            {/* Roll Number */}
            <div className="space-y-1">
              <label className={labelStyles}>Roll No *</label>
              <input type="text" placeholder="Enter your roll number" required className={inputStyles} />
            </div>

            {/* Section */}
            <div className="space-y-1">
              <label className={labelStyles}>Section *</label>
              <input type="text" placeholder="e.g., A, B, C" required className={inputStyles} />
            </div>

            {/* Gender Selection */}
            <div className="space-y-1">
              <label className={labelStyles}>Gender *</label>
              <select required className={`${inputStyles} appearance-none cursor-pointer`}>
                <option value="" className="bg-[#020205]">Select Gender</option>
                <option value="male" className="bg-[#020205]">Male</option>
                <option value="female" className="bg-[#020205]">Female</option>
                <option value="other" className="bg-[#020205]">Other</option>
              </select>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className={labelStyles}>Email *</label>
              <input type="email" placeholder="your.email@example.com" required className={inputStyles} />
            </div>

            {/* Mobile */}
            <div className="space-y-1">
              <label className={labelStyles}>Mobile *</label>
              <input type="tel" placeholder="10-digit mobile number" required className={inputStyles} />
            </div>

            {/* College Name */}
            <div className="space-y-1">
              <label className={labelStyles}>College Name *</label>
              <input type="text" placeholder="Enter your college name" required className={inputStyles} />
            </div>

            {/* Payment Method - Full Width */}
            <div className="md:col-span-2 space-y-1">
              <label className={labelStyles}>Payment Method *</label>
              <select required className={`${inputStyles} appearance-none cursor-pointer`}>
                <option value="" className="bg-[#020205]">Select Payment Method</option>
                <option value="upi" className="bg-[#020205]">UPI / G-Pay / PhonePe</option>
                <option value="cash" className="bg-[#020205]">On-spot Cash</option>
              </select>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="md:col-span-2 mt-4 py-5 text-sm font-black rounded-2xl bg-gradient-to-r from-[#00F2FE] to-[#8B5CF6] text-[#020205] hover:shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:scale-[1.01] active:scale-[0.98] transition-all uppercase tracking-[0.2em]"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}