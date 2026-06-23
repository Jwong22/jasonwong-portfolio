"use client";

import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const skills = [
  {
    category: "Cloud Platform",
    items: ["AWS Organizations", "EC2", "S3", "RDS", "Lambda", "CloudFront", "VPC", "Transit Gateway", "ALB/NLB", "ElastiCache"],
  },
  {
    category: "Security",
    items: ["Security Hub", "GuardDuty", "WAF", "CloudTrail", "IAM", "AWS Config", "SCPs", "IAM Access Analyzer"],
  },
  {
    category: "IaC & Automation",
    items: ["Terraform", "CloudFormation", "Control Tower", "CI/CD", "GitLab", "GitHub Actions"],
  },
  {
    category: "Tools & OS",
    items: ["Linux", "Docker", "Git", "Bash", "Node.js", "Python"],
  },
];

const certifications = [
  { name: "Solutions Architect – Associate", code: "SAA-C03", level: "Associate" },
  { name: "Security – Specialty", code: "SCS-C02", level: "Specialty" },
  { name: "SysOps Administrator – Associate", code: "SOA-C02", level: "Associate" },
  { name: "Developer – Associate", code: "DVA-C02", level: "Associate" },
  { name: "AI Practitioner", code: "AIF-C01", level: "Foundational" },
  { name: "Cloud Practitioner", code: "CLF-C02", level: "Foundational" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="text-primary font-mono text-xl">03.</span>
          Skills & Certifications
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-lg bg-card border border-card-border"
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-md bg-background border border-card-border text-foreground hover:border-primary/40 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <FiAward className="text-primary" />
            AWS Certifications
          </h3>
          <p className="text-muted text-sm mb-6">6 active certifications across all AWS levels</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.code}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-4 rounded-lg bg-card border border-card-border hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                    cert.level === "Specialty"
                      ? "bg-primary/20 text-primary-light"
                      : cert.level === "Associate"
                      ? "bg-primary/10 text-primary"
                      : "bg-card-border text-muted"
                  }`}>
                    {cert.level}
                  </span>
                  <span className="text-xs text-muted font-mono">{cert.code}</span>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {cert.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
