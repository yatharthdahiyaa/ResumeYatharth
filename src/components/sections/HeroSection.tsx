import { motion } from "framer-motion";
import { Download, FolderOpen, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pepper grid-pattern">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, hsl(180 85% 45% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(180 85% 45% / 0.05) 0%, transparent 50%)'
          }}
        />
        {/* Subtle scan line effect */}
        <div className="absolute inset-0 scan-line" />
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-accent/50 to-transparent" />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-salt/5 border border-silver/20 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent" />
            </span>
            <span className="text-sm font-mono text-salt/80 tracking-wide">
              <span className="text-tech-accent">status:</span> open_to_work
            </span>
            <Zap className="w-3.5 h-3.5 text-tech-accent" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-salt mb-6 tracking-tight font-display"
          >
            IT Engineer
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-silver/40" />
            <Terminal className="w-4 h-4 text-tech-accent" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-silver/40" />
          </motion.div>

          {/* Specializations as tech tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {["Industry 4.0", "IoT", "Data Acquisition", "Embedded Systems"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="px-4 py-2 bg-salt/5 border border-silver/20 text-sm text-salt/70 font-mono tracking-wide hover:border-tech-accent/50 hover:text-tech-accent transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg sm:text-xl text-salt/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building intelligent systems that bridge the gap between industrial
            hardware and modern software.{" "}
            <span className="text-tech-accent font-medium">
              Transforming raw data into actionable insights.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group bg-salt text-pepper hover:bg-salt/90 font-medium px-8"
              >
                <FolderOpen className="w-5 h-5 mr-2 transition-transform group-hover:rotate-6" />
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                size="lg"
                className="border-silver/30 text-salt hover:bg-salt/10 hover:border-tech-accent/50 group font-medium px-8"
              >
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-24 pt-8 border-t border-silver/10 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "4+", label: "Projects" },
              { value: "5+", label: "Technologies" },
              { value: "2026", label: "Graduating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="text-center group"
              >
                <p className="text-3xl sm:text-4xl font-bold text-salt font-display group-hover:text-tech-accent transition-colors duration-300">{stat.value}</p>
                <p className="text-xs sm:text-sm text-smoke mt-2 uppercase tracking-[0.2em] font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
