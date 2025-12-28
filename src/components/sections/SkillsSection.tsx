import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code,
  Cpu,
  Network,
  LayoutDashboard,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Programming & Software",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    skills: ["C / C++", "Python", "SQL / PL-SQL", "JavaScript", "OOP Concepts"],
  },
  {
    title: "Embedded & Hardware",
    icon: Cpu,
    color: "from-emerald-500 to-teal-500",
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
    color: "from-orange-500 to-amber-500",
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
    color: "from-violet-500 to-purple-500",
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
    color: "from-rose-500 to-pink-500",
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
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-sm font-semibold text-accent uppercase tracking-widest mb-4"
          >
            Technical Expertise
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            A comprehensive toolkit spanning from low-level embedded programming
            to high-level web development and industrial protocols.
          </p>
        </motion.div>

        {/* Skills Grid with enhanced cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={cn(
                "relative bg-card rounded-2xl p-6 border border-border transition-all duration-500 group cursor-default overflow-hidden",
                hoveredIndex === index
                  ? "shadow-xl shadow-accent/10 border-accent/30 -translate-y-1"
                  : "hover:shadow-lg"
              )}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  "absolute inset-0 opacity-0 transition-opacity duration-500 bg-gradient-to-br",
                  category.color,
                  hoveredIndex === index ? "opacity-[0.03]" : ""
                )}
              />

              {/* Category Header */}
              <div className="relative flex items-center gap-4 mb-6">
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                    hoveredIndex === index
                      ? `bg-gradient-to-br ${category.color}`
                      : "bg-accent/10"
                  )}
                  animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                >
                  <category.icon
                    className={cn(
                      "w-6 h-6 transition-colors duration-300",
                      hoveredIndex === index ? "text-white" : "text-accent"
                    )}
                  />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List with stagger animation */}
              <ul className="relative space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground group/item hover:text-foreground transition-colors"
                  >
                    <ChevronRight
                      className={cn(
                        "w-3.5 h-3.5 transition-all duration-200",
                        hoveredIndex === index ? "text-accent translate-x-0.5" : "text-accent/50"
                      )}
                    />
                    <span>{skill}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom accent line */}
              <motion.div
                className={cn("absolute bottom-0 left-0 h-0.5 bg-gradient-to-r", category.color)}
                initial={{ width: "0%" }}
                animate={{ width: hoveredIndex === index ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
