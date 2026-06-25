"use client";

import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    client: "AI Company",
    type: "MAP Mobilize — Landing Zone",
    description:
      "Deployed AWS Control Tower Landing Zone with multi-account structure, organizational units, and security guardrails. Configured centralized logging, GuardDuty, Security Hub, and IAM Access Analyzer.",
    tech: ["Control Tower", "GuardDuty", "Security Hub", "IAM Access Analyzer"],
    highlight: true,
  },
  {
    client: "FinTech Company",
    type: "Landing Zone & Migration",
    description:
      "Deployed AWS Control Tower with multi-account structure and migrated 10+ servers. Configured Transit Gateway, VPC networking, and centralized security baseline across all accounts.",
    tech: ["Control Tower", "Transit Gateway", "VPC", "Migration"],
    highlight: true,
  },
  {
    client: "Software Company",
    type: "Application Migration (20+ Servers)",
    description:
      "Migrated 20+ servers and containers to AWS, achieving 10–15% cost savings by relocating workloads from Singapore to KL region. Implemented WAF, Security Hub, and encryption at rest.",
    tech: ["EC2", "Containers", "CloudFront", "WAF", "Cost Optimization"],
    highlight: false,
  },
  {
    client: "Conglomerate",
    type: "New Application Hosting",
    description:
      "Deployed secure, scalable AWS foundation with full-stack infrastructure including ALB, NLB, CloudFront, WAF, and disaster recovery capabilities for data residency compliance.",
    tech: ["ALB", "NLB", "CloudFront", "WAF", "DR"],
    highlight: false,
  },
  {
    client: "E-Commerce Company",
    type: "Application Migration",
    description:
      "Deployed production and staging environments with RDS PostgreSQL (read replica), ALB, CloudFront, WAF, and automated backup. Full migration from on-premise to AWS.",
    tech: ["RDS PostgreSQL", "Read Replica", "CloudFront", "ALB"],
    highlight: false,
  },
  {
    client: "Insurance Company",
    type: "Network Migration",
    description:
      "Deployed AWS networking infrastructure including VPC, subnets, security groups, and EC2 instances. Configured CloudTrail, AWS Config, and Security Hub baseline.",
    tech: ["VPC", "CloudTrail", "AWS Config", "Security Hub"],
    highlight: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 5 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 flex items-center gap-3"
          style={{ color: "var(--fg)" }}
        >
          <span className="text-primary font-mono text-xl">02.</span>
          Project Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            Cloud Analyst @{" "}
            <span className="font-medium" style={{ color: "var(--fg)" }}>Galactic Network Sdn Bhd</span>
            <span style={{ color: "var(--muted)" }}> · April 2025 – Present</span>
          </p>
          <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
            Delivering AWS infrastructure for enterprise clients across Malaysia
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -4, boxShadow: "0 10px 40px rgba(59,130,246,0.1)" }}
              className="p-6 rounded-lg transition-all"
              style={{
                backgroundColor: "var(--surface)",
                border: project.highlight ? "1px solid var(--color-primary)" : "1px solid var(--border)",
              }}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {project.client}
                </span>
                {project.highlight && (
                  <motion.span
                    className="text-xs text-primary"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ★ Featured
                  </motion.span>
                )}
              </div>
              <h3 className="text-lg font-semibold mt-3 mb-2" style={{ color: "var(--fg)" }}>
                {project.type}
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded"
                    style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--muted)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80 }}
          className="mt-12 p-6 rounded-lg"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: "var(--fg)" }}>
            <FiExternalLink className="text-primary" />
            Open Source Projects
          </h3>
          <motion.a
            href="https://github.com/Jwong22/aws-landing-zone-project"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded transition-colors"
            style={{ border: "1px solid var(--border)" }}
            whileHover={{ x: 4 }}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium" style={{ color: "var(--fg)" }}>aws-landing-zone-project</span>
              <FiExternalLink size={14} style={{ color: "var(--muted)" }} />
            </div>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
              Secure multi-account AWS Landing Zone built with Terraform — Organizations, SCPs, GuardDuty, Security Hub, centralized logging
            </p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
