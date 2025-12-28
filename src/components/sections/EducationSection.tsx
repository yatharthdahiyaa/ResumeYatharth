import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen, Award } from "lucide-react";

const coursework = [
  "Data Structures & Algorithms",
  "Computer Networks",
  "Database Management Systems",
  "Operating Systems",
  "Microprocessors & Microcontrollers",
  "Digital Signal Processing",
  "Software Engineering",
  "Computer Architecture",
];

const certifications = [
  {
    title: "Industrial IoT Fundamentals",
    issuer: "Coursera / Industry Partner",
    year: "2024",
  },
  {
    title: "Embedded Systems Design",
    issuer: "NPTEL",
    year: "2024",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2023",
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-background" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-xl p-8 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    B.E. Information Technology
                  </h3>
                  <p className="text-sm text-muted-foreground">2022 – 2026</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                Pursuing a Bachelor of Engineering in Information Technology
                with a focus on industrial computing, embedded systems, and
                data-driven applications.
              </p>

              {/* Relevant Coursework */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                    Relevant Coursework
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-xl p-8 border border-border h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Certifications
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Professional Development
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-4 bg-secondary rounded-lg"
                  >
                    <h4 className="text-base font-medium text-foreground">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </span>
                      <span className="text-xs font-medium text-accent">
                        {cert.year}
                      </span>
                    </div>
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
