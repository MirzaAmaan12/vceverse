import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { supabase } from "../../supabase";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  // 🔍 DEBUG: confirm env vars are loaded (remove later)
  console.log(
    "URL:", import.meta.env.VITE_SUPABASE_URL,
    "KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY
  );

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
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (submitStatus.message) {
      setSubmitStatus({ type: "", message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter your feedback message.",
      });
      return;
    }

    if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    try {
      const { error } = await supabase.from("feedback").insert([
        {
          name: formData.name.trim() || null,
          email: formData.email.trim() || null,
          message: formData.message.trim()
        }
      ]);

      if (error) {
        console.error("Supabase error:", error);
        setSubmitStatus({ type: "error", message: error.message });
      } else {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your feedback has been submitted successfully.",
        });

        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setSubmitStatus({ type: "", message: "" });
        }, 3000);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="feedback"
      className="min-h-screen px-4 sm:px-6 py-16 md:px-24 flex flex-col justify-center bg-[#050505]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl text-[#7C5CFF] font-bold mb-4">
            Voices of AI VERSE
          </h2>
          <p className="text-gray-400">
            Hear from our previous participants.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/5 border border-white/10"
            >
              <p className="text-gray-300 italic mb-6">"{item.text}"</p>
              <h4 className="text-white font-bold">{item.name}</h4>
              <p className="text-[#7C5CFF] text-xs uppercase tracking-widest">
                {item.role}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#111124] to-[#0A0B1A] border border-[#7C5CFF]/20">
            <h3 className="text-2xl font-bold text-white mb-2">
              Share Your Experience
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              We'd love to hear your thoughts about AI VERSE 4.0
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  disabled={isSubmitting}
                  className="bg-[#0a0a1a] border border-white/20 p-3 rounded-xl text-white placeholder:text-gray-500 focus:border-[#7C5CFF] focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  disabled={isSubmitting}
                  className="bg-[#0a0a1a] border border-white/20 p-3 rounded-xl text-white placeholder:text-gray-500 focus:border-[#7C5CFF] focus:outline-none transition-colors"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your feedback..."
                rows="4"
                disabled={isSubmitting}
                className="bg-[#0a0a1a] border border-white/20 p-3 rounded-xl text-white placeholder:text-gray-500 focus:border-[#7C5CFF] focus:outline-none resize-none transition-colors"
                required
              />

              <AnimatePresence>
                {submitStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`p-3 rounded-xl text-sm ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#7C5CFF] py-3 rounded-xl font-bold text-white disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
