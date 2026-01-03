import { motion } from "framer-motion";
import { Download, FolderOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-foreground">
      {/* Background */}
      <div className="absolute inset-0 bg-foreground">
        {/* Subtle gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 100%)'
          }}
        />
        {/* Blue accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-medium/20 rounded-full blur-[120px]" />
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-medium/50 to-transparent" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground/50 to-transparent" />

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Open to Opportunities Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-blue-medium/20 border border-blue-medium/40 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-light opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-light" />
            </span>
            <span className="text-sm font-medium text-blue-light uppercase tracking-[0.2em]">
              Open to Opportunities
            </span>
            <Sparkles className="w-3.5 h-3.5 text-blue-light" />
          </motion.div>

          {/* Name with styling */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-cream mb-6 tracking-tight font-serif"
          >
            IT Engineer
          </motion.h1>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-medium/60" />
            <div className="w-2 h-2 rotate-45 border border-blue-medium/60" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-medium/60" />
          </motion.div>

          {/* Specializations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            {["Industry 4.0", "IoT", "Data Acquisition", "Embedded Systems"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                className="px-4 py-1.5 bg-blue-medium/20 border border-blue-light/30 text-sm text-cream tracking-wider"
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
            className="text-lg sm:text-xl text-cream/70 mb-12 max-w-2xl mx-auto leading-relaxed italic"
          >
            Building intelligent systems that bridge the gap between industrial
            hardware and modern software.{" "}
            <span className="text-blue-light not-italic font-medium">
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
                variant="hero"
                size="xl"
                onClick={scrollToProjects}
                className="group bg-blue-medium hover:bg-blue-medium/90 text-cream"
              >
                <FolderOpen className="w-5 h-5 transition-transform group-hover:rotate-6" />
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-cream/30 text-cream hover:bg-cream/10 hover:text-cream hover:border-cream/50 group"
              >
                <Download className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-20 pt-8 border-t border-cream/15 grid grid-cols-3 gap-8 max-w-lg mx-auto"
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
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-blue-light font-serif">{stat.value}</p>
                <p className="text-xs sm:text-sm text-cream/50 mt-1 uppercase tracking-[0.15em]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
