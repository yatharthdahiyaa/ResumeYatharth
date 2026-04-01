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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="skills" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.05) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-sm font-mono font-medium text-accent uppercase tracking-widest mb-4"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              &lt;skills /&gt;
            </motion.span>
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {"Technical Expertise".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A comprehensive toolkit spanning from low-level embedded programming
            to high-level web development and industrial protocols.
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          onMouseMove={handleMouseMove}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="tech-card group cursor-default relative overflow-hidden"
            >
              {/* Spotlight Effect */}
              <div
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.06), transparent 40%)`,
                }}
              />

              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, hsl(180 85% 45% / 0.05) 0%, transparent 70%)',
                }}
              />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon with rotation animation */}
                <motion.div
                  className="w-12 h-12 flex items-center justify-center mb-4 mx-auto rounded-lg bg-secondary group-hover:bg-accent/10 transition-colors duration-300"
                  animate={hoveredIndex === index ? {
                    scale: 1.1,
                    rotate: [0, -5, 5, 0],
                  } : { scale: 1, rotate: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    animate={hoveredIndex === index ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <category.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors duration-300" />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-sm lg:text-base font-semibold text-foreground text-center mb-4 font-display group-hover:text-accent transition-colors duration-300"
                  animate={hoveredIndex === index ? { scale: 1.05 } : { scale: 1 }}
                >
                  {category.title}
                </motion.h3>

                {/* Animated Divider */}
                <motion.div
                  className="h-px bg-border mx-auto mb-4 group-hover:bg-accent/50 transition-colors duration-300"
                  animate={hoveredIndex === index ? { width: "80%" } : { width: "3rem" }}
                  transition={{ duration: 0.3 }}
                />

                {/* Skills List with stagger */}
                <ul className="space-y-2 flex-1">
                  {category.skills.slice(0, 4).map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1 + skillIndex * 0.05
                      }}
                      whileHover={{ x: 5, color: "hsl(180 85% 45%)", transition: { duration: 0.2 } }}
                      className="flex items-center gap-2 text-xs lg:text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <motion.span
                        className="w-1 h-1 rounded-full bg-accent/50 group-hover:bg-accent transition-colors duration-300"
                        animate={hoveredIndex === index ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      />
                      <span className="truncate font-mono">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
