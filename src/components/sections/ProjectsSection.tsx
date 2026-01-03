import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Layers } from "lucide-react";
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

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding bg-secondary relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/3 rounded-full blur-[100px]" />
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-sm font-mono font-medium text-accent uppercase tracking-widest mb-4"
          >
            <Layers className="w-4 h-4" />
            projects
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Real-world systems designed and built to solve complex industrial challenges.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="tech-card group"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-2 py-1 text-[10px] font-mono font-medium uppercase tracking-wider bg-accent/10 text-accent border border-accent/20 rounded">
                    featured
                  </span>
                </div>
              )}

              {/* Project Number */}
              <div className="absolute top-4 left-4 text-5xl lg:text-6xl font-bold text-foreground/[0.03] select-none font-display">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="relative z-10 h-full flex flex-col pt-8">
                {/* Project Title */}
                <h3 className="text-sm lg:text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 font-display">
                  {project.title}
                </h3>

                {/* Problem Statement */}
                <p className="text-muted-foreground text-xs lg:text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.problem}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-[10px] lg:text-xs font-mono bg-background text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Outcomes */}
                <div className="flex-1">
                  <ul className="space-y-1.5">
                    {project.outcomes.slice(0, 2).map((outcome) => (
                      <li
                        key={outcome}
                        className="flex items-start gap-2 text-[10px] lg:text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                        <span className="line-clamp-1">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex items-center gap-2 pt-4 mt-auto border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-accent text-xs h-8 px-3"
                  >
                    <Github className="w-3.5 h-3.5 mr-1.5" />
                    Code
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-accent text-xs h-8 px-3"
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
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
