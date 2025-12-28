import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingElements = [
  { icon: "⚡", delay: 0, x: "10%", y: "20%" },
  { icon: "🔧", delay: 0.5, x: "85%", y: "30%" },
  { icon: "📊", delay: 1, x: "15%", y: "70%" },
  { icon: "🔌", delay: 1.5, x: "80%", y: "75%" },
];

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-primary to-navy-800" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Floating Elements */}
      {floatingElements.map((el, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20 hidden lg:block"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: el.delay, duration: 0.5 }}
        >
          <motion.span
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: el.delay }}
          >
            {el.icon}
          </motion.span>
        </motion.div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary via-primary/80 to-transparent" />

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm font-medium text-accent">
              Open to Opportunities
            </span>
            <Sparkles className="w-3.5 h-3.5 text-accent" />
          </motion.div>

          {/* Name with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-primary-foreground mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary-foreground via-slate-300 to-primary-foreground bg-clip-text">
              IT Engineer
            </span>
          </motion.h1>

          {/* Title with animated underline effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            {["Industry 4.0", "IoT", "Data Acquisition", "Embedded Systems"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-slate-300 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building intelligent systems that bridge the gap between industrial
            hardware and modern software.{" "}
            <span className="text-accent font-medium">
              Transforming raw data into actionable insights.
            </span>
          </motion.p>

          {/* CTA Buttons with enhanced styling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="hero"
                size="xl"
                onClick={scrollToProjects}
                className="group"
              >
                <FolderOpen className="w-5 h-5 transition-transform group-hover:rotate-6" />
                View Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="heroOutline"
                size="xl"
                className="border-slate-600 text-slate-300 hover:bg-white/10 hover:text-primary-foreground hover:border-slate-400 group"
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
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg mx-auto"
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
                transition={{ delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <p className="text-2xl sm:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                Scroll
              </span>
              <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-1 h-2 rounded-full bg-accent"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
