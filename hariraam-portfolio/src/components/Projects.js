import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiLayers } from "react-icons/fi";

const projects = [
  {
    title: "Job Portal System",
    description:
      "A full-stack Job Portal web application that connects job seekers and recruiters. Features include user authentication, job posting, job applications, profile management, and responsive UI design.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/HariraamOx7/job-portal",
    live: "#",
    status: "live",
    color: "#6C63FF",
  },
];

const upcoming = [
  {
    title: "AI Chatbot App",
    description: "An intelligent conversational AI assistant powered by NLP.",
    tags: ["Python", "React", "AI", "NLP"],
    color: "#00D4FF",
  },
  {
    title: "ML Disease Predictor",
    description: "Machine learning model for early disease detection and prediction.",
    tags: ["Python", "ML", "Data Analysis", "Flask"],
    color: "#FF6584",
  },
  {
    title: "Real-time Code Editor",
    description: "Collaborative code editor with real-time sync and execution.",
    tags: ["React", "Node.js", "WebSocket", "MongoDB"],
    color: "#F59E0B",
  },
];

const techColors = {
  "HTML": "#E34F26", "CSS": "#1572B6", "JavaScript": "#F7DF1E",
  "Node.js": "#339933", "Express.js": "#9CA3AF", "MongoDB": "#47A248",
  "Python": "#3776AB", "React": "#61DAFB", "AI": "#6C63FF",
  "NLP": "#EC4899", "ML": "#FF6F00", "Data Analysis": "#00D4FF",
  "Flask": "#000000", "WebSocket": "#8B5CF6",
};

const ProjectCard = ({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    whileHover={{ y: -8 }}
    className="glass-card rounded-2xl overflow-hidden border border-[#1A1A3E] hover:border-[#6C63FF]/40 transition-all duration-300 group"
  >
    {/* Card top accent */}
    <div
      className="h-1 w-full"
      style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
    />

    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
        >
          <FiLayers style={{ color: project.color }} size={18} />
        </div>
        {project.status === "live" && (
          <span className="flex items-center gap-1.5 text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-2.5 py-1 rounded-full">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        )}
      </div>

      <h3 className="font-poppins font-bold text-xl text-white mb-3 group-hover:text-[#6C63FF] transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-mono"
            style={{
              background: `${techColors[tag] || "#6C63FF"}15`,
              color: techColors[tag] || "#6C63FF",
              border: `1px solid ${techColors[tag] || "#6C63FF"}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg transition-all duration-200"
        >
          <FiGithub size={14} /> GitHub
        </a>
        <a
          href={project.live}
          className="flex items-center gap-2 text-sm btn-primary px-4 py-2 rounded-lg text-white"
        >
          <FiExternalLink size={14} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

const UpcomingCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-card rounded-2xl p-6 border border-dashed border-[#1A1A3E] hover:border-[#6C63FF]/30 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-3 right-3 text-xs text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-full">
      Coming Soon
    </div>
    <div
      className="w-8 h-8 rounded-lg mb-4 flex items-center justify-center opacity-60"
      style={{ background: `${project.color}20` }}
    >
      <FiLayers style={{ color: project.color }} size={14} />
    </div>
    <h3 className="font-poppins font-semibold text-slate-300 mb-2">{project.title}</h3>
    <p className="text-slate-500 text-sm mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-1.5">
      {project.tags.map((tag) => (
        <span key={tag} className="text-xs text-slate-600 bg-slate-800/40 px-2 py-0.5 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-28 relative">
    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
          03 — Projects
        </p>
        <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white">
          What I've <span className="gradient-text">Built</span>
        </h2>
      </motion.div>

      {/* Main projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      {/* Upcoming */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h3 className="font-poppins font-semibold text-xl text-slate-300 mb-6 flex items-center gap-3">
          <span className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
          Upcoming Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcoming.map((p, i) => (
            <UpcomingCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
