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
    <section id="projects" className="section-padding bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Real-world systems designed and built to solve complex industrial challenges.
          </p>
        </motion.div>

        {/* Projects Grid - Royal Square Cards */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative aspect-square bg-card/90 backdrop-blur-sm p-4 lg:p-6 border border-border transition-all duration-500 group overflow-hidden"
            >
              {/* Corner ornaments */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-accent/30" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-accent/30" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-accent/30" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-accent/30" />

              {/* Inner border */}
              <div className="absolute inset-4 border border-accent/10 pointer-events-none" />

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2 py-0.5 text-[9px] lg:text-[10px] font-semibold uppercase tracking-wider bg-accent/20 text-accent">
                    ★ Featured
                  </span>
                </div>
              )}

              {/* Project Number */}
              <div className="absolute top-4 left-4 text-4xl lg:text-5xl font-bold text-foreground/5 select-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 h-full flex flex-col pt-8">
                {/* Project Title */}
                <h3 className="text-sm lg:text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <p className="text-muted-foreground text-xs lg:text-sm mb-3 leading-relaxed line-clamp-2">
                  {project.problem}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1 lg:gap-1.5 mb-3">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] lg:text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Outcomes */}
                <div className="flex-1">
                  <ul className="space-y-1">
                    {project.outcomes.slice(0, 2).map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-[10px] lg:text-xs text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 pt-3 mt-auto border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-accent text-xs h-7 px-2"
                  >
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-accent text-xs h-7 px-2"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
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
