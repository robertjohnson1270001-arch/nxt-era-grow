import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Search, Share2, Globe, FileText, Palette, MousePointerClick, BarChart3, Megaphone, ChevronDown,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO",
    desc: "Rank higher on search engines and drive organic traffic to your business.",
    details: [
      "On-page & off-page optimization",
      "Technical SEO audits & fixes",
      "Keyword research & competitor analysis",
      "Local SEO & Google Business Profile",
      "Link building & digital PR",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build your brand presence across all major social platforms.",
    details: [
      "Content calendar & strategy",
      "Community management & engagement",
      "Paid social campaigns (Meta, LinkedIn)",
      "Influencer marketing & collaborations",
      "Social analytics & reporting",
    ],
  },
  {
    icon: Globe,
    title: "Website Designing",
    desc: "Stunning, responsive websites that convert visitors into customers.",
    details: [
      "Custom UI/UX design",
      "Mobile-first responsive development",
      "E-commerce website solutions",
      "Landing page design & optimization",
      "Website maintenance & support",
    ],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    desc: "Engaging content that tells your story and builds authority.",
    details: [
      "Blog writing & article creation",
      "Video content & scriptwriting",
      "Infographics & visual content",
      "Email newsletters & drip campaigns",
      "Content strategy & editorial planning",
    ],
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    desc: "Eye-catching visuals that make your brand unforgettable.",
    details: [
      "Logo & brand identity design",
      "Social media creatives & templates",
      "Marketing collateral (brochures, flyers)",
      "Packaging & merchandise design",
      "Motion graphics & animations",
    ],
  },
  {
    icon: MousePointerClick,
    title: "PPC Advertising",
    desc: "Targeted paid campaigns that maximize your ROI.",
    details: [
      "Google Ads (Search, Display, Shopping)",
      "Meta & Instagram ad campaigns",
      "Remarketing & retargeting funnels",
      "A/B testing & conversion optimization",
      "Budget management & ROAS tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing Strategy",
    desc: "Data-driven strategies tailored to your business goals.",
    details: [
      "Market research & audience analysis",
      "Competitor benchmarking",
      "Multi-channel marketing plans",
      "KPI setting & performance dashboards",
      "Quarterly strategy reviews & pivots",
    ],
  },
  {
    icon: Megaphone,
    title: "Brand Building",
    desc: "Transform your business identity into a powerful brand.",
    details: [
      "Brand positioning & messaging",
      "Visual identity & style guides",
      "Brand voice & tone development",
      "Reputation management",
      "Brand launch & awareness campaigns",
    ],
  },
];

const ServiceCard = ({ service, i, isInView }: { service: typeof services[0]; i: number; isInView: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="glass-card group hover:border-coral/40 transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-6 text-left flex items-start gap-4"
      >
        <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
          <service.icon size={22} className="text-primary-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display font-semibold text-foreground mb-1">{service.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 mt-1"
        >
          <ChevronDown size={18} className="text-muted-foreground" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-border/50 pt-4">
                <ul className="space-y-2">
                  {service.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.25 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

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

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
