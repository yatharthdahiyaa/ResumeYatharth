import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Database, Globe, Layers, Zap } from "lucide-react";

const interests = [
  { icon: Layers, label: "Industry 4.0", slug: "industry-4-0" },
  { icon: Cpu, label: "IoT Systems", slug: "iot-systems" },
  { icon: Database, label: "Data Acquisition", slug: "data-acquisition" },
  { icon: Zap, label: "Embedded Systems", slug: "embedded-systems" },
  { icon: Globe, label: "Web Dashboards", slug: "web-dashboards" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.05) 0%, transparent 70%)' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <motion.span 
              className="text-sm font-semibold text-accent uppercase tracking-widest inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              About Me
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {"Engineering Solutions for the Connected Industry".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.05 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
            <motion.div 
              className="space-y-4 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
            >
              {[
                "I am an IT Engineer with a focused expertise in bridging the gap between industrial systems and modern software solutions. My work centers on creating robust, scalable systems that enable real-time data acquisition, monitoring, and control.",
                "With a Bachelor of Engineering in Information Technology, I specialize in developing end-to-end solutions that connect sensors, PLCs, and embedded devices to web-based dashboards and analytics platforms.",
                "My approach combines a deep understanding of industrial communication protocols with modern software development practices, ensuring that every system I build is both reliable and maintainable."
              ].map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Education Badge with animation */}
            <motion.div 
              className="mt-8 p-4 bg-secondary rounded-lg border border-border relative overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              whileHover={{ 
                scale: 1.02,
                borderColor: "hsl(180 85% 45% / 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/interest/academic-background")}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <p className="text-sm font-medium text-muted-foreground relative z-10">
                Academic Background
              </p>
              <p className="text-base font-semibold text-foreground mt-1 relative z-10">
                B.E. Information Technology
              </p>
              <div className="flex items-center justify-between relative z-10">
                <p className="text-sm text-muted-foreground">Class of 2026</p>
                <span className="text-xs text-accent font-medium">Click to learn more →</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 80 }}
          >
            <motion.div 
              className="bg-primary rounded-2xl p-8 lg:p-10 relative overflow-hidden"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px hsl(180 85% 45% / 0.15)",
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated glow */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 rounded-full"
                style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.2) 0%, transparent 70%)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.h3 
                className="text-xl font-semibold text-primary-foreground mb-6 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                Core Focus Areas
              </motion.h3>
              
              <motion.div 
                className="space-y-4 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredInterest(index)}
                    onMouseLeave={() => setHoveredInterest(null)}
                    whileHover={{ 
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate(`/interest/${interest.slug}`)}
                    className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg group hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                      animate={hoveredInterest === index ? { 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                      } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={hoveredInterest === index ? { rotate: 360 } : { rotate: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <interest.icon className="w-6 h-6 text-accent" />
                      </motion.div>
                    </motion.div>
                    <div className="flex-1">
                      <motion.span 
                        className="text-base font-medium text-primary-foreground block"
                        animate={hoveredInterest === index ? { x: 5 } : { x: 0 }}
                      >
                        {interest.label}
                      </motion.span>
                      <motion.span
                        className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        Click to explore →
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
