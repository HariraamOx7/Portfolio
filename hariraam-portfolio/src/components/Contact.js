import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail, FiLinkedin, FiGithub, FiSend, FiUser, FiMessageSquare,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "hariraam341@gmail.com",
    href: "mailto:hariraam341@gmail.com",
    color: "#EA4335",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "hariraam-b-a29737256",
    href: "https://www.linkedin.com/in/hariraam-b-a29737256/",
    color: "#0A66C2",
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "HariraamOx7",
    href: "https://github.com/HariraamOx7",
    color: "#ffffff",
  },
  {
    icon: SiLeetcode,
    label: "LeetCode",
    value: "hariraam",
    href: "https://leetcode.com/u/hariraam/",
    color: "#FFA116",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "sent"

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate send
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/30 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 top-1/2 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
            07 — Contact
          </p>
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl">
            Have an idea, opportunity, or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-poppins font-semibold text-xl text-white mb-6">
              Reach out directly
            </h3>

            <div className="space-y-4 mb-10">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 glass-card rounded-xl p-4 border border-[#1A1A3E] hover:border-[#6C63FF]/30 transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${link.color}15`,
                      border: `1px solid ${link.color}30`,
                    }}
                  >
                    <link.icon size={18} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{link.label}</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass-card rounded-2xl p-5 border border-green-500/20">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 font-semibold text-sm">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                Currently looking for internships, freelance projects, and full-time roles in AI/ML and Web Development.
              </p>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-2xl p-8 border border-[#1A1A3E]">
              <h3 className="font-poppins font-semibold text-xl text-white mb-6">
                Send a message
              </h3>

              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
                    Name
                  </label>
                  <div className="relative">
                    <FiUser
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      size={15}
                    />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full bg-[#0A0A1A] border border-[#1A1A3E] focus:border-[#6C63FF]/60 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
                    Email
                  </label>
                  <div className="relative">
                    <FiMail
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500"
                      size={15}
                    />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-[#0A0A1A] border border-[#1A1A3E] focus:border-[#6C63FF]/60 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
                    Message
                  </label>
                  <div className="relative">
                    <FiMessageSquare
                      className="absolute left-3.5 top-3.5 text-slate-500"
                      size={15}
                    />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-[#0A0A1A] border border-[#1A1A3E] focus:border-[#6C63FF]/60 rounded-xl pl-10 pr-4 py-3 text-sm text-slate-200 placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "sending" || !form.name || !form.email || !form.message}
                  className="w-full btn-primary py-3.5 rounded-xl text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : status === "sent" ? (
                    <>✓ Message Sent!</>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Message
                    </>
                  )}
                </button>

                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-green-400 text-sm"
                  >
                    Thanks! I'll get back to you soon. 🚀
                  </motion.p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
