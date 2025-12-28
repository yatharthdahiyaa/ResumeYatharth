import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cpu, Database, Globe, Layers, Zap } from "lucide-react";

const interests = [
  { icon: Layers, label: "Industry 4.0" },
  { icon: Cpu, label: "IoT Systems" },
  { icon: Database, label: "Data Acquisition" },
  { icon: Zap, label: "Embedded Systems" },
  { icon: Globe, label: "Web Dashboards" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              About Me
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Engineering Solutions for the Connected Industry
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am an IT Engineer with a focused expertise in bridging the gap
                between industrial systems and modern software solutions. My
                work centers on creating robust, scalable systems that enable
                real-time data acquisition, monitoring, and control.
              </p>
              <p>
                With a Bachelor of Engineering in Information Technology, I
                specialize in developing end-to-end solutions that connect
                sensors, PLCs, and embedded devices to web-based dashboards and
                analytics platforms.
              </p>
              <p>
                My approach combines a deep understanding of industrial
                communication protocols with modern software development
                practices, ensuring that every system I build is both reliable
                and maintainable.
              </p>
            </div>

            {/* Education Badge */}
            <div className="mt-8 p-4 bg-secondary rounded-lg border border-border">
              <p className="text-sm font-medium text-muted-foreground">
                Academic Background
              </p>
              <p className="text-base font-semibold text-foreground mt-1">
                B.E. Information Technology
              </p>
              <p className="text-sm text-muted-foreground">Class of 2026</p>
            </div>
          </motion.div>

          {/* Right Column - Interests */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-primary rounded-2xl p-8 lg:p-10">
              <h3 className="text-xl font-semibold text-primary-foreground mb-6">
                Core Focus Areas
              </h3>
              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-navy-800 rounded-lg group hover:bg-navy-700 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <interest.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-base font-medium text-primary-foreground">
                      {interest.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
