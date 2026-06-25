"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-5"
          style={{ background: "var(--color-primary)" }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-sm mb-4"
        >
          04. What&apos;s Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "var(--fg)" }}
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg mb-4"
          style={{ color: "var(--muted)" }}
        >
          I&apos;m open to discussing cloud architecture, migration projects,
          or opportunities where I can help build secure and scalable infrastructure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm mb-10 flex items-center justify-center gap-2"
          style={{ color: "var(--muted)" }}
        >
          <FiMapPin size={14} />
          Kuala Lumpur, Malaysia · UTC+8
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="mailto:jasonwongchuinhao@gmail.com"
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59,130,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Me an Email
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/jason-wong-b76788232/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-medium"
            style={{ border: "1px solid var(--border)", color: "var(--fg)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect on LinkedIn
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-8"
        >
          {[
            { href: "https://github.com/Jwong22", icon: FiGithub, label: "GitHub" },
            { href: "https://www.linkedin.com/in/jason-wong-b76788232/", icon: FiLinkedin, label: "LinkedIn" },
            { href: "mailto:jasonwongchuinhao@gmail.com", icon: FiMail, label: "Email" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-primary transition-colors"
              style={{ color: "var(--muted)" }}
              aria-label={link.label}
              whileHover={{ scale: 1.3, y: -3 }}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
