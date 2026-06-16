import React from "react";
import { motion } from "framer-motion";
import { FiBook, FiCalendar, FiMapPin } from "react-icons/fi";

const educationData = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    cgpa: 7.98,
    period: "2024 – 2028",
    location: "Tamil Nadu, India",
    status: "Ongoing",
    highlights: [
      "Specialization in AI & Machine Learning",
      "Full-Stack Web Development projects",
      "Data Structures & Algorithms",
      "Database Management Systems",
    ],
    color: "#6C63FF",
  },
];

const Education = () => (
  <section id="education" className="py-28 relative">
    <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
          06 — Education
        </p>
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
          Academic <span className="gradient-text">Background</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 timeline-line hidden sm:block" />

        {educationData.map((edu, i) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="relative sm:pl-20 mb-8"
          >
            {/* Circle on timeline */}
            <div
              className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center border-2 z-10"
              style={{
                background: "#0A0A1A",
                borderColor: edu.color,
                boxShadow: `0 0 20px ${edu.color}40`,
              }}
            >
              <FiBook style={{ color: edu.color }} size={18} />
            </div>

            {/* Card */}
            <div
              className="glass-card rounded-2xl p-6 border transition-all duration-300 hover:border-[#6C63FF]/40"
              style={{ borderColor: `${edu.color}20` }}
            >
              {/* Status badge */}
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full mb-3 inline-block"
                    style={{
                      background: `${edu.color}15`,
                      color: edu.color,
                      border: `1px solid ${edu.color}30`,
                    }}
                  >
                    {edu.status}
                  </span>
                  <h3 className="font-poppins font-bold text-xl text-white">
                    {edu.degree}
                  </h3>
                  <p
                    className="font-semibold text-base mt-1"
                    style={{ color: edu.color }}
                  >
                    {edu.field}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-5 text-sm text-slate-400">
                <span className="flex items-center gap-1.5">
                  <FiBook size={13} className="text-slate-500" />
                  {edu.cgpa}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiCalendar size={13} className="text-slate-500" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMapPin size={13} className="text-slate-500" />
                  {edu.location}
                </span>
              </div>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-2">
                {edu.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-sm text-slate-300">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: edu.color }}
                    />
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Future node */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative sm:pl-20"
        >
          <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center border-2 border-dashed border-slate-600 z-10 bg-[#0A0A1A]">
            <span className="text-slate-500 text-lg font-bold">?</span>
          </div>
          <div className="glass-card rounded-2xl p-5 border border-dashed border-slate-700">
            <p className="text-slate-400 text-sm font-medium">
              Next Chapter — <span className="text-[#6C63FF]">Masters / Industry Role in AI & ML</span>
            </p>
            <p className="text-slate-600 text-xs mt-1">The journey continues...</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
