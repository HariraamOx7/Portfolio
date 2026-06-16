import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiExternalLink } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const profiles = [
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/hariraam/",
    color: "#FFA116",
    bg: "#FFA11615",
    border: "#FFA11630",
    stats: [
      { label: "Problems Solved", value: "100+" },
      { label: "Contest Rating", value: "Active" },
      { label: "Streak", value: "Growing" },
    ],
    description: "Solving DSA problems across arrays, trees, graphs, DP and more.",
  },
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/HariraamOx7",
    color: "#ffffff",
    bg: "#ffffff10",
    border: "#ffffff20",
    stats: [
      { label: "Repositories", value: "10+" },
      { label: "Contributions", value: "Active" },
      { label: "Projects", value: "Growing" },
    ],
    description: "Building and sharing open-source projects, tools, and experiments.",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/hariraam-b-a29737256/",
    color: "#0A66C2",
    bg: "#0A66C215",
    border: "#0A66C230",
    stats: [
      { label: "Connections", value: "Growing" },
      { label: "Posts", value: "Active" },
      { label: "Endorsements", value: "Building" },
    ],
    description: "Connecting with professionals and sharing my learning journey.",
  },
];

const CodingProfiles = () => (
  <section id="profiles" className="py-28 relative">
    <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFA116]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
          04 — Profiles
        </p>
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
          Coding <span className="gradient-text">Profiles</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl">
          Where I practice, build, and connect with the developer community.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {profiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl p-6 border transition-all duration-300 group block"
            style={{ borderColor: profile.border }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: profile.bg, border: `1px solid ${profile.border}` }}
              >
                <profile.icon size={24} style={{ color: profile.color }} />
              </div>
              <FiExternalLink
                size={16}
                className="text-slate-600 group-hover:text-slate-300 transition-colors"
              />
            </div>

            <h3
              className="font-poppins font-bold text-xl mb-2 group-hover:opacity-90 transition-opacity"
              style={{ color: profile.color }}
            >
              {profile.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {profile.description}
            </p>

            {/* Stats */}
            <div className="space-y-3">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-slate-500 text-xs">{stat.label}</span>
                  <span
                    className="text-sm font-semibold font-mono"
                    style={{ color: profile.color }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className="mt-6 text-center py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                background: profile.bg,
                color: profile.color,
                border: `1px solid ${profile.border}`,
              }}
            >
              View Profile →
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default CodingProfiles;
