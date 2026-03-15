import { useState } from "react";
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { ArrowRight, Sparkles } from "lucide-react";
import ConsultationDialog from "./ConsultationDialog";

const Hero = () => {
  const [consultOpen, setConsultOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-coral/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/10 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 mb-8"
          >
            <Sparkles size={16} className="text-coral" />
            <span className="text-sm font-medium text-muted-foreground">Best Digital Marketing Company in Vizag</span>
          </motion.div>

          <motion.img
            src={logo}
            alt="NxtEra Media"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-36 md:h-48 w-auto mx-auto mb-6"
          />

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-6">
            Grow Your Business,{" "}
            <span className="gradient-text">Digitally</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
          >
            Digital Marketing, Simplified. We don't just market — we transform businesses into brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="gradient-bg text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-all glow-coral group"
            >
              Contact Us
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => setConsultOpen(true)}
              className="glass-card px-8 py-4 rounded-xl font-semibold text-lg text-foreground hover:bg-muted/50 transition-all"
            >
              Free Consultation
            </button>
          </motion.div>

          <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
        </motion.div>

        {/* Floating service tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-3 mt-16 max-w-3xl mx-auto"
        >
          {["SEO", "Social Media", "Web Design", "Content Marketing", "Graphic Design", "PPC Ads"].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="glass-card px-4 py-2 text-sm text-muted-foreground font-medium animate-float"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-coral rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
