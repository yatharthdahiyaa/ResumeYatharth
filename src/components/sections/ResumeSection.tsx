import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Download, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-primary" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-accent" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Download My Resume
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8">
            Get a comprehensive overview of my skills, experience, and projects
            in a professional PDF format.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl">
              <Download className="w-5 h-5" />
              Download PDF
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-primary-foreground hover:border-slate-500"
            >
              <Eye className="w-5 h-5" />
              View Online
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
