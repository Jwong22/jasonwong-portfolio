"use client";

import { motion } from "framer-motion";
import { FiAward, FiCloud, FiShield, FiCode } from "react-icons/fi";

const highlights = [
  { icon: FiCloud, title: "Cloud Infrastructure", description: "Multi-account landing zones, VPC design, and high-availability architectures" },
  { icon: FiShield, title: "Security First", description: "GuardDuty, Security Hub, WAF, and compliance-driven deployments" },
  { icon: FiCode, title: "Infrastructure as Code", description: "Terraform-driven automation for repeatable, version-controlled infra" },
  { icon: FiAward, title: "AWS Certified ×6", description: "Solutions Architect, Security Specialty, Developer, SysOps, AI, and Cloud Practitioner" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } },
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 flex items-center gap-3"
          style={{ color: "var(--fg)" }}
        >
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg space-y-4 max-w-2xl mb-12 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          <p>
            I&apos;m a Cloud Engineer at{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>Galactic Network</span> in Kuala
            Lumpur, where I deploy secure, high-availability AWS infrastructures
            for enterprise customers across industries — from fintech and insurance
            to e-commerce and AI.
          </p>
          <p>
            My approach is security-first and automation-driven. Every environment
            I build comes with proper guardrails: centralized logging, threat
            detection, encryption, and compliance controls — all codified in
            Terraform so nothing is left to manual configuration.
          </p>
          <p>
            I graduated from{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>Asia Pacific University</span>{" "}
            with a Bachelor&apos;s in IT (Cloud Engineering), CGPA 3.72, and have since
            earned 6 AWS certifications while delivering production infrastructure
            for Malaysia&apos;s leading companies.
          </p>
        </motion.div>

        {/* Highlight cards with stagger */}
        <motion.div
          className="grid sm:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-5 rounded-lg transition-colors group cursor-default"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <item.icon className="text-primary mb-3 group-hover:scale-110 transition-transform duration-300" size={24} />
              <h3 className="font-semibold mb-1" style={{ color: "var(--fg)" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--muted)" }}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
