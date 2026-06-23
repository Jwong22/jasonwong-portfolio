"use client";

import { motion } from "framer-motion";
import { FiAward, FiCloud, FiShield, FiCode } from "react-icons/fi";

const highlights = [
  { icon: FiCloud, title: "Cloud Infrastructure", description: "Multi-account landing zones, VPC design, and high-availability architectures" },
  { icon: FiShield, title: "Security First", description: "GuardDuty, Security Hub, WAF, and compliance-driven deployments" },
  { icon: FiCode, title: "Infrastructure as Code", description: "Terraform-driven automation for repeatable, version-controlled infra" },
  { icon: FiAward, title: "AWS Certified ×6", description: "Solutions Architect, Security Specialty, Developer, SysOps, AI, and Cloud Practitioner" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 flex items-center gap-3"
        >
          <span className="text-primary font-mono text-xl">01.</span>
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted text-lg space-y-4 max-w-2xl mb-12"
        >
          <p>
            I&apos;m a Cloud Engineer at{" "}
            <span className="text-foreground font-medium">Galactic Network</span> in Kuala
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
            <span className="text-foreground font-medium">Asia Pacific University</span>{" "}
            with a Bachelor&apos;s in IT (Cloud Engineering), CGPA 3.72, and have since
            earned 6 AWS certifications while delivering production infrastructure
            for Malaysia&apos;s leading companies.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-lg bg-card border border-card-border hover:border-primary/40 transition-colors group"
            >
              <item.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={24} />
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
