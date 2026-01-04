import { motion } from "framer-motion";
import { Download, FolderOpen, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowPulse = {
  initial: { opacity: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pepper grid-pattern">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.15) 0%, transparent 70%)' }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.1) 0%, transparent 70%)' }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 30% 20%, hsl(180 85% 45% / 0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, hsl(180 85% 45% / 0.05) 0%, transparent 50%)'
          }}
        />
        {/* Subtle scan line effect */}
        <div className="absolute inset-0 scan-line" />
        {/* Animated bottom border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, hsl(180 85% 45% / 0.5), transparent)' }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal-style status with floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-salt/5 border border-silver/20 mb-8 backdrop-blur-sm"
          >
            <motion.span 
              className="relative flex h-2 w-2"
              {...glowPulse}
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tech-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tech-accent" />
            </motion.span>
            <span className="text-sm font-mono text-salt/80 tracking-wide">
              <span className="text-tech-accent">status:</span> open_to_work
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3.5 h-3.5 text-tech-accent" />
            </motion.div>
          </motion.div>

          {/* Title with letter animation */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 80 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold text-salt mb-6 tracking-tight font-display"
          >
            {"IT Engineer".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                className="inline-block"
                whileHover={{ 
                  scale: 1.1, 
                  color: "hsl(180 85% 45%)",
                  transition: { duration: 0.2 }
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          {/* Decorative line with glow */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <motion.div 
              className="h-px w-20 bg-gradient-to-r from-transparent to-silver/40"
              animate={{ width: [80, 100, 80] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Terminal className="w-4 h-4 text-tech-accent" />
            </motion.div>
            <motion.div 
              className="h-px w-20 bg-gradient-to-l from-transparent to-silver/40"
              animate={{ width: [80, 100, 80] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Specializations with staggered pop-in */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-10"
          >
            {["Industry 4.0", "IoT", "Data Acquisition", "Embedded Systems"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  borderColor: "hsl(180 85% 45%)",
                  boxShadow: "0 0 20px hsl(180 85% 45% / 0.3)",
                  transition: { duration: 0.2 }
                }}
                className="px-4 py-2 bg-salt/5 border border-silver/20 text-sm text-salt/70 font-mono tracking-wide cursor-default transition-all duration-300"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* Tagline with typing effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-salt/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Building intelligent systems that bridge the gap between industrial
            hardware and modern software.{" "}
            <motion.span 
              className="text-tech-accent font-medium inline-block"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Transforming raw data into actionable insights.
            </motion.span>
          </motion.p>

          {/* CTA Buttons with enhanced hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="group bg-salt text-pepper hover:bg-salt/90 font-medium px-8 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-tech-accent/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <FolderOpen className="w-5 h-5 mr-2 transition-transform group-hover:rotate-6" />
                View Projects
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }} 
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="border-silver/30 text-salt hover:bg-salt/10 hover:border-tech-accent/50 group font-medium px-8 relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-tech-accent/10 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row with counter animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-24 pt-8 border-t border-silver/10 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "4+", label: "Projects" },
              { value: "5+", label: "Technologies" },
              { value: "2026", label: "Graduating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.4 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                className="text-center group cursor-default"
              >
                <motion.p 
                  className="text-3xl sm:text-4xl font-bold text-salt font-display group-hover:text-tech-accent transition-colors duration-300"
                  {...floatingAnimation}
                >
                  {stat.value}
                </motion.p>
                <p className="text-xs sm:text-sm text-smoke mt-2 uppercase tracking-[0.2em] font-mono">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
