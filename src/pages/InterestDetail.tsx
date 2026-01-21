import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Database, Globe, Layers, Zap, GraduationCap } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const interestData: Record<string, {
  icon: typeof Layers;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  technologies: string[];
  projects: { title: string; description: string }[];
}> = {
  "academic-background": {
    icon: GraduationCap,
    title: "Academic Background",
    subtitle: "B.E. Information Technology - Class of 2026",
    description: "A comprehensive foundation in computer science, software engineering, and information systems that forms the backbone of my technical expertise.",
    details: [
      "Pursuing Bachelor of Engineering in Information Technology with focus on industrial applications",
      "Strong foundation in data structures, algorithms, and software engineering principles",
      "Specialized coursework in embedded systems, network protocols, and database management",
      "Active participation in technical workshops and industry collaboration projects",
      "Research interests in IoT integration and real-time data processing systems"
    ],
    technologies: ["Python", "C/C++", "Java", "SQL", "MATLAB", "Data Structures", "Algorithms", "Operating Systems"],
    projects: [
      { title: "Database Management System", description: "Designed and implemented a relational database for inventory management" },
      { title: "Network Protocol Analysis", description: "Analyzed and documented various industrial communication protocols" },
      { title: "Algorithm Optimization", description: "Optimized sorting and searching algorithms for large datasets" }
    ]
  },
  "industry-4-0": {
    icon: Layers,
    title: "Industry 4.0",
    subtitle: "Smart Manufacturing & Digital Transformation",
    description: "Pioneering the fourth industrial revolution through interconnected systems, data analytics, and intelligent automation.",
    details: [
      "Implementation of cyber-physical systems for smart manufacturing environments",
      "Integration of IT and OT (Operational Technology) systems for seamless data flow",
      "Development of predictive maintenance solutions using machine learning",
      "Design of digital twin architectures for real-time simulation and monitoring",
      "Experience with industrial automation standards and protocols"
    ],
    technologies: ["OPC-UA", "MQTT", "Modbus", "Digital Twins", "PLC Programming", "SCADA", "MES Systems"],
    projects: [
      { title: "Smart Factory Dashboard", description: "Real-time monitoring system for manufacturing KPIs" },
      { title: "Predictive Maintenance System", description: "ML-based system to predict equipment failures" },
      { title: "Digital Twin Implementation", description: "Virtual representation of production line for optimization" }
    ]
  },
  "iot-systems": {
    icon: Cpu,
    title: "IoT Systems",
    subtitle: "Connected Devices & Edge Computing",
    description: "Building the foundation of connected ecosystems through innovative IoT architectures and edge computing solutions.",
    details: [
      "Design and deployment of end-to-end IoT solutions from sensors to cloud",
      "Experience with edge computing for real-time data processing",
      "Implementation of secure device communication protocols",
      "Expertise in sensor integration and data acquisition systems",
      "Development of IoT gateways for protocol translation and data aggregation"
    ],
    technologies: ["ESP32", "Raspberry Pi", "LoRaWAN", "Zigbee", "BLE", "AWS IoT", "Azure IoT Hub", "Node-RED"],
    projects: [
      { title: "Environmental Monitoring System", description: "IoT-based system for monitoring temperature, humidity, and air quality" },
      { title: "Smart Energy Meter", description: "Connected energy monitoring solution with real-time analytics" },
      { title: "Asset Tracking Solution", description: "GPS and BLE-based tracking system for industrial assets" }
    ]
  },
  "data-acquisition": {
    icon: Database,
    title: "Data Acquisition",
    subtitle: "Real-time Data Collection & Processing",
    description: "Capturing, processing, and transforming raw sensor data into actionable insights for industrial applications.",
    details: [
      "Design of high-frequency data acquisition systems for industrial sensors",
      "Implementation of time-series databases for efficient data storage",
      "Development of data pipelines for real-time analytics",
      "Experience with signal conditioning and noise reduction techniques",
      "Integration with various industrial protocols (Modbus, OPC, CAN)"
    ],
    technologies: ["InfluxDB", "TimescaleDB", "Apache Kafka", "Redis", "Python DAQ", "LabVIEW", "National Instruments"],
    projects: [
      { title: "High-Speed DAQ System", description: "Multi-channel data acquisition at 10kHz sampling rate" },
      { title: "Vibration Analysis Platform", description: "Real-time vibration monitoring for rotating machinery" },
      { title: "Process Data Historian", description: "Long-term storage and retrieval of industrial process data" }
    ]
  },
  "embedded-systems": {
    icon: Zap,
    title: "Embedded Systems",
    subtitle: "Firmware Development & Hardware Integration",
    description: "Creating intelligent, resource-efficient embedded solutions that power modern industrial applications.",
    details: [
      "Firmware development for microcontrollers (ARM Cortex, ESP32, STM32)",
      "Real-time operating system (RTOS) implementation and optimization",
      "Hardware-software co-design for embedded applications",
      "Low-power design techniques for battery-operated devices",
      "Development of custom communication protocols and drivers"
    ],
    technologies: ["C/C++", "FreeRTOS", "ARM Cortex", "STM32", "ESP-IDF", "Arduino", "PCB Design", "JTAG Debugging"],
    projects: [
      { title: "Custom IoT Gateway", description: "Multi-protocol gateway with FreeRTOS on STM32" },
      { title: "Battery Management System", description: "Smart BMS with cell balancing and monitoring" },
      { title: "Industrial Controller", description: "PLC-like controller for small-scale automation" }
    ]
  },
  "web-dashboards": {
    icon: Globe,
    title: "Web Dashboards",
    subtitle: "Real-time Visualization & Analytics",
    description: "Transforming complex industrial data into intuitive, real-time web-based visualizations for informed decision-making.",
    details: [
      "Development of responsive, real-time dashboards for industrial monitoring",
      "Implementation of WebSocket-based live data streaming",
      "Design of intuitive UX for complex data visualization",
      "Integration with time-series databases for historical analysis",
      "Creation of customizable, role-based dashboard interfaces"
    ],
    technologies: ["React", "TypeScript", "D3.js", "Chart.js", "WebSockets", "REST APIs", "GraphQL", "Tailwind CSS"],
    projects: [
      { title: "Factory Floor Dashboard", description: "Real-time monitoring of production metrics and KPIs" },
      { title: "Energy Management Portal", description: "Comprehensive energy consumption analytics platform" },
      { title: "Equipment Health Monitor", description: "Predictive maintenance dashboard with ML insights" }
    ]
  }
};

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const InterestDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const interest = slug ? interestData[slug] : null;
  
  if (!interest) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back Home
          </Button>
        </div>
      </div>
    );
  }

  const Icon = interest.icon;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.08) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-64 h-64 rounded-full"
        style={{ background: 'radial-gradient(circle, hsl(180 85% 45% / 0.05) 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Home</span>
          </motion.button>
          
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <Icon className="w-4 h-4 text-accent" />
            </div>
            <span className="font-semibold text-foreground hidden sm:block">{interest.title}</span>
          </motion.div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Icon className="w-10 h-10 text-accent" />
            </motion.div>
            
            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {interest.title}
            </motion.h1>
            
            <motion.p
              className="text-lg text-accent font-medium mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {interest.subtitle}
            </motion.p>
            
            <motion.p
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {interest.description}
            </motion.p>
          </motion.div>

          {/* Details Section */}
          <motion.section
            className="mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"
              variants={itemVariants}
            >
              <span className="w-2 h-8 bg-accent rounded-full" />
              Key Expertise
            </motion.h2>
            
            <div className="space-y-4">
              {interest.details.map((detail, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-4 bg-card rounded-lg border border-border hover:border-accent/30 transition-colors group"
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </motion.div>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Technologies Section */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.h2
              className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span className="w-2 h-8 bg-accent rounded-full" />
              Technologies & Tools
            </motion.h2>
            
            <motion.div
              className="flex flex-wrap gap-3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {interest.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  variants={itemVariants}
                  className="px-4 py-2 bg-accent/10 text-accent rounded-lg font-medium text-sm border border-accent/20 hover:bg-accent/20 transition-colors cursor-default"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.h2
              className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <span className="w-2 h-8 bg-accent rounded-full" />
              Related Projects
            </motion.h2>
            
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {interest.projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="p-6 bg-card rounded-xl border border-border hover:border-accent/30 transition-all group hover:shadow-[0_20px_40px_-15px_hsl(180_85%_45%/0.15)]"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => navigate("/#contact")}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8"
              >
                Let's Discuss This Further
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default InterestDetail;
