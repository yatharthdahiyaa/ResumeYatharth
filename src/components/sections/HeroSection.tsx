import { motion } from "framer-motion";
import { Download, FolderOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary aged-paper">
      {/* Vintage Sepia Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sepia-900 via-sepia-800 to-sepia-700" />
        {/* Aged paper texture */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Vignette effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(30, 20, 10, 0.4) 100%)'
          }}
        />
        {/* Warm amber glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[100px]" />
        {/* Bottom border ornament */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sepia-800 to-transparent" />

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Open to Opportunities Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-amber-500/15 border border-amber-500/30 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            <span className="text-sm font-medium text-amber-400 uppercase tracking-[0.2em]">
              Open to Opportunities
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </motion.div>

          {/* Name with Vintage styling */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-cream-100 mb-6 tracking-tight font-serif"
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
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/50" />
            <div className="w-2 h-2 rotate-45 border border-amber-500/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/50" />
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
                className="px-4 py-1.5 bg-sepia-700/50 border border-cream-300/20 text-sm text-cream-300 tracking-wider"
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
            className="text-lg sm:text-xl text-cream-400 mb-12 max-w-2xl mx-auto leading-relaxed italic"
          >
            Building intelligent systems that bridge the gap between industrial
            hardware and modern software.{" "}
            <span className="text-amber-400 not-italic font-medium">
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
                className="group bg-amber-500 hover:bg-amber-600 text-sepia-950"
              >
                <FolderOpen className="w-5 h-5 transition-transform group-hover:rotate-6" />
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-cream-300/30 text-cream-300 hover:bg-cream-100/10 hover:text-cream-100 hover:border-cream-300/50 group"
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
            className="mt-20 pt-8 border-t border-cream-300/15 grid grid-cols-3 gap-8 max-w-lg mx-auto"
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
                <p className="text-2xl sm:text-3xl font-bold text-amber-400 font-serif">{stat.value}</p>
                <p className="text-xs sm:text-sm text-cream-500 mt-1 uppercase tracking-[0.15em]">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};