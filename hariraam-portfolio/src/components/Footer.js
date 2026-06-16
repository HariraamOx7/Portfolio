import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: FiGithub, href: "https://github.com/HariraamOx7", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/hariraam-b-a29737256/", label: "LinkedIn" },
  { icon: SiLeetcode, href: "https://leetcode.com/u/hariraam/", label: "LeetCode" },
  { icon: FiMail, href: "mailto:hariraam341@gmail.com", label: "Email" },
];

const navLinks = ["Home", "About", "Skills", "Projects", "Profiles", "Education", "Contact"];

const Footer = () => (
  <footer className="relative border-t border-[#1A1A3E] pt-16 pb-8">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6C63FF]/40 to-transparent" />

    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 mb-12">
        {/* Brand */}
        <div>
          <div className="font-poppins font-black text-2xl mb-3">
            <span className="gradient-text">HB</span>
            <span className="text-slate-500 font-light text-base ml-1">/ portfolio</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
            Built with passion for AI, ML, and Web Development. Always learning, always building.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-sm mb-4 uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() =>
                    document
                      .querySelector(`#${link.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="text-slate-400 hover:text-[#6C63FF] text-sm transition-colors duration-200"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-poppins font-semibold text-white text-sm mb-4 uppercase tracking-wide">
            Get In Touch
          </h4>
          <a
            href="mailto:hariraam341@gmail.com"
            className="text-slate-400 hover:text-[#6C63FF] text-sm transition-colors duration-200 block mb-2"
          >
            hariraam341@gmail.com
          </a>
          <div className="flex gap-3 mt-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                whileHover={{ y: -3, scale: 1.1 }}
                className="w-9 h-9 rounded-lg border border-[#1A1A3E] hover:border-[#6C63FF]/50 flex items-center justify-center text-slate-400 hover:text-[#6C63FF] transition-all duration-200"
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1A1A3E] mb-6" />

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>© 2026 HARIRAAM B. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          Made with <FiHeart size={13} className="text-[#FF6584]" /> using React & Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
