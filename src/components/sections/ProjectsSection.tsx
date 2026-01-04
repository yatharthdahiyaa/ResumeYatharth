import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "CNC Data Logging System",
    problem:
      "Manufacturing plants needed real-time monitoring of CNC machine parameters for predictive maintenance and quality control.",
    stack: ["PLC", "OPC UA", "Python", "PostgreSQL", "React Dashboard"],
    outcomes: [
      "Reduced machine downtime by 35%",
      "Real-time data visualization",
      "Automated reporting system",
    ],
    github: "#",
    docs: "#",
    featured: true,
  },
  {
    title: "Industrial IoT Gateway",
    problem:
      "Legacy industrial equipment lacked connectivity to modern cloud infrastructure for remote monitoring.",
    stack: ["Raspberry Pi", "MODBUS", "RS-485", "MQTT", "Node.js"],
    outcomes: [
      "Connected 50+ legacy devices",
      "Edge computing capabilities",
      "Secure cloud integration",
    ],
    github: "#",
    docs: "#",
    featured: true,
  },
  {
    title: "Sensor Data Acquisition System",
    problem:
      "Research lab required high-frequency sensor data collection with sub-millisecond precision.",
    stack: ["STM32", "C/C++", "ESP32", "WebSocket", "Chart.js"],
    outcomes: [
      "1kHz sampling rate achieved",
      "Web-based real-time visualization",
      "SD card data logging",
    ],
    github: "#",
    docs: "#",
    featured: false,
  },
  {
    title: "Embedded Communication Module",
    problem:
      "Remote monitoring stations needed reliable cellular connectivity for environmental sensor data transmission.",
    stack: ["STM32", "Quectel Module", "AT Commands", "MQTT", "AWS IoT"],
    outcomes: [
      "99.5% uptime achieved",
      "Low power consumption",
      "OTA firmware updates",
    ],
    github: "#",
    docs: "#",
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 right-0 w-96 h-96 rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.08) 0%, transparent 70%)' }}
          animate={{
            x: [0, -30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full"
          style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.05) 0%, transparent 70%)' }}
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-sm font-mono font-medium text-accent uppercase tracking-widest mb-4"
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Layers className="w-4 h-4" />
            </motion.div>
            projects
          </motion.span>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Work
          </motion.h2>
          <motion.p 
            className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Real-world systems designed and built to solve complex industrial challenges.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-2 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
              className="tech-card group relative"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                animate={hoveredProject === project.title ? {
                  boxShadow: [
                    "0 0 20px hsl(180 85% 45% / 0.1)",
                    "0 0 40px hsl(180 85% 45% / 0.2)",
                    "0 0 20px hsl(180 85% 45% / 0.1)",
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Featured Badge with animation */}
              {project.featured && (
                <motion.div 
                  className="absolute top-4 right-4 z-20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                >
                  <motion.span 
                    className="px-2 py-1 text-[10px] font-mono font-medium uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 rounded flex items-center gap-1"
                    animate={{ 
                      borderColor: ["hsl(180 85% 45% / 0.2)", "hsl(180 85% 45% / 0.5)", "hsl(180 85% 45% / 0.2)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-3 h-3" />
                    featured
                  </motion.span>
                </motion.div>
              )}

              {/* Project Number with parallax effect */}
              <motion.div 
                className="absolute top-4 left-4 text-5xl lg:text-6xl font-bold text-foreground/[0.03] select-none font-display"
                animate={hoveredProject === project.title ? { 
                  opacity: 0.08,
                  scale: 1.1,
                } : { 
                  opacity: 0.03,
                  scale: 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {String(index + 1).padStart(2, "0")}
              </motion.div>

              <div className="relative z-10 h-full flex flex-col pt-8">
                {/* Project Title */}
                <motion.h3 
                  className="text-sm lg:text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 font-display"
                  animate={hoveredProject === project.title ? { x: 5 } : { x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                {/* Problem Statement */}
                <p className="text-muted-foreground text-xs lg:text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.problem}
                </p>

                {/* Tech Stack with stagger animation */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 3).map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 + techIndex * 0.05 }}
                      whileHover={{ 
                        scale: 1.1, 
                        backgroundColor: "hsl(180 85% 45% / 0.1)",
                        transition: { duration: 0.2 }
                      }}
                      className="px-2 py-1 text-[10px] lg:text-xs font-mono bg-background text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Key Outcomes */}
                <div className="flex-1">
                  <ul className="space-y-1.5">
                    {project.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                      <motion.li
                        key={outcome}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 + outcomeIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start gap-2 text-[10px] lg:text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <motion.span 
                          className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0"
                          animate={hoveredProject === project.title ? { 
                            scale: [1, 1.5, 1],
                          } : {}}
                          transition={{ duration: 0.5, delay: outcomeIndex * 0.1 }}
                        />
                        <span className="line-clamp-1">{outcome}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Links with slide-in animation */}
                <motion.div 
                  className="flex items-center gap-2 pt-4 mt-auto border-t border-border"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-accent text-xs h-8 px-3 group/btn"
                    >
                      <motion.div
                        animate={hoveredProject === project.title ? { rotate: [0, -10, 10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <Github className="w-3.5 h-3.5 mr-1.5" />
                      </motion.div>
                      Code
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-muted-foreground hover:text-accent text-xs h-8 px-3"
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
