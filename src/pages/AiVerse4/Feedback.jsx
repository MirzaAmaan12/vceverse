import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { supabase } from "../../supabase";

export default function Feedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const testimonials = [
    {
      name: "Rahul Verma",
      role: "AI Enthusiast",
      text: "AI VERSE 3.0 was an incredible experience. The workshops were a game changer.",
    },
    {
      name: "Sneha Reddy",
      role: "CSE Student",
      text: "The best technical event at Vaagdevi! The prompt engineering challenge was rewarding.",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear any previous status when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate message
    if (!formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please enter your feedback message.' });
      return;
    }

    // Validate email format if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert([
          {
            name: formData.name.trim() || null,
            email: formData.email.trim() || null,
            message: formData.message.trim(),
            event: 'AI-VERSE 4.0',
            created_at: new Date().toISOString()
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        setSubmitStatus({ type: 'error', message: 'Failed to submit feedback. Please try again.' });
      } else {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your feedback has been submitted successfully.' });
        // Clear form
        setFormData({ name: '', email: '', message: '' });
        // Clear success message after 3 seconds
        setTimeout(() => {
          setSubmitStatus({ type: '', message: '' });
        }, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSubmitStatus({ type: '', message: '' });
  };

  return (
    <motion.section 
      id="feedback"
      className="min-h-screen px-4 sm:px-6 py-16 sm:py-20 md:px-24 flex flex-col justify-center bg-[#050505] relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="mb-8 sm:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl text-[#7C5CFF] font-bold mb-3 sm:mb-4">Voices of AI VERSE</h2>
          <p className="text-gray-400 text-sm sm:text-lg">Hear from our previous participants.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-10 sm:mb-16">
          {testimonials.map((item, index) => (
            <div key={index} className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10">
              <p className="text-gray-300 italic mb-4 sm:mb-6 text-sm sm:text-base">"{item.text}"</p>
              <h4 className="text-white font-bold text-sm sm:text-base">{item.name}</h4>
              <p className="text-[#7C5CFF] text-[10px] sm:text-xs uppercase tracking-widest">{item.role}</p>
            </div>
          ))}
        </div>

        {/* INLINE FEEDBACK FORM */}
        <div className="max-w-2xl mx-auto">
          <div className="p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#111124] to-[#0A0B1A] border border-[#7C5CFF]/20">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Share Your Experience</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">We'd love to hear your thoughts about AI VERSE 4.0</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Name (optional)</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    disabled={isSubmitting}
                    className="w-full bg-black/40 border border-white/10 p-3 rounded-xl outline-none focus:border-[#7C5CFF] text-white text-sm placeholder:text-gray-600 transition-colors disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Email (optional)</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    className="w-full bg-black/40 border border-white/10 p-3 rounded-xl outline-none focus:border-[#7C5CFF] text-white text-sm placeholder:text-gray-600 transition-colors disabled:opacity-50"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-400 text-xs mb-1.5">
                  Feedback Message <span className="text-[#7C5CFF]">*</span>
                </label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share your experience, suggestions, or thoughts about the event..."
                  rows="4"
                  disabled={isSubmitting}
                  className="w-full bg-black/40 border border-white/10 p-3 rounded-xl outline-none focus:border-[#7C5CFF] text-white text-sm placeholder:text-gray-600 resize-none transition-colors disabled:opacity-50"
                  required
                ></textarea>
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-3 rounded-xl text-sm ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-red-500/20 text-red-400 border border-red-500/30'
                    }`}
                  >
                    {submitStatus.type === 'success' ? '✓ ' : '⚠ '}
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-[#7C5CFF] text-white font-bold py-3 px-6 rounded-xl hover:shadow-[0_0_20px_#7C5CFF] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Feedback'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}