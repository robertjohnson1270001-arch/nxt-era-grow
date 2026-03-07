import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Allu Hemanth Prem Kumar",
    role: "CEO, Skill Coders",
    website: "skillcoders.com",
    text: "NxtEra Media transformed our online presence completely. Our organic traffic increased by 300% in just 6 months. Highly recommended!",
  },
  {
    name: "Priya Sharma",
    role: "Founder, Coastal Boutique",
    text: "The social media strategy they designed for us was exceptional. We saw real engagement and our sales doubled within the first quarter.",
  },
  {
    name: "Anil Reddy",
    role: "Director, EduSphere Academy",
    text: "Professional, creative, and result-oriented. NxtEra Media helped us reach students across India with their digital marketing expertise.",
  },
  {
    name: "Meera Patel",
    role: "Owner, Spice Garden Restaurant",
    text: "From website design to Google Ads, they handled everything perfectly. Our restaurant bookings have increased significantly.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            What Our Clients{" "}
            <span className="gradient-text">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass-card p-8 md:p-12 relative"
        >
          <Quote size={48} className="text-coral/20 absolute top-6 left-6" />

          <div className="text-center relative z-10">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-coral text-coral" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
              "{testimonials[current].text}"
            </p>

            <h4 className="font-display font-semibold text-foreground">{testimonials[current].name}</h4>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </div>

          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-coral/50 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-coral w-6" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-coral/50 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
