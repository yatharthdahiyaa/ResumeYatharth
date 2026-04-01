import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  id: number;
  type: "work" | "education";
  title: string;
  organization: string;
  duration: string;
  location: string;
  description: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    title: "Capstone Project Lead",
    organization: "Punjab State Council for Science & Technology (PSCST)",
    duration: "2025 - Present",
    location: "Chandigarh, India",
    description: [
      "Leading the design and development of an industrial-grade data acquisition system.",
      "Coordinating end-to-end hardware-software integration for real-time monitoring.",
      "Managing project timelines and stakeholder communication for a state-level initiative.",
    ],
  },
  {
    id: 3,
    type: "work",
    title: "IoT Developer Intern",
    organization: "Tech Innovators Lab",
    duration: "Summer 2024",
    location: "Remote",
    description: [
      "Developed firmware for ESP32-based sensor nodes using FreeRTOS.",
      "Implemented MQTT communication for cloud data logging.",
      "Optimized power consumption for battery-operated devices.",
    ],
  },
];

const TimelineItem = ({ item, index }: { item: ExperienceItem; index: number }) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className={`flex gap-4 md:gap-8 mb-12 sm:mb-16 relative ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
      {/* Timeline Line (Mobile: hidden, Desktop: center) */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 transform">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background z-10" />
      </div>

      {/* Content Card */}
      <motion.div
        className={`w-full md:w-[calc(50%-2rem)] relative ${index % 2 === 0 ? "text-left" : "text-left md:text-right"}`}
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      >
        <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow group">
          <div className={`flex flex-col gap-2 mb-4 ${index % 2 === 0 ? "items-start" : "items-start md:items-end"}`}>
            <div className="flex items-center gap-2 text-accent text-sm font-medium uppercase tracking-wider">
              {item.type === "work" ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
              {item.type}
            </div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
              {item.title}
            </h3>
            <div className="text-lg font-medium text-muted-foreground">
              {item.organization}
            </div>
          </div>

          <div className={`flex flex-wrap gap-4 text-xs text-muted-foreground mb-6 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}>
            <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-full">
              <Calendar className="w-3.5 h-3.5" />
              {item.duration}
            </span>
            <span className="flex items-center gap-1.5 bg-secondary/50 px-2.5 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              {item.location}
            </span>
          </div>

          <ul className={`space-y-2.5 ${index % 2 === 0 ? "text-left" : "text-left md:text-right"}`}>
            {item.description.map((desc, i) => (
              <li key={i} className={`text-sm text-muted-foreground leading-relaxed flex items-start gap-2.5 ${index % 2 === 0 ? "flex-row" : "flex-row md:flex-row-reverse justify-end"}`}>
                <span className={`w-1.5 h-1.5 rounded-full bg-accent/60 mt-2 flex-shrink-0`} />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Mobile Timeline Line */}
      <div className="md:hidden absolute left-4 top-4 bottom-0 w-px bg-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-4 border-background z-10" />
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section-padding bg-background relative overflow-hidden" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-sm font-mono font-medium text-accent uppercase tracking-widest mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display">
            Experience & Education
          </h2>
        </motion.div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          {experienceData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
