import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiLayers, FiCpu, FiGitBranch, FiAward } from "react-icons/fi";

const achievements = [
  {
    icon: FiCode,
    title: "DSA Problem Solver",
    description:
      "Solved 100+ Data Structures & Algorithms problems across LeetCode, covering arrays, trees, graphs, and dynamic programming.",
    color: "#FFA116",
    tag: "Algorithms",
  },
  {
    icon: FiLayers,
    title: "Full-Stack Developer",
    description:
      "Built complete Full-Stack Web Applications including a production-ready Job Portal connecting job seekers and recruiters.",
    color: "#6C63FF",
    tag: "Web Dev",
  },
  {
    icon: FiCpu,
    title: "AI & ML Explorer",
    description:
      "Exploring Artificial Intelligence and Machine Learning projects, building models and gaining practical experience in the field.",
    color: "#00D4FF",
    tag: "AI/ML",
  },
  {
    icon: FiGitBranch,
    title: "Active GitHub Contributor",
    description:
      "Consistently contributing to GitHub with personal projects, maintaining repositories, and adopting best coding practices.",
    color: "#10B981",
    tag: "Open Source",
  },
];

const Achievements = () => (
  <section id="achievements" className="py-28 relative">
    <div className="absolute left-0 top-1/2 w-80 h-80 bg-[#10B981]/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
          05 — Achievements
        </p>
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
          My <span className="gradient-text">Milestones</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl">
          Key highlights from my learning journey and technical growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 border border-[#1A1A3E] hover:border-[#6C63FF]/30 transition-all duration-300 flex gap-5"
          >
            {/* Icon */}
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{
                background: `${item.color}15`,
                border: `1px solid ${item.color}30`,
              }}
            >
              <item.icon size={24} style={{ color: item.color }} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-poppins font-bold text-white text-lg leading-tight">
                  {item.title}
                </h3>
                <span
                  className="ml-3 text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{
                    background: `${item.color}15`,
                    color: item.color,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  {item.tag}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trophy banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 glass-card rounded-2xl p-6 border border-[#6C63FF]/20 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
      >
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C63FF] to-[#00D4FF] flex items-center justify-center flex-shrink-0">
          <FiAward size={24} className="text-white" />
        </div>
        <div>
          <p className="font-poppins font-bold text-white text-lg mb-1">
            More Achievements Incoming
          </p>
          <p className="text-slate-400 text-sm">
            Continuously learning, building, and growing. This list will keep expanding — stay tuned!
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Achievements;
