import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
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
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Technical Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit spanning from low-level embedded programming
            to high-level web development and industrial protocols.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
