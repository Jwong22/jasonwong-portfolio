import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-card-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm font-mono">
          © 2026 Jason Wong · Built with Next.js · Hosted on AWS
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Jwong22" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="GitHub">
            <FiGithub size={16} />
          </a>
          <a href="https://www.linkedin.com/in/jason-wong-b76788232/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="LinkedIn">
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
