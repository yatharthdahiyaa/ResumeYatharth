import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:engineer@example.com", label: "Email" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 border-t border-navy-700">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-lg font-bold text-primary-foreground tracking-tight"
            >
              <span className="text-accent">&lt;</span>
              Engineer
              <span className="text-accent">/&gt;</span>
            </a>
            <p className="text-sm text-slate-500 mt-2">
              IT Engineer | Industry 4.0 | IoT Specialist
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-navy-800 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
