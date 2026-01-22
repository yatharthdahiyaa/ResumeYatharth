import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Award, Users, Target, Lightbulb, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Project Leadership",
    description:
      "Leading end-to-end development of industrial IoT solutions from concept to deployment.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Coordinating with cross-functional teams including hardware engineers and domain experts.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description:
      "Exploring cutting-edge technologies in Industry 4.0 and developing novel solutions.",
  },
  {
    icon: Award,
    title: "Technical Excellence",
    description:
      "Maintaining high standards in code quality, documentation, and system architecture.",
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  return (
    <section id="experience" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Experience Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="cursor-pointer group"
            onClick={() => navigate("/experience")}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Experience & Leadership
              </span>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors">
              PSCST Capstone Project Lead
            </h2>
            <p className="text-sm text-muted-foreground mb-2">2025 – 2026</p>

            <div className="space-y-4 text-muted-foreground mt-6">
              <p>
                As the Capstone Project Lead for the Punjab State Council for
                Science and Technology (PSCST) initiative, I am responsible for
                designing and implementing an industrial-grade data acquisition
                and monitoring system.
              </p>
              <p>
                This role involves coordinating research activities, managing
                project timelines, and ensuring the successful integration of
                hardware and software components to meet industry standards.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mt-8 p-6 bg-secondary rounded-xl">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Key Responsibilities
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  System architecture design and technical decision-making
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Hardware-software integration and protocol implementation
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Documentation, reporting, and stakeholder communication
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Research methodology and validation of results
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="p-6 bg-background rounded-xl border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
