import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Search, Share2, Globe, FileText, Palette, MousePointerClick, BarChart3, Megaphone,
} from "lucide-react";

const services = [
  { icon: Search, title: "SEO", desc: "Rank higher on search engines and drive organic traffic to your business." },
  { icon: Share2, title: "Social Media Marketing", desc: "Build your brand presence across all major social platforms." },
  { icon: Globe, title: "Website Designing", desc: "Stunning, responsive websites that convert visitors into customers." },
  { icon: FileText, title: "Content Marketing", desc: "Engaging content that tells your story and builds authority." },
  { icon: Palette, title: "Graphic Designing", desc: "Eye-catching visuals that make your brand unforgettable." },
  { icon: MousePointerClick, title: "PPC Advertising", desc: "Targeted paid campaigns that maximize your ROI." },
  { icon: BarChart3, title: "Digital Marketing Strategy", desc: "Data-driven strategies tailored to your business goals." },
  { icon: Megaphone, title: "Brand Building", desc: "Transform your business identity into a powerful brand." },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral text-sm font-semibold uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Everything You Need to{" "}
            <span className="gradient-text">Dominate Online</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="glass-card p-6 group hover:border-coral/40 transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
