import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiCode,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: FiGithub, href: "https://github.com/HariraamOx7", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/hariraam-b-a29737256/",
    label: "LinkedIn",
  },
  {
    icon: SiLeetcode,
    href: "https://leetcode.com/u/hariraam/",
    label: "LeetCode",
  },
  { icon: FiMail, href: "mailto:hariraam341@gmail.com", label: "Email" },
];

const FloatingOrb = ({ style }) => (
  <div
    className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
    style={style}
  />
);

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
        ctx.fill();

        particles.slice(i + 1).forEach((p2) => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });

        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
      />

      {/* Glowing orbs */}
      <FloatingOrb
        style={{
          width: 500,
          height: 500,
          background: "#6C63FF",
          top: "-10%",
          right: "-5%",
        }}
      />
      <FloatingOrb
        style={{
          width: 400,
          height: 400,
          background: "#00D4FF",
          bottom: "10%",
          left: "-8%",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(108,99,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.3) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></span>
            <span className="text-sm text-slate-300 font-inter">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-poppins font-black text-5xl md:text-6xl lg:text-7xl leading-tight mb-4"
          >
            Hi, I'm{" "}
            <span className="gradient-text block">HARIRAAM B</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-poppins font-medium text-xl md:text-2xl text-[#00D4FF] mb-4"
          >
            CSE Student | AI &amp; ML Aspiring Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            Passionate about Artificial Intelligence, Machine Learning, Web
            Development, and Problem Solving.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-primary px-8 py-3 rounded-full font-semibold text-white text-sm flex items-center gap-2"
            >
              <FiCode size={16} />
              View Projects
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="btn-outline px-8 py-3 rounded-full font-semibold text-white text-sm flex items-center gap-2"
            >
              <FiMail size={16} />
              Contact Me
            </button>
            <a
              href="mailto:hariraam341@gmail.com?subject=Resume Request"
              className="btn-outline px-8 py-3 rounded-full font-semibold text-slate-300 text-sm flex items-center gap-2"
            >
              <FiDownload size={16} />
              Download Resume
            </a>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-[#6C63FF]/40 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6C63FF] hover:bg-[#6C63FF]/20 transition-all duration-300"
              >
                <s.icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Animated illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-shrink-0 hidden lg:block"
        >
          <div className="relative w-80 h-80">
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-[#6C63FF]/30"
            />
            {/* Middle ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-[#00D4FF]/20"
            />
            {/* Center */}
            <div className="absolute inset-16 rounded-full bg-gradient-to-br from-[#6C63FF]/20 to-[#00D4FF]/20 border border-[#6C63FF]/40 flex items-center justify-center">
              <span className="font-poppins font-black text-4xl gradient-text">
                HB
              </span>
            </div>
            {/* Orbiting dots */}
            {["AI", "ML", "JS", "PY"].map((tag, i) => {
              const angle = (i / 4) * Math.PI * 2;
              const r = 130;
              const x = Math.cos(angle) * r + 160;
              const y = Math.sin(angle) * r + 160;
              return (
                <motion.div
                  key={tag}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 12 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute"
                  style={{ left: x - 24, top: y - 24 }}
                >
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center text-xs font-bold text-[#6C63FF] border border-[#6C63FF]/40">
                    {tag}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-500">Scroll down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-slate-600 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#6C63FF] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
