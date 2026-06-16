import React from "react";
import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiBook, FiTarget } from "react-icons/fi";

const stats = [
  { value: "AI/ML", label: "Focus Area" },
  { value: "Full-Stack", label: "Web Dev" },
  { value: "DSA", label: "Problem Solving" },
  { value: "Open Source", label: "Contributor" },
];

const highlights = [
  { icon: FiUser, text: "CSE Student with AI/ML focus" },
  { icon: FiMapPin, text: "Based in India" },
  { icon: FiBook, text: "Lifelong learner & builder" },
  { icon: FiTarget, text: "Goal-driven engineer" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const About = () => (
  <section id="about" className="py-28 relative overflow-hidden">
    <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={0}
        className="mb-16"
      >
        <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
          01 — About
        </p>
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
          Who I <span className="gradient-text">Am</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-slate-300 text-lg leading-relaxed mb-6"
          >
            I am a <span className="text-[#6C63FF] font-semibold">Computer Science and Engineering</span> student
            with a strong interest in <span className="text-[#00D4FF] font-semibold">Artificial Intelligence</span>,{" "}
            <span className="text-[#00D4FF] font-semibold">Machine Learning</span>, and Full-Stack Development.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-slate-400 text-base leading-relaxed mb-8"
          >
            I enjoy building real-world applications, solving algorithmic challenges, and continuously
            learning emerging technologies. My goal is to develop innovative AI-powered solutions
            that create meaningful impact.
          </motion.p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlights.map((h, i) => (
              <motion.div
                key={h.text}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={3 + i}
                className="flex items-center gap-3 glass-card rounded-xl px-4 py-3"
              >
                <h.icon className="text-[#6C63FF] flex-shrink-0" size={18} />
                <span className="text-slate-300 text-sm">{h.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Stats + Card */}
        <div className="space-y-6">
          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 1}
                className="glass-card rounded-2xl p-6 text-center border border-[#6C63FF]/10 hover:border-[#6C63FF]/40 transition-all duration-300"
              >
                <p className="font-poppins font-bold text-2xl gradient-text-2 mb-1">
                  {s.value}
                </p>
                <p className="text-slate-400 text-xs font-medium uppercase tracking-wide">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Profile card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={5}
            className="glass-card rounded-2xl p-6 border border-[#6C63FF]/10"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center font-poppins font-black text-xl text-white">
                HB
              </div>
              <div>
                <p className="font-poppins font-semibold text-white">HARIRAAM B</p>
                <p className="text-[#6C63FF] text-sm">AI & ML Aspiring Engineer</p>
              </div>
            </div>
            <div className="bg-[#0A0A1A] rounded-xl p-4 font-mono text-sm">
              <span className="text-[#FF6584]">const</span>{" "}
              <span className="text-[#00D4FF]">developer</span>{" "}
              <span className="text-white">=</span>{" "}
              <span className="text-white">{"{"}</span>
              <br />
              <span className="text-slate-500 ml-4">// Hariraam B</span>
              <br />
              <span className="text-[#6C63FF] ml-4">passion</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"AI + Code"</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-[#6C63FF] ml-4">status</span>
              <span className="text-white">: </span>
              <span className="text-green-400">"Building"</span>
              <br />
              <span className="text-white">{"}"}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
