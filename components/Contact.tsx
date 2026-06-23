"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-mono text-sm mb-4"
        >
          04. What&apos;s Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Let&apos;s Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted text-lg mb-4"
        >
          I&apos;m open to discussing cloud architecture, migration projects,
          or opportunities where I can help build secure and scalable infrastructure.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted text-sm mb-10 flex items-center justify-center gap-2"
        >
          <FiMapPin size={14} />
          Kuala Lumpur, Malaysia · UTC+8
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="mailto:jasonwongchuinhao@gmail.com"
            className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Send Me an Email
          </a>
          <a
            href="https://www.linkedin.com/in/jason-wong-b76788232/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-card-border rounded-lg font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
          >
            Connect on LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-8 text-muted"
        >
          <a href="https://github.com/Jwong22" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/jason-wong-b76788232/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:jasonwongchuinhao@gmail.com" className="hover:text-primary transition-colors" aria-label="Email">
            <FiMail size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
