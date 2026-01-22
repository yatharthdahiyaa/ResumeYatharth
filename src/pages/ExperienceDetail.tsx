import { motion } from "framer-motion";
import { ArrowLeft, Award, Users, Target, Lightbulb, Calendar, MapPin, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const highlights = [
  {
    icon: Target,
    title: "Project Leadership",
    description: "Leading end-to-end development of industrial IoT solutions from concept to deployment.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Coordinating with cross-functional teams including hardware engineers and domain experts.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description: "Exploring cutting-edge technologies in Industry 4.0 and developing novel solutions.",
  },
  {
    icon: Award,
    title: "Technical Excellence",
    description: "Maintaining high standards in code quality, documentation, and system architecture.",
  },
];

const responsibilities = [
  "System architecture design and technical decision-making",
  "Hardware-software integration and protocol implementation",
  "Documentation, reporting, and stakeholder communication",
  "Research methodology and validation of results",
];

const ExperienceDetail = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
        <div className="section-container">
          <div className="flex items-center h-16 lg:h-20">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-primary to-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Experience & Leadership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 font-display">
              PSCST Capstone Project Lead
            </h1>
            <div className="flex flex-wrap gap-4 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                2025 – 2026
              </span>
              <span className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Punjab State Council for Science and Technology
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Punjab, India
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Overview</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As the Capstone Project Lead for the Punjab State Council for Science and Technology (PSCST) initiative, I am responsible for designing and implementing an industrial-grade data acquisition and monitoring system.
              </p>
              <p>
                This role involves coordinating research activities, managing project timelines, and ensuring the successful integration of hardware and software components to meet industry standards.
              </p>
              <p>
                The project focuses on developing real-time monitoring solutions that bridge the gap between traditional industrial equipment and modern IoT infrastructure, enabling predictive maintenance and operational efficiency improvements.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Key Responsibilities</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border"
                >
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-8">Highlights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-colors"
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
      </section>

      {/* CTA */}
      <section className="section-padding bg-card">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Want to learn more?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Feel free to reach out if you'd like to discuss this project or explore collaboration opportunities.
            </p>
            <Button
              size="lg"
              onClick={() => navigate("/#contact")}
              className="gap-2"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceDetail;
