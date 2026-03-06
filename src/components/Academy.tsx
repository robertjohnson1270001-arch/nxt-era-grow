import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ArrowRight } from "lucide-react";

const courses = [
  "Digital Marketing Fundamentals",
  "Advanced SEO Techniques",
  "Social Media Mastery",
  "Content Creation & Strategy",
  "Google Ads & PPC",
  "Analytics & Data-Driven Marketing",
];

const Academy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academy" className="section-padding bg-muted/30">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-coral text-sm font-semibold uppercase tracking-widest">Digital Academy</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6">
              Learn Digital Marketing From{" "}
              <span className="gradient-text">Experts</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Master the skills that drive real business results. Our training programs are designed for aspiring marketers, entrepreneurs, and professionals who want to stay ahead in the digital world.
            </p>
            <a href="#contact" className="gradient-bg text-primary-foreground px-6 py-3 rounded-xl font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity group">
              Enroll Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-3"
          >
            {courses.map((course, i) => (
              <motion.div
                key={course}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                className="glass-card p-4 flex items-center gap-4 hover:border-coral/40 transition-colors group cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                  <BookOpen size={18} className="text-coral" />
                </div>
                <span className="font-medium text-foreground group-hover:text-coral transition-colors">{course}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Academy;
