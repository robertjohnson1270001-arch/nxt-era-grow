import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Lightbulb, Users } from "lucide-react";

const values = [
  { icon: Eye, label: "Transparency", desc: "Clear reporting & honest communication" },
  { icon: Target, label: "ROI Focus", desc: "Every strategy tied to measurable results" },
  { icon: Lightbulb, label: "Innovation", desc: "Cutting-edge techniques & tools" },
  { icon: Users, label: "Partnership", desc: "We grow when you grow" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-coral text-sm font-semibold uppercase tracking-widest">About Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6">
              We Transform Businesses Into{" "}
              <span className="gradient-text">Brands</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              NxtEra Media, the Best Digital Marketing Company in Vizag, helps businesses build a strong online presence with affordable digital marketing services. From SEO, Social Media Marketing, Paid Ads, and Web Design to Content Creation, we craft strategies that boost visibility, generate leads, and drive growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a startup or an established business, NxtEra Media provides the roadmap to transform your brand digitally. We don't just market — we transform businesses into brands.
            </p>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                className="glass-card p-6 hover:border-coral/30 transition-colors group"
              >
                <v.icon size={28} className="text-coral mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold text-foreground mb-1">{v.label}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
