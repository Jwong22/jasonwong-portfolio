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

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 flex items-center gap-3"
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
          <p className="text-muted text-lg">
            Cloud Analyst @{" "}
            <span className="text-foreground font-medium">Galactic Network Sdn Bhd</span>
            <span className="text-muted"> · April 2025 – Present</span>
          </p>
          <p className="text-muted text-sm mt-1">
            Delivering AWS infrastructure for enterprise clients across Malaysia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`p-6 rounded-lg border transition-all hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/5 ${
                project.highlight
                  ? "bg-card border-primary/30"
                  : "bg-card border-card-border hover:border-primary/30"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {project.client}
                </span>
                {project.highlight && (
                  <span className="text-xs text-primary">★ Featured</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mt-3 mb-2">
                {project.type}
              </h3>
              <p className="text-muted text-sm mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-background border border-card-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-lg border border-card-border bg-card"
        >
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <FiExternalLink className="text-primary" />
            Open Source Projects
          </h3>
          <div className="space-y-3">
            <a
              href="https://github.com/Jwong22/aws-landing-zone-project"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 rounded border border-card-border hover:border-primary/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium text-foreground">aws-landing-zone-project</span>
                <FiExternalLink className="text-muted" size={14} />
              </div>
              <p className="text-sm text-muted mt-1">
                Secure multi-account AWS Landing Zone built with Terraform — Organizations, SCPs, GuardDuty, Security Hub, centralized logging
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
