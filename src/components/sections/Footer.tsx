import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:engineer@example.com", label: "Email" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="section-container relative z-10 py-16 border-t border-navy-700">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div>
            <motion.a
              href="#"
              className="inline-block text-2xl font-bold text-primary-foreground tracking-tight"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-accent">&lt;</span>
              Engineer
              <span className="text-accent">/&gt;</span>
            </motion.a>
            <p className="text-slate-400 mt-4 text-sm leading-relaxed max-w-xs">
              IT Engineer specializing in Industry 4.0, IoT systems, and embedded
              solutions. Building bridges between industrial hardware and modern
              software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-slate-400 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent transition-colors text-sm inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-accent transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-primary-foreground uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <p>Punjab, India</p>
              <a
                href="mailto:engineer@example.com"
                className="block hover:text-accent transition-colors"
              >
                engineer@example.com
              </a>
              <a
                href="tel:+919876543210"
                className="block hover:text-accent transition-colors"
              >
                +91 98765 43210
              </a>
            </div>

            {/* Back to Top Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="mt-6 text-slate-400 hover:text-accent hover:bg-navy-800 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 transition-transform group-hover:-translate-y-0.5" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-800">
        <div className="section-container py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} All rights reserved.
            </p>
            <p className="text-sm text-slate-500 flex items-center gap-1.5">
              Built with
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
              using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
