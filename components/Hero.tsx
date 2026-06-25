"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { useEffect, useState } from "react";

const stats = [
  { value: "6", label: "AWS Certifications" },
  { value: "30+", label: "Servers Migrated" },
  { value: "7+", label: "Enterprise Projects" },
];

const roles = [
  "secure cloud infrastructure.",
  "multi-account landing zones.",
  "automated Terraform pipelines.",
  "enterprise AWS solutions.",
];

function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 30 : 60;

    if (!isDeleting && text === current) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <span className="text-primary">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
}

function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          initial={{
            x: `${20 + i * 15}%`,
            y: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [`${30 + (i % 3) * 20}%`, `${20 + (i % 3) * 20}%`, `${30 + (i % 3) * 20}%`],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-10"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent)" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <FloatingParticles />

      <div className="max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          className="inline-block px-4 py-2 rounded-full text-sm font-mono mb-8"
          style={{ border: "1px solid var(--border)", backgroundColor: "var(--surface)", color: "var(--muted)" }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ☁️
          </motion.span>{" "}
          Cloud Engineer · Kuala Lumpur, Malaysia
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          style={{ color: "var(--fg)" }}
        >
          Jason Wong
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl font-bold mb-6 h-[2.5rem] md:h-[3rem]"
          style={{ color: "var(--muted)" }}
        >
          I build <Typewriter />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          I help businesses migrate, scale, and secure their workloads on AWS.
          Specializing in multi-account landing zones, infrastructure as code,
          and cloud security — all built with Terraform and automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#experience"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 py-3 rounded-lg font-medium"
            style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
            whileHover={{ scale: 1.05, borderColor: "var(--color-primary)" }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-6 mb-16"
        >
          {[
            { href: "https://github.com/Jwong22", icon: FiGithub, label: "GitHub" },
            { href: "https://www.linkedin.com/in/jason-wong-b76788232/", icon: FiLinkedin, label: "LinkedIn" },
            { href: "mailto:jasonwongchuinhao@gmail.com", icon: FiMail, label: "Email" },
          ].map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-primary transition-colors"
              style={{ color: "var(--muted)" }}
              aria-label={link.label}
              whileHover={{ scale: 1.2, y: -2 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <link.icon size={22} />
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 + i * 0.15, type: "spring" }}
            >
              <div className="text-2xl md:text-3xl font-bold text-primary">
                {stat.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ color: "var(--muted)" }}
        >
          <FiArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
