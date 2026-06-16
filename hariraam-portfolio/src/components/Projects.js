import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLayers } from "react-icons/fi";

const projects = [
  {
    title: "Job Portal System",
    description:
      "A full-stack Job Portal web application that connects job seekers and recruiters. Features include user authentication, job posting, job applications, profile management, and responsive UI design.",
    tags: ["HTML", "CSS", "JavaScript" ],
    github: "https://github.com/HariraamOx7/job-portal",
    status: "live",
    color: "#6C63FF",
  },
];

const techColors = {
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  "Node.js": "#339933",
  "Express.js": "#9CA3AF",
  MongoDB: "#47A248",
  Python: "#3776AB",
  React: "#61DAFB",
  AI: "#6C63FF",
  NLP: "#EC4899",
  ML: "#FF6F00",
  "Data Analysis": "#00D4FF",
  Flask: "#000000",
  WebSocket: "#8B5CF6",
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
      className="w-full h-1"
      style={{
        background: `linear-gradient(90deg, ${project.color}, transparent)`,
      }}
    />

    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl"
          style={{
            background: `${project.color}20`,
            border: `1px solid ${project.color}40`,
          }}
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

      <p className="mb-5 text-sm leading-relaxed text-slate-400">
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
              border: `1px solid ${
                techColors[tag] || "#6C63FF"
              }30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub Link Only */}
      <div className="flex gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm transition-all duration-200 rounded-lg text-slate-300 hover:text-white bg-white/5 hover:bg-white/10"
        >
          <FiGithub size={14} />
          GitHub
        </a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="relative py-28">
    <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-[#6C63FF]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="px-6 mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-[#6C63FF] font-mono text-sm mb-3 tracking-widest uppercase">
          03 — Projects
        </p>

        <h2 className="text-4xl font-bold text-white font-poppins md:text-5xl">
          What I've <span className="gradient-text">Built</span>
        </h2>
      </motion.div>

      {/* Main Projects */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
