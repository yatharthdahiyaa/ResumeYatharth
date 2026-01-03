import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  Cpu,
  Network,
  LayoutDashboard,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Software",
    icon: Code,
    skills: ["C / C++", "Python", "SQL / PL-SQL", "JavaScript", "OOP Concepts"],
  },
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    skills: [
      "ESP32",
      "Arduino (Uno, Mega, Nano)",
      "STM32",
      "Analog & Digital Sensors",
      "Data Logging Systems",
    ],
  },
  {
    title: "Industrial & Communication",
    icon: Network,
    skills: [
      "OPC UA",
      "MODBUS",
      "RS-232 / RS-485",
      "Ethernet",
      "Industrial IoT Protocols",
    ],
  },
  {
    title: "Web & Dashboards",
    icon: LayoutDashboard,
    skills: [
      "Web Development",
      "Dashboard Design",
      "Data Visualization",
      "API Integration",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git / GitHub", "CubeIDE", "Oracle / MySQL", "Linux / Windows"],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
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
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-sm font-mono font-medium text-accent uppercase tracking-widest mb-4"
          >
            &lt;skills /&gt;
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning from low-level embedded programming
            to high-level web development and industrial protocols.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="tech-card group cursor-default"
            >
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center mb-4 mx-auto rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors duration-300"
                  animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                >
                  <category.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                </motion.div>

                {/* Title */}
                <h3 className="text-sm lg:text-base font-semibold text-foreground text-center mb-4 font-display group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-border mx-auto mb-4 group-hover:bg-accent/50 transition-colors duration-300" />

                {/* Skills List */}
                <ul className="space-y-2 flex-1">
                  {category.skills.slice(0, 4).map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300" />
                      <span className="truncate font-mono">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
