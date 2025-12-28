import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
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
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding bg-primary" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mt-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Real-world systems designed and built to solve complex industrial
            challenges with modern technology.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-navy-800 rounded-xl p-6 lg:p-8 border border-navy-700 hover:border-accent/30 transition-all duration-300 group"
            >
              {/* Project Title */}
              <h3 className="text-xl font-semibold text-primary-foreground mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              {/* Problem Statement */}
              <p className="text-slate-400 text-sm mb-5">{project.problem}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-navy-700 text-slate-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Key Outcomes */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-3">
                  Key Outcomes
                </p>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-center gap-2 text-sm text-slate-400"
                    >
                      <ArrowRight className="w-3 h-3 text-accent flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-navy-700">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-accent hover:bg-navy-700"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-accent hover:bg-navy-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Documentation
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
