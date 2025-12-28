import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding bg-primary relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-sm font-semibold text-accent uppercase tracking-widest mb-4"
          >
            <Layers className="w-4 h-4" />
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            Real-world systems designed and built to solve complex industrial
            challenges with modern technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className={cn(
                "relative bg-navy-800/80 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border transition-all duration-500 group overflow-hidden",
                hoveredProject === project.title
                  ? "border-accent/40 shadow-2xl shadow-accent/10 -translate-y-1"
                  : "border-navy-700 hover:border-navy-600"
              )}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent rounded-full">
                    Featured
                  </span>
                </div>
              )}

              {/* Hover gradient overlay */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-500",
                  hoveredProject === project.title && "opacity-100"
                )}
              />

              {/* Project Number */}
              <div className="absolute top-6 left-6 text-6xl font-bold text-white/[0.03] select-none">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                  {project.problem}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                      className={cn(
                        "px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300",
                        hoveredProject === project.title
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "bg-navy-700 text-slate-300"
                      )}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Key Outcomes */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-accent" />
                    Key Outcomes
                  </p>
                  <ul className="space-y-2.5">
                    {project.outcomes.map((outcome, outcomeIndex) => (
                      <motion.li
                        key={outcome}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + outcomeIndex * 0.1 }}
                        className="flex items-center gap-3 text-sm text-slate-400"
                      >
                        <ArrowRight
                          className={cn(
                            "w-3.5 h-3.5 flex-shrink-0 transition-all duration-300",
                            hoveredProject === project.title
                              ? "text-accent translate-x-0.5"
                              : "text-accent/50"
                          )}
                        />
                        {outcome}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-navy-700/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-accent hover:bg-white/5 transition-all duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-400 hover:text-accent hover:bg-white/5 transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
