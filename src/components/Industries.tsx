import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2, GraduationCap, ShoppingCart, Plane, UtensilsCrossed, Heart, Ticket, Briefcase,
} from "lucide-react";

const industries = [
  { icon: Building2, name: "Enterprise Services" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingCart, name: "Ecommerce" },
  { icon: Plane, name: "Travel & Tourism" },
  { icon: UtensilsCrossed, name: "Restaurants" },
  { icon: Heart, name: "Healthcare" },
  { icon: Ticket, name: "Events & Tickets" },
  { icon: Briefcase, name: "Business Consulting" },
];

const Industries = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="section-padding bg-muted/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral text-sm font-semibold uppercase tracking-widest">Industries</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Industries We{" "}
            <span className="gradient-text">Work For</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="glass-card p-6 text-center group hover:border-coral/40 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <ind.icon size={32} className="text-coral mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-display font-semibold text-foreground text-sm">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
