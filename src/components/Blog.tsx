import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Clock, ChevronDown, Search, Share2, MousePointerClick, Palette, CheckCircle2 } from "lucide-react";

const blogs = [
  {
    title: "10 SEO Strategies That Will Boost Your Rankings in 2026",
    excerpt: "Discover the latest SEO techniques that top-ranking websites are using to dominate search results.",
    category: "SEO",
    date: "Mar 5, 2026",
    icon: Search,
    points: [
      "Master keyword research with AI-powered tools",
      "Optimize Core Web Vitals for better page experience",
      "Build high-quality backlinks through digital PR",
      "Leverage structured data & schema markup",
      "Create E-E-A-T compliant content strategies",
      "Voice search optimization for smart assistants",
    ],
    description:
      "Search Engine Optimization remains the backbone of organic digital growth. In 2026, Google's algorithms prioritize user experience, content depth, and topical authority. This guide covers actionable strategies — from technical SEO audits to advanced link-building — that can help your business climb to page one and stay there.",
  },
  {
    title: "How Social Media Marketing Can 10x Your Brand Visibility",
    excerpt: "Learn how strategic social media campaigns can exponentially grow your audience and engagement.",
    category: "Social Media",
    date: "Mar 2, 2026",
    icon: Share2,
    points: [
      "Platform-specific content strategies (Reels, Shorts, Carousels)",
      "Community building & engagement tactics",
      "Influencer collaboration frameworks",
      "Social commerce & shoppable posts",
      "Analytics-driven posting schedules",
      "Crisis management & brand reputation",
    ],
    description:
      "Social media isn't just about posting — it's about building relationships at scale. With over 4.9 billion social media users worldwide, a well-crafted SMM strategy can transform your brand's visibility, drive traffic, and generate qualified leads. Learn how NxtEra Media creates viral-worthy campaigns that deliver measurable ROI.",
  },
  {
    title: "The Complete Guide to PPC Advertising for Small Businesses",
    excerpt: "Maximize your ad spend with our comprehensive guide to running profitable PPC campaigns.",
    category: "PPC",
    date: "Feb 28, 2026",
    icon: MousePointerClick,
    points: [
      "Google Ads campaign structure & bidding strategies",
      "Audience targeting & remarketing funnels",
      "A/B testing ad creatives for maximum CTR",
      "Landing page optimization for conversions",
      "Budget allocation & ROAS tracking",
      "Performance Max & Smart campaigns explained",
    ],
    description:
      "Pay-Per-Click advertising delivers instant visibility and measurable results. Whether you're running Google Ads, Meta Ads, or LinkedIn campaigns, understanding bid strategies, quality scores, and conversion tracking is critical. This guide breaks down everything a small business needs to launch profitable paid campaigns from day one.",
  },
  {
    title: "Why Great Graphic Design Is Your Brand's Secret Weapon",
    excerpt: "Explore how professional design elevates brand perception and drives customer trust.",
    category: "Graphic Design",
    date: "Feb 25, 2026",
    icon: Palette,
    points: [
      "Building a consistent visual identity system",
      "Psychology of colors, fonts & layout in branding",
      "Social media graphics that stop the scroll",
      "Print vs digital design best practices",
      "Motion graphics & video thumbnails",
      "Packaging & merchandise design trends",
    ],
    description:
      "First impressions are visual. A strong graphic design language sets your brand apart in a crowded market. From logo design and brand guidelines to social media creatives and marketing collateral, professional design communicates credibility, builds trust, and makes your messaging unforgettable.",
  },
];

const BlogCard = ({ blog, i, isInView }: { blog: typeof blogs[0]; i: number; isInView: boolean }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = blog.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotateX: 5 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
      className="glass-card overflow-hidden group cursor-pointer hover:border-coral/40 transition-all duration-300 hover:-translate-y-1"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="h-48 gradient-bg opacity-30 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: expanded ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Icon size={64} className="text-foreground/10" />
        </motion.div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-semibold text-coral bg-coral/10 px-2.5 py-1 rounded-full">
            {blog.category}
          </span>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Clock size={12} /> {blog.date}
          </span>
        </div>
        <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-coral transition-colors">
          {blog.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{blog.excerpt}</p>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{blog.description}</p>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-coral mb-3">Key Takeaways</h4>
                <ul className="space-y-2">
                  {blog.points.map((point, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06, duration: 0.3 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 size={14} className="text-coral mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1 text-coral text-sm font-medium group-hover:gap-2 transition-all">
            Read More <ArrowRight size={14} />
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={16} className="text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral text-sm font-semibold uppercase tracking-widest">Blog</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Latest{" "}
            <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Expert tips, strategies, and case studies to help you stay ahead in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.title} blog={blog} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
