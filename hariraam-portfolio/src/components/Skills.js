import React from "react";
import { motion } from "framer-motion";
import {
  SiPython, SiJavascript, SiC, SiHtml5, SiCss3, SiReact,
  SiNodedotjs, SiExpress, SiMysql, SiMongodb, SiGit,
  SiGithub, SiVisualstudiocode, SiPostman, SiTensorflow,
} from "react-icons/si";
import { FaJava, FaBrain } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";

const skillGroups = [
  {
    category: "Programming Languages",
    color: "#6C63FF",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "C", icon: SiC, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    ],
  },
  {
    category: "Web Development",
    color: "#00D4FF",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
    ],
  },
  {
    category: "Databases",
    color: "#FF6584",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    category: "AI & ML",
    color: "#F59E0B",
    skills: [
      { name: "Machine Learning", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Deep Learning", icon: FaBrain, color: "#EC4899" },
      { name: "Data Analysis", icon: MdOutlineAnalytics, color: "#00D4FF" },
      { name: "AI Fundamentals", icon: FaBrain, color: "#6C63FF" },
    ],
  },
  {
    category: "Tools",
    color: "#10B981",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.4 }}
    whileHover={{ y: -6, scale: 1.05 }}
    className="skill-card glass-card rounded-xl p-4 flex flex-col items-center gap-2 border border-[#1A1A3E] transition-all duration-300 cursor-default"
  >
    <skill.icon size={32} style={{ color: skill.color }} />
    <span className="text-xs text-slate-300 font-medium text-center leading-tight">
      {skill.name}
    </span>
  </motion.div>
);

const Skills = () => (
  <section id="skills" className="py-28 relative">
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
          02 — Skills
        </p>
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-xl">
          Technologies and tools I work with to build impactful solutions.
        </p>
      </motion.div>

      <div className="space-y-12">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-3 h-3 rounded-full"
                style={{ background: group.color }}
              />
              <h3 className="font-poppins font-semibold text-white text-lg">
                {group.category}
              </h3>
              <div className="flex-1 h-px bg-[#1A1A3E]" />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {group.skills.map((skill, si) => (
                <SkillCard key={skill.name} skill={skill} index={si + gi * 4} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
