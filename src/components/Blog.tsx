import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const blogs = [
  {
    title: "10 SEO Strategies That Will Boost Your Rankings in 2026",
    excerpt: "Discover the latest SEO techniques that top-ranking websites are using to dominate search results.",
    category: "SEO",
    date: "Mar 5, 2026",
  },
  {
    title: "How Social Media Marketing Can 10x Your Brand Visibility",
    excerpt: "Learn how strategic social media campaigns can exponentially grow your audience and engagement.",
    category: "Social Media",
    date: "Mar 2, 2026",
  },
  {
    title: "The Complete Guide to PPC Advertising for Small Businesses",
    excerpt: "Maximize your ad spend with our comprehensive guide to running profitable PPC campaigns.",
    category: "PPC",
    date: "Feb 28, 2026",
  },
];

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
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card overflow-hidden group cursor-pointer hover:border-coral/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 gradient-bg opacity-30 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-display font-bold text-foreground/10">NM</span>
                </div>
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
                <div className="mt-4 flex items-center gap-1 text-coral text-sm font-medium group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
