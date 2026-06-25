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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 flex items-center gap-3"
          style={{ color: "var(--fg)" }}
        >
          <span className="text-primary font-mono text-xl">03.</span>
          Skills & Certifications
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 80 }}
              className="p-6 rounded-lg"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                {group.category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={tagVariants}
                    whileHover={{ scale: 1.1, borderColor: "var(--color-primary)" }}
                    className="text-sm px-3 py-1.5 rounded-md cursor-default"
                    style={{ backgroundColor: "var(--bg)", border: "1px solid var(--border)", color: "var(--fg)" }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2" style={{ color: "var(--fg)" }}>
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FiAward className="text-primary" />
            </motion.span>
            AWS Certifications
          </h3>
          <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>6 active certifications across all AWS levels</p>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.code}
                variants={tagVariants}
                whileHover={{ y: -3, boxShadow: "0 8px 25px rgba(59,130,246,0.1)" }}
                className="p-4 rounded-lg cursor-default"
                style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono px-2 py-0.5 rounded ${
                    cert.level === "Specialty"
                      ? "bg-primary/20 text-primary-light"
                      : cert.level === "Associate"
                      ? "bg-primary/10 text-primary"
                      : ""
                  }`} style={cert.level === "Foundational" ? { backgroundColor: "var(--border)", color: "var(--muted)" } : {}}>
                    {cert.level}
                  </span>
                  <span className="text-xs font-mono" style={{ color: "var(--muted)" }}>{cert.code}</span>
                </div>
                <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                  {cert.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
